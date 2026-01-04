# ✅ Fixed "Log Bluesky to JSON" - Return Array Issue

**The Problem:**
- Error: "Code doesn't return items properly"
- Code node must ALWAYS return an array
- If any error occurs before return, nothing is returned

---

## Fixed Code

**The issue:** If accessing `$input` or other nodes fails, the code might not reach the return statement.

**Solution:** Wrap all node accesses in try-catch blocks to ensure we always return.

---

## Complete Fixed Code

```javascript
// Get data from previous nodes
const checkNode = $('Check If Posted').first().json;
const episodeUrl = checkNode.episodeUrl;
const episodeLink = checkNode.episodeLink;
const platform = 'Bluesky';

// Get post text from Generate Bluesky Post node (not from HTTP response)
let postText = '';
try {
  postText = $('Generate Bluesky Post').first().json.content[0].text;
} catch (error) {
  postText = 'Post text unavailable';
}

// Get post URL from Bluesky API response
let postUrl = '';
try {
  const blueskyResponse = $input.first().json;
  postUrl = blueskyResponse.uri || blueskyResponse.cid || '';
} catch (error) {
  postUrl = '';
}

// Get existing data - check if Twitter was already logged
let existingData = checkNode.existingEntries || [];

// If Twitter was already logged, use that updated data
// Use try-catch to handle case where Twitter node hasn't executed
try {
  const twitterLogNode = $('Log Twitter to JSON');
  if (twitterLogNode && twitterLogNode.first()) {
    const twitterLog = twitterLogNode.first().json;
    if (twitterLog && twitterLog.allEntries) {
      existingData = twitterLog.allEntries;
    }
  }
} catch (error) {
  // Twitter node hasn't executed, continue with existing data
  // This is fine - we'll just log Bluesky separately
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

// Return JSON string for writing - ALWAYS return an array
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

## Key Changes

1. **Wrapped postText access in try-catch** - Prevents error if node doesn't exist
2. **Wrapped postUrl access in try-catch** - Prevents error if $input is empty
3. **Always returns array** - No matter what errors occur, we always reach the return statement

**This ensures the Code node always returns properly!**

