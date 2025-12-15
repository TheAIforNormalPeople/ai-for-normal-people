# QUALITY CONTROL SYSTEM - IMPLEMENTATION LOG

**Created:** December 11, 2025  
**Status:** ✅ Complete and Active

## SYSTEM OVERVIEW

This log tracks the complete quality control system implementation for "AI for Normal People" episodes.

## FILES CREATED

### Validation System Files
- ✅ `lib/validation/banned-phrases.txt` - List of banned generic AI phrases
- ✅ `lib/validation/citation-rules.md` - Fact-checking and source citation guidelines
- ✅ `lib/validation/style-guide.md` - Complete formatting and style standards

### Scripts
- ✅ `scripts/validate-episode.sh` - Automated validation script for episodes

### Documentation
- ✅ `QUALITY_CONTROL_MASTER.md` - Complete quality control workflow
- ✅ `ARTIST_STORYTELLER_SYSTEM.md` - Creative storytelling approach
- ✅ `CURSOR_MASTER_GENERATION_PROMPT.md` - Master prompt for Cursor generation

## SYSTEM COMPONENTS

### 1. Anti-Generic-AI Validation
**Purpose:** Prevent corporate AI language from appearing in episodes

**Implementation:**
- Banned phrases list with categories:
  - Opening hooks ("let's dive in", "buckle up")
  - Transition phrases ("at the end of the day")
  - Corporate speak ("leverage", "synergy")
  - Generic conclusions ("key takeaways")
  - AI tell phrases ("as an AI")

**Validation:** Automated script checks for banned phrases

### 2. Fact-Checking & Source Citation
**Purpose:** Ensure all claims are accurate and verifiable

**Implementation:**
- Citation rules for different claim types (statistics, technical, comparisons, policies)
- Character-voice citation styles
- Uncertainty handling ("estimated", "approximately")
- Source verification checklist

**Validation:** Manual review during generation workflow

### 3. Consistent Styling & Formatting
**Purpose:** Maintain visual and structural consistency across episodes

**Implementation:**
- Exact frontmatter format
- Required content structure (Opening → Interruption → Teaching → Takeaway)
- Dialogue formatting rules
- Human narration format
- Character action formatting
- Spacing and paragraph rules

**Validation:** Style guide checklist + automated script

### 4. Character Voice Consistency
**Purpose:** Ensure characters sound distinct and maintain personality

**Implementation:**
- Character voice guidelines (Vector: CAPS/exclamation, Kai: BEEP/stats, Recurse: notes/suspicious)
- Character arc tracking (how they evolve across episodes)
- Relationship dynamics
- Running gags and inside jokes

**Validation:** Automated script checks + creative validation

### 5. Creative Storytelling System
**Purpose:** Transform from content generation to storytelling

**Implementation:**
- Episode types (7 types, rotate don't repeat)
- Meta-narrative layer (escape story reminders)
- Visual language (stage directions, reactions, descriptions)
- Teaching through story (not lectures)
- SEO through character obsessions (not forced keywords)

**Validation:** Creative quality questions (entertainment, character, teaching, uniqueness, flow)

## WORKFLOW INTEGRATION

### For Each Episode Generation:

1. **Read Required Files:**
   - Character system documentation
   - Banned phrases list
   - Style guide
   - Citation rules

2. **Generate Draft:**
   - Follow episode type structure
   - Use character voices
   - Create scenes, not scripts

3. **Quality Control Checks:**
   - Banned phrase check
   - Fact-check and cite sources
   - Character voice verification
   - Structure validation
   - Formatting check
   - Run validation script
   - Creative validation
   - Final read-through

4. **Fix Issues:**
   - If ANY check fails, fix before saving
   - No "good enough" - must be perfect

## VALIDATION SCRIPT USAGE

```bash
bash scripts/validate-episode.sh content/blog/[filename].md
```

**Checks:**
- Banned phrases (case-insensitive search)
- Character voice consistency (CAPS, BEEP, notes)
- Word count (1000-1200 target)
- Structure (Human narration, dialogue, frontmatter)

**Output:**
- ✅ Pass: All checks passed
- ❌ Fail: Issues found, must fix before saving

## KEY PRINCIPLES

1. **This is storytelling, not content generation**
   - Create scenes readers can visualize
   - Build character relationships
   - Teach through narrative

2. **Quality over speed**
   - No "good enough"
   - Perfect or don't save
   - User trusts us to ship quality

3. **Character-driven, not keyword-driven**
   - Keywords emerge from character obsessions
   - Natural integration, not force-fit
   - SEO through authenticity

4. **Entertainment + Education**
   - Must be enjoyable to read
   - Must actually teach concepts
   - Must stand out from other AI blogs

## EPISODES TO VALIDATE

All episodes 6-25 need to be validated against this system:
- Episodes 6-15: Currently generated, need validation
- Episodes 16-25: Currently generated, need validation

**Action Required:** Run validation script on all existing episodes and fix any issues.

## NEXT STEPS

1. ✅ System files created
2. ✅ Documentation complete
3. ⏳ Validate existing episodes (6-25)
4. ⏳ Fix any issues found
5. ⏳ Use system for all future generation

## NOTES

- System is designed to be both defensive (prevent bad) and offensive (create good)
- Creative validation is as important as technical validation
- Character development across episodes is tracked
- Meta-narrative layer adds depth and continuity

---

**Status:** System ready for use. All future episode generation must follow this workflow.

