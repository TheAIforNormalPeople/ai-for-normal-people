# FIX "BUILD BLUESKY BODY" NODE
## Handle Missing "Select Character" Node Gracefully

**Error:** "Referenced node doesn't exist" when accessing `$('Select Character')`

**Solution:** Use try-catch to handle case where node doesn't exist yet, or use fallback.

---

## UPDATED CODE FOR "BUILD BLUESKY BODY" NODE

**Replace the entire code with this (handles missing "Select Character" node):**

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
const newlines = 2;
const hashtagsLength = hashtags ? hashtags.length + 1 : 0; // +1 for space before hashtags
const maxPostLength = 300 - urlLength - newlines - hashtagsLength;

// Truncate post text if needed (at word boundary)
if (postText.length > maxPostLength) {
  let truncated = postText.substring(0, maxPostLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxPostLength - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + '...';
}

// Build final post: text + hashtags (if any) + URL
let finalPost = postText;
if (hashtags) {
  finalPost = postText + ' ' + hashtags + '\n\n' + url;
} else {
  finalPost = postText + '\n\n' + url;
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

## WHAT THIS DOES

1. **Gets post text** from Claude response
2. **Tries to get hashtags** from "Select Character" node (if it exists)
3. **Falls back** to default hashtag if node doesn't exist
4. **Calculates exact space** accounting for URL + hashtags
5. **Truncates at word boundary** if needed
6. **Builds final post** with hashtags (if available) + URL

---

## WORKFLOW

**If "Select Character" node exists:**
- Uses character-specific hashtags
- Works with character rotation

**If "Select Character" node doesn't exist yet:**
- Uses default hashtag (#AIForNormalPeople)
- Still works, just no character rotation yet

---

## STEP-BY-STEP

1. **Open "Build Bluesky Body" Code node**
2. **Replace entire code** with the code above
3. **Save**
4. **Test** - should work even without "Select Character" node

**Then later, when you add "Select Character" node:**
- This code will automatically use character-specific hashtags
- No need to change this node again

---

**This fixes the error and works with or without "Select Character" node!**

