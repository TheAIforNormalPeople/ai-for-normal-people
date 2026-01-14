# 🐦 Twitter/X API Credentials Setup - Step by Step

## What You Need

You need **4 values** from Twitter's Developer Portal:
1. **Consumer Key** (also called API Key)
2. **Consumer Secret** (also called API Secret)
3. **Access Token**
4. **Access Token Secret**

---

## Step 1: Get Twitter Developer Access

### 1.1 Sign Up for Developer Account
1. Go to: https://developer.twitter.com/en/portal/dashboard
2. Sign in with your Twitter/X account
3. If you don't have developer access yet:
   - Click **"Sign up"** or **"Apply"**
   - Choose **"Making bots"** or **"Exploring the API"**
   - Fill out the application (usually approved quickly)
   - Accept terms

### 1.2 Access Developer Portal
- Once approved, go to: https://developer.twitter.com/en/portal/dashboard
- You should see your dashboard

---

## Step 2: Create an App (or Use Existing)

### 2.1 Create New App
1. In the dashboard, click **"Projects & Apps"** (left sidebar)
2. Click **"Create App"** or **"Add App"**
3. Choose your project (or create a new one)
4. Name your app (e.g., "The Normal People Blog")
5. Click **"Create"**

### 2.2 Important: Set App Permissions
**CRITICAL:** Your app needs **"Read and write"** permissions to post tweets.

1. In your app settings, find **"App permissions"** or **"User authentication settings"**
2. Click **"Set up"** or **"Edit"**
3. Select **"Read and write"** (NOT just "Read")
4. **Callback URL:** Can be `http://localhost` or `https://localhost` (n8n doesn't need a real callback)
5. **Website URL:** Your blog URL (e.g., `https://theaifornormalpeople.com`)
6. Click **"Save"**

---

## Step 3: Get Your Credentials

### 3.1 Get Consumer Key and Secret
1. In your app settings, go to **"Keys and tokens"** tab
2. Under **"Consumer Keys"**:
   - **API Key** = This is your Consumer Key
   - **API Key Secret** = This is your Consumer Secret
3. Click **"Show"** or **"Reveal"** to see the secret
4. **Copy both values** (you'll need them in n8n)

### 3.2 Generate Access Token and Secret
1. Still in **"Keys and tokens"** tab
2. Scroll down to **"Access Token and Secret"**
3. Click **"Generate"** or **"Create"**
4. **Copy both values:**
   - **Access Token**
   - **Access Token Secret**
5. **Important:** These are only shown once! Copy them immediately.

---

## Step 4: Add Credentials to n8n

### 4.1 Open n8n Credentials
1. In n8n, click **"Credentials"** in the left sidebar (or gear icon)
2. Click **"Add Credential"**
3. Search for: **"OAuth1 API"**
4. Click **"OAuth1 API"**

### 4.2 Fill in the Credentials
Fill in all 4 fields:

- **Credential Name:** `Twitter OAuth` (or any name you want)
- **Consumer Key:** (paste your API Key from Step 3.1)
- **Consumer Secret:** (paste your API Key Secret from Step 3.1)
- **Access Token:** (paste your Access Token from Step 3.2)
- **Access Token Secret:** (paste your Access Token Secret from Step 3.2)

### 4.3 Save
1. Click **"Save"**
2. The credential should now appear in your credentials list

---

## Step 5: Connect Credential to Workflow

### 5.1 Open Your Workflow
1. Go to **"Workflows"**
2. Open: **"Multi-Platform Social Media (JSON Tracking) - FIXED"**

### 5.2 Connect to "Post to Twitter" Node
1. Click the **"Post to Twitter"** node
2. Under **"Credentials"**, click the dropdown
3. Select: **"Twitter OAuth"** (the credential you just created)
4. Click **"Save"** on the node

---

## Step 6: Test It

### 6.1 Test the Workflow
1. Click **"Execute Workflow"** (top right)
2. Watch the nodes execute:
   - ✅ "Select Character" should work
   - ✅ "Generate Tweet via Claude" should generate a tweet
   - ✅ "Post to Twitter" should post successfully

### 6.2 Check for Errors
If you see errors:

**"Unauthorized" or "401":**
- ✅ Check that all 4 credentials are correct
- ✅ Make sure you copied the full values (no extra spaces)
- ✅ Verify app has "Read and write" permissions

**"Forbidden" or "403":**
- ✅ App permissions must be "Read and write" (not just "Read")
- ✅ Regenerate Access Token after changing permissions

**"Invalid credentials":**
- ✅ Re-check all 4 values are correct
- ✅ Make sure you're using the right app's credentials

---

## ✅ Success Checklist

- [ ] Twitter Developer account created/approved
- [ ] App created with "Read and write" permissions
- [ ] All 4 credentials copied (Consumer Key, Secret, Access Token, Token Secret)
- [ ] OAuth1 API credential created in n8n
- [ ] Credential connected to "Post to Twitter" node
- [ ] Workflow test executes without errors
- [ ] Tweet appears on Twitter/X

---

## 🆘 Troubleshooting

### "I can't find where to create an app"
- Go to: https://developer.twitter.com/en/portal/dashboard
- Click "Projects & Apps" → "Create App"

### "I don't see 'Read and write' option"
- You might need to upgrade your developer account
- Or the option might be under "User authentication settings"
- Look for "App permissions" or "Access level"

### "Credentials don't work"
- Make sure app permissions are "Read and write"
- Regenerate Access Token after changing permissions
- Double-check all 4 values are correct (no typos, no extra spaces)

### "n8n says 'Credential not found'"
- Make sure you saved the credential in n8n
- Make sure you selected it in the "Post to Twitter" node
- Try creating the credential again

---

## 📝 Quick Reference

**Twitter Developer Portal:** https://developer.twitter.com/en/portal/dashboard

**What you need:**
1. Consumer Key (API Key)
2. Consumer Secret (API Key Secret)
3. Access Token
4. Access Token Secret

**Where to find them:**
- App settings → "Keys and tokens" tab

**n8n credential type:**
- OAuth1 API

---

**Once this is set up, your workflow will automatically post to both Twitter and Bluesky!** 🎉

