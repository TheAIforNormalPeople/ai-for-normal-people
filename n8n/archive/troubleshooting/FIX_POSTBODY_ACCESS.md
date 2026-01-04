# 🔧 Fix: Cannot Access "Build Bluesky Body" - Pass Data Through Flow

The issue: "Build Bluesky Body" isn't accessible because it's not in the execution path when "Combine Token and Body" runs.

**Solution: Get postBody from the INPUT chain instead of node reference.**

---

## The Problem

In n8n, you can only reference nodes that are in the execution path. Since "Get Bluesky Token" is an HTTP Request node, it doesn't automatically pass through input data, so "Build Bluesky Body" data isn't accessible.

---

## Solution: Get postBody from Input Chain

**If "Build Bluesky Body" → "Get Bluesky Token" is connected, the postBody should be in the input chain.**

**Use this code in "Combine Token and Body":**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Get postBody from the input chain
// Since Build Bluesky Body → Get Bluesky Token → Combine Token and Body
// The postBody should be accessible through $input.item.json or workflow context

// Try to get from input items (if passed through)
let postBody = null;

// Check all input items for postBody
const allInputItems = $input.all();
for (const item of allInputItems) {
  if (item.json.repo || item.json.record) {
    // This looks like the postBody structure
    postBody = item.json;
    break;
  }
}

// If not found in input, try to get from the node that should have it
// But first, let's check if Get Bluesky Token received it
if (!postBody) {
  // The postBody should have been passed to Get Bluesky Token
  // But HTTP Request nodes don't pass through input
  // So we need to reference the node
  
  // Try to get from Build Bluesky Body node
  // But this won't work if it's not in execution path
  
  // Alternative: Check if postBody is stored somewhere else
  // Or we need to restructure the flow
}

if (!postBody) {
  throw new Error('Cannot find postBody. Make sure "Build Bluesky Body" is connected to "Get Bluesky Token".');
}

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Better Solution: Restructure the Flow

**The real fix is to restructure so postBody is accessible:**

### Option 1: Get Token First, Then Combine

**Change the flow to:**

```
Build Bluesky Body
    ↓
Get Bluesky Token (separate branch or stored)
    ↓
Combine Token and Body (gets postBody from input, token from node reference)
    ↓
Post to Bluesky
```

**But this is complex...**

---

### Option 2: Pass postBody Through Get Bluesky Token

**Since HTTP Request nodes don't pass through input, we need to:**

1. **Add a Code node BEFORE "Get Bluesky Token"** that stores postBody
2. **OR modify "Get Bluesky Token" to include postBody in its output**

**Actually, HTTP Request nodes can't easily pass through data...**

---

### Option 3: Use Workflow Variables (Not Ideal)

Store postBody in workflow variables - complex.

---

## Simplest Fix: Check Your Flow Structure

**The most likely issue: "Build Bluesky Body" is NOT connected to "Get Bluesky Token".**

**Verify your flow:**

1. **"Build Bluesky Body"** (Code node)
2. **Is there a connection line to "Get Bluesky Token"?**
   - If NO → Connect them!
   - If YES → Continue

3. **"Get Bluesky Token"** (HTTP Request)
4. **"Combine Token and Body"** (Code node)

**If "Build Bluesky Body" is NOT connected to "Get Bluesky Token", that's why it can't be found!**

---

## Alternative: Get postBody from a Different Source

**If the nodes aren't connected, we need to get postBody another way:**

**Option A: Get it from "Generate Bluesky Post" node instead:**

```javascript
// Get token
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Get postBody from Generate Bluesky Post node (earlier in flow)
let postBody;
try {
  const blueskyPost = $('Generate Bluesky Post').first().json;
  const checkNode = $('Check If Posted').first().json;
  
  // Rebuild the postBody structure
  const postText = blueskyPost.content[0].text;
  const maxLength = 280;
  const truncatedText = postText.length > maxLength 
    ? postText.substring(0, maxLength - 3) + "..." 
    : postText;
  
  postBody = {
    repo: "thenormalpeople.bsky.social",
    collection: "app.bsky.feed.post",
    record: {
      "$type": "app.bsky.feed.post",
      text: truncatedText + "\n\n" + checkNode.episodeLink,
      createdAt: new Date().toISOString()
    }
  };
} catch (error) {
  throw new Error('Cannot build postBody. Error: ' + error.message);
}

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

**This rebuilds the postBody from earlier nodes that ARE accessible!**

---

## Recommended Solution

**Use this code that rebuilds postBody from accessible nodes:**

```javascript
// Get token from previous node
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Get postBody by rebuilding it from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Truncate post text
let postText = blueskyPost.content[0].text;
const maxLength = 280;
if (postText.length > maxLength) {
  postText = postText.substring(0, maxLength - 3) + "...";
}

// Build the postBody
const postBody = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

**This rebuilds the postBody from "Generate Bluesky Post" and "Check If Posted" nodes, which should be accessible!**

