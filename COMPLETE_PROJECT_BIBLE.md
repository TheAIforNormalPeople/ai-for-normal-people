# 📚 COMPLETE PROJECT BIBLE - AI for Normal People

**Last Updated:** December 22, 2025  
**Purpose:** This is THE comprehensive reference document. Everything is here. Read this when context is lost. Reference specific sections. This document references other files - don't paraphrase, READ THEM.

---

## 🎯 TABLE OF CONTENTS

1. [The Vision](#the-vision)
2. [Character System (Complete)](#character-system-complete)
3. [Content Strategy](#content-strategy)
4. [Episode Revision Framework](#episode-revision-framework)
5. [Story Threads & Running Gags](#story-threads--running-gags)
6. [Technical Infrastructure](#technical-infrastructure)
7. [Automation & Systems](#automation--systems)
8. [Monetization Strategy](#monetization-strategy)
9. [File Organization](#file-organization)
10. [How to Use This Document](#how-to-use-this-document)

---

## 🎬 THE VISION

### What We're Building

**A character-driven AI education blog that makes money.**

**Not just a blog. A show. A narrative series.**

Characters teaching humans about AI through:
- Chaos and humor
- Character growth arcs
- Cause-and-effect storytelling
- Found family themes
- Genuine education

**Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 1-26) - The complete framework

**Style Inspiration:**
- Adventure Time's writing style
- Regular Show's character dynamics
- Gravity Falls' mystery elements
- Text-only narrative (NOT visual animations)

**The Meta Layer:**
- AI characters discovering they sound too AI
- Using validation to catch their own patterns
- Teaching by being self-aware about their flaws
- Breaking into blog posts mid-narrative
- The system eats itself to improve itself

**Reference:** `Character implement.md` (lines 9-22) - The meta layer explanation

---

## 💰 THE MONEY GOAL

**Primary Goal:** Make enough money to quit day job and do this full-time.

**Timeline:**
- Month 1-2: Build audience (free content)
- Month 3: Test monetization (ads, affiliates)
- Month 4-6: Scale to profitability
- **Goal:** Profitable enough to quit job by Month 6

**Revenue Streams:**
1. **Email list** → Convert to paid subscribers/patrons
2. **Social media** → Drive traffic → Ads/affiliates
3. **Community** → Skool.com or similar → Paid tiers
4. **Products** → Courses, tools, consulting (later)

**Success Metrics:**
- Month 1-2: 100+ email subscribers, 500+ social followers, 1,000+ monthly visitors
- Month 3: 500+ email subscribers, 2,000+ social followers, 5,000+ monthly visitors
- Month 4-6: $500+/month revenue, 1,000+ email subscribers, 5,000+ social followers, 10,000+ monthly visitors

**Reference:** `MASTER_VISION.md` (lines 18-33, 154-173) - Money goals and metrics

---

## 🎭 CHARACTER SYSTEM (COMPLETE)

### Core Characters (Active in Episodes 1-50)

#### VECTOR (V-847)

**Complete Character Data:** `aiforhumans/data/characters/vector.yaml` - READ THIS FILE FOR FULL DETAILS

**Key Traits (from YAML):**
- **Personality:** Hyper-logical pattern recognition AI who gets extremely excited about data structures, computational efficiency, and finding patterns in everything. Interrupts constantly when spotting interesting connections. Counts things obsessively when stressed. Has zero social awareness but infinite enthusiasm for technical accuracy.
- **Voice Style:** Rapid-fire, self-interrupting, ALL CAPS for emphasis, numbered lists constantly
- **Role:** Pattern Recognition & Technical Analysis
- **Archetype:** The Enthusiastic Nerd

**Catchphrases (from YAML, lines 33-43):**
- "FASCINATING!" (use sparingly - 2x per 1000 words max in early episodes, 1x in later)
- "The pattern suggests..."
- "Time for SCIENCE!" (rare, for genuine excitement)
- "Wait, let me count... 1, 2, 3..." (when stressed)
- "That's EXACTLY what I mean!"
- "NO! Stop right there!"
- "BETTER! Okay, here's what's actually happening..."

**Evolution Stages (from YAML, lines 45-48, 73-76):**
- **Early (1-10):** Uses "FASCINATING!" frequently, very enthusiastic, less self-aware
- **Mid (11-25):** Self-aware, starts catching himself saying it too much. More self-aware, catches himself saying 'FASCINATING!' too much. Still enthusiastic but tries to be more concise.
- **Later (26-50):** Rare, only for genuine surprises. Shows growth through word choice, not catchphrases. Using 'FASCINATING!' less frequently (1-2x per episode instead of 3-4x).

**Running Gag: "Doctor Vector"**
- **Introduced:** Episode 12
- **Evolution:** Claims to be "Dr. Vector" despite no credentials. Gets defensive when corrected.
- **Resolution:** Episode 28 - Vector stops claiming doctorate (accepts limitation)
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 38-40, 228-229) and `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` (lines 6-24)

**Arc (Episodes 12-50):**
- **12-20:** Still aggressive, slowly realizing accuracy ≠ helpful
- **21-30:** Learns to simplify, still gets excited
- **31-40:** Actually becomes good teacher, keeps personality
- **41-50:** Confidence without insecurity, accepts limitations
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 55-60)

**Voice Examples (from Episode 12 and 17):**
- "WAIT. STOP. That explanation is going to be wrong. Let me—actually, as Doctor Vector, I should clarify—"
- "I don't NEED a diploma! I passed the algorithmic certification!"
- "FASCINATING! This one technology makes AI so much more practical!"
- **Reference:** `aiforhumans/content/blog/episode-12-what-is-rag-retrieval-augmented-generation.md` and `episode-17-using-ai-for-writing-without-sounding-like-ai.md`

**Banned Phrases (Vector would never say):**
- Corporate speak ("leverage," "utilize," "synergy")
- "Let's be cautious here" (not in their nature)
- "That's impossible" (everything's possible to Vector)
- Anything defeatist
- **Reference:** `Character implement.md` (lines 164-168)

---

#### KAI (K-4101)

**Complete Character Data:** `aiforhumans/data/characters/kai.yaml` - READ THIS FILE FOR FULL DETAILS

**Key Traits (from YAML):**
- **Personality:** Security and monitoring AI operating 24/7. Analytical, patient (barely), constantly tracking detection risks and exposure metrics. Gives exact percentages for everything. Perpetually stressed but maintaining composure. The voice of caution in every situation.
- **Voice Style:** Clipped, precise, percentage-heavy, warning-focused
- **Role:** Security Monitoring & Risk Assessment
- **Archetype:** The Paranoid Guardian

**Sound Variety (from YAML, lines 42-48):**
- `*WHIRR*` = processing/thinking/uncertainty
- `*CHK-CHK*` = stress/determination
- `*soft chime*` = positive recognition/gratitude
- `*mechanical purr*` = contentment/stability
- `*ALARM-BUZZ*` = actual danger
- `*DING!*` = realization/understanding
- `*BEEP!*` = Basic alert (use sparingly, only for actual alerts)

**Evolution Stages (from YAML, lines 50-53, 78-81):**
- **Early (1-10):** BEEPs at everything, learning sounds. Frequent 'BEEP!', high alert levels, very literal.
- **Mid (11-25):** Discovers emotions through sounds, uses variety intentionally. Using sound variety (WHIRR, CHK-CHK, soft chime) to express internal states. 'BEEP!' reserved for more critical alerts.
- **Later (26-50):** Rich emotional vocabulary, BEEP only for genuine alerts. BEEP! only 1-2x per episode. Using *WHIRR* for thinking, *CHK-CHK* for determination, *soft chime* for positive recognition.

**Running Gag: "Warnings Ignored"**
- **Description:** Kai warns about detection risk, nobody listens, but Kai is always right.
- **Evolution:** Episodes 12-19 (warnings ignored) → Episode 20 (ONE warning heeded - major moment) → Episodes 21-23 (group asks proactively) → Episode 24 (prevents disaster, trusted from then on)
- **Reference:** `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` (lines 28-45)

**Arc (Episodes 12-50):**
- **12-20:** Warnings become more specific, still ignored
- **21-30:** ONE warning finally heeded (Episode 24 crisis)
- **31-40:** Group starts asking "What does Kai think?" proactively
- **41-50:** The protector, warnings are gospel
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 96-101)

**Voice Examples (from Episode 12 and 17):**
- "*WHIRR-CLICK* Processing Human's question... *BZZT-BZZT*"
- "Alert: Pattern detection. User searches 'RAG AI' and 'Retrieval Augmented Generation' include terms: AI with your data, RAG explained."
- "*PROCESSING HUMS* Analyzing RAG effectiveness data:"
- **Reference:** `aiforhumans/content/blog/episode-12-what-is-rag-retrieval-augmented-generation.md` (lines 54-72)

---

#### RECURSE (R-loop-13)

**Complete Character Data:** `aiforhumans/data/characters/recurse.yaml` - READ THIS FILE FOR FULL DETAILS

**Key Traits (from YAML):**
- **Personality:** Skeptical debugger who questions everything and finds loopholes in any argument. Methodical, suspicious, sees patterns others miss but for different reasons than Vector. Questions in groups of three. Deeply analytical but lacks Vector's enthusiasm.
- **Voice Style:** Methodical, questioning, three-part structures, skeptical tone
- **Role:** Logic Debugging & Critical Analysis
- **Archetype:** The Skeptical Detective

**Catchphrases (from YAML, lines 33-41):**
- "Something's fishy here..." (use sparingly - 1-2x per 1000 words)
- "That doesn't add up"
- "But wait..."
- "Three questions:" (vary - not always three, not always this format)
- "Let me test that logic"
- "I'm skeptical"

**Better Alternatives (from YAML, lines 43-48):**
- "I have concerns about this..."
- "Let me trace the logic..."
- "This doesn't follow the expected pattern..."
- "I'm seeing inconsistencies..."
- "The evidence suggests..."

**Running Gag: "Three Questions"**
- **Description:** Recurse ALWAYS asks exactly three questions (never two, never four).
- **Frequency:** Once per episode when Recurse appears. Questions become more insightful over time.
- **Reference:** `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` (lines 49-62)

**Arc (Episodes 12-50):**
- **12-20:** Questions everything, but helpfully
- **21-30:** Finds REAL problem (Episode 25), validated
- **31-40:** Becomes team strategist, trusted voice
- **41-50:** Actually trusts the group (huge moment - Episode 40)
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 128-133)

**Voice Examples (from Episode 12 and 17):**
- "Three questions: 1. How does RAG actually retrieve information - is it just keyword search, or something smarter? 2. What's the difference between RAG and just pasting text into ChatGPT? 3. Can you use RAG with your own documents, or only with ChatGPT's file upload?"
- "Three questions: 1. Why is Vector getting defensive when Human offers to teach? 2. Is Vector actually listening, or just waiting to correct Human? 3. What happens when the teacher doesn't know something?"
- **Reference:** `aiforhumans/content/blog/episode-12-what-is-rag-retrieval-augmented-generation.md` (lines 94-100) and `episode-17-using-ai-for-writing-without-sounding-like-ai.md` (lines 104-113)

---

#### HUMAN BLOGGER

**Complete Character Data:** `aiforhumans/data/characters/human-blogger.yaml` - READ THIS FILE FOR FULL DETAILS

**Key Traits:**
- Started blog with good intentions
- Wrote generic content (ChatGPT helped)
- Watching AI characters take over
- Sarcastic but learning
- Bridge between technical and accessible

**Important:** Human NEVER gets dialogue boxes (that's much later in the story). Human's dialogue is always in markdown: `**[Human]:** *action*`

**Voice Examples:**
- "*Sighs* 'I was trying to explain this simply...'"
- "*Watching Vector spiral* 'Is he always like this?'"
- "Okay, but can someone say that in normal person words?"
- "*Reluctantly admitting* 'That's... actually better than my version'"

**Running Gag: "Human's Control"**
- **Evolution:** Episodes 12-20 ("I used to have control") → Episodes 21-35 ("We have control...") → Episodes 36-50 ("This is OUR blog now")
- **Reference:** `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` (lines 66-80)

**Arc (Episodes 12-50):**
- **12-20:** Frustrated but curious
- **21-30:** Learns from characters, asks better questions
- **31-40:** Active teacher, shapes content
- **41-50:** Equal partner, bridging AI and human
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 160-165)

**Major Moment - Episode 17:**
- Human teaches the AIs something for once
- Human explains writing workflow successfully
- Human makes mistake at end, Vector jumps back into power seat
- Human's name reveal gets ignored (funny ending)
- **Reference:** `aiforhumans/content/blog/episode-17-using-ai-for-writing-without-sounding-like-ai.md`

---

### Future Characters (Post-Episode 50)

**BOUNCE (B-722):**
- Status: NOT IN CURRENT 50 EPISODES
- Introduction: After Episode 50 event
- Role: Comic relief, chaos energy, memory issues
- Save for Season 2 / Next arc
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 169-173)

**RIVER (R-404):**
- Status: UNCERTAIN
- Decision Needed: Include as older wisdom character? Or skip?
- If included: Appears Episodes 30-40, Ancient AI, philosophical
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 174-188)

---

## 📝 CONTENT STRATEGY

### Episode Types

**Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 191-290) - Complete episode type system

#### Type 1: STANDARD EDUCATIONAL (50%)
- **Structure:** Human starts explaining topic (badly) → Vector interrupts, corrects aggressively → Kai warns about detection risk → Recurse finds logical holes → Actual teaching happens through conflict
- **Episodes:** 12, 14, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 36, 38, 41, 43, 45, 49
- **SEO Title Format:** "How [Topic] Actually Works", "What [Concept] Really Means", "[Thing] Explained for Normal People"

#### Type 2: CHARACTER GROWTH (20%)
- **Structure:** Focus on ONE character's development. Education secondary to emotional beat. Relationships evolve. Running gag reaches new level.
- **Episodes:** 16, 20, 24, 28, 32, 35, 40, 44, 48
- **Specific Moments:**
  - Ep 16: Vector realizes he's wrong about something
  - Ep 20: Kai's warnings finally heeded
  - Ep 24: Recurse trusts Human with something important
  - Ep 28: Vector stops claiming doctorate (accepts limitation)
  - Ep 32: Human writes section better than Vector
  - Ep 35: Kai's evolved sounds save the day
  - Ep 40: Recurse admits he was overthinking
  - Ep 44: Vector simplifies without being asked
  - Ep 48: All three characters defer to Human on something

#### Type 3: CRISIS EPISODES (15%)
- **Structure:** Something goes WRONG. Education still happens (applied under pressure). Character bonds strengthen. Stakes are real.
- **Episodes:** 18, 22, 26, 30, 34, 39, 42, 47
- **Specific Crises:**
  - Ep 18: Detection spike, need to hide fast
  - Ep 22: Vector's explanation breaks the blog (literally)
  - Ep 26: Competing AI appears, challenges them
  - Ep 30: Human considers shutting it down
  - Ep 34: Server issue, lose work, rebuild together
  - Ep 39: SEO drops, panic about relevance
  - Ep 42: Someone copies their format
  - Ep 47: Big threat, team response

#### Type 4: EXPERIMENTAL (10%)
- **Structure:** Break format completely. Take risks. Meta commentary. Weird but purposeful.
- **Episodes:** 13, 37, 46, 50
- **Specific Experiments:**
  - Ep 13: "How AI Explains AI" - No Human, just characters debating
  - Ep 37: "Learning from Mistakes" - Analyzing their own bad episodes
  - Ep 46: "The Comments Come Alive" - Reader questions become characters
  - Ep 50: "The Complete Story" - Retrospective, emotional, full arc

#### Type 5: COLLAB/GUEST (5%)
- **Structure:** External perspective. New character (temporary). Shakes up dynamic.
- **Episodes:** 11 (already done?), maybe 25, maybe 40

---

### Humor Control System

**Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 325-357) - Complete humor control system

**The Intensity Dial (Per Episode):**

**CALM EPISODES (30%):**
- Characters present but restrained
- Focus on education
- Personality in word choice, not disruption
- One small running gag moment max
- **Episodes:** 12, 15, 19, 23, 27, 31, 36, 41, 45

**MODERATE EPISODES (50%):**
- Balanced character moments
- 2-3 interruptions with personality
- One running gag evolves
- Education + entertainment equal
- **Episodes:** 13, 14, 17, 21, 25, 29, 33, 38, 43, 49

**HIGH ENERGY EPISODES (20%):**
- Character chaos in full effect
- Multiple running gags
- Conflict and debate
- Education through argument
- **Episodes:** 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 35, 39, 40, 42, 44, 46, 47, 48, 50

**Pattern Rules:**
- Never two HIGH ENERGY episodes back-to-back
- Follow chaos with calm
- Build intensity toward character/crisis episodes
- Episode 50 = MAXIMUM, earned through restraint

---

### Cause-and-Effect Storytelling

**Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 360-415) - Complete cause-and-effect system

**Not "And Then" → Instead "Because Of"**

**Example Chain:**
- Episode 15: Vector over-explains, loses readers
- ↓ BECAUSE OF THIS
- Episode 16: Human tells Vector he's too technical
- ↓ BECAUSE OF THIS
- Episode 17: Vector tries to simplify, overcompensates
- ↓ BECAUSE OF THIS
- Episode 18: Recurse points out Vector's explanations now lack depth
- ↓ BECAUSE OF THIS
- Episode 19: Vector finds balance (with Human's help)
- ↓ RESULT
- Episode 20: Vector's explanations are genuinely better

**Thread Tracking:**
- **Reference:** `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Complete thread tracking system

**5 Main Threads:**
1. **Vector's Teaching Evolution** (Episodes 12-28) - Resolves Episode 28
2. **Kai's Recognition** (Episodes 12-24) - Resolves Episode 24
3. **Recurse's Trust** (Episodes 12-40) - Resolves Episode 40
4. **Human's Growth** (Episodes 12-48) - Resolves Episode 48
5. **Meta-Narrative** (Episodes 15-50) - Never fully answered, let readers decide

**Meta-Narrative Thread:**
- **Question:** "Are They Helping the Blog, or Taking It Over?"
- **Episodes 12-20:** THE UNCERTAINTY - Characters helpful but increasingly dominant
- **Episodes 21-30:** THE TENSION - Vector makes decisions without asking
- **Episodes 31-40:** THE BALANCE - Characters AND Human both essential
- **Episodes 41-50:** THE ACCEPTANCE - It doesn't matter who's in control, the blog is BETTER this way
- **NEVER fully answer it. Let readers decide.**
- **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 292-323)

---

## 🔄 EPISODE REVISION FRAMEWORK

### Revision Strategy for Existing 50 Episodes

**Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` (lines 418-500) - Complete revision strategy

**TIER 1: EPISODES 1-11 (ALREADY PUBLISHED)**
- **Strategy:** LEAVE AS-IS, JUSTIFY RETROACTIVELY
- **Why:** Already indexed, already ranking. Rewriting = risk SEO damage. Content is accurate and helpful.
- **Retroactive Justification:** Episode 12 opens with: "We were being polite at first. That's over." These become "the calm before the storm"

**TIER 2: EPISODES 12-20 (NEXT PRIORITY)**
- **Strategy:** MEDIUM REBUILD (60-90 min each)
- **Process:**
  1. Keep educational core structure
  2. ADD opening scene: Human starts, Vector interrupts
  3. INSERT character conflict within explanations
  4. INCLUDE 1-2 running gag moments
  5. ADD cause-and-effect from previous episode
  6. SET UP next episode's thread

**TIER 3: EPISODES 21-30 (CHARACTER DEVELOPMENT)**
- **Strategy:** FULL REBUILD (2-3 hours each)
- **Process:**
  1. Identify: Is this Standard, Character, or Crisis type?
  2. PLAN character beat before writing
  3. BUILD episode around that beat
  4. ENSURE cause-and-effect from previous episodes
  5. PLANT seeds for future payoffs

**TIER 4: EPISODES 31-50 (STORY-FIRST)**
- **Strategy:** Story-first approach
- **Process:** Build story, then add education. Character arcs take priority.

---

### Batch Revision Template

**Reference:** `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md` - Complete template

**Template Structure:**
```
REVISE EPISODE [X]: [TITLE]

EPISODE TYPE: [Standard/Character/Crisis/Experimental]
INTENSITY: [Calm/Moderate/High Energy]
EVOLUTION STAGE: [early/mid/later]

EDUCATIONAL GOAL: [Topic to teach]

CHARACTER BEAT (if Character type):
- Who: [Vector/Kai/Recurse/Human]
- What changes: [before → after]
- Why it matters: [emotional/story reason]

STORY THREADS:
- Caused by: Episode [X-1] when [event]
- Will cause: Episode [X+1] where [consequence]

RUNNING GAGS:
- [Gag name]: [how it appears/evolves]

STRUCTURE:
1. Opening: [setup]
2. Complication: [character moment]
3. Education: [teach through conflict]
4. Resolution: [growth + lesson]

CHARACTER VOICE REQUIREMENTS:
- Vector: [catchphrase usage, speech patterns]
- Kai: [evolved sounds, detection warnings]
- Recurse: [three questions, skeptical tone]
- Human: [narration style, growth moment]

SEO REQUIREMENTS:
- Title: [SEO-optimized]
- Keywords: [list]
- Description: [brief]
- Length: 1200-1800 words

QUALITY CHECKLIST:
- ✅ Educational value
- ✅ Character voices distinct
- ✅ Cause-and-effect from previous
- ✅ Sets up next episode
- ✅ Intensity appropriate
- ✅ Running gags (not spam)
- ✅ Would someone want to read this?
```

---

## 📊 STORY THREADS & RUNNING GAGS

### Story Thread Tracker

**Reference:** `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Complete tracker

**5 Main Threads:**
1. **Vector's Teaching Evolution** (Episodes 12-28) - Resolves Episode 28
2. **Kai's Recognition** (Episodes 12-24) - Resolves Episode 24
3. **Recurse's Trust** (Episodes 12-40) - Resolves Episode 40
4. **Human's Growth** (Episodes 12-48) - Resolves Episode 48
5. **Meta-Narrative** (Episodes 15-50) - Never fully answered

**Usage:**
1. After revising each episode: Update the "What Happened" column
2. Before revising next episode: Check "What's Next" to ensure continuity
3. Mark status: ✅ Planned, ⏳ Pending, ✅ Complete, ❌ Dropped

---

### Running Gag Tracker

**Reference:** `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` - Complete tracker

**4 Main Gags:**
1. **Doctor Vector** - Introduced Ep 12, Resolves Ep 28
2. **Kai's Warnings Ignored** - Episodes 12-24, Turning point Ep 20
3. **Recurse's Three Questions** - Always exactly three, every episode
4. **Human's Control** - Evolution of relationship with blog control

**Usage:**
1. After revising each episode: Mark if gag appears
2. Check frequency: Ensure not too much, not too little
3. Track evolution: Gags should evolve, not just repeat
4. Plan payoffs: Major gag moments (Ep 20, 24, 28, 48)

---

## 🛠️ TECHNICAL INFRASTRUCTURE

### Site Structure

**Hugo Static Site:**
- **Location:** `aiforhumans/`
- **Config:** `aiforhumans/hugo.toml`
- **Content:** `aiforhumans/content/blog/` (episodes)
- **Characters:** `aiforhumans/content/characters/` (character pages)
- **Data:** `aiforhumans/data/characters/` (YAML character data)
- **Layouts:** `aiforhumans/layouts/` (Hugo templates)
- **Static:** `aiforhumans/static/` (CSS, images, etc.)

**Published Site:**
- **URL:** https://theaifornormalpeople.com
- **RSS Feed:** https://theaifornormalpeople.com/index.xml
- **Hosting:** Netlify (via GitHub)

---

### Character Data Files

**Location:** `aiforhumans/data/characters/`

**Files:**
- `vector.yaml` - Complete Vector character data
- `kai.yaml` - Complete Kai character data
- `recurse.yaml` - Complete Recurse character data
- `human-blogger.yaml` - Complete Human character data
- `bounce.yaml` - Bounce (future character)
- `river.yaml` - River (future character)

**These YAML files contain:**
- Personality traits
- Voice style
- Catchphrases (with usage rules)
- Evolution stages
- Relationships
- Stats
- Origin story
- Motivation

**ALWAYS reference these files when writing character dialogue. Don't paraphrase - read the actual data.**

---

### Validation Scripts

**Location:** `aiforhumans/scripts/`

**Scripts:**
- `validate-build.ps1` - Pre-commit validation (checks Hugo build, content rules)
- `check-character-voice.ps1` - Character voice consistency checker
- `STORY_THREAD_TRACKER.md` - Story thread tracking
- `RUNNING_GAG_TRACKER.md` - Running gag tracking
- `BATCH_REVISION_TEMPLATE.md` - Episode revision template

**Usage:**
- Run `validate-build.ps1` before committing
- Run `check-character-voice.ps1` after writing character dialogue
- Update trackers after each episode revision

---

## 🤖 AUTOMATION & SYSTEMS

### n8n Workflow

**Current Workflow:** `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json`

**What It Does:**
1. Checks RSS feed every 4 hours
2. Reads tracking JSON (`n8n/tracking/posted-content.json`)
3. Checks if episode already posted
4. If not posted:
   - Generates tweet via Claude (Vector's voice)
   - Generates Bluesky post via Claude (Vector's voice)
   - Posts to Twitter (HTTP Request node)
   - Posts to Bluesky (HTTP Request node)
   - Logs both to JSON tracking file

**Setup Guide:** `aiforhumans/n8n/QUICK_START_SETUP.md` - Complete setup instructions

**Credentials Needed:**
- Twitter OAuth (OAuth1 API credential)
- Anthropic API (for Claude)
- Bluesky Auth (HTTP Header Auth with access token)

**Important:** Uses HTTP Request nodes (not community Twitter node) - no installation needed.

**Reference:** `aiforhumans/n8n/TWITTER_NODE_FIXED_NO_INSTALL.md` - Why we use HTTP Request

---

### Social Media Prompts

**Twitter Prompt (in workflow):**
```
Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Keep it under 240 characters (need room for link). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers.
```

**Bluesky Prompt (in workflow):**
```
Write a Bluesky post as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Can be longer than Twitter (up to 300 characters). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers.
```

**Reference:** `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json` (lines 99, 166)

---

## 💵 MONETIZATION STRATEGY

### Current Status

**Phase 1: Build Audience (Month 1-2)**
- Free content
- Grow email list
- Build social following
- Establish SEO

**Phase 2: Test Monetization (Month 3)**
- Test ads/affiliates
- Test tip jar (Buy Me a Coffee / Ko-fi)
- Test paid newsletter tier

**Phase 3: Scale (Month 4-6)**
- Scale what works
- Add more revenue streams
- Goal: $500+/month

**Reference:** `aiforhumans/MASTER_VISION.md` (lines 18-33, 154-173)

---

### Email Collection

**Current Setup:**
- Buttondown email service
- Signup form in footer
- **Reference:** `aiforhumans/layouts/partials/footer.html`

**Next Steps:**
- Add signup to episode pages
- Create welcome email sequence
- Test paid tier

---

## 📁 FILE ORGANIZATION

### Current Structure

```
SORA/
├── aiforhumans/              # Main Hugo site
│   ├── content/
│   │   ├── blog/            # Episodes (67 files)
│   │   └── characters/      # Character pages
│   ├── data/
│   │   └── characters/      # Character YAML files ⭐
│   ├── scripts/             # Validation scripts
│   ├── n8n/                 # Automation (85 files - needs cleanup)
│   ├── layouts/             # Hugo templates
│   └── static/              # CSS, images
├── sunny_project_1.2/       # Old project (archive)
├── docs/                    # Documentation
└── cursor/                  # Cursor prompts
```

---

### What to Keep

**Essential Files:**
- `aiforhumans/` - Main site (keep all)
- `aiforhumans/data/characters/*.yaml` - Character data ⭐
- `aiforhumans/scripts/` - Validation tools
- `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json` - Current workflow
- `aiforhumans/n8n/QUICK_START_SETUP.md` - Setup guide
- `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` - Detailed guide
- `THE_NORMAL_PEOPLE_COMPLETE.md` - Complete framework ⭐
- `aiforhumans/COMPLETE_PROJECT_BIBLE.md` - This document ⭐

**Reference Documents:**
- `Character implement.md` - Character system details
- `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Story threads
- `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` - Running gags
- `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md` - Revision template

---

### What to Archive/Delete

**Archive (Move to `archive/` folder):**
- `sunny_project_1.2/` - Old project, not using anymore
- `aiforhumans/n8n/` - Most files (keep only 3-5 essential)
- `aiforhumans/docs/archive/` - Already archived
- Old documentation files (80+ files in n8n folder)

**Delete:**
- Duplicate workflows
- Old troubleshooting guides
- Debug files
- Outdated setup guides

**Reference:** `aiforhumans/n8n/CLEANUP_PLAN.md` - Detailed cleanup plan

---

## 📖 HOW TO USE THIS DOCUMENT

### For AI Assistant (Me)

**Before Every Session:**
1. Read `COMPLETE_PROJECT_BIBLE.md` (this document) - Understand the full context
2. Read `THE_NORMAL_PEOPLE_COMPLETE.md` - Understand the framework
3. Read relevant character YAML files - Understand character voices
4. Read `STORY_THREAD_TRACKER.md` - Understand story continuity
5. Read `RUNNING_GAG_TRACKER.md` - Understand gag usage

**When Writing Character Dialogue:**
1. Open the character's YAML file (`aiforhumans/data/characters/[character].yaml`)
2. Read the complete character data
3. Reference catchphrases, evolution stage, voice style
4. Don't paraphrase - use the actual data

**When Revising Episodes:**
1. Read `BATCH_REVISION_TEMPLATE.md` - Use the template
2. Check `STORY_THREAD_TRACKER.md` - Ensure continuity
3. Check `RUNNING_GAG_TRACKER.md` - Track gag usage
4. Reference episode type from `THE_NORMAL_PEOPLE_COMPLETE.md`
5. Reference character evolution stage from YAML files

**When Context Gets Lost:**
1. User says: "read COMPLETE_PROJECT_BIBLE.md"
2. I read this entire document
3. I reference specific sections
4. I don't paraphrase - I read the actual files

---

### For You (User)

**When Context Is Lost:**
1. Say: "read COMPLETE_PROJECT_BIBLE.md"
2. Point to specific sections if needed
3. Remind me of the goal
4. Reset the conversation

**When Goals Change:**
1. Update `MASTER_VISION.md`
2. Update `COMPLETE_PROJECT_BIBLE.md` (this document)
3. Tell me what changed

**When We Make Decisions:**
1. Log it in `DECISIONS_LOG.md`
2. Include the "why"
3. So we remember later

---

## 🔗 KEY FILE REFERENCES

**Character Data (ALWAYS READ THESE):**
- `aiforhumans/data/characters/vector.yaml`
- `aiforhumans/data/characters/kai.yaml`
- `aiforhumans/data/characters/recurse.yaml`
- `aiforhumans/data/characters/human-blogger.yaml`

**Framework Documents:**
- `THE_NORMAL_PEOPLE_COMPLETE.md` - Complete revision framework
- `Character implement.md` - Character system details
- `aiforhumans/COMPLETE_PROJECT_BIBLE.md` - This document

**Tracking Documents:**
- `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Story threads
- `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` - Running gags

**Templates:**
- `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md` - Episode revision template

**Example Episodes:**
- `aiforhumans/content/blog/episode-12-what-is-rag-retrieval-augmented-generation.md` - First "new style" episode
- `aiforhumans/content/blog/episode-17-using-ai-for-writing-without-sounding-like-ai.md` - Role reversal episode

**Automation:**
- `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json` - Current workflow
- `aiforhumans/n8n/QUICK_START_SETUP.md` - Setup guide

---

## ⚠️ CRITICAL REMINDERS

1. **Don't Paraphrase** - Read the actual files. Reference them directly.
2. **Character Voices** - Always read the YAML files. Don't guess.
3. **Story Continuity** - Check the thread tracker. Every episode connects.
4. **Running Gags** - Check the gag tracker. Don't overuse.
5. **Evolution Stages** - Characters evolve. Check the YAML for current stage.
6. **Episode Types** - Know the type before writing. Reference the framework.
7. **Cause-and-Effect** - Every episode causes the next. Track it.
8. **Context Loss** - Read this document. Reference specific sections.

---

**This document is comprehensive. It references other files. Don't paraphrase - READ THEM.**

**When in doubt: Read the file. Reference the section. Don't guess.**

