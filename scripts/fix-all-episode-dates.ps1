# Fix all episode dates starting from Episode 7 (Dec 12, 2025)
$startDate = [DateTime]"2025-12-12 09:00:00"

Write-Host "Fixing episode dates starting from Dec 12, 2025..."
Write-Host "================================================"

# Episodes 7-25: Daily from Dec 12 to Dec 30
for ($epNum = 7; $epNum -le 25; $epNum++) {
    $epNumStr = $epNum.ToString().PadLeft(2, '0')
    $files = Get-ChildItem "content\blog\episode-$epNumStr-*.md" -ErrorAction SilentlyContinue
    
    if ($files) {
        $file = $files[0]
        $content = Get-Content $file.FullName -Raw
        $daysOffset = $epNum - 7
        $newDate = $startDate.AddDays($daysOffset)
        $dateStr = $newDate.ToString("yyyy-MM-ddTHH:mm:ss-05:00")
        
        # Fix date
        $content = $content -replace 'date:\s*\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}', "date: $dateStr"
        
        # Ensure Episode 7 is draft: true (for GitHub Actions to publish)
        if ($epNum -eq 7) {
            $content = $content -replace 'draft:\s*(true|false)', 'draft: true'
        }
        
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Episode $epNum : $dateStr"
    }
}

# Episodes 26-50: Daily from Jan 1 to Jan 25, 2026
$startDate2026 = [DateTime]"2026-01-01 09:00:00"

for ($epNum = 26; $epNum -le 50; $epNum++) {
    $epNumStr = $epNum.ToString().PadLeft(2, '0')
    $files = Get-ChildItem "content\blog\episode-$epNumStr-*.md" -ErrorAction SilentlyContinue
    
    if ($files) {
        $file = $files[0]
        $content = Get-Content $file.FullName -Raw
        $daysOffset = $epNum - 26
        $newDate = $startDate2026.AddDays($daysOffset)
        $dateStr = $newDate.ToString("yyyy-MM-ddTHH:mm:ss-05:00")
        
        # Fix date
        $content = $content -replace 'date:\s*\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}', "date: $dateStr"
        
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Episode $epNum : $dateStr"
    }
}

Write-Host "`nDone! All episodes fixed."

