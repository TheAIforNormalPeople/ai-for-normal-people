# 🔐 Bluesky Unauthorized Error - Debug

**If you're getting "Unauthorized" (401) error:**

---

## Check 1: Authorization Header

**In the error "Request" section, check:**
- Is `authorization` header present? (It shows "**hidden**" but should be there)
- Does it start with `Bearer `?

**In your HTTP Request node:**
1. Go to Headers section
2. Find `Authorization` header
3. Value should be: `Bearer [your token]`
4. Make sure it's a **literal value**, NOT an expression

---

## Check 2: Token Validity

**The token might have expired again!**

Run the token script:
```powershell
.\aiforhumans\n8n\get-bluesky-token.ps1
```

Copy the new token and update the Authorization header.

---

## Check 3: Missing Content-Type

**I notice in your request there's NO `content-type` header!**

**This is critical - add it:**

1. In Headers section
2. Add header:
   - **Name:** `Content-Type`
   - **Value:** `application/json`

**Without Content-Type, Bluesky might reject the request!**

---

## Check 4: Body Format Issue

**The body is still wrapped wrong:**
```json
{
  "body": {
    "bodyString": "..."
  }
}
```

**This needs to be fixed too!**

---

## Full Fix Checklist

- [ ] Authorization header: `Bearer [current token]` (literal, not expression)
- [ ] Content-Type header: `application/json` (MUST be present!)
- [ ] Token is fresh (regenerate if needed)
- [ ] Body format is correct (not wrapped in bodyString)

---

## If Still Unauthorized

1. **Regenerate token** (they expire)
2. **Check token format:** Should be `Bearer [long token string]`
3. **Verify app password** is correct in token script
4. **Check Bluesky account** - make sure it's active

---

**What exact error message are you seeing? Is it "401 Unauthorized" or "400 Bad Request"?**

