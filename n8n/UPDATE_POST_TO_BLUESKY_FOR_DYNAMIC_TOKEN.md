# 🔄 Update "Post to Bluesky" to Use Dynamic Token

Right now "Post to Bluesky" has a hardcoded token. We need to use the fresh token from "Get Bluesky Token" node.

---

## Step 1: Add "Combine Token and Body" Code Node

**Add this node BETWEEN "Get Bluesky Token" and "Post to Bluesky":**

1. **Disconnect:** `Get Bluesky Token` → `Post to Bluesky` (temporarily)

2. **Add a new Code node:**
   - Click `+` or drag from node palette
   - Search for "Code"
   - Place it between "Get Bluesky Token" and "Post to Bluesky"

3. **Name it:** `Combine Token and Body`

4. **Paste this code:**

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

5. **Connect nodes:**
   - `Get Bluesky Token` → `Combine Token and Body`
   - `Combine Token and Body` → `Post to Bluesky`

---

## Step 2: Update "Post to Bluesky" HTTP Request Node

**Open the "Post to Bluesky" node:**

1. **Find the Authorization header** (currently has the hardcoded token)

2. **Change the value from:**
   ```
   =Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw
   ```

3. **Change it to:**
   ```
   =Bearer {{$json.accessToken}}
   ```

   **Important:** Use `{{$json.accessToken}}` (with double curly braces, no `=` prefix in the expression itself, but the field might need `=` prefix depending on n8n version)

   **If that doesn't work, try:**
   ```
   =Bearer ={{$json.accessToken}}
   ```
   OR
   ```
   Bearer {{$json.accessToken}}
   ```

4. **Find the JSON Body field** (currently `={{$json}}`)

5. **Change it from:**
   ```
   ={{$json}}
   ```

6. **Change it to:**
   ```
   ={{$json.postBody}}
   ```

   This tells it to use the `postBody` from the combined data, not the whole object.

---

## Step 3: Verify Node Connections

**Final flow should be:**
```
Build Bluesky Body
    ↓
Get Bluesky Token (gets fresh token)
    ↓
Combine Token and Body (NEW - combines token + post body)
    ↓
Post to Bluesky (UPDATED - uses dynamic token)
    ↓
Log Bluesky to JSON
```

---

## Step 4: Test

1. **Test "Combine Token and Body" node:**
   - Click "Execute step"
   - Should show `accessToken` and `postBody` in output

2. **Test "Post to Bluesky" node:**
   - Should use the fresh token
   - Should post successfully

---

## Troubleshooting

**Error: "Cannot read property 'accessJwt'"**
- Check "Get Bluesky Token" executed successfully
- Verify it returned `accessJwt` in the response

**Error: "Cannot read property 'postBody'"**
- Check "Build Bluesky Body" node executed
- Verify "Combine Token and Body" can access both nodes

**Error: "Unauthorized"**
- Token might be expired (shouldn't happen with fresh token)
- Check Authorization header expression is correct
- Verify `accessToken` value is being passed correctly

**Authorization header not updating:**
- Try different expression formats:
  - `Bearer {{$json.accessToken}}`
  - `=Bearer {{$json.accessToken}}`
  - `Bearer ={{$json.accessToken}}`

---

## Quick Reference: What Changed

**Before:**
- Authorization: Hardcoded token (expires after 2 hours)
- JSON Body: `={{$json}}` (from "Build Bluesky Body")

**After:**
- Authorization: `=Bearer {{$json.accessToken}}` (fresh token each time)
- JSON Body: `={{$json.postBody}}` (from combined data)

---

## Done! ✅

Now your workflow will:
1. Get a fresh Bluesky token every time it runs
2. Use that token to post
3. Never have expired token issues

