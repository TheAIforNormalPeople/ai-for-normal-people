# ✅ Add Truncation to Bluesky Post

**We had it working! Just need to truncate the post text to 300 graphemes.**

---

## Option 1: If You Have a Code Node

**In your "Build Bluesky Body" Code node, add truncation:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text
let postText = blueskyPost.content[0].text;

// Truncate to 280 characters (leave room for URL + newlines)
const maxLength = 280;
if (postText.length > maxLength) {
  // Find last space before limit to avoid cutting words
  let truncated = postText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength - 20) { // If space is reasonably close
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + "...";
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

## Option 2: If No Code Node (Direct Connection)

**If "Post to Bluesky" connects directly to "Generate Bluesky Post", add truncation in the JSON expression:**

**In "Post to Bluesky" node, JSON field:**

```javascript
({
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": (() => {
      const text = $json['content'][0]['text'];
      const maxLen = 280;
      return text.length > maxLen ? text.substring(0, maxLen - 3) + "..." : text;
    })() + "\n\n" + $('Check If Posted').first().json.episodeLink,
    "createdAt": $now.toISOString()
  }
})
```

---

## Quick Fix: Just Add Truncation

**Wherever you're building the body, add this before using the text:**

```javascript
let postText = blueskyPost.content[0].text;
if (postText.length > 280) {
  postText = postText.substring(0, 277) + "...";
}
```

---

**Which setup do you have? Code node or direct connection?**

