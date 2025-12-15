# Twitter/X OAuth Setup for n8n - Complete Guide

## Overview
You need to create a Twitter/X Developer App and get OAuth credentials to connect n8n to Twitter.

---

## STEP 1: Create Twitter/X Developer Account

1. Go to https://developer.twitter.com/
2. Sign in with your Twitter/X account
3. If you don't have a developer account:
   - Click "Sign up" or "Apply"
   - Choose "Hobbyist" or "Making a bot" (free tier)
   - Fill out the application form
   - Wait for approval (usually instant for basic access)

---

## STEP 2: Create a New App

1. Once logged in, go to https://developer.twitter.com/en/portal/dashboard
2. Click **"Create App"** or **"+ Create Project"**
3. Fill out the form:
   - **App name:** Something like "AI for Normal People Bot" or "My Blog Automation"
   - **App description:** "Automated posting for blog episodes"
   - **Website URL:** `https://theaifornormalpeople.com`
   - **Callback URL:** `http://localhost:5678/rest/oauth1-credential/callback`
   - **Terms of Service:** (optional, can leave blank)
   - **Privacy Policy:** `https://theaifornormalpeople.com/privacy`
4. Click **"Create"**

---

## STEP 3: Get Your API Keys

After creating the app, you'll see your app dashboard. You need:

### A. Consumer Keys (API Key & Secret)
1. Go to **"Keys and tokens"** tab
2. Under **"Consumer Keys"**:
   - **API Key** (also called Consumer Key) - Copy this
   - **API Key Secret** (also called Consumer Secret) - Click "Reveal" and copy this

### B. Access Token & Secret
1. Still in **"Keys and tokens"** tab
2. Under **"Authentication Tokens"**:
   - Click **"Generate"** next to "Access Token and Secret"
   - **Access Token** - Copy this
   - **Access Token Secret** - Click "Reveal" and copy this

**⚠️ IMPORTANT:** Save all 4 values somewhere safe:
- API Key (Consumer Key)
- API Key Secret (Consumer Secret)
- Access Token
- Access Token Secret

---

## STEP 4: Set App Permissions

1. Go to **"Settings"** tab in your app
2. Under **"App permissions"**:
   - Select **"Read and Write"** (you need write to post tweets)
3. Click **"Save"**
4. You may need to regenerate your Access Token after changing permissions:
   - Go back to **"Keys and tokens"**
   - Regenerate Access Token and Secret
   - Copy the new values

---

## STEP 5: Add Credential in n8n

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for **"X"** or **"Twitter"**
3. Select **"X OAuth API"** (or "Twitter OAuth API")
4. Fill in the fields:

   **OAuth Redirect URL:**
   - Should already be filled: `http://localhost:5678/rest/oauth1-credential/callback`
   - Copy this URL - you'll need it for Step 3

   **Consumer Key:**
   - Paste your **API Key** from Step 3A

   **Consumer Secret:**
   - Paste your **API Key Secret** from Step 3A

   **Access Token:**
   - Paste your **Access Token** from Step 3B

   **Access Token Secret:**
   - Paste your **Access Token Secret** from Step 3B

   **Allowed HTTP Request Domains:**
   - Leave as **"All"** (or specify if you want to restrict)

5. Click **"Save"**
6. Name it: **"Twitter account"** (or whatever you prefer)

---

## STEP 6: Connect to Workflow

1. Open your workflow
2. Click on **"Post to Twitter"** node
3. Click **"Credential to connect with"**
4. Select **"Twitter account"** (the credential you just created)
5. The node should now be connected!

---

## STEP 7: Test It

1. In the workflow, click on **"Post to Twitter"** node
2. Click **"Execute step"** (or run the whole workflow)
3. Check if it posts successfully
4. Check your Twitter/X account - you should see a test tweet

---

## Troubleshooting

### "Invalid or expired token"
- Regenerate your Access Token and Secret in Twitter Developer Portal
- Update the credential in n8n with new values

### "Read-only application"
- Go to app Settings → App permissions
- Change to "Read and Write"
- Regenerate Access Token

### "Forbidden" or "403 error"
- Check app permissions are set to "Read and Write"
- Make sure you regenerated tokens after changing permissions

### "OAuth callback URL mismatch"
- Make sure the callback URL in Twitter app matches: `http://localhost:5678/rest/oauth1-credential/callback`
- If n8n is running on a different port, update both places

### "Rate limit exceeded"
- Twitter has rate limits (varies by plan)
- Free tier: 1,500 tweets per month
- Wait a bit and try again

---

## Quick Checklist

- [ ] Twitter Developer account created
- [ ] App created in Developer Portal
- [ ] API Key and Secret copied
- [ ] Access Token and Secret generated and copied
- [ ] App permissions set to "Read and Write"
- [ ] Credential created in n8n with all 4 values
- [ ] Credential connected to "Post to Twitter" node
- [ ] Test tweet posted successfully

---

## Security Notes

- **Never share your API keys or tokens publicly**
- Store them securely (password manager, etc.)
- If keys are exposed, regenerate them immediately
- Use environment variables for production setups

---

## Need More Help?

If you're stuck:
1. Check Twitter Developer Portal docs: https://developer.twitter.com/en/docs
2. Verify all 4 values are correct (no extra spaces, copied completely)
3. Make sure app has "Read and Write" permissions
4. Try regenerating tokens if nothing works

