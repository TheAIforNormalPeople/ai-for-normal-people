# ✅ Fix: Switch to Expression Mode

**The Problem:** You're in "Fixed" mode, but the code uses JavaScript syntax `({...})`.

**The Solution:** Switch to "Expression" mode!

---

## Step 1: Switch to Expression Mode

**At the top right of the JSON field:**
1. **Click the "Expression" button** (currently "Fixed" is selected)
2. **Switch it to "Expression"**

---

## Step 2: Use This Expression

**Once in Expression mode, paste this:**

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

---

## Why It Fails in Fixed Mode

- **Fixed mode:** Expects valid JSON (no JavaScript)
- **Expression mode:** Evaluates JavaScript code
- **Your code:** Uses JavaScript (`$json`, `$now`, etc.)
- **Result:** Must be in Expression mode!

---

## Quick Fix

1. **Click "Expression" button** (top right)
2. **Paste the expression above**
3. **Error should disappear!**

---

**The mode matters! Fixed = JSON only, Expression = JavaScript!**

