// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text from Claude
let postText = blueskyPost.content[0].text || '';

// Get hashtags from Select Character node (if it exists)
let hashtags = '';
try {
  const selectCharacterNode = $('Select Character');
  if (selectCharacterNode && selectCharacterNode.first()) {
    hashtags = selectCharacterNode.first().json.hashtags || '';
  }
} catch (error) {
  // Select Character node doesn't exist, skip hashtags
}

// Calculate what we need to add: URL + newlines + hashtags + spaces
const url = checkNode.episodeLink;
const urlLength = url.length;
const newlines = 2; // \n\n
const hashtagsLength = hashtags ? hashtags.length + 1 : 0; // +1 for space before hashtags
const reservedLength = urlLength + newlines + hashtagsLength;

// Calculate max length for post text: 300 total - reserved space
const maxPostLength = 300 - reservedLength;

// Truncate post text if it's too long (at word boundary)
if (postText.length > maxPostLength) {
  // Truncate to max length
  let truncated = postText.substring(0, maxPostLength - 3);
  
  // Find last space (word boundary) in the last 30 characters
  const lastSpace = truncated.lastIndexOf(' ');
  
  // If we found a space near the end, use it (within last 30 chars)
  if (lastSpace > truncated.length - 30 && lastSpace > 0) {
    truncated = truncated.substring(0, lastSpace);
  }
  
  // Add ellipsis
  postText = truncated + '...';
}

// Build final post: text + hashtags (if any) + URL
let finalPost = postText;
if (hashtags) {
  finalPost = postText + ' ' + hashtags + '\n\n' + url;
} else {
  finalPost = postText + '\n\n' + url;
}

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: finalPost,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];

