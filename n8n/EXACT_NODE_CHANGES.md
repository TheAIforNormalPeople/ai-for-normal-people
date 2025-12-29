# EXACT NODE CHANGES FOR CHARACTER ROTATION
## Step-by-Step: What to Change in Each Node

**Goal:** Add character rotation to n8n workflow so social posts vary by character voice.

---

## STEP 1: ADD NEW CODE NODE "SELECT CHARACTER"

### Where to Add:
- **Between:** "If Not Posted" node and "Generate Tweet via Claude" node
- **Position:** After "If Not Posted" (True output)

### How to Create:
1. Click on "If Not Posted" node
2. Click the **+** button (or drag from node output)
3. Search for **"Code"** and select it
4. Name it: **"Select Character"**

### Code to Paste (JavaScript):
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

### Settings:
- **Mode:** Run Once for All Items
- **Language:** JavaScript

---

## STEP 2: UPDATE "GENERATE TWEET VIA CLAUDE" NODE

### What to Change:

1. **Disconnect old connection:**
   - Disconnect "If Not Posted" → "Generate Tweet via Claude"

2. **Connect new:**
   - Connect "Select Character" → "Generate Tweet via Claude"

3. **Update `messages` parameter:**
   - Find: `bodyParameters` → `parameters` → `messages`
   - **Current value:** (long prompt with Vector hardcoded)
   - **New value:**
   ```
   =[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nWrite ONLY tweet text. No quotes/markdown. Just text."}]
   ```

4. **Update `max_tokens`:**
   - Find: `bodyParameters` → `parameters` → `max_tokens`
   - **Current value:** `300`
   - **New value:** `200`

---

## STEP 3: UPDATE "GENERATE BLUESKY POST" NODE

### What to Change:

1. **Disconnect old connection:**
   - Disconnect "If Not Posted" → "Generate Bluesky Post"

2. **Connect new:**
   - Connect "Select Character" → "Generate Bluesky Post"

3. **Update `messages` parameter:**
   - Find: `bodyParameters` → `parameters` → `messages`
   - **Current value:** (long prompt with Vector hardcoded)
   - **New value:**
   ```
   =[{"role": "user", "content": "{{$('Select Character').first().json.characterPrompt}}\n\nTitle: {{$('Select Character').first().json.episodeTitle}}\nDesc: {{$('Select Character').first().json.episodeDescription}}\n\nWrite ONLY post text. No quotes/markdown. Under 230 chars. Just text."}]
   ```

4. **Update `max_tokens`:**
   - Find: `bodyParameters` → `parameters` → `max_tokens`
   - **Current value:** `400`
   - **New value:** `200`

---

## STEP 4: UPDATE CONNECTIONS (VISUAL)

**Before:**
```
If Not Posted (True)
    ├─→ Generate Tweet via Claude
    └─→ Generate Bluesky Post
```

**After:**
```
If Not Posted (True)
    ↓
Select Character (NEW)
    ├─→ Generate Tweet via Claude
    └─→ Generate Bluesky Post
```

---

## STEP 5: TEST IT

1. **Test the "Select Character" node:**
   - Run workflow manually
   - Check "Select Character" output
   - Should show: `character: "Vector"` (for Episode 18)

2. **Test Episode 18:** Should use Vector
3. **Test Episode 19:** Should use Kai (when you publish it)
4. **Test Episode 20:** Should use Recurse (when you publish it)

---

## EXACT PARAMETER LOCATIONS

### In "Generate Tweet via Claude" node:

**Path to `messages` parameter:**
```
Parameters
  → Send Body: true
  → Body Content Type: JSON
  → Body Parameters
    → parameters (array)
      → [0] name: "messages"
        → value: [PASTE NEW VALUE HERE]
```

**Path to `max_tokens` parameter:**
```
Parameters
  → Send Body: true
  → Body Content Type: JSON
  → Body Parameters
    → parameters (array)
      → [1] name: "max_tokens"
        → value: 200
```

### In "Generate Bluesky Post" node:

**Same structure** - find `messages` and `max_tokens` in `bodyParameters` → `parameters`

---

## QUICK CHECKLIST

- [ ] Added "Select Character" Code node
- [ ] Pasted JavaScript code into Code node
- [ ] Disconnected "If Not Posted" from both Claude nodes
- [ ] Connected "Select Character" to both Claude nodes
- [ ] Updated Twitter Claude node `messages` parameter
- [ ] Updated Twitter Claude node `max_tokens` to 200
- [ ] Updated Bluesky Claude node `messages` parameter
- [ ] Updated Bluesky Claude node `max_tokens` to 200
- [ ] Tested with Episode 18 (should be Vector)

---

## WHAT CHANGES

**Before:**
- All posts sound like Vector
- Same voice every time
- Generic posts

**After:**
- Posts rotate: Vector → Kai → Recurse → Vector...
- Different character voice per episode
- More variety, less generic
- 50% token reduction

---

**That's it!** Just these changes and your social posts will rotate characters automatically.

