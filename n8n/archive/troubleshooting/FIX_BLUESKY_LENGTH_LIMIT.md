# 🔧 Fix Bluesky 300 Character Limit Issue

The problem: Truncating to 280 characters, then adding `\n\n` + URL pushes it over 300.

**Solution: Account for URL length when truncating.**

---

## Updated Code for "Combine Token and Body"

**Replace the truncation section with this:**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Rebuild postBody from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Get the episode link
const episodeLink = checkNode.episodeLink;

// Calculate available space for post text
// Bluesky limit: 300 graphemes
// We need: postText + "\n\n" + URL
// URL is typically ~50-60 characters, but let's be safe
const urlLength = episodeLink.length;
const newlineLength = 2; // "\n\n"
const reservedSpace = urlLength + newlineLength;
const maxPostTextLength = 300 - reservedSpace; // Leave room for URL

// Truncate post text
let postText = blueskyPost.content[0].text;
if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}

// Build the postBody
const postBody = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Alternative: More Conservative Approach

**If URLs vary in length, use a fixed safe limit:**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Rebuild postBody from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Truncate post text - leave room for "\n\n" + URL (typically 50-70 chars)
// Use 230 to be safe (230 + 2 + 68 = 300)
const maxPostTextLength = 230;
let postText = blueskyPost.content[0].text;

if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}

// Build the postBody
const postBody = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Verify total length (for debugging)
const totalLength = postBody.record.text.length;
if (totalLength > 300) {
  console.log('WARNING: Total length is', totalLength, 'characters (over 300 limit)');
  // Further truncate if needed
  const overage = totalLength - 300;
  postText = postText.substring(0, postText.length - overage - 3) + "...";
  postBody.record.text = postText + "\n\n" + checkNode.episodeLink;
}

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Recommended: Dynamic Calculation

**This calculates exactly how much space is available:**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Rebuild postBody from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Get episode link
const episodeLink = checkNode.episodeLink;

// Calculate exact space needed for URL + newlines
const urlAndNewlines = "\n\n" + episodeLink;
const urlAndNewlinesLength = urlAndNewlines.length;

// Calculate max length for post text (300 - URL length)
const maxPostTextLength = 300 - urlAndNewlinesLength;

// Truncate post text
let postText = blueskyPost.content[0].text;
if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}

// Build the postBody
const postBody = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + urlAndNewlines,
    createdAt: new Date().toISOString()
  }
};

// Final safety check
const finalText = postBody.record.text;
if (finalText.length > 300) {
  // Emergency truncation if somehow still over
  const overage = finalText.length - 300;
  postText = postText.substring(0, postText.length - overage - 3) + "...";
  postBody.record.text = postText + urlAndNewlines;
}

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Quick Fix: Use 230 Character Limit

**Simplest solution - just change the max length:**

In "Combine Token and Body" code, change:
```javascript
const maxLength = 280;
```

To:
```javascript
const maxLength = 230; // Leaves room for "\n\n" + URL (~70 chars)
```

This ensures the total stays under 300.

---

## Why This Happens

- Bluesky limit: **300 graphemes** (characters)
- We were truncating to: **280 characters**
- Then adding: `\n\n` (2 chars) + URL (~50-70 chars)
- Total: 280 + 2 + 70 = **352 characters** (over limit!)

**Fix:** Truncate to 230, leaving 70 characters for the URL and newlines.

