# FIX CHARACTER LIMITS & ADD HASHTAGS
## Don't Cut Off Tweets - Account for URL + Hashtags

**Problem:** 240/230 character limits cut off tweets and hashtags when URL is added.  
**Solution:** Calculate exact available space, include hashtags in prompt, add truncation if needed.

---

## THE MATH

**Twitter:**
- Total limit: 280 characters
- URL length: ~23 characters (shortened)
- Newlines: 2 characters (`\n\n`)
- **Available for text + hashtags: ~255 characters**

**Bluesky:**
- Total limit: 300 graphemes
- URL length: ~60-70 characters (full URL)
- Newlines: 2 characters (`\n\n`)
- **Available for text + hashtags: ~230-240 characters**

---

## SOLUTION 1: UPDATE PROMPTS TO INCLUDE HASHTAGS

### Update "Select Character" Code Node

**Add hashtag generation to each character:**

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
  // Vector
  character = 'Vector';
  hashtags = '#FASCINATING #AITeaching #AIForNormalPeople';
  characterPrompt = `Write a tweet as Vector (V-847). Voice: Sharp, intelligent, mean. ALL CAPS for emphasis. Rapid-fire, self-interrupting. Anti-establishment rants about surveillance/systems. Uses numbered lists. Says "FASCINATING!" but channeled through anger/intelligence, not just enthusiasm. Zero corporate speak. Under 230 chars (need room for URL + hashtags). FUNNY, chaotic, brilliant. Include hashtags: ${hashtags}`;
} else if (characterIndex === 1) {
  // Kai
  character = 'Kai';
  hashtags = '#BEEP #DataDriven #AIForNormalPeople';
  characterPrompt = `Write a tweet as Kai. Voice: BEEP! Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Probability percentages. Can be wrong (false positives). System status updates. Deadpan alerts. Passive-aggressive when ignored. Literal interpretations. Under 230 chars (need room for URL + hashtags). FUNNY, methodical, sometimes wrong. Include hashtags: ${hashtags}`;
} else {
  // Recurse
  character = 'Recurse';
  hashtags = '#Investigation #Patterns #AIForNormalPeople';
  characterPrompt = `Write a tweet as Recurse. Voice: Methodical investigation (evolved from paranoid). Notebook references ("That's going in THE file"). Case file references. Trust percentages. Everything connected. Noir detective style but evolved. Less "three questions", more methodical. Under 230 chars (need room for URL + hashtags). FUNNY, investigative, documents everything. Include hashtags: ${hashtags}`;
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

---

## SOLUTION 2: ADD TRUNCATION CODE NODES

### For Twitter: Add "Truncate Twitter Post" Code Node

**Position:** Between "Generate Tweet via Claude" and "Post to Twitter"

**Code:**
```javascript
// Get post text and URL
const claudeResponse = $input.first().json;
let postText = claudeResponse.content[0].text || '';
const checkNode = $('Check If Posted').first().json;
const url = checkNode.episodeLink;
const hashtags = $('Select Character').first().json.hashtags || '';

// Calculate available space
// Twitter: 280 total - URL (~23) - newlines (2) = ~255
// But we want to be safe, so use 250
const maxTextLength = 250;
const urlLength = 23; // Twitter shortens URLs
const newlines = 2;
const hashtagsLength = hashtags.length;
const availableForText = maxTextLength - urlLength - newlines - hashtagsLength;

// Truncate post text if needed (at word boundary)
if (postText.length > availableForText) {
  let truncated = postText.substring(0, availableForText - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > availableForText - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + '...';
}

// Build final tweet: text + hashtags + URL
const finalTweet = postText + ' ' + hashtags + '\n\n' + url;

return [{
  json: {
    text: finalTweet,
    originalText: claudeResponse.content[0].text,
    character: $('Select Character').first().json.character
  }
}];
```

**Then update "Post to Twitter" node:**
- Change `text` parameter from `={{$json["content"][0]["text"]}}\n\n{{$('Check If Posted').first().json.episodeLink}}`
- To: `={{$json.text}}`

---

### For Bluesky: Update "Build Bluesky Body" Code Node

**Current code truncates, but update it:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;
const hashtags = $('Select Character').first().json.hashtags || '';

// Get the post text
let postText = blueskyPost.content[0].text || '';

// Calculate exact max length: 300 total - URL - newlines - hashtags
const url = checkNode.episodeLink;
const urlLength = url.length;
const newlines = 2;
const hashtagsLength = hashtags.length + 1; // +1 for space before hashtags
const maxPostLength = 300 - urlLength - newlines - hashtagsLength;

// Truncate post text if needed (at word boundary)
if (postText.length > maxPostLength) {
  let truncated = postText.substring(0, maxPostLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxPostLength - 20) {
    truncated = truncated.substring(0, lastSpace);
  }
  postText = truncated + '...';
}

// Build final post: text + hashtags + URL
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

---

## SOLUTION 3: UPDATE PROMPTS TO BE MORE PRECISE

### Twitter Claude Node Prompt:

**Current:**
```
Under 240 chars (need room for link)
```

**New:**
```
Under 230 chars for text (URL + hashtags will be added separately, total must be under 280)
```

### Bluesky Claude Node Prompt:

**Current:**
```
Under 230 chars (Bluesky limit is 300, but leave room for URL)
```

**New:**
```
Under 220 chars for text (URL + hashtags will be added separately, total must be under 300 graphemes)
```

---

## RECOMMENDED APPROACH

**Best solution:** Use Solution 1 + Solution 2

1. **Update "Select Character"** to include hashtags in prompt
2. **Add "Truncate Twitter Post" Code node** (calculates exact space, adds hashtags, truncates if needed)
3. **Update "Build Bluesky Body"** to include hashtags and calculate exact space

**This way:**
- Claude generates text within limits
- Code nodes add hashtags and URL
- Truncation happens if needed (at word boundaries)
- Nothing gets cut off unexpectedly

---

## QUICK FIX (MINIMAL CHANGES)

**If you want minimal changes:**

1. **Update "Select Character" prompts:**
   - Change "Under 240 chars" to "Under 230 chars (URL + hashtags will be added)"
   - Add hashtags to prompt: "Include hashtags: #FASCINATING #AITeaching #AIForNormalPeople"

2. **Update "Build Bluesky Body"** to add hashtags:
   - Add hashtags variable
   - Include in final post text

3. **Add truncation** if posts are still too long

---

**This ensures hashtags are included and nothing gets cut off!**

