# 🔧 Fix: Content-Type Empty + Body Has = Prefix

**Two Critical Issues:**

1. **`"content-type": ""`** - Header is EMPTY! ❌
2. **Body shows `"={\"repo\"...`** - Expression not evaluating ❌

---

## Fix 1: Content-Type Header

**In Headers section:**

1. **Find the `Content-Type` header**
2. **Check the Value field** - what's in it?
3. **It should be:** `application/json` (literal text)
4. **NOT:** Empty, NOT an expression, NOT `={{...}}`

**If it's empty or wrong:**
- **Name:** `Content-Type`
- **Value:** `application/json` (type it exactly, no expressions)

---

## Fix 2: Body Expression

**The body shows `"={\"repo\"...` which means the expression isn't evaluating.**

**In Body field (RAW/Custom mode):**

**Current (wrong):** Probably has `={{$json.bodyString}}` or similar

**Should be:** `={{$json.bodyString}}` but make sure:
- No extra quotes
- No spaces
- Exactly: `={{$json.bodyString}}`

**OR if that's not working, try without the `=` prefix:**
- `{{$json.bodyString}}`

---

## Step-by-Step Fix

### Step 1: Fix Content-Type Header

1. Go to Headers section
2. Find `Content-Type` header
3. **Value field:** Type exactly `application/json` (no quotes, no expressions)
4. Save

### Step 2: Fix Body Field

1. Go to Body section (RAW/Custom mode)
2. Body field should be: `={{$json.bodyString}}`
3. If that shows `=` in the request, try: `{{$json.bodyString}}` (no `=` prefix)

### Step 3: Verify Code Node

**Make sure Code node returns:**
```javascript
return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

---

## Quick Test

**After fixing:**
1. Execute the node
2. Check error "Request" section
3. `content-type` should be: `"application/json"` (not empty!)
4. `body` should be: `"{\"repo\":...}"` (no `=` prefix!)

---

## Most Likely Issue

**Content-Type header value is probably:**
- Empty
- An expression that's evaluating to empty
- Not set at all

**Fix:** Set it to literal text `application/json`

---

**Check the Content-Type header value RIGHT NOW - what does it say?**
