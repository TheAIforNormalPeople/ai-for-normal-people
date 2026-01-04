# FIX POSTS CUTTING OFF
## Proper Truncation at Word Boundaries

**Problem:** Posts are getting cut off mid-sentence, mid-word.  
**Solution:** Better truncation logic + tell Claude to generate shorter posts.

---

## IMMEDIATE FIX: UPDATE "BUILD BLUESKY BODY" NODE

**Replace entire code with this (proper truncation):**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text
let postText = blueskyPost.content[0].text || '';

// Try to get hashtags from "Select Character" node (if it exists)
let hashtags = '';
try {
  const selectCharacterNode = $('Select Character');
  if (selectCharacterNode && selectCharacterNode.first()) {
    hashtags = selectCharacterNode.first().json.hashtags || '';
  }
} catch (error) {
  // "Select Character" node doesn't exist yet, use default hashtags
  hashtags = '#AIForNormalPeople';
}

// Calculate exact max length: 300 total - URL - newlines - hashtags - spaces
const url = checkNode.episodeLink;
const urlLength = url.length;
const newlines = 2; // \n\n
const hashtagsLength = hashtags ? hashtags.length + 1 : 0; // +1 for space before hashtags
const maxPostLength = 300 - urlLength - newlines - hashtagsLength;

// IMPORTANT: Truncate at word boundary, not mid-word
if (postText.length > maxPostLength) {
  // Truncate to max length
  let truncated = postText.substring(0, maxPostLength - 3);
  
  // Find last space (word boundary) in the last 30 characters
  const searchStart = Math.max(0, truncated.length - 30);
  const lastSpace = truncated.lastIndexOf(' ', truncated.length);
  
  // If we found a space near the end, use it
  if (lastSpace > searchStart && lastSpace > truncated.length - 30) {
    truncated = truncated.substring(0, lastSpace);
  }
  
  // Add ellipsis
  postText = truncated + '...';
}

// Build final post: text + hashtags (if any) + URL
let finalPost = postText;
if (hashtags) {
  finalPost = postText + ' ' + hashtags + '\n\n' + url;
} else {
  finalPost = postText + '\n\n' + url;
}

// Verify final length (should be under 300)
if (finalPost.length > 300) {
  // Emergency truncation - cut more aggressively
  const emergencyMax = 300 - urlLength - newlines - (hashtags ? hashtags.length + 1 : 0) - 10; // Extra buffer
  let emergencyTruncated = postText.substring(0, emergencyMax - 3);
  const lastSpace = emergencyTruncated.lastIndexOf(' ');
  if (lastSpace > emergencyMax - 30) {
    emergencyTruncated = emergencyTruncated.substring(0, lastSpace);
  }
  postText = emergencyTruncated + '...';
  
  // Rebuild
  if (hashtags) {
    finalPost = postText + ' ' + hashtags + '\n\n' + url;
  } else {
    finalPost = postText + '\n\n' + url;
  }
}

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: finalPost,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

---

## ALSO: TELL CLAUDE TO GENERATE SHORTER POSTS

### Update "Generate Bluesky Post" Claude Node:

**Find `messages` parameter, update to:**

```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nIMPORTANT: Write ONLY the post text. No quotes/markdown. Keep it SHORT - under 180 characters for text (URL + hashtags will be added, total must be under 300). Be concise. Just text."}]
```

**Key change:** "under 180 characters" instead of "under 230" - this leaves more room for URL + hashtags.

---

## IF "SELECT CHARACTER" DOESN'T EXIST YET

**Update "Generate Bluesky Post" to:**

```
=[{"role": "user", "content": "Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting. Sharp, intelligent, mean. Anti-establishment rants. Uses numbered lists. Zero corporate speak. Keep it SHORT - under 180 characters for text (URL + hashtags will be added, total must be under 300). Be concise. Make it FUNNY and engaging.\n\nTitle: {{$json.episodeTitle}}\nDesc: {{$json.episodeDescription}}\n\nWrite ONLY the post text. No quotes/markdown. Just text."}]
```

---

## THE MATH (Why 180)

**Bluesky:**
- Total limit: 300 graphemes
- URL: ~60-70 characters (full URL)
- Hashtags: ~40-50 characters (#FASCINATING #AITeaching #AIForNormalPeople)
- Newlines: 2 characters (\n\n)
- Spaces: 2 characters (before hashtags, before URL)
- **Available for text: ~180-190 characters**

**So we tell Claude "under 180" to be safe.**

---

## TEST IT

1. **Update "Build Bluesky Body"** with code above
2. **Update "Generate Bluesky Post"** prompt to say "under 180 characters"
3. **Test** - posts should not cut off mid-sentence
4. **Check** - final post should be under 300 characters total

---

**This ensures posts truncate at word boundaries and don't cut off mid-sentence!**

