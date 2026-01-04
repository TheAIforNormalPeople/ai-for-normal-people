# 🔧 Fix "Combine Token and Body" Code Node

The error "Referenced node doesn't exist" means the node names don't match exactly.

---

## Solution: Use $input for Previous Node

Since "Get Bluesky Token" is the **previous node** (connected directly before this Code node), use `$input` instead of `$('Get Bluesky Token')`.

---

## Updated Code

**Replace the code in "Combine Token and Body" with this:**

```javascript
// Get fresh token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Get post body from "Build Bluesky Body" node (by name)
const postBody = $('Build Bluesky Body').first().json;

// Return combined data for "Post to Bluesky" node
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

**Key change:** `$input.first().json` instead of `$('Get Bluesky Token').first().json`

---

## Alternative: If "Build Bluesky Body" Also Fails

If you still get an error about "Build Bluesky Body", try this version that uses `$input.item.json` for both:

```javascript
// Get fresh token from previous node
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Get post body - try to get from input first, then fallback to node reference
let postBody;
try {
  // If Build Bluesky Body is in the input chain, use it
  postBody = $input.item.json;
} catch (error) {
  // Otherwise, reference by name
  postBody = $('Build Bluesky Body').first().json;
}

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Better Solution: Check Node Names

**The real issue might be the node name doesn't match exactly.**

1. **Check the exact name of "Get Bluesky Token" node:**
   - Is it exactly "Get Bluesky Token"?
   - Or is it "Get Bluesky Token " (with a space)?
   - Or "get bluesky token" (lowercase)?

2. **Check the exact name of "Build Bluesky Body" node:**
   - Is it exactly "Build Bluesky Body"?
   - Or something slightly different?

3. **Node names are case-sensitive!**

---

## Simplest Solution: Use Only $input

**If "Get Bluesky Token" is connected directly before this Code node, use:**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// For postBody, we need to reference "Build Bluesky Body" by name
// But first, let's check what's available
const postBody = $('Build Bluesky Body').first().json;

return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Debug: Check What's Available

**Add this debug code temporarily:**

```javascript
// Debug: See what nodes are available
console.log('Available nodes:', Object.keys($));

// Get token from input
const tokenResponse = $input.first().json;
console.log('Token response:', tokenResponse);

// Try to get post body
try {
  const postBody = $('Build Bluesky Body').first().json;
  console.log('Post body found:', postBody);
  
  return [{
    json: {
      accessToken: tokenResponse.accessJwt,
      postBody: postBody
    }
  }];
} catch (error) {
  console.log('Error getting post body:', error);
  // Return just the token for now
  return [{
    json: {
      accessToken: tokenResponse.accessJwt,
      error: 'Could not get post body: ' + error.message
    }
  }];
}
```

**Check the browser console (F12) to see what nodes are available.**

---

## Most Likely Fix

**Use this code (uses $input for token):**

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Get post body from Build Bluesky Body node
const postBody = $('Build Bluesky Body').first().json;

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

This should work if:
- "Get Bluesky Token" is connected directly before this Code node
- "Build Bluesky Body" exists with that exact name

