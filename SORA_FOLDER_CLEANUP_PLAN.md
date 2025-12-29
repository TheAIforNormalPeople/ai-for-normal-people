# 🧹 SORA FOLDER CLEANUP PLAN

**Purpose:** Clean up the entire SORA folder. Keep what's needed. Archive what's not. Organize what remains.

**Last Updated:** December 22, 2025

---

## 📊 CURRENT STATE

**Total Files:** 289+ markdown files, plus code, configs, etc.

**Main Issues:**
- 80+ files in `n8n/` folder (most are outdated/debug)
- `sunny_project_1.2/` - Old project, not using anymore
- Duplicate documentation everywhere
- Hard to find what matters
- Context gets lost in clutter

---

## ✅ WHAT TO KEEP

### Essential Files (Keep All)

**Main Site:**
- `aiforhumans/` - Entire folder (this is the live site)
  - `content/blog/` - All episodes
  - `data/characters/` - Character YAML files ⭐
  - `scripts/` - Validation tools
  - `layouts/` - Hugo templates
  - `static/` - CSS, images
  - `hugo.toml` - Site config

**Key Documentation:**
- `aiforhumans/COMPLETE_PROJECT_BIBLE.md` ⭐ **THE MAIN REFERENCE**
- `THE_NORMAL_PEOPLE_COMPLETE.md` ⭐ **THE FRAMEWORK**
- `Character implement.md` - Character system details
- `aiforhumans/MASTER_VISION.md` - Vision document
- `aiforhumans/DECISIONS_LOG.md` - Decision log
- `aiforhumans/CURRENT_FOCUS.md` - Current priorities

**Tracking Documents:**
- `aiforhumans/scripts/STORY_THREAD_TRACKER.md`
- `aiforhumans/scripts/RUNNING_GAG_TRACKER.md`
- `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md`

**Automation (n8n):**
- `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json` - Current workflow
- `aiforhumans/n8n/QUICK_START_SETUP.md` - Setup guide
- `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` - Detailed guide
- `aiforhumans/n8n/TWITTER_NODE_FIXED_NO_INSTALL.md` - Why HTTP Request
- `aiforhumans/n8n/tracking/posted-content.json` - Data file

**Cursor Prompts:**
- `cursor/prompts/` - Keep all (used for episode generation)

---

## 📦 WHAT TO ARCHIVE

### Archive to `SORA/archive/` folder

**Sunny Project:**
- `sunny_project_1.2/` - Entire folder (old project, not using)

**Old n8n Documentation (80+ files):**
- All `DEBUG_*.md` files
- All `FIX_*.md` files (except `TWITTER_NODE_FIXED_NO_INSTALL.md`)
- All `INSTALL_*.md` files
- All `TROUBLESHOOTING_*.md` files
- All `HOW_TO_FIX_*.md` files
- All `WHICH_*.md` files
- All `TEST_*.md` files
- All `TESTING_*.md` files
- All `CORRECT_*.md` files
- All `FINAL_*.md` files
- All `EXACT_*.md` files
- All `VERIFY_*.md` files
- All `RSS_FEED_*.md` files
- All `AIRTABLE_*.md` files (if not using Airtable)
- All `BUTTONDOWN_*.md` files (except setup guide if using)
- `START_HERE.md` (old, replaced by new guides)
- `QUICK_START_GUIDE.md` (old)
- `QUICK_START_JSON_TRACKING.md` (old)
- `COMPLETE_SETUP_GUIDE.md` (old, replaced by `COMPLETE_SETUP_GUIDE_NOW.md`)
- `N8N_SETUP_GUIDE.md` (old)
- `N8N_SETUP_STEP_BY_STEP.md` (old)
- `SETUP_CHECKLIST_TODAY.md` (old)
- `SETUP_STATUS_CHECKLIST.md` (old)
- `MULTI_PLATFORM_WORKFLOW_SIMPLE.md` (old)
- `MULTI_PLATFORM_SOCIAL_AUTOMATION_GUIDE.md` (old)
- `SIMPLE_JSON_TRACKING_SETUP.md` (old)
- `WORKFLOW_FIXES_AND_SETUP.md` (old)
- `DATA_FLOW_EXPLANATION.md` (old)
- `UNDERSTANDING_INPUT_OUTPUT.md` (old)
- `MANUAL_BUILD_INSTRUCTIONS.md` (old)
- `IMPORT_UPDATED_WORKFLOW.md` (old)
- `CLAUDE_NODE_SETUP.md` (old)

**Old Workflows:**
- `aiforhumans/n8n/multi-platform-social-json-tracking.json` (old version)
- `aiforhumans/n8n/multi-platform-social-http-request-twitter.json` (standalone, not needed)
- All `auto-tweet-new-episodes-*.json` files (old versions)
- `aiforhumans/n8n/twitter-thread-generator.json` (not used)
- `aiforhumans/n8n/button-down-newsletter.json` (if not using)
- `aiforhumans/n8n/email-new-episodes.json` (if not using)

**Root Level Old Docs:**
- `HERE'S YOUR COMPLETE CURSOR CONTEXT DOCU.md` (old)
- `THE NORMAL PEOPLE - Quick Context.md` (old)
- `cursor_review_new_chat_and_next_steps.md` (old)
- `cursor_utilizing_multiple_agents_for_ta.md` (old)
- `PROJECT_UPDATE_2025-11-10.md` (old)
- `VECTOR_SPECIALIST_SETUP_COMPLETE.md` (old)

**Old Character Docs:**
- `Characterguide.md` (old, data is in YAML now)
- `# THE NORMAL PEOPLE - COMPLETE CHARACTER.md` (old, framework is in `THE_NORMAL_PEOPLE_COMPLETE.md`)

---

## 🗑️ WHAT TO DELETE

**Trash (Not Needed):**
- Duplicate files
- Test files
- Temporary files
- Broken workflows

**After Archiving:**
- Review archive folder
- Delete if truly not needed
- Keep archive for 30 days, then delete if sure

---

## 📋 CLEANUP STEPS

### Step 1: Create Archive Structure
```
SORA/
├── archive/
│   ├── sunny_project_1.2/     # Old project
│   ├── n8n_old_docs/          # Old n8n documentation
│   ├── old_workflows/         # Old workflow files
│   └── old_docs/              # Old root-level docs
```

### Step 2: Archive Files
1. Move `sunny_project_1.2/` → `archive/sunny_project_1.2/`
2. Move old n8n docs → `archive/n8n_old_docs/`
3. Move old workflows → `archive/old_workflows/`
4. Move old root docs → `archive/old_docs/`

### Step 3: Verify What Remains
- Check that essential files are still accessible
- Verify workflows still work
- Test that documentation is findable

### Step 4: Update References
- Update any file references if needed
- Update documentation that points to archived files
- Create index of what's where

---

## 🎯 FINAL STRUCTURE (After Cleanup)

```
SORA/
├── aiforhumans/                    # Main site (keep all)
│   ├── content/
│   │   ├── blog/                  # Episodes
│   │   └── characters/            # Character pages
│   ├── data/
│   │   └── characters/            # Character YAML ⭐
│   ├── scripts/                   # Validation tools
│   ├── n8n/                       # Automation (5 files only)
│   │   ├── multi-platform-social-json-tracking-FIXED.json
│   │   ├── QUICK_START_SETUP.md
│   │   ├── COMPLETE_SETUP_GUIDE_NOW.md
│   │   ├── TWITTER_NODE_FIXED_NO_INSTALL.md
│   │   └── tracking/
│   │       └── posted-content.json
│   ├── layouts/                   # Hugo templates
│   ├── static/                    # CSS, images
│   ├── COMPLETE_PROJECT_BIBLE.md  ⭐ MAIN REFERENCE
│   ├── MASTER_VISION.md
│   ├── DECISIONS_LOG.md
│   ├── CURRENT_FOCUS.md
│   └── SORA_FOLDER_CLEANUP_PLAN.md
├── cursor/
│   └── prompts/                   # Cursor prompts
├── docs/                          # Documentation
│   └── [keep useful docs]
├── archive/                       # Archived files
│   ├── sunny_project_1.2/
│   ├── n8n_old_docs/
│   ├── old_workflows/
│   └── old_docs/
├── THE_NORMAL_PEOPLE_COMPLETE.md  ⭐ FRAMEWORK
├── Character implement.md         # Character details
└── README.md                      # Project overview
```

**Result:** ~15 essential files in root, clean n8n folder (5 files), organized archive.

---

## ⚠️ BEFORE YOU START

**Backup First:**
- Commit current state to git
- Create backup branch
- So you can revert if needed

**Test After:**
- Verify site still builds
- Verify workflows still work
- Verify documentation is accessible

---

## 📝 CLEANUP CHECKLIST

- [ ] Create `archive/` folder structure
- [ ] Move `sunny_project_1.2/` to archive
- [ ] Move old n8n docs to archive (80+ files)
- [ ] Move old workflows to archive
- [ ] Move old root docs to archive
- [ ] Verify essential files remain
- [ ] Test site builds
- [ ] Test workflows work
- [ ] Update any broken references
- [ ] Commit cleanup to git

---

## 🎯 SUCCESS CRITERIA

**After Cleanup:**
- ✅ Can find essential files quickly
- ✅ n8n folder has < 10 files
- ✅ Root level has < 20 files
- ✅ Everything still works
- ✅ Documentation is organized
- ✅ Context doesn't get lost

---

**Ready to start cleanup? Let me know and I'll help execute this plan step by step.**

