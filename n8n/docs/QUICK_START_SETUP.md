# ⚡ Quick Start - n8n Setup (15 minutes)

## Fast Track Setup

Follow these steps in order. Check off as you go.

---

## ✅ Step 1: Import Workflow (2 min)

1. Open n8n
2. Click **"Workflows"** → **"Import from File"**
3. Select: `multi-platform-social-json-tracking-FIXED.json`
4. Click **"Import"**

**✅ Done when:** Workflow appears in your list

---

## ✅ Step 2: Create Credentials (10 min)

### 2.1 Twitter OAuth (3 min)
1. Get credentials from https://developer.twitter.com/en/portal/dashboard
2. In n8n: **Credentials** → **Add** → **OAuth1 API**
3. Name: `Twitter OAuth`
4. Paste: Consumer Key, Secret, Access Token, Token Secret
5. **Save**

**✅ Done when:** Credential appears in list

### 2.2 Anthropic API (2 min)
1. Get key from https://console.anthropic.com/
2. In n8n: **Credentials** → **Add** → **Anthropic API**
3. Name: `Anthropic API`
4. Paste API key
5. **Save**

**✅ Done when:** Credential appears in list

### 2.3 Bluesky Auth (5 min)
1. Get app password: https://bsky.app/settings/app-passwords
2. Get access token (see below)
3. In n8n: **Credentials** → **Add** → **HTTP Header Auth**
4. Name: `Bluesky Auth`
5. Header Name: `Authorization`
6. Header Value: `Bearer YOUR_ACCESS_JWT`
7. **Save**

**Getting Bluesky Access Token:**
- Use this curl command (replace YOUR_HANDLE and YOUR_APP_PASSWORD):
```bash
curl -X POST https://bsky.social/xrpc/com.atproto.server.createSession \
  -H "Content-Type: application/json" \
  -d '{"identifier": "YOUR_HANDLE.bsky.social", "password": "YOUR_APP_PASSWORD"}'
```
- Copy the `accessJwt` from response
- Use that as your token

**✅ Done when:** Credential appears in list

---

## ✅ Step 3: Connect Credentials (2 min)

1. Click **"Generate Tweet via Claude"** node
   - Select: **Anthropic API** credential
2. Click **"Post to Twitter"** node
   - Select: **Twitter OAuth** credential
3. Click **"Generate Bluesky Post"** node
   - Select: **Anthropic API** credential
4. Click **"Post to Bluesky"** node
   - Select: **Bluesky Auth** credential

**✅ Done when:** All nodes have credentials selected

---

## ✅ Step 4: Create Tracking File (1 min)

1. Create folder: `n8n/tracking/`
2. Create file: `posted-content.json`
3. Add content: `[]`
4. Save

**If using Docker:**
- Mount volume or create in data directory

**✅ Done when:** File exists and is accessible

---

## ✅ Step 5: Test (5 min)

1. Click **"Execute Workflow"** (top right)
2. Watch nodes execute
3. Check for errors (red = error)

**Common issues:**
- ❌ Credential not selected → Select it
- ❌ File not found → Create tracking file
- ❌ Twitter error → Check app permissions (needs "Read and write")
- ❌ Bluesky error → Check access token is valid

**✅ Done when:** Workflow executes without errors

---

## ✅ Step 6: Activate (30 sec)

1. Toggle **"Active"** switch (top right)
2. Workflow now runs on schedule (every 4 hours)

**✅ Done when:** Switch is ON and green

---

## 🎉 You're Done!

Workflow will now:
- Check RSS feed every 4 hours
- Generate posts with Claude
- Post to Twitter and Bluesky
- Track what's been posted
- Avoid duplicates

**Monitor:** Check "Executions" tab to see it running

---

## 🆘 Quick Troubleshooting

**Workflow not running?**
- ✅ Is it activated?
- ✅ Check schedule trigger

**Twitter not posting?**
- ✅ App has "Read and write" permissions?
- ✅ Credentials correct?

**Bluesky not posting?**
- ✅ Access token still valid?
- ✅ App password correct?

**Need more help?** See `COMPLETE_SETUP_GUIDE_NOW.md` for detailed instructions.

