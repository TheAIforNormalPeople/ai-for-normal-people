# FIX SYNTAX ERROR IN "BUILD BLUESKY BODY"

**Error:** `SyntaxError: Unexpected token ':'`  
**Cause:** Likely a quote/escaping issue when pasting code into n8n.

---

## THE CORRECT CODE

**Copy this EXACT code into the "Build Bluesky Body" Code node:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text (Claude already generates the right length - 170 chars)
const postText = blueskyPost.content[0].text;

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

---

## HOW TO FIX

1. **Open "Build Bluesky Body" Code node in n8n**
2. **DELETE all existing code**
3. **Paste the code above** (copy from `BUILD_BLUESKY_BODY_CORRECT_CODE.js`)
4. **Save the node**
5. **Test again**

---

## COMMON ISSUES

**Problem:** Stray quotes or characters  
**Solution:** Delete everything and paste fresh code

**Problem:** Smart quotes (`"` instead of `"`)  
**Solution:** Make sure you're using straight quotes, not curly quotes

**Problem:** Hidden characters  
**Solution:** Copy from the `.js` file I created, not from the markdown

---

## VERIFY

After pasting, the code should:
- Start with `// Get data from previous nodes`
- Have straight quotes (`"`) not curly quotes (`"`)
- End with `}];`
- No extra characters or quotes

---

**Copy from `BUILD_BLUESKY_BODY_CORRECT_CODE.js` to ensure clean code!**

