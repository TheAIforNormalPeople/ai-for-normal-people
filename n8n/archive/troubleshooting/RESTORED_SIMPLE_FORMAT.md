# RESTORED: Simple Format (Like Before)

**What changed:** Updated "Generate Bluesky Post" to match the simpler format that was working before.

---

## WHAT WAS UPDATED

### "Generate Bluesky Post" Node:

**Before (complex):**
```
IMPORTANT: Keep it under 170 characters for text (Bluesky limit is 300, but URL ~65 chars + hashtags ~45 chars + newlines 2 = 282 total).
max_tokens: 400
```

**After (simple, like Twitter):**
```
Keep it under 170 characters (need room for link).
max_tokens: 300
```

---

## BOTH NODES NOW MATCH

### "Generate Tweet via Claude":
- Format: Simple, clean prompt
- Limit: 240 characters
- max_tokens: 300

### "Generate Bluesky Post":
- Format: Simple, clean prompt (same structure)
- Limit: 170 characters
- max_tokens: 300

---

## THE PROMPT STRUCTURE

Both nodes now use this simple format:

```
Write a [tweet/Bluesky post] as Vector (V-847) promoting this blog episode. 
Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, 
uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. 
Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself 
with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. 
Keep it under [240/170] characters (need room for link). Make it FUNNY and engaging - 
Vector is chaotic but brilliant. Focus on the main insight that will hook readers. 
Post title: {{$json.episodeTitle}} Description: {{$json.episodeDescription}}
```

---

## CHARACTER LIMITS

**Twitter:**
- Text: 240 characters
- URL: ~23 characters (shortened)
- Total: ~263 characters (under 280 ✅)

**Bluesky:**
- Text: 170 characters
- URL: ~65 characters
- Hashtags: ~45 characters (if added)
- Newlines: 2 characters
- Total: ~282 characters (under 300 ✅)

---

**This matches the format that was working before!**

