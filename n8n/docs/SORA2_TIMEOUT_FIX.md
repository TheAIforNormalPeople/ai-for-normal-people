# Fixing Sora 2 Timeout Errors in n8n

## The Problem

**Error:** "Timeout reached" (Error 500)
**Cause:** Video generation takes longer than n8n's default timeout

Sora 2 video generation can take 30-120+ seconds, but n8n's default timeout might be shorter.

---

## Solutions

### Solution 1: Increase Timeout in n8n Node

In your "Generate a video" (Sora 2) node:

1. **Open the node settings**
2. **Look for "Options" or "Advanced Settings"**
3. **Find "Timeout" or "Request Timeout"**
4. **Set to:** `300` seconds (5 minutes) or higher
5. **Save**

### Solution 2: Simplify the Prompt

Long prompts can take longer to process. Try:

1. **Shorten the script portion** - Keep Claude's script but make it more concise
2. **Remove redundant descriptions** - Don't repeat the same visual details
3. **Focus on key elements** - Essential visuals and actions only

### Solution 3: Check Prompt Length

The `soraPrompt` might be too long. Check:
- Current prompt length
- OpenAI's max prompt length for Sora 2
- Try a shorter version first to test

### Solution 4: Use Async/Polling Settings

If the node has polling options:
1. **Enable "Wait for completion"** or similar
2. **Increase polling interval** (check every 10-15 seconds instead of 5)
3. **Increase max polling time** (allow up to 5-10 minutes)

---

## Quick Test

Try generating with a **much shorter prompt** first to see if it's a timeout issue or something else:

```
A TV-headed humanoid character sits at a news desk. Their head is a CRT TV screen showing interface mockups. The character gestures energetically as they speak about AI interface design. Cartoon style. 12 seconds. Vertical format.
```

If this works, the issue is prompt length/complexity.

---

## Alternative: Check n8n Workflow Settings

1. **Workflow Settings** → **Execution Settings**
2. **Look for timeout settings**
3. **Increase workflow timeout** if there's a global setting

---

## What the Error Means

- **500 Error + "Timeout reached"** = Request took too long, not a billing issue
- **"Insufficient quota"** = Out of money (different error)
- **"Rate limit"** = Too many requests (different error)

This is specifically a timeout - the request is valid but taking too long.

---

## Recommended Settings

For Sora 2 video generation:
- **Node Timeout:** 300 seconds (5 minutes)
- **Polling Interval:** 15 seconds
- **Max Polling Time:** 600 seconds (10 minutes)

These give Sora 2 enough time to generate the video.
