# Context Verification Script
# Checks if all required context files are present and up-to-date

Write-Host "=== AI for Normal People - Context Verification ===" -ForegroundColor Cyan
Write-Host ""

$rootPath = Split-Path -Parent $PSScriptRoot
$errors = @()
$warnings = @()

# Core files that must exist
$requiredFiles = @(
    @{Path = "CURRENT_STATE.md"; Description = "Single source of truth for project state"},
    @{Path = ".cursorrules"; Description = "Character rules and workflow (auto-loads)"},
    @{Path = "MULTI_AI_COLLABORATION_SYSTEM.md"; Description = "AI collaboration workflow"},
    @{Path = "START_HERE.md"; Description = "Entry point for new chats"},
    @{Path = "CONTEXT_LOADING_CHECKLIST.md"; Description = "Context loading checklist"},
    @{Path = "docs/logs/AI_HANDOFF_LOG.md"; Description = "Work tracking log"},
    @{Path = "docs/ORGANIZATION_INDEX.md"; Description = "Master file index"}
)

Write-Host "Checking required files..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $rootPath $file.Path
    if (Test-Path $fullPath) {
        Write-Host "  ✓ $($file.Path)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $($file.Path) - MISSING" -ForegroundColor Red
        $errors += "Missing: $($file.Path) - $($file.Description)"
    }
}

Write-Host ""
Write-Host "Checking CURRENT_STATE.md content..." -ForegroundColor Yellow
Write-Host ""

$currentStatePath = Join-Path $rootPath "CURRENT_STATE.md"
if (Test-Path $currentStatePath) {
    $content = Get-Content $currentStatePath -Raw
    
    # Check for key sections
    $requiredSections = @(
        "CURRENT POSITION",
        "EPISODE STATUS",
        "STORY STATE",
        "IMMEDIATE PRIORITIES"
    )
    
    foreach ($section in $requiredSections) {
        if ($content -match $section) {
            Write-Host "  ✓ Section found: $section" -ForegroundColor Green
        } else {
            Write-Host "  ⚠ Section missing: $section" -ForegroundColor Yellow
            $warnings += "CURRENT_STATE.md missing section: $section"
        }
    }
    
    # Check last updated date
    if ($content -match "Last Updated: (\d{4}-\d{2}-\d{2})") {
        $lastUpdated = $matches[1]
        $lastUpdatedDate = [DateTime]::ParseExact($lastUpdated, "yyyy-MM-dd", $null)
        $daysSinceUpdate = (Get-Date) - $lastUpdatedDate
        
        if ($daysSinceUpdate.Days -gt 7) {
            Write-Host "  ⚠ Last updated: $lastUpdated ($($daysSinceUpdate.Days) days ago)" -ForegroundColor Yellow
            $warnings += "CURRENT_STATE.md not updated in $($daysSinceUpdate.Days) days"
        } else {
            Write-Host "  ✓ Last updated: $lastUpdated ($($daysSinceUpdate.Days) days ago)" -ForegroundColor Green
        }
    } else {
        Write-Host "  ⚠ Could not find last updated date" -ForegroundColor Yellow
        $warnings += "CURRENT_STATE.md missing last updated date"
    }
}

Write-Host ""
Write-Host "Checking AI_HANDOFF_LOG.md..." -ForegroundColor Yellow
Write-Host ""

$handoffLogPath = Join-Path $rootPath "docs/logs/AI_HANDOFF_LOG.md"
if (Test-Path $handoffLogPath) {
    $logContent = Get-Content $handoffLogPath -Raw
    
    # Check for recent entries (last 7 days)
    if ($logContent -match "(\d{4}-\d{2}-\d{2})") {
        $dates = [regex]::Matches($logContent, "(\d{4}-\d{2}-\d{2})") | ForEach-Object { $_.Value }
        $latestDate = $dates | Sort-Object -Descending | Select-Object -First 1
        $latestDateObj = [DateTime]::ParseExact($latestDate, "yyyy-MM-dd", $null)
        $daysSinceLog = (Get-Date) - $latestDateObj
        
        if ($daysSinceLog.Days -gt 7) {
            Write-Host "  ⚠ Last log entry: $latestDate ($($daysSinceLog.Days) days ago)" -ForegroundColor Yellow
            $warnings += "AI_HANDOFF_LOG.md not updated in $($daysSinceLog.Days) days"
        } else {
            Write-Host "  ✓ Last log entry: $latestDate ($($daysSinceLog.Days) days ago)" -ForegroundColor Green
        }
    } else {
        Write-Host "  ⚠ No date entries found in handoff log" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host ""

if ($errors.Count -eq 0 -and $warnings.Count -eq 0) {
    Write-Host "✓ All context files present and up-to-date!" -ForegroundColor Green
    exit 0
} else {
    if ($errors.Count -gt 0) {
        Write-Host "✗ ERRORS ($($errors.Count)):" -ForegroundColor Red
        foreach ($error in $errors) {
            Write-Host "  - $error" -ForegroundColor Red
        }
        Write-Host ""
    }
    
    if ($warnings.Count -gt 0) {
        Write-Host "⚠ WARNINGS ($($warnings.Count)):" -ForegroundColor Yellow
        foreach ($warning in $warnings) {
            Write-Host "  - $warning" -ForegroundColor Yellow
        }
    }
    
    exit 1
}
