# 🔴 Reddit Setup Steps for n8n

**Goal:** Automate Reddit posting via n8n workflow  
**Time:** 30-60 minutes  
**Cost:** FREE  
**Difficulty:** Easy (built-in n8n node)

---

## 📋 Prerequisites

- Reddit account (create at https://www.reddit.com if needed)
- n8n instance running
- Access to n8n workflow editor

---

## 🚀 Step-by-Step Setup

### Step 1: Create Reddit App

1. **Go to Reddit App Preferences**
   - Visit: https://www.reddit.com/prefs/apps
   - Log in to your Reddit account

2. **Create New App**
   - Scroll down to "Developed Applications"
   - Click **"create another app..."** or **"create application"**

3. **Fill Out App Details**
   - **Name:** `AI for Normal People Blog` (or your site name)
   - **App type:** Select **"script"** (for automated posting)
   - **Description:** `Automated posting for blog episodes`
   - **About URL:** `https://theaifornormalpeople.com` (your site URL)
   - **Redirect URI:** `http://localhost:5678/rest/oauth2-credential/callback` (n8n callback)
   - Click **"create app"**

4. **Save Credentials**
   - You'll see:
     - **Client ID** (under the app name, looks like: `abc123def456`)
     - **Secret** (click "edit" to reveal, looks like: `xyz789_secret_key`)
   - **Save both** - you'll need them for n8n

---

### Step 2: Configure Reddit Credentials in n8n

1. **Open n8n**
   - Go to your n8n instance
   - Navigate to **Credentials** (top menu)

2. **Create New Credential**
   - Click **"Add Credential"**
   - Search for **"Reddit OAuth2 API"**
   - Select it

3. **Fill Out Credential Details**
   - **Credential Name:** `Reddit Blog Posts`
   - **Client ID:** Paste your Reddit Client ID
   - **Client Secret:** Paste your Reddit Secret
   - **Authorization URL:** `https://www.reddit.com/api/v1/authorize`
   - **Access Token URL:** `https://www.reddit.com/api/v1/access_token`
   - **Scope:** `submit` (for posting)
   - **Authentication:** `Header`
   - Click **"Connect my account"** or **"Save"**

4. **Authorize**
   - You'll be redirected to Reddit
   - Click **"Allow"** to authorize n8n
   - You'll be redirected back to n8n

---

### Step 3: Add Reddit Node to Workflow

1. **Open Your Workflow**
   - Go to your existing social media workflow
   - Or create a new workflow

2. **Add Reddit Node**
   - Click **"+"** to add node
   - Search for **"Reddit"**
   - Select **"Reddit"** node

3. **Configure Reddit Node**
   - **Operation:** `Submit a Post`
   - **Subreddit:** Enter subreddit name (e.g., `artificial`, `learnmachinelearning`)
   - **Title:** Use expression: `={{$('Select Character').first().json.episodeTitle}}`
   - **Text:** Use expression: `={{$('Generate Tweet via Claude').first().json.content[0].text + '\n\n' + $('Select Character').first().json.episodeLink}}`
   - **Credential:** Select your Reddit credential

4. **Test Node**
   - Click **"Execute Node"** to test
   - Check if post appears on Reddit

---

### Step 4: Add Multiple Subreddits (Optional)

**Option A: Multiple Nodes**
- Add separate Reddit node for each subreddit
- Connect to same workflow
- Each posts to different subreddit

**Option B: Loop Through Subreddits**
- Use Code node to loop through subreddit list
- Post to each subreddit

**Recommended Subreddits:**
- `r/artificial` - General AI discussion
- `r/learnmachinelearning` - Educational content
- `r/explainlikeimfive` - Simple explanations
- `r/technology` - Tech news/discussion
- `r/programming` - Developer-focused

---

## ⚠️ Reddit Posting Rules

### Important Guidelines

1. **Read Subreddit Rules First**
   - Each subreddit has different rules
   - Some don't allow self-promotion
   - Check rules before posting

2. **Don't Spam**
   - Don't post same content to multiple subreddits at once
   - Space out posts (at least 1 hour apart)
   - Don't post daily to same subreddit

3. **Engage, Don't Just Post**
   - Respond to comments
   - Participate in discussions
   - Provide value, not just links

4. **Follow Reddit Guidelines**
   - No vote manipulation
   - No spam
   - Be authentic
   - Follow Reddit's content policy

### Subreddit-Specific Rules

**r/artificial:**
- Allows educational content
- Prefers discussion, not just links
- Add context in post body

**r/learnmachinelearning:**
- Educational content welcome
- Include learning value
- Engage with community

**r/explainlikeimfive:**
- Must be simple explanation
- Post as question format
- Answer in comments

**r/technology:**
- News/discussion focused
- May have self-promotion restrictions
- Check rules first

---

## 🔧 Advanced Configuration

### Custom Post Format

**Create Code Node Before Reddit:**
```javascript
// Format post for Reddit
const episodeTitle = $('Select Character').first().json.episodeTitle;
const episodeLink = $('Select Character').first().json.episodeLink;
const postText = $('Generate Tweet via Claude').first().json.content[0].text;

// Reddit-friendly format
const redditPost = `${postText}\n\n---\n\nRead the full episode: ${episodeLink}`;

return [{
  json: {
    title: episodeTitle,
    text: redditPost,
    subreddit: 'artificial' // or get from config
  }
}];
```

### Post to Multiple Subreddits

**Use Loop Node:**
1. Create array of subreddits
2. Loop through each
3. Post to each with delay

---

## 📊 Testing

### Test Post

1. **Create Test Workflow**
   - Simple workflow with Reddit node
   - Test post to your own profile first
   - Or create test subreddit: `r/[yourusername]test`

2. **Verify Post**
   - Check Reddit to see if post appears
   - Verify formatting looks good
   - Check if link works

3. **Test Real Subreddit**
   - Post to one subreddit first
   - Monitor for comments/engagement
   - Adjust based on feedback

---

## 🐛 Troubleshooting

### "Invalid Credentials"
- Check Client ID and Secret are correct
- Re-authorize in n8n
- Verify redirect URI matches

### "Subreddit Not Found"
- Check subreddit name spelling
- Verify subreddit exists
- Check if you're banned from subreddit

### "Rate Limit"
- Reddit has rate limits
- Wait 10 minutes between posts
- Don't post too frequently

### "Post Removed"
- Check subreddit rules
- May need to engage more before posting
- Some subreddits require account age/karma

---

## ✅ Checklist

- [ ] Reddit account created
- [ ] Reddit app created (Client ID and Secret saved)
- [ ] Reddit credential added to n8n
- [ ] Reddit node added to workflow
- [ ] Test post successful
- [ ] Subreddit rules reviewed
- [ ] Posting schedule planned
- [ ] Engagement strategy planned

---

## 🚀 Next Steps (For Tonight)

1. **Set up Reddit app** (5 minutes)
   - Go to https://www.reddit.com/prefs/apps
   - Create app (type: "script")
   - Save Client ID and Secret

2. **Add Reddit credential to n8n** (10 minutes)
   - Open n8n → Credentials
   - Add "Reddit OAuth2 API"
   - Enter Client ID and Secret
   - Authorize

3. **Add Reddit node to workflow** (10 minutes)
   - Add Reddit node after "Select Character"
   - Configure: Operation = "Submit a Post"
   - Connect to workflow

4. **Test with one subreddit** (5 minutes)
   - Test post to your profile or test subreddit
   - Verify it works

5. **Add to merge logs** (5 minutes)
   - Create "Log Reddit to JSON" node (similar to Twitter/Bluesky)
   - Connect to "Merge Logs"

**Total Time:** ~30-45 minutes

---

## 📝 Quick Reference

**Reddit App Creation:** https://www.reddit.com/prefs/apps  
**n8n Reddit Node Docs:** https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.reddit/  
**Reddit API Docs:** https://www.reddit.com/dev/api/

---

**Ready to set up tonight? Start with Step 1!**

