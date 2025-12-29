# 🔧 Configure Post to Twitter & Bluesky Nodes

**Status:** Claude nodes working ✅  
**Next:** Configure the posting nodes

---

## 📝 POST TO TWITTER NODE

### Configuration:

**Method:** `POST` ✅ (already set)

**URL:** `https://api.twitter.com/2/tweets` ✅ (already set)

**Authentication:**
- **Credential Type:** Select `OAuth1 API` (or `Twitter OAuth` if you named it that)
- **Select the credential** you created earlier

**Send Body:** `ON` ✅

**Body Content Type:** `JSON` ✅

**Specify Body:** `Using Fields Below` ✅

**Body Parameters:**
- **Name:** `text`
- **Value:** 
```
={{$json["content"][0]["text"]}}

{{$('If Not Posted').first().json.episodeLink}}
```

**Important:** This combines:
1. The generated tweet text from Claude (`content[0].text`)
2. The episode link from the "If Not Posted" node

---

## 📝 POST TO BLUESKY NODE

### Configuration:

**Method:** `POST` ✅

**URL:** `https://bsky.social/xrpc/com.atproto.repo.createRecord`

**Authentication:**
- **Credential Type:** Select `HTTP Header Auth` (or `Bluesky Auth` if you named it that)
- **Select the credential** you created earlier

**Send Headers:** `ON`

**Header Parameters:**
- **Name:** `Authorization`
- **Value:** `Bearer [your Bluesky access token]` (from your credential)

**Send Body:** `ON`

**Body Content Type:** `JSON`

**Specify Body:** `Using JSON`

**JSON Body:**
```json
{
  "repo": "YOUR_BLUESKY_HANDLE.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": "={{$json[\"content\"][0][\"text\"]}}\n\n{{$('If Not Posted').first().json.episodeLink}}",
    "createdAt": "={{$now}}"
  }
}
```

**Replace:**
- `YOUR_BLUESKY_HANDLE.bsky.social` with your actual Bluesky handle (e.g., `thenormalpeople.bsky.social`)

---

## 🔗 CONNECTING THE NODES

### Flow Should Be:

1. **If Not Posted** (TRUE output) →
   - **Top branch:** Generate Tweet via Claude → Post to Twitter → Log Twitter to JSON
   - **Bottom branch:** Generate Bluesky Post → Post to Bluesky → Log Bluesky to JSON

2. **Both branches** →
   - Merge Logs → Write Tracking JSON

### Verify Connections:

**"If Not Posted" node:**
- TRUE output should connect to BOTH:
  - "Generate Tweet via Claude" (top)
  - "Generate Bluesky Post" (bottom)

**"Post to Twitter" node:**
- Input: From "Generate Tweet via Claude"
- Output: To "Log Twitter to JSON"

**"Post to Bluesky" node:**
- Input: From "Generate Bluesky Post"
- Output: To "Log Bluesky to JSON"

**"Merge Logs" node:**
- Input 1: From "Log Twitter to JSON"
- Input 2: From "Log Bluesky to JSON"
- Output: To "Write Tracking JSON"

---

## ✅ TESTING ORDER

1. ✅ RSS Feed Reader (working)
2. ✅ Read Tracking JSON (working)
3. ✅ Check If Posted (working)
4. ✅ If Not Posted (working)
5. ✅ Generate Tweet via Claude (working)
6. ✅ Generate Bluesky Post (working)
7. ⏳ **Post to Twitter** (configure now)
8. ⏳ **Post to Bluesky** (configure now)
9. ⏳ Log Twitter to JSON
10. ⏳ Log Bluesky to JSON
11. ⏳ Merge Logs
12. ⏳ Write Tracking JSON

---

## 🎯 QUICK CHECKLIST

**Post to Twitter:**
- [ ] Method: POST
- [ ] URL: https://api.twitter.com/2/tweets
- [ ] Authentication: Twitter OAuth credential selected
- [ ] Body: text field with tweet + link

**Post to Bluesky:**
- [ ] Method: POST
- [ ] URL: https://bsky.social/xrpc/com.atproto.repo.createRecord
- [ ] Authentication: Bluesky Auth credential selected
- [ ] Body: JSON with repo, collection, record

**Connections:**
- [ ] If Not Posted (TRUE) → Both Claude nodes
- [ ] Claude nodes → Post nodes
- [ ] Post nodes → Log nodes
- [ ] Log nodes → Merge Logs
- [ ] Merge Logs → Write Tracking JSON

---

**Start with "Post to Twitter" - configure the authentication and body, then test it!**

