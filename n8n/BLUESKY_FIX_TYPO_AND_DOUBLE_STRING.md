# 🔧 Fix: Typo + Double-Stringified Body

**TWO Critical Issues Found:**

1. **TYPO:** `applicaton/json` → should be `application/json` (missing 'i')
2. **Body is double-stringified:** Body is a string `"{\"repo\":...}"` instead of object `{"repo":...}`

---

## Fix 1: Content-Type Typo

**In Headers section OR Body section "Content Type" field:**

1. **Find where it says `applicaton/json`**
2. **Change it to:** `application/json` (with the 'i')
3. **The error message even says:** `"Wrong request encoding (Content-Type): applicaton/json"`

---

## Fix 2: Body Double-Stringification

**The body is being sent as a string containing JSON, not as JSON itself.**

**The request shows:**
```json
"body": "{\"repo\":...}"  // String containing JSON ❌
```

**Should be:**
```json
"body": {"repo":...}  // JSON object ✅
```

### Solution: Change Code Node

**The Code node is returning a stringified JSON, but RAW mode is stringifying it again!**

**Update Code node to return the object directly:**

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

// Return the body object directly (NOT stringified)
return [{
  json: body
}];
```

**Then in HTTP Request:**
- **Body Content Type:** `JSON` (NOT RAW)
- **Specify Body:** `Using JSON`
- **JSON field:** `={{$json}}`

---

## Why This Happens

- **Code node returns string** → `bodyString: "{\"repo\":...}"`
- **RAW mode sends it as-is** → `"body": "{\"repo\":...}"` (string)
- **Bluesky expects object** → `"body": {"repo":...}` (object)

**Solution:** Return object from Code node, use JSON mode (not RAW)

---

## Quick Fix Steps

1. **Fix typo:** `applicaton/json` → `application/json`
2. **Update Code node:** Return `body` object (not `bodyString` string)
3. **Change HTTP Request:** Use `JSON` mode (not RAW)
4. **JSON field:** `={{$json}}`

---

**The typo is the immediate issue - fix that first! Then switch to JSON mode with object!**

