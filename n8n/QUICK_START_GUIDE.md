# n8n Quick Start Guide

## The Simplest Path to Get It Working

### Step 1: Get Your Credentials Ready (5 minutes)

**Airtable:**
1. Go to https://airtable.com/api
2. Find your "Automation Tracking" base
3. Copy the Base ID (starts with `app`)
4. Go to https://airtable.com/create/tokens
5. Create token with access to "Automation Tracking" base
6. Copy the token

**Anthropic (Claude):**
1. Go to https://console.anthropic.com/
2. Get your API key
3. Copy it

**Twitter:**
1. Go to https://developer.twitter.com/
2. Create app, get OAuth credentials
3. Copy: API Key, API Secret, Access Token, Access Token Secret

---

### Step 2: Set Up n8n (2 minutes)

1. Open n8n: http://localhost:5678
2. Go to **Settings** → **Environment Variables**
3. Add: `AIRTABLE_APP_ID` = your Base ID
4. Save

---

### Step 3: Add Credentials (3 minutes)

1. Go to **Credentials** → **Add Credential**
2. Add each one:
   - **Airtable API** → paste your token
   - **Anthropic API** → paste your API key
   - **Twitter OAuth API** → paste all 4 Twitter values
3. Name them: "Airtable account", "Anthropic API", "Twitter account"

---

### Step 4: Import Workflow (1 minute)

1. Go to **Workflows** → **Add workflow**
2. Click "..." → **Import from file**
3. Open: `aiforhumans/n8n/auto-tweet-new-episodes-v2.json`
4. Copy entire JSON, paste into n8n
5. Click **Import**

---

### Step 5: Connect Everything (2 minutes)

1. Click on **"Check If Already Posted"** node
2. Click "Credential to connect" → Select "Airtable account"
3. Click on **"Generate Tweet via Claude"** node
4. Click "Credential to connect" → Select "Anthropic API"
5. Click on **"Post to Twitter"** node
6. Click "Credential to connect" → Select "Twitter account"
7. Click on **"Log to Airtable"** node
8. Click "Credential to connect" → Select "Airtable account"

---

### Step 6: Test (1 minute)

1. Click **"Execute Workflow"** (top right)
2. Watch it run
3. If it works: ✅ Done!
4. If it fails: Check which node failed, see troubleshooting

---

## Total Time: ~15 minutes

## Common Issues

**"NOT_FOUND" error:**
→ Base ID wrong, or table name wrong, or token doesn't have access

**"403 Forbidden":**
→ Token doesn't have access to the base

**"Credential not found":**
→ You didn't connect the credential to the node

**"Environment variable not found":**
→ `AIRTABLE_APP_ID` not set in Settings → Environment Variables

---

## That's It!

Once it works, the workflow will:
1. Check RSS feed for new episodes
2. Check Airtable to see if already posted
3. If not, generate tweet and post it
4. Log to Airtable so it doesn't post twice

You can run it manually anytime, or set up a schedule to run automatically.

