# 🎯 IMMEDIATE ACTION PLAN - Full Detailed Steps

**Date:** December 22, 2025  
**Priority Order:** Content → Automation → Growth  
**Goal:** Publish Episode 18 + Set up social automation this week

---

## 🚨 PRIORITY 1: REVISE & PUBLISH EPISODE 18

**Why This First:** Content is Priority 1. Episodes drive everything else. Episode 18 is next in sequence.

**Time Estimate:** 2-3 hours

---

### STEP 1: Understand Episode 18 Context

**Reference Files:**
- `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Check what Episode 17 caused
- `aiforhumans/content/blog/episode-17-using-ai-for-writing-without-sounding-like-ai.md` - Previous episode
- `THE_NORMAL_PEOPLE_COMPLETE.md` - Episode type and structure

**What to Check:**
1. **Episode Type:** What type is Episode 18? (Standard/Crisis/Character/Experimental)
   - **Reference:** `THE_NORMAL_PEOPLE_COMPLETE.md` lines 237-260
   - **Expected:** Episode 18 is a CRISIS episode (Detection spike, need to hide fast)

2. **Story Thread Continuity:**
   - **Episode 17 ended with:** Human teaches successfully, then makes mistake, Vector reclaims power seat, Human's name reveal ignored
   - **Episode 18 should include:** Detection spike (Kai's warnings escalate), group panics, need to hide/explain while teaching
   - **Current draft:** Missing the crisis element - needs to be added
   - **Reference:** `aiforhumans/scripts/STORY_THREAD_TRACKER.md` lines 15-16

3. **Character Evolution Stage:**
   - **Vector:** Mid stage (Episodes 11-25) - More self-aware, catches himself saying 'FASCINATING!' too much
   - **Kai:** Mid stage - Using sound variety (WHIRR, CHK-CHK), BEEP! reserved for critical alerts
   - **Recurse:** Mid stage - Varies questioning style, more constructive
   - **Reference:** Character YAML files in `aiforhumans/data/characters/`

---

### STEP 2: Read Current Episode 18 Draft

**File:** `aiforhumans/content/blog/episode-18-ai-for-fact-checking-and-its-limits.md`

**What to Check:**
1. What's the educational topic? (AI fact-checking)
2. What's the current structure? (Missing crisis element)
3. What character moments exist? (Recurse investigating, Vector explaining, Kai providing stats)
4. What needs to be added/changed? (Add crisis opening - detection spike, group panic)

**Action:** Read the full file to understand what we're working with.

---

### STEP 3: Apply Revision Framework

**Reference:** `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md`

**For Episode 18 (CRISIS Type):**

**EDUCATIONAL GOAL:**
- Explain AI fact-checking capabilities
- Its limits and when it fails
- How to use AI for fact-checking effectively
- When to trust AI fact-checking vs. when not to

**CHARACTER BEAT:**
- **Crisis:** Detection spike detected by Kai
- **Kai's Moment:** Warnings finally heeded (major moment - Episode 20 is the turning point, but Episode 18 sets it up)
- **Group Response:** Panic, then working together to hide/explain while teaching

**STORY THREADS:**
- **Caused by:** Episode 17 - Human teaching moment, Vector reclaiming power, tensions rising
- **Will cause:** Episode 19 - Group more cautious, someone finally listens to Kai (setup for Ep 20)

**RUNNING GAGS:**
- **Kai's Warnings:** More urgent, specific detection warnings (escalating toward Ep 20)
- **Doctor Vector:** Can appear if Vector gets defensive during crisis
- **Recurse's Three Questions:** Questions about the detection risk and tokens

**STRUCTURE:**
1. **Opening:** Detection spike! Kai alerts, group panics (CRISIS - this is missing from current draft)
2. **Complication:** Need to hide/explain while teaching about fact-checking (teach through crisis)
3. **Education:** Teach AI fact-checking through the crisis (applied under pressure)
4. **Resolution:** Crisis resolved, group bonds, Kai's warnings taken more seriously (setup for Ep 20)

**INTENSITY:** HIGH ENERGY (Crisis episode)

**CHARACTER VOICE REQUIREMENTS:**
- **Vector:** "FASCINATING!" 1-2x max, ALL CAPS for emphasis, self-interrupts, gets excited even during crisis
- **Kai:** *ALARM-BUZZ* for actual danger, *WHIRR-CLICK* for processing, specific percentages, urgent warnings
- **Recurse:** Exactly three questions about detection risk and tokens, skeptical but helpful
- **Human:** *Panicking* watching the chaos, asks for simpler explanation, learns about tokens

**SEO REQUIREMENTS:**
- **Title:** "AI for Fact-Checking (And Its Limits)"
- **Keywords:** AI fact-checking, fact-checking AI, AI accuracy, AI limitations, ChatGPT fact-checking
- **Description:** "Kai detects a spike. Vector explains AI fact-checking while the group hides. Learn what AI can and can't fact-check, and when to trust it."
- **Length:** 1500-1800 words

---

### STEP 4: Write/Revise Episode 18

**Process:**
1. **Start with crisis opening:** Kai's alarm, group panic
2. **Insert character conflict:** Vector wants to explain, Kai wants to hide, Recurse questions everything
3. **Teach through crisis:** Explain tokens while dealing with detection spike
4. **Character moments:** Kai's warnings taken seriously (setup for Ep 20), group works together
5. **Resolution:** Crisis resolved, bonds strengthened, education delivered

**Character Dialogue:**
- **Reference:** `aiforhumans/data/characters/*.yaml` - Read actual character data
- **Don't guess:** Use actual catchphrases, evolution stage, voice style from YAML files
- **Check:** Run `check-character-voice.ps1` after writing

**Quality Checklist:**
- ✅ Educational value (explains AI fact-checking clearly)
- ✅ Character voices distinct (Vector enthusiastic, Kai urgent, Recurse questioning)
- ✅ Cause-and-effect (from Ep 17, sets up Ep 19)
- ✅ Sets up next episode (Ep 19 - more cautious)
- ✅ Intensity appropriate (HIGH ENERGY - crisis)
- ✅ Running gags (Kai warnings escalating, Recurse questions)
- ✅ Would someone want to read this? (Yes - educational + entertaining + crisis)

---

### STEP 5: Validate & Publish

**Validation Steps:**
1. **Run character voice checker:**
   ```powershell
   cd aiforhumans
   .\scripts\check-character-voice.ps1 -EpisodePath "content\blog\episode-18-ai-for-fact-checking-and-its-limits.md"
   ```

2. **Run build validation:**
   ```powershell
   .\scripts\validate-build.ps1
   ```

3. **Check story threads:**
   - Update `aiforhumans/scripts/STORY_THREAD_TRACKER.md` - Mark Episode 18 complete
   - Update "What Happened" column
   - Set up Episode 19 in "What's Next"

4. **Check running gags:**
   - Update `aiforhumans/scripts/RUNNING_GAG_TRACKER.md` - Mark gag appearances

5. **Test Hugo build:**
   ```powershell
   hugo --gc --minify --buildFuture
   ```

6. **Publish:**
   - Set `draft: false` in frontmatter
   - Commit to git
   - Push to GitHub (Netlify will auto-deploy)

---

## 🤖 PRIORITY 2: SET UP N8N AUTOMATION

**Why This Second:** Automation saves time. Social posting drives traffic. Traffic = audience = money.

**Time Estimate:** 30-60 minutes (if you have credentials ready)

---

### STEP 1: Gather Credentials

**What You Need:**
1. **Twitter/X OAuth Credentials:**
   - Consumer Key (API Key)
   - Consumer Secret (API Secret)
   - Access Token
   - Access Token Secret
   - **Where to get:** https://developer.twitter.com/en/portal/dashboard
   - **Reference:** `aiforhumans/n8n/TWITTER_OAUTH_SETUP.md` (if exists in archive)

2. **Anthropic API Key:**
   - API key for Claude
   - **Where to get:** https://console.anthropic.com/
   - **Cost:** Pay-as-you-go (very cheap for this use case)

3. **Bluesky Credentials:**
   - Handle (username)
   - App Password (not regular password)
   - **Where to get:** Bluesky settings → App Passwords
   - **Reference:** `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` lines 50-70

**Action:** Get all three credentials before starting setup.

---

### STEP 2: Import Workflow to n8n

**File:** `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json`

**Steps:**
1. Open n8n (your instance)
2. Click "Workflows" → "Import from File"
3. Select `multi-platform-social-json-tracking-FIXED.json`
4. Workflow should appear in your list

**Reference:** `aiforhumans/n8n/QUICK_START_SETUP.md` lines 1-20

---

### STEP 3: Create Credentials in n8n

**Twitter OAuth (OAuth1 API):**
1. In n8n, go to "Credentials" → "New"
2. Select "OAuth1 API"
3. Name: "Twitter OAuth"
4. Fill in:
   - Consumer Key: [Your Twitter API Key]
   - Consumer Secret: [Your Twitter API Secret]
   - Access Token: [Your Twitter Access Token]
   - Access Token Secret: [Your Twitter Access Token Secret]
5. Save

**Anthropic API:**
1. In n8n, go to "Credentials" → "New"
2. Select "HTTP Header Auth"
3. Name: "Anthropic API"
4. Fill in:
   - Name: `x-api-key`
   - Value: [Your Anthropic API Key]
5. Save

**Bluesky Auth:**
1. In n8n, go to "Credentials" → "New"
2. Select "HTTP Header Auth"
3. Name: "Bluesky Auth"
4. Fill in:
   - Name: `Authorization`
   - Value: `Bearer [Your Bluesky App Password]`
5. Save

**Reference:** `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` lines 30-100

---

### STEP 4: Connect Nodes in Workflow

**What to Connect:**
1. **RSS Feed Node:**
   - URL: `https://theaifornormalpeople.com/index.xml`
   - Check: Updates every 4 hours

2. **Read Tracking JSON Node:**
   - File Path: `/path/to/aiforhumans/n8n/tracking/posted-content.json`
   - **Important:** Use absolute path or relative path that n8n can access

3. **If Not Posted Node:**
   - Condition: Check if episode URL is in tracking JSON
   - Route TRUE to both Twitter and Bluesky branches

4. **Claude Nodes:**
   - Connect to Anthropic API credential
   - Verify prompts are correct (Vector's voice)

5. **HTTP Request Nodes (Twitter & Bluesky):**
   - Twitter: Connect to Twitter OAuth credential
   - Bluesky: Connect to Bluesky Auth credential

6. **Write Tracking JSON Node:**
   - File Path: Same as Read Tracking JSON
   - Write both Twitter and Bluesky post IDs

**Reference:** `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` lines 100-200

---

### STEP 5: Create Tracking File

**File:** `aiforhumans/n8n/tracking/posted-content.json`

**Content:**
```json
[]
```

**Action:** Create this file if it doesn't exist. It should be an empty JSON array.

---

### STEP 6: Test Workflow

**Test Steps:**
1. **Manual Test:**
   - Click "Execute Workflow" button
   - Watch it run through each node
   - Check for errors

2. **Check Outputs:**
   - RSS Feed: Should fetch latest episode
   - If Not Posted: Should route to TRUE (if episode not posted)
   - Claude: Should generate tweet/post
   - HTTP Request: Should post to Twitter/Bluesky
   - Write JSON: Should log post IDs

3. **Verify Posts:**
   - Check Twitter: Did tweet appear?
   - Check Bluesky: Did post appear?
   - Check tracking JSON: Are IDs logged?

4. **Fix Errors:**
   - Check credentials (most common issue)
   - Check file paths (tracking JSON)
   - Check API permissions (Twitter/Bluesky)
   - Check prompts (Claude nodes)

**Reference:** `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` lines 200-250

---

### STEP 7: Activate Workflow

**Steps:**
1. Click "Active" toggle in n8n workflow
2. Set schedule: Every 4 hours (or your preference)
3. Workflow will now run automatically

**Monitor:**
- Check n8n execution history
- Verify posts are appearing
- Check tracking JSON is updating

---

## 📊 PRIORITY 3: TRACK & ITERATE

**After Episode 18 is published and automation is working:**

### Track Metrics:
1. **Episode Performance:**
   - Views, engagement, time on page
   - Social shares, comments

2. **Social Automation:**
   - Are posts appearing?
   - Engagement on posts?
   - Traffic from social?

3. **Email List:**
   - New subscribers?
   - Growth rate?

### Iterate:
- What's working? Do more of it.
- What's not? Fix it or stop doing it.
- What's missing? Add it.

---

## ✅ SUCCESS CRITERIA

**This Week:**
- ✅ Episode 18 published
- ✅ n8n automation working
- ✅ Social posts appearing automatically
- ✅ Tracking working

**Next Week:**
- Episode 19 published
- Episode 20 published (Kai's major moment)
- Email list growing
- Social following growing

---

## 🆘 IF YOU GET STUCK

**Content Issues:**
- Reference: `aiforhumans/COMPLETE_PROJECT_BIBLE.md` - Character system
- Reference: `aiforhumans/data/characters/*.yaml` - Character data
- Reference: `aiforhumans/scripts/BATCH_REVISION_TEMPLATE.md` - Revision template

**Automation Issues:**
- Reference: `aiforhumans/n8n/COMPLETE_SETUP_GUIDE_NOW.md` - Detailed setup
- Reference: `aiforhumans/n8n/QUICK_START_SETUP.md` - Quick reference
- Check n8n execution logs for errors

**General Issues:**
- Reference: `aiforhumans/COMPLETE_PROJECT_BIBLE.md` - Everything
- Reference: `aiforhumans/MASTER_VISION.md` - Vision and goals

---

## 🎯 NEXT ACTIONS

**Right Now:**
1. Read Episode 18 draft
2. Gather n8n credentials
3. Start Episode 18 revision

**Today:**
1. Complete Episode 18 revision
2. Set up n8n credentials
3. Test n8n workflow

**This Week:**
1. Publish Episode 18
2. Activate n8n automation
3. Start Episode 19 revision

---

**Remember:** Content first. Automation second. Growth third. Everything else is details.

**Focus:** Make Episode 18 great. Set up automation. Publish. Repeat.

