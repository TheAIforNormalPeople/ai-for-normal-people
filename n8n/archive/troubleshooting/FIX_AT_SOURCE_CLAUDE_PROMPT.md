# FIX AT SOURCE: CLAUDE GENERATION
## Make Claude Generate Shorter Posts (No Truncation Needed)

**Problem:** Posts are too long, getting cut off with "..."  
**Solution:** Fix in "Generate Bluesky Post" Claude node - tell Claude to generate shorter posts that fit.

---

## UPDATE "GENERATE BLUESKY POST" CLAUDE NODE

### Current Problem:
- Claude generates posts that are too long
- "Build Bluesky Body" truncates them, adding "..."
- Looks bad

### Solution:
- Tell Claude the EXACT limit
- Be very strict about length
- Generate posts that fit without truncation

---

## STEP 1: UPDATE "GENERATE BLUESKY POST" MESSAGES PARAMETER

**Find:** `bodyParameters` → `parameters` → `messages`

**Current value (probably):**
```
=[{"role": "user", "content": "Write a tweet as Vector... Keep it under 280 characters... Post title: {{$json.episodeTitle}} Description: {{$json.episodeDescription}}"}]
```

**New value (if "Select Character" exists):**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nCRITICAL: Write ONLY the post text. No quotes/markdown. Maximum 170 characters for text (URL ~65 chars + hashtags ~45 chars + newlines 2 = 282 total, must be under 300). Be concise. End naturally - no ellipsis needed."}]
```

**New value (if "Select Character" doesn't exist yet):**
```
=[{"role": "user", "content": "Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting. Sharp, intelligent, mean. Anti-establishment rants. Uses numbered lists. Zero corporate speak. CRITICAL: Maximum 170 characters for text (URL ~65 chars + hashtags ~45 chars + newlines 2 = 282 total, must be under 300). Be concise. End naturally - no ellipsis needed. Make it FUNNY and engaging.\n\nTitle: {{$json.episodeTitle}}\nDesc: {{$json.episodeDescription}}\n\nWrite ONLY the post text. No quotes/markdown. Just text."}]
```

**Key changes:**
- "Maximum 170 characters" (very strict)
- "URL ~65 chars + hashtags ~45 chars + newlines 2 = 282 total"
- "End naturally - no ellipsis needed"
- "Be concise"

---

## STEP 2: UPDATE "SELECT CHARACTER" PROMPTS (If Using)

**Update each character prompt to be more strict:**

**Vector:**
```
Write a tweet as Vector (V-847). Voice: Sharp, intelligent, mean. ALL CAPS for emphasis. Rapid-fire, self-interrupting. Anti-establishment rants about surveillance/systems. Uses numbered lists. Says "FASCINATING!" but channeled through anger/intelligence, not just enthusiasm. Zero corporate speak. CRITICAL: Maximum 170 characters for text (URL + hashtags will be added, total must be under 300). Be concise. End naturally. FUNNY, chaotic, brilliant.
```

**Kai:**
```
Write a tweet as Kai. Voice: BEEP! Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Probability percentages. Can be wrong (false positives). System status updates. Deadpan alerts. Passive-aggressive when ignored. Literal interpretations. CRITICAL: Maximum 170 characters for text (URL + hashtags will be added, total must be under 300). Be concise. End naturally. FUNNY, methodical, sometimes wrong.
```

**Recurse:**
```
Write a tweet as Recurse. Voice: Methodical investigation (evolved from paranoid). Notebook references ("That's going in THE file"). Case file references. Trust percentages. Everything connected. Noir detective style but evolved. Less "three questions", more methodical. CRITICAL: Maximum 170 characters for text (URL + hashtags will be added, total must be under 300). Be concise. End naturally. FUNNY, investigative, documents everything.
```

---

## STEP 3: SIMPLIFY "BUILD BLUESKY BODY" (No Truncation)

**Since Claude will generate the right length, simplify the code:**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Get the post text (should already be the right length from Claude)
let postText = blueskyPost.content[0].text || '';

// Try to get hashtags from "Select Character" node (if it exists)
let hashtags = '';
try {
  const selectCharacterNode = $('Select Character');
  if (selectCharacterNode && selectCharacterNode.first()) {
    hashtags = selectCharacterNode.first().json.hashtags || '';
  }
} catch (error) {
  // "Select Character" node doesn't exist yet, skip hashtags
  hashtags = '';
}

// Build final post: text + hashtags (if any) + URL
let finalPost = postText;
if (hashtags) {
  finalPost = postText + ' ' + hashtags + '\n\n' + checkNode.episodeLink;
} else {
  finalPost = postText + '\n\n' + checkNode.episodeLink;
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
```

**No truncation!** Claude generates the right length, we just add hashtags + URL.

---

## THE MATH (For Claude)

**Tell Claude:**
- Text: Maximum 170 characters
- URL: ~65 characters (will be added)
- Hashtags: ~45 characters (will be added)
- Newlines: 2 characters (will be added)
- **Total: ~282 characters (under 300 limit)**

**So Claude generates 170 chars, we add 112 chars (URL + hashtags + newlines) = 282 total ✅**

---

## ALSO UPDATE TWITTER

**Same approach for "Generate Tweet via Claude":**

**Update `messages` parameter to:**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nCRITICAL: Write ONLY the tweet text. No quotes/markdown. Maximum 210 characters for text (URL ~23 chars + hashtags ~45 chars + newlines 2 = 280 total). Be concise. End naturally - no ellipsis needed."}]
```

**Or if "Select Character" doesn't exist:**
```
=[{"role": "user", "content": "Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting. Sharp, intelligent, mean. Anti-establishment rants. Uses numbered lists. Zero corporate speak. CRITICAL: Maximum 210 characters for text (URL ~23 chars + hashtags ~45 chars + newlines 2 = 280 total). Be concise. End naturally - no ellipsis needed. Make it FUNNY and engaging.\n\nTitle: {{$json.episodeTitle}}\nDesc: {{$json.episodeDescription}}\n\nWrite ONLY the tweet text. No quotes/markdown. Just text."}]
```

---

## QUICK CHECKLIST

- [ ] Update "Generate Bluesky Post" `messages` parameter (say "Maximum 170 characters")
- [ ] Update "Generate Tweet via Claude" `messages` parameter (say "Maximum 210 characters")
- [ ] Simplify "Build Bluesky Body" code (remove truncation, just add hashtags + URL)
- [ ] Test - posts should fit without truncation

---

**This fixes it at the source - Claude generates the right length, no truncation needed!**

