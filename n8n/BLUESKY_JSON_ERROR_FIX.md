# 🔧 Fix: "JSON parameter needs to be valid JSON"

**The error means:** The JSON field expression isn't evaluating to valid JSON.

---

## Step 1: Check Code Node Output

**First, verify the Code node is working:**

1. **Click on "Build Bluesky Body" Code node**
2. **Click "Execute step"**
3. **Check the output** - what do you see?

**Should show:**
```
repo: "thenormalpeople.bsky.social"
collection: "app.bsky.feed.post"
record: {
  $type: "app.bsky.feed.post"
  text: "..."
  createdAt: "..."
}
```

**If Code node output looks wrong, that's the issue!**

---

## Step 2: Check JSON Field Value

**In "Post to Bluesky" node:**

1. **Go to Body section**
2. **Find "JSON" field** (under "Specify Body: Using JSON")
3. **What exactly is in that field?**

**Should be:**
```
={{JSON.stringify($json)}}
```

**Common mistakes:**
- `={{$json}}` ❌ (might show [object Object])
- `=$json` ❌ (missing curly braces)
- `{{JSON.stringify($json)}}` ❌ (missing = prefix)
- Extra quotes or spaces

---

## Step 3: Try Hardcoded JSON First

**To isolate the issue, test with hardcoded JSON:**

1. **In "Post to Bluesky" node**
2. **JSON field:** Delete the expression
3. **Paste this (no expressions):**
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
4. **Execute the node**

**If this works:** The issue is with the expression/Code node connection.
**If this fails:** The issue is with body sending or headers.

---

## Step 4: Alternative - Use RAW Mode

**If JSON mode keeps failing, try RAW mode:**

### 4.1 Update Code Node

**Change the return to:**
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

1. **Body Content Type:** Change to `RAW/Custom`
2. **Body field:** `={{$json.bodyString}}`
3. **Headers:** Make sure `Content-Type: application/json` is set (CRITICAL in RAW mode!)

---

## Quick Debug Checklist

- [ ] Code node executes successfully
- [ ] Code node output shows `repo`, `collection`, `record`
- [ ] JSON field is exactly `={{JSON.stringify($json)}}`
- [ ] No extra quotes or spaces in JSON field
- [ ] Hardcoded JSON test works (to isolate issue)
- [ ] If using RAW mode, Content-Type header is set

---

## Most Likely Issue

**The JSON field expression isn't evaluating.** This could be because:

1. **Code node not connected** - HTTP Request can't see Code node output
2. **Wrong expression syntax** - Missing `={{` or `}}`
3. **n8n version issue** - Some versions have expression evaluation bugs

**Try hardcoded JSON first to confirm the API works, then we'll fix the expression!**

