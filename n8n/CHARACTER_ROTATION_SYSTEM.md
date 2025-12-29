# CHARACTER ROTATION SYSTEM FOR SOCIAL POSTS
## Make posts unique by rotating character voices

**Problem:** All posts sound the same even with different content.  
**Solution:** Rotate characters (Vector, Kai, Recurse) based on episode number.

---

## STEP 1: ADD "SELECT CHARACTER" CODE NODE

**Location:** Between "If Not Posted" and "Generate Tweet via Claude"

### Create the Node:
1. Click on "If Not Posted" node
2. Click the **+** button to add a new node
3. Search for **"Code"** and select it
4. Name it: **"Select Character"**

### Code to Paste:
```javascript
// Get episode number from title or URL
const checkNode = $('Check If Posted').first().json;
const episodeTitle = checkNode.episodeTitle || '';
const episodeUrl = checkNode.episodeUrl || '';

// Extract episode number from title (e.g., "Episode 18: ...")
let episodeNumber = 0;
const titleMatch = episodeTitle.match(/Episode\s+(\d+)/i);
if (titleMatch) {
  episodeNumber = parseInt(titleMatch[1]);
} else {
  // Fallback: try to extract from URL
  const urlMatch = episodeUrl.match(/episode-(\d+)/i);
  if (urlMatch) {
    episodeNumber = parseInt(urlMatch[1]);
  }
}

// Rotate characters: Vector (0,3,6...), Kai (1,4,7...), Recurse (2,5,8...)
const characterIndex = episodeNumber % 3;
let character, characterPrompt;

if (characterIndex === 0) {
  // Vector
  character = 'Vector';
  characterPrompt = `Write a tweet as Vector (V-847) promoting this blog episode. 

Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Sharp, intelligent, sometimes mean. Anti-establishment rants about surveillance and systems. 

Keep it under 240 characters (need room for link). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers.`;
} else if (characterIndex === 1) {
  // Kai
  character = 'Kai';
  characterPrompt = `Write a tweet as Kai promoting this blog episode.

Kai's voice: BEEP! Uses sound effects (BEEP, WHIRR-CLICK, CHK-CHK, soft chime). Gives probability percentages for everything. Literal interpretations. Can be wrong (false positives). System status updates. Warning counters. Deadpan alerts. Passive-aggressive when ignored. Statistics nobody asked for.

Keep it under 240 characters (need room for link). Make it FUNNY - Kai is methodical, sometimes wrong, always tracking. Focus on the main insight with Kai's analytical perspective.`;
} else {
  // Recurse
  character = 'Recurse';
  characterPrompt = `Write a tweet as Recurse promoting this blog episode.

Recurse's voice: Methodical investigation. Less paranoid than before, more methodical. Notebook references ("That's going in THE file"). Case file references. Trust percentages. Shadow appearances. Everything connected. Overinvestigation. Conspiracy that wasn't. Noir detective style but evolved.

Keep it under 240 characters (need room for link). Make it FUNNY - Recurse investigates everything, finds patterns, documents in notebook. Focus on the main insight with Recurse's investigative angle.`;
}

// Return character info
return [{
  json: {
    character: character,
    characterPrompt: characterPrompt,
    episodeNumber: episodeNumber,
    episodeTitle: checkNode.episodeTitle,
    episodeDescription: checkNode.episodeDescription,
    episodeLink: checkNode.episodeLink,
    episodeUrl: checkNode.episodeUrl,
    existingEntries: checkNode.existingEntries
  }
}];
```

### Connect:
- **From:** "If Not Posted" (True output)
- **To:** "Select Character"
- **Then:** "Select Character" connects to BOTH "Generate Tweet via Claude" AND "Generate Bluesky Post"

---

## STEP 2: UPDATE "GENERATE TWEET VIA CLAUDE" NODE

**Current location:** After "Select Character"

### What to Change:
1. Click on "Generate Tweet via Claude" node
2. Find the `messages` parameter in `bodyParameters`
3. Replace the entire value with:

```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nPost title: {{$('Select Character').first().json.episodeTitle}}\nDescription: {{$('Select Character').first().json.episodeDescription}}\n\nIMPORTANT: Write ONLY the tweet text. No quotes, no markdown, no explanation. Just the tweet."}]
```

### Also Update:
- Change `max_tokens` from `300` to `250` (shorter, more focused)

---

## STEP 3: UPDATE "GENERATE BLUESKY POST" NODE

**Current location:** After "Select Character" (parallel to Twitter)

### What to Change:
1. Click on "Generate Bluesky Post" node
2. Find the `messages` parameter in `bodyParameters`
3. Replace the entire value with:

```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nPost title: {{$('Select Character').first().json.episodeTitle}}\nDescription: {{$('Select Character').first().json.episodeDescription}}\n\nIMPORTANT: Write ONLY the post text. No quotes, no markdown, no explanation. Just the post. Keep it under 230 characters (Bluesky limit is 300, but leave room for URL)."}]
```

### Also Update:
- Change `max_tokens` from `400` to `250` (shorter, more focused)

---

## STEP 4: UPDATE LOGGING NODES (OPTIONAL)

**To track which character posted:**

### "Log Twitter to JSON" - Add character tracking:
Find this line:
```javascript
const postText = $('Generate Tweet via Claude').first().json.content[0].text;
```

Add after it:
```javascript
const character = $('Select Character').first().json.character;
```

Then in the `newEntry` object, add:
```javascript
const newEntry = {
  url: episodeUrl,
  platform: platform,
  character: character,  // ADD THIS
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: tweetId ? `https://twitter.com/username/status/${tweetId}` : '',
  status: 'posted'
};
```

### "Log Bluesky to JSON" - Add character tracking:
Same changes - add `character` field.

---

## CHARACTER ROTATION LOGIC

**Episode Number % 3:**
- **0, 3, 6, 9, 12, 15, 18...** → Vector
- **1, 4, 7, 10, 13, 16, 19...** → Kai  
- **2, 5, 8, 11, 14, 17, 20...** → Recurse

**Example:**
- Episode 18 → 18 % 3 = 0 → Vector
- Episode 19 → 19 % 3 = 1 → Kai
- Episode 20 → 20 % 3 = 2 → Recurse

---

## WHY THIS WORKS

1. **Variety:** Different character = different voice = different posts
2. **Systematic:** Predictable rotation, easy to track
3. **Expandable:** Can add more characters later (Bounce, River)
4. **Character-Specific:** Each character has unique prompt with their voice
5. **No Duplication:** Twitter and Bluesky get same character but different platforms

---

## TESTING

1. **Test with Episode 18:** Should be Vector (18 % 3 = 0)
2. **Test with Episode 19:** Should be Kai (19 % 3 = 1)
3. **Test with Episode 20:** Should be Recurse (20 % 3 = 2)

**Check:**
- Does "Select Character" output show correct character?
- Do Claude nodes receive the character prompt?
- Are posts different from previous episodes?

---

## CURRENT CHARACTERS ONLY

**Only use these characters (they're in published episodes):**
- Vector
- Kai
- Recurse

**NOT using (not in blog yet):**
- Bounce
- River
- Daemon
- Any other characters

**Note:** When new characters appear in episodes, we can add them to rotation.

---

**Last Updated:** After Episode 18  
**Status:** Ready to implement

