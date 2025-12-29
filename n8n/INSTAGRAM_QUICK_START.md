# INSTAGRAM SETUP - QUICK START (You Already Have Business Account!)

**You already have:**
- ✅ Instagram Business Account
- ✅ Meta Business Suite access

**You still need:**
- Meta Developer Account (different from Business Suite)
- Developer App (for API access)
- Access Token

---

## WHAT'S THE DIFFERENCE?

### Meta Business Suite:
- **What it is:** Management dashboard for your business accounts
- **Used for:** Managing posts, ads, insights, messages
- **You have this:** ✅

### Meta Developer:
- **What it is:** Platform for building apps and getting API access
- **Used for:** Creating apps, getting API keys, accessing Instagram Graph API
- **You need this:** ❌ (to post via API)

**They're separate but connected** - you use the same Facebook account for both.

---

## QUICK SETUP (Since You Have Business Account)

### Step 1: Create Meta Developer Account
1. Go to: https://developers.facebook.com
2. Click **"Get Started"** (top right)
3. Sign in with the **same Facebook account** you use for Business Suite
4. **Developer Account Type:** Select **"Business"**
5. Click **"Next"**
6. **Complete Profile:**
   - Role: "Developer" or "Other"
   - Purpose: "I want to build apps for my business"
   - Click **"Next"**
7. **Add Phone Number** (for verification)
8. **Verify Phone** (enter code from SMS)
9. Click **"Complete Registration"**

**Note:** This is separate from Business Suite, but uses the same Facebook account.

---

### Step 2: Create App
1. In Meta Developer Dashboard, click **"Create App"**
2. **App Type:** Select **"Business"**
3. Click **"Next"**
4. **App Details:**
   - **App Name:** `AI for Normal People Blog`
   - **App Contact Email:** Your email
   - **Business Account:** Select your business account (should see it since you're in Business Suite)
   - Click **"Create App"**

---

### Step 3: Add Instagram Graph API
1. In your app dashboard, find **"Add Products"** section
2. Find **"Instagram Graph API"** (or "Instagram")
3. Click **"Set Up"** or **"Add"**
4. **Use Case:** Select **"I want to post to Instagram"** or **"I want to display Instagram content"**
5. Click **"Next"**

---

### Step 4: Get Your Instagram Business Account ID
**Since you're already in Business Suite, this is easier:**

1. **Option A: From Business Suite**
   - Go to: https://business.facebook.com
   - Click on your Instagram account
   - Look for Account ID in settings (might be visible)

2. **Option B: From Graph API Explorer**
   - Go to: https://developers.facebook.com/tools/explorer/
   - Select your app
   - Get a token (we'll do this in next step)
   - Query: `me/accounts` to find your Instagram account ID

---

### Step 5: Get Access Token
1. Go to: https://developers.facebook.com/tools/accesstoken/
2. Find your app
3. **Generate Token:**
   - Click **"Generate Token"**
   - Select permissions:
     - `instagram_basic`
     - `instagram_content_publish`
     - `pages_read_engagement`
     - `pages_manage_posts`
4. **Copy the token**
5. **Extend to Long-Lived:**
   - Click **"Extend Access Token"** (or use API call)
   - Copy the long-lived token (60 days)

---

## WHAT YOU'LL NEED FOR N8N

**Save these:**
1. **Instagram App ID** (from app settings)
2. **Instagram App Secret** (from app settings → Basic)
3. **Instagram Business Account ID** (your IG account ID)
4. **Long-Lived Access Token** (from Step 5)

---

## ✅ QUICK CHECKLIST

**Meta Developer:**
- [ ] Created Developer Account (separate from Business Suite)
- [ ] Created App
- [ ] Added Instagram Graph API product
- [ ] Got App ID and App Secret

**Access:**
- [ ] Got Instagram Business Account ID
- [ ] Generated long-lived access token
- [ ] Tested API connection

---

## 🆘 COMMON QUESTIONS

**Q: Do I need to create a new Facebook account?**
A: No! Use the same Facebook account you use for Business Suite.

**Q: Is this the same as Business Suite?**
A: No, but they're connected. Business Suite = managing accounts. Developer = API access.

**Q: Will this affect my Business Suite?**
A: No, they're separate tools. Developer is just for API access.

**Q: Do I need to verify my business again?**
A: Usually no, since you're using the same account.

---

**Once you have the 4 values (App ID, Secret, Account ID, Token), we can build the n8n workflow!**


