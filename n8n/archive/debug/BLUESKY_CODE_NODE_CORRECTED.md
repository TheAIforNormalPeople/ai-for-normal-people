# ✅ Corrected Code Node - Truncate + Return Object

**Your current code returns `bodyString` (stringified). We need to:**
1. Truncate the post text to 280 characters
2. Return the body object directly (not stringified)

---

## Corrected Code

**Replace your Code node code with this:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text and truncate to 280 characters
let postText = blueskyPost.content[0].text;
const maxLength = 280;
if (postText.length > maxLength) {
  // Truncate and add ellipsis if needed
  postText = postText.substring(0, maxLength - 3) + "...";
}

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

// Return the body object directly (NOT stringified)
return [{
  json: body
}];
```

---

## Key Changes

1. **Added truncation:** `if (postText.length > maxLength)` truncates to 280 chars
2. **Return object:** `return [{ json: body }]` (NOT `bodyString: JSON.stringify(body)`)
3. **Removed stringify:** No `JSON.stringify()` - return object directly

---

## In "Post to Bluesky" Node

**Make sure:**
- **Body Content Type:** `JSON`
- **Specify Body:** `Using JSON`
- **JSON field:** `={{$json}}` (gets the object from Code node)

---

**This truncates the text AND returns the object correctly!**

