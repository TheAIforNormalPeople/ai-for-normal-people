# Claude Node Configuration for TikTok Script Generation

## Node Setup

**Node Name:** "Generate Tiktok via Claude" (or whatever you named it)

**Node Type:** HTTP Request (to Anthropic API) or Claude node if available

---

## Configuration

### **Authentication**
- **Type:** Anthropic API
- **API Key:** Your Anthropic API key

### **Request Settings**

**URL:**
```
https://api.anthropic.com/v1/messages
```

**Method:** `POST`

**Headers:**
- **anthropic-version:** `2023-06-01`
- **x-api-key:** (your API key - usually from credentials)

**Body Configuration:**

**Option 1: Using Key-Value Pairs (Recommended)**

In the HTTP Request node:
1. **Specify Body:** "Using Key-Value Pairs"
2. **Add Parameters:**
   - **Name:** `model`
   - **Value:** `claude-sonnet-4-20250514`
   
   - **Name:** `max_tokens`
   - **Value:** `500`
   
   - **Name:** `messages`
   - **Value:** Click the `=` button to enable expression mode
   - **Expression:** 
     ```javascript
     =[{"role": "user", "content": $input.first().json.scriptPrompt}]
     ```

**Option 2: Using JSON (if you need full control)**

If using "Using JSON":
1. **Specify Body:** "Using JSON"
2. **JSON:** Click the `=` button to enable expression mode
3. **Expression:**
   ```javascript
   ={
     "model": "claude-sonnet-4-20250514",
     "max_tokens": 500,
     "messages": [{"role": "user", "content": $input.first().json.scriptPrompt}]
   }
   ```

### **Field-by-Field:**

1. **model:** `claude-sonnet-4-20250514` (or latest Claude model) - plain text
2. **max_tokens:** `500` - plain text (number)
3. **messages:** Use expression mode (click `=` button) with:
   ```javascript
   =[{"role": "user", "content": $input.first().json.scriptPrompt}]
   ```

**Important:** 
- If nodes are directly connected, use `$input.first().json.scriptPrompt`
- If referencing by name, use `$('Generate TikTok Content').first().json.scriptPrompt`
- Make sure to click the `=` button to enable expression mode for the `messages` field

---

## Alternative: If Using n8n Claude Node Directly

If your n8n has a built-in Claude node:

1. **Model:** Claude Sonnet 4
2. **Prompt/Message:** 
   ```
   ={{ $('Generate TikTok Content').first().json.scriptPrompt }}
   ```
3. **Max Tokens:** 500

---

## What This Does

The Claude node will:
- Receive the `scriptPrompt` from "Generate TikTok Content" node
- Generate a 12-second TikTok video script in the character's voice
- Output the script in format: `{ content: [{ text: "script here..." }] }`
- This script will then be converted by "Generate Sora 2 Video Prompt" code node into the proper Sora 2 prompt format

---

## Expected Output

Claude will return something like:

```json
{
  "content": [
    {
      "text": "[0-2 seconds] BOUNCE JUST REDESIGNED OUR ENTIRE SITE. WITHOUT ASKING. FASCINATING!\n\n[2-10 seconds] He made it prettier. More functional. Actually ENGAGING. And here's the thing—AI systems design interfaces ALL THE TIME. They're doing it RIGHT NOW. Every interface you use? AI influenced it somehow.\n\n[10-12 seconds] Watch this episode. Learn why design matters. Link in bio!"
    }
  ]
}
```

This output will be used by the next code node to create the Sora 2 prompt.
