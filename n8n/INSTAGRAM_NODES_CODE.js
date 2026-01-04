// Instagram Node Code Snippets for n8n Workflow

// ============================================
// NODE 1: Generate Instagram Post via Claude
// ============================================
// This is an HTTP Request node, not Code node
// Use the JSON configuration from INSTAGRAM_NODES_SETUP.md

// ============================================
// NODE 2: Clean Instagram Text
// ============================================
// Code node - paste this into the JavaScript code field

// Get the Instagram post text from Claude
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';

// Clean the text
// 1. Replace smart quotes with regular quotes
postText = postText.replace(/[""]/g, '"').replace(/['']/g, "'");

// 2. Remove any problematic characters (keep printable ASCII + newlines)
postText = postText.replace(/[^\x20-\x7E\n\r]/g, '');

// 3. Replace \n with actual newlines (if needed)
postText = postText.replace(/\\n/g, '\n');

// 4. Trim whitespace
postText = postText.trim();

// 5. Instagram caption limit is 2200 characters (leave room for URL)
const maxTextLength = 2100; // Leave room for URL + newlines
if (postText.length > maxTextLength) {
  const truncated = postText.substring(0, maxTextLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  postText = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

// 6. Get episode link
const episodeLink = $('Select Character').first().json.episodeLink || '';

// 7. Combine text and URL (Instagram allows links in captions, but they're not clickable)
const finalText = postText + '\n\n👉 Link in bio: ' + episodeLink;

return [{
  json: {
    cleaned_text: postText,
    final_caption: finalText,
    original_text: claudeResponse.content[0].text,
    length: finalText.length,
    episodeLink: episodeLink
  }
}];

// ============================================
// NODE 3: Log Instagram to JSON
// ============================================
// Code node - paste this into the JavaScript code field

// Get data from previous nodes
const checkNode = $('Check If Posted').first().json;
const episodeUrl = checkNode.episodeUrl;
const episodeLink = checkNode.episodeLink;
const platform = 'Instagram';
const postText = $('Clean Instagram Text').first().json.final_caption || $('Generate Instagram Post via Claude').first().json.content[0].text;

// Get post ID from Instagram API response
const instagramResponse = $input.first().json;
const postId = instagramResponse.id || '';

// Create new entry
const newEntry = {
  url: episodeUrl,
  platform: platform,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: postId ? `https://www.instagram.com/p/${postId}/` : '',
  status: 'posted'
};

// Pass existing data along for merging
const existingData = checkNode.existingEntries || [];

// Return entry with existing data
return [{
  json: {
    platform: platform,
    entry: newEntry,
    episodeUrl: episodeUrl,
    existingData: existingData
  }
}];

