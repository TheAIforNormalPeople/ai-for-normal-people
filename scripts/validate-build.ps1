# Validate Hugo Build Before Commit
# Checks for common errors that break Netlify builds

Write-Host "🔍 Validating Hugo site before commit..." -ForegroundColor Cyan
Write-Host ""

$errors = 0

# Check 1: YAML inline comments
Write-Host "Checking YAML files for inline comments..." -ForegroundColor Yellow
Get-ChildItem -Path "data/characters" -Filter "*.yaml" -ErrorAction SilentlyContinue | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Check for inline comments after list items (pattern: - "text" # comment)
    if ($content -match '(?m)^\s+-\s+[^#]*"[^"]*"\s+#[^-]') {
        Write-Host "  ❌ $($_.Name): Inline comment found after list item" -ForegroundColor Red
        Write-Host "     Move comments to separate lines above list items" -ForegroundColor Yellow
        $errors++
    }
}

if ($errors -eq 0) {
    Write-Host "  ✅ YAML files valid" -ForegroundColor Green
}

# Check 2: Hugo build
Write-Host ""
Write-Host "Testing Hugo build..." -ForegroundColor Yellow

$hugoOutput = & hugo --gc --minify --buildFuture 2>&1
$buildSuccess = $LASTEXITCODE -eq 0

if (-not $buildSuccess) {
    Write-Host "  ❌ Hugo build failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Build errors:" -ForegroundColor Red
    $hugoOutput | Select-String -Pattern "ERROR|error|failed" | ForEach-Object {
        Write-Host "  $_" -ForegroundColor Red
    }
    $errors++
} else {
    Write-Host "  ✅ Hugo build successful" -ForegroundColor Green
}

# Check 3: Episode frontmatter
Write-Host ""
Write-Host "Checking episode frontmatter..." -ForegroundColor Yellow
$episodeErrors = 0
Get-ChildItem -Path "content/blog" -Filter "episode-*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -notmatch 'type:\s*"episode"') {
        Write-Host "  ⚠️  $($_.Name): Missing type: episode" -ForegroundColor Yellow
        $episodeErrors++
    }
    if ($content -notmatch 'episode_number:') {
        Write-Host "  ⚠️  $($_.Name): Missing episode_number" -ForegroundColor Yellow
        $episodeErrors++
    }
}

if ($episodeErrors -eq 0) {
    Write-Host "  ✅ Episode frontmatter valid" -ForegroundColor Green
}

# Summary
Write-Host ""
if ($errors -gt 0) {
    Write-Host "❌ Validation failed with $errors error(s)" -ForegroundColor Red
    Write-Host "Fix errors before committing!" -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "✅ All validation checks passed!" -ForegroundColor Green
    Write-Host "Safe to commit and push." -ForegroundColor Green
    exit 0
}

