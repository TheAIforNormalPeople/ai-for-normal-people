# Twitter Text Formatting Fix

## Common Issues That Cause 403

1. **Character limit exceeded** (280 for v1.1, but v2 allows more)
2. **Smart quotes** (" " instead of " ")
3. **Special characters** Twitter doesn't like
4. **URL formatting** issues
5. **Newline characters** not working

## Fix: Add Text Cleaning Node

Add a Code node between "Generate Tweet via Claude" and "Post to Twitter":

**Node Name:** "Clean Twitter Text"

**Code:**
```javascript
// Get the tweet text from Claude
const claudeResponse = $input.first().json;
let tweetText = claudeResponse.content[0].text || '';

// Get the episode link
const episodeLink = $('Check If Posted').first().json.episodeLink || '';

// Clean the text
// 1. Replace smart quotes with regular quotes
tweetText = tweetText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 2. Remove any problematic characters
tweetText = tweetText.replace(/[^\x20-\x7E\n\r]/g, ''); // Keep only printable ASCII + newlines

// 3. Replace \n with actual newlines (if needed)
tweetText = tweetText.replace(/\\n/g, '\n');

// 4. Trim whitespace
tweetText = tweetText.trim();

// 5. Calculate total length with URL
const urlLength = episodeLink.length;
const newlineLength = 2; // \n\n
const totalLength = tweetText.length + urlLength + newlineLength;

// 6. Truncate if too long (Twitter v2 allows 280, but be safe)
const maxLength = 250; // Leave room for URL
if (totalLength > 280) {
  const maxTextLength = maxLength - urlLength - newlineLength;
  // Truncate at word boundary
  if (tweetText.length > maxTextLength) {
    const truncated = tweetText.substring(0, maxTextLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    tweetText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }
}

// 7. Combine text and URL
const finalText = tweetText + '\n\n' + episodeLink;

return [{
  json: {
    text: finalText,
    original_text: claudeResponse.content[0].text,
    cleaned_text: tweetText,
    url: episodeLink,
    length: finalText.length
  }
}];
```

## Update "Post to Twitter" Node

Change the body parameter from:
```
={{$json["content"][0]["text"]}}\n\n{{$('Check If Posted').first().json.episodeLink}}
```

To:
```
={{$('Clean Twitter Text').first().json.text}}
```

## Test First

Before the "Post to Twitter" node, check the "Clean Twitter Text" output:
- Does `text` look correct?
- Is `length` under 280?
- Are there any weird characters?

This should fix text-related 403 errors.

