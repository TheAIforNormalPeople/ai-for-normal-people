# How to Check OpenAI API Usage and Billing

## Quick Check Methods

### Method 1: OpenAI Platform Dashboard (Easiest)

1. **Go to:** https://platform.openai.com
2. **Sign in** with your OpenAI account
3. **Click on your account** (top right) → **"Usage"** or **"Billing"**
4. **View:**
   - Current usage this month
   - Remaining credits/balance
   - API usage breakdown by model
   - Billing history

### Method 2: Check Usage via API

You can also check programmatically, but the dashboard is easier.

### Method 3: Check in n8n

If you're using n8n's OpenAI node, you might see error messages like:
- "Insufficient quota"
- "You exceeded your current quota"
- "Rate limit exceeded" (different from quota)

---

## What to Look For

### Sora 2 Pricing
- Sora 2 video generation is typically more expensive than text generation
- Check your usage for "sora-2" or "sora-2-pro" model calls
- Video generation costs vary by:
  - Video length (seconds)
  - Resolution
  - Quality settings

### Common Issues

**"Insufficient quota" or "You exceeded your current quota":**
- You've used up your credits/balance
- Need to add payment method or top up

**"Rate limit exceeded":**
- You're making too many requests too quickly
- Different from running out of money - just need to slow down

---

## Adding Credits/Billing

1. **Go to:** https://platform.openai.com/account/billing
2. **Add payment method** (if not already added)
3. **Set usage limits** (optional - to prevent over-spending)
4. **View billing history**

---

## Cost Management Tips

1. **Set usage limits** in OpenAI dashboard
2. **Monitor usage** regularly
3. **Use lower resolution** for testing (720x1280 instead of 1080x1920)
4. **Test with shorter videos** first
5. **Check pricing** before generating many videos

---

## Quick Check Command (if you have API access)

You can also check via API, but the dashboard is much easier:
- Dashboard: https://platform.openai.com/usage
- Billing: https://platform.openai.com/account/billing
