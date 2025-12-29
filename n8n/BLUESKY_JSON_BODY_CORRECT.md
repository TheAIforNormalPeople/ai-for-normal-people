# ✅ Correct JSON Body for Bluesky

**In the "JSON" field, use this EXACT format:**

```json
{
  "repo": "thenormalpeople.bsky.social",
  "collection": "app.bsky.feed.post",
  "record": {
    "$type": "app.bsky.feed.post",
    "text": "={{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}",
    "createdAt": "={{$now}}"
  }
}
```

**Key differences:**
- `text` field: Add `=` before the expression: `"={{$json['content'][0]['text']}}..."`
- `createdAt` field: Add `=` before the expression: `"={{$now}}"`

**OR use this single-line version (easier to paste):**

```json
{"repo":"thenormalpeople.bsky.social","collection":"app.bsky.feed.post","record":{"$type":"app.bsky.feed.post","text":"={{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}","createdAt":"={{$now}}"}}
```

**The `=` prefix tells n8n to evaluate the expression instead of treating it as literal text.**

