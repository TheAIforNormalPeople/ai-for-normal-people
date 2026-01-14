# TikTok Workflow Structure Decision

## Current Workflow Structure

**Twitter:**
```
Select Character → Generate Tweet via Claude → Clean Twitter Text → Post to Twitter
```

**Bluesky:**
```
Select Character → Generate Bluesky Post (Claude) → Generate Bluesky Body → Combine Bluesky Token → Post to
```

## TikTok Options

### Option 1: Code Node Only (Recommended for Now)

**Structure:**
```
Select Character → Generate TikTok Content (Code) → [Manual Video Creation]
```

**Pros:**
- ✅ Simple - no extra Claude API calls
- ✅ Code node generates description, hashtags, and script prompt
- ✅ Script prompt can be used manually or with Claude later
- ✅ Lower cost (no Claude API usage)
- ✅ Faster workflow execution

**Cons:**
- ❌ No automated script generation (would need manual or separate Claude call)

**Use Case:** Perfect for starting out - you get the description and hashtags ready to use, and can manually create videos or use the script prompt with Claude in a separate workflow/chat.

---

### Option 2: Add Claude Node for Script Generation

**Structure:**
```
Select Character → Generate TikTok Content (Code) → Generate TikTok Script (Claude) → [Manual Video Creation]
```

**Pros:**
- ✅ Automated script generation
- ✅ Script tailored to character voice
- ✅ Ready-to-use script for video creation

**Cons:**
- ❌ Extra Claude API call (costs money)
- ❌ More complex workflow
- ❌ Script generation not always needed (can reuse same script format)

**Use Case:** If you want fully automated script generation for every episode.

---

### Option 3: Reuse Existing Claude Nodes (NOT Recommended)

**Why NOT:**
- ❌ Twitter/Bluesky Claude nodes generate **social media posts** (short text, ~240-300 chars)
- ❌ TikTok needs a **video script** (completely different format, 60 seconds of speech)
- ❌ Different prompts, different output format
- ❌ Can't reuse the same Claude response for both purposes

**Conclusion:** You NEED a separate Claude node for TikTok if you want automated script generation, but you DON'T need it right away.

---

## Recommendation: Start Simple

### Phase 1: Code Node Only (Now)
1. Add "Generate TikTok Content" code node
2. Branch from "Select Character"
3. Output: description, hashtags, script prompt
4. Use script prompt manually or in separate Claude chat for now

### Phase 2: Add Claude Node (Later, Optional)
1. Add "Generate TikTok Script via Claude" node
2. Connect: Generate TikTok Content → Generate TikTok Script (Claude)
3. Use scriptPrompt from code node as input
4. Output: ready-to-use video script

---

## Current Code Node Output

The "Generate TikTok Content" code node provides:

1. **description** - Ready to paste into TikTok (title + description + link + hashtags)
2. **hashtags** - Basic hashtags for AI/tech content
3. **scriptPrompt** - A prompt that can be used with Claude to generate the actual script
4. **episodeTitle, episodeDescription, episodeLink** - Episode metadata
5. **character, characterName** - Character info for script generation

**For Phase 1:** You can use `description` and `hashtags` directly. Use `scriptPrompt` manually with Claude if needed.

**For Phase 2:** Feed `scriptPrompt` to a Claude node to generate the actual script automatically.

---

## Decision Matrix

| Feature | Code Node Only | Code + Claude Node |
|---------|---------------|-------------------|
| Description & Hashtags | ✅ Yes | ✅ Yes |
| Script Prompt | ✅ Yes (manual use) | ✅ Yes (automatic) |
| Automated Script | ❌ No | ✅ Yes |
| Workflow Complexity | ✅ Simple | ❌ More complex |
| Cost | ✅ Free (code only) | ❌ Claude API cost |
| Speed | ✅ Fast | ⚠️ Slower (API call) |

---

## My Recommendation

**Start with Option 1 (Code Node Only):**
- Get description and hashtags working first
- Create a few videos manually to test the format
- Once you know what works, add Claude node later if needed

**Add Claude Node Later If:**
- You're creating many videos and want automation
- You want consistent script format across episodes
- You have budget for extra Claude API calls

The code node gives you everything you need to start - you can always add Claude later!
