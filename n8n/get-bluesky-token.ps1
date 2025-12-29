# Get Bluesky Session Token
# Replace these values:
$handle = "thenormalpeople.bsky.social"
$appPassword = "euit-mgnm-ty5q-twvv"

$body = @{
    identifier = $handle
    password = $appPassword
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://bsky.social/xrpc/com.atproto.server.createSession" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body

Write-Host "`n=== BLUESKY SESSION TOKEN ===" -ForegroundColor Green
Write-Host "`nCopy this token:" -ForegroundColor Yellow
Write-Host $response.accessJwt -ForegroundColor Cyan
Write-Host "`nThis token expires after some time. You'll need to regenerate it." -ForegroundColor White

