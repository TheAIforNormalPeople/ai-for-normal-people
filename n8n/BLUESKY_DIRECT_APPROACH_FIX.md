# ✅ Bluesky - Direct Approach (No Code Node)

**The HTTP Request is already connected to "Generate Bluesky Post" - let's use that directly!**

---

## Step 1: Remove/Disconnect Code Node

**If you have a Code node between "Generate Bluesky Post" and "Post to Bluesky":**
- Disconnect it or remove it
- Connect "Generate Bluesky Post" directly to "Post to Bluesky"

---

## Step 2: Configure HTTP Request Node

### 2.1 Basic Settings
- **Method:** `POST`
- **URL:** `https://bsky.social/xrpc/com.atproto.repo.createRecord`
- **Authentication:** `None`

### 2.2 Headers
- **Content-Type:** `application/json` (literal)
- **Authorization:** `Bearer [your current token]` (literal)

### 2.3 Body Configuration

**Send Body:** ✅ Enabled

**Body Content Type:** `JSON`

**Specify Body:** `Using JSON`

**JSON field:** Paste this EXACT value:

```
={
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": "{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}",
    "createdAt": "{{$now}}"
  }
}
```

**Important:**
- Starts with `={`
- Uses `$json['content'][0]['text']` to get text from "Generate Bluesky Post"
- Uses `$('Check If Posted').first().json.episodeLink` to get link from "Check If Posted" node
- Uses `{{$now}}` for timestamp

---

## Step 3: Test

1. **Execute "Post to Bluesky" node**
2. **Check Result preview** - should show proper JSON (not `[object Object]`)
3. **If it works:** Great! ✅
4. **If it shows `[object Object]`:** The expression isn't evaluating - try RAW mode

---

## Alternative: If JSON Mode Still Fails

**Switch to RAW mode:**

1. **Body Content Type:** `RAW/Custom`
2. **Body field:** Use this expression:
   ```
   ={"repo":"thenormalpeople.bsky.social","collection":"app.bsky.feed.post","record":{"$type":"app.bsky.feed.post","text":"{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}","createdAt":"{{$now}}"}
   ```
3. **Headers:** Make sure `Content-Type: application/json` is set

---

## Why This Should Work

- **Direct connection:** No Code node in between
- **Simple expression:** References nodes directly
- **Matches workflow file:** This is what's already configured

---

**Try the JSON field with the expression above - it should work since the input is correct!**

