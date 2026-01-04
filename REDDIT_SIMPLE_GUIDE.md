# 🔴 Reddit Simple Setup Guide

**Goal:** Get Reddit posting set up quickly  
**Time:** 30-60 minutes  
**Start Simple:** Just 1-2 subreddits first

---

## 🎯 Which Subreddits to Use (2025/2026)

**Start with just 1-2 of these:**

1. **r/artificial** ⭐ RECOMMENDED FIRST
   - General AI discussion
   - Friendly to educational content
   - Easy to post

2. **r/ChatGPT** ⭐ RECOMMENDED SECOND
   - ChatGPT-focused
   - Good for practical guides
   - Very active

3. **r/LocalLLaMA** 
   - Popular for AI tools
   - Good for practical content
   - Very active

**You don't need to "apply" - you just:**
1. Join the subreddit (click "Join")
2. Read the rules (check sidebar)
3. Post (follow the rules)

**Most subreddits just need you to:**
- Have an account (verified email helps)
- Follow the rules
- Not spam
- Engage with comments

---

## 🚀 Quick Setup (Simplified)

### Step 1: Create Reddit App (5 min)

1. Go to: https://www.reddit.com/prefs/apps
2. Click "create another app..."
3. Fill out:
   - **Name:** `AI for Normal People Blog`
   - **Type:** Select **"script"**
   - **Description:** `Automated posting`
   - **About URL:** `https://theaifornormalpeople.com`
   - **Redirect URI:** `http://localhost:5678/rest/oauth2-credential/callback`
4. **If asked about Devvit:** Click **"No"** or **Skip** - You don't need Devvit!
   - Devvit is for building interactive Reddit apps (games, bots, etc.)
   - You just need the regular Reddit API for posting
   - Regular API is what you need for n8n
5. Click "create app"
6. **Save:**
   - **Client ID** (under app name)
   - **Secret** (click "edit" to see)

### Step 2: Add to n8n (15 min)

1. Open n8n → Credentials → Add Credential
2. Search: "Reddit OAuth2 API"
3. Fill out:
   - **Name:** `Reddit Blog Posts`
   - **Client ID:** (paste from Step 1)
   - **Client Secret:** (paste from Step 1)
   - **Authorization URL:** `https://www.reddit.com/api/v1/authorize`
   - **Access Token URL:** `https://www.reddit.com/api/v1/access_token`
   - **Scope:** `submit`
   - **Authentication:** `Header`
4. Click "Connect my account"
5. Authorize on Reddit

### Step 3: Add Reddit Node to Workflow (10 min)

1. Open your workflow in n8n
2. Add "Reddit" node
3. Connect after "Select Character" node
4. Configure:
   - **Operation:** `Submit a Post`
   - **Subreddit:** `artificial` (just the name, no "r/")
   - **Title:** `={{$('Select Character').first().json.episodeTitle}}`
   - **Text:** `={{$('Generate Tweet via Claude').first().json.content[0].text + '\n\n' + $('Select Character').first().json.episodeLink}}`
   - **Credential:** Select your Reddit credential
5. Test it!

---

## ⚠️ Simple Rules to Follow

**DO:**
- ✅ Start with just 1 subreddit (r/artificial)
- ✅ Post 2-3x per week max
- ✅ Respond to comments
- ✅ Read subreddit rules first

**DON'T:**
- ❌ Post same thing to multiple subreddits at once
- ❌ Post daily
- ❌ Ignore comments
- ❌ Just drop links without context

---

## 🎯 Start Simple

**Just do this:**
1. Set up Reddit app (Step 1 above)
2. Add to n8n (Step 2 above)
3. Add node for ONE subreddit: `artificial` (Step 3 above)
4. Test it
5. **That's it!** You can add more subreddits later

**You don't need to:**
- Join multiple subreddits right away
- "Apply" for anything
- Post to 10 different subreddits
- Make it complicated

**Start with ONE subreddit. Get it working. Add more later.**

---

## 📝 Post Format

**Simple format (works for most subreddits):**

```
[Your character voice post from Claude]

[Episode link]

#AI #MachineLearning
```

**Better format (add a bit more context):**

```
[Character voice post]

Quick summary of what the episode covers...

[Episode link]
```

---

**Ready? Just follow Steps 1-3 above. Start with ONE subreddit. Keep it simple!**

