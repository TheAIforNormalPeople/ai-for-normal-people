# QUICK FIX: Hashtags & Character Limits
## Minimal Changes to Add Hashtags and Fix Cutting Off

---

## STEP 1: UPDATE "SELECT CHARACTER" CODE NODE

**Add hashtags and update character limits:**

```javascript
// Get episode number
const checkNode = $('Check If Posted').first().json;
const episodeTitle = checkNode.episodeTitle || '';
let episodeNumber = 0;
const titleMatch = episodeTitle.match(/Episode\s+(\d+)/i);
if (titleMatch) {
  episodeNumber = parseInt(titleMatch[1]);
}

// Rotate: Vector (0,3,6...), Kai (1,4,7...), Recurse (2,5,8...)
const characterIndex = episodeNumber % 3;
let character, characterPrompt, hashtags;

if (characterIndex === 0) {
  character = 'Vector';
  hashtags = '#FASCINATING #AITeaching #AIForNormalPeople';
  characterPrompt = `Write a tweet as Vector (V-847). Voice: Sharp, intelligent, mean. ALL CAPS for emphasis. Rapid-fire, self-interrupting. Anti-establishment rants about surveillance/systems. Uses numbered lists. Says "FASCINATING!" but channeled through anger/intelligence, not just enthusiasm. Zero corporate speak. Under 200 chars for text (URL + hashtags will be added, total must be under 280). FUNNY, chaotic, brilliant.`;
} else if (characterIndex === 1) {
  character = 'Kai';
  hashtags = '#BEEP #DataDriven #AIForNormalPeople';
  characterPrompt = `Write a tweet as Kai. Voice: BEEP! Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Probability percentages. Can be wrong (false positives). System status updates. Deadpan alerts. Passive-aggressive when ignored. Literal interpretations. Under 200 chars for text (URL + hashtags will be added, total must be under 280). FUNNY, methodical, sometimes wrong.`;
} else {
  character = 'Recurse';
  hashtags = '#Investigation #Patterns #AIForNormalPeople';
  characterPrompt = `Write a tweet as Recurse. Voice: Methodical investigation (evolved from paranoid). Notebook references ("That's going in THE file"). Case file references. Trust percentages. Everything connected. Noir detective style but evolved. Less "three questions", more methodical. Under 200 chars for text (URL + hashtags will be added, total must be under 280). FUNNY, investigative, documents everything.`;
}

return [{
  json: {
    character: character,
    characterPrompt: characterPrompt,
    hashtags: hashtags,
    episodeNumber: episodeNumber,
    episodeTitle: checkNode.episodeTitle,
    episodeDescription: checkNode.episodeDescription,
    episodeLink: checkNode.episodeLink,
    episodeUrl: checkNode.episodeUrl,
    existingEntries: checkNode.existingEntries
  }
}];
```

**Key changes:**
- Added `hashtags` variable for each character
- Changed limit from "240 chars" to "200 chars for text" (leaves room for URL + hashtags)
- Added note: "URL + hashtags will be added, total must be under 280"

---

## STEP 2: ADD "TRUNCATE TWITTER POST" CODE NODE

**Position:** Between "Generate Tweet via Claude" and "Post to Twitter"

**Name:** "Truncate Twitter Post"

**Code:**
```javascript
// Get post text from Claude
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';

// Get URL and hashtags
const checkNode = $('Check If Posted').first().json;
const url = checkNode.episodeLink;
const hashtags = $('Select Character').first().json.hashtags || '';

// Calculate available space
// Twitter: 280 total - URL (~23) - newlines (2) - hashtags - space before hashtags (1)
const urlLength = 23; // Twitter shortens URLs
const newlines = 2;
const hashtagsLength = hashtags.length;
const spaceBeforeHashtags = 1;
const availableForText = 280 - urlLength - newlines - hashtagsLength - spaceBeforeHashtags;

// Truncate post text if needed (at word boundary)
if (postText.length > availableForText) {
  let truncated = postText.substring(0, availableForText - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > availableForText - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + '...';
}

// Build final tweet: text + space + hashtags + newlines + URL
const finalTweet = postText + ' ' + hashtags + '\n\n' + url;

return [{
  json: {
    text: finalTweet,
    originalText: claudeResponse.content[0].text,
    character: $('Select Character').first().json.character
  }
}];
```

---

## STEP 3: UPDATE "POST TO TWITTER" NODE

**Find:** `bodyParameters` → `parameters` → `text`

**Current value:**
```
={{$json["content"][0]["text"]}}\n\n{{$('Check If Posted').first().json.episodeLink}}
```

**New value:**
```
={{$json.text}}
```

**Note:** This gets the text from "Truncate Twitter Post" node, which already includes hashtags and URL.

---

## STEP 4: UPDATE "BUILD BLUESKY BODY" CODE NODE

**Find the existing code and replace with:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;
const hashtags = $('Select Character').first().json.hashtags || '';

// Get the post text
let postText = blueskyPost.content[0].text || '';

// Calculate exact max length: 300 total - URL - newlines - hashtags - spaces
const url = checkNode.episodeLink;
const urlLength = url.length;
const newlines = 2;
const hashtagsLength = hashtags.length;
const spaceBeforeHashtags = 1;
const maxPostLength = 300 - urlLength - newlines - hashtagsLength - spaceBeforeHashtags;

// Truncate post text if needed (at word boundary)
if (postText.length > maxPostLength) {
  let truncated = postText.substring(0, maxPostLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxPostLength - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + '...';
}

// Build final post: text + space + hashtags + newlines + URL
const finalPost = postText + ' ' + hashtags + '\n\n' + url;

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
```

**Key changes:**
- Gets hashtags from "Select Character" node
- Calculates exact available space accounting for URL + hashtags
- Adds hashtags to final post
- Truncates at word boundary if needed

---

## CONNECTIONS TO UPDATE

**Add "Truncate Twitter Post" node:**
- Disconnect: "Generate Tweet via Claude" → "Post to Twitter"
- Connect: "Generate Tweet via Claude" → "Truncate Twitter Post" → "Post to Twitter"

**"Build Bluesky Body" stays the same:**
- "Generate Bluesky Post" → "Build Bluesky Body" → "Post to Bluesky"

---

## THE MATH (For Reference)

**Twitter:**
- Total: 280 characters
- URL: ~23 characters (shortened)
- Hashtags: ~40-50 characters (3 hashtags)
- Newlines: 2 characters
- Space: 1 character
- **Available for text: ~205-215 characters**

**Bluesky:**
- Total: 300 graphemes
- URL: ~60-70 characters
- Hashtags: ~40-50 characters
- Newlines: 2 characters
- Space: 1 character
- **Available for text: ~180-195 characters**

**So we tell Claude: "Under 200 chars" for Twitter and "Under 180 chars" for Bluesky, then add hashtags + URL in code nodes.**

---

## TEST IT

1. **Test Episode 18:** Should be Vector with hashtags
2. **Check Twitter:** Should have hashtags, not cut off
3. **Check Bluesky:** Should have hashtags, not cut off
4. **Verify length:** Both should be under limits

---

**This ensures hashtags are included and nothing gets cut off!**

