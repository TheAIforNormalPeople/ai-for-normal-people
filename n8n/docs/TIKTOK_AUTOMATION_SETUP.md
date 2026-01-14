# TikTok Automation Setup Guide

**Goal:** Automate TikTok video posting through n8n (like Twitter/Bluesky)

**Status:** TikTok API + n8n community node available ✅

---

## ✅ Yes, You Can Automate TikTok Posting!

**Options:**
1. **n8n Community Node** (`n8n-nodes-tiktok`) - Recommended
2. **TikTok Content Posting API** - Direct API (if available)
3. **Third-party services** - VidPipe, Publer (alternative)

---

## 🎯 Recommended: n8n Community Node

### Step 1: Install TikTok Node

1. **Open n8n**
2. **Go to:** Settings → Community Nodes
3. **Click:** Install
4. **Enter:** `n8n-nodes-tiktok`
5. **Click:** Install
6. **Restart n8n** (if required)

**Node Package:** `n8n-nodes-tiktok`  
**Docs:** https://ncnodes.com/package/n8n-nodes-tiktok

---

### Step 2: Get TikTok API Credentials

1. **Go to:** TikTok Developer Portal
   - Website: https://developers.tiktok.com/
2. **Sign up/Login** (use your TikTok account)
3. **Create App**
4. **Get API credentials:**
   - Client Key
   - Client Secret
   - Access Token
5. **Save credentials** (you'll need them for n8n)

**Note:** TikTok API requires app approval for posting access.

---

### Step 3: Configure TikTok Credentials in n8n

1. **In n8n:** Go to Credentials → New
2. **Search:** "TikTok" or "TikTok API"
3. **Select:** TikTok API credentials type
4. **Enter:**
   - Client Key (from TikTok Developer Portal)
   - Client Secret (from TikTok Developer Portal)
   - Access Token (from TikTok Developer Portal)
5. **Test credentials**
6. **Save**

---

### Step 4: Add TikTok Node to Workflow

**Workflow Structure:**
```
Generate TikTok Video (Sora 2)
  ↓
Download Video (HTTP Request) ← NEW
  ↓
Post to TikTok (TikTok Node) ← NEW
  ↓
Update Tracking JSON ← Update for TikTok
```

**Add TikTok Node:**

1. **Add TikTok Node** to your workflow
2. **Position:** After video generation/download
3. **Connect FROM:** Video download node
4. **Connect TO:** Tracking update node

---

### Step 5: Configure TikTok Node

**Node Settings:**

**Operation:** `Upload Video` (or similar - check node options)

**Video File:**
- Use video from Sora 2/download node
- Expression: `={{ $('Download Video').first().json.binary }}` or file path

**Caption/Description:**
- Use description from "Generate TikTok Content" node
- Expression: `={{ $('Generate TikTok Content').first().json.description }}`
- This includes: Title + Description + Link + Hashtags!

**Hashtags:**
- Already included in description
- Or separate field: `={{ $('Generate TikTok Content').first().json.hashtags }}`

**Privacy Settings:**
- Public (default)
- Or choose based on your needs

**Other Settings:**
- Check node documentation for additional options
- May include: Thumbnail, scheduled time, etc.

---

## 📋 Full Workflow Structure

**Complete Automated Flow:**

```
Select Character
  ↓
Generate TikTok Content (Code)
  ↓
Generate TikTok Script (Claude)
  ↓
Generate TikTok Video (Sora 2)
  ↓
Download Video (HTTP Request) ← NEW
  ↓
Post to TikTok (TikTok Node) ← NEW
  ↓
Update Tracking JSON ← Update for TikTok
```

**Everything Automated:**
- ✅ Script generation (Claude)
- ✅ Video generation (Sora 2)
- ✅ Video download
- ✅ Post to TikTok (description, hashtags, everything!)
- ✅ Tracking update

---

## 🔧 Implementation Steps

### Step 1: Download Video from Sora 2

**Add HTTP Request Node (Download Video):**

1. **After Sora 2 node**
2. **Add HTTP Request node**
3. **Method:** GET
4. **URL:** Video URL from Sora 2 output
5. **Response Format:** File
6. **Output:** Binary video file

**Or if Sora 2 outputs file directly:**
- Use binary output from Sora 2 node
- Skip download step

---

### Step 2: Add TikTok Node

1. **Install:** `n8n-nodes-tiktok` (Community Node)
2. **Add TikTok node** to workflow
3. **Configure credentials** (TikTok API)
4. **Set operation:** Upload Video
5. **Connect video file** from download/Sora 2
6. **Connect description** from "Generate TikTok Content"

---

### Step 3: Update Tracking JSON

**Add TikTok to tracking (like Twitter/Bluesky):**

Update your tracking JSON update node to include TikTok:

```javascript
// Add TikTok entry to tracking
const platform = 'TikTok';
const postText = $('Generate TikTok Content').first().json.description;
const videoId = $('Post to TikTok').first().json.video_id || '';

// Create TikTok entry
const newEntry = {
  url: episodeUrl,
  platform: platform,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: videoId ? `https://www.tiktok.com/@username/video/${videoId}` : '',
  status: 'posted'
};
```

---

## ⚠️ TikTok API Considerations

### Limitations:

1. **Rate Limits:**
   - Maximum 15 posts per 24 hours per account
   - Plan your posting schedule accordingly

2. **Video Specifications:**
   - Format: MP4 (recommended)
   - Max duration: Varies (check current limits)
   - Max file size: Varies (check current limits)
   - Resolution: Vertical (9:16) recommended

3. **API Access:**
   - Requires TikTok Developer Portal access
   - App approval may be required for posting
   - Check TikTok's current API requirements

4. **Authentication:**
   - OAuth flow required
   - Tokens may expire (refresh needed)
   - Follow TikTok's authentication process

---

## 🎯 Quick Setup Checklist

**Setup:**
- [ ] Install `n8n-nodes-tiktok` community node
- [ ] Create TikTok Developer Portal account
- [ ] Get API credentials (Client Key, Secret, Token)
- [ ] Configure TikTok credentials in n8n
- [ ] Add TikTok node to workflow
- [ ] Configure video upload settings
- [ ] Connect description/hashtags from code node
- [ ] Test with one video
- [ ] Update tracking JSON for TikTok

**Testing:**
- [ ] Test video upload
- [ ] Check description/hashtags appear correctly
- [ ] Verify video appears on TikTok
- [ ] Check tracking JSON updates correctly

---

## 📚 Resources

**TikTok API:**
- Developer Portal: https://developers.tiktok.com/
- Content Posting API: Check TikTok docs
- API Documentation: Check TikTok Developer Portal

**n8n Community Node:**
- Package: `n8n-nodes-tiktok`
- Docs: https://ncnodes.com/package/n8n-nodes-tiktok
- GitHub: Check n8n community nodes

**Video Tutorial:**
- TikTok Post Automation with n8n: Search YouTube

---

## ✅ What You'll Get

**Fully Automated TikTok Posting:**
- ✅ Script generation (Claude)
- ✅ Video generation (Sora 2)
- ✅ Video upload (TikTok API)
- ✅ Description + hashtags (automated)
- ✅ Tracking (like Twitter/Bluesky)
- ✅ Same workflow structure as other platforms!

**Result:** Fully automated TikTok workflow - just like Twitter and Bluesky! 🎬

---

**Want me to help you set up the TikTok node once you have the API credentials?** 🚀
