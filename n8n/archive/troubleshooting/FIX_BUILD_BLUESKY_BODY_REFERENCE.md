# 🔧 Fix "Build Bluesky Body" Node Reference Issue

The problem: "Combine Token and Body" can't access "Build Bluesky Body" because it's not in the execution path.

**Solution: Pass the postBody through "Get Bluesky Token" node instead of referencing it.**

---

## Option 1: Pass postBody Through Get Bluesky Token (Recommended)

**Modify "Get Bluesky Token" to pass through the postBody from the previous node:**

1. **In "Get Bluesky Token" HTTP Request node**, add a Code node AFTER it, OR
2. **Better: Use "Get Bluesky Token" output and combine with input**

Actually, the simplest fix is to **pass the postBody through the flow**.

---

## Option 2: Update "Combine Token and Body" to Get postBody from Input Chain

**If "Build Bluesky Body" is earlier in the flow, we need to pass its data through.**

**Update "Combine Token and Body" code to:**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Get postBody - it should be passed through from Build Bluesky Body
// Check if it's in the input chain
let postBody;

// Try to get from the workflow context
// Since Build Bluesky Body → Get Bluesky Token → Combine Token and Body
// We need to get it from earlier in the chain

// Option A: If postBody was passed through Get Bluesky Token
if ($input.first().json.postBody) {
  postBody = $input.first().json.postBody;
} 
// Option B: Try to get from Build Bluesky Body node
else {
  try {
    postBody = $('Build Bluesky Body').first().json;
  } catch (error) {
    throw new Error('Could not get postBody. Make sure "Build Bluesky Body" node exists and is connected properly.');
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

## Option 3: Restructure the Flow (Best Solution)

**Instead of trying to reference nodes, pass data through the flow:**

1. **"Build Bluesky Body"** outputs: `{ repo, collection, record }`

2. **"Get Bluesky Token"** should receive that data and pass it through:
   - After getting the token, combine it with the input
   - Or use a Code node after "Get Bluesky Token" to combine

3. **Better approach: Add a Code node AFTER "Get Bluesky Token":**

**Add "Combine Token and Body" Code node that gets BOTH from input:**

```javascript
// Get token response from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// The postBody should have been passed through
// But if not, we need to get it from Build Bluesky Body
// Since Get Bluesky Token doesn't receive Build Bluesky Body's output,
// we need to reference it

// Try to reference Build Bluesky Body
let postBody;
const buildNode = $('Build Bluesky Body');
if (buildNode && buildNode.first()) {
  postBody = buildNode.first().json;
} else {
  throw new Error('Cannot find "Build Bluesky Body" node. Check the node name matches exactly.');
}

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Option 4: Check the Actual Node Name

**The node name might be slightly different. Check:**

1. **Look at your workflow canvas**
2. **Find the node that creates the Bluesky post body**
3. **What is its EXACT name?**
   - "Build Bluesky Body"?
   - "Build Bluesky Post Body"?
   - "Bluesky Body"?
   - Something else?

4. **Use that exact name in the code**

---

## Option 5: Simplest Fix - Use Input from Previous Node

**If "Get Bluesky Token" receives data from "Build Bluesky Body", use this:**

```javascript
// Get everything from previous node
const previousData = $input.first().json;

// If Get Bluesky Token received postBody, it should be here
// Otherwise, we need to get the token response
const accessToken = previousData.accessJwt || previousData.accessToken;

// Get postBody - check if it was passed through
let postBody = previousData.postBody;

// If not passed through, try to get from Build Bluesky Body
if (!postBody) {
  try {
    postBody = $('Build Bluesky Body').first().json;
  } catch (error) {
    // List available nodes for debugging
    console.log('Available nodes:', Object.keys($).filter(key => typeof $[key] === 'function'));
    throw new Error('Could not get postBody. Available nodes: ' + Object.keys($).join(', '));
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

## Recommended Solution: Check Your Flow

**The real issue is the flow structure. Verify:**

1. **Is "Build Bluesky Body" connected to "Get Bluesky Token"?**
   - If YES: The postBody should be in the input chain
   - If NO: That's the problem - connect them!

2. **Current flow should be:**
   ```
   Build Bluesky Body
       ↓
   Get Bluesky Token (receives postBody from Build Bluesky Body)
       ↓
   Combine Token and Body (gets token from input, postBody from input or node reference)
       ↓
   Post to Bluesky
   ```

3. **If "Get Bluesky Token" doesn't receive "Build Bluesky Body" output:**
   - Connect: "Build Bluesky Body" → "Get Bluesky Token"
   - Then "Get Bluesky Token" will have access to postBody in its input

---

## Quick Fix Code (Try This First)

```javascript
// Get token from previous node
const tokenData = $input.first().json;
const accessToken = tokenData.accessJwt;

// Try to get postBody from input (if passed through)
let postBody = tokenData.postBody;

// If not in input, try to reference Build Bluesky Body
if (!postBody) {
  // Try exact name first
  try {
    postBody = $('Build Bluesky Body').first().json;
  } catch (e1) {
    // Try variations
    try {
      postBody = $('build bluesky body').first().json;
    } catch (e2) {
      try {
        postBody = $('BuildBlueskyBody').first().json;
      } catch (e3) {
        throw new Error('Cannot find Build Bluesky Body node. Check node name matches exactly.');
      }
    }
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

## Most Important: Check Your Node Connections

**Make sure:**
- "Build Bluesky Body" → "Get Bluesky Token" (connected)
- "Get Bluesky Token" → "Combine Token and Body" (connected)
- "Combine Token and Body" → "Post to Bluesky" (connected)

If "Build Bluesky Body" is NOT connected to "Get Bluesky Token", that's why it can't be found!

