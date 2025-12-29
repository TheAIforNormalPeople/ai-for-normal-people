# 🔧 Get Bluesky Token - HTTP Request Node Setup Steps

## Current Status
You have the HTTP Request node created with:
- ✅ Method: POST
- ✅ URL: `https://bsky.social/xrpc/com.atproto.server.createSession`
- ✅ Authentication: None
- ❌ Send Headers: OFF (needs to be ON)
- ❌ Send Body: OFF (needs to be ON)

---

## Step-by-Step Configuration

### Step 1: Enable Send Headers

1. **Find "Send Headers" toggle** (currently OFF/greyed out)
2. **Click the toggle** to turn it ON (should turn blue/green)
3. **Click "Add Header" button** that appears
4. **Configure the header:**
   - **Name:** `Content-Type`
   - **Value:** `application/json`
   - (No `=` prefix, just the literal text)

---

### Step 2: Enable Send Body

1. **Find "Send Body" toggle** (currently OFF/greyed out)
2. **Click the toggle** to turn it ON (should turn blue/green)

---

### Step 3: Configure Body Content

After enabling "Send Body", you'll see new options:

1. **Body Content Type:** Select `JSON` from dropdown

2. **Specify Body:** Select `Using JSON` from dropdown

3. **JSON Body:** Click in the field and paste this:
   ```json
   {
     "identifier": "thenormalpeople.bsky.social",
     "password": "euit-mgnm-ty5q-twvv"
   }
   ```

**Important:** Paste it as plain JSON, NOT as an expression (no `=` prefix).

---

### Step 4: Test the Node

1. **Click "Execute step" button** (bottom right)
2. **Check the output:**
   - Should see JSON response with `accessJwt` and `refreshJwt`
   - If you see an error, check credentials

---

## Expected Output

After executing, you should see in the OUTPUT panel:

```json
{
  "accessJwt": "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ...",
  "refreshJwt": "eyJ0eXAiOiJyZWZyZXNoLWp3dCIsImFsZyI6IkVTMjU2SyJ9...",
  "handle": "thenormalpeople.bsky.social",
  "did": "did:plc:fu657lqrgwg5xiy5lg2fesdm"
}
```

---

## Next Steps After This Node Works

1. Add "Combine Token and Body" Code node (see separate guide)
2. Update "Post to Bluesky" to use dynamic token
3. Fix the logging issue (see below)

---

## Troubleshooting

**Error: "Unauthorized"**
- Check that `identifier` and `password` are correct
- Make sure password is the app password, not your account password

**Error: "No output data"**
- Make sure "Send Body" is enabled
- Check that JSON body is valid JSON (no extra quotes)

**Node shows red/error state:**
- Check all toggles are ON (Send Headers, Send Body)
- Verify JSON syntax is correct

