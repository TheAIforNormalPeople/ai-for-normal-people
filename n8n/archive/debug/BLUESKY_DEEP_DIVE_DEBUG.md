# 🔬 Bluesky Node Deep Dive - Complete Debug Guide

## Root Cause Analysis

**The Core Problem:** n8n's HTTP Request node struggles with nested JSON objects when using certain body modes. The `record` field must be a JSON object, but n8n keeps sending it as a string.

---

## What Bluesky API Actually Requires

Based on Bluesky API documentation:

```json
{
  "repo": "handle.bsky.social",  // String
  "collection": "app.bsky.feed.post",  // String
  "record": {  // MUST be an OBJECT, not a string!
    "$type": "app.bsky.feed.post",
    "text": "post content",
    "createdAt": "2025-12-22T22:55:01Z"
  }
}
```

**Key Requirement:** `record` must be a nested JSON object, NOT a stringified JSON.

---

## Why n8n Fails

### Issue 1: "Using Fields Below" Mode
- **Problem:** When you add `record` as a parameter with value `={{$json.record}}`, n8n stringifies it
- **Result:** `"record": "[object Object]"` or `"record": "{\"$type\":...}"` (string)
- **Why:** n8n's parameter mode doesn't handle nested objects well

### Issue 2: "Using JSON" Mode
- **Problem:** When using `={{$json}}`, n8n sometimes doesn't properly serialize the object
- **Result:** `[object Object]` or invalid JSON
- **Why:** Expression evaluation timing issues

### Issue 3: RAW/Custom Mode
- **Problem:** Content-Type header gets cleared or not set properly
- **Result:** `"content-type": ""` error
- **Why:** RAW mode doesn't auto-set Content-Type

---

## The Solution: Test Each Component

### Step 1: Verify Code Node Output

**Test the Code node in isolation:**

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

**Execute this node and check the output:**
- Should show `repo`, `collection`, and `record` as an object
- `record` should NOT be a string

---

### Step 2: Test HTTP Request with Direct JSON

**Temporarily hardcode the JSON to test:**

1. **Specify Body:** `Using JSON`
2. **JSON field:** Paste this EXACT text (no expressions):
   ```json
   {
     "repo": "thenormalpeople.bsky.social",
     "collection": "app.bsky.feed.post",
     "record": {
       "$type": "app.bsky.feed.post",
       "text": "Test post",
       "createdAt": "2025-12-22T22:55:01Z"
     }
   }
   ```
3. **Headers:**
   - `Content-Type`: `application/json`
   - `Authorization`: `Bearer [your token]`

**If this works:** The issue is with expression evaluation.
**If this fails:** The issue is with n8n's JSON handling or Bluesky API.

---

### Step 3: Test with Code Node Output (JSON Mode)

**If Step 2 worked, try with Code node:**

1. **Specify Body:** `Using JSON`
2. **JSON field:** `={{JSON.stringify($json)}}`
3. **Headers:** Same as Step 2

**Check the actual request in error details:**
- Does `record` appear as an object `{...}` or string `"{...}"`?
- Is Content-Type set correctly?

---

### Step 4: Test with RAW Mode

**If JSON mode doesn't work:**

1. **Body Content Type:** `RAW/Custom`
2. **Body:** `={{JSON.stringify($json)}}`
3. **Headers:**
   - `Content-Type`: `application/json` (MUST be set manually!)
   - `Authorization`: `Bearer [your token]`

**Critical:** In RAW mode, Content-Type header MUST be set manually or it will be empty!

---

## Most Likely Solution

Based on research, the **most reliable approach** is:

### Option A: Code Node + JSON Mode with Stringify

**Code Node:**
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

return [{
  json: {
    bodyJson: JSON.stringify(body)
  }
}];
```

**HTTP Request:**
- **Specify Body:** `Using JSON`
- **JSON:** `={{JSON.parse($json.bodyJson)}}`

This double-converts to ensure proper object structure.

---

### Option B: Code Node + RAW Mode (Most Reliable)

**Code Node:**
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

return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

**HTTP Request:**
- **Body Content Type:** `RAW/Custom`
- **Body:** `={{$json.bodyString}}`
- **Headers:**
  - `Content-Type`: `application/json` (CRITICAL - set manually!)
  - `Authorization`: `Bearer [token]`

---

## Debug Checklist

Run through these in order:

- [ ] Code node outputs correct structure (record is object)
- [ ] Hardcoded JSON works (proves API/headers are correct)
- [ ] JSON mode with `JSON.stringify()` works
- [ ] RAW mode with manual Content-Type works
- [ ] Final workflow with expressions works

---

## Common Mistakes

1. **Content-Type empty in RAW mode** → Set it manually in headers
2. **Record as string** → Use JSON.stringify in Code node, JSON.parse in HTTP Request
3. **Expression not evaluating** → Use `={{...}}` not `={{...}}` with extra quotes
4. **Missing $type field** → Bluesky requires `"$type": "app.bsky.feed.post"` in record

---

## Next Steps

1. **Test Step 2 first** (hardcoded JSON) - this will tell us if it's n8n or Bluesky
2. **If Step 2 works**, proceed to Step 3 (with Code node)
3. **If Step 2 fails**, check Bluesky API status or token validity

