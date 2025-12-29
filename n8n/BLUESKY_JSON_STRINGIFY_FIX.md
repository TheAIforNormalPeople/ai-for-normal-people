# 🔧 Fix: JSON.stringify() Needed

**The Problem:**
`={{$json}}` is evaluating to `[object Object]` instead of valid JSON.

**The Solution:**
Use `JSON.stringify()` to convert the object to a JSON string.

---

## Fix the JSON Field:

**Change from:**
```
={{$json}}
```

**To:**
```
={{JSON.stringify($json)}}
```

---

## Steps:

1. In "Post to Bluesky" node
2. Find the "JSON" field (under "Specify Body")
3. Replace `={{$json}}` with `={{JSON.stringify($json)}}`
4. Click "Execute step"

---

**This converts the JavaScript object to a proper JSON string that n8n can send!**

