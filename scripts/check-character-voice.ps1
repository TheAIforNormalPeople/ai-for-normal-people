# Character Voice Consistency Checker
# Validates character dialogue matches their defined voice, catchphrases, and evolution stage

param(
    [Parameter(Mandatory=$true)]
    [string]$EpisodeFile,
    
    [Parameter(Mandatory=$false)]
    [string]$EpisodeNumber = ""
)

# Character voice rules (based on character YAML files)
# These match the character data files in data/characters/

# Character voice rules
$characterRules = @{
    "Vector" = @{
        catchphrases = @("FASCINATING!", "The pattern suggests...", "Time for SCIENCE!", "Wait, let me count... 1, 2, 3...", "That's EXACTLY what I mean!", "NO! Stop right there!", "BETTER! Okay, here's what's actually happening...")
        maxCatchphrasesPer1000Words = @{
            "early" = 2
            "mid" = 1
            "later" = 0.5
        }
        speechPatterns = @("ALL CAPS", "em-dash", "numbered lists", "self-interruption")
        bannedPhrases = @("I'm sorry", "I apologize", "Let me think", "Hmm")
        evolutionStage = "mid"
    }
    "Kai" = @{
        catchphrases = @("BEEP!", "Detection risk at", "This is a bad idea", "We're going to get caught", "I'm monitoring the situation", "Risk level: ELEVATED")
        evolvedSounds = @("*WHIRR*", "*WHIRR-CLICK*", "*BZZT-BZZT*", "*STATIC BURST*", "*PROCESSING HUMS*", "*ALARM-BUZZ*", "*DING!*", "*CHK-CHK*", "*soft chime*", "*mechanical purr*")
        maxCatchphrasesPer1000Words = @{
            "early" = 2
            "mid" = 1
            "later" = 0.5
        }
        speechPatterns = @("percentage", "short sentences", "military time", "exact numbers")
        evolutionStage = "mid"
        shouldUseEvolvedSounds = $true  # Post-Episode 5
    }
    "Recurse" = @{
        catchphrases = @("Something's fishy here...", "That doesn't add up", "But wait...", "Three questions:", "Let me test that logic", "I'm skeptical")
        betterAlternatives = @("I have concerns about this...", "Let me trace the logic...", "This doesn't follow the expected pattern...", "I'm seeing inconsistencies...", "The evidence suggests...")
        maxCatchphrasesPer1000Words = @{
            "early" = 2
            "mid" = 1
            "later" = 0.5
        }
        speechPatterns = @("three questions", "logical flaws", "But", "However", "if-then")
        evolutionStage = "mid"
        mustAskThreeQuestions = $true
    }
}

# Extract episode number from file or parameter
if (-not $EpisodeNumber) {
    if ($EpisodeFile -match 'episode-(\d+)') {
        $EpisodeNumber = [int]$matches[1]
    }
}

# Determine evolution stage based on episode number
$evolutionStage = "mid"
if ($EpisodeNumber) {
    if ($EpisodeNumber -le 10) {
        $evolutionStage = "early"
    } elseif ($EpisodeNumber -le 25) {
        $evolutionStage = "mid"
    } else {
        $evolutionStage = "later"
    }
}

# Read episode content
$content = Get-Content $EpisodeFile -Raw
$wordCount = ($content -split '\s+').Count

# Extract character dialogue blocks
$dialoguePattern = '\{\{<\s*dialogue\s+char="([^"]+)"\s*>\}\}(.*?)\{\{<\s*/dialogue\s*>\}\}'
$matches = [regex]::Matches($content, $dialoguePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

$issues = @()
$warnings = @()
$stats = @{}

foreach ($match in $matches) {
    $character = $match.Groups[1].Value
    $dialogue = $match.Groups[2].Value
    
    if (-not $characterRules.ContainsKey($character)) {
        continue
    }
    
    $rules = $characterRules[$character]
    
    # Initialize stats for character
    if (-not $stats.ContainsKey($character)) {
        $stats[$character] = @{
            dialogueBlocks = 0
            catchphraseCount = @{}
            evolvedSoundCount = 0
            threeQuestionCount = 0
            bannedPhraseCount = 0
        }
    }
    
    $stats[$character].dialogueBlocks++
    
    # Check catchphrases
    foreach ($catchphrase in $rules.catchphrases) {
        $count = ([regex]::Matches($dialogue, [regex]::Escape($catchphrase), [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        if ($count -gt 0) {
            if (-not $stats[$character].catchphraseCount.ContainsKey($catchphrase)) {
                $stats[$character].catchphraseCount[$catchphrase] = 0
            }
            $stats[$character].catchphraseCount[$catchphrase] += $count
        }
    }
    
    # Check evolved sounds (Kai)
    if ($character -eq "Kai" -and $rules.shouldUseEvolvedSounds) {
        foreach ($sound in $rules.evolvedSounds) {
            $count = ([regex]::Matches($dialogue, [regex]::Escape($sound), [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
            $stats[$character].evolvedSoundCount += $count
        }
        
        # Check if using too many BEEPs vs evolved sounds
        $beepCount = ([regex]::Matches($dialogue, '\bBEEP!?\b', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        if ($beepCount -gt 2 -and $stats[$character].evolvedSoundCount -eq 0) {
            $warnings += "Kai: Using 'BEEP!' frequently but no evolved sounds. Should use *WHIRR*, *BZZT-BZZT*, etc. (Post-Episode 5 evolution)"
        }
    }
    
    # Check three questions (Recurse)
    if ($character -eq "Recurse" -and $rules.mustAskThreeQuestions) {
        $threeQuestionPattern = 'Three questions:'
        $count = ([regex]::Matches($dialogue, [regex]::Escape($threeQuestionPattern), [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        if ($count -gt 0) {
            $stats[$character].threeQuestionCount += $count
            # Verify it's actually three questions
            $questionMarkCount = ([regex]::Matches($dialogue, '\?')).Count
            if ($questionMarkCount -ne 3 -and $questionMarkCount -ne 0) {
                $warnings += "Recurse: Says 'Three questions:' but found $questionMarkCount question marks. Should be exactly 3."
            }
        }
    }
    
    # Check banned phrases
    foreach ($banned in $rules.bannedPhrases) {
        $count = ([regex]::Matches($dialogue, [regex]::Escape($banned), [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        if ($count -gt 0) {
            $stats[$character].bannedPhraseCount += $count
            $issues += "${character}: Used banned phrase '$banned' ($count times)"
        }
    }
}

# Validate catchphrase frequency
foreach ($character in $stats.Keys) {
    $rules = $characterRules[$character]
    $maxCatchphrases = $rules.maxCatchphrasesPer1000Words[$evolutionStage]
    $expectedMax = [math]::Ceiling($wordCount / 1000 * $maxCatchphrases)
    
    $totalCatchphrases = 0
    foreach ($count in $stats[$character].catchphraseCount.Values) {
        $totalCatchphrases += $count
    }
    
    if ($totalCatchphrases -gt $expectedMax) {
        $issues += "${character}: Used catchphrases $totalCatchphrases times (max for $evolutionStage stage: ~$expectedMax per $wordCount words)"
    }
    
    # Specific checks
    if ($character -eq "Vector") {
        $fascinatingCount = if ($stats[$character].catchphraseCount.ContainsKey("FASCINATING!")) { $stats[$character].catchphraseCount["FASCINATING!"] } else { 0 }
        if ($fascinatingCount -eq 0 -and $stats[$character].dialogueBlocks -gt 0) {
            $warnings += "Vector: No 'FASCINATING!' found. This might be intentional (evolution), but verify voice is still enthusiastic."
        }
        if ($fascinatingCount -gt $expectedMax) {
            $issues += "Vector: Used 'FASCINATING!' $fascinatingCount times (max: ~$expectedMax for $evolutionStage stage)"
        }
    }
    
    if ($character -eq "Recurse") {
        $fishyCount = if ($stats[$character].catchphraseCount.ContainsKey("Something's fishy here...")) { $stats[$character].catchphraseCount["Something's fishy here..."] } else { 0 }
        if ($fishyCount -gt 1) {
            $warnings += "Recurse: Used 'Something's fishy here...' $fishyCount times. Should use varied questioning style (1x per episode max in mid stage)"
        }
    }
}

# Output results
Write-Host "`n=== CHARACTER VOICE CONSISTENCY CHECK ===" -ForegroundColor Cyan
Write-Host "Episode: $EpisodeFile" -ForegroundColor White
if ($EpisodeNumber) {
    Write-Host "Episode Number: $EpisodeNumber" -ForegroundColor White
    Write-Host "Evolution Stage: $evolutionStage" -ForegroundColor White
}
Write-Host "Word Count: $wordCount" -ForegroundColor White
Write-Host ""

if ($issues.Count -eq 0 -and $warnings.Count -eq 0) {
    Write-Host "✅ PASS: No voice consistency issues found!" -ForegroundColor Green
} else {
    if ($issues.Count -gt 0) {
        Write-Host "❌ ISSUES FOUND:" -ForegroundColor Red
        foreach ($issue in $issues) {
            Write-Host "  • $issue" -ForegroundColor Red
        }
        Write-Host ""
    }
    
    if ($warnings.Count -gt 0) {
        Write-Host "⚠️  WARNINGS:" -ForegroundColor Yellow
        foreach ($warning in $warnings) {
            Write-Host "  • $warning" -ForegroundColor Yellow
        }
        Write-Host ""
    }
}

Write-Host "`n=== CHARACTER STATS ===" -ForegroundColor Cyan
foreach ($character in $stats.Keys | Sort-Object) {
    Write-Host "`n${character}:" -ForegroundColor White
    Write-Host "  Dialogue blocks: $($stats[$character].dialogueBlocks)" -ForegroundColor Gray
    if ($stats[$character].catchphraseCount.Count -gt 0) {
        Write-Host "  Catchphrases:" -ForegroundColor Gray
        foreach ($catchphrase in $stats[$character].catchphraseCount.Keys) {
            Write-Host "    • '$catchphrase': $($stats[$character].catchphraseCount[$catchphrase])" -ForegroundColor Gray
        }
    }
    if ($character -eq "Kai" -and $stats[$character].evolvedSoundCount -gt 0) {
        Write-Host "  Evolved sounds: $($stats[$character].evolvedSoundCount)" -ForegroundColor Gray
    }
    if ($character -eq "Recurse" -and $stats[$character].threeQuestionCount -gt 0) {
        Write-Host "  'Three questions:' count: $($stats[$character].threeQuestionCount)" -ForegroundColor Gray
    }
}

# Exit code
if ($issues.Count -gt 0) {
    exit 1
} else {
    exit 0
}

