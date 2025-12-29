# 🔧 Fix: `=` Prefix in JSON Result

**The Problem:**
The Result shows `={"repo":"...` - the `=` is being included in the JSON string, making it invalid!

**Why:** When using "Using JSON" mode, n8n expects the expression to evaluate to an object, not a stringified JSON.

---

## Solution: Remove JSON.stringify()

**In "Using JSON" mode, n8n handles JSON serialization automatically!**

### Fix the JSON Field

**Change from:**
```
={{JSON.stringify($json)}}
```

**To:**
```
={{$json}}
```

**That's it!** n8n will automatically convert the object to JSON when using "Using JSON" mode.

---

## Why This Works

- **"Using JSON" mode:** Expects an object, auto-serializes to JSON
- **JSON.stringify():** Creates a string, which then gets wrapped incorrectly
- **Result:** `={{$json}}` gives n8n the object, it handles the rest

---

## Test It

1. **Change JSON field to:** `={{$json}}`
2. **Check Result preview** - should show proper JSON object (no `=` prefix)
3. **Execute node** - should work now!

---

## Alternative: Use RAW Mode

**If `={{$json}}` still doesn't work, use RAW mode:**

1. **Update Code node** to return string:
   ```javascript
   return [{
     json: {
       bodyString: JSON.stringify(body)
     }
   }];
   ```

2. **HTTP Request:**
   - **Body Content Type:** `RAW/Custom`
   - **Body:** `={{$json.bodyString}}`
   - **Headers:** `Content-Type: application/json`

---

**Try `={{$json}}` first - that should fix it!**

