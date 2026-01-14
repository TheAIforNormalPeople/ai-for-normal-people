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
// 1. Remove character count patterns that Claude might add (like "(147 characters)" or "(X chars)")
tweetText = tweetText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// 2. Replace smart quotes with regular quotes
tweetText = tweetText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 3. Remove any problematic characters (keep printable ASCII + newlines)
tweetText = tweetText.replace(/[^\x20-\x7E\n\r]/g, '');

// 4. Replace \n with actual newlines (if needed)
tweetText = tweetText.replace(/\\n/g, '\n');

// 5. Trim whitespace
tweetText = tweetText.trim();

// 6. Truncate if too long (Twitter: 280, URL: ~23, newlines: 2, safety: 5)
// Leave room for URL which will be added in Post node
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
