# 🧹 n8n Folder Cleanup Plan

## Current Problem
We have **80+ files** in the n8n folder. Many are:
- Duplicates
- Old troubleshooting guides
- Outdated workflows
- Debug files from when things were broken

## What We Actually Need

### ✅ KEEP (Essential Files)

**Active Workflows:**
- `multi-platform-social-json-tracking-FIXED.json` ⭐ **CURRENT WORKFLOW**
- `tracking/posted-content.json` (data file)

**Setup Guides:**
- `QUICK_START_SETUP.md` ⭐ **START HERE**
- `COMPLETE_SETUP_GUIDE_NOW.md` ⭐ **DETAILED GUIDE**

**Reference:**
- `TWITTER_NODE_FIXED_NO_INSTALL.md` (explains why we use HTTP Request)

### ❌ DELETE (Outdated/Duplicate)

**Old Workflows (we have the FIXED version now):**
- `multi-platform-social-json-tracking.json` (old version)
- `multi-platform-social-http-request-twitter.json` (standalone, not needed)
- `auto-tweet-new-episodes-*.json` (all old versions)
- `twitter-thread-generator.json` (not used)
- `button-down-newsletter.json` (if not using)
- `email-new-episodes.json` (if not using)

**Old Setup Guides (replaced by new ones):**
- `START_HERE.md` (old, has wrong info)
- `QUICK_START_GUIDE.md` (old)
- `QUICK_START_JSON_TRACKING.md` (old)
- `COMPLETE_SETUP_GUIDE.md` (old)
- `N8N_SETUP_GUIDE.md` (old)
- `N8N_SETUP_STEP_BY_STEP.md` (old)
- `SETUP_CHECKLIST_TODAY.md` (old)
- `SETUP_STATUS_CHECKLIST.md` (old)

**Troubleshooting (old, from when things were broken):**
- `DEBUG_*.md` (all of them - 10+ files)
- `FIX_*.md` (all of them - 15+ files)
- `TROUBLESHOOTING_*.md` (all of them)
- `HOW_TO_FIX_*.md` (all of them)
- `INSTALL_*.md` (we use HTTP Request now, don't need these)
- `WHICH_*.md` (decision files, not needed)

**Airtable Stuff (if not using Airtable):**
- `AIRTABLE_*.md` (all of them - 10+ files)
- `*AIRTABLE*.json` (if not using)

**Old Documentation:**
- `DATA_FLOW_EXPLANATION.md`
- `UNDERSTANDING_INPUT_OUTPUT.md`
- `WORKFLOW_FIXES_AND_SETUP.md` (old)
- `MULTI_PLATFORM_WORKFLOW_SIMPLE.md` (old)
- `MULTI_PLATFORM_SOCIAL_AUTOMATION_GUIDE.md` (old)
- `SIMPLE_JSON_TRACKING_SETUP.md` (old)
- `SIMPLER_TWITTER_FILTER.md`
- `CORRECT_*.md` (all of them)
- `FINAL_*.md` (all of them)
- `EXACT_*.md` (all of them)
- `VERIFY_*.md` (all of them)
- `TEST_*.md` (all of them)
- `TESTING_*.md` (all of them)
- `RSS_FEED_*.md` (all of them)
- `TWITTER_*.md` (except the FIXED one)
- `BUTTONDOWN_*.md` (if not using)
- `CLAUDE_NODE_SETUP.md`
- `MANUAL_BUILD_INSTRUCTIONS.md`
- `IMPORT_UPDATED_WORKFLOW.md`

## 📋 Cleanup Steps

1. **Backup first** (just in case)
2. **Move to archive folder:**
   - Create `n8n/archive/` folder
   - Move all the DELETE files there
3. **Keep only essential files**
4. **Update any references** if needed

## 🎯 Final Structure

```
n8n/
├── multi-platform-social-json-tracking-FIXED.json ⭐
├── tracking/
│   └── posted-content.json
├── QUICK_START_SETUP.md ⭐
├── COMPLETE_SETUP_GUIDE_NOW.md ⭐
├── TWITTER_NODE_FIXED_NO_INSTALL.md
└── CLEANUP_PLAN.md (this file)
```

**That's it!** 5 files total (plus the tracking JSON).

## ⚠️ About "Sunny Project"

Found references to `sunny_project_1.2/` in the codebase. This appears to be a separate project. 

**Questions:**
- Are you still using Sunny for anything?
- Should we keep those files or archive them?
- Is Sunny related to this blog project or separate?

Let me know and we can handle that separately.

