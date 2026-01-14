# Twitter Clean Text Node - Fixed Code

## Problem

Error: `Referenced node doesn't exist 'Character Rotation'`

The code was trying to reference a node called "Character Rotation" which doesn't exist in the workflow. The correct node name is **"Select Character"**.

## Solution

### Fixed Code (Use This)

```javascript
// Get the tweet text from Claude
const claudeResponse = $input.first().json;
let tweetText = claudeResponse.content[0].text || '';

// Get episodeLink from Select Character node (with error handling)
let episodeLink = '';
try {
  episodeLink = $('Select Character').first().json.episodeLink || '';
} catch (error) {
  // If Select Character not accessible, try to get from Check If Posted
  try {
    episodeLink = $('Check If Posted').first().json.episodeLink || '';
  } catch (e) {
    episodeLink = '';
  }
}

// Clean the text
// 1. Replace smart quotes with regular quotes
tweetText = tweetText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 2. Remove any problematic characters (keep printable ASCII + newlines)
tweetText = tweetText.replace(/[^\x20-\x7E\n\r]/g, '');

// 3. Replace \n with actual newlines (if needed)
tweetText = tweetText.replace(/\\n/g, '\n');

// 4. Trim whitespace
tweetText = tweetText.trim();

// 5. Truncate if too long (leave room for URL - will be added in Post node)
const maxTextLength = 220; // Leave room for URL + newlines
if (tweetText.length > maxTextLength) {
  // Try to find last complete sentence
  const sentences = tweetText.substring(0, maxTextLength).match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length > 0) {
    tweetText = sentences.join('');
  } else {
    // Fall back to word boundary
    const truncated = tweetText.substring(0, maxTextLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    tweetText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }
}

return [{
  json: {
    cleaned_text: tweetText,
    original_text: claudeResponse.content[0].text,
    character_length: tweetText.length,
    episodeLink: episodeLink  // CRITICAL: Pass through episodeLink
  }
}];
```

## Key Changes

1. **Fixed node name:** Changed `$('Character Rotation')` to `$('Select Character')`
2. **Added error handling:** Try-catch blocks to handle cases where nodes aren't accessible
3. **Adjusted max length:** Changed from 250 to 220 to leave proper room for URL
4. **Better truncation:** Added sentence boundary detection before word boundary fallback

## Node Structure in Workflow

The workflow nodes are:
- `Check If Posted` → provides episodeLink, episodeNumber, episodeTitle, episodeDescription
- `Select Character` → adds characterPrompt, character, characterName, and passes through episodeLink
- `Generate Tweet via Claude` → generates tweet text
- `Clean Twitter Text` → **THIS NODE** (use fixed code above)
- `Post to Twitter` → uses `cleaned_text` + `episodeLink` from Clean Twitter Text node

## How to Apply

1. Open your n8n workflow
2. Find the "Clean Twitter Text" Code node
3. Replace the code with the fixed version above
4. Save and test

The node should now:
- ✅ Reference the correct node name ("Select Character")
- ✅ Handle errors gracefully if nodes aren't accessible
- ✅ Pass through episodeLink correctly
- ✅ Clean text properly for Twitter
