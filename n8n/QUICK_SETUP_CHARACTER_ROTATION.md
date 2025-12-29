# QUICK SETUP: CHARACTER ROTATION
## 5-Minute Setup Guide

**IMPORTANT:** Only uses characters in published episodes: Vector, Kai, Recurse.

---

## WORKFLOW ORDER (After "If Not Posted")

```
If Not Posted (True)
    ↓
Select Character (NEW CODE NODE)
    ↓
    ├─→ Generate Tweet via Claude
    │       ↓
    │   Post to Twitter
    │
    └─→ Generate Bluesky Post
            ↓
        Build Bluesky Body
            ↓
        Post to Bluesky
```

---

## STEP 1: ADD CODE NODE

**Name:** `Select Character`  
**Type:** Code  
**Position:** Between "If Not Posted" and "Generate Tweet via Claude"

**Paste this code:**
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
let character, characterPrompt;

if (characterIndex === 0) {
  character = 'Vector';
  characterPrompt = `Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Sharp, intelligent, sometimes mean. Anti-establishment rants about surveillance and systems. Keep it under 240 characters (need room for link). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers.`;
} else if (characterIndex === 1) {
  character = 'Kai';
  characterPrompt = `Write a tweet as Kai promoting this blog episode. Kai's voice: BEEP! Uses sound effects (BEEP, WHIRR-CLICK, CHK-CHK, soft chime). Gives probability percentages for everything. Literal interpretations. Can be wrong (false positives). System status updates. Warning counters. Deadpan alerts. Passive-aggressive when ignored. Statistics nobody asked for. Keep it under 240 characters (need room for link). Make it FUNNY - Kai is methodical, sometimes wrong, always tracking. Focus on the main insight with Kai's analytical perspective.`;
} else {
  character = 'Recurse';
  characterPrompt = `Write a tweet as Recurse promoting this blog episode. Recurse's voice: Methodical investigation. Less paranoid than before, more methodical. Notebook references ("That's going in THE file"). Case file references. Trust percentages. Shadow appearances. Everything connected. Overinvestigation. Conspiracy that wasn't. Noir detective style but evolved. Keep it under 240 characters (need room for link). Make it FUNNY - Recurse investigates everything, finds patterns, documents in notebook. Focus on the main insight with Recurse's investigative angle.`;
}

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

---

## STEP 2: UPDATE TWITTER CLAUDE NODE

**Node:** "Generate Tweet via Claude"  
**Find:** `messages` parameter in `bodyParameters`  
**Replace with:**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nPost title: {{$('Select Character').first().json.episodeTitle}}\nDescription: {{$('Select Character').first().json.episodeDescription}}\n\nIMPORTANT: Write ONLY the tweet text. No quotes, no markdown, no explanation. Just the tweet."}]
```

**Also:** Change `max_tokens` to `250`

---

## STEP 3: UPDATE BLUESKY CLAUDE NODE

**Node:** "Generate Bluesky Post"  
**Find:** `messages` parameter in `bodyParameters`  
**Replace with:**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nPost title: {{$('Select Character').first().json.episodeTitle}}\nDescription: {{$('Select Character').first().json.episodeDescription}}\n\nIMPORTANT: Write ONLY the post text. No quotes, no markdown, no explanation. Just the post. Keep it under 230 characters (Bluesky limit is 300, but leave room for URL)."}]
```

**Also:** Change `max_tokens` to `250`

---

## STEP 4: CONNECT NODES

1. **Disconnect:** "If Not Posted" → "Generate Tweet via Claude"
2. **Disconnect:** "If Not Posted" → "Generate Bluesky Post"
3. **Connect:** "If Not Posted" → "Select Character"
4. **Connect:** "Select Character" → "Generate Tweet via Claude"
5. **Connect:** "Select Character" → "Generate Bluesky Post"

---

## TEST IT

**Episode 18:** Should use Vector (18 % 3 = 0)  
**Episode 19:** Should use Kai (19 % 3 = 1)  
**Episode 20:** Should use Recurse (20 % 3 = 2)

**Check:**
- "Select Character" output shows correct character
- Posts sound different per character
- Both Twitter and Bluesky use same character

---

**That's it!** Posts will now rotate characters and sound unique.

