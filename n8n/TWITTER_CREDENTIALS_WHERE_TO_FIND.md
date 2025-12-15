# Where to Find Twitter/X OAuth Credentials

## Quick Steps

### Step 1: Go to Twitter Developer Portal
1. Go to: https://developer.twitter.com/en/portal/dashboard
2. Sign in with your Twitter/X account

### Step 2: Create or Select Your App
1. If you already have an app, click on it
2. If not, click **"Create App"** or **"Create Project"**
   - Name it something like "AI for Normal People"
   - Click **"Create"**

### Step 3: Get Your Credentials

Once you're in your app:

1. **Consumer Key (API Key):**
   - Look for **"API Key"** or **"Consumer Key"**
   - It's a long string of letters and numbers
   - Click **"Show"** or **"Reveal"** to see it
   - Copy it → Paste into n8n "Consumer Key" field

2. **Consumer Secret (API Secret):**
   - Look for **"API Secret"** or **"Consumer Secret"**
   - It's also a long string
   - Click **"Show"** or **"Reveal"** to see it
   - Copy it → Paste into n8n "Consumer Secret" field

### Step 4: Get Access Token & Secret

You'll also need these for the Twitter node:

1. Go to **"Keys and tokens"** tab in your app
2. Scroll down to **"Access Token and Secret"**
3. Click **"Generate"** if you don't have one yet
4. Copy:
   - **Access Token** (long string)
   - **Access Token Secret** (long string)

---

## Where They Are in Twitter Portal

**Navigation:**
1. Dashboard → Your App → **"Keys and tokens"** tab
2. Or: Dashboard → Your App → **"Settings"** → **"Keys and tokens"**

**What You'll See:**
- **API Key** = Consumer Key (for n8n)
- **API Secret** = Consumer Secret (for n8n)
- **Access Token** = Access Token (for n8n)
- **Access Token Secret** = Access Token Secret (for n8n)

---

## Important Notes

1. **OAuth Redirect URL in n8n:**
   - n8n shows: `http://localhost:5678/rest/oauth1-credential/callback`
   - **You don't need to change this** - it's correct
   - Just copy it if Twitter asks for a callback URL

2. **Allowed HTTP Request Domains:**
   - Leave it as **"All"** (default)
   - You can restrict later if needed

3. **App Permissions:**
   - Make sure your app has **"Read and Write"** permissions
   - Go to **"Settings"** → **"User authentication settings"** → Set to **"Read and Write"**

---

## Quick Checklist

- [ ] Go to https://developer.twitter.com/en/portal/dashboard
- [ ] Sign in
- [ ] Create or select your app
- [ ] Go to "Keys and tokens" tab
- [ ] Copy API Key → Paste in n8n "Consumer Key"
- [ ] Copy API Secret → Paste in n8n "Consumer Secret"
- [ ] Copy Access Token → Save for later (for Twitter node)
- [ ] Copy Access Token Secret → Save for later (for Twitter node)
- [ ] Click "Save" in n8n

---

## If You Can't Find Them

**Option 1: Regenerate**
- In Twitter portal, click **"Regenerate"** next to API Key/Secret
- Copy the new values
- **Warning:** Old keys will stop working!

**Option 2: Create New App**
- Create a new app in Twitter portal
- Get fresh credentials
- Use those in n8n

---

## After You Save in n8n

Once you save the credential in n8n:
1. Go to your workflow
2. Click on **"Post to Twitter"** node
3. Click **"Credential to connect"**
4. Select your "X OAuth account" credential
5. Done!

---

## Still Stuck?

If you can't find the credentials:
1. Make sure you're signed into the correct Twitter account
2. Make sure you have a developer account (free)
3. Try creating a new app if the old one isn't working
4. Check Twitter's docs: https://developer.twitter.com/en/docs

