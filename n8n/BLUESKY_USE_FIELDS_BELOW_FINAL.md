# ✅ Bluesky Fix: Use "Fields Below" Mode

**"Using JSON" mode is having issues. Let's use "Using Fields Below" instead.**

---

## Step 1: Change Body Specification

1. In "Post to Bluesky" node
2. Find "Specify Body" dropdown
3. Change from **"Using JSON"** to **"Using Fields Below"**

---

## Step 2: Add Body Parameters

After switching, you'll see "Body Parameters" section. Click "Add Parameter" for each:

**Parameter 1:**
- **Name:** `repo`
- **Value:** `={{$json.repo}}`

**Parameter 2:**
- **Name:** `collection`
- **Value:** `={{$json.collection}}`

**Parameter 3:**
- **Name:** `record`
- **Value:** `={{$json.record}}`

**Important:** For the `record` parameter, n8n should automatically handle it as an object when you use `={{$json.record}}`.

---

## Alternative: Modify Code Node to Return String

**If "Fields Below" still doesn't work, modify the Code node to return a JSON string:**

Change the Code node's return statement to:

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
    body: JSON.stringify(body)
  }
}];
```

Then in "Post to Bluesky" node:
- **Specify Body:** `Using JSON`
- **JSON:** `={{JSON.parse($json.body)}}`

---

## ✅ Try "Using Fields Below" First

This is usually the most reliable approach!

