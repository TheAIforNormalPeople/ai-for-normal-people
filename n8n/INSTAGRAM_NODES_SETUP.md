# 📸 Instagram n8n Nodes Setup

**Goal:** Add Instagram posting to n8n workflow, similar to Twitter structure  
**Stems from:** "Select Character" node (same as Twitter/Bluesky)

---

## 📋 Node Structure

The Instagram flow will mirror Twitter:
1. **Select Character** (already exists) → outputs characterPrompt, episodeTitle, episodeDescription, episodeLink
2. **Generate Instagram Post via Claude** → generates post text
3. **Clean Instagram Text** → cleans and formats for Instagram
4. **Post to Instagram** → posts to Instagram Graph API

---

## 🔧 Node Configurations

### Node 1: Generate Instagram Post via Claude

**Type:** HTTP Request  
**Position:** [1450, 600] (below Bluesky)  
**Similar to:** "Generate Tweet via Claude"

**Configuration:**
```json
{
  "parameters": {
    "authentication": "predefinedCredentialType",
    "nodeCredentialType": "anthropicApi",
    "url": "https://api.anthropic.com/v1/messages",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "anthropic-version",
          "value": "2023-06-01"
        }
      ]
    },
    "sendBody": true,
    "contentType": "json",
    "bodyParameters": {
      "parameters": [
        {
          "name": "model",
          "value": "claude-sonnet-4-20250514"
        },
        {
          "name": "max_tokens",
          "value": 500
        },
        {
          "name": "messages",
          "value": "=[{\"role\": \"user\", \"content\": $('Select Character').first().json.characterPrompt.replace(/tweet/g, 'Instagram post').replace(/240 characters/g, '2000 characters').replace(/Twitter/g, 'Instagram') + \" Episode title: \" + $('Select Character').first().json.episodeTitle + \" Episode description: \" + $('Select Character').first().json.episodeDescription}]"
        }
      ]
    },
    "options": {}
  },
  "name": "Generate Instagram Post via Claude",
  "type": "n8n-nodes-base.httpRequest",
  "typeVersion": 4.2,
  "position": [1450, 600]
}
```

**Key Differences from Twitter:**
- `max_tokens`: 500 (Instagram allows longer captions)
- Character prompt: Replace "tweet" with "Instagram post", "240 characters" with "2000 characters"

---

### Node 2: Clean Instagram Text

**Type:** Code  
**Position:** [1550, 600]  
**Similar to:** "Clean Twitter Text"

**JavaScript Code:**
```javascript
// Get the Instagram post text from Claude
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';

// Clean the text
// 1. Replace smart quotes with regular quotes
postText = postText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 2. Remove any problematic characters (keep printable ASCII + newlines)
postText = postText.replace(/[^\x20-\x7E\n\r]/g, '');

// 3. Replace \n with actual newlines (if needed)
postText = postText.replace(/\\n/g, '\n');

// 4. Trim whitespace
postText = postText.trim();

// 5. Instagram caption limit is 2200 characters (leave room for URL)
const maxTextLength = 2100; // Leave room for URL + newlines
if (postText.length > maxTextLength) {
  const truncated = postText.substring(0, maxTextLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  postText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

// 6. Get episode link
const episodeLink = $('Select Character').first().json.episodeLink || '';

// 7. Combine text and URL (Instagram allows links in captions)
const finalText = postText + '\n\n👉 Link in bio: ' + episodeLink;

return [{
  json: {
    cleaned_text: postText,
    final_caption: finalText,
    original_text: claudeResponse.content[0].text,
    length: finalText.length,
    episodeLink: episodeLink
  }
}];
```

**Key Differences from Twitter:**
- Longer character limit (2100 vs 220)
- Includes "Link in bio" text (Instagram doesn't allow clickable links in captions)

---

### Node 3: Post to Instagram

**Type:** HTTP Request  
**Position:** [1750, 600]  
**Similar to:** "Post to Twitter"

**Configuration:**
```json
{
  "parameters": {
    "method": "POST",
    "url": "=https://graph.facebook.com/v18.0/{{$('Select Character').first().json.instagramAccountId}}/media",
    "authentication": "none",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ]
    },
    "sendBody": true,
    "contentType": "json",
    "specifyBody": "json",
    "jsonBody": "={{ {\"caption\": $('Clean Instagram Text').first().json.final_caption, \"access_token\": \"YOUR_INSTAGRAM_ACCESS_TOKEN\"} }}",
    "options": {}
  },
  "name": "Post to Instagram",
  "type": "n8n-nodes-base.httpRequest",
  "typeVersion": 4.2,
  "position": [1750, 600]
}
```

**Note:** Instagram posting requires:
1. **Image first** - You need to upload an image first, then post the caption
2. **Two-step process:**
   - Step 1: Upload image → get `media_id`
   - Step 2: Post caption with `media_id`

**Full Instagram Post Flow:**
1. Upload image (if you have episode image)
2. Get media_id
3. Post caption with media_id

---

## 🔄 Alternative: Simplified Instagram Post (Caption Only)

If you don't have images yet, you can post text-only updates (Instagram allows this):

**Simplified Node:**
```json
{
  "parameters": {
    "method": "POST",
    "url": "=https://graph.facebook.com/v18.0/{{$('Select Character').first().json.instagramAccountId}}/media",
    "authentication": "none",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ]
    },
    "sendBody": true,
    "contentType": "json",
    "specifyBody": "json",
    "jsonBody": "={{ {\"caption\": $('Clean Instagram Text').first().json.final_caption, \"access_token\": \"YOUR_INSTAGRAM_ACCESS_TOKEN\"} }}",
    "options": {}
  },
  "name": "Post to Instagram",
  "type": "n8n-nodes-base.httpRequest",
  "typeVersion": 4.2,
  "position": [1750, 600]
}
```

---

## 📝 Instagram-Specific Considerations

### Character Limits
- **Caption:** 2,200 characters max
- **Hashtags:** Up to 30 hashtags
- **Link in bio:** Instagram doesn't allow clickable links in captions (except for verified accounts with 10k+ followers)

### Post Format
- **Caption:** Post text + "👉 Link in bio: [URL]"
- **Hashtags:** Can include in caption (5-10 recommended)
- **Image:** Required for most posts (can be episode artwork)

### Character Prompt for Instagram

Update "Select Character" node to include Instagram-specific prompt:

```javascript
// In Select Character node, add Instagram prompt variant:
characterPromptInstagram: characterPrompt.replace(/tweet/g, 'Instagram post')
  .replace(/240 characters/g, '2000 characters')
  .replace(/Twitter/g, 'Instagram')
  + " Include 5-10 relevant hashtags. Format: Post text, then hashtags, then 'Link in bio: [URL]'"
```

---

## 🔗 Connections

**From "Select Character" node:**
- Connect to "Generate Instagram Post via Claude"

**From "Generate Instagram Post via Claude":**
- Connect to "Clean Instagram Text"

**From "Clean Instagram Text":**
- Connect to "Post to Instagram"

**From "Post to Instagram":**
- Connect to "Log Instagram to JSON" (create similar to Twitter/Bluesky log nodes)

---

## 📊 Log Instagram Node

Create similar to "Log Twitter to JSON":

```javascript
// Get data from previous nodes
const checkNode = $('Check If Posted').first().json;
const episodeUrl = checkNode.episodeUrl;
const episodeLink = checkNode.episodeLink;
const platform = 'Instagram';
const postText = $('Clean Instagram Text').first().json.final_caption || $('Generate Instagram Post via Claude').first().json.content[0].text;

// Get post ID from Instagram API response
const instagramResponse = $input.first().json;
const postId = instagramResponse.id || '';

// Create new entry
const newEntry = {
  url: episodeUrl,
  platform: platform,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: postId ? `https://www.instagram.com/p/${postId}/` : '',
  status: 'posted'
};

// Pass existing data along for merging
const existingData = checkNode.existingEntries || [];

// Return entry with existing data
return [{
  json: {
    platform: platform,
    entry: newEntry,
    episodeUrl: episodeUrl,
    existingData: existingData
  }
}];
```

---

## ✅ Checklist

- [ ] Instagram Developer access approved
- [ ] Instagram Business Account set up
- [ ] Instagram App ID and Secret obtained
- [ ] Long-lived access token obtained
- [ ] Instagram Business Account ID obtained
- [ ] "Generate Instagram Post via Claude" node added
- [ ] "Clean Instagram Text" node added
- [ ] "Post to Instagram" node added
- [ ] "Log Instagram to JSON" node added
- [ ] Connected to "Select Character" node
- [ ] Connected to "Merge Logs" node
- [ ] Tested with one post

---

## 🚀 Next Steps

1. **Get Instagram API access** (follow `n8n/archive/setup-guides/INSTAGRAM_SETUP_STEPS.md`)
2. **Add nodes to workflow** (use configurations above)
3. **Test with one post**
4. **Add to merge logs** (connect to "Merge Logs" node)

---

**Ready to add Instagram to your workflow!**

