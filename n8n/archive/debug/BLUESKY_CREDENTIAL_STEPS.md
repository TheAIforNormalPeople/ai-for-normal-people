# 🔑 Bluesky Credential Setup - Step by Step

## In n8n Credential Creation Dialog:

### Step 1: Click "Add Credential"
- In n8n, click **"Credentials"** (gear icon or left sidebar)
- Click **"Add Credential"** button

### Step 2: Search for Credential Type
- In the search box, type: **`HTTP Header Auth`**
- OR search for: **`Header`**
- OR look for: **`HTTP Header Authentication`**

### Step 3: Select It
- Click on **"HTTP Header Auth"** (or similar name)
- It should have an icon that looks like a key or header symbol

### Step 4: Fill in the Fields

**Field 1: Name**
- **Label:** `Name` (or `Credential Name`)
- **Value:** `Bluesky Session`

**Field 2: Header Name**
- **Label:** `Name` (this is the HTTP header name)
- **Value:** `Authorization`

**Field 3: Header Value**
- **Label:** `Value` (this is the header value)
- **Value:** `Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw`

**⚠️ Important:** Make sure the Value field includes `Bearer ` (with a space) before the token!

### Step 5: Save
- Click **"Save"** button

---

## If You Don't See "HTTP Header Auth":

**Alternative names to search for:**
- `Header Auth`
- `HTTP Header`
- `Custom Header`
- `Generic Credential Type` (then select "HTTP Header Auth" from dropdown)

**If still can't find it:**
- Look for "Generic" or "Custom" credential types
- Some n8n versions have it under "Generic Credential Type" → then select "HTTP Header Auth" as the type

---

## After Creating Credential:

1. Go back to **"Post to Bluesky"** node
2. Click on the node to open its settings
3. Under **"Authentication"** section:
   - **Authentication:** Select `Generic Credential Type`
   - **Generic Auth Type:** Select `HTTP Header Auth`
   - **Credential:** Select `Bluesky Session` (the one you just created)

---

## ✅ Quick Checklist:

- [ ] Found "HTTP Header Auth" credential type
- [ ] Created credential named "Bluesky Session"
- [ ] Header Name = `Authorization`
- [ ] Header Value = `Bearer [token]` (with space after Bearer)
- [ ] Saved credential
- [ ] Selected it in "Post to Bluesky" node

