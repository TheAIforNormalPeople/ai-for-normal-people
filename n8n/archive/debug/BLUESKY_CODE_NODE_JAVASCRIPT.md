# ✅ Bluesky Code Node - JavaScript

**Use JavaScript** (it's the default and works great for this).

---

## Code Node Configuration:

1. **Add Code node** between "Generate Bluesky Post" and "Post to Bluesky"
2. **Name it:** `Build Bluesky Body`
3. **Language:** JavaScript (default)
4. **Paste this code:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: blueskyPost.content[0].text + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Return the body
return [{
  json: body
}];
```

---

## Then in "Post to Bluesky" node:

1. **Specify Body:** `Using JSON`
2. **JSON:** `={{$json}}`

---

**JavaScript is recommended** - it's the default and works perfectly for this!

