# 🔧 Fix "undefined" accessToken Issue

The `accessToken` is showing as `[undefined]`, which means "Post to Bluesky" isn't getting the data from "Combine Token and Body".

---

## Problem Diagnosis

**What's happening:**
- "Post to Bluesky" is looking for `$json.accessToken`
- But it's not finding it (showing `undefined`)
- This means the node connections are wrong OR "Combine Token and Body" isn't outputting correctly

---

## Step 1: Check Node Connections

**Verify the flow is:**
```
Build Bluesky Body
    ↓
Get Bluesky Token
    ↓
Combine Token and Body
    ↓
Post to Bluesky ← Should be connected to "Combine Token and Body"
```

**Check:**
1. Is "Post to Bluesky" connected to "Combine Token and Body"?
2. Or is it still connected to "Build Bluesky Body" or "Get Bluesky Token"?

---

## Step 2: Test "Combine Token and Body" Node

1. **Click on "Combine Token and Body" node**
2. **Click "Execute step"**
3. **Check the OUTPUT:**
   - Should show JSON with `accessToken` and `postBody`
   - If you see `accessToken: "eyJ0eXAi..."` → Node is working
   - If you see errors → Node has issues

---

## Step 3: Check "Combine Token and Body" Code

**Open "Combine Token and Body" Code node and verify the code is:**

```javascript
// Get fresh token from "Get Bluesky Token" node
const tokenResponse = $('Get Bluesky Token').first().json;
const accessToken = tokenResponse.accessJwt;

// Get post body from "Build Bluesky Body" node
const postBody = $('Build Bluesky Body').first().json;

// Return combined data for "Post to Bluesky" node
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

**Common issues:**
- Wrong node name in `$('Get Bluesky Token')` - must match exactly
- Wrong node name in `$('Build Bluesky Body')` - must match exactly
- Missing `return` statement
- Not returning an array `[{...}]`

---

## Step 4: Fix Node Connection

**If "Post to Bluesky" is connected to the wrong node:**

1. **Disconnect "Post to Bluesky"** from whatever it's connected to
2. **Connect "Combine Token and Body" → "Post to Bluesky"**
3. **Make sure it's the ONLY connection** (not multiple inputs)

---

## Step 5: Alternative - Use Input Directly

**If the connections are confusing, try this in "Post to Bluesky":**

**Authorization header:**
```
Bearer {{$input.item.json.accessToken}}
```

**OR if that doesn't work:**
```
Bearer {{$json.accessToken}}
```

**But first, make sure the connection is correct!**

---

## Step 6: Debug - Check What "Post to Bluesky" Is Receiving

1. **In "Post to Bluesky" node, look at the INPUT section** (left panel)
2. **What data do you see?**
   - If you see `accessToken` and `postBody` → Connection is good, expression is wrong
   - If you see something else → Connection is wrong

---

## Most Likely Issue

**"Post to Bluesky" is still connected to "Build Bluesky Body" instead of "Combine Token and Body".**

**Fix:**
1. Disconnect "Post to Bluesky" from "Build Bluesky Body"
2. Connect "Combine Token and Body" → "Post to Bluesky"
3. Test again

---

## Quick Test

1. **Execute "Combine Token and Body"** - check output has `accessToken`
2. **Check "Post to Bluesky" INPUT** - should show same data
3. **If INPUT shows different data** → Wrong connection
4. **If INPUT shows correct data but expression fails** → Expression syntax issue

---

## Alternative Expression Formats

If `{{$json.accessToken}}` doesn't work, try:

1. `{{$input.item.json.accessToken}}`
2. `={{$json.accessToken}}`
3. `Bearer ={{$json.accessToken}}`

But first, fix the node connection!

