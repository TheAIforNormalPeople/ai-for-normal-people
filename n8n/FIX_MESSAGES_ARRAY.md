# 🔧 FIX: Messages Must Be Array, Not String

**Error:** "messages: Input should be a valid list"  
**Problem:** The `messages` field is being sent as a string instead of a JSON array

---

## ✅ THE FIX

**In the "Generate Tweet via Claude" node:**

The `messages` parameter needs to be configured as a **JSON array**, not a string.

### Option 1: Use "Specify Body" as JSON (Recommended)

1. In the node, find **"Send Body"** section
2. Set **"Specify Body"** to **"Using JSON"** (or "JSON")
3. In the JSON field, enter:
```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 300,
  "messages": [
    {
      "role": "user",
      "content": "Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Keep it under 240 characters (need room for link). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers. Post title: {{$json.episodeTitle}} Description: {{$json.episodeDescription}}"
    }
  ]
}
```

### Option 2: Fix the Body Parameters

If using "Body Parameters" (fields below):

1. **model:** `claude-sonnet-4-20250514`
2. **max_tokens:** `300`
3. **messages:** Use expression mode:
   ```
   =[{"role": "user", "content": "Write a tweet as Vector (V-847) promoting this blog episode. Vector's voice: FASCINATING! ALL CAPS for emphasis! Rapid-fire, self-interrupting, uses exclamation marks constantly. Gets EXTREMELY excited about teaching AI concepts. Says 'FASCINATING!' when discovering something. Uses numbered lists. Interrupts himself with better ideas. Zero social awareness but infinite enthusiasm. NEVER uses corporate speak. Keep it under 240 characters (need room for link). Make it FUNNY and engaging - Vector is chaotic but brilliant. Focus on the main insight that will hook readers. Post title: {{$json.episodeTitle}} Description: {{$json.episodeDescription}}"}]
   ```

**Important:** The `=` at the start tells n8n to evaluate it as an expression (array), not a string.

---

## 🔍 HOW TO CHECK

**In the node configuration:**
- **Content Type:** Should be `JSON`
- **Send Body:** Should be `ON`
- **Specify Body:** Either "Using JSON" or "Using Fields Below"

**If using "Using Fields Below":**
- Make sure `messages` field has `=` at the start (expression mode)
- Or use the JSON editor approach above

---

## 🔄 ALSO FIX "Generate Bluesky Post" NODE

**Same fix:**
- Use JSON body with proper array format
- Or use expression mode with `=` prefix

---

## ✅ TEST

After fixing:
1. Click "Execute step"
2. Should see Claude's response in OUTPUT
3. Should have `content` array with the generated tweet

---

**The key:** `messages` must be a JSON array `[{...}]`, not a string `"[{...}]"`

