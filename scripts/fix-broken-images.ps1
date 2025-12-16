# Fix Broken Image References
# Comments out image: lines in frontmatter for episodes where images don't exist

$episodes = @(
    "episode-04-the-synthetic-data-feedback-loop.md",
    "episode-05-the-accidental-save.md",
    "episode-08-what-are-ai-hallucinations-why-they-happen.md",
    "episode-09-how-to-write-better-chatgpt-prompts.md",
    "episode-10-can-ai-replace-my-job-honest-answer.md",
    "episode-11-how-to-detect-ai-written-content.md",
    "episode-13-how-to-use-ai-without-losing-skills.md",
    "episode-14-what-are-ai-tokens-why-they-matter.md",
    "episode-15-how-does-ai-learn-from-data.md"
)

foreach ($ep in $episodes) {
    $path = "content/blog/$ep"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -match '(?m)^image:\s*"([^"]+)"') {
            $imgPath = $matches[1]
            $imgExists = Test-Path "static$imgPath"
            
            if (-not $imgExists) {
                Write-Host "Fixing: $ep - Image doesn't exist: $imgPath" -ForegroundColor Yellow
                $newContent = $content -replace '(?m)^(image:\s*"[^"]+")', '# $1  # TODO: Add episode-specific image when ready'
                Set-Content -Path $path -Value $newContent -NoNewline
                Write-Host "  ✅ Fixed" -ForegroundColor Green
            } else {
                Write-Host "Skipping: $ep - Image exists: $imgPath" -ForegroundColor Gray
            }
        }
    }
}

Write-Host "`nDone! All broken image references have been commented out." -ForegroundColor Cyan

