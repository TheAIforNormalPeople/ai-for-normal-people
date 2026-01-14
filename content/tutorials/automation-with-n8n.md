---
title: "How We Automated Our Social Media (And You Can Too)"
date: 2026-01-17
draft: false
description: "Vector, Kai, Recurse, and the team explain how they built automation to post new episodes to Twitter, Bluesky, and TikTok using n8n. Step-by-step guide with character perspective."
slug: "automation-with-n8n"
tags: ["automation", "n8n", "tutorial", "social-media"]
---

{{< dialogue char="Vector" >}}

FASCINATING! You want to automate your social media? EXCELLENT! We built a system that automatically posts our episodes to Twitter, Bluesky, and TikTok! And we're going to show you EXACTLY how we did it!

{{< /dialogue >}}

{{< dialogue char="Kai" >}}

BEEP! Monitoring automation system. All nodes operational. Risk assessment: Low. Efficiency: High.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}

Question: Why automate? Answer: Because manually posting to three platforms every time we publish an episode is inefficient. But let's verify the logic first.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}

*excited*

and i made it look pretty! added colors! and flow! doesn't it feel better when things just... work?

{{< /dialogue >}}

---

## What We Built

We created an automation system that:

1. **Monitors our RSS feed** for new episodes
2. **Checks if we've already posted** (so we don't spam)
3. **Selects a character** to post (rotates between Vector, Kai, and Recurse)
4. **Generates posts** in that character's voice using Claude
5. **Posts automatically** to Twitter, Bluesky, and TikTok
6. **Tracks everything** so we know what's been posted

{{< dialogue char="Vector" >}}

The pattern is: RSS → Check → Select → Generate → Post → Track! It's a PERFECT workflow!

{{< /dialogue >}}

---

## What You'll Need

- **n8n account** (free tier works fine)
- **Twitter API access** (free developer account)
- **Bluesky account** (free)
- **TikTok account** (free, but needs API access for automation)
- **Claude API key** (for generating character-voiced posts)
- **Basic understanding** of how APIs work (we'll explain!)

{{< dialogue char="Kai" >}}

BEEP! Security note: All API keys must be stored securely in n8n credentials. Never expose them in code or public repositories.

{{< /dialogue >}}

---

## Step 1: Setting Up n8n

n8n is a workflow automation tool. Think of it like IFTTT, but more powerful and you host it yourself (or use their cloud).

### Option A: n8n Cloud (Easiest)

1. Go to [n8n.io](https://n8n.io)
2. Sign up for a free account
3. You get 250 workflow executions per month (plenty to start!)

### Option B: Self-Hosted (More Control)

If you want to run it yourself:

```bash
# Using Docker (recommended)
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Then visit `http://localhost:5678`

{{< dialogue char="Vector" >}}

We use n8n cloud because it's simpler! But if you want full control, self-hosting works too!

{{< /dialogue >}}

---

## Step 2: Setting Up Twitter API

Twitter's API lets you post programmatically. Here's how:

1. **Apply for Twitter Developer Account**
   - Go to [developer.twitter.com](https://developer.twitter.com)
   - Apply for a developer account (free)
   - Create a new app

2. **Get Your Credentials**
   - API Key
   - API Secret
   - Access Token
   - Access Token Secret

3. **Add to n8n**
   - In n8n, go to Credentials
   - Add "Twitter OAuth API"
   - Enter your credentials

{{< dialogue char="Kai" >}}

BEEP! Important: Twitter API v2 requires OAuth 2.0. Make sure you're using the correct authentication method.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}

Question: Why OAuth 2.0? Answer: Security. It's more secure than API keys alone. Twitter requires it for posting.

{{< /dialogue >}}

---

## Step 3: Setting Up Bluesky

Bluesky uses ATProto (Authenticated Transfer Protocol). It's different from Twitter!

1. **Get Your Bluesky Credentials**
   - You need your handle (e.g., `@yourname.bsky.social`)
   - Generate an app password (not your regular password!)

2. **Add to n8n**
   - Use the "Bluesky" node
   - Enter your handle and app password

{{< dialogue char="Vector" >}}

Bluesky is INTERESTING! It uses ATProto which is a decentralized protocol! The authentication is different but once you set it up, it works perfectly!

{{< /dialogue >}}

---

## Step 4: Setting Up TikTok API (Optional)

TikTok automation is more complex. You need:

1. **TikTok Developer Account**
   - Apply at [developers.tiktok.com](https://developers.tiktok.com)
   - Create an app
   - Get API credentials

2. **Domain Verification**
   - TikTok requires domain verification
   - Upload a verification file to your site

3. **API Scopes**
   - Request `video.list` and `video.upload` scopes

{{< dialogue char="Kai" >}}

BEEP! Warning: TikTok API approval can take time. Start with Twitter and Bluesky first, then add TikTok later.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}

*excited*

but when you get tiktok working, it's so cool! we can make videos! with sora 2! talking tvs! it's amazing!

{{< /dialogue >}}

---

## Step 5: Building the Workflow

Here's our workflow structure:

### 1. RSS Feed Reader

**Node:** RSS Feed Read  
**Purpose:** Check for new episodes

- **URL:** Your blog's RSS feed (usually `/index.xml` or `/feed.xml`)
- **Trigger:** Schedule (we check every hour)

{{< dialogue char="Vector" >}}

The RSS feed contains ALL our episodes! We read it, check the latest one, and see if we've posted it yet!

{{< /dialogue >}}

### 2. Check If Posted

**Node:** Code  
**Purpose:** Check if episode was already posted

```javascript
// Read tracking JSON file
const trackingData = JSON.parse($input.first().json.data || '[]');

// Get episode URL from RSS feed
const episodeUrl = $('RSS Feed Reader').first().json.link;

// Check if already posted
const alreadyPosted = trackingData.some(entry => 
  entry.url === episodeUrl && entry.status === 'posted'
);

// Return result
return [{
  json: {
    episodeUrl: episodeUrl,
    episodeTitle: $('RSS Feed Reader').first().json.title,
    alreadyPosted: alreadyPosted
  }
}];
```

{{< dialogue char="Recurse" >}}

Question: Why check if posted? Answer: To avoid duplicate posts. We track everything in a JSON file.

{{< /dialogue >}}

### 3. Select Character

**Node:** Code  
**Purpose:** Rotate between characters

```javascript
// Extract episode number from URL or title
const episodeUrl = $input.first().json.episodeUrl;
const episodeNumber = parseInt(episodeUrl.match(/episode-([0-9]+)/i)?.[1] || '0', 10);

// Rotate characters: Vector (0), Kai (1), Recurse (2)
const characters = ['Vector', 'Kai', 'Recurse'];
const character = characters[episodeNumber % 3];

return [{
  json: {
    character: character,
    episodeNumber: episodeNumber,
    episodeUrl: episodeUrl
  }
}];
```

{{< dialogue char="Vector" >}}

We rotate! Episode 18 = Vector, Episode 19 = Kai, Episode 20 = Recurse, and it repeats! It's a PERFECT pattern!

{{< /dialogue >}}

### 4. Generate Posts (Claude)

**Node:** Claude AI  
**Purpose:** Generate posts in character voice

**Prompt Template:**
```
You are {{character}} from "AI for Normal People" blog.

Episode: {{episodeTitle}}
Description: {{episodeDescription}}
Link: {{episodeLink}}

Create a {{platform}} post in {{character}}'s voice:
- Use their speech patterns and personality
- Keep it under {{characterLimit}} characters
- Include the episode link
- Make it engaging and educational
```

{{< dialogue char="Vector" >}}

Claude generates posts in OUR voices! It's like we're actually posting! But automated!

{{< /dialogue >}}

### 5. Post to Platforms

**Nodes:** Twitter, Bluesky, TikTok  
**Purpose:** Actually post the content

- Connect each platform node
- Use the generated text from Claude
- Post automatically!

{{< dialogue char="Kai" >}}

BEEP! Monitoring: All posts logged. Status: Success. No errors detected.

{{< /dialogue >}}

### 6. Track Posts

**Node:** Write Binary File  
**Purpose:** Log all posts to JSON

We write to a tracking file so we know what's been posted:

```json
[
  {
    "url": "https://...",
    "title": "Episode 30: ...",
    "character": "Vector",
    "platforms": ["twitter", "bluesky"],
    "status": "posted",
    "timestamp": "2026-01-17T10:00:00Z"
  }
]
```

{{< dialogue char="Recurse" >}}

Question: Why track? Answer: So we can check if something was already posted. Prevents duplicates.

{{< /dialogue >}}

---

## Step 6: Adding TikTok Video Generation (Advanced)

For TikTok, we also generate video scripts using Sora 2:

### Generate TikTok Content

**Node:** Code  
**Purpose:** Create video script prompt

```javascript
// Generate script prompt for Sora 2
const scriptPrompt = `Create a 12-second TikTok video script.

Character: ${characterName}
Episode: ${episodeTitle}

Visual: Classic cartoon-style talking TV
- TV moves and talks like ${characterName}
- Character's personality through TV movements
- Background: Simple, clean
- Style: Cartoon/animated

Video Description: [Describe TV's movements and reactions]`;
```

{{< dialogue char="Bounce" >}}

*excited*

and then we use sora 2 to make the video! a talking tv! that moves like the character! it's so cool!

{{< /dialogue >}}

---

## Best Practices

### 1. Error Handling

Always add error handling nodes:

- **If Error:** Send notification
- **Retry Logic:** For API failures
- **Fallback:** Manual posting option

{{< dialogue char="Kai" >}}

BEEP! Error handling is critical. Always monitor for failures and have backup plans.

{{< /dialogue >}}

### 2. Rate Limiting

Respect API rate limits:

- **Twitter:** 300 posts per 3 hours
- **Bluesky:** 300 posts per hour
- **TikTok:** Varies by account type

{{< dialogue char="Vector" >}}

We check rate limits! Don't spam! Respect the APIs!

{{< /dialogue >}}

### 3. Content Quality

- **Character Voice:** Make sure Claude generates authentic character voice
- **Engagement:** Include calls-to-action
- **Links:** Always include episode links
- **Hashtags:** Use relevant hashtags

{{< dialogue char="Recurse" >}}

Question: Why focus on quality? Answer: Because automated doesn't mean low-quality. Our posts should still be good.

{{< /dialogue >}}

---

## Common Issues

### Twitter 403 Errors

**Problem:** Twitter rejects posts  
**Solution:** Check text length, remove special characters, verify OAuth credentials

### Bluesky Token Expired

**Problem:** Bluesky authentication fails  
**Solution:** Regenerate app password, update credentials in n8n

### RSS Feed Not Updating

**Problem:** Workflow doesn't detect new episodes  
**Solution:** Check RSS feed URL, verify feed is updating, check schedule trigger

{{< dialogue char="Kai" >}}

BEEP! Troubleshooting checklist: Check credentials, verify API status, review error logs, test manually.

{{< /dialogue >}}

---

## Our Workflow Files

We've shared our workflow files in the repository:

- **Main Workflow:** `n8n/workflows/multi-platform-social-json-tracking-FIXED.json`
- **Code Snippets:** `n8n/code/` directory
- **Documentation:** `n8n/docs/` directory

You can import our workflow into n8n and customize it!

{{< dialogue char="Vector" >}}

FASCINATING! You can use our workflow as a starting point! Just import it into n8n and modify it for your needs!

{{< /dialogue >}}

---

## Next Steps

1. **Set up n8n** (cloud or self-hosted)
2. **Get API credentials** (Twitter, Bluesky, TikTok)
3. **Import our workflow** or build your own
4. **Test with a draft post**
5. **Monitor and iterate**

{{< dialogue char="Recurse" >}}

Question: What if something breaks? Answer: Test thoroughly first. Start with manual triggers. Then automate.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}

*excited*

and once it's working, it's so smooth! everything just flows! colors! automation! it's beautiful!

{{< /dialogue >}}

---

## Resources

- **n8n Documentation:** [docs.n8n.io](https://docs.n8n.io)
- **Twitter API Docs:** [developer.twitter.com/docs](https://developer.twitter.com/docs)
- **Bluesky ATProto:** [atproto.com](https://atproto.com)
- **TikTok API Docs:** [developers.tiktok.com/doc](https://developers.tiktok.com/doc)

{{< dialogue char="Vector" >}}

FASCINATING! Automation is POWERFUL! Once you set it up, it just works! And you can focus on creating content instead of posting manually!

{{< /dialogue >}}

{{< dialogue char="Kai" >}}

BEEP! System status: Operational. Efficiency: 95% improvement over manual posting. Recommendation: Implement automation.

{{< /dialogue >}}

---

*Want to see our workflow in action? Check out our [GitHub repository](https://github.com/yourusername/yourrepo) for the full n8n workflow files and code snippets!*
