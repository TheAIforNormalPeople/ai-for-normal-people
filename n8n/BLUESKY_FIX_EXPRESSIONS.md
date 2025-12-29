# 🔧 Fix: Expressions Not Evaluating

**The Problem:**
Values are being sent as literal strings:
- `"repo": "=thenormalpeople.bsky.social"` ❌ (should be just the value)
- `"record": "=[object Object]"` ❌ (should be an object)

**The Solution:**
Make sure all parameter values use proper expressions with `={{...}}` syntax.

---

## Fix the Body Parameters:

**In "Using Fields Below" mode, make sure each parameter value uses expressions:**

**Parameter 1: repo**
- **Name:** `repo`
- **Value:** `={{$json.repo}}` (NOT `=thenormalpeople.bsky.social`)

**Parameter 2: collection**
- **Name:** `collection`
- **Value:** `={{$json.collection}}` (NOT `=app.bsky.feed.post`)

**Parameter 3: record**
- **Name:** `record`
- **Value:** `={{$json.record}}` (this should keep it as an object)

---

## Important:

- All values must start with `={{` and end with `}}`
- Don't use literal strings like `=thenormalpeople.bsky.social`
- The `{{...}}` tells n8n to evaluate the expression

---

## Alternative: Go Back to "Using JSON"

If "Using Fields Below" keeps having issues, let's modify the Code node to return a JSON string:

**In Code node, change the return to:**
```javascript
// Return as JSON string
return [{
  json: {
    bodyJson: JSON.stringify(body)
  }
}];
```

**Then in "Post to Bluesky" node:**
- **Specify Body:** `Using JSON`
- **JSON:** `={{JSON.parse($json.bodyJson)}}`

---

**Try fixing the expressions first - make sure they all use `={{$json.fieldName}}` format!**

