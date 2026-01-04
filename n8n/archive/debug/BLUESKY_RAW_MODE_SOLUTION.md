# ✅ Solution: Use RAW Mode (More Reliable)

**The Problem:** `[object Object]` means n8n isn't serializing the object in "Using JSON" mode.

**The Solution:** Switch to RAW mode - it's more reliable for this!

---

## Step 1: Update Code Node

**Change the Code node to return a JSON string:**

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

// Return as JSON string (not object)
return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

**Key change:** Returns `bodyString` with `JSON.stringify(body)` - a ready-to-send JSON string.

---

## Step 2: Update HTTP Request Node

### 2.1 Change Body Type

1. **Body Content Type:** Change from `JSON` to `RAW/Custom`

### 2.2 Set Body Field

1. **Body field:** `={{$json.bodyString}}`
   - This extracts the JSON string from Code node

### 2.3 Verify Headers

**CRITICAL:** In RAW mode, you MUST set Content-Type manually!

**Headers:**
1. **Content-Type:** `application/json` (literal text, NOT expression)
2. **Authorization:** `Bearer [your token]` (literal text)

---

## Why RAW Mode Works Better

- **RAW mode:** Sends the string exactly as-is
- **JSON mode:** Tries to auto-serialize, but has issues with objects
- **Result:** RAW mode is more predictable and reliable

---

## Test It

1. **Update Code node** with the new return statement
2. **Change HTTP Request** to RAW/Custom mode
3. **Set Body** to `={{$json.bodyString}}`
4. **Verify Content-Type header** is set
5. **Execute** - should work now!

---

## Quick Checklist

- [ ] Code node returns `bodyString: JSON.stringify(body)`
- [ ] HTTP Request Body Content Type: `RAW/Custom`
- [ ] Body field: `={{$json.bodyString}}`
- [ ] Header: `Content-Type: application/json` (literal)
- [ ] Header: `Authorization: Bearer [token]` (literal)

---

**RAW mode is the most reliable approach for Bluesky! Try this!**

