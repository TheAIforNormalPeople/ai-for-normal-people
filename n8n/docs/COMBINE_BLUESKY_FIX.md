# Fix: Combine Bluesky Node - Remove Character Count

## Problem

The "Combine" node (or similar) gets text directly from Claude's response without cleaning it. Character count metadata like "(147 characters)" gets included in the post.

## Solution

Add character count removal **right after** getting the text from Claude.

## Quick Fix

**Find this line:**
```javascript
let postText = blueskyPost.content[0].text;
```

**Add these lines RIGHT AFTER it:**
```javascript
// Remove character count patterns that Claude might add (like "(147 characters)")
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// Trim whitespace after removing character count
postText = postText.trim();
```

## Updated Code Section

**Before:**
```javascript
// Get post text from Claude
let postText = blueskyPost.content[0].text;

// Truncate post text
if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}
```

**After:**
```javascript
// Get post text from Claude
let postText = blueskyPost.content[0].text;

// Remove character count patterns that Claude might add (like "(147 characters)")
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// Trim whitespace after removing character count
postText = postText.trim();

// Truncate post text
if (postText.length > maxPostTextLength) {
  postText = postText.substring(0, maxPostTextLength - 3) + "...";
}
```

## Full Updated Code

See `aiforhumans/n8n/code/COMBINE_BLUESKY_FIXED.js` for the complete updated code.

## What This Removes

The regex pattern removes:
- `(147 characters)`
- `(150 chars)`
- `147 characters`
- `150 chars`
- Any variation of character count metadata

## Why Trim After Removal?

After removing the character count pattern, there might be extra whitespace left behind. The `.trim()` ensures clean text before truncation.
