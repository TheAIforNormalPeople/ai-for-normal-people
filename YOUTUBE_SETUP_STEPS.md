# 📺 YouTube Setup Steps for n8n

**Goal:** Automate YouTube Community Posts via n8n workflow  
**Time:** 1-2 hours  
**Cost:** FREE (YouTube API is free)  
**Difficulty:** Medium (requires Google Cloud setup)

---

## 📋 Prerequisites

- YouTube channel (create at https://www.youtube.com if needed)
- Google account
- n8n instance running
- Access to n8n workflow editor

---

## 🚀 Step-by-Step Setup

### Step 1: Create Google Cloud Project

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click "Select a project" dropdown (top left)
   - Click "New Project"
   - Enter project name: "AI for Normal People" (or your choice)
   - Click "Create"
   - Wait for project to be created (30 seconds)

3. **Select Your Project**
   - Make sure your new project is selected in the dropdown

### Step 2: Enable YouTube Data API v3

1. **Navigate to APIs & Services**
   - In Google Cloud Console, go to "APIs & Services" → "Library"
   - Or visit: https://console.cloud.google.com/apis/library

2. **Search for YouTube Data API**
   - Search: "YouTube Data API v3"
   - Click on "YouTube Data API v3"

3. **Enable the API**
   - Click "Enable" button
   - Wait for it to enable (10-20 seconds)

### Step 3: Create OAuth2 Credentials

1. **Go to Credentials**
   - In Google Cloud Console, go to "APIs & Services" → "Credentials"
   - Or visit: https://console.cloud.google.com/apis/credentials

2. **Create OAuth Consent Screen** (if not done)
   - Click "Configure Consent Screen"
   - Choose "External" (unless you have Google Workspace)
   - Fill in required fields:
     - App name: "AI for Normal People"
     - User support email: Your email
     - Developer contact: Your email
   - Click "Save and Continue"
   - Add scopes (if needed):
     - `https://www.googleapis.com/auth/youtube.force-ssl`
   - Click "Save and Continue"
   - Add test users (your Google account email)
   - Click "Save and Continue"
   - Review and click "Back to Dashboard"

3. **Create OAuth2 Client ID**
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Web application"
   - Name: "n8n YouTube Integration"
   - Authorized redirect URIs:
     - For n8n self-hosted: `http://your-n8n-domain.com/rest/oauth2-credential/callback`
     - For n8n cloud: Check n8n documentation for callback URL
   - Click "Create"
   - **IMPORTANT:** Copy the Client ID and Client Secret (you'll need these)

### Step 4: Add YouTube Credential to n8n

1. **Open n8n**
   - Go to your n8n instance
   - Navigate to "Credentials" (left sidebar)

2. **Create New Credential**
   - Click "Add Credential"
   - Search for "YouTube"
   - Select "YouTube OAuth2 API"

3. **Fill in Credential Details**
   - **Client ID:** Paste from Google Cloud Console
   - **Client Secret:** Paste from Google Cloud Console
   - **Scope:** `https://www.googleapis.com/auth/youtube.force-ssl`
   - Click "Connect my account"
   - Authorize n8n to access your YouTube channel
   - Click "Save"

### Step 5: Add YouTube Node to Workflow

1. **Open Your Workflow**
   - Go to your multi-platform social media workflow
   - Or create a new workflow

2. **Add YouTube Node**
   - Add new node after "Select Character" or "Generate Tweet via Claude"
   - Search for "YouTube"
   - Select "YouTube" node

3. **Configure YouTube Node**
   - **Operation:** "Create a post" (for Community posts)
   - **Credential:** Select your YouTube OAuth2 credential
   - **Channel ID:** Your YouTube channel ID
     - Find it at: https://www.youtube.com/account_advanced
     - Or use your channel handle (e.g., `@yourchannelname`)
   - **Text:** Use expression to get text from previous node
     - Example: `={{$('Clean Twitter Text').first().json.cleaned_text}}`
   - **Link:** Episode link
     - Example: `={{$('Select Character').first().json.episodeLink}}`

### Step 6: Test the Workflow

1. **Execute Manually**
   - Click "Execute Workflow" button
   - Or trigger with a test episode

2. **Check YouTube**
   - Go to your YouTube channel
   - Check "Community" tab
   - Verify the post appears

3. **Troubleshoot**
   - If errors, check:
     - OAuth2 credentials are correct
     - API is enabled
     - Channel ID is correct
     - Scopes are correct

---

## 📝 YouTube Community Post Format

**Character Voice Posts:**
- Use same character prompts as Twitter/Bluesky
- Include episode title and link
- Can include images (episode thumbnails)
- Keep text engaging and in character voice

**Example Post Structure:**
```
[Character voice text from Claude]

[Episode Link]

#AI #MachineLearning #ChatGPT
```

---

## ⚠️ Important Notes

1. **Channel Verification:**
   - Some features require channel verification
   - Community posts work without verification
   - 100+ subscribers needed for some advanced features

2. **Rate Limits:**
   - YouTube API has rate limits
   - Free tier: 10,000 units per day
   - Community post = 50 units
   - Should be fine for daily episode posts

3. **Content Guidelines:**
   - Follow YouTube Community Guidelines
   - Don't spam
   - Engage with comments
   - Provide value, not just self-promotion

4. **OAuth2 Expiration:**
   - OAuth2 tokens expire
   - n8n should handle refresh automatically
   - If issues, re-authenticate in credentials

---

## 🔄 Adding to Existing Workflow

**Integration Points:**
- Add after "Select Character" node
- Use same character prompts
- Use same episode link
- Can use same cleaned text (or generate YouTube-specific)

**Workflow Structure:**
```
Select Character
    ↓
Generate Tweet via Claude
    ↓
Clean Twitter Text
    ↓
├─→ Post to Twitter
├─→ Post to Bluesky
└─→ Post to YouTube (NEW)
```

---

## 🎯 Next Steps

1. ✅ Set up Google Cloud Project
2. ✅ Enable YouTube Data API
3. ✅ Create OAuth2 credentials
4. ✅ Add to n8n workflow
5. ⏳ Test with one episode
6. ⏳ Monitor for errors
7. ⏳ Engage with comments

---

## 📚 Resources

- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [YouTube API Quotas](https://developers.google.com/youtube/v3/getting-started#quota)
- [n8n YouTube Node Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube/)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**Ready to set up? Start with Step 1 and work through each step!**


