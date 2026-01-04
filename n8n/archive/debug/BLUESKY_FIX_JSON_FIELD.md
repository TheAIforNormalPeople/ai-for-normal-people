# ✅ Code Node Works - Fix HTTP Request JSON Field

**Good news:** Code node output is correct! ✅

**Issue:** HTTP Request node's JSON field isn't reading it correctly.

---

## Step 1: Verify Connection

**Make sure:**
- Code node → HTTP Request node (connected with a line)
- HTTP Request node receives data from Code node

**Check:** In HTTP Request node, can you see the Code node's output in the INPUT panel?

---

## Step 2: Check JSON Field Exactly

**In "Post to Bluesky" node:**

1. **Go to Body section**
2. **Find "JSON" field** (should be under "Specify Body: Using JSON")
3. **Click in the JSON field**
4. **Select all text (Ctrl+A)**
5. **What does it show?**

**It should be EXACTLY:**
```
={{JSON.stringify($json)}}
```

**Common issues:**
- Has extra quotes: `"={{JSON.stringify($json)}}"` ❌
- Missing = prefix: `{{JSON.stringify($json)}}` ❌
- Wrong syntax: `={{$json}}` ❌
- Has spaces: `={{ JSON.stringify($json) }}` ❌ (spaces might cause issues)

---

## Step 3: Try This Exact Value

**Clear the JSON field and paste this EXACTLY (no extra spaces):**

```
={{JSON.stringify($json)}}
```

**Important:**
- Starts with `={{`
- No quotes around it
- No extra spaces
- Ends with `}}`

---

## Step 4: If Still Fails - Use RAW Mode

**If JSON mode keeps failing, RAW mode is more reliable:**

### 4.1 Update Code Node

**Change the return to return a string:**
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

### 4.2 Update HTTP Request

1. **Body Content Type:** `RAW/Custom` (NOT "JSON")
2. **Body field:** `={{$json.bodyString}}`
3. **Headers:** 
   - `Content-Type`: `application/json` (MUST be set manually in RAW mode!)
   - `Authorization`: `Bearer [token]`

---

## Quick Test

**Before changing anything, try this:**

1. In JSON field, temporarily use: `={{$json}}` (without stringify)
2. Execute node
3. Check error - does it show `[object Object]` or something else?

**This tells us if the expression is evaluating at all.**

---

## What to Check Now

1. **Is Code node connected to HTTP Request?** (line between them)
2. **What exactly is in the JSON field?** (copy/paste it here)
3. **Try `={{$json}}` first** - does it show anything in preview?

**Share what you see and we'll fix it!**

