# 🚀 Complete n8n Setup Guide - Step by Step

## Overview

This guide will help you set up the **Multi-Platform Social Media** workflow that automatically posts new blog episodes to Twitter and Bluesky.

**Time needed:** ~30-45 minutes  
**What you'll need:**
- Twitter/X API credentials (OAuth 1.0)
- Bluesky account and app password
- Anthropic API key (for Claude)
- n8n instance (running)

---

## Step 1: Import the Workflow

### 1.1 Open n8n
1. Go to your n8n instance (usually `http://localhost:5678` or your hosted URL)
2. Make sure you're logged in

### 1.2 Import the Workflow
1. Click **"Workflows"** in the left sidebar
2. Click **"Import from File"** or **"Import from URL"**
3. Select the file: `multi-platform-social-json-tracking-FIXED.json`
4. Click **"Import"**

### 1.3 Verify Import
- You should see a workflow with these nodes:
  - Schedule Trigger
  - RSS Feed Reader
  - Read Tracking JSON
  - Check If Posted
  - If Not Posted
  - Generate Tweet via Claude
  - Post to Twitter
  - Generate Bluesky Post
  - Post to Bluesky
  - Log Twitter to JSON
  - Log Bluesky to JSON
  - Merge Logs
  - Write Tracking JSON

---

## Step 2: Set Up Credentials

### 2.1 Twitter/X OAuth Credentials

**You need:**
- Consumer Key (API Key)
- Consumer Secret (API Secret)
- Access Token
- Access Token Secret

**Where to get them:**
1. Go to https://developer.twitter.com/en/portal/dashboard
2. Sign in with your Twitter/X account
3. Create a new app or use existing one
4. Go to "Keys and tokens" tab
5. Copy all 4 values

**In n8n:**
1. Click **"Credentials"** in left sidebar (or gear icon)
2. Click **"Add Credential"**
3. Search for **"OAuth1 API"**
4. Click **"OAuth1 API"**
5. Fill in:
   - **Name:** `Twitter OAuth`
   - **Consumer Key:** (paste your API Key)
   - **Consumer Secret:** (paste your API Secret)
   - **Access Token:** (paste your Access Token)
   - **Access Token Secret:** (paste your Access Token Secret)
6. Click **"Save"**

**Important:** Make sure your Twitter app has **"Read and write"** permissions:
- Go to your app settings
- Under "App permissions" → Select "Read and write"
- Save changes

---

### 2.2 Anthropic (Claude) API Credentials

**You need:**
- Anthropic API key

**Where to get it:**
1. Go to https://console.anthropic.com/
2. Sign in or create account
3. Go to "API Keys"
4. Click "Create Key"
5. Copy the key (starts with `sk-ant-`)

**In n8n:**
1. Click **"Credentials"** → **"Add Credential"**
2. Search for **"Anthropic API"**
3. Click **"Anthropic API"**
4. Fill in:
   - **Name:** `Anthropic API`
   - **API Key:** (paste your key)
5. Click **"Save"**

---

### 2.3 Bluesky Credentials

**You need:**
- Bluesky handle (e.g., `@thenormalpeople.bsky.social`)
- App password (not your regular password!)

**Where to get app password:**
1. Go to https://bsky.app/settings/app-passwords
2. Sign in with your Bluesky account
3. Click **"Add App Password"**
4. Name it (e.g., "n8n automation")
5. Copy the password (you'll only see it once!)

**In n8n:**
1. Click **"Credentials"** → **"Add Credential"**
2. Search for **"HTTP Header Auth"** or **"Basic Auth"**
3. We'll use HTTP Request with Basic Auth:
   - **Name:** `Bluesky Auth`
   - **Username:** (your Bluesky handle, e.g., `thenormalpeople.bsky.social`)
   - **Password:** (your app password)

**OR** we'll configure it directly in the Bluesky node (see Step 3.4)

---

## Step 3: Configure Workflow Nodes

### 3.1 Schedule Trigger
1. Click **"Schedule Trigger"** node
2. Set schedule:
   - **Rule:** Interval
   - **Hours:** `4` (checks every 4 hours)
   - Or set to your preferred schedule
3. Click **"Save"**

### 3.2 RSS Feed Reader
1. Click **"RSS Feed Reader"** node
2. Verify URL: `https://theaifornormalpeople.com/index.xml`
3. If your RSS feed is different, update it here
4. Click **"Save"**

### 3.3 Read Tracking JSON
1. Click **"Read Tracking JSON"** node
2. Verify path: `n8n/tracking/posted-content.json`
3. This file tracks what's already been posted
4. **Important:** Make sure this file exists in your n8n instance
   - If using Docker: Mount a volume or create the file
   - If using local: Create folder `n8n/tracking/` and file `posted-content.json` with content: `[]`
5. Click **"Save"**

### 3.4 Generate Tweet via Claude
1. Click **"Generate Tweet via Claude"** node
2. Under **"Credentials"**, select **"Anthropic API"** (the one you created)
3. Verify the prompt is correct (should generate Vector's voice tweets)
4. Click **"Save"**

### 3.5 Post to Twitter
1. Click **"Post to Twitter"** node
2. Under **"Credentials"**, select **"Twitter OAuth"** (the one you created)
3. Verify:
   - **Method:** `POST`
   - **URL:** `https://api.twitter.com/2/tweets`
   - **Authentication:** `OAuth1 API`
4. Click **"Save"**

### 3.6 Generate Bluesky Post
1. Click **"Generate Bluesky Post"** node
2. Under **"Credentials"**, select **"Anthropic API"**
3. Verify the prompt (should generate Bluesky posts)
4. Click **"Save"**

### 3.7 Post to Bluesky
1. Click **"Post to Bluesky"** node
2. This uses HTTP Header Auth for Bluesky

**Bluesky Authentication Setup:**

**Step 1: Get Bluesky App Password**
1. Go to https://bsky.app/settings/app-passwords
2. Sign in with your Bluesky account
3. Click **"Add App Password"**
4. Name it: `n8n automation`
5. **Copy the password** (you'll only see it once!)

**Step 2: Get Access Token (One-time setup)**
Bluesky requires an access token. You can get it by:

**Option A: Use a simple API call (easiest)**
1. Open a terminal or use Postman/curl
2. Run this command (replace with your handle and app password):
```bash
curl -X POST https://bsky.social/xrpc/com.atproto.server.createSession \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "YOUR_HANDLE.bsky.social",
    "password": "YOUR_APP_PASSWORD"
  }'
```
3. Copy the `accessJwt` from the response

**Option B: Use n8n to get token (recommended)**
1. Create a temporary workflow with one HTTP Request node
2. Method: `POST`
3. URL: `https://bsky.social/xrpc/com.atproto.server.createSession`
4. Body (JSON):
```json
{
  "identifier": "thenormalpeople.bsky.social",
  "password": "YOUR_APP_PASSWORD"
}
```
5. Execute it
6. Copy the `accessJwt` from the response

**Step 3: Create HTTP Header Auth Credential**
1. In n8n, go to **"Credentials"** → **"Add Credential"**
2. Search for **"HTTP Header Auth"**
3. Click **"HTTP Header Auth"**
4. Fill in:
   - **Name:** `Bluesky Auth`
   - **Header Name:** `Authorization`
   - **Header Value:** `Bearer YOUR_ACCESS_JWT` (paste the accessJwt you got)
5. Click **"Save"**

**Step 4: Connect to Bluesky Node**
1. Click **"Post to Bluesky"** node
2. Under **"Credentials"**, select **"Bluesky Auth"**
3. Verify:
   - **Method:** `POST`
   - **URL:** `https://bsky.social/xrpc/com.atproto.repo.createRecord`
   - **Repo:** `thenormalpeople.bsky.social` (your handle)
4. Click **"Save"**

**Note:** Access tokens expire. You may need to refresh it periodically, or we can set up automatic token refresh later.

### 3.8 Log Nodes
1. **Log Twitter to JSON** - No configuration needed
2. **Log Bluesky to JSON** - No configuration needed
3. **Merge Logs** - No configuration needed
4. **Write Tracking JSON** - Verify path: `n8n/tracking/posted-content.json`

---

## Step 4: Create Tracking File

### 4.1 Create the File
1. In your n8n instance, create folder: `n8n/tracking/`
2. Create file: `posted-content.json`
3. Add content: `[]` (empty JSON array)
4. Save the file

**If using Docker:**
- Mount a volume: `-v /path/to/tracking:/n8n/tracking`
- Create the file in that directory

**If using local n8n:**
- Create in your n8n data directory
- Or use absolute path in the nodes

---

## Step 5: Test the Workflow

### 5.1 Test Individual Nodes
1. Click **"Execute Workflow"** button (top right)
2. Watch each node execute
3. Check for errors (red nodes)

### 5.2 Common Issues to Check

**"Post to Twitter" errors:**
- ✅ Credential selected?
- ✅ Twitter app has "Read and write" permissions?
- ✅ Credentials are correct?

**"Read Tracking JSON" errors:**
- ✅ File exists?
- ✅ Path is correct?
- ✅ File has valid JSON (`[]`)?

**"Generate Tweet via Claude" errors:**
- ✅ Anthropic credential selected?
- ✅ API key is valid?
- ✅ Have API credits?

**"Post to Bluesky" errors:**
- ✅ Authentication configured?
- ✅ App password is correct?
- ✅ Handle is correct?

### 5.3 Test Full Flow
1. Make sure you have a new episode in your RSS feed
2. Click **"Execute Workflow"**
3. Watch it:
   - Read RSS feed
   - Check if posted
   - Generate content
   - Post to platforms
   - Log results

---

## Step 6: Activate the Workflow

### 6.1 Activate
1. Toggle **"Active"** switch (top right of workflow)
2. Workflow will now run on schedule

### 6.2 Verify It's Running
1. Go to **"Executions"** tab
2. You should see executions every 4 hours (or your schedule)
3. Check for successful runs

---

## Step 7: Monitor and Troubleshoot

### 7.1 Check Executions
- Go to **"Executions"** tab
- Click on any execution to see details
- Red nodes = errors
- Green nodes = success

### 7.2 Check Tracking File
- Open `n8n/tracking/posted-content.json`
- Should see entries like:
```json
[
  {
    "url": "https://theaifornormalpeople.com/blog/episode-17...",
    "platform": "Twitter",
    "postedDate": "2025-12-22T10:00:00Z",
    "postText": "FASCINATING episode about...",
    "postUrl": "https://twitter.com/username/status/123456",
    "status": "posted"
  }
]
```

### 7.3 Common Fixes

**Workflow not running:**
- ✅ Is it activated?
- ✅ Is schedule trigger configured?
- ✅ Check n8n logs

**Duplicate posts:**
- ✅ Check tracking file is being written
- ✅ Verify "Check If Posted" logic

**Twitter errors:**
- ✅ Check Twitter app permissions
- ✅ Verify OAuth credentials
- ✅ Check Twitter API status

**Bluesky errors:**
- ✅ Verify app password (not regular password)
- ✅ Check handle format
- ✅ Verify authentication headers

---

## ✅ Success Checklist

- [ ] Workflow imported successfully
- [ ] All credentials created and connected
- [ ] Tracking file created and accessible
- [ ] Test execution runs without errors
- [ ] Posts appear on Twitter
- [ ] Posts appear on Bluesky
- [ ] Tracking file updates correctly
- [ ] Workflow is activated
- [ ] Scheduled executions are running

---

## 🆘 Need Help?

**If something's not working:**
1. Check the execution logs (click on failed node)
2. Verify all credentials are correct
3. Test each node individually
4. Check n8n version compatibility
5. Verify file paths are correct

**Common fixes:**
- Re-import workflow if nodes are broken
- Re-create credentials if authentication fails
- Check file permissions for tracking JSON
- Verify RSS feed URL is accessible

---

## 📝 Next Steps

Once this is working:
1. Monitor for a few days
2. Adjust schedule if needed
3. Fine-tune Claude prompts for better posts
4. Add more platforms if desired
5. Set up error notifications

**You're all set!** 🎉

