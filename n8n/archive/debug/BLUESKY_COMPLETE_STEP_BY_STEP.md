# ✅ Bluesky Setup - Complete Step-by-Step Guide

**Starting from "Generate Bluesky Post" (Claude) node forward**

---

## OVERVIEW

**Workflow Flow:**
1. Generate Bluesky Post (Claude) → Creates the post text
2. Build Bluesky Body (Code) → Builds the API request body
3. Post to Bluesky (HTTP Request) → Sends to Bluesky API

---

## STEP 1: Verify "Generate Bluesky Post" Node

**This node should already be working. Verify:**

1. **Node Name:** `Generate Bluesky Post`
2. **Node Type:** HTTP Request (calling Anthropic Claude API)
3. **Output:** Should contain `content[0].text` with the post text

**✅ Test:** Execute this node - should return post text successfully.

---

## STEP 2: Create "Build Bluesky Body" Code Node

### 2.1 Add Code Node

1. **Add a new "Code" node** after "Generate Bluesky Post"
2. **Name it:** `Build Bluesky Body`
3. **Connect:** "Generate Bluesky Post" → "Build Bluesky Body"

### 2.2 Configure Code Node

**Settings:**
- **Mode:** `Run Once for All Items` (default)
- **Language:** `JavaScript` (default)

**Code (paste this EXACT code):**

```javascript
// Get data from previous nodes
const blueskyPost = $input.first().json;
const checkNode = $('Check If Posted').first().json;

// Build the Bluesky API body
const body = {
  repo: "thenormalpeople.bsky.social",
  collection: "app.bsky.feed.post",
  record: {
    "$type": "app.bsky.feed.post",
    text: blueskyPost.content[0].text + "\n\n" + checkNode.episodeLink,
    createdAt: new Date().toISOString()
  }
};

// Return the body object directly
return [{
  json: body
}];
```

**Important:** 
- Returns `body` directly (NOT wrapped in `bodyString`)
- Uses `blueskyPost.content[0].text` from Claude node
- Uses `checkNode.episodeLink` from "Check If Posted" node

### 2.3 Test Code Node

1. **Click "Execute step"** on Code node
2. **Check output** - should show:
   ```
   repo: "thenormalpeople.bsky.social"
   collection: "app.bsky.feed.post"
   record: {
     $type: "app.bsky.feed.post"
     text: "..."
     createdAt: "..."
   }
   ```
3. **Verify:** `record` is an **object** `{...}`, NOT a string

---

## STEP 3: Configure "Post to Bluesky" HTTP Request Node

### 3.1 Basic Settings

1. **Method:** `POST`
2. **URL:** `https://bsky.social/xrpc/com.atproto.repo.createRecord`
3. **Authentication:** `None` (NOT "Generic Credential Type")

### 3.2 Headers Configuration

**Send Headers:** ✅ Enabled (toggle ON)

**Add TWO headers:**

**Header 1: Content-Type**
- **Name:** `Content-Type`
- **Value:** `application/json`
- **Important:** Literal text, NOT an expression

**Header 2: Authorization**
- **Name:** `Authorization`
- **Value:** `Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQ2NDE0MSwiZXhwIjoxNzY2NDcxMzQxLCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.7xokETiGY_BjXANj41C9lIaLZDe2Jxoudwzeq8TfdDiu5K1e6niLfJ3R4GFfoFINPyuJn15JmNK8QObYKGBRWQ`
- **Important:** 
  - Starts with `Bearer ` (space after Bearer)
  - Literal text, NOT an expression
  - **Note:** Token expires - regenerate if needed using `get-bluesky-token.ps1`

### 3.3 Body Configuration

**Send Body:** ✅ Enabled (toggle ON)

**Body Content Type:** `JSON`

**Specify Body:** `Using JSON`

**JSON field:** Paste this EXACT value:
```
={{JSON.stringify($json)}}
```

**Important:**
- Starts with `={{`
- Uses `JSON.stringify()` to convert object to JSON string
- References `$json` from Code node output

### 3.4 Connection

**Make sure:**
- Code node → HTTP Request node (connected)
- HTTP Request receives data from Code node

---

## STEP 4: Test the Complete Flow

### 4.1 Execute Each Node

1. **Execute "Generate Bluesky Post"** - should work ✅
2. **Execute "Build Bluesky Body"** - check output has `repo`, `collection`, `record` ✅
3. **Execute "Post to Bluesky"** - should post successfully ✅

### 4.2 Check for Errors

**If you get an error, check:**

1. **"Input must have the property 'repo'"**
   - Body not sending correctly
   - Check JSON field is `={{JSON.stringify($json)}}`
   - Check Code node returns `body` directly

2. **"Unauthorized" (401)**
   - Token expired - regenerate using `get-bluesky-token.ps1`
   - Check Authorization header has `Bearer ` prefix

3. **"Content-Type required"**
   - Missing Content-Type header
   - Add `Content-Type: application/json` header

4. **"Input/record must be an object"**
   - Record is being sent as string
   - Check Code node returns object, not stringified JSON

---

## STEP 5: Verify Request Format

**When you execute "Post to Bluesky", check the error "Request" section:**

**Should show:**
```json
{
  "body": {
    "repo": "thenormalpeople.bsky.social",
    "collection": "app.bsky.feed.post",
    "record": {
      "$type": "app.bsky.feed.post",
      "text": "...",
      "createdAt": "..."
    }
  },
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer ..."
  }
}
```

**Should NOT show:**
- `"body": { "bodyString": "..." }` ❌ (wrapped wrong)
- `"content-type": ""` ❌ (empty)
- `"record": "[object Object]"` ❌ (string instead of object)

---

## QUICK CHECKLIST

**Code Node:**
- [ ] Returns `body` object directly (not `bodyString`)
- [ ] Has `repo`, `collection`, `record` fields
- [ ] `record` is an object `{...}`, not a string

**HTTP Request Node:**
- [ ] Authentication: `None`
- [ ] Header: `Content-Type: application/json` (literal)
- [ ] Header: `Authorization: Bearer [token]` (literal, current token)
- [ ] Body Content Type: `JSON`
- [ ] Specify Body: `Using JSON`
- [ ] JSON field: `={{JSON.stringify($json)}}`
- [ ] Connected to Code node

---

## TROUBLESHOOTING

### Token Expired?
```powershell
cd aiforhumans\n8n
.\get-bluesky-token.ps1
```
Copy new token, update Authorization header.

### Body Still Wrapped?
- Check Code node returns `body`, not `{ bodyString: ... }`
- Check JSON field is `={{JSON.stringify($json)}}`, not `={{$json.bodyString}}`

### Missing Content-Type?
- Add header manually: `Content-Type: application/json`
- Make sure it's literal text, not an expression

---

## FINAL TEST

1. Execute entire workflow
2. Check "Post to Bluesky" output
3. Should see success response with post URI
4. Check Bluesky - post should appear!

---

**You're ready! Follow these steps exactly and it should work! 🚀**

