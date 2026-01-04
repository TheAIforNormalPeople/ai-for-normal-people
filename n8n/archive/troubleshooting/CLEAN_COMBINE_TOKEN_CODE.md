# 🔧 Clean Code for "Combine Token and Body" Node

The error "Identifier 'tokenData' has already been declared" means you have duplicate code. 

**Delete ALL the old code and replace with this clean version:**

---

## Clean Code (Copy This Entire Block)

```javascript
// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Rebuild postBody from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Truncate post text to 280 characters
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

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

---

## Steps to Fix

1. **Open "Combine Token and Body" Code node**
2. **Select ALL the code** (Ctrl+A or Cmd+A)
3. **Delete it** (Delete or Backspace)
4. **Paste the clean code above**
5. **Save/Execute**

---

## What This Code Does

1. Gets the `accessToken` from "Get Bluesky Token" node (via `$input`)
2. Gets the post text from "Generate Bluesky Post" node
3. Gets the episode link from "Check If Posted" node
4. Truncates the text to 280 characters
5. Builds the `postBody` structure
6. Returns both `accessToken` and `postBody` together

---

## Important

**Make sure you DELETE all old code first!** The error happens when you have:
- Old code with `const tokenData = ...`
- New code with `const tokenData = ...` (duplicate)

Delete everything and paste only the clean code above.

