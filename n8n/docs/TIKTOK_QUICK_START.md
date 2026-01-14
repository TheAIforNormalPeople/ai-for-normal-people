# TikTok Quick Start Guide

**Status:** Setup guide for TikTok integration  
**Replaces:** Reddit (API access denied)  
**Goal:** Create TikTok content workflow (semi-automated)

---

## 🎯 Quick Overview

**What We're Doing:**
- Generate TikTok content with n8n (script, description, hashtags)
- Create video manually (using free tools)
- Post manually (no API access yet)

**Why This Approach:**
- ✅ Free (no API costs)
- ✅ Can start immediately
- ✅ TikTok API requires business approval (takes time)
- ✅ Full control over content

**Time Investment:**
- Setup: 2-3 hours
- Per video: 30-60 minutes (once workflow established)

---

## 📋 Step 1: Add TikTok Content Generation to n8n

### Create "Generate TikTok Content" Code Node

**Position:** After "Select Character", before posting nodes

**Code:** See `aiforhumans/n8n/code/GENERATE_TIKTOK_CONTENT.js`

**What It Does:**
- Takes episode data
- Generates TikTok description
- Creates script prompt (for Claude)
- Outputs TikTok-ready content

**Integration:**
1. Add Code node to workflow
2. Connect from "Select Character"
3. Use output for manual video creation

---

## 🎬 Step 2: Video Creation Process

### Option A: Simple Text + Image Video (Easiest)

**Tools:**
- **CapCut** (free, mobile/desktop) - Video editing
- **Canva** (free tier) - Image creation
- **Free TTS** - Text-to-speech for voice-over

**Process:**
1. Use n8n output (script, description)
2. Create images in Canva (character art + text)
3. Import images to CapCut
4. Add TTS voice-over
5. Export video
6. Post to TikTok

**Time:** 30-45 minutes per video

---

### Option B: Character Art + Text Overlays (Recommended)

**Tools:**
- **CapCut** - Video editing
- **Image generation** - Character art (you have prompts!)
- **Free TTS** - Voice-over

**Process:**
1. Generate character art (use existing prompts)
2. Create 3-5 slides (key points from script)
3. Import to CapCut
4. Add voice-over
5. Add transitions/effects
6. Export video
7. Post to TikTok

**Time:** 45-60 minutes per video

---

## 🎤 Step 3: Voice-Over Options (Free)

### Option 1: Google Text-to-Speech (Free)
- Free API
- Good quality voices
- Can integrate with n8n

### Option 2: Edge TTS (Free)
- Free, open source
- Good quality
- Can use via API

### Option 3: ElevenLabs (Free Tier)
- Limited free credits
- Best quality
- Character-specific voices (future)

### Option 4: Azure TTS (Free Tier)
- 500k characters/month free
- Good quality
- Can integrate with n8n

---

## 📱 Step 4: TikTok Account Setup

1. **Create TikTok Account** (if needed)
   - Use email or phone
   - Complete profile

2. **Switch to Creator Account**
   - Settings → Account → Switch to Creator Account
   - Better analytics
   - Access to Creator Fund (at 10k+ followers)

3. **Complete Profile**
   - Bio: "AI education through character-driven stories"
   - Link: Your blog URL
   - Profile picture: Character art

4. **First Post**
   - Use Episode 29 content
   - Test video creation process
   - Monitor performance

---

## 🔄 Step 5: Workflow Integration

### Current Workflow:
```
Episode Published → Check If Posted → Select Character → Generate Twitter/Bluesky → Post
```

### Updated Workflow:
```
Episode Published → Check If Posted → Select Character → Generate TikTok Content → [Manual Video Creation] → [Manual Post]
```

**n8n Handles:**
- ✅ Generate TikTok description
- ✅ Generate script prompt
- ✅ Format content

**Manual Steps:**
- ⏳ Create video (CapCut/Canva)
- ⏳ Post to TikTok

**Future Automation:**
- ⏳ TikTok API (if approved)
- ⏳ Browser automation (Playwright)

---

## 💡 Content Strategy

### Format: 60-Second Episode Highlights

**Structure:**
1. **Hook** (5 seconds) - Attention-grabbing opening
2. **Key Point 1** (15 seconds) - First insight
3. **Key Point 2** (15 seconds) - Second insight
4. **Key Point 3** (15 seconds) - Third insight
5. **CTA** (10 seconds) - Link to full episode

**Example Script:**
```
Hook: "Wait, did you know AI can just... SPONTANEOUSLY learn to count?!"
Point 1: "Nobody taught neural networks arithmetic, but they figured it out anyway."
Point 2: "It's called emergent behavior - capabilities that weren't programmed."
Point 3: "Scientists are still confused about how this happens."
CTA: "Full episode link in bio! #AI #MachineLearning"
```

---

## 📊 Success Metrics

**Goals:**
- **Followers:** 10k+ (Creator Fund eligibility)
- **Views:** 1k+ per video
- **Engagement:** 5%+ (likes/comments/views)
- **Link Clicks:** Track via analytics

**Posting Schedule:**
- 1-2 videos per week
- Post same day as episode publishes
- Use character voice rotation (Vector/Kai/Recurse)

---

## ✅ Next Steps

### This Week
1. ✅ Add "Generate TikTok Content" node to n8n
2. ✅ Test with Episode 29
3. ✅ Set up TikTok account
4. ✅ Test free video tools (CapCut, TTS)

### Next Week
1. ✅ Create first TikTok video
2. ✅ Post and monitor performance
3. ✅ Document workflow
4. ✅ Refine process

### This Month
1. ✅ Establish posting rhythm (1-2 videos/week)
2. ✅ Optimize video creation time
3. ✅ Track performance
4. ✅ Improve quality

---

## 🚨 Important Notes

- **No API Access:** TikTok API requires business approval (apply when ready)
- **Manual Posting:** Required for now (sustainable workflow)
- **Video Required:** TikTok needs video content (not just text)
- **Free Tools:** Use CapCut, free TTS, existing image generation
- **Time Investment:** 30-60 min per video (once workflow established)

---

**Bottom Line:** Start with semi-automated workflow (n8n generates content, you create/post video). Focus on 60-second episode highlights using free tools. Build audience, then consider automation when you have budget or API access.
