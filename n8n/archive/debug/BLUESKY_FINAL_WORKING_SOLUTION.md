# ✅ Bluesky Final Working Solution

**The issue:** n8n is having trouble with nested objects in "Using Fields Below" mode.

**The solution:** Use "Using JSON" mode with the Code node output directly.

---

## Step 1: Update Code Node

**Make sure your Code node returns the body object directly (it should already be correct):**

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

## Step 2: Configure "Post to Bluesky" Node

**Use "Using JSON" mode with a direct reference:**

1. **Send Body:** ✅ Enabled
2. **Body Content Type:** `JSON`
3. **Specify Body:** `Using JSON`
4. **JSON field:** Use this EXACT expression:
   ```
   ={{$json}}
   ```

**BUT** - n8n might need it as a string. If `={{$json}}` doesn't work, try:
```
={{JSON.stringify($json)}}
```

Then in the node options, make sure **"Send Body as JSON"** or similar option is enabled.

---

## Step 3: Alternative - Use RAW Body

If JSON mode still doesn't work:

1. **Specify Body:** `RAW/Custom`
2. **Body:** `={{JSON.stringify($json)}}`
3. **Headers:** Make sure `Content-Type: application/json` is set

---

## Step 4: Verify Headers

Make sure you have:
- `Content-Type`: `application/json`
- `Authorization`: `Bearer [your token]`

---

## ✅ The Key Issue

The problem is that "Using Fields Below" doesn't handle nested objects well. **"Using JSON" mode should work** if we reference the Code node output correctly.

**Try `={{$json}}` first. If that shows `[object Object]`, then use `={{JSON.stringify($json)}}` and make sure the node is set to send it as JSON.**

