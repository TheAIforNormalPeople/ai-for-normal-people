# MASTER REFERENCE - CURRENT DOCUMENTATION
## What to Use and What to Ignore

**Created:** After Episode 19 context recovery  
**Purpose:** Single source of truth for current documentation  
**Update When:** New docs created, old docs deprecated

---

## ✅ CURRENT AND ACTIVE DOCUMENTATION

### Character System (USE THESE)

1. **Character Data Files (PRIMARY SOURCE):**
   - `aiforhumans/data/characters/vector.yaml` - Complete Vector data
   - `aiforhumans/data/characters/kai.yaml` - Complete Kai data
   - `aiforhumans/data/characters/recurse.yaml` - Complete Recurse data
   - `aiforhumans/data/characters/human-blogger.yaml` - Complete Human data
   - **When to use:** Always. These are THE source of truth.

2. **Character Profiles:**
   - `aiforhumans/content/characters/*.md` - Character pages
   - **When to use:** Reference, but YAML files are primary

3. **Character Voice Guides:**
   - `docs/guides/CHARACTER_VOICE_QUICK_REFERENCE.md` - Quick reference
   - `docs/guides/CHARACTER_VOICE_EVOLUTION_GUIDE.md` - Evolution stages
   - `docs/guides/CHARACTER_RELATIONSHIP_DYNAMICS.md` - Character interactions
   - **When to use:** When writing dialogue, checking voice consistency

---

### Episode Creation (USE THESE)

1. **Episode Creation System:**
   - `COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md` - Creation template
   - `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Comedy bit tracking
   - `COMEDY_SYSTEM/HOW_TO_USE_COMEDY_SYSTEM.md` - System guide
   - **When to use:** Before writing every episode

2. **Episode Formatting:**
   - `docs/episode-planning/EPISODE_FORMATTING_RULES_CURRENT.md` - Formatting rules (NEW)
   - **When to use:** When formatting episodes, checking Human format

3. **Episode Quality:**
   - `docs/guides/EPISODE_QUALITY_REVIEW_CHECKLIST.md` - Quality checklist
   - **When to use:** Before publishing episodes

4. **Reference Episodes (EXAMPLES):**
   - `episode-17-using-ai-for-writing-without-sounding-like-ai.md` - Good example
   - `episode-18-ai-for-fact-checking-and-its-limits.md` - Good example
   - `episode-20-the-holiday-break-and-ai-creativity.md` - Good example
   - **When to use:** When checking formatting, character voices, structure

---

### Vision & Context (USE THESE)

1. **Vision Documents:**
   - `MASTER_VISION.md` - The big picture (READ FIRST)
   - `CURRENT_FOCUS.md` - What we're doing now
   - `DECISIONS_LOG.md` - What we decided and why
   - **When to use:** At start of every session, when context is lost

2. **Comprehensive Reference:**
   - `COMPLETE_PROJECT_BIBLE.md` - Everything in one place
   - **When to use:** When needing comprehensive context

3. **How-To Guides:**
   - `HOW_TO_USE_THIS_SYSTEM.md` - System overview
   - `CONTEXT_SYSTEM.md` - Context maintenance
   - `CONTEXT_RECOVERY_LOG.md` - Recovery notes (NEW)
   - **When to use:** When understanding the documentation system

---

### Automation & Systems (USE THESE)

1. **n8n Workflows:**
   - Check `n8n/` folder for current workflow files
   - Look for most recent documentation in `n8n/`
   - **When to use:** When working on automation

---

## ⚠️ OUTDATED OR ARCHIVE (DON'T USE)

### Old Documentation (IGNORE)

1. **Archived Files:**
   - `docs/archive/` - All files here are archived
   - `archive/` - Old projects, not current
   - **Action:** Don't reference these unless specifically needed

2. **Old Episode Creation:**
   - `docs/archive/EPISODE_CREATION_WORKFLOW.md` - Old workflow
   - **Action:** Ignore, use COMEDY_SYSTEM files instead

3. **Sunny Project:**
   - `archive/sunny_project_1.2/` - Not using anymore
   - **Action:** Ignore, we create manually now

---

### Root Directory Files (CHECK BEFORE USING)

1. **Character Files in Root:**
   - `Character implement.md` - May be outdated, check date
   - `CHARACTER_COMEDY_BIBLE.md` - Check if referenced in current docs
   - **Action:** Check if referenced in CURRENT documentation first

2. **Other Root Files:**
   - Various `.md` files - Check modification dates
   - **Action:** Verify they're referenced in CURRENT docs before using

---

## 📋 QUICK REFERENCE: What to Read For...

### Before Writing an Episode:
1. Read `MASTER_VISION.md` - Understand vision
2. Read `docs/guides/CHARACTER_VOICE_QUICK_REFERENCE.md` - Character voices
3. Read relevant character YAML files - Full character data
4. Check `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Available bits
5. Use `COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md` - Template
6. Reference episodes 17, 18, 20+ - Formatting examples

### When Checking Formatting:
1. Read `docs/episode-planning/EPISODE_FORMATTING_RULES_CURRENT.md` - Formatting rules
2. Reference episodes 17, 18, 20+ - Examples
3. Check `docs/guides/EPISODE_QUALITY_REVIEW_CHECKLIST.md` - Quality checks

### Finding Files:
- **Master Index:** `docs/ORGANIZATION_INDEX.md` - Find any file here
- **Organization Summary:** `ORGANIZATION_COMPLETE.md` - Overview of new structure

### When Context Is Lost:
1. Read `MASTER_VISION.md` - The vision
2. Read `CURRENT_FOCUS.md` - Current priorities
3. Read `DECISIONS_LOG.md` - Recent decisions
4. Read `COMPLETE_PROJECT_BIBLE.md` - Comprehensive reference

### When Working on Characters:
1. Read character YAML files - PRIMARY SOURCE
2. Read `CHARACTER_VOICE_QUICK_REFERENCE.md` - Quick reference
3. Read `CHARACTER_RELATIONSHIP_DYNAMICS.md` - Interactions
4. Check `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Bit usage

---

## 🎯 KEY PRINCIPLES

1. **YAML Files are Primary:** Character data comes from YAML files
2. **Published Episodes are Examples:** Use episodes 17+ as formatting reference
3. **Check Dates:** If unsure, check file modification dates
4. **Reference Current Docs:** If not in this list, check if referenced in CURRENT docs
5. **Archive is Old:** Don't use `docs/archive/` or `archive/` unless specifically needed
6. **Read Actual Files:** Don't paraphrase, read the files

---

## 📝 FORMATTING RULES (CRITICAL)

### Human Format:
- **CORRECT:** `**[Human]:** *stage directions*`
- **WRONG:** `{{< dialogue char="Human" >}}`
- **Reference:** See episodes 17, 18, 20+

### Character Format:
- **CORRECT:** `{{< dialogue char="Vector" >}}...{{< /dialogue >}}`
- **Characters:** Vector, Kai, Recurse, Bounce, River (NOT Human)

---

## 🔄 UPDATING THIS DOCUMENT

**Update When:**
- New documentation created
- Old documentation deprecated
- Documentation structure changes
- New formatting rules discovered

**How to Update:**
1. Add to appropriate section
2. Mark old docs as outdated
3. Update quick reference if needed

---

**Last Updated:** After Episode 19 context recovery  
**Next Review:** When new docs created or structure changes

