# JSON2Video API Setup Guide

**Goal:** Full automation of TikTok video creation in n8n using JSON2Video API

---

## 📊 Pricing Plans

### Free Plan (Testing)

- **Credits:** 600 non-renewable credits
- **Video Length:** Up to 1-3 minutes per video
- **Cost:** $0
- **Watermark:** ✅ Yes (watermarked videos)
- **Best For:** Testing the API before committing

**Estimated Videos:** ~10-20 videos (60 seconds each)

---

### Prepaid Plans (One-Time Payment)

#### Starter Pack - $49.95
- **Credits:** 7,200 credits
- **Video Length:** Up to 30 minutes per video
- **Videos:** ~120 minutes total
- **Watermark:** ❌ No (watermark removed)
- **Best For:** One-time projects or occasional use

**Estimated Videos:** ~120 videos (60 seconds each)

#### Pro Pack - $99.95
- **Credits:** 15,600 credits
- **Video Length:** Up to 30 minutes per video
- **Videos:** ~260 minutes total
- **Watermark:** ❌ No (watermark removed)
- **Best For:** Larger projects or bulk video creation

**Estimated Videos:** ~260 videos (60 seconds each)

---

### Subscription Plans (Monthly)

#### Professional - $49.95/month
- **Credits:** 12,000 credits/month (renewable)
- **Video Length:** Up to 10 minutes per video
- **Videos:** ~200 minutes/month
- **Watermark:** ❌ No
- **AI Features:** ✅ AI-generated images and voices
- **Best For:** Regular content creation (1-2 videos per week)

**Estimated Videos:** ~200 videos/month (60 seconds each)

#### Startup - $99.95/month
- **Credits:** 30,000 credits/month (renewable)
- **Video Length:** Up to 30 minutes per video
- **Videos:** ~500 minutes/month
- **Watermark:** ❌ No
- **AI Features:** ✅ AI-generated images and voices
- **Best For:** Active content creation (5-10 videos per week)

**Estimated Videos:** ~500 videos/month (60 seconds each)

#### Enterprise - $199.95/month
- **Credits:** 78,000 credits/month (renewable)
- **Video Length:** Up to 30 minutes per video
- **Videos:** ~1,300 minutes/month
- **Watermark:** ❌ No
- **AI Features:** ✅ AI-generated images and voices
- **Best For:** High-volume content creation

**Estimated Videos:** ~1,300 videos/month (60 seconds each)

---

## 💡 Recommendation for Your Use Case

**For "AI for Normal People" blog (1-2 videos per week):**

### Start: Free Plan
- ✅ Test the API first
- ✅ See if quality meets your needs
- ✅ No commitment

### Then: Professional Plan ($49.95/month)
- ✅ ~200 videos/month (way more than you need!)
- ✅ 1-2 videos per week = ~10 videos/month
- ✅ You'll use ~5% of credits
- ✅ Good value for your volume

**Cost per video:** ~$0.25 per video (much cheaper than manual creation time!)

---

## 🔗 Where to Go

### 1. Sign Up

**Website:** https://json2video.com/

**Steps:**
1. Go to https://json2video.com/
2. Click "Sign Up" or "Get Started"
3. Create account (email/password)
4. Verify email (if required)
5. Done!

---

### 2. Get API Key

**Steps:**
1. **Log in** to your JSON2Video account
2. **Go to Dashboard** (usually accessible after login)
3. **Find "API Key" or "Settings"** section
4. **Copy your API key** (looks like: `your-api-key-here`)
5. **Save it securely** (you'll need it for n8n!)

**Note:** API key is usually found in:
- Dashboard → API Keys
- Settings → API
- Account → API Keys

---

### 3. Review Documentation

**API Documentation:** https://json2video.com/docs/api/

**What to Review:**
- API endpoint: `https://api.json2video.com/v2/movies`
- Authentication: Header `x-api-key`
- Request format (JSON structure)
- Response format (how to get video URL)

**Quick Links:**
- Main Docs: https://json2video.com/docs/api/
- Pricing: https://json2video.com/pricing/
- Examples: Check documentation for examples

---

## 📋 Next Steps (After Sign Up)

### Step 1: Test with Free Plan (Recommended)

1. ✅ Sign up (free)
2. ✅ Get API key
3. ✅ Test one video in n8n
4. ✅ Check quality/results
5. ✅ Then decide on paid plan

### Step 2: Set Up n8n Integration

**I'll create the n8n workflow setup once you have your API key!**

The workflow will:
1. Get script from Claude node
2. Convert to JSON2Video format
3. Send to JSON2Video API
4. Get video URL
5. Download video
6. Upload to TikTok (when API available)

---

## 🎯 Cost Analysis

### Your Use Case: 1-2 videos per week

**Per Month:**
- Videos: ~4-8 videos
- Each video: 60 seconds
- Total video time: ~4-8 minutes
- Credits needed: ~240-480 credits

**Plan Comparison:**

| Plan | Cost/Month | Credits | Your Usage | Value |
|------|-----------|---------|------------|-------|
| **Free** | $0 | 600 (one-time) | Lasts ~2-3 months | ⭐⭐⭐ Best for testing |
| **Professional** | $49.95 | 12,000 | 2-4% used | ⭐⭐ Good value |
| **Prepaid $49.95** | $49.95 | 7,200 (one-time) | Lasts ~3-6 months | ⭐⭐⭐ Best value (if you stop after testing) |

**Recommendation:** Start free, then Professional if you like it!

---

## 📝 Quick Checklist

**Before Setup:**
- [ ] Sign up at https://json2video.com/
- [ ] Get API key from dashboard
- [ ] Review API docs (optional, but helpful)
- [ ] Choose plan (start free!)

**After Setup:**
- [ ] I'll help you configure n8n workflow
- [ ] Test with one video
- [ ] Check quality/results
- [ ] Decide on paid plan (if needed)

---

## 🚀 Ready to Start?

**Next Steps:**
1. **Sign up:** https://json2video.com/
2. **Get API key** (from dashboard)
3. **Let me know when you have it** - I'll help set up the n8n workflow!

---

## 📚 Resources

- **Website:** https://json2video.com/
- **Pricing:** https://json2video.com/pricing/
- **API Docs:** https://json2video.com/docs/api/
- **Support:** Check their website for support/contact info

---

**Once you have your API key, I'll help you set up the full n8n workflow!** 🎬
