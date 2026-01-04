# 📍 Where to Paste the Code

**Paste it in the "Build Bluesky Body" Code node:**

---

## Step-by-Step

### Step 1: Find the Code Node

1. **In your n8n workflow**, find the node called **"Build Bluesky Body"**
   - It should be between "Generate Bluesky Post" and "Post to Bluesky"
   - If you don't have it, add a new Code node

### Step 2: Open the Code Node

1. **Click on "Build Bluesky Body" node**
2. **The node configuration panel opens on the right**

### Step 3: Find the Code Editor

1. **Look for a large text area** labeled "JavaScript Code" or "Code"
2. **This is where you paste the code**

### Step 4: Replace the Code

1. **Select all the existing code** (Ctrl+A)
2. **Delete it**
3. **Paste the new code** (the one I just gave you)
4. **Click "Save" or the node will auto-save**

---

## The Code to Paste

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text
let postText = blueskyPost.content[0].text;

// Calculate exact max length: 300 total - URL - newlines
const url = checkNode.episodeLink;
const newlines = "\n\n";
const urlAndNewlinesLength = url.length + newlines.length;
const maxPostLength = 300 - urlAndNewlinesLength;

// Truncate post text if needed
if (postText.length > maxPostLength) {
  // Truncate at word boundary if possible (last 20 chars)
  let truncated = postText.substring(0, maxPostLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxPostLength - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + "...";
}

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + url,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

---

## If You Don't Have a Code Node

**Add one:**

1. **Add a new "Code" node** between "Generate Bluesky Post" and "Post to Bluesky"
2. **Name it:** `Build Bluesky Body`
3. **Connect:** Generate Bluesky Post → Build Bluesky Body → Post to Bluesky
4. **Paste the code above**
5. **In "Post to Bluesky" node**, change JSON field to: `={{$json}}`

---

**Paste it in the "Build Bluesky Body" Code node's code editor!**

