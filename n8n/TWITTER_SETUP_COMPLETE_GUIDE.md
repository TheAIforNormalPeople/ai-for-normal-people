# 🐦 TWITTER/X SETUP - COMPLETE GUIDE

**Step-by-step setup for Twitter posting in n8n**

---

## 🎯 WHAT YOU NEED

**4 Values from Twitter Developer Portal:**
1. Consumer Key (API Key)
2. Consumer Secret (API Secret)
3. Access Token
4. Access Token Secret

---

## STEP 1: Get Twitter/X API Credentials

### 1.1 Go to Twitter Developer Portal
- URL: https://developer.twitter.com/en/portal/dashboard
- Sign in with your Twitter/X account

### 1.2 Create a Project (if you don't have one)
1. Click **"Create Project"** (or "New Project")
2. **Name:** `AI for Normal People Blog`
3. **Use case:** Select "Making a bot" or "Exploring the API"
4. Click **"Next"**
5. **Project description:** "Automated social media posting for blog"
6. Click **"Next"**
7. Review and click **"Create Project"**

### 1.3 Create an App
1. Click **"Create App"** (or "Add App")
2. **App name:** `Blog Automation` (or similar)
3. Click **"Create"**

### 1.4 Set App Permissions
**CRITICAL:** Must be "Read and write" to post tweets!

1. Go to your app settings
2. Click **"App permissions"** tab
3. Select **"Read and write"** (NOT "Read only")
4. Click **"Save"**

### 1.5 Get Your Credentials
1. Go to **"Keys and tokens"** tab
2. You'll see:
   - **Consumer Key (API Key)** - Copy this
   - **Consumer Secret (API Secret)** - Click "Reveal" then copy
3. Scroll down to **"Access Token and Secret"**
4. If you don't have one:
   - Click **"Generate"**
   - Copy **Access Token**
   - Copy **Access Token Secret**
5. **Save all 4 values securely!**

---

## STEP 2: Create OAuth Credential in n8n

### 2.1 Open Credentials in n8n
1. In n8n, click **"Credentials"** (gear icon in left sidebar)
2. Click **"Add Credential"** (or "+" button)

### 2.2 Find OAuth1 API
1. **Search for:** `OAuth1 API` or `X OAuth API` or `OAuth 1.0`
2. Click on **"OAuth1 API"** (or "X OAuth API")

### 2.3 Fill in Credential Form
**Name:** `Twitter OAuth` (or any name you'll remember)

**Fill in the 4 values:**
- **Consumer Key:** [Paste your API Key]
- **Consumer Secret:** [Paste your API Secret]
- **Access Token:** [Paste your Access Token]
- **Access Token Secret:** [Paste your Access Token Secret]

### 2.4 Save and Test
1. Click **"Save"**
2. Click **"Test"** button (if available)
3. Should say **"Connection successful"** ✅

---

## STEP 3: Configure "Post to Twitter" Node

### 3.1 Open the Node
1. Go to your workflow
2. Click on **"Post to Twitter"** node

### 3.2 Set Credential
1. **Credential Type:** Should be "OAuth1 API" (already selected)
2. **Credential dropdown:** Select **"Twitter OAuth"** (the one you just created)
3. Red warning should disappear ✅

### 3.3 Verify Settings
**Method:** `POST`  
**URL:** `https://api.twitter.com/2/tweets`  
**Authentication:** `OAuth1 API`  
**Credential:** `Twitter OAuth` (your credential)

**Body (JSON):**
```json
{
  "text": "={{$json[\"content\"][0][\"text\"]}}\n\n{{$('Check If Posted').first().json.episodeLink}}"
}
```

**This should already be set in the workflow!**

---

## STEP 4: Test Twitter Posting

### 4.1 Test the Workflow
1. Click **"Execute Workflow"** (or test individual node)
2. Check if tweet posts successfully
3. Verify tweet appears on your Twitter account

### 4.2 Check for Errors
**Common errors:**
- **"Invalid credentials"** → Double-check all 4 values
- **"Forbidden"** → Check app permissions are "Read and write"
- **"Unauthorized"** → Regenerate Access Token and Secret

---

## 🆘 TROUBLESHOOTING

### Error: "Invalid credentials"
**Fix:**
- Double-check all 4 values are correct
- Make sure no extra spaces when copying
- Try regenerating Access Token and Secret

### Error: "Forbidden" or "Unauthorized"
**Fix:**
- Go to Twitter Developer Portal
- Check app permissions are **"Read and write"** (NOT "Read only")
- Regenerate Access Token and Secret
- Make sure you're using the correct app

### Error: "Cannot find OAuth1 API"
**Fix:**
- Try searching for "X OAuth API"
- Or "OAuth 1.0"
- Some n8n versions have it under different names
- Make sure you're using n8n version 2.0.3 or later

### Error: "Method not allowed"
**Fix:**
- Check Method is set to **"POST"** (not GET)
- Check URL is `https://api.twitter.com/2/tweets`

### Error: "Tweet too long"
**Fix:**
- Check Claude prompt keeps tweets under 240 characters
- The workflow should already handle this
- If not, adjust the prompt in "Generate Tweet via Claude" node

---

## ✅ QUICK CHECKLIST

**Twitter Developer Portal:**
- [ ] Created project
- [ ] Created app
- [ ] Set permissions to "Read and write"
- [ ] Got all 4 credentials (API Key, Secret, Token, Token Secret)

**n8n:**
- [ ] Created OAuth1 API credential
- [ ] Filled in all 4 values
- [ ] Tested credential (connection successful)
- [ ] Selected credential in "Post to Twitter" node
- [ ] Red warning disappeared

**Testing:**
- [ ] Tested workflow execution
- [ ] Tweet posted successfully
- [ ] Tweet appears on Twitter account

---

## 🎯 WHAT HAPPENS NEXT

**Once Twitter is set up:**
1. Workflow will automatically:
   - Generate tweet via Claude (Vector's voice)
   - Post to Twitter
   - Log to JSON file
2. Both Twitter AND Bluesky will post automatically
3. Everything is tracked in `posted-content.json`

---

## 📝 NOTES

**Twitter API v2:**
- Using `/2/tweets` endpoint (latest version)
- Requires OAuth 1.0 authentication
- Supports up to 280 characters per tweet

**Rate Limits:**
- Free tier: 1,500 tweets per month
- Should be plenty for blog automation
- Monitor usage in Twitter Developer Portal

**Security:**
- Keep credentials secure
- Don't share API keys
- Regenerate if compromised

---

**Once you complete these steps, Twitter posting will work automatically!** 🎉

