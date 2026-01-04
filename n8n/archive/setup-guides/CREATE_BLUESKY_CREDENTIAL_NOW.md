# 🔑 Create Bluesky Credential in n8n

**Bluesky uses session token authentication. Here's how to set it up:**

---

## OPTION 1: Add Authentication Node (RECOMMENDED)

**This automatically gets a fresh session token before each post.**

### Step 1: Get Bluesky App Password

1. Go to: https://bsky.app/settings/app-passwords
2. Sign in to Bluesky
3. Click "Add App Password"
4. Name it: "n8n Blog Automation"
5. **Copy the password** (long string like `abcd-efgh-ijkl-mnop`)
6. **Also note your Bluesky handle** (e.g., `thenormalpeople.bsky.social`)
7. **Save both securely**

---

### Step 2: Add "Get Bluesky Session" Node

**In your n8n workflow, BEFORE "Post to Bluesky" node:**

1. **Add a new HTTP Request node** (drag it in)
2. **Name it:** `Get Bluesky Session`
3. **Configure it:**
   - **Method:** `POST`
   - **URL:** `https://bsky.social/xrpc/com.atproto.server.createSession`
   - **Send Headers:** ✅ (checked)
   - **Headers:**
     - `Content-Type`: `application/json`
   - **Send Body:** ✅ (checked)
   - **Content Type:** `JSON`
   - **Body (JSON):**
     ```json
     {
       "identifier": "thenormalpeople.bsky.social",
       "password": "YOUR_APP_PASSWORD_HERE"
     }
     ```
   - **Authentication:** `None` (no credential needed here)

4. **Connect it:**
   - Connect "Generate Bluesky Post" → "Get Bluesky Session"
   - Connect "Get Bluesky Session" → "Post to Bluesky"

---

### Step 3: Update "Post to Bluesky" Node

**In "Post to Bluesky" node:**

1. **Authentication:** Change from "Generic Credential Type" to **"None"**
2. **Send Headers:** ✅ (checked)
3. **Headers:**
   - `Content-Type`: `application/json`
   - `Authorization`: `=Bearer {{$json.accessJwt}}`
   - (This uses the session token from "Get Bluesky Session")

4. **Body Parameters:**
   - `repo`: `thenormalpeople.bsky.social`
   - `collection`: `app.bsky.feed.post`
   - `record`: `={"$type": "app.bsky.feed.post", "text": "{{$('Generate Bluesky Post').first().json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}", "createdAt": "{{$now}}"}`

---

## OPTION 2: Manual Token (Simpler, but tokens expire)

**If you want to skip the auth node for now:**

### Step 1: Get Session Token Manually

**Run this in a terminal or Postman:**

```bash
curl -X POST https://bsky.social/xrpc/com.atproto.server.createSession \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "thenormalpeople.bsky.social",
    "password": "YOUR_APP_PASSWORD_HERE"
  }'
```

**Copy the `accessJwt` value from the response** (long token string)

---

### Step 2: Create HTTP Header Auth Credential

1. **In n8n, click "Credentials"**
2. **Click "Add Credential"**
3. **Search for "HTTP Header Auth"**
4. **Click it**
5. **Fill in:**
   - **Name:** `Bluesky Session`
   - **Name:** `Authorization`
   - **Value:** `Bearer YOUR_ACCESS_JWT_TOKEN_HERE`
6. **Click "Save"**

---

### Step 3: Use in "Post to Bluesky" Node

**In "Post to Bluesky" node:**

1. **Authentication:** `Generic Credential Type`
2. **Generic Auth Type:** `HTTP Header Auth`
3. **Credential:** Select "Bluesky Session"

**⚠️ Note:** This token will expire eventually. You'll need to regenerate it manually.

---

## ✅ RECOMMENDED: Use Option 1

**Option 1 is better because:**
- ✅ Token refreshes automatically
- ✅ No manual token updates needed
- ✅ More reliable long-term

**Option 2 is simpler for testing:**
- ✅ Quick setup
- ❌ Token expires (need to regenerate)
- ❌ Less reliable

---

## 🆘 TROUBLESHOOTING

**"Unauthorized" or "Invalid token":**
- Token expired (if using Option 2) - regenerate it
- Check app password is correct
- Verify handle is correct (include `.bsky.social`)

**"Method not allowed":**
- Make sure "Get Bluesky Session" uses `POST` method
- Check URL is correct: `https://bsky.social/xrpc/com.atproto.server.createSession`

**"Invalid identifier":**
- Make sure handle includes `.bsky.social`
- Check you're using app password, not regular password

---

## 📝 QUICK CHECKLIST (Option 1)

- [ ] Got Bluesky app password
- [ ] Added "Get Bluesky Session" node
- [ ] Configured it with handle and app password
- [ ] Updated "Post to Bluesky" to use `{{$json.accessJwt}}` in Authorization header
- [ ] Connected nodes: Generate → Get Session → Post
- [ ] Tested workflow

---

**Once set up, Bluesky posts should work!**

