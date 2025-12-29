# INSTAGRAM SETUP - STEP BY STEP

**Complete guide to set up Instagram posting in n8n**

---

## PART 1: FACEBOOK BUSINESS ACCOUNT

### Step 1.1: Create Facebook Business Account
1. Go to: https://business.facebook.com
2. Click **"Create Account"** (or sign in if you have one)
3. **Business Name:** `AI for Normal People` (or your business name)
4. **Your Name:** Your name
5. **Business Email:** Your email
6. Click **"Next"**
7. Verify your email (check inbox)

### Step 1.2: Complete Business Setup
1. **Business Details:**
   - Industry: Select "Media/Entertainment" or "Education"
   - Business Type: "Individual" or "Business"
   - Click **"Next"**
2. **Add Business Info:**
   - Address (optional, can skip)
   - Phone number (optional)
   - Click **"Next"**
3. **Skip** any ad setup prompts (you can do this later)

---

## PART 2: INSTAGRAM BUSINESS ACCOUNT

### Step 2.1: Convert Personal to Business (if needed)
1. Open Instagram app (or web)
2. Go to **Settings** → **Account**
3. Scroll down to **"Switch to Professional Account"**
4. Click **"Switch"**
5. Select **"Business"** (not Creator)
6. Click **"Next"**

### Step 2.2: Connect to Facebook Business
1. **Connect Facebook Page:**
   - Instagram will ask to connect a Facebook Page
   - If you don't have one, create one:
     - Go to: https://www.facebook.com/pages/create
     - Choose **"Business or Brand"**
     - Name: `AI for Normal People` (or your name)
     - Category: "Media/Entertainment" or "Education"
     - Click **"Create Page"**
2. **Link Instagram to Facebook Page:**
   - In Instagram, select your Facebook Page
   - Click **"Next"**
3. **Add Contact Info:**
   - Email (optional)
   - Phone (optional)
   - Click **"Next"**
4. **Done!** Your Instagram is now a Business Account

---

## PART 3: META DEVELOPER APP

### Step 3.1: Create Meta Developer Account
1. Go to: https://developers.facebook.com
2. Click **"Get Started"** (top right)
3. Sign in with your Facebook account
4. **Developer Account Type:** Select **"Business"**
5. Click **"Next"**
6. **Complete Profile:**
   - Role: "Developer" or "Other"
   - Purpose: "I want to build apps for my business"
   - Click **"Next"**
7. **Add Phone Number** (for verification)
8. **Verify Phone** (enter code from SMS)
9. Click **"Complete Registration"**

### Step 3.2: Create App
1. In Meta Developer Dashboard, click **"Create App"**
2. **App Type:** Select **"Business"**
3. Click **"Next"**
4. **App Details:**
   - **App Name:** `AI for Normal People Blog`
   - **App Contact Email:** Your email
   - **Business Account:** Select your business account
   - Click **"Create App"**

### Step 3.3: Add Instagram Basic Display Product
1. In your app dashboard, find **"Add Products"** section
2. Find **"Instagram Basic Display"** (or "Instagram Graph API")
3. Click **"Set Up"** or **"Add"**
4. **Use Case:** Select **"I want to display Instagram content"** or **"I want to post to Instagram"**
5. Click **"Next"**

### Step 3.4: Configure Instagram Graph API
1. Go to **"Products"** → **"Instagram"** (or "Instagram Graph API")
2. **Basic Display:**
   - **Valid OAuth Redirect URIs:** Add `https://your-n8n-url.com/` (or leave default for now)
   - Click **"Save Changes"**
3. **Settings:**
   - **Instagram App ID:** Copy this (you'll need it)
   - **Instagram App Secret:** Click "Show" and copy (you'll need it)

---

## PART 4: GET ACCESS TOKEN

### Step 4.1: Get User Access Token
1. Go to **"Tools"** → **"Graph API Explorer"** (in Meta Developer)
2. **Select App:** Choose your app (`AI for Normal People Blog`)
3. **Select User:** Choose your Facebook account
4. **Permissions:** Add these:
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_read_engagement`
   - `pages_manage_posts`
5. Click **"Generate Access Token"**
6. **Copy the token** (this is short-lived, ~1 hour)

### Step 4.2: Exchange for Long-Lived Token
1. In Graph API Explorer, you'll see **"Access Token"**
2. **To make it long-lived (60 days):**
   - Go to: https://developers.facebook.com/tools/accesstoken/
   - Find your app
   - Click **"Extend Access Token"**
   - Copy the new long-lived token
3. **Or use API call:**
   ```
   GET https://graph.facebook.com/v18.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id={app-id}&
     client_secret={app-secret}&
     fb_exchange_token={short-lived-token}
   ```

### Step 4.3: Get Instagram Business Account ID
1. **Get your Facebook Page ID:**
   - Go to: https://www.facebook.com/your-page-name
   - View page source (right-click → View Source)
   - Search for `"page_id"` or look in URL
   - Or use: https://www.facebook.com/your-page-name/about
2. **Get Instagram Business Account ID:**
   ```
   GET https://graph.facebook.com/v18.0/{page-id}?
     fields=instagram_business_account&
     access_token={your-token}
   ```
   - Response will have `instagram_business_account.id` - this is your IG User ID

---

## PART 5: TEST CONNECTION

### Step 5.1: Test API Access
1. **Test getting account info:**
   ```
   GET https://graph.facebook.com/v18.0/{ig-user-id}?
     fields=username,account_type&
     access_token={your-token}
   ```
2. Should return your Instagram username and account type

### Step 5.2: Save Credentials
**You'll need these for n8n:**
- **Instagram App ID**
- **Instagram App Secret**
- **Instagram User ID** (Business Account ID)
- **Long-Lived Access Token**

**Save them securely!**

---

## ✅ CHECKLIST

**Facebook Business:**
- [ ] Created Business Account
- [ ] Created Facebook Page
- [ ] Verified email

**Instagram Business:**
- [ ] Converted to Business Account
- [ ] Linked to Facebook Page
- [ ] Business account active

**Meta Developer:**
- [ ] Created Developer Account
- [ ] Created App
- [ ] Added Instagram Graph API product
- [ ] Got App ID and App Secret

**Access Token:**
- [ ] Generated short-lived token
- [ ] Exchanged for long-lived token (60 days)
- [ ] Got Instagram Business Account ID
- [ ] Tested API connection

---

## 🆘 TROUBLESHOOTING

**"App not approved for Instagram":**
- Some features require app review
- For basic posting, you might need to request permissions
- Start with basic permissions first

**"Invalid access token":**
- Token might have expired
- Regenerate long-lived token
- Make sure permissions are correct

**"Instagram account not found":**
- Make sure Instagram is Business Account
- Make sure it's linked to Facebook Page
- Check Instagram User ID is correct

---

**Once you complete these steps, you'll have everything needed for n8n!**


