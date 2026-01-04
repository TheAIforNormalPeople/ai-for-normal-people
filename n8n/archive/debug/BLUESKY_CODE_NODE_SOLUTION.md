# ✅ Bluesky Fix: Use Code Node to Build Body

**The problem:** `record` is being sent as a string instead of a JSON object.

**The solution:** Add a Code node before "Post to Bluesky" to build the body properly.

---

## Step 1: Add Code Node

1. **Add a new "Code" node** between "Generate Bluesky Post" and "Post to Bluesky"
2. **Name it:** `Build Bluesky Body`
3. **Connect:** "Generate Bluesky Post" → "Build Bluesky Body" → "Post to Bluesky"

---

## Step 2: Configure Code Node

**In the Code node, paste this JavaScript:**

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

## Step 3: Update "Post to Bluesky" Node

1. **Change "Specify Body" to:** `Using Fields Below`
2. **Add ONE parameter:**
   - **Name:** `body`
   - **Value:** `={{$json}}` (this uses the entire output from Code node)

**OR** use "Using JSON" mode:
- **JSON:** `={{$json}}`

---

## Alternative: Simpler Fix

**If you don't want to add a Code node, try this in "Using JSON" mode:**

Change the JSON field to use `$json` from the previous node and build it properly:

```json
={{JSON.stringify({
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": $('Generate Bluesky Post').first().json.content[0].text + "\n\n" + $('Check If Posted').first().json.episodeLink,
    "createdAt": new Date().toISOString()
  }
})}}
```

**This uses JavaScript to build the JSON object properly, ensuring `record` is an object, not a string.**

---

## ✅ Recommended: Use Code Node

The Code node approach is cleaner and easier to debug. Try that first!

