# CONTEXT RECOVERY LOG
## What We Learned After Episode 19 Error

**Date:** After Episode 19 formatting fix  
**Issue:** Human dialogue format confusion  
**Resolution:** Documented correct formatting rules

---

## CRITICAL FORMATTING RULES

### Human Dialogue Format

**CORRECT:**
```markdown
**[Human]:** *stage directions in italics*

Human's dialogue text here.
```

**WRONG:**
```markdown
{{< dialogue char="Human" >}}
Human's dialogue text here.
{{< /dialogue >}}
```

Human uses `**[Human]:**` format, NOT dialogue shortcodes.

**Reference:** See episodes 17, 18, 20+ for examples

---

## CURRENT DOCUMENTATION STATUS

### ✅ CURRENT AND ACTIVE

1. **Character System:**
   - `aiforhumans/data/characters/*.yaml` - Complete character data (READ THESE)
   - `aiforhumans/content/characters/*.md` - Character profiles
   - `CHARACTER_VOICE_QUICK_REFERENCE.md` - Quick voice reference
   - `CHARACTER_VOICE_EVOLUTION_GUIDE.md` - Evolution stages
   - `CHARACTER_RELATIONSHIP_DYNAMICS.md` - Character interactions

2. **Episode Creation:**
   - `COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md` - Episode creation template
   - `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Comedy bit tracking
   - `COMEDY_SYSTEM/HOW_TO_USE_COMEDY_SYSTEM.md` - System guide
   - `EPISODE_QUALITY_REVIEW_CHECKLIST.md` - Quality checklist
   - `EPISODE_FORMATTING_RULES_CURRENT.md` - Formatting rules (NEW)

3. **Vision & Context:**
   - `MASTER_VISION.md` - The big picture (read first)
   - `CURRENT_FOCUS.md` - What we're doing now
   - `DECISIONS_LOG.md` - What we decided and why
   - `COMPLETE_PROJECT_BIBLE.md` - Comprehensive reference

4. **How-To Guides:**
   - `HOW_TO_USE_THIS_SYSTEM.md` - System overview
   - `CONTEXT_SYSTEM.md` - Context maintenance

---

### ⚠️ OUTDATED OR ARCHIVE

1. **Old Episode Creation:**
   - `docs/archive/EPISODE_CREATION_WORKFLOW.md` - Old workflow (archived)
   - Any files in `docs/archive/` - Check before using

2. **Sunny Project:**
   - `archive/sunny_project_1.2/` - Not using this anymore
   - Decision: Archive, don't use

3. **Old Character Guides:**
   - Files in root like `Character implement.md` - Check if current
   - `CHARACTER_COMEDY_BIBLE.md` in root - Check if referenced

---

## KEY PRINCIPLES

1. **Human Format:** `**[Human]:** *stage directions*` (NOT dialogue shortcode)
2. **Character Format:** `{{< dialogue char="Name" >}}` (Vector, Kai, Recurse, etc.)
3. **Read Actual Files:** Don't paraphrase, read the YAML files
4. **Reference Examples:** Check episodes 17, 18, 20+ for formatting
5. **Check Trackers:** Use comedy tracker before writing episodes

---

## BEFORE WRITING EPISODES

1. Read `MASTER_VISION.md` - Understand the vision
2. Read `CHARACTER_VOICE_QUICK_REFERENCE.md` - Character voices
3. Check `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Available bits
4. Read relevant character YAML files - Full character data
5. Reference episodes 17, 18, 20+ - Formatting examples
6. Use `EPISODE_FORMATTING_RULES_CURRENT.md` - Formatting rules

---

## LESSONS LEARNED

1. **Always check published episodes** for formatting examples
2. **Human uses bold format**, not dialogue shortcodes
3. **Read actual files**, don't rely on memory
4. **Document formatting rules** when errors occur
5. **Reference current episodes** (17+) for latest standards

---

**Last Updated:** After Episode 19 formatting correction  
**Next Review:** When new formatting questions arise

