# 🔴 Fix: Red Highlight in JSON Expression

**The red highlight means n8n can't evaluate the expression inside the JSON structure.**

**Why:** When you mix JSON structure with expressions, n8n sometimes can't parse it correctly.

---

## Solution: Use Expression Mode for Entire Body

**Instead of mixing JSON and expressions, make the ENTIRE body an expression:**

### Step 1: Switch to Expression Mode

1. **In the JSON field, click "Expression" button** (top right)
2. **This switches the entire field to expression mode**

### Step 2: Use This Expression

**Paste this as the ENTIRE expression:**

```javascript
={
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": $json['content'][0]['text'] + "\n\n" + $('Check If Posted').first().json.episodeLink,
    "createdAt": $now
  }
}
```

**Key differences:**
- No `{{}}` around expressions inside - just use `$json` directly
- Use JavaScript string concatenation (`+`) instead of template strings
- `$now` instead of `{{$now}}`

---

## Alternative: Use Template Literal

**Or use a JavaScript template literal:**

```javascript
={
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": `${$json['content'][0]['text']}\n\n${$('Check If Posted').first().json.episodeLink}`,
    "createdAt": $now
  }
}
```

---

## Why It's Red

**The red highlight happens because:**
1. **Mixed syntax:** JSON structure + `{{}}` expressions confuse n8n
2. **Expression mode needed:** When using expressions, the whole field should be in expression mode
3. **Parsing issue:** n8n can't parse `{{}}` inside JSON structure

---

## Quick Fix

1. **Click "Expression" button** (top right of JSON field)
2. **Delete everything in the field**
3. **Paste the expression above** (without `{{}}` around variables)
4. **Check Result preview** - red should be gone!

---

**The red means it's not evaluating - switch to full Expression mode!**

