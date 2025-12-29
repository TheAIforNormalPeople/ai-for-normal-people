# ✅ Code Node - Truncate Accounting for URL

**The total text needs to be under 300, including:**
- Post text
- "\n\n" (2 characters)
- URL (~60-70 characters)

**So post text should be ~230 characters max to be safe.**

---

## Corrected Code (Accounts for URL)

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text
let postText = blueskyPost.content[0].text;

// Calculate max length: 300 total - URL length - newlines
const url = checkNode.episodeLink;
const newlines = "\n\n";
const urlAndNewlinesLength = url.length + newlines.length;
const maxPostLength = 300 - urlAndNewlinesLength;

// Truncate post text if needed (leave room for URL)
if (postText.length > maxPostLength) {
  postText = postText.substring(0, maxPostLength - 3) + "...";
}

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + url,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

---

## Simpler Version (Safe 230 chars)

**Or use a safe fixed limit:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text and truncate to 230 characters (leaves room for URL + newlines)
let postText = blueskyPost.content[0].text;
const maxPostLength = 230; // Safe limit accounting for URL
if (postText.length > maxPostLength) {
  postText = postText.substring(0, maxPostLength - 3) + "...";
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

// Return the body object directly
return [{
  json: body
}];
```

---

## Why 230?

- Post text: 230 chars
- "\n\n": 2 chars
- URL: ~60-70 chars
- **Total: ~292-302 chars** (under 300 limit)

---

**Use the simpler version (230 chars) - it's safer and easier!**

