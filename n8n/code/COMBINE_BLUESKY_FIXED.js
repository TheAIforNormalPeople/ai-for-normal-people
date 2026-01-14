// Get token from previous node (Get Bluesky Token)
const tokenResponse = $input.first().json;
const accessToken = tokenResponse.accessJwt;

// Rebuild postBody from accessible nodes
const blueskyPost = $('Generate Bluesky Post').first().json;
const checkNode = $('Check If Posted').first().json;

// Get episode link
const episodeLink = checkNode.episodeLink;

// Calculate exact space needed for URL + newlines
const urlAndNewlines = "\n\n" + episodeLink;
const urlAndNewlinesLength = urlAndNewlines.length;

// Calculate max length for post text (300 - URL length)
const maxPostTextLength = 300 - urlAndNewlinesLength;

// Get post text from Claude and REMOVE CHARACTER COUNT
let postText = blueskyPost.content[0].text;

// Remove character count patterns that Claude might add (like "(147 characters)")
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// Trim whitespace after removing character count
postText = postText.trim();

// Truncate post text
if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}

// Build the postBody
const postBody = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: postText + urlAndNewlines,
    createdAt: new Date().toISOString()
  }
};

// Final safety check
const finalText = postBody.record.text;
if (finalText.length > 300) {
  // Emergency truncation if somehow still over
  const overage = finalText.length - 300;
  postText = postText.substring(0, postText.length - overage - 3) + "...";
  postBody.record.text = postText + urlAndNewlines;
}

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
