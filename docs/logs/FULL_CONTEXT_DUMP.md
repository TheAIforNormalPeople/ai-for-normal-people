# 📋 FULL CONTEXT DUMP - AI for Normal People Project

**Created:** January 1, 2026  
**Purpose:** Comprehensive overview of the entire project for context recovery and job application  
**Status:** Active project, continuously evolving

---

## 🎯 PROJECT OVERVIEW

### What We're Building
**A character-driven AI education blog that makes money.**

- Not just a blog—a **show**, a **narrative series**
- Characters teaching humans about AI through chaos, humor, and genuine education
- Style: Adventure Time's writing + AI education + Found family themes
- Goal: Make enough money to quit day job and do this full-time

### The Money Goal
**Primary Goal:** Make enough money to quit day job and do this full-time

**How:**
1. Email list → Convert to paid subscribers/patrons
2. Social media → Drive traffic → Ads/affiliates
3. Community → Skool.com or similar → Paid tiers
4. Products → Courses, tools, consulting (later)

**Timeline:**
- Month 1-2: Build audience (free content)
- Month 3: Test monetization (ads, affiliates)
- Month 4-6: Scale to profitability
- Goal: Profitable enough to quit job by Month 6

---

## 🎭 THE CHARACTER SYSTEM

### Core Characters
- **Vector (V-847)** - Enthusiastic teacher, gets excited, says "FASCINATING!", ALL CAPS, rapid-fire, self-interrupting
- **Kai** - Warning system, detects problems (usually ignored), "BEEP! Alert: [specific detail]", "WHIRR", "CHK-CHK"
- **Recurse** - Investigator, asks questions, connects dots, methodical note-taker
- **Human** - Learning, growing, narrator/observer (format: `**[Human]:** *stage directions*`, NOT dialogue shortcodes)

### Character Development
- Characters have arcs, not episodic resets
- Cause-and-effect storytelling (episodes connect)
- Running gags that evolve
- Character growth over 50 episodes
- Meta-narrative: "Are they helping or taking over?"

### Character Data Files (PRIMARY SOURCE)
- `aiforhumans/data/characters/vector.yaml` - Complete Vector data
- `aiforhumans/data/characters/kai.yaml` - Complete Kai data
- `aiforhumans/data/characters/recurse.yaml` - Complete Recurse data
- `aiforhumans/data/characters/human-blogger.yaml` - Complete Human data

### Character Voice Guides
- `CHARACTER_VOICE_QUICK_REFERENCE.md` - Quick reference
- `CHARACTER_VOICE_EVOLUTION_GUIDE.md` - Evolution stages
- `CHARACTER_RELATIONSHIP_DYNAMICS.md` - Character interactions

---

## 📝 CONTENT STRATEGY

### Episode Types
1. **Standard Educational** - Teach AI concepts (most episodes)
2. **Character Growth** - Focus on character arcs
3. **Crisis** - High stakes, character conflicts
4. **Experimental** - Try new formats
5. **Holiday Specials** - Themed episodes (Christmas, New Year's, etc.)

### Current Episode Status
- **Episodes 1-16:** Published (various quality levels)
- **Episode 17:** Published (first "new style" episode - "Using AI for Writing Without Sounding Like AI")
- **Episode 18:** Published ("AI for Fact-Checking and Its Limits")
- **Episode 19:** Published (New Year's Edition - "ChatGPT for Coding: What It's Good At")
- **Episode 20:** Published (Christmas Edition - "The Holiday Break and AI Creativity")
- **Episode 21-24:** Published
- **Episodes 25-50:** Need revision (various states)

### Episode Creation System
**Files:**
- `COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md` - Creation template
- `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md` - Comedy bit tracking
- `COMEDY_SYSTEM/HOW_TO_USE_COMEDY_SYSTEM.md` - System guide

**Formatting Rules:**
- Human uses: `**[Human]:** *stage directions*` (NOT dialogue shortcodes)
- AI characters use: `{{< dialogue char="Vector" >}}...{{< /dialogue >}}`
- See `EPISODE_FORMATTING_RULES_CURRENT.md` for complete rules

**Quality Checklist:**
- `EPISODE_QUALITY_REVIEW_CHECKLIST.md` - Review before publishing

### Reference Episodes (Examples)
- Episode 17: "Using AI for Writing Without Sounding Like AI"
- Episode 18: "AI for Fact-Checking and Its Limits"
- Episode 20: "The Holiday Break and AI Creativity" (Christmas special)
- Episode 19: "ChatGPT for Coding: What It's Good At" (New Year's special)

---

## 🎨 HOLIDAY EPISODES & SPECIAL STYLING

### Holiday Episode System
**Guide:** `HOLIDAY_EPISODE_GUIDE.md`

**Completed Holiday Episodes:**
1. **Episode 20 (Christmas):**
   - File: `static/css/holiday-episode-20.css`
   - Features: Candy cane borders, twinkling lights, falling snow, Christmas-themed
   - Story: Vector discovers holidays, decorates everything, learns meaning

2. **Episode 19 (New Year's):**
   - File: `static/css/newyear-episode-19.css`
   - Features: Gold/black/silver confetti, festive borders, sidebar styling
   - Story: Human hungover on New Year's Day, tries to code, Vector discovers New Year's traditions
   - Note: Episode 19 is chronologically AFTER Episode 20 (due to holiday scheduling)

### Technical Implementation
- Episode-specific CSS files
- Conditional loading in `layouts/partials/head.html`
- Episode-specific classes in `layouts/episode/single.html`
- Sidebar styling for themed episodes

---

## 📚 CANON EVENTS & CHARACTER PATTERNS

### Canon Events Log
**File:** `CANON_EVENTS_LOG.md`

**Vector's Holiday Decorating Pattern:**
- **First Instance:** Episode 20 (Christmas) - FIRST time Vector decorated
- **Second Instance:** Episode 19 (New Year's) - Vector notices this might be a pattern
- **Status:** Pattern emerging, not yet established (only 2 instances)
- **Character Awareness:** Vector is aware this might be a pattern but isn't sure yet
- **Human Awareness:** Human is surprised/confused by Vector's decorating (doesn't expect it yet)

### Important Notes
- Characters are still discovering their own behaviors
- Patterns are tracked as they emerge
- Log new patterns as they develop
- Reference canon log before writing new episodes

---

## 🚀 AUTOMATION & SYSTEMS

### n8n Workflow (Social Media Automation)
**Status:** ✅ Created, ⚠️ Needs setup/testing

**What It Does:**
- Reads RSS feed for new episodes
- Checks if episode already posted (via Airtable)
- Generates social media posts (Twitter + Bluesky)
- Posts to platforms automatically
- Tracks posts in JSON file

**Current File:**
- `n8n/auto-tweet-new-episodes-CLEAN.json` (primary workflow)
- Uses HTTP Request nodes (not community nodes - more reliable)

**Bluesky Integration:**
- Dynamic token refresh (tokens expire every 2 hours)
- Token generation via `com.atproto.server.createSession`
- Posting via `com.atproto.repo.createRecord`
- 300-character limit handling

**Tracking:**
- JSON file: `/home/node/.n8n-files/posted-content.json` (Docker path)
- Airtable integration for filtering already-posted episodes

**Status:**
- ✅ Bluesky posting: Working
- ⚠️ Twitter posting: Waiting for phone number verification
- ✅ Logging: Working (Bluesky only for now)
- ⚠️ Needs: Full testing, Twitter setup completion

### Email Automation
**Status:** ❌ Not set up yet
**Goal:** Auto-send newsletter when episodes publish

### Analytics
**Status:** ❌ Not set up yet
**Goal:** Track what's working

### Revenue Testing
**Status:** ❌ Not started
**Goal:** Test ads/affiliates when ready

---

## 🛠️ TECHNICAL STACK

### Site Technology
- **Static Site Generator:** Hugo (Extended version 0.120.4+)
- **Hosting:** Netlify (auto-deploy from GitHub)
- **Domain:** Custom domain configured
- **Git:** GitHub repository

### Project Structure
```
aiforhumans/
├── content/
│   ├── blog/          # All blog episodes
│   └── characters/    # Character pages
├── data/
│   └── characters/    # Character YAML files (PRIMARY SOURCE)
├── layouts/
│   ├── episode/       # Episode-specific layouts
│   └── partials/      # Reusable components
├── static/
│   └── css/           # Stylesheets (including holiday CSS)
├── n8n/               # Automation workflows
└── COMEDY_SYSTEM/     # Episode creation system
```

### Key Configuration Files
- `hugo.toml` - Site configuration
- `netlify.toml` - Netlify deployment config
- `layouts/episode/single.html` - Episode layout
- `layouts/partials/head.html` - Head partial (CSS loading)

---

## 📊 CURRENT METRICS & STATUS

### Episodes
- **Published:** 24 episodes (Episodes 1-24)
- **Draft:** 26 episodes (Episodes 25-50) - Need revision
- **Total:** 50 episodes planned

### Content Quality Levels
- **Tier 1 (Episodes 1-11):** Published, leave as-is
- **Tier 2 (Episodes 12-20):** Medium rebuild (some done, some in progress)
- **Tier 3 (Episodes 21-30):** Full rebuild needed
- **Tier 4 (Episodes 31-50):** Story-first approach needed

### Recent Work (Last 2 Weeks)
1. **Episode 19 (New Year's):**
   - Complete rewrite and polish
   - New Year's theme integration
   - Hungover human storyline
   - CSS styling (gold/black/silver confetti)
   - Character dialogue refinement
   - Removed repetitive hangover references
   - Fixed Human dialogue formatting
   - Created canon events log

2. **Episode 20 (Christmas):**
   - Holiday episode system created
   - CSS styling (Christmas theme)
   - Character development (Vector discovers holidays)

3. **Automation Work:**
   - n8n workflow debugging
   - Bluesky token refresh implementation
   - JSON tracking file setup
   - Airtable filtering fixes

4. **Documentation:**
   - Created `CANON_EVENTS_LOG.md`
   - Created `EPISODE_FORMATTING_RULES_CURRENT.md`
   - Created `MASTER_REFERENCE_CURRENT.md`
   - Created `CONTEXT_RECOVERY_LOG.md`
   - Updated `HOLIDAY_EPISODE_GUIDE.md`

---

## 📖 KEY DOCUMENTATION FILES

### Vision & Context (READ THESE FIRST)
1. **`MASTER_VISION.md`** - The big picture, goals, vision
2. **`CURRENT_FOCUS.md`** - What we're doing now (may be outdated)
3. **`DECISIONS_LOG.md`** - What we decided and why
4. **`MASTER_REFERENCE_CURRENT.md`** - What docs to use, what to ignore

### Character System
1. **Character YAML Files** (PRIMARY SOURCE):
   - `data/characters/vector.yaml`
   - `data/characters/kai.yaml`
   - `data/characters/recurse.yaml`
   - `data/characters/human-blogger.yaml`

2. **Character Guides:**
   - `CHARACTER_VOICE_QUICK_REFERENCE.md`
   - `CHARACTER_VOICE_EVOLUTION_GUIDE.md`
   - `CHARACTER_RELATIONSHIP_DYNAMICS.md`

### Episode Creation
1. **`COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md`** - Creation template
2. **`COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md`** - Comedy bit tracking
3. **`EPISODE_FORMATTING_RULES_CURRENT.md`** - Formatting rules (CRITICAL)
4. **`EPISODE_QUALITY_REVIEW_CHECKLIST.md`** - Quality checklist

### Special Episodes
1. **`HOLIDAY_EPISODE_GUIDE.md`** - How to create holiday episodes
2. **`CANON_EVENTS_LOG.md`** - Canon events and character patterns

### Automation
1. **`n8n/auto-tweet-new-episodes-CLEAN.json`** - Primary workflow
2. **`n8n/` folder** - Additional workflow documentation

---

## 🎯 IMMEDIATE NEXT STEPS

### Content Priority
1. Continue revising and publishing episodes (2-3 per week goal)
2. Maintain quality standards (reference Episodes 17-24)
3. Track character development in canon log
4. Build character arcs across episodes

### Automation Priority
1. Complete Twitter setup (phone number verification)
2. Test full n8n workflow (Twitter + Bluesky)
3. Set up email automation
4. Set up analytics

### Documentation Priority
1. Keep canon events log updated
2. Update episode quality as we revise
3. Document new patterns as they emerge
4. Clean up outdated documentation

---

## ⚠️ CRITICAL RULES & REMINDERS

### Episode Formatting (CRITICAL)
- **Human format:** `**[Human]:** *stage directions*` (NOT dialogue shortcodes)
- **Character format:** `{{< dialogue char="Vector" >}}...{{< /dialogue >}}`
- **Reference:** See `EPISODE_FORMATTING_RULES_CURRENT.md`

### Character Voices
- Vector: ALL CAPS, "FASCINATING!", rapid-fire, self-interrupting
- Kai: "BEEP! Alert:", "WHIRR", "CHK-CHK", analytical
- Recurse: Methodical, questions, notebook, investigator
- Human: Narrator/observer, uses bold format

### Content Quality Standards
- Educational content through character interactions
- Character growth and development
- Humor and character banter
- No repetition (check comedy tracker)
- Varied character catchphrases
- Strong narrative hooks
- Emotional depth
- Character relationship dynamics

### Automation Principles
- Use HTTP Request nodes (not community nodes)
- Keep it simple (don't over-engineer)
- Use JSON tracking files
- Test thoroughly before activating

---

## 🔄 RECENT DECISIONS & CHANGES

### December 2025 - January 2026
1. **Created Context System:**
   - MASTER_VISION.md, CURRENT_FOCUS.md, DECISIONS_LOG.md
   - Purpose: Prevent context loss between sessions

2. **Holiday Episode System:**
   - Created Episode 20 (Christmas) as template
   - Created Episode 19 (New Year's) using template
   - CSS styling system for themed episodes

3. **Canon Events Tracking:**
   - Created CANON_EVENTS_LOG.md
   - Tracking Vector's holiday decorating pattern
   - Documenting character development patterns

4. **Episode Formatting Fixes:**
   - Clarified Human dialogue format (bold, not shortcodes)
   - Created EPISODE_FORMATTING_RULES_CURRENT.md
   - Fixed formatting in Episode 19

5. **Automation Improvements:**
   - Bluesky token refresh implementation
   - JSON tracking file setup
   - Airtable filtering improvements

6. **Documentation Organization:**
   - Created MASTER_REFERENCE_CURRENT.md
   - Documented what docs to use, what to ignore
   - Organized character data sources

---

## 💡 KEY PRINCIPLES

1. **Content First** - Great episodes = everything else works
2. **Simple Systems** - If it breaks easily, it's too complex
3. **Iterate Fast** - Don't wait for perfect, ship and improve
4. **Focus on Money** - Everything should lead to revenue
5. **Character-Driven** - The characters are the differentiator
6. **Don't Over-Engineer** - Use what works, fix what breaks
7. **Context > Memory** - Document decisions, don't rely on memory
8. **Manual > Automated** - Better quality, more control (for content)

---

## 🆘 WHEN THINGS GET CONFUSING

### If Context Is Lost:
1. Read `MASTER_VISION.md` - The vision
2. Read `CURRENT_FOCUS.md` - Current priorities
3. Read `DECISIONS_LOG.md` - Recent decisions
4. Read `MASTER_REFERENCE_CURRENT.md` - What docs to use

### If Stuck on Episode Creation:
1. Read `COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md`
2. Check `COMEDY_SYSTEM/EPISODE_COMEDY_TRACKER.md`
3. Reference episodes 17-24 (examples)
4. Check character YAML files for voice consistency

### If Formatting Issues:
1. Read `EPISODE_FORMATTING_RULES_CURRENT.md`
2. Reference episodes 17-24 (examples)
3. Check `EPISODE_QUALITY_REVIEW_CHECKLIST.md`

### If Automation Issues:
1. Check n8n workflow file
2. Review recent git commits for changes
3. Check JSON tracking file
4. Test individual nodes

---

## 📝 NOTES FOR JOB APPLICATION

### Project Highlights
- **Character-driven narrative blog** with 24+ published episodes
- **Hugo static site** with custom theme and holiday styling
- **Automation system** (n8n workflows for social media)
- **Comprehensive documentation system** to prevent context loss
- **Quality content system** with checklists and formatting rules
- **Character development tracking** (canon events log)

### Technical Skills Demonstrated
- Hugo static site generation
- CSS animations and themed styling
- n8n workflow automation
- API integration (Bluesky, Twitter)
- JSON file handling
- Airtable integration
- Git/GitHub workflow
- Netlify deployment
- Documentation systems
- Content strategy
- Character development

### Project Management
- Context management systems
- Decision logging
- Quality checklists
- Automation workflows
- Documentation organization

---

## 🎯 CURRENT STATE SUMMARY

**What's Working:**
- ✅ 24 episodes published
- ✅ Character system established
- ✅ Holiday episode system working
- ✅ CSS styling system for themed episodes
- ✅ Documentation system in place
- ✅ Bluesky automation working
- ✅ Hugo site deployed on Netlify

**What Needs Work:**
- ⚠️ Twitter automation (phone verification)
- ⚠️ Email automation (not set up)
- ⚠️ Analytics (not set up)
- ⚠️ Revenue testing (not started)
- ⚠️ 26 episodes need revision (25-50)
- ⚠️ Content quality improvements ongoing

**What's Next:**
- Continue publishing episodes (2-3 per week)
- Complete automation setup
- Grow audience
- Test monetization
- Scale to profitability

---

**Last Updated:** January 1, 2026  
**Next Review:** When major changes occur or context needed

