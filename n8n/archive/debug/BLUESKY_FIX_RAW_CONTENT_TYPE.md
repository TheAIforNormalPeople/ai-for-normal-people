# 🔧 Fix: RAW Content Type Not Valid

**In RAW mode, there's a separate "Content Type" field in the Body section!**

---

## Fix: Set Body Content Type

**In the Body section (RAW mode), you'll see:**

1. **"Body Content Type" dropdown** - Set this to `JSON` (not "Raw" or "Text")
2. **"Content Type" field** - This should be `application/json` (or leave it, the dropdown handles it)
3. **"Body" field** - `{{$json.bodyString}}` (your expression)

---

## Alternative: Use "JSON" Body Content Type Instead

**If RAW mode is causing issues, try this:**

1. **Body Content Type:** Change from `RAW/Custom` to `JSON`
2. **Specify Body:** `Using JSON`
3. **JSON field:** `={{$json}}` (use the object directly from Code node)

**But first, update Code node to return object (not string):**

```javascript
// Return the body object directly (not stringified)
return [{
  json: body
}];
```

---

## Step-by-Step Fix for RAW Mode

1. **Body Content Type dropdown:** Set to `JSON` (in the Body section)
2. **Body field:** `{{$json.bodyString}}`
3. **Headers:** Make sure `Content-Type: application/json` is set

---

## Or Switch Back to JSON Mode

**Since RAW is causing issues, let's try JSON mode with object:**

1. **Update Code node** to return object:
   ```javascript
   return [{ json: body }];
   ```

2. **HTTP Request:**
   - **Body Content Type:** `JSON`
   - **Specify Body:** `Using JSON`
   - **JSON field:** `={{$json}}`

---

**Try setting the Body Content Type dropdown to "JSON" first - that might fix it!**

