# Bluesky Clean Text Node - Fixed Code

## Overview

Apply the same text cleaning improvements to Bluesky that we did for Twitter. This creates a new "Clean Bluesky Text" node between "Generate Bluesky Post" and "Build Bluesky Body".

## The Fix

### Problem
Bluesky text cleaning wasn't as robust as Twitter - missing smart quote replacement, character cleaning, and better truncation logic.

### Solution
Create a "Clean Bluesky Text" Code node (similar to "Clean Twitter Text") with:
- Smart quote replacement
- Character cleaning (remove problematic Unicode)
- Better truncation (sentence boundary detection)
- Error handling for node references
- Proper URL handling

---

## New Node: "Clean Bluesky Text"

**Position:** Between "Generate Bluesky Post" and "Build Bluesky Body"

**Code:**

```javascript
// Get the Bluesky post text from Claude
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';

// Get episodeLink from Select Character node (with error handling)
let episodeLink = '';
try {
  episodeLink = $('Select Character').first().json.episodeLink || '';
} catch (error) {
  // If Select Character not accessible, try to get from Check If Posted
  try {
    episodeLink = $('Check If Posted').first().json.episodeLink || '';
  } catch (e) {
    episodeLink = '';
  }
}

// Clean the text (same improvements as Twitter)
// 1. Replace smart quotes with regular quotes
postText = postText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 2. Remove any problematic characters (keep printable ASCII + newlines)
postText = postText.replace(/[^\x20-\x7E\n\r]/g, '');

// 3. Replace \n with actual newlines (if needed)
postText = postText.replace(/\\n/g, '\n');

// 4. Trim whitespace
postText = postText.trim();

// 5. Calculate max length for Bluesky (300 characters total - URL - newlines)
// URL is typically ~23 chars, newlines are 2, safety buffer: 5
const urlLength = episodeLink ? episodeLink.length : 0;
const newlines = 2; // \n\n
const safetyBuffer = 5;
const maxPostLength = 300 - urlLength - newlines - safetyBuffer;

// Truncate if too long
if (postText.length > maxPostLength) {
  // Try to find last complete sentence
  const sentences = postText.substring(0, maxPostLength).match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length > 0) {
    postText = sentences.join('');
  } else {
    // Fall back to word boundary
    const truncated = postText.substring(0, maxPostLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    postText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }
}

return [{
  json: {
    cleaned_text: postText,
    original_text: claudeResponse.content[0].text,
    character_length: postText.length,
    episodeLink: episodeLink,  // CRITICAL: Pass through episodeLink
    // Build final post text with URL
    final_post: episodeLink ? `${postText}\n\n${episodeLink}` : postText
  }
}];
```

---

## Updated Workflow Structure

**Before:**
```
Generate Bluesky Post → Build Bluesky Body → Post to Bluesky
```

**After:**
```
Generate Bluesky Post → Clean Bluesky Text → Build Bluesky Body → Post to Bluesky
```

---

## Update "Build Bluesky Body" Node

**Change from:**
```javascript
const blueskyPost = $input.first().json;
let postText = blueskyPost.content[0].text || '';
```

**Change to:**
```javascript
// Get cleaned text from Clean Bluesky Text node
let postText = '';
let episodeLink = '';
try {
  const cleanNode = $('Clean Bluesky Text').first().json;
  postText = cleanNode.cleaned_text || '';
  episodeLink = cleanNode.episodeLink || '';
} catch (error) {
  // Fallback to direct Claude response if Clean node doesn't exist
  const blueskyPost = $input.first().json;
  postText = blueskyPost.content[0].text || '';
  episodeLink = $('Check If Posted').first().json.episodeLink || '';
}

// Use the cleaned postText (URL already included in final_post if needed)
// Or build it manually:
const checkNode = $('Check If Posted').first().json;
const url = episodeLink || checkNode.episodeLink || '';

// Build final post
let finalPost = postText;
if (url) {
  finalPost = `${postText}\n\n${url}`;
}
```

**OR** (simpler) - Use the `final_post` from Clean Bluesky Text:
```javascript
const cleanNode = $('Clean Bluesky Text').first().json;
const finalPost = cleanNode.final_post || cleanNode.cleaned_text || '';
const checkNode = $('Check If Posted').first().json;
```

---

## Benefits

✅ **Consistent cleaning** - Same quality improvements as Twitter  
✅ **Smart quote handling** - No more Unicode quote issues  
✅ **Better truncation** - Sentence boundary detection  
✅ **Error handling** - Graceful fallbacks if nodes aren't accessible  
✅ **Character length** - Proper calculation for Bluesky's 300 char limit  
✅ **URL handling** - Clean integration with episodeLink  

---

## Twitter Card Image Explanation

The "cool image" in Twitter cards comes from **Open Graph meta tags** already configured in your Hugo site:

**Location:** `aiforhumans/layouts/partials/head.html`

**Lines 25-45:** Open Graph and Twitter Card meta tags

```html
<!-- Open Graph / Facebook -->
<meta property="og:image" content="{{ .Params.image | absURL }}">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{{ .Params.image | absURL }}">
```

**How it works:**
1. If an episode has `image:` in frontmatter, it uses that
2. Otherwise, it uses `Site.Params.images[0]` (default site image)
3. Twitter/Bluesky scrape these meta tags when you post a URL
4. They automatically generate the rich preview card

**To set a default image for all episodes:**
Add to `hugo.toml`:
```toml
[params]
  images = ["/images/default-episode-card.png"]
```

**To set a per-episode image:**
Add to episode frontmatter:
```yaml
image: "/images/episode-29-card.png"
```

**Bluesky also uses Open Graph**, so it should automatically show the same card preview! If it doesn't, Bluesky might need some time to scrape/cache the meta tags, or you might need to verify the meta tags are correct.

---

## Implementation Steps

1. **Add "Clean Bluesky Text" Code node** between "Generate Bluesky Post" and "Build Bluesky Body"
2. **Paste the code** from above
3. **Update "Build Bluesky Body" node** to use cleaned text from "Clean Bluesky Text"
4. **Test the workflow** - should now have better text cleaning

---

## Files

- **Code saved to:** `aiforhumans/n8n/code/CLEAN_BLUESKY_TEXT_FIXED.js`
- **Documentation:** This file (`aiforhumans/n8n/docs/BLUESKY_CLEAN_TEXT_FIX.md`)
