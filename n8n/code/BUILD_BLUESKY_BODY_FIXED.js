// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text from Claude
let postText = blueskyPost.content[0].text || '';

// CLEAN THE TEXT FIRST - Remove character count patterns that Claude might add
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

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

// Truncate post text if it's too long (at sentence or word boundary)
if (postText.length > maxPostLength) {
  // First try to truncate at sentence boundary (., !, ?)
  let truncated = postText.substring(0, maxPostLength - 3);
  const sentenceEnd = Math.max(
    truncated.lastIndexOf('. '),
    truncated.lastIndexOf('! '),
    truncated.lastIndexOf('? ')
  );
  
  if (sentenceEnd > maxPostLength - 50 && sentenceEnd > 0) {
    // Found sentence end near the limit, use it
    truncated = postText.substring(0, sentenceEnd + 1);
  } else {
    // No sentence end, try word boundary
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > truncated.length - 30 && lastSpace > 0) {
      truncated = truncated.substring(0, lastSpace);
    }
    truncated = truncated + '...';
  }
  
  postText = truncated;
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
