# INSTAGRAM SETUP PLAN

**Goal:** Add Instagram posting to n8n workflow, branching from "Select Character"

---

## INSTAGRAM REQUIREMENTS

### API Requirements:
- **Facebook Business Account** (required)
- **Instagram Business Account** (linked to Facebook)
- **Facebook App** (in Meta Developer Portal)
- **Access Token** (long-lived, 60 days)
- **Graph API** endpoint: `https://graph.facebook.com/v18.0/{ig-user-id}/media`

### Post Limits:
- **Caption:** 2,200 characters
- **Image:** JPG or PNG, min 320x320px, max 1080x1080px (square) or 1080x1350px (portrait)
- **Video:** MP4, max 100MB, 3-60 seconds
- **Rate Limit:** 25 posts per day per account

---

## WORKFLOW STRUCTURE

```
Select Character
    ├─→ Generate Tweet via Claude → Post to Twitter
    ├─→ Generate Bluesky Post → Build Bluesky Body → Post to Bluesky
    └─→ Generate Instagram Post → Generate Image → Post to Instagram
```

---

## STEP 1: GENERATE INSTAGRAM POST (Claude)

**Node:** "Generate Instagram Post" (HTTP Request to Claude)

**Prompt Structure:**
- Use `{{$json.systemPrompt}}` from Select Character
- Generate caption (under 2,200 chars, but keep it shorter for engagement)
- Include episode title and description
- Add relevant hashtags (Instagram allows up to 30)

**Output:** Caption text + image prompt for DALL-E

---

## STEP 2: GENERATE IMAGE (DALL-E)

**Node:** "Generate Instagram Image" (HTTP Request to OpenAI DALL-E)

**Options:**
1. **DALL-E 3** (Recommended)
   - API: `https://api.openai.com/v1/images/generations`
   - Model: `dall-e-3`
   - Size: `1024x1024` (square, perfect for Instagram)
   - Quality: `standard` or `hd`
   - Cost: ~$0.04 per image

2. **Simple Text Overlay** (Cheaper alternative)
   - Use a template image
   - Add text overlay with episode title
   - No API needed, just image manipulation

3. **Video** (More complex)
   - Animated text over static background
   - Or simple slideshow
   - Requires video generation API or pre-made templates

**Recommendation:** Start with DALL-E 3 for quality, can optimize later

---

## STEP 3: POST TO INSTAGRAM

**Node:** "Post to Instagram" (HTTP Request to Graph API)

**Steps:**
1. **Create Media Container:**
   - POST to `https://graph.facebook.com/v18.0/{ig-user-id}/media`
   - Body: `image_url`, `caption`, `access_token`
   - Returns: `creation_id`

2. **Publish Media:**
   - POST to `https://graph.facebook.com/v18.0/{ig-user-id}/media_publish`
   - Body: `creation_id`, `access_token`

---

## IMAGE GENERATION OPTIONS

### Option A: DALL-E 3 (Best Quality)
**Pros:**
- High quality images
- Easy API integration
- Consistent results
- Good for episode-specific images

**Cons:**
- Costs ~$0.04 per image
- Requires OpenAI API key

**Implementation:**
- Generate prompt from episode title/description
- Call DALL-E API
- Get image URL
- Download image
- Upload to Instagram

---

### Option B: Simple Text Overlay (Cheapest)
**Pros:**
- Free (or very cheap)
- Fast generation
- Consistent branding
- No API costs

**Cons:**
- Less visually interesting
- Requires template images
- Less episode-specific

**Implementation:**
- Use template background image
- Add episode title as text overlay
- Use image manipulation (ImageMagick, Canvas API, or n8n image node)

---

### Option C: Video (Most Engaging)
**Pros:**
- Higher engagement on Instagram
- Stands out in feed
- Can be simple animated text

**Cons:**
- More complex
- Requires video generation
- Larger file sizes
- More processing time

**Implementation:**
- Generate short video (3-15 seconds)
- Animated text with episode title
- Background image or gradient
- Upload as video post

---

## RECOMMENDED APPROACH

**Start Simple:**
1. Use DALL-E 3 for images (good quality, easy setup)
2. Generate square images (1024x1024)
3. Create image prompt from episode title
4. Post with caption from Claude

**Optimize Later:**
- Switch to text overlay if costs are too high
- Add video generation if engagement is good
- A/B test different image styles

---

## WORKFLOW NODES NEEDED

1. **"Generate Instagram Post"** (HTTP Request - Claude)
   - Input: From "Select Character"
   - Output: Caption text + image prompt

2. **"Generate Instagram Image"** (HTTP Request - DALL-E)
   - Input: Image prompt from Claude
   - Output: Image URL

3. **"Download Image"** (HTTP Request or n8n node)
   - Input: Image URL from DALL-E
   - Output: Image binary data

4. **"Create Instagram Media"** (HTTP Request - Graph API)
   - Input: Image binary + caption
   - Output: Creation ID

5. **"Publish Instagram Post"** (HTTP Request - Graph API)
   - Input: Creation ID
   - Output: Post ID

6. **"Log Instagram to JSON"** (Code node)
   - Log post to tracking file

---

## SETUP REQUIREMENTS

**Before Starting:**
1. Facebook Business Account
2. Instagram Business Account (linked)
3. Meta Developer App
4. Instagram Graph API access
5. Long-lived access token
6. OpenAI API key (for DALL-E)

---

## COST ESTIMATE

**Per Post:**
- DALL-E image: ~$0.04
- Claude caption: ~$0.01
- **Total: ~$0.05 per Instagram post**

**Monthly (if posting weekly):**
- ~$0.20/month for images
- Very affordable!

---

**Want me to start building this? Which image option do you prefer?**


