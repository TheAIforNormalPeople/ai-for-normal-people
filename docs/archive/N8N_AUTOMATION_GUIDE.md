# n8n Automation Guide for AI for Normal People

## Why Automate?

**Time is your biggest constraint.** You can't manually:
- Post to 5 social platforms every time you publish
- Monitor Reddit for questions to answer
- Track SEO rankings daily
- Send emails to subscribers
- Research content ideas

**n8n automates the repetitive stuff so you can focus on writing.**

---

## Priority 1: Auto-Publish New Episodes

### Workflow: "New Episode → Social Media + Email"

**Trigger:** GitHub webhook (when you push new episode)

**Steps:**
1. **GitHub Webhook** → Listen for commits to `content/blog/episode-*.md`
2. **Extract Content** → Parse the markdown file, get title, description, image
3. **Format Messages** → Create Twitter/X post, Reddit post, email
4. **Post to Twitter** → Use Twitter API (or Buffer API)
5. **Post to Reddit** → Use Reddit API (carefully, follow rules)
6. **Send Email** → Use ConvertKit/Mailchimp API
7. **Log Success** → Save to Google Sheets or database

**Time Saved:** 30 minutes per episode

**Setup Time:** 2-3 hours (one time)

---

## Priority 2: Content Idea Generator

### Workflow: "Find What People Are Asking"

**Trigger:** Daily schedule (runs every morning)

**Steps:**
1. **Reddit Scraper** → Get top posts from r/ChatGPT, r/artificial, r/learnmachinelearning
2. **Extract Questions** → Find posts with "?" that have high engagement
3. **Twitter Monitor** → Search for "how to use ChatGPT" or "AI tool recommendation"
4. **Google Trends** → Check trending AI keywords
5. **Compile Report** → Combine all sources
6. **Send Email** → Daily digest of content ideas

**Output:** Every morning, you get:
- 5 Reddit questions you could answer
- 3 trending Twitter topics
- Top 5 AI keywords people are searching

**Time Saved:** 1 hour of research per day

---

## Priority 3: SEO Monitoring

### Workflow: "Track Your Rankings"

**Trigger:** Weekly schedule (every Monday)

**Steps:**
1. **Google Search Console API** → Get search queries, impressions, clicks
2. **Keyword Tracker** → Check rankings for target keywords
3. **Backlink Monitor** → Check for new backlinks (use Ahrefs API if you have it)
4. **Competitor Check** → Monitor competitor content (optional)
5. **Generate Report** → Create summary
6. **Send Email** → Weekly SEO report

**Output:** Every Monday, you know:
- Which keywords are ranking
- Which posts are getting traffic
- What's working, what's not

---

## Priority 4: Social Media Engagement

### Workflow: "Engage with Your Audience"

**Trigger:** Hourly schedule

**Steps:**
1. **Twitter Mentions** → Monitor mentions of your site/name
2. **Reddit Mentions** → Search for your site URL
3. **Comment Monitor** → Check for new comments (if you have a comment system)
4. **Thank Users** → Auto-reply to people who share your content (with moderation)
5. **Track Engagement** → Log to spreadsheet

**Output:** You never miss someone talking about your site

---

## Priority 5: Newsletter Automation

### Workflow: "Weekly Newsletter"

**Trigger:** Weekly schedule (every Friday)

**Steps:**
1. **Get Recent Posts** → Pull last week's published posts
2. **Format Newsletter** → Create HTML email with:
   - Featured episode
   - Top 3 posts
   - Character moment
   - Quick tip
3. **Send via Email Service** → ConvertKit/Mailchimp API
4. **Track Opens** → Log to analytics

**Time Saved:** 2 hours per week

---

## Priority 6: Reddit Engagement (Advanced)

### Workflow: "Helpful Reddit Comments"

**Trigger:** Real-time monitoring (every 15 minutes)

**Steps:**
1. **Monitor Subreddits** → r/ChatGPT, r/artificial, etc.
2. **Filter Questions** → Find questions you can answer
3. **Generate Response** → Use AI to draft helpful comment (you review before posting)
4. **Queue for Review** → Send to you for approval
5. **Post if Approved** → Post comment with link to relevant post (if appropriate)

**Important:** Always add value. Don't just drop links.

---

## Priority 7: Analytics Dashboard

### Workflow: "Daily Traffic Report"

**Trigger:** Daily schedule (every morning)

**Steps:**
1. **Google Analytics API** → Get yesterday's stats
2. **Top Posts** → Which posts got most traffic
3. **Traffic Sources** → Where did traffic come from
4. **Engagement** → Time on site, bounce rate
5. **Format Report** → Create summary
6. **Send Email** → Daily digest

**Output:** Every morning, you know:
- How many visitors yesterday
- Top 3 posts
- Top traffic source
- What's working

---

## Priority 8: Content Calendar Automation

### Workflow: "Plan Next Week's Content"

**Trigger:** Weekly schedule (every Sunday)

**Steps:**
1. **Get Content Ideas** → From Priority 2 workflow
2. **Check Calendar** → What's scheduled
3. **Suggest Topics** → Based on:
   - What's trending
   - What you haven't covered
   - What your audience wants
4. **Create Draft Posts** → Generate markdown files with front matter
5. **Send to You** → Review and approve

---

## Quick Start: Your First n8n Workflow

### Start with This: "New Episode → Twitter"

**Why:** Simplest, highest impact

**Steps:**
1. **Create new workflow in n8n**
2. **Add "Schedule Trigger"** → Set to "Manual" for testing
3. **Add "HTTP Request"** → Get your latest episode from GitHub API
4. **Add "Code" node** → Extract title, description, URL from markdown
5. **Add "Twitter" node** → Post formatted message
6. **Test** → Run manually, check Twitter

**Time:** 30 minutes to set up

**Result:** Every new episode auto-tweets

---

## n8n Setup Checklist

### Prerequisites
- [ ] n8n installed (self-hosted or cloud)
- [ ] Twitter API credentials
- [ ] Reddit API credentials (optional)
- [ ] Email service API (ConvertKit/Mailchimp)
- [ ] Google Analytics API access
- [ ] Google Search Console API access

### First Week
- [ ] Set up "New Episode → Twitter" workflow
- [ ] Set up "Content Ideas" daily email
- [ ] Set up "Daily Analytics" email

### Second Week
- [ ] Add Reddit posting to episode workflow
- [ ] Add email newsletter to episode workflow
- [ ] Set up weekly SEO report

### Third Week
- [ ] Add social media engagement monitoring
- [ ] Set up weekly newsletter automation
- [ ] Fine-tune all workflows

---

## API Credentials You'll Need

### Twitter/X
- **Where:** https://developer.twitter.com/
- **What:** API Key, API Secret, Access Token, Access Token Secret
- **Cost:** Free tier available (limited posts per day)

### Reddit
- **Where:** https://www.reddit.com/prefs/apps
- **What:** Client ID, Client Secret
- **Cost:** Free
- **Note:** Follow Reddit's API rules carefully

### ConvertKit
- **Where:** https://convertkit.com/ → Settings → Advanced → API
- **What:** API Key, API Secret
- **Cost:** Free up to 1,000 subscribers

### Google Analytics
- **Where:** Google Cloud Console → Create Service Account
- **What:** Service Account JSON file
- **Cost:** Free

### Google Search Console
- **Where:** Google Cloud Console → Same as Analytics
- **What:** Service Account JSON file
- **Cost:** Free

---

## Common n8n Nodes You'll Use

1. **Schedule Trigger** → Run workflows on a schedule
2. **Webhook** → Trigger from external events (GitHub, etc.)
3. **HTTP Request** → Get data from APIs
4. **Code** → Process/transform data
5. **IF** → Conditional logic
6. **Set** → Set variables
7. **Twitter** → Post to Twitter
8. **Gmail** → Send emails
9. **Google Sheets** → Store data
10. **Slack** → Send notifications

---

## Pro Tips

1. **Start Small** → Don't try to automate everything at once
2. **Test Everything** → Always test workflows before enabling
3. **Monitor First Week** → Watch for errors, adjust as needed
4. **Document Your Workflows** → Name them clearly, add notes
5. **Backup Your Workflows** → Export JSON files regularly
6. **Use Error Handling** → Add error nodes to catch failures
7. **Rate Limits** → Be aware of API rate limits
8. **Compliance** → Follow platform rules (Reddit, Twitter, etc.)

---

## Troubleshooting

### Workflow Not Running?
- Check schedule/timezone
- Verify credentials are valid
- Check n8n logs for errors

### API Errors?
- Verify API keys are correct
- Check rate limits
- Review API documentation

### Not Getting Expected Results?
- Add "Debug" nodes to see data flow
- Test each node individually
- Check data format (JSON, etc.)

---

## Next Steps

1. **Install n8n** (if not already done)
2. **Set up Twitter API** (takes 10 minutes)
3. **Create "New Episode → Twitter" workflow** (30 minutes)
4. **Test it** (5 minutes)
5. **Enable it** (1 minute)

**Total time:** ~1 hour to get your first automation running

---

## Resources

- **n8n Docs:** https://docs.n8n.io/
- **n8n Community:** https://community.n8n.io/
- **n8n Workflow Templates:** https://n8n.io/workflows/
- **Twitter API Docs:** https://developer.twitter.com/en/docs
- **Reddit API Docs:** https://www.reddit.com/dev/api/

---

**Remember: Automation is a tool, not a replacement. You still need to write great content. Automation just helps you get it in front of people.**

