# ✅ Corrected "Log Bluesky to JSON" Code

**The Problem:**
- Line 5: `$input.first().json.content[0].text` - `$input` is Bluesky API response, doesn't have `content[0]`
- Need to get post text from "Generate Bluesky Post" node instead

---

## Corrected Code

**Replace the entire code with this:**

```javascript
// Get data from previous nodes
const checkNode = $('Check If Posted').first().json;
const episodeUrl = checkNode.episodeUrl;
const episodeLink = checkNode.episodeLink;
const platform = 'Bluesky';

// Get post text from Generate Bluesky Post node (not from HTTP response)
const postText = $('Generate Bluesky Post').first().json.content[0].text;

// Get post URL from Bluesky API response
const blueskyResponse = $input.first().json;
const postUrl = blueskyResponse.uri || blueskyResponse.cid || '';

// Get existing data - check if Twitter was already logged
let existingData = checkNode.existingEntries || [];

// If Twitter was already logged, use that updated data
if ($('Log Twitter to JSON').first()) {
  const twitterLog = $('Log Twitter to JSON').first().json;
  if (twitterLog.allEntries) {
    existingData = twitterLog.allEntries;
  }
}

// Create new entry
const newEntry = {
  url: episodeUrl,
  platform: platform,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: postUrl ? `https://bsky.app/profile/thenormalpeople.bsky.social/post/${postUrl.split('/').pop()}` : '',
  status: 'posted'
};

// Add to existing data
const updatedData = [...existingData, newEntry];

// Return JSON string for writing
return [{
  json: {
    data: JSON.stringify(updatedData, null, 2),
    platform: platform,
    entry: newEntry,
    allEntries: updatedData
  }
}];
```

---

## Key Change

**Line 5 - Changed from:**
```javascript
const postText = $input.first().json.content[0].text;
```

**To:**
```javascript
// Get post text from Generate Bluesky Post node (not from HTTP response)
const postText = $('Generate Bluesky Post').first().json.content[0].text;
```

---

**This gets the post text from the right place!**

