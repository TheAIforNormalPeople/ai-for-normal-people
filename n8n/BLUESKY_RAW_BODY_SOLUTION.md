# ✅ Bluesky Solution: Use RAW Body

**Since "Using JSON" isn't working, let's use "RAW/Custom" body type instead.**

---

## Step 1: Update Code Node

**Modify the Code node to return the body as a JSON string:**

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

// Return as JSON string
return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

---

## Step 2: Configure "Post to Bluesky" Node

1. **Send Body:** ✅ Enabled
2. **Body Content Type:** `RAW/Custom` (NOT "JSON")
3. **Body:** `={{$json.bodyString}}`

---

## Step 3: Verify Headers

Make sure you have:
- `Content-Type`: `application/json`
- `Authorization`: `Bearer [your token]`

---

## Why This Works

- Code node creates the body object
- Stringifies it to JSON string
- RAW body type sends it as-is
- Content-Type header tells Bluesky it's JSON
- Bluesky parses it correctly

---

**This should finally work! The RAW body type bypasses n8n's JSON parsing issues.**

