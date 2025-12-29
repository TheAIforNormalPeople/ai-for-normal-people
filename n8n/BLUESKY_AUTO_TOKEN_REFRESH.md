# 🔄 Bluesky Auto Token Refresh Setup

Bluesky tokens expire after **2 hours**. This guide shows you how to automatically refresh the token before posting.

---

## Option 1: Simple - Always Refresh Before Posting (Recommended)

Since your workflow runs every 4 hours, we can just get a fresh token each time. This is the simplest approach.

### Step 1: Add "Get Bluesky Token" Code Node

**Add this node BETWEEN "Build Bluesky Body" and "Post to Bluesky":**

1. **Add a new Code node** after "Build Bluesky Body"
2. **Name it:** `Get Bluesky Token`
3. **Paste this code:**

```javascript
// Bluesky credentials (use environment variables for security)
const handle = $env.BLUESKY_HANDLE || "thenormalpeople.bsky.social";
const appPassword = $env.BLUESKY_APP_PASSWORD || "euit-mgnm-ty5q-twvv";

// Get fresh Bluesky token
const tokenResponse = await $http.request({
  method: 'POST',
  url: 'https://bsky.social/xrpc/com.atproto.server.createSession',
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    identifier: handle,
    password: appPassword
  }
});

// Get the post body from previous node
const postBody = $input.first().json;

// Return both the token and the post body
return [{
  json: {
    accessToken: tokenResponse.accessJwt,
    refreshToken: tokenResponse.refreshJwt,
    postBody: postBody
  }
}];
```

**Note:** If `$http` doesn't work in Code node, use HTTP Request node instead (see Option 2).

---

### Step 2: Update "Post to Bluesky" HTTP Request Node

**In the "Post to Bluesky" node:**

1. **Authorization Header** - Change from hardcoded token to:
   ```
   =Bearer {{$json.accessToken}}
   ```

2. **JSON Body** - Change from:
   ```
   ={{$json}}
   ```
   To:
   ```
   ={{$json.postBody}}
   ```

---

## Option 2: Using HTTP Request Node for Token (If Code Node Doesn't Support $http)

### Step 1: Add "Get Bluesky Token" HTTP Request Node

**Add this node BETWEEN "Build Bluesky Body" and "Post to Bluesky":**

1. **Add a new HTTP Request node** after "Build Bluesky Body"
2. **Name it:** `Get Bluesky Token`
3. **Configure:**
   - **Method:** `POST`
   - **URL:** `https://bsky.social/xrpc/com.atproto.server.createSession`
   - **Authentication:** `None`
   - **Send Headers:** ✅ Enabled
   - **Header:**
     - **Name:** `Content-Type`
     - **Value:** `application/json`
   - **Send Body:** ✅ Enabled
   - **Body Content Type:** `JSON`
   - **Specify Body:** `Using JSON`
   - **JSON Body:**
     ```json
     {
       "identifier": "thenormalpeople.bsky.social",
       "password": "euit-mgnm-ty5q-twvv"
     }
     ```

### Step 2: Add "Combine Token and Body" Code Node

**Add this node BETWEEN "Get Bluesky Token" and "Post to Bluesky":**

1. **Add a new Code node**
2. **Name it:** `Combine Token and Body`
3. **Paste this code:**

```javascript
// Get token from "Get Bluesky Token" node
const tokenData = $('Get Bluesky Token').first().json;
const accessToken = tokenData.accessJwt;

// Get post body from "Build Bluesky Body" node
const postBody = $('Build Bluesky Body').first().json;

// Return combined data
return [{
  json: {
    accessToken: accessToken,
    postBody: postBody
  }
}];
```

### Step 3: Update "Post to Bluesky" HTTP Request Node

**In the "Post to Bluesky" node:**

1. **Authorization Header:**
   ```
   =Bearer {{$json.accessToken}}
   ```

2. **JSON Body:**
   ```
   ={{$json.postBody}}
   ```

---

## Option 3: Store Credentials Securely (Best Practice)

### Step 1: Set Environment Variables in n8n

**In your n8n instance, set these environment variables:**

- `BLUESKY_HANDLE` = `thenormalpeople.bsky.social`
- `BLUESKY_APP_PASSWORD` = `euit-mgnm-ty5q-twvv`

**How to set:**
- **Self-hosted:** Add to `.env` file or environment
- **n8n Cloud:** Settings → Environment Variables

### Step 2: Update Code to Use Environment Variables

**In "Get Bluesky Token" Code node, use:**

```javascript
const handle = $env.BLUESKY_HANDLE;
const appPassword = $env.BLUESKY_APP_PASSWORD;
```

---

## Option 4: Use Refresh Token (Advanced)

If you want to store the refresh token and only refresh when needed:

### Step 1: Store Refresh Token

Store `refreshJwt` in a file or database after first login.

### Step 2: Check Token Expiration

Before posting, check if token is expired (JWT has `exp` field).

### Step 3: Refresh If Needed

Use `com.atproto.server.refreshSession` endpoint with `refreshJwt`.

**This is more complex but more efficient if posting frequently.**

---

## Recommended Approach

**For your use case (posting every 4 hours):**

✅ **Use Option 1 or Option 2** - Always get a fresh token before posting.

**Why?**
- Your workflow runs every 4 hours (longer than 2-hour token lifetime)
- Simple and reliable
- No need to track expiration
- Token is always fresh

---

## Testing

1. **Test "Get Bluesky Token" node:**
   - Should return `accessJwt` and `refreshJwt`

2. **Test "Post to Bluesky" node:**
   - Should use the fresh token
   - Should post successfully

3. **Monitor:**
   - Check workflow runs successfully
   - Verify posts appear on Bluesky

---

## Troubleshooting

**Error: "Unauthorized"**
- Token expired - make sure you're getting a fresh token
- Check credentials are correct

**Error: "$http is not defined"**
- Use Option 2 (HTTP Request node) instead of Code node

**Error: "Cannot read property 'accessJwt'"**
- Check the response structure from createSession
- Verify node connections are correct

---

## Next Steps

1. Choose an option (Option 1 or 2 recommended)
2. Add the token refresh node
3. Update "Post to Bluesky" to use dynamic token
4. Test the workflow
5. Set environment variables for security (Option 3)

