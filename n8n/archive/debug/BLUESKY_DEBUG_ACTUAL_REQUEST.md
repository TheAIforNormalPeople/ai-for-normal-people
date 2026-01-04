# 🔍 Debug: What's Actually Being Sent

**Those directory paths are just n8n's internal code - not related to the issue.**

The real problem is in the **request body format**. Let's see what's actually being sent.

---

## Check the Actual Request

When you get an error, look at the "Request" section in the error details. You should see something like:

```json
{
  "body": {
    "repo": "...",
    "collection": "...",
    "record": "..."
  }
}
```

**The issue:** The `record` field needs to be a **JSON object**, not a string.

---

## The Real Solution

The Code node is building the body correctly. The problem is how n8n is sending it.

**Try this in "Post to Bluesky" node:**

1. **Specify Body:** `Using JSON`
2. **JSON field:** Use this (with the `=` prefix):
   ```
   ={{JSON.stringify($json)}}
   ```

3. **BUT ALSO** - Check if there's an option like:
   - "Parse JSON" or
   - "Send as JSON" or  
   - "Content-Type: application/json"
   
   Make sure these are enabled/checked.

---

## Alternative: Check Node Options

In the "Post to Bluesky" node, look for an **"Options"** section. There might be settings like:
- "Send Body as JSON" - make sure this is enabled
- "Parse Response" - might need to be disabled for this

---

## The Key Issue

n8n's HTTP Request node needs to:
1. Take the object from Code node
2. Stringify it to JSON
3. Send it with `Content-Type: application/json` header
4. The API should receive it as a proper JSON object

**The stack trace paths are just showing where n8n's code threw the error - they're not the problem!**

