# n8n Setup - Step by Step (Twitter Only)

## Overview
This workflow automatically tweets when you publish a new blog episode. It:
1. Checks your RSS feed for new episodes
2. Checks Airtable to see if it was already tweeted
3. If not, generates a tweet using Claude AI
4. Posts to Twitter
5. Logs to Airtable

---

## STEP 1: Airtable Setup ✅

You should have:
- Base: "Automation Tracking"
- Table: "Posted Content"
- Fields: URL, Platform, Posted Date, Tweet Text, Tweet URL
- Base ID (from airtable.com/api)
- API Token (from airtable.com/create/tokens)

---

## STEP 2: Import Workflow to n8n

1. Open n8n (http://localhost:5678)
2. Click "Workflows" → "Add workflow"
3. Click the "..." menu → "Import from file"
4. Open: `aiforhumans/n8n/auto-tweet-new-episodes.json`
5. Copy the entire JSON content
6. Paste into n8n import field
7. Click "Import"

---

## STEP 3: Set Environment Variable

1. In n8n, go to **Settings** → **Environment Variables**
2. Click "Add Variable"
3. Name: `AIRTABLE_APP_ID`
4. Value: Your Airtable Base ID (e.g., `appXXXXXXXXXXXXXX`)
5. Click "Save"

---

## STEP 4: Add Credentials

### A. Airtable Credential

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "Airtable"
3. Select "Airtable API"
4. Enter your Airtable API Token
5. Name it: "Airtable account"
6. Click "Save"

### B. Anthropic (Claude) Credential

1. Go to **Credentials** → **Add Credential**
2. Search for "Anthropic" or "Claude"
3. Select "Anthropic API"
4. Enter your Anthropic API key (get from https://console.anthropic.com/)
5. Name it: "Anthropic API"
6. Click "Save"

### C. Twitter Credential

1. Go to **Credentials** → **Add Credential**
2. Search for "Twitter"
3. Select "Twitter OAuth API"
4. You'll need:
   - API Key
   - API Secret
   - Access Token
   - Access Token Secret
   - Get these from https://developer.twitter.com/
5. Name it: "Twitter account"
6. Click "Save"

---

## STEP 5: Connect Credentials to Workflow

1. Open the imported workflow
2. Click on **"Check If Already Posted"** node:
   - Click "Credential to connect"
   - Select "Airtable account"
3. Click on **"Generate Tweet via Claude"** node:
   - Click "Credential to connect"
   - Select "Anthropic API"
4. Click on **"Post to Twitter"** node:
   - Click "Credential to connect"
   - Select "Twitter account"
5. Click on **"Log to Airtable"** node:
   - Click "Credential to connect"
   - Select "Airtable account"

---

## STEP 6: Update Airtable Base ID in Nodes

The workflow uses `{{$env.AIRTABLE_APP_ID}}` which should work if you set the environment variable. But let's verify:

1. Click **"Check If Already Posted"** node
2. In "Application" field, it should say: `{{$env.AIRTABLE_APP_ID}}`
3. If not, change it to: `{{$env.AIRTABLE_APP_ID}}`
4. Do the same for **"Log to Airtable"** node

---

## STEP 7: Set Trigger

1. Click on **"RSS Feed Reader"** node
2. Currently it's set to check: `https://theaifornormalpeople.com/index.xml`
3. This is correct - leave it as is
4. To make it run automatically:
   - Click "Add trigger" above the RSS node
   - Select "Schedule Trigger"
   - Set to run every 4 hours
   - OR keep it manual for testing

---

## STEP 8: Test the Workflow

1. Click "Execute Workflow" (top right)
2. Watch it run through each node
3. Check for errors (red exclamation marks)
4. If successful:
   - Check your Twitter - should see a new tweet
   - Check Airtable - should see a new record

---

## Troubleshooting

### "Airtable error"
- Check Base ID is correct in environment variable
- Check API token is valid
- Verify table name is exactly "Posted Content"
- Verify field names match exactly

### "Anthropic error"
- Check API key is correct
- Make sure you have credits/usage available

### "Twitter error"
- Check OAuth credentials are correct
- Make sure Twitter app has write permissions
- Check rate limits

### "RSS Feed error"
- Verify your RSS feed URL is correct
- Make sure new episodes are published (not draft)

---

## What Happens Next

Once activated:
- Workflow checks RSS feed every 4 hours (or on schedule)
- Finds new episodes
- Checks Airtable - if already posted, skips
- If not posted: generates tweet, posts to Twitter, logs to Airtable
- You never post the same episode twice!

---

## Current Status

✅ Airtable base created
⏳ Import workflow to n8n
⏳ Set credentials
⏳ Test workflow
⏳ Activate automation

