# TikTok Node - Next Steps After Installation

**Status:** TikTok node installed ✅  
**Next:** Get API credentials and add to workflow

---

## ✅ What You Have

- ✅ TikTok node installed
- ✅ 11 actions available (including "Upload content to tiktok")

---

## 🎯 Next Steps

### Step 1: Get TikTok API Credentials

**You need TikTok API credentials to use the node:**

1. **Go to:** TikTok Developer Portal
   - Website: https://developers.tiktok.com/
2. **Sign up/Login** (use your TikTok account)
3. **Create App** (if you don't have one)
4. **Get credentials:**
   - **Client Key** (App ID)
   - **Client Secret** (App Secret)
   - **Access Token** (for posting - may need OAuth flow)
5. **Save credentials** (you'll need them for n8n)

**Note:** 
- TikTok API requires app approval for posting access
- May need to go through OAuth flow to get access token
- Check TikTok's current API requirements

---

### Step 2: Add TikTok Credentials to n8n

1. **In n8n:** Go to Credentials → New
2. **Search:** "TikTok"
3. **Select:** TikTok credentials type
4. **Enter:**
   - Client Key (from TikTok Developer Portal)
   - Client Secret (from TikTok Developer Portal)
   - Access Token (from TikTok Developer Portal or OAuth flow)
5. **Test credentials**
6. **Save**

**Note:** The credential fields may vary - check what the TikTok node requires.

---

### Step 3: Add TikTok Node to Workflow

**In your workflow:**

1. **Add new node** after video generation
2. **Search for:** "TikTok"
3. **Select:** TikTok node
4. **Name it:** "Post to TikTok"

**Workflow Structure:**
```
Generate TikTok Video (Sora 2)
  ↓
Download Video (HTTP Request) ← May need this
  ↓
Post to TikTok (TikTok Node) ← NEW!
  ↓
Update Tracking JSON ← Update for TikTok
```

---

### Step 4: Configure TikTok Node

**Node Settings:**

**Operation:** `Upload content to tiktok` (action #10 from the list)

**Video File:**
- Use video from Sora 2/download node
- May need to be binary file or file path
- Check node documentation for exact format

**Caption/Description:**
- Use description from "Generate TikTok Content" node
- Expression: `={{ $('Generate TikTok Content').first().json.description }}`
- This includes: Title + Description + Link + Hashtags!

**Other Settings:**
- Check node options for additional fields
- May include: Privacy settings, scheduled time, thumbnail, etc.

**Connect:**
- **FROM:** Video download/Sora 2 node
- **TO:** Tracking update node

---

## 📋 TikTok Node Actions Available

**From your node, you have these actions:**

1. Delete content from tiktok
2. Get video analytics data
3. Get audience demographics
4. Get analytics for multiple videos
5. Get engagement metrics
6. Get geographic distribution data
7. Get historical analytics data
8. Get content information
9. Get upload status
10. **Upload content to tiktok** ← **Use this one!**
11. Upload content from url to tiktok

**For posting videos:** Use action #10 "Upload content to tiktok"

---

## 🔧 Full Workflow Structure

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
Download Video (HTTP Request) ← May need this
  ↓
Post to TikTok (TikTok Node) ← NEW! (Upload content to tiktok)
  ↓
Update Tracking JSON ← Update for TikTok
```

**Everything Automated:**
- ✅ Script generation (Claude)
- ✅ Video generation (Sora 2)
- ✅ Video download (if needed)
- ✅ Post to TikTok (description, hashtags, everything!)
- ✅ Tracking update

---

## ⚠️ Important Notes

### TikTok API Requirements:

1. **Credentials:** Need Client Key, Secret, Access Token
2. **OAuth:** May need OAuth flow for access token
3. **App Approval:** May need TikTok to approve your app
4. **Rate Limits:** 15 posts per 24 hours per account
5. **Video Format:** MP4, vertical (9:16), check current limits

### Video File Format:

- **Check node documentation** for exact file format needed
- May need: Binary file, file path, or URL
- May need to download from Sora 2 first (HTTP Request node)

---

## 📚 Resources

**TikTok API:**
- Developer Portal: https://developers.tiktok.com/
- Documentation: Check TikTok Developer Portal
- API Requirements: Check current TikTok API docs

**n8n TikTok Node:**
- Node Details: Check in n8n (you're already there!)
- Actions: 11 actions available (use "Upload content to tiktok")
- Docs: Check node documentation in n8n

---

## ✅ Quick Checklist

**Setup:**
- [x] TikTok node installed ✅
- [ ] Get TikTok API credentials (Developer Portal)
- [ ] Add TikTok credentials to n8n
- [ ] Add TikTok node to workflow
- [ ] Configure "Upload content to tiktok" operation
- [ ] Connect video file from Sora 2
- [ ] Connect description from code node
- [ ] Test with one video
- [ ] Update tracking JSON for TikTok

**Testing:**
- [ ] Test video upload
- [ ] Check description/hashtags appear correctly
- [ ] Verify video appears on TikTok
- [ ] Check tracking JSON updates correctly

---

## 🎯 Current Status

**✅ Done:**
- TikTok node installed

**⏳ Next:**
1. Get TikTok API credentials (Developer Portal)
2. Add credentials to n8n
3. Add TikTok node to workflow
4. Configure and test

---

**Next step: Get TikTok API credentials from https://developers.tiktok.com/** 🚀
