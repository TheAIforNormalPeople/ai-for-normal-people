# TWITTER SETUP - QUICK FIX

**What's the issue?** Tell me and I'll help fix it.

---

## COMMON ISSUES & FIXES

### Issue 1: "Can't find OAuth1 API credential type"
**Fix:**
- In n8n, go to Credentials → Add Credential
- Search for: `OAuth1` or `X OAuth` or `OAuth 1.0`
- If you can't find it, try: `Twitter` or `X API`

### Issue 2: "Don't have Twitter API credentials"
**Fix:**
1. Go to: https://developer.twitter.com/en/portal/dashboard
2. Sign in with your Twitter/X account
3. Create a Project (if needed)
4. Create an App
5. Set permissions to **"Read and write"** (CRITICAL!)
6. Get your 4 credentials:
   - Consumer Key (API Key)
   - Consumer Secret (API Secret)
   - Access Token
   - Access Token Secret

### Issue 3: "Credential created but not working"
**Fix:**
- Check all 4 values are correct (no extra spaces)
- Make sure app permissions are "Read and write" (not "Read only")
- Try regenerating Access Token and Secret
- Test the credential in n8n

### Issue 4: "X won't let me finish the dev part"
**Fix:**
- Twitter/X sometimes requires phone verification
- Or account verification
- Or you might need to wait 24 hours
- Try again later, or use a different account

### Issue 5: "Red warning in Post to Twitter node"
**Fix:**
- Click on "Post to Twitter" node
- Under "Credential", select your "Twitter OAuth" credential
- The red warning should disappear

---

## WHAT DO YOU NEED HELP WITH?

**Tell me:**
1. What error message are you seeing? (if any)
2. Where are you stuck? (Getting credentials? Creating credential in n8n? Testing?)
3. What happens when you try to post?

Then I can give you the exact fix!

