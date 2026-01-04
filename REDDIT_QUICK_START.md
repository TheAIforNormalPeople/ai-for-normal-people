# 🚀 Reddit Quick Start Guide

**For:** People new to Reddit  
**Goal:** Get Reddit posting set up in n8n  
**Time:** 30-60 minutes

---

## 📚 What is Reddit? (Quick Overview)

**Reddit is like:** A massive collection of topic-specific discussion forums

**Key Concepts:**
- **Subreddits** = Communities (like `/r/artificial` for AI discussion)
- **Posts** = Topics/questions/content you share
- **Comments** = Responses to posts
- **Upvotes/Downvotes** = Quality control (good content rises to top)

**Why It's Good for Your Blog:**
- Large audience interested in AI/tech
- Good for educational content
- Can drive traffic to your site
- Engaged community

**Important Rules:**
1. ✅ **Read subreddit rules first** - Each community has different rules
2. ✅ **Don't spam** - Space out posts, don't post same thing everywhere
3. ✅ **Engage** - Respond to comments, participate in discussions
4. ✅ **Provide value** - Not just self-promotion, add context/insights

---

## 🎯 Recommended Subreddits for Your Blog (2025/2026)

**Start with these 2-3 (easiest to post to):**

1. **r/artificial** 
   - General AI discussion
   - Good for broad AI topics
   - Active community, friendly to educational content

2. **r/LocalLLaMA** (Local Large Language Models)
   - Popular for AI tool discussions
   - Good for practical AI content
   - Very active, welcomes educational posts

3. **r/ChatGPT**
   - ChatGPT-focused discussions
   - Good for practical guides and tips
   - Large, active community

**Good secondary options:**

4. **r/MachineLearning** 
   - More technical, but allows educational content
   - Check rules carefully (they're strict about self-promotion)
   - Very large community

5. **r/singularity**
   - AI/tech future discussions
   - Good for thought-provoking content
   - Active discussion community

6. **r/technology**
   - General tech discussion
   - Good for AI news/trends
   - Large, active community

**Skip for now (too strict or not good fit):**
- r/learnmachinelearning - Very strict rules, hard to post
- r/programming - Usually not friendly to blog posts
- r/explainlikeimfive - Requires very specific format

---

## ⚠️ Reddit Posting Best Practices

**DO:**
- ✅ Read subreddit rules before posting
- ✅ Add context/explanation with your link
- ✅ Respond to comments within 24 hours
- ✅ Post 2-3x per week max to same subreddit
- ✅ Space out posts (at least 1 hour apart)

**DON'T:**
- ❌ Post same content to multiple subreddits at once
- ❌ Just drop a link without context
- ❌ Post and disappear (no engagement)
- ❌ Post daily to same subreddit
- ❌ Ignore comments

---

## 🚀 Setup Steps (30-60 minutes)

### Step 1: Create Reddit Account (if needed)

1. Go to https://www.reddit.com
2. Click "Sign Up"
3. Choose username, password, email
4. Verify email
5. **Verify your email** (important - some subreddits require verified accounts)

### Step 2: Create Reddit App (5 minutes)

1. Go to https://www.reddit.com/prefs/apps
2. Scroll down to "Developed Applications" section
3. Click **"create another app..."** (bottom of the list)
4. Fill out:
   - **Name:** `AI for Normal People Blog`
   - **Type:** Select **"script"** (important!)
   - **Description:** `Automated posting for blog episodes`
   - **About URL:** `https://theaifornormalpeople.com`
   - **Redirect URI:** `http://localhost:5678/rest/oauth2-credential/callback`
   - (For n8n cloud, you'll need the n8n callback URL - check n8n docs)
5. Click **"create app"**
6. **Save these:**
   - **Client ID** (under app name, looks like: `abc123def456`)
   - **Secret** (click "edit" to reveal, looks like: `xyz789_secret`)

### Step 3: Add Reddit Credential to n8n (10 minutes)

1. Open n8n → **Credentials** (top menu)
2. Click **"Add Credential"**
3. Search for **"Reddit OAuth2 API"**
4. Fill out:
   - **Credential Name:** `Reddit Blog Posts`
   - **Client ID:** (paste from Step 2)
   - **Client Secret:** (paste from Step 2)
   - **Authorization URL:** `https://www.reddit.com/api/v1/authorize`
   - **Access Token URL:** `https://www.reddit.com/api/v1/access_token`
   - **Scope:** `submit` (for posting)
   - **Authentication:** `Header`
5. Click **"Connect my account"** or **"Save"**
6. You'll be redirected to Reddit - click **"Allow"**
7. You'll be redirected back to n8n

### Step 4: Add Reddit Node to Workflow (15 minutes)

1. Open your multi-platform social media workflow in n8n
2. Click **"+"** to add node
3. Search for **"Reddit"**
4. Select **"Reddit"** node
5. Connect it after your "Select Character" or "Generate Tweet via Claude" node
6. Configure:
   - **Operation:** `Submit a Post`
   - **Subreddit:** Start with `artificial` (just the name, no "r/")
   - **Title:** `={{$('Select Character').first().json.episodeTitle}}`
   - **Text:** `={{$('Generate Tweet via Claude').first().json.content[0].text + '\n\n' + $('Select Character').first().json.episodeLink}}`
   - **Credential:** Select your Reddit credential
7. Click **"Execute Node"** to test
8. Check Reddit (go to r/artificial) to see if post appears

### Step 5: Test and Verify (5 minutes)

1. **Manual Test:**
   - Execute workflow manually
   - Check if post appears on Reddit
   - Check if it follows subreddit rules

2. **Check Subreddit Rules:**
   - Go to r/artificial
   - Look for "Rules" or "About" section
   - Make sure your post format follows rules

3. **Monitor:**
   - Check for comments
   - Respond to comments (important!)
   - Adjust if needed

---

## 📝 Post Format Suggestions

**Good Format:**
```
[Character voice post from Claude]

[Episode Link]

#AI #MachineLearning
```

**Better Format (add context):**
```
[Character voice post]

Quick summary of what the episode covers...

[Episode Link]
```

---

## 🎯 Next Steps After Setup

1. **Start with 1-2 subreddits** (r/artificial, r/learnmachinelearning)
2. **Test with 2-3 episodes** before automating everything
3. **Monitor engagement** - Which subreddits work best?
4. **Add more subreddits** once you're comfortable
5. **Engage with comments** - Respond within 24 hours

---

## ⚠️ Important Notes

**Subreddit Rules to Check:**
- Some require minimum account age/karma
- Some don't allow self-promotion
- Some require specific post formats
- **Always read rules before posting!**

**Rate Limits:**
- Reddit has rate limits (how often you can post)
- Don't post too frequently
- Space out posts (at least 1 hour apart)

**Engagement is Key:**
- Respond to comments
- Participate in discussions
- Don't just drop links and leave

---

## 🆘 Troubleshooting

**Post not appearing?**
- Check subreddit rules (might need approval)
- Check if account is verified
- Check for error messages in n8n

**Getting downvoted?**
- Might be too promotional
- Add more context/value
- Check subreddit rules

**Comments/questions?**
- Respond within 24 hours
- Be helpful and engaging
- Don't ignore criticism

---

**Ready to start? Go to Step 1 and create your Reddit account!**

