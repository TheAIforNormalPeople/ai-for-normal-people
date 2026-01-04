# FIX JSON STRUCTURE FOR "USING JSON" MODE

**Error:** "JSON parameter needs to be valid JSON"  
**Cause:** When using "Using JSON" mode, you need to structure the body as a JSON object, not a string expression.

---

## SOLUTION: USE "USING FIELDS BELOW" MODE

**Instead of "Using JSON" mode, use "Using Fields Below" mode:**

1. **Change "Specify Body" from "Using JSON" to "Using Fields Below"**
2. **Add these fields:**

**Field 1:**
- **Name:** `model`
- **Value:** `claude-sonnet-4-20250514`

**Field 2:**
- **Name:** `max_tokens`
- **Value:** `300`

**Field 3:**
- **Name:** `messages`
- **Value:** `={{ [{"role": "user", "content": $json.characterPrompt + "\n\nCRITICAL: This post must be UNIQUE to this episode. Reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content.\n\nEpisode title: " + $json.episodeTitle + "\n\nWrite ONLY the post text. No quotes/markdown. Just text."}] }}`

---

## ALTERNATIVE: FIX "USING JSON" MODE

If you want to keep "Using JSON" mode, use this structure:

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 300,
  "messages": {{ [{"role": "user", "content": $json.characterPrompt + "\n\nCRITICAL: This post must be UNIQUE to this episode. Reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content.\n\nEpisode title: " + $json.episodeTitle + "\n\nWrite ONLY the post text. No quotes/markdown. Just text."}] }}
}
```

**But "Using Fields Below" is easier and more reliable!**

---

**Recommendation: Use "Using Fields Below" mode - it's simpler and less error-prone.**

