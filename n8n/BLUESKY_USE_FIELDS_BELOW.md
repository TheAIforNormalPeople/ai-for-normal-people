# ✅ Bluesky Fix: Use "Fields Below" Instead of JSON

**The "Using JSON" mode is having issues with expressions. Let's use "Using Fields Below" instead.**

---

## Step-by-Step Fix:

### Step 1: Change Body Specification
1. In "Post to Bluesky" node
2. Find "Specify Body" dropdown
3. Change from **"Using JSON"** to **"Using Fields Below"**

### Step 2: Add Body Parameters
After switching, you'll see "Body Parameters" section. Click "Add Parameter" for each:

**Parameter 1:**
- **Name:** `repo`
- **Value:** `thenormalpeople.bsky.social`

**Parameter 2:**
- **Name:** `collection`
- **Value:** `app.bsky.feed.post`

**Parameter 3:**
- **Name:** `record`
- **Value:** `={"$type": "app.bsky.feed.post", "text": "{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}", "createdAt": "{{$now}}"}`

**Important:** For the `record` parameter, the value should be a JSON object string starting with `={`.

---

## Alternative: Use Code Node First

If "Fields Below" still doesn't work, we can use a Code node to build the body properly before the HTTP Request node.

---

## Quick Checklist:
- [ ] Changed "Specify Body" to "Using Fields Below"
- [ ] Added `repo` parameter
- [ ] Added `collection` parameter  
- [ ] Added `record` parameter (with `=` prefix)
- [ ] Tested the node

