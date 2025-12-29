# 🔧 Fix "Header name must be a valid HTTP token" Error

**The Problem:**
The error `Header name must be a valid HTTP token ["Bluesky Sesson"]` means n8n is trying to use your credential name as the HTTP header name, which is wrong.

**The Solution:**
The "Header Auth" credential type might not be working correctly. We need to use "Custom Auth" instead, OR fix how the header is configured.

---

## OPTION 1: Use Custom Auth (RECOMMENDED)

### Step 1: Delete the Current Credential
1. Go to Credentials
2. Find "Bluesky Session" (or "Bluesky Sesson")
3. Delete it

### Step 2: Create New Custom Auth Credential
1. Click "Add Credential"
2. Search for: **`Custom Auth`**
3. Select it
4. Fill in:
   - **Name:** `Bluesky Session`
   - **JSON:** Paste this:
     ```json
     {
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw"
       }
     }
     ```
5. Click "Save"

### Step 3: Update "Post to Bluesky" Node
1. Open "Post to Bluesky" node
2. Under "Authentication":
   - **Authentication:** `Generic Credential Type`
   - **Generic Auth Type:** `Custom Auth`
   - **Credential:** Select "Bluesky Session"

---

## OPTION 2: Fix Header Auth Credential

If you want to keep using "Header Auth":

1. **Edit the credential**
2. Make sure there's a field for **"Header Name"** (not just "Name")
3. Set:
   - **Header Name:** `Authorization` (NOT "Bluesky Session")
   - **Header Value:** `Bearer [your token]`
   - **Credential Name:** `Bluesky Session` (this is just for display)

**If "Header Auth" doesn't have separate fields for header name and credential name, use Option 1 (Custom Auth) instead.**

---

## Also Fix the JSON Body

I also noticed the JSON body in your screenshot looks malformed. Make sure it's:

```json
{
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": "{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}",
    "createdAt": "{{$now}}"
  }
}
```

**NOT two separate JSON objects!**

---

## ✅ Quick Fix Checklist

- [ ] Delete old "Bluesky Session" credential
- [ ] Create new "Custom Auth" credential with proper JSON
- [ ] Update "Post to Bluesky" node to use "Custom Auth"
- [ ] Fix JSON body to be a single object (not concatenated)
- [ ] Test the node

