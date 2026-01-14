# TikTok Integration Guide

**Status:** Research & Setup Guide  
**Created:** January 10, 2025  
**Replaces:** Reddit (API access denied)

---

## 📱 TikTok Overview

**Why TikTok:**
- ✅ Large audience (1+ billion users)
- ✅ Content creators can monetize (TikTok Creator Fund at 10k+ followers)
- ✅ Short-form video format (good for episode highlights)
- ✅ Algorithm favors educational content
- ✅ Free to post (no API costs)

**Challenges:**
- ⚠️ TikTok API is limited (primarily for business/marketing)
- ⚠️ Requires video content (not just text)
- ⚠️ API access requires business account approval
- ⚠️ n8n doesn't have official TikTok node

---

## 🎯 Content Strategy for TikTok

### Option 1: Video Content (Recommended for Growth)

**Format:** 60-second episode highlights
- Character voice-over (use AI voice generation)
- Episode visuals (character art, text overlays)
- Episode title + link in description
- Hashtags: #AI #MachineLearning #TechEducation #LearnAI

**Tools Needed:**
- Video editing (free: CapCut, Canva)
- AI voice generation (ElevenLabs free tier, or free TTS)
- Image generation (character art - you already have prompts!)

**Workflow:**
1. Generate script from episode (extract key points)
2. Generate character voice-over
3. Create video with visuals
4. Post to TikTok (manual or via automation)

**Time Investment:**
- First video: 2-3 hours (setup)
- Subsequent videos: 30-60 minutes (automated workflow)

**Impact:** High - Video content performs best on TikTok

---

### Option 2: Text-Only Posts (Easier but Limited)

**Format:** Text posts with images
- Episode title + description
- Character art/image
- Link to episode
- Hashtags

**Limitations:**
- Text-only posts don't perform as well on TikTok
- TikTok algorithm favors video content
- Still requires manual posting (no API for text posts)

**Workflow:**
- Similar to Instagram (manual posting)
- Use n8n to generate post text/images
- Manual upload to TikTok

---

### Option 3: Slideshow/Image Carousel

**Format:** Multiple images with text overlays
- Episode key points (3-5 slides)
- Character art
- Episode title
- Link in description

**Tools:**
- Canva (free) - Create slideshow
- Export as video (slideshow format)
- Post to TikTok

**Workflow:**
1. Generate slides from episode content
2. Create slideshow video
3. Post to TikTok (manual or automation)

---

## 🔧 Technical Integration Options

### Option A: TikTok Business API (Requires Approval)

**Requirements:**
- TikTok Business Account
- TikTok Marketing API access (application required)
- Business verification
- **Cost:** Free (but requires approval)

**Capabilities:**
- Post videos via API
- Schedule posts
- Analytics
- Content management

**n8n Integration:**
- Would need custom HTTP Request node
- OAuth2 authentication
- Video file upload via API

**Setup Complexity:** High  
**Approval Time:** 1-2 weeks  
**Status:** ⏳ Not yet attempted

---

### Option B: Third-Party Automation Tools

**Options:**
1. **Zapier/Make (Integromat)** - Has TikTok integration
   - Cost: Paid plans required
   - Capabilities: Post videos, schedule, analytics
   - **Not recommended:** Costs money

2. **Buffer/Hootsuite** - Social media management
   - Cost: Paid plans required
   - Capabilities: Post videos, schedule, analytics
   - **Not recommended:** Costs money

3. **Custom Automation** - Browser automation (Playwright/Puppeteer)
   - Cost: Free (self-hosted)
   - Capabilities: Post videos via browser automation
   - **Complexity:** High (requires development)

**Status:** ⏳ Research needed for free options

---

### Option C: Semi-Automated Workflow (Recommended for Now)

**Strategy:** Generate content with n8n, manual posting

**Workflow:**
1. **n8n generates:**
   - TikTok post script (from episode)
   - Character voice-over text
   - Video description
   - Hashtags
   - Image assets (via image generation)

2. **Manual steps:**
   - Create video (using generated assets)
   - Upload to TikTok
   - Post

**Tools:**
- n8n workflow for content generation
- Free video editor (CapCut, Canva)
- Free TTS for voice-over (or use AI voice)

**Advantages:**
- ✅ Free (no API costs)
- ✅ Full control
- ✅ Can start immediately
- ✅ Can automate parts of workflow

**Disadvantages:**
- ⚠️ Requires manual video creation
- ⚠️ Manual posting step
- ⚠️ More time investment

---

## 🎬 TikTok Content Workflow (Semi-Automated)

### Step 1: Content Generation (n8n)

**New n8n Node:** "Generate TikTok Content"

**Input:** Episode data (from "Check If Posted")

**Output:**
```json
{
  "script": "60-second episode highlight script",
  "description": "TikTok post description with hashtags",
  "hashtags": "#AI #MachineLearning #TechEducation",
  "characterVoice": "Vector/Kai/Recurse",
  "visualStyle": "Character art + text overlays",
  "episodeLink": "https://theaifornormalpeople.com/blog/episode-29..."
}
```

**Code Example:**
```javascript
// Get episode data
const checkNode = $('Check If Posted').first().json;
const selectChar = $('Select Character').first().json;

// Generate TikTok script (60 seconds)
// Use Claude to create script from episode title/description
// Extract key points
// Format for TikTok (hook, key points, CTA)

// Generate description with hashtags
const description = `${checkNode.episodeTitle}\n\n${checkNode.episodeDescription}\n\n👉 Full episode: ${checkNode.episodeLink}\n\n#AI #MachineLearning #TechEducation #LearnAI #AITutorial`;

return [{
  json: {
    script: generatedScript,
    description: description,
    hashtags: "#AI #MachineLearning #TechEducation",
    characterVoice: selectChar.character,
    episodeLink: checkNode.episodeLink
  }
}];
```

### Step 2: Video Creation (Manual or Automated)

**Option A: Manual (Free)**
- Use CapCut (free mobile/desktop app)
- Create video with:
  - Character art/images
  - Text overlays
  - AI voice-over (ElevenLabs free tier or free TTS)
- Export video
- Upload to TikTok

**Option B: Automated (Future)**
- Use video generation API (Runway, Synthesia)
- **Cost:** Usually paid (not free)
- Generate video from script automatically

### Step 3: Posting (Manual for Now)

**Manual Process:**
1. Open TikTok app/website
2. Upload video
3. Paste description (from n8n)
4. Add hashtags
5. Post

**Future Automation:**
- Browser automation (Playwright) - complex but free
- TikTok API (if approved) - requires business account

---

## 📋 Implementation Plan

### Phase 1: Content Generation Setup (This Week)

**Goal:** Create n8n workflow to generate TikTok content

**Steps:**
1. ✅ Create "Generate TikTok Content" Code node
   - Input: Episode data
   - Output: Script, description, hashtags
   - Use Claude to generate script from episode

2. ✅ Test with Episode 29
   - Generate script
   - Generate description
   - Test format

3. ⏳ Create video creation workflow
   - Document process
   - Create templates

**Time:** 2-3 hours  
**Status:** ⏳ Not started

---

### Phase 2: Video Creation Process (Next Week)

**Goal:** Establish video creation workflow

**Steps:**
1. Choose video editing tool (CapCut recommended - free)
2. Create video template
3. Set up AI voice generation (free TTS or ElevenLabs free tier)
4. Test video creation process
5. Document workflow

**Time:** 4-6 hours (first video), 30-60 min (subsequent)  
**Status:** ⏳ Not started

---

### Phase 3: TikTok Account Setup (Next Week)

**Goal:** Set up TikTok account for posting

**Steps:**
1. Create TikTok account (or use existing)
2. Switch to Creator account (for analytics)
3. Complete profile (bio, links)
4. Post first test video
5. Verify account (if possible)

**Time:** 30 minutes  
**Status:** ⏳ Not started

---

### Phase 4: Automation (Future)

**Goal:** Automate video posting (if possible)

**Options:**
1. TikTok Business API (apply when ready)
2. Browser automation (Playwright) - free but complex
3. Keep manual posting (sustainable option)

**Status:** ⏳ Research needed

---

## 🛠️ Tools & Resources

### Free Tools

**Video Editing:**
- **CapCut** - Free, mobile/desktop, good for TikTok
- **Canva** - Free tier, video creation, templates
- **DaVinci Resolve** - Free, professional (steep learning curve)

**AI Voice Generation:**
- **ElevenLabs** - Free tier (limited)
- **Google Text-to-Speech** - Free, API available
- **Azure TTS** - Free tier
- **Edge TTS** - Free, open source

**Image Generation:**
- You already have character art prompts!
- Use existing image generation tools

**Browser Automation (Future):**
- **Playwright** - Free, open source
- **Puppeteer** - Free, open source

---

## 💡 Content Ideas for TikTok

### Episode Highlights (60 seconds)
- Hook (attention-grabbing opening)
- Key point 1 (15 seconds)
- Key point 2 (15 seconds)
- Key point 3 (15 seconds)
- CTA + link (15 seconds)

### Character Moments (30 seconds)
- Funniest dialogue from episode
- Character reaction moment
- Educational mic-drop moment

### Series Highlights
- "3 Things I Learned About AI This Week"
- "Vector's Best Moments"
- "Kai's Most Confusing Alerts"

### Educational Snippets
- Quick explainers (one concept per video)
- "AI Concepts in 60 Seconds"
- "What Vector Thinks About [Topic]"

---

## 📊 Success Metrics

**TikTok Goals:**
- **Followers:** 10k+ (for Creator Fund eligibility)
- **Views:** 1k+ per video
- **Engagement:** 5%+ (likes/comments/views)
- **Link Clicks:** Track via episode analytics

**Content Goals:**
- **Posting:** 1-2 videos per week
- **Format:** 60-second episode highlights
- **Character Voice:** Consistent (Vector/Kai/Recurse rotation)

---

## 🚨 Limitations & Considerations

### Current Limitations
- ⚠️ No direct API access (requires manual posting)
- ⚠️ Requires video content (not just text)
- ⚠️ Video creation takes time (30-60 min per video)
- ⚠️ TikTok algorithm favors consistent posting

### Workarounds
- ✅ Semi-automated workflow (generate content, manual posting)
- ✅ Use free tools (CapCut, free TTS)
- ✅ Batch create videos (create multiple at once)
- ✅ Repurpose content (use same script for multiple formats)

### Future Options
- ⏳ TikTok Business API (apply when ready)
- ⏳ Browser automation (Playwright) - free but complex
- ⏳ Video generation API (when budget allows)

---

## ✅ Next Steps

### Immediate (This Week)
1. **Create n8n "Generate TikTok Content" node**
   - Input: Episode data
   - Output: Script, description, hashtags
   - Test with Episode 29

2. **Research free video creation tools**
   - Test CapCut
   - Test free TTS options
   - Document workflow

3. **Set up TikTok account**
   - Create account
   - Switch to Creator account
   - Complete profile

### Next Week
1. **Create first TikTok video**
   - Use Episode 29 content
   - Test video creation process
   - Post and monitor performance

2. **Document workflow**
   - Step-by-step guide
   - Templates
   - Time estimates

### This Month
1. **Establish posting rhythm**
   - 1-2 videos per week
   - Consistent schedule
   - Track performance

2. **Optimize workflow**
   - Reduce video creation time
   - Improve quality
   - Test different formats

---

## 📝 Notes

- **Reddit Alternative:** TikTok replaces Reddit (API access denied)
- **Video Requirement:** TikTok needs video content (not just text)
- **Free Solution:** Semi-automated workflow (generate content, manual posting)
- **Future Automation:** TikTok API or browser automation (when ready)
- **Monetization:** TikTok Creator Fund at 10k+ followers (long-term goal)

---

**Bottom Line:** TikTok is a great platform for growth, but requires video content. Start with semi-automated workflow (generate content with n8n, manual video creation/posting) until you can automate more. Focus on 60-second episode highlights using free tools.
