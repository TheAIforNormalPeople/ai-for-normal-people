# TikTok Claude Expression Fix

## The Problem

The expression syntax depends on which body format you're using in n8n:

1. **JSON Body** (like Bluesky) - uses `={{ }}` wrapper
2. **Body Parameters** (like Twitter) - uses `=[...]` format

---

## Correct Syntax by Body Format

### Option 1: JSON Body Format (Recommended - Like Bluesky)

**Body Format:** `Specify Body: JSON`  
**JSON Body Field:** Enter this directly:

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1000,
  "messages": [
    {
      "role": "user",
      "content": "={{ $('Generate TikTok Content').first().json.scriptPrompt }}"
    }
  ]
}
```

**OR use the expression format (what Bluesky uses):**

In the JSON Body field, use expression syntax:

```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 1000, "messages": [{"role": "user", "content": $('Generate TikTok Content').first().json.scriptPrompt}]} }}
```

**Note:** Inside the `={{ }}` wrapper, the inner expression uses `$()` directly (no `={{ }}` wrapper for the inner part).

---

### Option 2: Body Parameters Format (Like Twitter)

**Body Format:** `Body Parameters` (key-value pairs)

**Parameters:**
- `model`: `claude-sonnet-4-20250514`
- `max_tokens`: `1000`
- `messages`: `=[{"role": "user", "content": $('Generate TikTok Content').first().json.scriptPrompt}]`

**Note:** Uses `=[...]` syntax, and `$()` directly inside (no `={{ }}` wrapper).

---

## Bluesky Example (Working)

Looking at how Bluesky does it:

**Format:** JSON Body  
**Expression:**
```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 300, "messages": [{"role": "user", "content": $('Select Character').first().json.characterPrompt.replace(/tweet/g, 'Bluesky post').replace(/240 characters/g, '150 characters') + " Episode title: " + $('Select Character').first().json.episodeTitle + " Episode description: " + $('Select Character').first().json.episodeDescription}]} }}
```

**Key Points:**
- Uses `={{ }}` wrapper for the whole JSON
- Inside, uses `$('Select Character')` directly (no `={{ }}` wrapper)
- Everything inside is valid JavaScript/JSON

---

## Recommended: Use Bluesky Format (Simpler)

**For TikTok, use this (JSON Body format):**

In the JSON Body field:

```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 1000, "messages": [{"role": "user", "content": $('Generate TikTok Content').first().json.scriptPrompt}]} }}
```

**Important:**
- `={{ }}` wraps the entire JSON object
- `$('Generate TikTok Content')` is used directly inside (no `={{ }}` wrapper)
- All quotes inside are double quotes

---

## Alternative: Use Input (If Connected Directly)

If "Generate TikTok Script" node is connected directly FROM "Generate TikTok Content":

```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 1000, "messages": [{"role": "user", "content": $input.first().json.scriptPrompt}]} }}
```

---

## What Was Wrong?

If you used:
```json
"content": "={{ $('Generate TikTok Content').first().json.scriptPrompt }}"
```

**Problem:** This creates a JSON string, not an expression. The `={{ }}` syntax needs to be in the n8n expression field, not inside JSON quotes.

**Fix:** Use the expression format shown above, or use the JSON body with expression syntax.

---

## Quick Fix

**Copy this exactly into your JSON Body field:**

```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 1000, "messages": [{"role": "user", "content": $('Generate TikTok Content').first().json.scriptPrompt}]} }}
```

**Or if nodes are directly connected:**

```
={{ {"model": "claude-sonnet-4-20250514", "max_tokens": 1000, "messages": [{"role": "user", "content": $input.first().json.scriptPrompt}]} }}
```

---

## Testing

After updating, test the node:

1. **Run workflow** (or test execution)
2. **Check for errors:**
   - ✅ No syntax errors
   - ✅ Node executes successfully
3. **Check output:**
   - ✅ Claude returns script
   - ✅ Script text is in `content[0].text`

---

**The key is: use `={{ }}` wrapper for the whole JSON, and `$()` directly inside (no nested `={{ }}`).**
