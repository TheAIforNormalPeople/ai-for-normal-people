# Daily Publish System - Complete Review & Analysis

**Date:** December 14, 2025  
**Status:** AUTO-PUBLISH NOT WORKING  
**Action Required:** Manual publish today + fix workflow

---

## EXECUTIVE SUMMARY

The GitHub Actions workflow for daily publishing has several potential issues:
1. **Timezone mismatch** - Workflow runs at 9am UTC, but episode dates are in EST (-05:00)
2. **Date extraction logic** - May fail with different date formats
3. **No error handling** - Workflow fails silently if date matching doesn't work
4. **No logging** - Can't see what the workflow is checking
5. **Git push permissions** - May need explicit permissions

---

## CURRENT STATE ANALYSIS

### Episode Schedule (Dec 13-16, 2025)

**Episode 8 (Dec 13):**
- Date: `2025-12-13T09:00:00-05:00`
- Draft: `false` ✅ (Published)
- Status: Should be live

**Episode 9 (Dec 14 - TODAY):**
- Date: `2025-12-14T09:00:00-05:00`
- Draft: `true` ❌ (Should be published today)
- Status: **NEEDS MANUAL PUBLISH**

**Episode 10 (Dec 15):**
- Date: `2025-12-15T09:00:00-05:00`
- Draft: `true` ✅ (Scheduled correctly)

**Episode 11 (Dec 16):**
- Date: `2025-12-16T09:00:00-05:00`
- Draft: `true` ✅ (Scheduled correctly)

---

## WORKFLOW ANALYSIS

### Current Workflow Logic

```yaml
TODAY=$(date +%Y-%m-%d)  # Gets date in UTC timezone
DATE=$(echo "$DATE_LINE" | sed 's/date: //' | cut -d'T' -f1 | tr -d ' ')
if [ "$DATE" = "$TODAY" ]; then
  sed -i 's/draft: true/draft: false/' "$file"
fi
```

### IDENTIFIED ISSUES

#### Issue 1: Timezone Mismatch ⚠️ CRITICAL

**Problem:**
- Workflow runs at 9am UTC (4am EST / 5am EDT)
- Episode dates are in EST: `2025-12-14T09:00:00-05:00`
- When workflow runs at 9am UTC on Dec 14:
  - UTC time: 2025-12-14 09:00
  - EST time: 2025-12-14 04:00 (4am EST)
  - Episode date: 2025-12-14 09:00 EST
  - **The workflow runs BEFORE the episode's scheduled time!**

**Impact:** Workflow checks at 4am EST, but episode is scheduled for 9am EST. Date matches, but it's too early.

**Solution Options:**
1. Change workflow to run at 2pm UTC (9am EST)
2. Change episode times to 00:00:00 (midnight) so date matches regardless of time
3. Use UTC dates in episodes

#### Issue 2: Date Extraction Logic ⚠️ MEDIUM

**Current Logic:**
```bash
DATE=$(echo "$DATE_LINE" | sed 's/date: //' | cut -d'T' -f1 | tr -d ' ')
```

**Potential Problems:**
- If date line has extra spaces: `date:  2025-12-14T09:00:00-05:00` → might fail
- If date format is different: `date: 2025-12-14` (no time) → works
- If there are multiple date lines → only gets first one

**Testing:**
- `date: 2025-12-14T09:00:00-05:00` → `2025-12-14` ✅
- `date:  2025-12-14T09:00:00-05:00` → `2025-12-14` ✅ (tr -d removes spaces)
- `date:2025-12-14T09:00:00-05:00` → `2025-12-14` ✅

**Status:** Logic appears correct, but no error handling if it fails.

#### Issue 3: No Error Handling ⚠️ MEDIUM

**Problem:**
- If `grep "^date:"` finds nothing → `DATE_LINE` is empty
- If date extraction fails → `DATE` is empty
- Workflow continues silently, doesn't publish

**Solution:** Add error checking and logging.

#### Issue 4: No Logging ⚠️ LOW

**Problem:**
- Can't see what files the workflow checked
- Can't see what dates it compared
- Can't debug why it didn't publish

**Solution:** Add echo statements for debugging.

#### Issue 5: Git Push Permissions ⚠️ MEDIUM

**Problem:**
- Workflow may not have permission to push
- Need to check if `GITHUB_TOKEN` has write access

**Solution:** Add explicit permissions.

---

## ROOT CAUSE ANALYSIS

### Why Episode 9 Didn't Publish Today

**Scenario 1: Workflow Didn't Run**
- GitHub Actions may not have run at 9am UTC
- Check GitHub Actions logs to verify

**Scenario 2: Timezone Issue**
- Workflow ran at 4am EST (9am UTC)
- Episode scheduled for 9am EST
- Date matched, but workflow ran too early
- **This is likely the issue**

**Scenario 3: Date Matching Failed**
- Date extraction failed silently
- No error, just didn't match

**Scenario 4: Git Push Failed**
- Workflow changed draft status
- But push failed silently
- Changes never committed

---

## RECOMMENDED FIXES

### Fix 1: Change Workflow Time (IMMEDIATE)

**Option A: Run at 2pm UTC (9am EST)**
```yaml
schedule:
  - cron: '0 14 * * *'  # 2pm UTC = 9am EST
```

**Option B: Run at 10am UTC (5am EST) - Earlier**
```yaml
schedule:
  - cron: '0 10 * * *'  # 10am UTC = 5am EST
```

**Option C: Run at 9am UTC but use UTC dates in episodes**
- Change all episode dates to UTC
- More work, but cleaner

**RECOMMENDATION:** Option A (2pm UTC) - matches episode publish time.

### Fix 2: Add Logging (IMMEDIATE)

Add debug output to see what's happening:
```bash
echo "Today's date (UTC): $TODAY"
echo "Checking file: $file"
echo "Date line: $DATE_LINE"
echo "Extracted date: $DATE"
echo "Match: $([ "$DATE" = "$TODAY" ] && echo "YES" || echo "NO")"
```

### Fix 3: Add Error Handling (IMMEDIATE)

Check if date extraction worked:
```bash
if [ -z "$DATE" ]; then
  echo "ERROR: Could not extract date from $file"
  continue
fi
```

### Fix 4: Add Git Permissions (IMMEDIATE)

Add permissions to workflow:
```yaml
permissions:
  contents: write
```

### Fix 5: Better Date Matching (OPTIONAL)

Use more robust date extraction:
```bash
DATE=$(grep "^date:" "$file" | head -1 | sed -E 's/^date:[[:space:]]*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/')
```

---

## OPTIMIZED WORKFLOW

### Improved Version

```yaml
name: Daily Publish Check

on:
  schedule:
    - cron: '0 14 * * *'  # 2pm UTC = 9am EST (matches episode times)
  workflow_dispatch:  # Manual trigger option

permissions:
  contents: write  # Allow pushing changes

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Set up Git
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
      
      - name: Check for posts to publish
        id: publish
        run: |
          TODAY=$(date +%Y-%m-%d)
          CHANGED=0
          
          echo "=== Daily Publish Check ==="
          echo "Today's date (UTC): $TODAY"
          echo "Checking for posts to publish..."
          echo ""
          
          find content/blog -name "*.md" -type f | while read file; do
            if grep -q "draft: true" "$file"; then
              DATE_LINE=$(grep "^date:" "$file" | head -1)
              if [ -n "$DATE_LINE" ]; then
                # Extract date (more robust)
                DATE=$(echo "$DATE_LINE" | sed -E 's/^date:[[:space:]]*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/' | tr -d ' ')
                
                if [ -z "$DATE" ]; then
                  echo "WARNING: Could not extract date from $file"
                  continue
                fi
                
                echo "Checking: $file"
                echo "  Date line: $DATE_LINE"
                echo "  Extracted date: $DATE"
                echo "  Match: $([ "$DATE" = "$TODAY" ] && echo "YES - WILL PUBLISH" || echo "NO")"
                
                if [ "$DATE" = "$TODAY" ]; then
                  sed -i 's/draft: true/draft: false/' "$file"
                  echo "  ✅ Published: $file"
                  CHANGED=1
                fi
              else
                echo "WARNING: No date found in $file"
              fi
            fi
          done
          
          echo ""
          if [ "$CHANGED" = "1" ]; then
            echo "✅ Changes detected - will commit and push"
            echo "changed=true" >> $GITHUB_OUTPUT
          else
            echo "ℹ️  No posts to publish today"
            echo "changed=false" >> $GITHUB_OUTPUT
          fi
      
      - name: Commit and push if changes
        if: steps.publish.outputs.changed == 'true'
        run: |
          git add content/blog/
          git commit -m "Auto-publish scheduled posts for $(date +%Y-%m-%d)" || exit 0
          git push
          echo "✅ Changes pushed successfully"
```

---

## ACTION PLAN

### Immediate Actions (Today)

1. ✅ **Manually publish Episode 9** (Dec 14)
   - Change `draft: true` → `draft: false`
   - Commit and push

2. ✅ **Update workflow** with fixes:
   - Change schedule to 2pm UTC
   - Add logging
   - Add error handling
   - Add permissions

3. ✅ **Test workflow** manually:
   - Trigger workflow manually
   - Check logs
   - Verify it works

### Short-term (This Week)

4. ⏳ **Monitor workflow** for next few days
5. ⏳ **Check GitHub Actions logs** daily
6. ⏳ **Verify episodes publish** on schedule

### Long-term (Optional)

7. ⏳ Consider standardizing episode times to 00:00:00
8. ⏳ Add workflow status notifications
9. ⏳ Create monitoring dashboard

---

## TESTING CHECKLIST

After implementing fixes:

- [ ] Workflow runs at correct time (2pm UTC)
- [ ] Workflow finds episodes with matching dates
- [ ] Workflow changes draft status correctly
- [ ] Workflow commits changes
- [ ] Workflow pushes successfully
- [ ] Netlify rebuilds after push
- [ ] Episode appears on site
- [ ] Logs show what workflow checked

---

## NOTES

- Workflow timezone: UTC (GitHub Actions default)
- Episode timezone: EST (-05:00)
- Current mismatch: 5 hours difference
- Solution: Run workflow at 2pm UTC = 9am EST

---

## NEXT STEPS

1. Manually publish Episode 9 now
2. Update workflow with all fixes
3. Test workflow manually
4. Monitor for next few days
5. Adjust if needed

