# Airtable Setup - All Platforms (Clean Start)

## What This Does
This Airtable base tracks which blog posts have been automatically posted to social media platforms by the n8n workflow. The workflow checks this table to avoid posting the same episode twice. Currently set up for Twitter, but ready for Instagram, Bluesky, Reddit, and TikTok when you expand the workflows.

---

## Copy This Prompt to Airtable AI Builder:

```
CREATE AIRTABLE BASE FOR SOCIAL MEDIA AUTOMATION

I need an Airtable base to track automated social media posts from my n8n workflow. Currently posting to Twitter, but will expand to Instagram, Bluesky, Reddit, and TikTok later.

BASE NAME: "Automation Tracking"

TABLE NAME: "Posted Content"

Create a table with these EXACT field names (case-sensitive, no extra spaces):

1. URL (Field Type: URL)
   - Stores the blog post URL
   - Example: https://theaifornormalpeople.com/blog/episode-07-chatgpt-vs-claude-vs-gemini-comparison/
   - This is used to check if a post was already tweeted
   - Required field

2. Platform (Field Type: Single select)
   - Options: Twitter, Instagram, Bluesky, Reddit, TikTok
   - Default value: Twitter
   - This tracks which platform the content was posted to
   - Required field

3. Posted Date (Field Type: Date)
   - Include time: Yes
   - Records when the tweet was posted
   - Required field

4. Tweet Text (Field Type: Long text)
   - Stores the actual tweet text that was posted
   - Can be up to 280 characters
   - Optional field

5. Tweet URL (Field Type: URL)
   - Stores the URL of the posted tweet
   - Example: https://twitter.com/username/status/1234567890
   - Optional field

CRITICAL REQUIREMENTS:
- Field names must be EXACTLY: "URL", "Platform", "Posted Date", "Tweet Text", "Tweet URL"
- No "A " prefix, no extra spaces, exact capitalization
- Table name must be exactly "Posted Content" (with space)
- The n8n workflow uses these exact names in API calls

This tracks posts across multiple platforms: Twitter, Instagram, Bluesky, Reddit, TikTok. The workflow can be expanded later to post to all platforms, but for now it's set up for Twitter.
```

---

## After Airtable Creates It:

1. **Verify field names match exactly:**
   - URL (not "A URL" or "URL Field")
   - Platform (not "A Platform")
   - Posted Date (not "A Posted Date")
   - Tweet Text (not "A Tweet Text")
   - Tweet URL (not "A Tweet URL")

2. **Get your Base ID:**
   - Go to https://airtable.com/api
   - Select "Automation Tracking" base
   - Copy the Base ID (looks like `appXXXXXXXXXXXXXX`)

3. **Get your API key:**
   - Go to https://airtable.com/create/tokens
   - Create new token
   - Give it access to "Automation Tracking" base
   - Copy the token

4. **Save both for n8n setup!**

