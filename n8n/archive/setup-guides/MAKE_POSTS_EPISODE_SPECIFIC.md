# MAKE POSTS EPISODE-SPECIFIC (NOT GENERIC)

**Problem:** Posts were too generic, saying the same thing over and over.  
**Solution:** Updated prompts to reference the SPECIFIC episode content.

---

## WHAT CHANGED

### Both "Generate Tweet via Claude" and "Generate Bluesky Post":

**Before (generic):**
```
Write a tweet/post as Vector promoting this blog episode...
Focus on the main insight that will hook readers.
```

**After (episode-specific):**
```
Write a tweet/post as Vector promoting THIS SPECIFIC blog episode...
CRITICAL: This post must be UNIQUE to this episode - reference the specific topic, 
insight, or situation from the episode. Don't write generic AI advice. 
Make it about THIS episode's specific content.
```

---

## KEY CHANGES

1. **"THIS SPECIFIC blog episode"** - Emphasizes uniqueness
2. **"CRITICAL: This post must be UNIQUE"** - Direct instruction
3. **"reference the specific topic, insight, or situation"** - Tells Claude to use episode details
4. **"Don't write generic AI advice"** - Prevents generic posts
5. **"Make it about THIS episode's specific content"** - Reinforces specificity

---

## CHARACTER VOICE UPDATES

Also updated Vector's voice description to match his evolution:
- **Before:** "Gets EXTREMELY excited about teaching AI concepts"
- **After:** "Sharp, intelligent, mean. Anti-establishment rants."

This matches Vector's evolved character from the comedy guide.

---

## EXAMPLES

**Episode 18 (Fact-Checking):**
- ❌ Generic: "FASCINATING! AI can help you fact-check! Three ways to verify information!"
- ✅ Specific: "FASCINATING! Kai detected a SPIKE and we PANICKED! Then Vector explained fact-checking while hiding. Learn when AI helps vs when it makes things WORSE!"

**Episode 17 (AI Writing):**
- ❌ Generic: "FASCINATING! Use AI for writing! Three tips!"
- ✅ Specific: "FASCINATING! Human tried to teach Vector about writing without sounding like AI. Vector was DEFENSIVE. Then Human made a mistake. HILARIOUS chaos!"

---

## THE PROMPTS NOW

### Twitter (240 chars):
```
Write a tweet as Vector (V-847) promoting THIS SPECIFIC blog episode. 
Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting. 
Sharp, intelligent, mean. Anti-establishment rants. Uses numbered lists. 
Zero corporate speak. CRITICAL: This tweet must be UNIQUE to this episode - 
reference the specific topic, insight, or situation from the episode. 
Don't write generic AI advice. Make it about THIS episode's specific content. 
Keep it under 240 characters (need room for link). Be FUNNY and engaging - 
Vector is chaotic but brilliant. Episode title: {{$json.episodeTitle}} 
Episode description: {{$json.episodeDescription}}
```

### Bluesky (170 chars):
```
Write a Bluesky post as Vector (V-847) promoting THIS SPECIFIC blog episode. 
Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting. 
Sharp, intelligent, mean. Anti-establishment rants. Uses numbered lists. 
Zero corporate speak. CRITICAL: This post must be UNIQUE to this episode - 
reference the specific topic, insight, or situation from the episode. 
Don't write generic AI advice. Make it about THIS episode's specific content. 
Keep it under 170 characters (need room for link). Be FUNNY and engaging - 
Vector is chaotic but brilliant. Episode title: {{$json.episodeTitle}} 
Episode description: {{$json.episodeDescription}}
```

---

**Now each post will be unique to the episode content!**

