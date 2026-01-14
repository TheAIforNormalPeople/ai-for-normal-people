// Get the Bluesky post text from Claude
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';

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

// Clean the text (same improvements as Twitter)
// 1. Remove character count patterns that Claude might add (like "(147 characters)" or "(X chars)")
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// 2. Replace smart quotes with regular quotes
postText = postText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 3. Remove any problematic characters (keep printable ASCII + newlines)
postText = postText.replace(/[^\x20-\x7E\n\r]/g, '');

// 4. Replace \n with actual newlines (if needed)
postText = postText.replace(/\\n/g, '\n');

// 5. Trim whitespace
postText = postText.trim();

// 6. Calculate max length for Bluesky (300 characters total - URL - newlines)
// URL is typically ~23 chars, newlines are 2, safety buffer: 5
const urlLength = episodeLink ? episodeLink.length : 0;
const newlines = 2; // \n\n
const safetyBuffer = 5;
const maxPostLength = 300 - urlLength - newlines - safetyBuffer;

// Truncate if too long
if (postText.length > maxPostLength) {
  // Try to find last complete sentence
  const sentences = postText.substring(0, maxPostLength).match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length > 0) {
    postText = sentences.join('');
  } else {
    // Fall back to word boundary
    const truncated = postText.substring(0, maxPostLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    postText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }
}

return [{
  json: {
    cleaned_text: postText,
    original_text: claudeResponse.content[0].text,
    character_length: postText.length,
    episodeLink: episodeLink,  // CRITICAL: Pass through episodeLink
    // Build final post text with URL
    final_post: episodeLink ? `${postText}\n\n${episodeLink}` : postText
  }
}];
