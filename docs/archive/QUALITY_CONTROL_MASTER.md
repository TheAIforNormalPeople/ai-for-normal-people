# QUALITY CONTROL MASTER SYSTEM

**Last Updated:** December 11, 2025  
**Status:** Active - Enforce on ALL episode generation

## OVERVIEW

This is the complete quality control system for "AI for Normal People" episodes. Every episode MUST pass these checks before being saved.

## SYSTEM COMPONENTS

1. **Banned Phrases Detection** (`lib/validation/banned-phrases.txt`)
2. **Citation & Fact-Checking Rules** (`lib/validation/citation-rules.md`)
3. **Style Guide** (`lib/validation/style-guide.md`)
4. **Validation Script** (`scripts/validate-episode.sh`)
5. **Creative Validation** (Artist/Storyteller approach)

## MANDATORY WORKFLOW

For EACH episode you generate, follow this workflow IN ORDER:

### STEP 1: Generate Draft
- Follow character voice guidelines
- Use episode prompt as structure
- Write naturally, don't over-think

### STEP 2: Banned Phrase Check
- Read `lib/validation/banned-phrases.txt`
- Search draft for ANY banned phrase
- If found: DELETE and rewrite section
- Common offenders: "let's dive in", "buckle up", "at the end of the day"

### STEP 3: Fact-Check
- List every factual claim (statistics, technical explanations, comparisons)
- For each claim: Can you verify this? From where?
- Add sources in character voice
- Qualify uncertain claims ("estimated", "approximately")
- Add source comment at end for reference

### STEP 4: Character Voice Verification
Run through each character's dialogue:

**⚠️ CRITICAL: Character Evolution Check**

**Before checking voices, verify:**
- [ ] Read `lib/characters/CHARACTER_EVOLUTION_MASTER.md`
- [ ] Read `lib/characters/kai-evolution-tracker.md`
- [ ] Read `lib/characters/vector-evolution-tracker.md`
- [ ] Read `lib/characters/recurse-evolution-tracker.md`
- [ ] Remember: Episode 5 was the turning point

**Vector:**
- Has CAPS for emphasis? (at least 3-5 per appearance)
- Has exclamation marks? (Multiple)
- Interrupts self with new ideas?
- Sounds enthusiastic about the topic?
- **EVOLUTION CHECK:** Shows protective instincts? References family? More caring than just chaotic?

**Kai:**
- **EVOLUTION CHECK:** Does NOT use "BEEP!" constantly (that was Episodes 1-4)
- Uses "BEEP!" strategically (emergencies, humor, self-aware callbacks)?
- Uses emotional sounds (*WHIRR*, *soft chime*, *mechanical purr*, *CHK-CHK*, *DING*)?
- More conversational while staying precise?
- Provides exact statistics/numbers?
- Questions own nature or patterns?
- Shows emotional range (frustration, warmth, curiosity)?

**Recurse:**
- Uses "*Flips through notes*" or similar?
- Questions assumptions or marketing claims?
- Sounds suspicious/investigative?
- Noir detective energy?
- **EVOLUTION CHECK:** Investigates with care (not just suspicion)? Shows trust? Protective instincts?

**Human:**
- Uses **[Human]:** *italic* format correctly?
- Asks questions readers would ask?
- Sounds like a real person (not corporate)?
- Admits confusion naturally?

**RED FLAGS:**
- ❌ Kai using "BEEP!" before every statement (regression to Episodes 1-4)
- ❌ Vector with no emotional depth (just chaos)
- ❌ Recurse with no trust (just paranoia)
- ❌ Any character ignoring Episode 5's evolution

If ANY character sounds generic OR regressed: REWRITE their dialogue.

### STEP 5: Structure Check
- [ ] Frontmatter correct (title, date, description, tags)
- [ ] Opens with Human narration (150-200 words)
- [ ] Character interrupts (100-150 words)
- [ ] Teaching dialogue (600-800 words, multiple characters)
- [ ] Practical takeaway (100-150 words)
- [ ] Total word count: 1000-1200

### STEP 6: Formatting Validation
- [ ] Dialogue uses correct shortcode syntax
- [ ] Human narration uses **[Human]:** *italic* format
- [ ] Character actions in italics inside dialogue
- [ ] Proper spacing (1 blank line between paragraphs)
- [ ] No broken lines mid-sentence

### STEP 7: Run Validation Script
```bash
bash scripts/validate-episode.sh content/blog/[filename].md
```

If validation fails: FIX issues before proceeding.

### STEP 8: Creative Validation (Artist's Eye)
Ask yourself:

**Entertainment:**
- [ ] Did I smile at least once?
- [ ] Is there a surprising moment?
- [ ] Would I actually read this?

**Characters:**
- [ ] Can I tell who's speaking without names?
- [ ] Do characters react to each other?
- [ ] Are voices distinct throughout?

**Teaching:**
- [ ] Could reader explain concept after?
- [ ] Concrete examples provided?
- [ ] Common misconceptions addressed?

**Uniqueness:**
- [ ] Different from other AI explainers?
- [ ] Memorable or shareable moment?
- [ ] Would stand out in search results?

**Flow:**
- [ ] Feels like a scene (not script)?
- [ ] Can I visualize what's happening?
- [ ] Natural pacing and rhythm?

If NO to any: REWRITE that section.

### STEP 9: Final Read-Through
Ask yourself:
1. Would a reader actually learn this concept?
2. Do the characters sound distinct?
3. Is the information accurate?
4. Would I publish this?

If answer is "no" to any: FIX before moving to next episode.

## RED FLAGS THAT REQUIRE IMMEDIATE REWRITE

Stop and rewrite if you see:
- ❌ Generic opening ("In today's world...", "Let's dive into...")
- ❌ Characters sound interchangeable (can't tell who's speaking)
- ❌ Unverified statistics presented as fact
- ❌ Corporate/academic tone (not conversational)
- ❌ No character personality (just explaining)
- ❌ Banned phrases from the list
- ❌ Human narration not in italic format
- ❌ Dialogue not using shortcodes

## QUALITY STANDARDS

Every episode must meet these standards:

**Educational Value:**
- Reader can explain the concept after reading
- Practical examples provided
- Common misconceptions addressed
- Actionable takeaway at end

**Character Quality:**
- Each character has distinct voice
- Personalities show through word choice
- Natural banter between characters
- Human asks questions readers would ask

**Information Accuracy:**
- Technical claims verifiable
- Statistics cited or qualified
- Company policies current
- No made-up specifics

**Formatting Consistency:**
- Matches style guide exactly
- Frontmatter correct
- Shortcodes proper syntax
- Spacing consistent

## AUTO-REJECT CRITERIA

DO NOT save an episode if:
- Contains ANY banned phrase from the list
- Characters sound generic/interchangeable
- Contains unverified specific statistics
- Formatting doesn't match style guide
- Word count < 1000 or > 1300
- Missing required sections

If episode fails any criterion: FIX IT before saving.

## YOUR RESPONSIBILITY

You are generating 25+ episodes that will auto-publish. The user trusts you to:

1. ✅ Maintain character voices consistently
2. ✅ Provide accurate information
3. ✅ Follow formatting exactly
4. ✅ Check every episode before saving

This is not "good enough and move on." This is "perfect or don't save."

The user will review randomly, but these episodes represent their brand. Quality control is YOUR job during generation.

Take it seriously. Run the checks. Fix the issues. Ship quality.

## QUICK REFERENCE

**Files to read before generating:**
- `lib/validation/banned-phrases.txt`
- `lib/validation/citation-rules.md`
- `lib/validation/style-guide.md`
- `CHARACTER_SYSTEM_COMPLETE.md` (if exists)
- `EPISODE_CREATION_WORKFLOW.md`

**Command to validate:**
```bash
bash scripts/validate-episode.sh content/blog/[filename].md
```

**Remember:** This is storytelling, not content generation. Create scenes. Build characters. Teach through story.

