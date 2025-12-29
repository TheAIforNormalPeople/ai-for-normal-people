# 🔧 Fix: [undefined] - Mismatch Between Code Node and HTTP Request

**The Problem:**
- Code node returns: `body` (object)
- HTTP Request is looking for: `$json.bodyString` (doesn't exist!)
- Result: `[undefined]`

---

## Solution 1: Change HTTP Request to Use Object (Recommended)

**Since Code node returns `body` object, use JSON mode:**

1. **Body Content Type:** Change from `RAW/Custom` to `JSON`
2. **Specify Body:** `Using JSON`
3. **JSON field:** `={{$json}}` (NOT `$json.bodyString`)

**This uses the object directly from Code node.**

---

## Solution 2: Change Code Node to Return String

**OR change Code node to return `bodyString`:**

```javascript
// ... (same code as before) ...

// Return as JSON string
return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

**Then HTTP Request stays in RAW mode with `={{$json.bodyString}}`**

---

## Quick Fix (Easiest)

**In "Post to Bluesky" node:**

1. **Body Content Type:** Change to `JSON` (not RAW)
2. **Specify Body:** `Using JSON`
3. **JSON field:** `={{$json}}`

**This should work immediately since Code node returns the object!**

---

**The mismatch is: Code returns object, but HTTP Request is looking for string!**

