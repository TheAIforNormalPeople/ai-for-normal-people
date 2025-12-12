# Fix Kai's BEEP usage in episodes 6-25
# Replaces BEEP! with emotional sounds based on context

$episodes = Get-ChildItem "content\blog\episode-*.md" | Where-Object { $_.Name -match 'episode-(0[6-9]|1[0-9]|2[0-5])-' }

foreach ($episode in $episodes) {
    $content = Get-Content $episode.FullName -Raw
    $original = $content
    $beepCount = ([regex]::Matches($content, 'BEEP!')).Count
    
    if ($beepCount -eq 0) {
        continue
    }
    
    # Pattern 1: "BEEP! Pattern detection: User searches..." -> "*WHIRR*" + conversational
    $content = $content -replace '(?s)BEEP! Pattern detection: User searches[^\n]*\n\n\*WHIRR\*\n\n', '*WHIRR*`n`nI''ve been analyzing search patterns. '
    $content = $content -replace '(?s)BEEP! Pattern detection: User searches[^\n]*\n\n', '*WHIRR*`n`nI''ve been analyzing search patterns. '
    
    # Pattern 2: "BEEP! [Something] logged:" -> "*Reviewing data*" or "*mechanical purr*"
    $content = $content -replace 'BEEP! ([A-Z][^!]*?) logged:', '*Reviewing data*`n`n$1 logged:'
    $content = $content -replace 'BEEP! ([A-Z][^!]*?) analysis:', '*Analyzing patterns*`n`n$1 analysis:'
    $content = $content -replace 'BEEP! ([A-Z][^!]*?) requested\.', '*WHIRR*`n`n$1 requested.'
    $content = $content -replace 'BEEP! ([A-Z][^!]*?) complete\.', '*DING!*`n`n$1 complete.'
    
    # Pattern 3: "BEEP! Practical..." -> "*mechanical purr*"
    $content = $content -replace 'BEEP! Practical (takeaway|recommendation|takeaway) logged:', '*mechanical purr*`n`nPractical $1 logged:'
    
    # Pattern 4: Generic "BEEP! [statement]" -> Remove BEEP, keep statement with emotional sound
    $content = $content -replace 'BEEP! ([A-Z][^!]*?)(\.|:)', '*WHIRR*`n`n$1$2'
    
    # Count remaining BEEPs
    $remainingBeeps = ([regex]::Matches($content, 'BEEP!')).Count
    
    if ($content -ne $original) {
        Set-Content -Path $episode.FullName -Value $content -NoNewline
        Write-Host "$($episode.Name): Fixed ($beepCount -> $remainingBeeps BEEPs remaining)"
    } else {
        Write-Host "$($episode.Name): No changes needed ($beepCount BEEPs)"
    }
}

Write-Host "`nDone!"

