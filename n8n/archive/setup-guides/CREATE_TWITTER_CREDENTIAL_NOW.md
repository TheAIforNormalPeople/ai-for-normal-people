# 🔑 Create Twitter/X OAuth Credential in n8n

**Step-by-step guide to create the credential**

---

## STEP 1: Get Twitter/X API Credentials

**You need 4 values from Twitter Developer Portal:**

1. Go to: https://developer.twitter.com/en/portal/dashboard
2. Sign in with your Twitter/X account
3. Create a Project (or use existing):
   - Click "Create Project"
   - Name it: "AI for Normal People Blog"
   - Click "Next"
4. Create an App within the project:
   - Click "Create App"
   - Name it: "Blog Automation" (or similar)
   - Click "Next"
5. Go to "Keys and tokens" tab:
   - **Consumer Key (API Key)** - Copy this
   - **Consumer Secret (API Secret)** - Copy this
   - **Access Token** - Click "Generate" if you don't have one, then copy
   - **Access Token Secret** - Click "Generate" if you don't have one, then copy

**Important:** Make sure your app has **"Read and write"** permissions:
- Go to your app settings
- Under "App permissions" → Select "Read and write"
- Save changes

**Save all 4 values securely** (password manager, notes app, etc.)

---

## STEP 2: Create Credential in n8n

1. **In n8n, click "Credentials"** (gear icon or left sidebar)

2. **Click "Add Credential"**

3. **Search for "OAuth1 API"** (or "X OAuth API" if available)

4. **Click "OAuth1 API"**

5. **Fill in the form:**
   - **Name:** `Twitter OAuth` (or any name you'll remember)
   - **Consumer Key:** [Paste your API Key]
   - **Consumer Secret:** [Paste your API Secret]
   - **Access Token:** [Paste your Access Token]
   - **Access Token Secret:** [Paste your Access Token Secret]

6. **Click "Save"**

7. **Test the credential:**
   - Click "Test" button (if available)
   - Should say "Connection successful"

---

## STEP 3: Use Credential in Node

**Back in "Post to Twitter" node:**

1. **Credential Type:** Should be "X OAuth API" (already selected)
2. **Credential dropdown:** Select "Twitter OAuth" (the one you just created)
3. Red warning should disappear ✅

---

## 🆘 TROUBLESHOOTING

**"Invalid credentials":**
- Double-check all 4 values are correct
- Make sure no extra spaces when copying
- Verify app has "Read and write" permissions

**"Forbidden" or "Unauthorized":**
- Check app permissions are "Read and write"
- Regenerate Access Token and Secret if needed
- Make sure you're using the correct app

**Can't find "OAuth1 API" credential type:**
- Try searching for "X OAuth API"
- Or "OAuth 1.0"
- Some n8n versions have it under different names

---

## ✅ QUICK CHECKLIST

- [ ] Got all 4 values from Twitter Developer Portal
- [ ] App permissions set to "Read and write"
- [ ] Created credential in n8n
- [ ] Credential tested successfully
- [ ] Selected credential in "Post to Twitter" node

---

**Once credential is created and selected, the red warning should disappear!**

