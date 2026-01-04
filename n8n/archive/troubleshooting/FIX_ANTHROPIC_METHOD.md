# 🔧 FIX: Anthropic API Method Error

**Error:** "Method not allowed" (405)  
**Problem:** Node is using GET method, but Anthropic API requires POST

---

## ✅ QUICK FIX

**In the "Generate Tweet via Claude" node:**

1. **Change Method:**
   - Current: `GET` ❌
   - Change to: `POST` ✅

2. **Keep everything else the same:**
   - URL: `https://api.anthropic.com/v1/messages`
   - Authentication: Anthropic API credential
   - Headers: `anthropic-version: 2023-06-01`
   - Body: (should already be configured)

---

## 📝 DETAILED STEPS

1. Click on **"Generate Tweet via Claude"** node
2. In Parameters section, find **"Method"** dropdown
3. Change from **"GET"** to **"POST"**
4. Click **"Save"** (if there's a save button)
5. Click **"Execute step"** to test

---

## ✅ VERIFY

After changing to POST:
- Method should be: `POST`
- URL should be: `https://api.anthropic.com/v1/messages`
- Body should contain: `model`, `max_tokens`, `messages`

---

## 🔄 ALSO CHECK "Generate Bluesky Post" NODE

**Do the same fix:**
- Change Method from `GET` to `POST`
- Same URL and configuration

---

**That's it! Change GET → POST and it should work.**

