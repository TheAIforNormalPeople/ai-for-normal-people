# Update episodes 6-25 to daily publishing schedule
# Starting December 12, 2025 (tomorrow)

$startDate = Get-Date "2025-12-12"
$episodes = Get-ChildItem "content\blog\episode-*.md" | Where-Object { $_.Name -match 'episode-(0[6-9]|1[0-9]|2[0-5])-' } | Sort-Object Name

$episodeNum = 6
foreach ($episode in $episodes) {
    $publishDate = $startDate.AddDays($episodeNum - 6)
    $dateStr = $publishDate.ToString("yyyy-MM-dd") + "T09:00:00-05:00"
    
    $content = Get-Content $episode.FullName -Raw
    
    # Update the date line
    $content = $content -replace 'date: \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[^\n]*', "date: $dateStr"
    
    Set-Content -Path $episode.FullName -Value $content -NoNewline
    
    Write-Host "Episode $episodeNum : $dateStr ($($publishDate.DayOfWeek))"
    
    $episodeNum++
}

Write-Host "`nDone! Updated all episodes to daily schedule starting tomorrow."


