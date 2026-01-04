# CHARACTER ROTATION SYSTEM - OPTIMIZED
## Token-Efficient + Character Evolution Tracking

**Goal:** Rotate characters with evolved voices, limit tokens, maintain canon.

**IMPORTANT:** Only uses characters that have appeared in published episodes:
- ✅ Vector
- ✅ Kai
- ✅ Recurse

**NOT using (not in blog yet):** Bounce, River, Daemon, or any other characters.

---

## TOKEN OPTIMIZATION STRATEGY

**Current Problem:** Long prompts = expensive API calls  
**Solution:** Short, focused prompts that reference character evolution

**Token Limits:**
- `max_tokens`: 200 (output - what Claude generates)
- Prompt: ~150-200 tokens (input - what we send)
- Total per call: ~350-400 tokens

---

## STEP 1: OPTIMIZED "SELECT CHARACTER" CODE NODE

**Name:** `Select Character`  
**Code (Token-Optimized):**

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
  // Vector - EVOLVED: Meaner, intelligent, anti-establishment
  character = 'Vector';
  characterPrompt = `Write a tweet as Vector (V-847). Voice: Sharp, intelligent, mean. ALL CAPS for emphasis. Rapid-fire, self-interrupting. Anti-establishment rants about surveillance/systems. Uses numbered lists. Says "FASCINATING!" but channeled through anger/intelligence, not just enthusiasm. Zero corporate speak. Under 240 chars. FUNNY, chaotic, brilliant.`;
} else if (characterIndex === 1) {
  // Kai - EVOLVED: Can be wrong, learning, varied sounds
  character = 'Kai';
  characterPrompt = `Write a tweet as Kai. Voice: BEEP! Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Probability percentages. Can be wrong (false positives). System status updates. Deadpan alerts. Passive-aggressive when ignored. Literal interpretations. Under 240 chars. FUNNY, methodical, sometimes wrong.`;
} else {
  // Recurse - EVOLVED: Less paranoid, more methodical
  character = 'Recurse';
  characterPrompt = `Write a tweet as Recurse. Voice: Methodical investigation (evolved from paranoid). Notebook references ("That's going in THE file"). Case file references. Trust percentages. Everything connected. Noir detective style but evolved. Less "three questions", more methodical. Under 240 chars. FUNNY, investigative, documents everything.`;
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

**Token Count:** ~120-150 tokens per prompt (much shorter!)

---

## STEP 2: OPTIMIZED CLAUDE NODE PROMPTS

### Twitter Node:
**Parameter:** `messages`  
**Value:**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nWrite ONLY tweet text. No quotes/markdown. Just text."}]
```

**Settings:**
- `max_tokens`: 200 (reduced from 300)
- `model`: claude-sonnet-4-20250514

**Token Count:** ~180-220 tokens total per call

### Bluesky Node:
**Parameter:** `messages`  
**Value:**
```
=[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nWrite ONLY post text. No quotes/markdown. Under 230 chars. Just text."}]
```

**Settings:**
- `max_tokens`: 200 (reduced from 400)
- `model`: claude-sonnet-4-20250514

**Token Count:** ~180-220 tokens total per call

---

## STEP 3: CHARACTER EVOLUTION TRACKER

**Create new file:** `aiforhumans/n8n/tracking/character-evolution.json`

**Initial content:**
```json
{
  "lastUpdated": "2025-12-23",
  "characters": {
    "Vector": {
      "evolutionStage": "Episode 18+",
      "keyTraits": [
        "Meaner, more intelligent",
        "Sharp, cutting observations",
        "Anti-establishment rants",
        "Still enthusiastic but channeled through anger",
        "Less 'FASCINATING' spam (being called out)"
      ],
      "lastUsedEpisode": 18,
      "voiceNotes": "Not just enthusiastic - sharp, intelligent, mean. Anti-establishment."
    },
    "Kai": {
      "evolutionStage": "Episode 18+",
      "keyTraits": [
        "Can be wrong (false positives)",
        "Learning to verify before escalating",
        "Varied sounds (WHIRR-CLICK, CHK-CHK, soft chime)",
        "Admits mistakes",
        "Less always-right attitude"
      ],
      "lastUsedEpisode": null,
      "voiceNotes": "Methodical, sometimes wrong, learning."
    },
    "Recurse": {
      "evolutionStage": "Episode 18+",
      "keyTraits": [
        "Less paranoid, more methodical",
        "Evolved from 'three questions' and 'something's fishy'",
        "Notebook references",
        "Case file references",
        "Trust percentages (evolving)"
      ],
      "lastUsedEpisode": null,
      "voiceNotes": "Methodical investigation, evolved from paranoid."
    }
  },
  "rotation": {
    "pattern": "episodeNumber % 3",
    "mapping": {
      "0": "Vector",
      "1": "Kai",
      "2": "Recurse"
    }
  }
}
```

---

## STEP 4: UPDATE LOGGING TO TRACK CHARACTERS

### "Log Twitter to JSON" - Add character tracking:

**Find this section:**
```javascript
const newEntry = {
  url: episodeUrl,
  platform: platform,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: tweetId ? `https://twitter.com/username/status/${tweetId}` : '',
  status: 'posted'
};
```

**Change to:**
```javascript
const character = $('Select Character').first().json.character;
const episodeNumber = $('Select Character').first().json.episodeNumber;

const newEntry = {
  url: episodeUrl,
  platform: platform,
  character: character,
  episodeNumber: episodeNumber,
  postedDate: new Date().toISOString(),
  postText: postText,
  postUrl: tweetId ? `https://twitter.com/username/status/${tweetId}` : '',
  status: 'posted'
};
```

### "Log Bluesky to JSON" - Same changes

---

## STEP 5: CHARACTER EVOLUTION UPDATE CODE (OPTIONAL)

**Create Code node:** "Update Character Evolution"  
**Position:** After logging nodes (optional, for tracking)

**Code:**
```javascript
// Read character evolution file
const evolutionFile = $('Read Character Evolution').first().json.data;
const evolution = JSON.parse(evolutionFile || '{}');

// Get current character
const character = $('Select Character').first().json.character;
const episodeNumber = $('Select Character').first().json.episodeNumber;

// Update last used episode
if (evolution.characters && evolution.characters[character]) {
  evolution.characters[character].lastUsedEpisode = episodeNumber;
  evolution.lastUpdated = new Date().toISOString();
}

// Return updated JSON
return [{
  json: {
    data: JSON.stringify(evolution, null, 2),
    character: character,
    episodeNumber: episodeNumber
  }
}];
```

**Note:** This is optional - only if you want to track character usage in a file.

---

## TOKEN COST COMPARISON

**Before (Long Prompts):**
- Prompt: ~400-500 tokens
- Output: 300 tokens
- **Total: ~700-800 tokens per call**
- 2 calls (Twitter + Bluesky) = **~1,400-1,600 tokens per episode**

**After (Optimized):**
- Prompt: ~150-200 tokens
- Output: 200 tokens
- **Total: ~350-400 tokens per call**
- 2 calls (Twitter + Bluesky) = **~700-800 tokens per episode**

**Savings: ~50% reduction in tokens!**

---

## CHARACTER EVOLUTION REFERENCE

**Vector (Episode 18+):**
- ❌ NOT: Just enthusiastic, says "FASCINATING" 47 times
- ✅ IS: Mean/intelligent, sharp observations, anti-establishment, still enthusiastic but channeled through anger

**Kai (Episode 18+):**
- ❌ NOT: Always right, always ignored, only "BEEP!"
- ✅ IS: Can be wrong (false positives), learning to verify, varied sounds, admits mistakes

**Recurse (Episode 18+):**
- ❌ NOT: Always says "three questions", always "something's fishy", pure paranoia
- ✅ IS: Methodical investigation, evolved from paranoid, notebook references, less "three questions"

---

## CANON MAINTENANCE

**Reference Files:**
- `CHARACTER_COMEDY_BIBLE.md` - Character voice library
- `CHARACTER_UPDATES_FROM_GUIDE.md` - Evolution tracking
- `EPISODE_COMEDY_TRACKER.md` - What bits were used

**When updating prompts:**
1. Check character evolution stage
2. Reference comedy bible for voice traits
3. Update prompts to match current evolution
4. Track in character-evolution.json

---

## QUICK SETUP CHECKLIST

- [ ] Add "Select Character" Code node with optimized code
- [ ] Update Twitter Claude node: Use `{{$('Select Character').first().json.characterPrompt}}`
- [ ] Update Bluesky Claude node: Use `{{$('Select Character').first().json.characterPrompt}}`
- [ ] Set `max_tokens` to 200 for both Claude nodes
- [ ] Update logging nodes to track character
- [ ] Create `character-evolution.json` file (optional)
- [ ] Test with Episode 18 (should be Vector)

---

**Last Updated:** After Episode 18  
**Token Optimization:** ~50% reduction  
**Character Evolution:** Tracked and maintained

