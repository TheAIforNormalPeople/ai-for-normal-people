# N8N Automation Setup Guide

## Quick Start

You have 3 workflow JSON files ready to import into n8n. Here's how to set them up.

---

## STEP 1: SET UP AIRTABLE (Required for all workflows)

### Create Airtable Base

1. Go to [Airtable.com](https://airtable.com) and create a new base
2. Create these 3 tables:

**Table 1: "Posted Content"**
- Fields:
  - `URL` (URL field)
  - `Platform` (Single select: Twitter, Email, etc.)
  - `Posted Date` (Date field)
  - `Tweet Text` (Long text)
  - `Tweet URL` (URL field)

**Table 2: "Email Subscribers"**
- Fields:
  - `Email` (Email field)
  - `Name` (Single line text)
  - `Status` (Single select: Active, Unsubscribed)
  - `Subscribed Date` (Date field)

**Table 3: "Emailed Episodes"**
- Fields:
  - `URL` (URL field)
  - `Episode Title` (Single line text)
  - `Sent Date` (Date field)
  - `Subscriber Count` (Number)

**Table 4: "Twitter Threads"** (for workflow 3)
- Fields:
  - `Episode URL` (URL field)
  - `Tweet Position` (Number)
  - `Tweet Text` (Long text)
  - `Tweet ID` (Single line text)
  - `Posted Date` (Date field)

### Get Your Airtable Credentials

1. Go to [Airtable API](https://airtable.com/api)
2. Select your base
3. Copy the **Base ID** (looks like `appXXXXXXXXXXXXXX`)
4. Create an API key: Account → Generate API key
5. Save both for later

---

## STEP 2: SET UP CREDENTIALS IN N8N

### Anthropic API (Claude)

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "Anthropic" or "Claude"
3. Add your Anthropic API key
4. Name it: "Anthropic API"

### Twitter/X

1. Go to [Twitter Developer Portal](https://developer.twitter.com)
2. Create an app (if you don't have one)
3. Get your API keys and tokens
4. In n8n, go to **Credentials** → **Add Credential**
5. Search for "Twitter"
6. Add your keys (OAuth 1.0)
7. Name it: "Twitter account"

### Gmail/SMTP (for email workflow)

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "SMTP" or "Gmail"
3. Add your email credentials
4. For Gmail, you may need an [App Password](https://support.google.com/accounts/answer/185833)
5. Name it: "Gmail SMTP"

### Airtable

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "Airtable"
3. Add your Airtable API key
4. Name it: "Airtable account"

---

## STEP 3: SET ENVIRONMENT VARIABLE

1. In n8n, go to **Settings** → **Environment Variables**
2. Add: `AIRTABLE_APP_ID` = your Airtable Base ID (from Step 1)
3. Save

---

## STEP 4: IMPORT WORKFLOWS

### Workflow 1: Auto-Tweet New Episodes

1. In n8n, click **Workflows** → **Import from File**
2. Upload: `n8n/auto-tweet-new-episodes.json`
3. The workflow will import with placeholder credentials
4. **Update credentials:**
   - Click "Generate Tweet via Claude" node → Credentials → Select "Anthropic API"
   - Click "Post to Twitter" node → Credentials → Select "Twitter account"
   - Click "Log to Airtable" node → Credentials → Select "Airtable account"
5. **Set trigger:**
   - Click "RSS Feed Reader" node
   - Change to "Schedule Trigger" (or keep RSS and set it to check every 4 hours)
   - Set schedule: Every 4 hours
6. **Test:** Click "Execute Workflow" to test
7. **Activate:** Toggle "Active" switch

### Workflow 2: Email New Episodes

1. Import: `n8n/email-new-episodes.json`
2. **Update credentials:**
   - "Generate Email via Claude" → Anthropic API
   - "Send Email" → Gmail SMTP
   - "Log to Airtable" → Airtable account
3. **Set trigger:** Same as Workflow 1 (RSS check every 4 hours)
4. **Test and activate**

### Workflow 3: Twitter Thread Generator (Manual)

1. Import: `n8n/twitter-thread-generator.json`
2. **Update credentials:**
   - "Generate Thread via Claude" → Anthropic API
   - "Post Tweet" → Twitter account
   - "Log to Airtable" → Airtable account
3. **This is manual** - you trigger it when you want to create a thread
4. **To use:** Click "Execute Workflow", enter episode URL in the trigger

---

## STEP 5: TESTING

### Test Workflow 1 (Auto-Tweet)

1. Make sure Episode 6 is published (it should be)
2. Run workflow manually first
3. Check if it:
   - Reads RSS feed
   - Checks Airtable
   - Generates tweet
   - Posts to Twitter
   - Logs to Airtable

### Test Workflow 2 (Email)

1. Add a test email to "Email Subscribers" table in Airtable
2. Set Status = "Active"
3. Run workflow manually
4. Check if email was sent

### Test Workflow 3 (Thread)

1. Run workflow manually
2. Enter an episode URL when prompted
3. Check if thread was generated and posted

---

## TROUBLESHOOTING

### "Anthropic API error"
- Check your API key is correct
- Make sure you have credits/usage available
- Check the model name is correct (claude-sonnet-4-20250514)

### "Twitter error"
- Check OAuth credentials
- Make sure your Twitter app has write permissions
- Check rate limits

### "Airtable error"
- Verify Base ID is correct
- Check API key is valid
- Make sure table names match exactly (case-sensitive)
- Verify field names match

### "RSS Feed not updating"
- Check your site's RSS feed URL: `https://theaifornormalpeople.com/index.xml`
- Make sure new episodes are actually published (not draft)
- RSS feeds can take a few minutes to update after publishing

---

## WHAT HAPPENS NEXT

Once set up:

- **Workflow 1** checks your RSS feed every 4 hours
- When a new episode is published, it auto-tweets
- **Workflow 2** emails subscribers when new episodes publish
- **Workflow 3** you run manually when you want to create Twitter threads

All activity is logged to Airtable so you can track what's been posted.

---

## NEED HELP?

If something doesn't work:
1. Check n8n execution logs (click on a node to see errors)
2. Verify all credentials are set
3. Test each node individually
4. Check Airtable tables exist and have correct field names

The workflows are ready - you just need to connect your credentials!

