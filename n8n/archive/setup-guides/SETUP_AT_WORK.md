# 🚀 n8n Setup Guide - At Work Edition

**Purpose:** Step-by-step guide you can follow at work to set up social automation  
**Time:** 30-45 minutes (can be done in breaks)  
**What You Need:** Credentials ready (or get them as you go)

---

## 📋 PRE-SETUP CHECKLIST

**Before You Start:**
- [ ] n8n instance running (local or hosted)
- [ ] Twitter/X developer account access
- [ ] Anthropic API account (or ready to create)
- [ ] Bluesky account (or ready to create app password)

**If you don't have these yet, we'll get them as we go.**

---

## STEP 1: GET CREDENTIALS (15-20 min)

### 1.1 Twitter/X OAuth Credentials

**Where:** https://developer.twitter.com/en/portal/dashboard

**Steps:**
1. Sign in with your Twitter/X account
2. Click "Create Project" or use existing
3. Name it: "AI for Normal People Blog"
4. Create an app within the project
5. Go to "Keys and tokens" tab
6. **Copy these 4 values:**
   - Consumer Key (API Key)
   - Consumer Secret (API Secret)
   - Access Token
   - Access Token Secret

**Important:** Make sure app permissions are "Read and write" (not just "Read")

**Save these in a secure place (password manager, notes app, etc.)**

---

### 1.2 Anthropic API Key

**Where:** https://console.anthropic.com/

**Steps:**
1. Sign in or create account
2. Go to "API Keys"
3. Click "Create Key"
4. Name it: "n8n Blog Automation"
5. **Copy the key** (starts with `sk-ant-`)
6. **Save it securely**

**Cost:** Very cheap (pennies per post). You'll use ~$0.01-0.05 per episode post.

---

### 1.3 Bluesky App Password

**Where:** https://bsky.app/settings/app-passwords

**Steps:**
1. Sign in to Bluesky
2. Go to Settings → App Passwords
3. Click "Add App Password"
4. Name it: "n8n Blog Automation"
5. **Copy the password** (long string)
6. **Save it securely**

**Note:** This is NOT your regular password. It's a special app password.

---

## STEP 2: IMPORT WORKFLOW (5 min)

### 2.1 Open n8n

1. Go to your n8n instance:
   - Local: `http://localhost:5678`
   - Hosted: Your n8n URL
2. Sign in

### 2.2 Import Workflow

1. Click **"Workflows"** in left sidebar
2. Click **"Import from File"** (or drag and drop)
3. Select: `aiforhumans/n8n/multi-platform-social-json-tracking-FIXED.json`
4. Click **"Import"**

**You should see:** A workflow with ~13 nodes connected

**If import fails:** Check that the JSON file is valid (should be fine, we tested it)

---

## STEP 3: CREATE CREDENTIALS IN N8N (10 min)

### 3.1 Twitter OAuth Credential

1. In n8n, click **"Credentials"** (gear icon or left sidebar)
2. Click **"Add Credential"**
3. Search for **"OAuth1 API"**
4. Click **"OAuth1 API"**
5. Fill in:
   - **Name:** `Twitter OAuth`
   - **Consumer Key:** [Paste your API Key]
   - **Consumer Secret:** [Paste your API Secret]
   - **Access Token:** [Paste your Access Token]
   - **Access Token Secret:** [Paste your Access Token Secret]
6. Click **"Save"**

**Test:** Click "Test" button - should say "Connection successful"

---

### 3.2 Anthropic API Credential

1. Click **"Add Credential"**
2. Search for **"HTTP Header Auth"**
3. Click **"HTTP Header Auth"**
4. Fill in:
   - **Name:** `Anthropic API`
   - **Name (Header):** `x-api-key`
   - **Value:** `[Paste your Anthropic API key]`
5. Click **"Save"**

**Note:** If "Anthropic API" credential type exists, use that instead (some n8n versions have it built-in)

---

### 3.3 Bluesky Auth Credential

1. Click **"Add Credential"**
2. Search for **"HTTP Header Auth"**
3. Click **"HTTP Header Auth"**
4. Fill in:
   - **Name:** `Bluesky Auth`
   - **Name (Header):** `Authorization`
   - **Value:** `Bearer [Paste your Bluesky app password]`
5. Click **"Save"**

**Important:** Include the word "Bearer" before your password (with a space)

---

## STEP 4: CONNECT CREDENTIALS TO WORKFLOW (5 min)

### 4.1 Open Workflow

1. Click on the imported workflow
2. You should see all the nodes

### 4.2 Connect Twitter Credential

1. Click on **"Post to Twitter"** node (HTTP Request node)
2. Click on **"Credential"** dropdown
3. Select **"Twitter OAuth"** (the one you just created)
4. Node should show credential is connected

### 4.3 Connect Anthropic Credential

1. Click on **"Generate Tweet via Claude"** node
2. Click on **"Credential"** dropdown
3. Select **"Anthropic API"** (the one you just created)
4. Repeat for **"Generate Bluesky Post"** node

### 4.4 Connect Bluesky Credential

1. Click on **"Post to Bluesky"** node (HTTP Request node)
2. Click on **"Credential"** dropdown
3. Select **"Bluesky Auth"** (the one you just created)

---

## STEP 5: CONFIGURE FILE PATHS (5 min)

### 5.1 Find Tracking JSON Path

**File:** `aiforhumans/n8n/tracking/posted-content.json`

**You need the absolute path:**
- Windows: `C:\Users\arick\SORA\aiforhumans\n8n\tracking\posted-content.json`
- Or relative path if n8n is in same directory

### 5.2 Update Read Tracking JSON Node

1. Click on **"Read Tracking JSON"** node
2. Find **"File Path"** field
3. Enter: `C:\Users\arick\SORA\aiforhumans\n8n\tracking\posted-content.json`
   - (Adjust path to your actual location)

### 5.3 Update Write Tracking JSON Node

1. Click on **"Write Tracking JSON"** node
2. Find **"File Path"** field
3. Enter: Same path as above

**Important:** Both nodes must use the SAME path

---

## STEP 6: CREATE TRACKING FILE (2 min)

### 6.1 Create File

1. Navigate to: `aiforhumans/n8n/tracking/`
2. Create file: `posted-content.json`
3. Add content:
```json
[]
```

**That's it!** Just an empty JSON array.

---

## STEP 7: TEST WORKFLOW (10 min)

### 7.1 Manual Test

1. In n8n workflow, click **"Execute Workflow"** button (play icon)
2. Watch it run through each node
3. Check for errors (red nodes = error)

### 7.2 Check Each Node

**RSS Feed Node:**
- Should fetch latest episode from your blog
- Check output: Should show episode title, URL, description

**Read Tracking JSON Node:**
- Should read empty array `[]`
- No errors = good

**If Not Posted Node:**
- Should route to TRUE (if episode not posted yet)
- Check output: Should show episode data

**Claude Nodes:**
- Should generate tweet/post text
- Check output: Should show generated text

**HTTP Request Nodes:**
- Twitter: Should post tweet
- Bluesky: Should post to Bluesky
- Check output: Should show post IDs

**Write Tracking JSON Node:**
- Should write post IDs to JSON file
- Check file: Should contain new entry

### 7.3 Verify Posts

1. Check your Twitter/X account: Did tweet appear?
2. Check your Bluesky account: Did post appear?
3. Check tracking JSON file: Are IDs logged?

---

## STEP 8: FIX ERRORS (If Any)

### Common Errors:

**"Credential not found":**
- Go back to Step 3, make sure credentials are created
- Make sure you selected the right credential in nodes

**"File not found":**
- Check file path in Step 5
- Make sure tracking JSON file exists (Step 6)
- Use absolute path, not relative

**"Twitter API error":**
- Check app permissions are "Read and write"
- Verify all 4 OAuth values are correct
- Check Twitter app is not suspended

**"Anthropic API error":**
- Verify API key is correct
- Check you have credits/balance
- Verify header name is `x-api-key`

**"Bluesky error":**
- Verify app password is correct (not regular password)
- Check "Bearer" is included in header value
- Verify account is active

---

## STEP 9: ACTIVATE WORKFLOW (2 min)

### 9.1 Turn On Schedule

1. In workflow, find **"Schedule Trigger"** node
2. Click on it
3. Set schedule: **"Every 4 hours"** (or your preference)
4. Click **"Save"**

### 9.2 Activate Workflow

1. Click **"Active"** toggle at top of workflow
2. Workflow is now running automatically!

**It will:**
- Check RSS feed every 4 hours
- Find new episodes
- Post to Twitter and Bluesky
- Track what's been posted

---

## ✅ VERIFICATION CHECKLIST

After setup, verify:

- [ ] Workflow imported successfully
- [ ] All 3 credentials created
- [ ] Credentials connected to nodes
- [ ] File paths configured correctly
- [ ] Tracking JSON file created
- [ ] Manual test successful
- [ ] Posts appeared on Twitter
- [ ] Posts appeared on Bluesky
- [ ] Tracking JSON updated
- [ ] Workflow activated and scheduled

---

## 🆘 TROUBLESHOOTING

**If something doesn't work:**

1. **Check n8n execution logs:**
   - Click on workflow
   - Click "Executions" tab
   - See what failed

2. **Test credentials individually:**
   - Click "Test" button on each credential
   - Fix any that fail

3. **Check file permissions:**
   - Make sure n8n can read/write tracking JSON
   - Check file path is correct

4. **Verify API permissions:**
   - Twitter: Read and write
   - Anthropic: API access enabled
   - Bluesky: App password created

---

## 📝 NEXT STEPS

**After setup is complete:**

1. **Monitor first few runs:**
   - Check executions in n8n
   - Verify posts are appearing
   - Check tracking JSON is updating

2. **Adjust schedule if needed:**
   - Default: Every 4 hours
   - Can change to more/less frequent

3. **Customize prompts (optional):**
   - Edit Claude nodes to change post style
   - Make posts more/less formal
   - Add hashtags, etc.

---

## 🎯 SUCCESS!

**You're done!** Your blog will now automatically post new episodes to Twitter and Bluesky.

**What happens next:**
- Every 4 hours, n8n checks for new episodes
- If new episode found, generates posts
- Posts to both platforms
- Tracks what's been posted (won't duplicate)

**You can now focus on content while automation handles social posting!**

---

**Questions?** Check `COMPLETE_SETUP_GUIDE_NOW.md` for more detailed troubleshooting.

