# 🔍 Debug: "Input must have the property 'repo'"

**The Error:** Bluesky says the request is missing the `repo` field.

**This means:** The request body isn't being sent correctly, or it's empty/malformed.

---

## Step 1: Check What's Actually Being Sent

**In the error details, look at the "Request" section:**

1. Is there a `body` field?
2. What does it contain?
3. Does it have `repo`, `collection`, and `record`?

**Share what you see in the "Request" section of the error.**

---

## Step 2: Verify Code Node Output

**Execute the Code node separately and check its output:**

1. Click on the Code node
2. Click "Execute step"
3. Check the output - does it show:
   - `repo`: `"thenormalpeople.bsky.social"`
   - `collection`: `"app.bsky.feed.post"`
   - `record`: `{...}` (object)

**If the Code node output looks wrong, that's the issue.**

---

## Step 3: Check HTTP Request Body Configuration

**In "Post to Bluesky" node:**

1. **Send Body:** ✅ Must be enabled
2. **Body Content Type:** `JSON`
3. **Specify Body:** `Using JSON`
4. **JSON field:** What do you have here?

**Try this exact value:**
```
={{JSON.stringify($json)}}
```

---

## Step 4: Test with Hardcoded JSON

**To isolate the issue, try hardcoded JSON:**

1. **Specify Body:** `Using JSON`
2. **JSON field:** (delete any expression, paste this):
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
3. Execute the node

**If this works:** The issue is with the expression/Code node connection.
**If this fails:** The issue is with body sending or headers.

---

## Common Causes

1. **Body not being sent:**
   - "Send Body" toggle is OFF
   - Body Content Type is wrong

2. **Expression not evaluating:**
   - JSON field has wrong syntax
   - Code node not connected properly

3. **Body in wrong format:**
   - Using "Using Fields Below" instead of "Using JSON"
   - Body is being sent as query parameters instead of body

---

## Quick Fix: Try RAW Mode

**If JSON mode isn't working, try RAW:**

1. **Update Code node** to return:
   ```javascript
   return [{
     json: {
       bodyString: JSON.stringify(body)
     }
   }];
   ```

2. **In HTTP Request:**
   - **Body Content Type:** `RAW/Custom`
   - **Body:** `={{$json.bodyString}}`
   - **Headers:**
     - `Content-Type`: `application/json` (MUST be set!)

---

## What to Check First

1. **Execute Code node** - verify output has `repo`, `collection`, `record`
2. **Check error "Request" section** - see what body is actually being sent
3. **Try hardcoded JSON** - see if API works at all

**Share what you see in these checks!**

