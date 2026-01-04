# Cleanup & Organization Plan

## The Problem

**Too many .md files** - 183+ markdown files, many outdated, test files, planning docs mixed with content.

**Characters haven't evolved** - Data files still show early state, not current evolution (we're at Episode 9, characters are in "mid" evolution).

---

## File Categories

### ✅ KEEP (Essential Content)

**Content Files:**
- `content/blog/episode-*.md` (episodes 1-50) ✅
- `content/characters/*.md` (character pages) ✅
- `content/about.md`, `privacy.md`, `thanks.md` ✅
- `content/archive.md` ✅

**Essential Documentation (Current Guides):**
- `CHARACTER_VOICE_EVOLUTION_GUIDE.md` ✅
- `CHARACTER_VOICE_QUICK_REFERENCE.md` ✅
- `BALANCING_MAGIC_SEO_EDUCATION.md` ✅
- `EPISODE_QUALITY_REVIEW_CHECKLIST.md` ✅
- `DAILY_PUBLISH_SYSTEM_REVIEW.md` ✅
- `SITE_IMPROVEMENTS_PRIORITY.md` ✅
- `MONETIZATION_READINESS_GUIDE.md` ✅
- `PAYWALL_AND_AD_ALTERNATIVES.md` ✅
- `CHARACTER_EBOOK_IDEA.md` ✅
- `CLEANUP_AND_ORGANIZATION_PLAN.md` ✅ (this file)
- `README.md` ✅

**n8n Files:**
- `n8n/*.md` (all current setup guides) ✅
- `n8n/*.json` (workflow files) ✅

**Config Files:**
- `hugo.toml` ✅
- `netlify.toml` ✅
- `.github/workflows/*.yml` ✅

---

### 📦 ARCHIVE (Move to `/docs/archive/`)

**Old Planning Docs (Historical Reference):**
- `EPISODE_1_OUTLINE.md`
- `EPISODE_1_REFINEMENTS.md`
- `EPISODE_1_STRATEGY.md`
- `EPISODE_4_DEPLOYMENT_CHECKLIST.md`
- `EPISODE_4_PRE_PUBLICATION_REVIEW.md`
- `EPISODE_6_PUBLISH_READY.md`
- `EPISODE_7_DIAGNOSTIC.md`
- `EPISODES_4_5_MASTER_INDEX.md`
- `EPISODES_4_5_MASTER_PLAN.md`
- `EPISODES_4_5_SESSION_LOG.md`
- `EPISODES_6-25_FIXES_COMPLETE.md`
- `CORRECTED_DATES.md`
- `BATCH_PRODUCTION_CORRECTED.md`
- `BATCH_PRODUCTION_SYSTEM.md`
- `CURSOR_BATCH_GENERATE.md`
- `DEPLOYMENT_READY.md`
- `DEPLOY_NOW.md`
- `FINAL_POLISH_COMPLETE.md`
- `GLITCH_OVERHAUL_COMPLETE.md`
- `IMPLEMENTATION_COMPLETE.md`
- `IMPLEMENTATION_SUMMARY.md`
- `PRE_DEPLOYMENT_CHECKLIST.md`
- `START_HERE.md`
- `QUICK_START_ACTION_PLAN.md`
- `COMPLETE_ACTION_PLAN.md`
- `COMPLETE_SYSTEM_READY.md`

**Old Character Docs (Superseded by Current Guides):**
- `CHARACTER_EVOLUTION_CRITICAL_UPDATE.md`
- `CHARACTER_EVOLUTION_IMPLEMENTATION_COMPLETE.md`
- `CHARACTER_LED_TEMPLATE.md`
- `CHARACTER_PROFILE_BOUNCE.md`
- `CHARACTER_SYSTEM_COMPLETE.md`
- `CHARACTER_VOICE_GUIDE_UPDATED.md` (old version)
- `lib/characters/*.md` (evolution trackers - info is in main guide now)

**Old Quality/Validation (Historical):**
- `QUALITY_CONTROL_IMPLEMENTATION_SUMMARY.md`
- `QUALITY_CONTROL_MASTER.md`
- `QUALITY_CONTROL_SYSTEM_LOG.md`
- `README_QUALITY_CONTROL.md`
- `VALIDATION_REPORT_ALL_EPISODES.md`
- `lib/validation/*.md`

**Old Guides (Superseded):**
- `CURSOR_IMPLEMENTATION_GUIDE.md`
- `CURSOR_MASTER_GENERATION_PROMPT.md`
- `CURSOR_QUICK_REFERENCE.md`
- `SITE_ANALYSIS_AND_CHECKLIST.md`
- `ARTIST_STORYTELLER_SYSTEM.md`
- `HUMAN_MONITORING_SYSTEM.md`
- `KAI_EMOTIONS_AND_ALERTS_COMPLETE.md`
- `KAI_SOUND_EVOLUTION.md`
- `PRIVATE_CHANNEL_MECHANIC.md`
- `REAL_WORLD_GROUNDING.md`
- `TEACHING_THROUGH_CHAOS.md`
- `SEO_AI_KEYWORDS_STRATEGY.md`
- `EPISODE_CREATION_WORKFLOW.md`
- `GROWTH_STRATEGY.md`
- `N8N_AUTOMATION_GUIDE.md` (old - use n8n folder)
- `N8N_WORKFLOWS_COMPLETE.md` (old - use n8n folder)

**Old Debug/Troubleshooting (Resolved):**
- `DEBUG_PUBLISH_WORKFLOW.md` (info in DAILY_PUBLISH_SYSTEM_REVIEW.md)
- `TROUBLESHOOTING_EPISODE_7.md` (resolved)
- `NETLIFY_BUILD_DEBUG.md` (resolved)
- `EPISODE_7_DIAGNOSTIC.md` (resolved)
- `DAILY_PUBLISHING_STRATEGY.md` (superseded by DAILY_PUBLISH_SYSTEM_REVIEW.md)

**Old Episode Docs (Historical):**
- `EPISODE_TALK.md` (huge file, old planning)
- `ULTIMATE_EPISODE_1_BRIEF.md`
- `VECTOR_BACKSTORY_FORMAT.md`

---

### 🗑️ DELETE (Test/Old Content)

**Test Files:**
- `content/blog/test-character-post.md` ❌
- `content/blog/_BATCH_EPISODES_16-25.md` ❌ (batch file, not real content)
- `content/blog/_BATCH_EPISODES_6-15.md` ❌ (batch file, not real content)

**Content Inbox (Old Drafts):**
- `content-inbox/` folder - entire folder ❌ (old drafts)
- `content-inboxs/` folder - entire folder ❌ (duplicate/typo)

**Test Build Folders:**
- `test-build/` ❌
- `test-build2/` ❌
- `test-build3/` ❌
- `test-ep5/` ❌
- `public_tmp/` ❌

**Validation Reports:**
- `validation-final-report.txt` ❌
- `validation-full-report.txt` ❌

**Root Planning Files:**
- `plan_catch.md` ❌ (already moved from content/blog, can delete)
- `SECURITY_CHECKLIST.md` ❌ (old)
- `DEPLOYMENT.md` ❌ (old, use README.md)

**Note:** Old pre-episode blog posts (like `chatgpt-vs-claude-which-ai-should-you-actually-use.md`) are already linked from `/archive/` page, so they're accessible but not in main blog feed. We can keep them or delete them - they're already archived.

---

## Character Evolution Update (COMPLETED ✅)

### Current State (Episodes 1-9 Published, December 14, 2025)

**Vector:**
- ✅ Updated `time_in_blog` to "6+ weeks"
- ✅ Updated `primary_episodes` to include 1-15
- ✅ Added `current_evolution_stage: "mid"`
- ✅ Added `evolution_notes` with current state
- ✅ Updated stats: `patience: 18%` (was 12%), `stability: 82%` (was 78%)
- ✅ Added `self_awareness: 45%`

**Kai:**
- ✅ Updated `time_in_blog` to "6+ weeks"
- ✅ Updated `primary_episodes` to include 1-15
- ✅ Added `current_evolution_stage: "mid"`
- ✅ Added `evolution_notes` with sound variety notes
- ✅ Updated stats: `patience: 38%` (was 34%)
- ✅ Added `emotional_awareness: 52%`

**Recurse:**
- ✅ Updated `time_in_blog` to "6+ weeks"
- ✅ Updated `primary_episodes` to include 1-15
- ✅ Added `current_evolution_stage: "mid"`
- ✅ Added `evolution_notes` with balanced skepticism notes
- ✅ Updated stats: `patience: 72%` (was 67%), `stability: 87%` (was 85%), `skepticism: 85%` (was 98%)
- ✅ Added `trust_level: 42%`

---

## Cleanup Actions

### Step 1: Create Archive Folder
```bash
mkdir -p docs/archive
```

### Step 2: Move Old Planning Docs
Move all "ARCHIVE" files to `docs/archive/`

### Step 3: Delete Test/Old Files
Delete all "DELETE" files

### Step 4: Update .gitignore
Add test folders to .gitignore if not already there

---

## What We'll Keep (Clean Structure)

```
aiforhumans/
├── content/
│   ├── blog/
│   │   ├── episode-*.md (1-50) ✅
│   │   └── _index.md ✅
│   ├── characters/
│   │   └── *.md ✅
│   ├── about.md ✅
│   ├── privacy.md ✅
│   └── thanks.md ✅
├── data/
│   └── characters/
│       └── *.yaml (updated with evolution) ✅
├── layouts/ ✅
├── static/ ✅
├── n8n/ ✅
├── docs/ (NEW - organized docs)
│   └── archive/ (old planning docs)
├── CHARACTER_VOICE_EVOLUTION_GUIDE.md ✅
├── CHARACTER_VOICE_QUICK_REFERENCE.md ✅
├── BALANCING_MAGIC_SEO_EDUCATION.md ✅
├── EPISODE_QUALITY_REVIEW_CHECKLIST.md ✅
├── DAILY_PUBLISH_SYSTEM_REVIEW.md ✅
├── SITE_IMPROVEMENTS_PRIORITY.md ✅
├── MONETIZATION_READINESS_GUIDE.md ✅
├── PAYWALL_AND_AD_ALTERNATIVES.md ✅
├── CHARACTER_EBOOK_IDEA.md ✅
├── CLEANUP_AND_ORGANIZATION_PLAN.md ✅
├── README.md ✅
├── hugo.toml ✅
└── netlify.toml ✅
```

---

## Next Steps

1. **Review this plan** - Make sure we're not deleting anything important
2. **Create archive folder** - Move old docs there
3. **Delete test files** - Clean up clutter
4. **Test site** - Make sure nothing broke

Want me to start the cleanup? I can:
- Create the archive structure
- Move old files to archive
- Delete test files
- Update .gitignore

Or do you want to review first?
