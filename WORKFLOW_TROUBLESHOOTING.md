# Daily Publish Workflow Troubleshooting

**Issue:** Episodes not auto-publishing even though workflow is set up

---

## 🔍 How to Check if Workflow Ran

### 1. Check GitHub Actions
1. Go to: `https://github.com/TheAIforNormalPeople/ai-for-normal-people/actions`
2. Look for "Daily Publish Check" workflow
3. Check if it ran today
4. Click on the run to see logs

### 2. Check Workflow Logs
Look for:
- "Today's date (UTC): [date]"
- "Checking: [episode file]"
- "Extracted date: [date]"
- "✅ MATCH! Published: [file]" or "⏭️ No match"

---

## 🐛 Common Issues

### Issue 1: Workflow Didn't Run
**Symptoms:** No workflow run in GitHub Actions for today

**Possible Causes:**
- GitHub Actions might be disabled
- Workflow file has syntax errors
- Repository settings block workflows

**Fix:**
1. Check repository settings → Actions → Allow workflows
2. Check workflow file syntax
3. Manually trigger: Actions → Daily Publish Check → Run workflow

---

### Issue 2: Date Mismatch
**Symptoms:** Workflow runs but says "No match"

**Problem:** Timezone difference
- Workflow runs at 2pm UTC (9am EST)
- Episode dates are in EST (-05:00)
- Date extraction might not match

**Example:**
- Episode date: `2025-12-16T09:00:00-05:00` (Dec 16, 9am EST)
- Workflow runs: Dec 16, 2pm UTC (9am EST)
- Should match, but might not if date extraction fails

**Fix:**
The workflow extracts date as `YYYY-MM-DD` from the date line. This should work, but let's verify:
- Episode date line: `date: 2025-12-16T09:00:00-05:00`
- Extracted: `2025-12-16`
- Today (UTC): `2025-12-16`
- Should match! ✅

---

### Issue 3: Workflow Ran But Didn't Commit
**Symptoms:** Workflow shows "MATCH! Published" but episode still draft

**Possible Causes:**
- Git permissions issue
- Commit failed silently
- Push failed

**Fix:**
1. Check workflow logs for commit/push errors
2. Verify `contents: write` permission is set
3. Check if there were merge conflicts

---

### Issue 4: Workflow Runs at Wrong Time
**Symptoms:** Episode should publish at 9am EST but workflow runs at different time

**Current Schedule:**
- Cron: `0 14 * * *` = 2pm UTC
- 2pm UTC = 9am EST (in winter) ✅
- 2pm UTC = 10am EDT (in summer) ⚠️

**Fix:**
If you're in daylight saving time (EDT), the workflow runs at 10am, not 9am. Either:
- Change cron to `0 13 * * *` (1pm UTC = 9am EDT)
- Or adjust episode publish times to 10am EDT

---

## 🔧 Quick Fixes

### Manual Publish (Right Now)
```powershell
# Find today's episode
$today = Get-Date -Format "yyyy-MM-dd"
Get-ChildItem content/blog/episode-*.md | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "date:\s*$today" -and $content -match "draft:\s*true") {
        Write-Host "Found: $($_.Name)"
        (Get-Content $_.FullName) -replace 'draft: true', 'draft: false' | Set-Content $_.FullName
        Write-Host "Published!"
    }
}
```

### Check Workflow Status
1. Go to GitHub Actions
2. Find "Daily Publish Check"
3. Check latest run
4. Look at logs

### Manual Trigger
1. Go to: `https://github.com/TheAIforNormalPeople/ai-for-normal-people/actions`
2. Click "Daily Publish Check"
3. Click "Run workflow"
4. Select branch: `main`
5. Click "Run workflow"

---

## 📋 Debugging Steps

### Step 1: Check if Workflow Ran
```bash
# Go to GitHub Actions page
# Look for today's run
# Check status (green = success, red = failed, yellow = running)
```

### Step 2: Check Workflow Logs
Look for:
- "Today's date (UTC): [date]"
- "Checking: [file]"
- "Extracted date: [date]"
- "✅ MATCH!" or "⏭️ No match"

### Step 3: Verify Episode Date
```powershell
# Check episode date matches today
$today = Get-Date -Format "yyyy-MM-dd"
Get-Content content/blog/episode-11-how-to-detect-ai-written-content.md | Select-String "date:"
```

### Step 4: Check Draft Status
```powershell
# Check if still draft
Get-Content content/blog/episode-11-how-to-detect-ai-written-content.md | Select-String "draft:"
```

---

## 🎯 Today's Issue (Dec 16, 2025)

**Episode 11:**
- Date: `2025-12-16T09:00:00-05:00` ✅
- Was: `draft: true` ❌
- Now: `draft: false` ✅ (manually published)

**Why it didn't auto-publish:**
- Need to check GitHub Actions to see if workflow ran
- Possible timezone issue
- Possible workflow didn't run

**Action taken:** Manually published Episode 11

---

## 🔄 Prevent Future Issues

1. **Check GitHub Actions daily** - Verify workflow ran
2. **Run validation script** - Before committing episodes
3. **Test workflow manually** - Use "Run workflow" button
4. **Monitor logs** - Check for errors in workflow runs

---

## 💡 Recommendation

**Set up a notification:**
- GitHub can email you when workflows fail
- Or check Actions page daily
- Or set up a reminder to verify episode published

**Better solution:**
- Add a step to workflow that posts to a status page
- Or add a check that verifies episode was published
- Or add logging to a file we can check

---

**For now:** Episode 11 is published. Check GitHub Actions to see why the workflow didn't run automatically.

