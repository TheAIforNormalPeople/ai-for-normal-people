# BUILD BLUESKY BODY - SAFE VERSION

**Current code is correct, but here's a safer version with error handling:**

---

## CURRENT CODE (Works Fine)

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text (Claude already generates the right length - 170 chars)
const postText = blueskyPost.content[0].text;

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

---

## SAFER VERSION (If You Get Errors)

If you ever get "Cannot read property '0' of undefined", use this:

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text (Claude already generates the right length - 170 chars)
// Add safety check in case content array is missing
const postText = blueskyPost?.content?.[0]?.text || blueskyPost?.content?.[0] || '';

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + checkNode.episodeLink,
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

**Current version:**
- Assumes `blueskyPost.content[0].text` exists
- Works fine if Claude response is correct

**Safer version:**
- Uses optional chaining (`?.`) to safely access nested properties
- Falls back to empty string if anything is missing
- Prevents "Cannot read property" errors

---

## WHEN TO USE SAFER VERSION

- If you get errors like "Cannot read property '0' of undefined"
- If Claude sometimes returns a different response format
- If you want extra safety

**Otherwise, the current code is fine!**

