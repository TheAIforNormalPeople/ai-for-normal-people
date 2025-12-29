# 🔧 Fix: Method Not Allowed (405 Error)

**The Error:** `"method": "GET"` but Anthropic API requires `POST`

**This is in the "Generate Bluesky Post" node (Claude API call)**

---

## Fix: Change Method to POST

**In "Generate Bluesky Post" node:**

1. **Find the "Method" dropdown** (at the top of the node)
2. **Change it from `GET` to `POST`**
3. **Save the node**

---

## Why This Happens

- **Anthropic API `/v1/messages` endpoint requires POST**
- **GET requests don't support request bodies**
- **Your node is trying to send a body with GET method** ❌

---

## Quick Fix

1. **Open "Generate Bluesky Post" node**
2. **Method dropdown:** Change `GET` → `POST`
3. **Execute** - should work now!

---

**This is a simple fix - just change the method to POST!**

