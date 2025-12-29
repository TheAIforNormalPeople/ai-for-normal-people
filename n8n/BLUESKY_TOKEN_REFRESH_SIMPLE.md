# 🔄 Bluesky Token Auto-Refresh - Simple Setup

Since your workflow runs every 4 hours and tokens expire after 2 hours, we'll get a fresh token each time before posting.

---

## Quick Setup (5 minutes)

### Step 1: Add "Get Bluesky Token" HTTP Request Node

1. **Open your workflow:** `multi-platform-social-json-tracking-FIXED.json`

2. **Find the connection:** `Build Bluesky Body` → `Post to Bluesky`

3. **Disconnect them temporarily** (click the connection line and delete it)

4. **Add a new HTTP Request node** between them:
   - Click the `+` button or drag from node palette
   - Search for "HTTP Request"
   - Place it between "Build Bluesky Body" and "Post to Bluesky"

5. **Name it:** `Get Bluesky Token`

6. **Configure the node:**

   **Basic Settings:**
   - **Method:** `POST`
   - **URL:** `https://bsky.social/xrpc/com.atproto.server.createSession`
   - **Authentication:** `None`

   **Headers:**
   - **Send Headers:** ✅ Enabled
   - **Add Header:**
     - **Name:** `Content-Type`
     - **Value:** `application/json`

   **Body:**
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

7. **Connect:** `Build Bluesky Body` → `Get Bluesky Token`

---

### Step 2: Add "Combine Token and Body" Code Node

1. **Add a new Code node** after "Get Bluesky Token"
2. **Name it:** `Combine Token and Body`

3. **Paste this code:**

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

4. **Connect:** `Get Bluesky Token` → `Combine Token and Body`

---

### Step 3: Update "Post to Bluesky" Node

1. **Open "Post to Bluesky" HTTP Request node**

2. **Update Authorization Header:**
   - Find the `Authorization` header
   - **Change the value from:**
     ```
     =Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ...
     ```
   - **To:**
     ```
     =Bearer {{$json.accessToken}}
     ```

3. **Update JSON Body:**
   - Find the `JSON Body` field
   - **Change from:**
     ```
     ={{$json}}
     ```
   - **To:**
     ```
     ={{$json.postBody}}
     ```

4. **Connect:** `Combine Token and Body` → `Post to Bluesky`

---

## Final Node Flow

```
Build Bluesky Body
    ↓
Get Bluesky Token (NEW - gets fresh token)
    ↓
Combine Token and Body (NEW - combines token + post body)
    ↓
Post to Bluesky (UPDATED - uses dynamic token)
    ↓
Log Bluesky to JSON
```

---

## Testing

1. **Test "Get Bluesky Token" node:**
   - Click "Execute Node"
   - Should return JSON with `accessJwt` and `refreshJwt`

2. **Test "Combine Token and Body" node:**
   - Should return `accessToken` and `postBody`

3. **Test full workflow:**
   - Run the entire workflow
   - Check that Bluesky post succeeds

---

## Security Note (Optional but Recommended)

**Store credentials in environment variables:**

1. **In n8n, go to Settings → Environment Variables**

2. **Add:**
   - `BLUESKY_HANDLE` = `thenormalpeople.bsky.social`
   - `BLUESKY_APP_PASSWORD` = `euit-mgnm-ty5q-twvv`

3. **Update "Get Bluesky Token" JSON Body to:**
   ```json
   {
     "identifier": "={{$env.BLUESKY_HANDLE}}",
     "password": "={{$env.BLUESKY_APP_PASSWORD}}"
   }
   ```

This keeps your password out of the workflow file.

---

## Troubleshooting

**"Unauthorized" error:**
- Token expired - make sure "Get Bluesky Token" is running before "Post to Bluesky"
- Check credentials are correct

**"Cannot read property 'accessJwt'":**
- Check "Get Bluesky Token" node output
- Verify the response structure matches expected format

**Node connection errors:**
- Make sure nodes are connected in the correct order
- Check that "Combine Token and Body" can access both previous nodes

---

## Done! ✅

Your workflow will now automatically get a fresh Bluesky token every time it runs, so you'll never have expired token issues again.

