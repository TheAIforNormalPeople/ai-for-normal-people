# TikTok Node Troubleshooting

**Error:** `Referenced node doesn't exist`

---

## 🚨 Common Error

**Error Message:**
```
TypeError: Cannot assign to read only property 'name' of object 'Error: Referenced node doesn't exist'
```

**Cause:** The node is trying to access nodes that don't exist or haven't executed yet.

---

## ✅ Solution

### Issue 1: Node Position in Workflow

**Problem:** "Generate TikTok Content" node must come AFTER "Select Character" in execution order.

**Fix:**
1. Open n8n workflow
2. Check node connections:
   - "Select Character" → "Generate TikTok Content"
   - Make sure "Generate TikTok Content" comes AFTER "Select Character"
3. The node must be connected FROM "Select Character" (not before it!)

**Correct Workflow Order:**
```
RSS Feed → Check If Posted → Select Character → Generate TikTok Content → [other nodes]
```

**Wrong:**
```
RSS Feed → Generate TikTok Content → Check If Posted → Select Character ❌
```

---

### Issue 2: Node Name Mismatch

**Problem:** Node names don't match exactly.

**Fix:**
- Check node names match exactly (case-sensitive):
  - `"Check If Posted"` (exact spelling)
  - `"Select Character"` (exact spelling)
- Copy node names from workflow (don't type manually)

**Correct Node Names:**
- ✅ `"Check If Posted"`
- ✅ `"Select Character"`

**Wrong:**
- ❌ `"Check if Posted"` (lowercase 'i')
- ❌ `"check if posted"` (all lowercase)
- ❌ `"SelectCharacters"` (no space)

---

### Issue 3: Node Not Connected

**Problem:** Node isn't connected properly in workflow.

**Fix:**
1. Check "Generate TikTok Content" node has connection FROM "Select Character"
2. Drag connection: "Select Character" → "Generate TikTok Content"
3. Verify connection line exists in workflow

---

## 🔧 Fixed Code

Updated code includes error handling:

```javascript
// Get episode data with error handling
let checkNode, selectChar;
try {
  checkNode = $('Check If Posted').first().json;
} catch (error) {
  throw new Error('Cannot find "Check If Posted" node. Make sure it exists and runs before this node.');
}

try {
  selectChar = $('Select Character').first().json;
} catch (error) {
  throw new Error('Cannot find "Select Character" node. This node must run AFTER "Select Character" in the workflow.');
}
```

This will give you clearer error messages if nodes aren't found.

---

## ✅ Checklist

- [ ] "Generate TikTok Content" node is AFTER "Select Character" in workflow
- [ ] Connected FROM "Select Character" (not before it!)
- [ ] Node names match exactly: "Check If Posted" and "Select Character"
- [ ] Workflow execution order is correct
- [ ] Updated code with error handling (use latest version)

---

## 📝 Quick Fix Steps

1. **Check Node Position:**
   - "Generate TikTok Content" must come AFTER "Select Character"
   - Drag node to correct position if needed

2. **Check Connections:**
   - "Select Character" → "Generate TikTok Content"
   - Verify connection line exists

3. **Update Code:**
   - Use latest version from `GENERATE_TIKTOK_CONTENT.js`
   - Includes error handling

4. **Test:**
   - Run workflow
   - Check for clearer error messages (if any)
   - Verify output (should have script, description, hashtags)

---

**Most Common Fix:** Move "Generate TikTok Content" node to come AFTER "Select Character" in execution order!
