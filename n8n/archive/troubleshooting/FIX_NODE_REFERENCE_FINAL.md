# 🔧 Final Fix: Cannot Reference "Build Bluesky Body"

The issue: You can't reference nodes that aren't in the execution path. We need to pass data through the flow instead.

---

## Solution: Restructure the Flow

**The problem:** "Get Bluesky Token" is an HTTP Request that doesn't pass through input data, so "Combine Token and Body" can't access "Build Bluesky Body".

**The fix:** We need to get the postBody BEFORE getting the token, or pass it through differently.

---

## Option 1: Get postBody First, Then Token (Recommended)

**Restructure the flow:**

```
Build Bluesky Body
    ↓
Combine Token and Body (gets postBody from input, then gets token)
    ↓
Post to Bluesky
```

**But wait - we need the token first...**

---

## Option 2: Pass postBody Through Get Bluesky Token

**Since HTTP Request nodes don't pass through input, we need to:**

1. **Add a Code node AFTER "Get Bluesky Token"** that combines token + postBody
2. **Get postBody from "Build Bluesky Body" node reference in that Code node**

**But that's what we're trying to do and it's not working...**

---

## Option 3: Store postBody in Workflow Context (Complex)

Not ideal.

---

## Option 4: Change Flow Order (Best Solution)

**New flow structure:**

```
Build Bluesky Body
    ↓
Get Bluesky Token (HTTP Request - gets token)
    ↓
Combine Token and Body (Code - combines both)
    ↓
Post to Bluesky
```

**The issue:** "Combine Token and Body" can't access "Build Bluesky Body" because it's not in the execution path.

**The REAL fix:** Make sure "Build Bluesky Body" IS in the execution path by connecting it properly.

---

## The Actual Solution: Check Your Connections

**Verify your flow looks like this:**

1. **"Build Bluesky Body"** (Code node) - creates post body
2. **"Get Bluesky Token"** (HTTP Request) - gets token
   - **MUST be connected FROM "Build Bluesky Body"**
3. **"Combine Token and Body"** (Code node) - combines both
   - **MUST be connected FROM "Get Bluesky Token"**

**If "Build Bluesky Body" is NOT connected to "Get Bluesky Token", that's the problem!**

---

## Alternative: Use $input.item.json to Access Previous Data

**Try this code in "Combine Token and Body":**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// The postBody should be accessible if Build Bluesky Body is connected
// Try to get it from the workflow execution context
// Since Build Bluesky Body → Get Bluesky Token → Combine Token and Body
// The postBody should be in the execution chain

// Try accessing it through $input.item.json from earlier items
// Or try to get all items
const allItems = $input.all();
console.log('All input items:', allItems);

// Get postBody - it might be in a previous item
let postBody = null;

// Check if postBody was passed through (unlikely with HTTP Request)
if (tokenData.postBody) {
  postBody = tokenData.postBody;
} else {
  // Try to get from the node that should have it
  // List all available node references
  const nodeNames = Object.keys($).filter(key => {
    try {
      const node = $[key];
      return typeof node === 'function' && node.first;
    } catch (e) {
      return false;
    }
  });
  
  console.log('Available node references:', nodeNames);
  
  // Try common variations
  const possibleNames = [
    'Build Bluesky Body',
    'build bluesky body',
    'BuildBlueskyBody',
    'Build Bluesky Post Body',
    'Bluesky Body'
  ];
  
  for (const name of possibleNames) {
    try {
      const node = $[name];
      if (node && node.first) {
        postBody = node.first().json;
        console.log('Found postBody from node:', name);
        break;
      }
    } catch (e) {
      // Continue trying
    }
  }
  
  if (!postBody) {
    throw new Error('Cannot find postBody. Available node references: ' + nodeNames.join(', '));
  }
}

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Simplest Fix: Verify Node Name and Connection

**Before trying complex solutions, check:**

1. **What is the EXACT name of the node that creates the post body?**
   - Look at your workflow canvas
   - Copy the exact name (including spaces, capitalization)

2. **Is it connected to "Get Bluesky Token"?**
   - There should be a connection line between them

3. **If the name is different, use this code:**

```javascript
// Get token
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Replace "Build Bluesky Body" with the ACTUAL node name
const actualNodeName = "YOUR ACTUAL NODE NAME HERE"; // Replace this!
const postBody = $(actualNodeName).first().json;

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Debug: Find the Actual Node Name

**Add this debug code temporarily:**

```javascript
// Get token
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Debug: Try to find the node
console.log('Trying to find Build Bluesky Body node...');

// Try different variations
const variations = [
  'Build Bluesky Body',
  'build bluesky body', 
  'BuildBlueskyBody',
  'Build Bluesky Post Body',
  'Bluesky Body',
  'BlueskyBody'
];

let postBody = null;
let foundNode = null;

for (const name of variations) {
  try {
    const node = $[name];
    if (node && typeof node === 'function') {
      const data = node.first().json;
      postBody = data;
      foundNode = name;
      console.log('Found node:', name);
      break;
    }
  } catch (e) {
    console.log('Tried', name, '- not found');
  }
}

if (!postBody) {
  // Return error with what we tried
  throw new Error('Could not find postBody node. Tried: ' + variations.join(', '));
}

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody,
    debug: { foundNode: foundNode }
  }
}];
```

**Check the browser console (F12) to see which node name works.**

---

## Most Likely Issue

**"Build Bluesky Body" is not connected to "Get Bluesky Token" in your workflow.**

**Fix:**
1. On the workflow canvas, make sure there's a connection line: "Build Bluesky Body" → "Get Bluesky Token"
2. If not, connect them
3. Then the node should be accessible

**OR the node name is slightly different - check the exact name on the canvas!**

