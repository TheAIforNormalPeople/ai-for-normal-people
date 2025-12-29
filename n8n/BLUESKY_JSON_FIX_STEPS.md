# 🔧 Fix Bluesky JSON Body - Step by Step

## The Problem:
The JSON field has malformed/incomplete content with extra braces.

## The Solution:
**Completely replace** the JSON field content with the correct JSON.

---

## Step-by-Step Instructions:

### Step 1: Clear the JSON Field
1. Click inside the "JSON" text area
2. Press **Ctrl+A** (select all)
3. Press **Delete** (clear everything)

### Step 2: Paste the Correct JSON
**Copy this EXACT text** (starts with `={`):

```
={"repo":"thenormalpeople.bsky.social","collection":"app.bsky.feed.post","record":{"$type":"app.bsky.feed.post","text":"{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}","createdAt":"{{$now}}"}}
```

### Step 3: Verify
After pasting, the JSON field should contain:
- Starts with `={`
- Contains `"repo":"thenormalpeople.bsky.social"`
- Contains `"collection":"app.bsky.feed.post"`
- Contains `"record":{"$type":"app.bsky.feed.post"...`
- Ends with `}}`
- **No extra closing braces**
- **No partial content**

### Step 4: Test
Click "Execute step" - the error should disappear!

---

## Alternative: Use Pretty-Printed Version

If you prefer a formatted version (easier to read), paste this:

```json
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

**Both versions work - use whichever is easier for you!**

---

## ✅ Checklist:
- [ ] Selected all text in JSON field (Ctrl+A)
- [ ] Deleted everything
- [ ] Pasted the correct JSON (starts with `={`)
- [ ] Verified no extra braces or partial content
- [ ] Clicked "Execute step"
- [ ] Error is gone!

