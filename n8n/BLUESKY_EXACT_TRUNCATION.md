# ✅ Exact Truncation Calculation

**Your current text:**
- Post: "FASCINATING! Just discovered the SECRET to AI writing that doesn't sound like—WAIT! Even BETTER! It's about making AI sound HUMAN! Not robotic! Not corporate-speak! Three key methods that will BLOW YOUR MIND! I interrupted myself 47 times writing this! MUST READ!"
- URL: "https://theaifornormalpeople.com/blog/episode-17-using-ai-for-writing-without-sounding-like-ai/"
- Newlines: "\n\n"

**Total is over 300!**

---

## Corrected Code (Dynamic Calculation)

**This calculates exactly how much room is left for the post:**

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

## Why This Works

- **Calculates URL length dynamically** - works for any URL length
- **Leaves exactly the right amount of room** - 300 - URL - 2
- **Truncates at word boundary** - cleaner cut (if possible)
- **Always under 300** - guaranteed!

---

**This dynamically calculates the exact limit based on your URL length!**

