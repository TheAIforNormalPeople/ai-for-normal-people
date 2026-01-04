# ✅ SUCCESS! Now Fix Length Limit

**🎉 GREAT NEWS: The request is working!** The error changed from format issues to content length!

**The Error:** `"Record/text must not be longer than 300 graphemes"`

**Bluesky has a 300-character limit** (graphemes = visible characters, emojis count as 1)

---

## Solution 1: Update Claude Prompt (Recommended)

**Make Claude generate shorter posts for Bluesky:**

**In "Generate Bluesky Post" node, update the prompt to:**

```
Write a Bluesky post as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. 

IMPORTANT: Keep it under 280 characters (Bluesky limit is 300, but leave room for the URL). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers.

Post title: {{$json.episodeTitle}} 
Description: {{$json.episodeDescription}}
```

**Key change:** Added "Keep it under 280 characters" instruction.

---

## Solution 2: Truncate in Code Node

**Or truncate the text in the Code node:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text
let postText = blueskyPost.content[0].text;

// Truncate to 280 characters (leave room for URL)
const maxLength = 280;
if (postText.length > maxLength) {
  postText = postText.substring(0, maxLength - 3) + "...";
}

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

## Why This Happened

- **Bluesky limit:** 300 graphemes (characters)
- **Your post:** ~350+ characters
- **Emojis count:** 🤖✍️ = 2 graphemes
- **URL:** Takes up space too

---

## Recommendation

**Use Solution 1 (update prompt)** - better to generate shorter posts from the start than truncate them.

**But for now, Solution 2 (truncate) will work immediately!**

---

## 🎉 CELEBRATION!

**The API is working!** We just need to fix the length. This is the LAST step!

