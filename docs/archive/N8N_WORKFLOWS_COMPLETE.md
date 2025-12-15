# Complete n8n Workflows for Auto-Promotion

## Workflow 1: Auto-Tweet New Episodes

### Trigger: RSS Feed Check
**Frequency:** Every 4 hours  
**Action:** Post to Twitter when new episode detected

### Nodes:

1. **RSS Feed Read**
   - URL: `https://theaifornormalpeople.com/index.xml`
   - Check every 4 hours
   - Get latest episode

2. **Check If Posted Already (Airtable)**
   - Table: "Posted Content"
   - Check if episode URL exists
   - If yes → Stop
   - If no → Continue

3. **Generate Tweet (HTTP Request - Claude API)**
   ```json
   {
     "model": "claude-sonnet-4-20250514",
     "max_tokens": 300,
     "messages": [{
       "role": "user",
       "content": "Write a tweet promoting this blog post. Use Vector's voice (enthusiastic, CAPS, exclamation marks). Include the main insight from the post. Max 250 characters. Post title: {{$json.title}} Post excerpt: {{$json.description}}"
     }]
   }
   ```

4. **Post to Twitter (Twitter node)**
   - Tweet text: `{{$json.content[0].text}}`
   - Add link: `{{$json.link}}`

5. **Log to Airtable**
   - Mark as posted
   - Save tweet text
   - Track engagement later

**Setup time:** 20 minutes

---

## Workflow 2: Email New Episodes to Subscribers

### Trigger: Same RSS check
**Action:** Email subscribers when new post

### Nodes:

1. **RSS Feed** (same as above)

2. **Check If Sent (Airtable)**
   - Table: "Email Log"
   - Check if episode URL already sent
   - If yes → Stop

3. **Get Subscribers (Airtable)**
   - Table: "Email List"
   - Get all active subscribers
   - Filter: Status = "Active"

4. **Generate Email (HTTP Request - Claude API)**
   ```json
   {
     "model": "claude-sonnet-4-20250514",
     "max_tokens": 500,
     "messages": [{
       "role": "user",
       "content": "Write a brief email from Vector introducing this new blog post. Keep Vector's enthusiastic voice. Include: - One sentence hook - What readers will learn - Link to read. Post title: {{$json.title}} Post excerpt: {{$json.description}}"
     }]
   }
   ```

5. **Send Email (Gmail or SendGrid node)**
   - To: Each subscriber (loop)
   - Subject: "New from Vector: {{$json.title}}"
   - Body: Generated email + link

6. **Log to Airtable**
   - Table: "Email Log"
   - Save: Episode URL, Sent date, Recipient count

**Setup time:** 30 minutes

---

## Workflow 3: Repurpose to Twitter Thread

### Trigger: Manual (run when you want)
**Action:** Split episode into 5-tweet thread

### Nodes:

1. **Manual Trigger**
   - Input: Episode URL

2. **Fetch Episode Content (HTTP Request)**
   - Get full blog post HTML
   - Parse content

3. **Generate Thread (HTTP Request - Claude API)**
   ```json
   {
     "model": "claude-sonnet-4-20250514",
     "max_tokens": 1000,
     "messages": [{
       "role": "user",
       "content": "Convert this blog post into a 5-tweet thread. Each tweet max 280 chars. First tweet is hook. Tweets 2-4 explain key points. Tweet 5 is CTA to read full post. Use Vector's voice. Content: {{$json.content}}"
     }]
   }
   ```

4. **Split Into Tweets (Code node)**
   ```javascript
   const thread = $json.content[0].text.split('\n\n');
   return thread.map((tweet, i) => ({
     json: { tweet, position: i+1 }
   }));
   ```

5. **Post Thread to Twitter (Twitter node)**
   - Loop through tweets
   - Reply to previous tweet
   - Creates threaded conversation

6. **Save to Airtable**
   - Table: "Twitter Threads"
   - Track performance

**Setup time:** 40 minutes

---

## Workflow 4: Reddit Auto-Post (Careful!)

### Trigger: Manual or Scheduled
**Action:** Post to relevant subreddits

### Nodes:

1. **Get Latest Episode (RSS)**

2. **Generate Reddit Post (Claude API)**
   ```json
   {
     "messages": [{
       "role": "user",
       "content": "Write a Reddit post for r/ChatGPT about this blog post. Be conversational, not promotional. Ask a question to start discussion. Mention ONE insight from the post. Don't sound like marketing. Title: {{$json.title}} Content: {{$json.description}}"
     }]
   }
   ```

3. **Post to Reddit (Reddit node)**
   - Subreddit: r/ChatGPT or r/artificial
   - Title: Generated title
   - URL: Blog post link
   - Flair: Discussion or Resource

4. **Wait 24 Hours (Delay node)**

5. **Check Engagement (Reddit API)**
   - Get upvotes/comments

6. **Log Results (Airtable)**

**Warning:** Reddit hates self-promotion. Use sparingly. Maybe once every 2 weeks max.

---

## Workflow 5: Daily Analytics Report

### Trigger: Daily schedule (9am)
**Action:** Send you daily traffic report

### Nodes:

1. **Schedule Trigger**
   - Every day at 9am

2. **Get Google Analytics Data (HTTP Request)**
   - Use Google Analytics API
   - Get yesterday's stats:
     - Pageviews
     - Top 3 posts
     - Traffic sources
     - Bounce rate

3. **Format Report (Code node)**
   ```javascript
   const report = {
     date: $json.date,
     pageviews: $json.pageviews,
     topPosts: $json.topPosts,
     trafficSources: $json.trafficSources
   };
   return { json: report };
   ```

4. **Send Email (Gmail node)**
   - To: Your email
   - Subject: "Daily Traffic Report - {{$json.date}}"
   - Body: Formatted report

**Setup time:** 30 minutes

---

## Workflow 6: Content Ideas Generator

### Trigger: Daily schedule (8am)
**Action:** Find what people are asking

### Nodes:

1. **Reddit Scraper (HTTP Request)**
   - Get top posts from r/ChatGPT, r/artificial
   - Filter: Posts with "?" that have high engagement

2. **Twitter Monitor (HTTP Request)**
   - Search for "how to use ChatGPT" or "AI tool recommendation"
   - Get trending topics

3. **Google Trends (HTTP Request)**
   - Check trending AI keywords

4. **Compile Report (Code node)**
   - Combine all sources
   - Rank by engagement/potential

5. **Send Email (Gmail node)**
   - Daily digest of content ideas

**Output:** Every morning, you get:
- 5 Reddit questions you could answer
- 3 trending Twitter topics
- Top 5 AI keywords people are searching

---

## API Credentials Needed

### Twitter/X
- **Where:** https://developer.twitter.com/
- **What:** API Key, API Secret, Access Token, Access Token Secret
- **Cost:** Free tier available (limited posts per day)

### Reddit
- **Where:** https://www.reddit.com/prefs/apps
- **What:** Client ID, Client Secret
- **Cost:** Free
- **Note:** Follow Reddit's API rules carefully

### Claude API (Anthropic)
- **Where:** https://console.anthropic.com/
- **What:** API Key
- **Cost:** Pay per use (very cheap for this use case)

### Google Analytics
- **Where:** Google Cloud Console → Create Service Account
- **What:** Service Account JSON file
- **Cost:** Free

### Airtable
- **Where:** https://airtable.com/api
- **What:** API Key, Base ID
- **Cost:** Free tier: 1000 records

---

## Airtable Base Structure

### Table 1: Content Pipeline
**Fields:**
- Title (Single line text)
- Topic (Single select: ChatGPT Basics, Prompts, Tools, etc.)
- Status (Single select: Idea, Drafted, Scheduled, Published)
- Publish Date (Date)
- URL (URL)
- Keywords (Long text)
- Performance (Number - pageviews)

### Table 2: Promotion Log
**Fields:**
- Episode (Link to Content Pipeline)
- Platform (Single select: Twitter, Reddit, Email)
- Posted Date (Date)
- Content (Long text - what was posted)
- Engagement (Number - likes/clicks)
- URL (URL to social post)

### Table 3: Email Subscribers
**Fields:**
- Email (Email)
- Name (Single line text)
- Subscribed Date (Date)
- Status (Single select: Active, Unsubscribed)
- Source (Single select: Website, Twitter, Reddit)

### Table 4: Twitter Threads
**Fields:**
- Episode (Link to Content Pipeline)
- Thread (Long text - all tweets)
- Posted Date (Date)
- Engagement (Number - total likes/retweets)
- URL (URL to first tweet)

### Table 5: Email Log
**Fields:**
- Episode (Link to Content Pipeline)
- Sent Date (Date)
- Recipient Count (Number)
- Open Rate (Number - if available)
- Click Rate (Number - if available)

---

## Setup Priority

### Week 1
1. ✅ Set up Airtable base (all 5 tables)
2. ✅ Get Twitter API credentials
3. ✅ Build Workflow 1 (Auto-tweet) - **START HERE**
4. ✅ Test with one episode

### Week 2
1. ✅ Get Claude API key
2. ✅ Build Workflow 2 (Email subscribers)
3. ✅ Set up email service (ConvertKit or Gmail)

### Week 3
1. ✅ Build Workflow 3 (Twitter threads)
2. ✅ Build Workflow 5 (Analytics report)
3. ✅ Test all workflows

### Week 4
1. ✅ Build Workflow 6 (Content ideas)
2. ✅ Fine-tune all workflows
3. ✅ Let them run automatically

---

## Pro Tips

1. **Start with Workflow 1** - Simplest, highest impact
2. **Test everything manually first** - Don't auto-post until you're sure
3. **Monitor for first week** - Check that tweets/emails look good
4. **Adjust prompts** - Tweak Claude API prompts based on output quality
5. **Respect rate limits** - Don't spam platforms
6. **Follow platform rules** - Reddit especially strict on self-promotion

---

**Remember: Automation saves time, but you still need to monitor. Set it up, test it, then let it run. Check in weekly to see what's working.**

