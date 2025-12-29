# ✅ Fix: JSON.parse Error - Use JavaScript Object Syntax

**The Error:** `JSON.parse: unexpected character` - n8n is trying to parse JavaScript as JSON.

**The Fix:** In Expression mode, you need to build a JavaScript object, not write JSON syntax.

---

## Correct Expression

**In Expression mode, use this (builds the object with JavaScript):**

```javascript
({
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": $json['content'][0]['text'] + "\n\n" + $('Check If Posted').first().json.episodeLink,
    "createdAt": $now.toISOString()
  }
})
```

**Key changes:**
- Wrapped in `()` - makes it a JavaScript expression
- No `=` prefix needed in Expression mode
- Use `$now.toISOString()` for proper timestamp format
- Use `+` for string concatenation

---

## Alternative: Template Literal Approach

**Or use template literals for cleaner string building:**

```javascript
({
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": `${$json['content'][0]['text']}\n\n${$('Check If Posted').first().json.episodeLink}`,
    "createdAt": $now.toISOString()
  }
})
```

---

## Why This Works

- **Expression mode:** Evaluates JavaScript, not JSON
- **Wrapped in ()**: Makes it a proper JavaScript expression
- **JavaScript object syntax:** n8n will serialize it to JSON automatically
- **No JSON.parse needed:** It's already a JavaScript object

---

## Steps

1. **Make sure "Expression" mode is ON** (button at top right)
2. **Delete everything in the field**
3. **Paste the expression above** (wrapped in parentheses)
4. **Check Result preview** - should show proper JSON object
5. **Execute** - should work!

---

**The parentheses `()` make it a JavaScript expression that evaluates to an object!**

