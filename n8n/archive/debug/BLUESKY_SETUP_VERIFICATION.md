# ✅ Bluesky Node Setup - Complete Verification Checklist

Let's go through EVERY setting step by step to find what's wrong.

---

## STEP 1: Verify Code Node (Should Already Work)

**Code Node Name:** `Build Bluesky Body` (or similar)

**Code:**
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

// Return the body
return [{
  json: body
}];
```

**✅ Test:** Execute this node. Check output:
- Should show `repo`, `collection`, `record`
- `record` should be an object `{...}`, NOT a string

---

## STEP 2: HTTP Request Node - Basic Settings

### 2.1 Method & URL
- [ ] **Method:** `POST`
- [ ] **URL:** `https://bsky.social/xrpc/com.atproto.repo.createRecord`

### 2.2 Authentication
- [ ] **Authentication:** `None` (NOT "Generic Credential Type")
- [ ] No credential selected

**Why:** We're adding Authorization header manually, so no credential needed.

---

## STEP 3: Headers Configuration

### 3.1 Send Headers
- [ ] **Send Headers:** ✅ Enabled (toggle ON)

### 3.2 Header Parameters
**Add these TWO headers:**

**Header 1:**
- [ ] **Name:** `Content-Type`
- [ ] **Value:** `application/json` (NOT empty, NOT an expression)

**Header 2:**
- [ ] **Name:** `Authorization`
- [ ] **Value:** `Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw`

**Important:** Both values should be **literal strings**, NOT expressions.

---

## STEP 4: Body Configuration

### 4.1 Send Body
- [ ] **Send Body:** ✅ Enabled (toggle ON)

### 4.2 Body Content Type
- [ ] **Body Content Type:** `JSON` (NOT "RAW/Custom" for now)

### 4.3 Specify Body
- [ ] **Specify Body:** `Using JSON`

### 4.4 JSON Field
**Try this EXACT value:**
```
={{JSON.stringify($json)}}
```

**NOT:**
- `={{$json}}` (might show [object Object])
- `=$json` (missing curly braces)
- `{{$json}}` (missing = prefix)

---

## STEP 5: Connection Verification

### 5.1 Node Connections
- [ ] Code node → HTTP Request node (connected)
- [ ] HTTP Request node receives data from Code node

### 5.2 Test Execution
1. Execute Code node first - verify output
2. Execute HTTP Request node - check error details

---

## STEP 6: If Still Failing - Try RAW Mode

**If JSON mode still doesn't work, switch to RAW:**

### 6.1 Update Code Node
Change return to:
```javascript
return [{
  json: {
    bodyString: JSON.stringify(body)
  }
}];
```

### 6.2 Update HTTP Request
- **Body Content Type:** `RAW/Custom`
- **Body:** `={{$json.bodyString}}`
- **Headers:** 
  - `Content-Type`: `application/json` (MUST be set manually in RAW mode!)

---

## Common Mistakes Checklist

- [ ] Authentication set to "None" (not Generic Credential Type)
- [ ] Content-Type header value is `application/json` (not empty, not expression)
- [ ] Authorization header has full Bearer token
- [ ] JSON field uses `={{JSON.stringify($json)}}` (with double curly braces)
- [ ] Code node is connected to HTTP Request node
- [ ] No extra quotes around expressions
- [ ] No instruction text pasted into value fields

---

## Debug: Check Actual Request

**When you get an error, look at the "Request" section:**

1. **Check `body` field:**
   - Should be: `{"repo":"...","collection":"...","record":{...}}`
   - NOT: `{"repo":"...","record":"{...}"}` (record as string)

2. **Check `headers` field:**
   - `content-type` should be: `"application/json"`
   - NOT: `""` (empty)
   - NOT: `"=application/json"` (with = prefix)

3. **Check `record` field:**
   - Should be: `{"$type":"app.bsky.feed.post","text":"...","createdAt":"..."}`
   - NOT: `"[object Object]"` or `"{\"$type\":...}"` (stringified)

---

## Quick Test: Hardcoded JSON

**To isolate the issue, try hardcoded JSON first:**

1. **Specify Body:** `Using JSON`
2. **JSON field:** (paste this, no expressions)
   ```json
   {
     "repo": "thenormalpeople.bsky.social",
     "collection": "app.bsky.feed.post",
     "record": {
       "$type": "app.bsky.feed.post",
       "text": "Test post",
       "createdAt": "2025-12-22T22:55:01Z"
     }
   }
   ```
3. **Headers:** Same as Step 3

**If this works:** Issue is with expression evaluation.
**If this fails:** Issue is with API/token/headers.

---

## Next Steps

1. Go through this checklist item by item
2. Check each setting matches exactly
3. Test with hardcoded JSON first
4. Then try with expressions

