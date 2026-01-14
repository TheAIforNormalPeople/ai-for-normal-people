// Simple version - just cleans text, URL added in Post node
// Get the tweet text from Claude
const claudeResponse = $input.first().json;
let tweetText = claudeResponse.content[0].text || '';

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
  const truncated = tweetText.substring(0, maxTextLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  tweetText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

return [{
  json: {
    cleaned_text: tweetText,
    original_text: claudeResponse.content[0].text,
    length: tweetText.length
  }
}];

