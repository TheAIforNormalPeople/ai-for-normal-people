# 🔧 Fix: Body is Wrapped in bodyString

**The Problem:**
The request shows:
```json
{
  "body": {
    "bodyString": "{\"repo\":\"...\"}"
  }
}
```

**But Bluesky needs:**
```json
{
  "repo": "...",
  "collection": "...",
  "record": {...}
}
```

**The body is wrapped in an extra layer!**

---

## Solution 1: Fix RAW Mode (If Using RAW)

**If you're using RAW/Custom body type:**

1. **Body Content Type:** `RAW/Custom`
2. **Body field:** Make sure it's exactly:
   ```
   ={{$json.bodyString}}
   ```
   (This extracts just the string value, not the whole object)

3. **Headers:**
   - `Content-Type`: `application/json`

---

## Solution 2: Fix Code Node Output

**OR change the Code node to return the string directly:**

**In Code node, change the return to:**
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

// Return the body object directly (not wrapped in bodyString)
return [{
  json: body
}];
```

**Then in HTTP Request:**
- **Body Content Type:** `JSON`
- **Specify Body:** `Using JSON`
- **JSON field:** `={{JSON.stringify($json)}}`

---

## Solution 3: Use JSON Mode with Direct Object

**Simplest approach - Code node returns object, HTTP Request uses it:**

**Code node:**
```javascript
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: blueskyPost.content[0].text + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

return [{ json: body }];
```

**HTTP Request:**
- **Body Content Type:** `JSON`
- **Specify Body:** `Using JSON`
- **JSON field:** `={{$json}}` (NOT `={{$json.bodyString}}`)

---

## The Issue

You're sending `{ bodyString: "..." }` when Bluesky needs just the JSON object directly.

**Check:**
1. What body mode are you using? (JSON or RAW/Custom)
2. What's in the JSON/Body field? (`={{$json}}` or `={{$json.bodyString}}`)

**The fix depends on which mode you're using!**

