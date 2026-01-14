# Fix: Build Bluesky Body Node - Remove Character Count

## Problem

The "Build Bluesky Body" node gets text directly from Claude's response (`blueskyPost.content[0].text`) without cleaning it. If Claude includes character count metadata like "(147 characters)", it gets posted to Bluesky.

## Solution

Add character count removal as the **first step** in "Build Bluesky Body" node, right after getting the text from Claude.

## Updated Code

**File:** `aiforhumans/n8n/code/BUILD_BLUESKY_BODY_FIXED.js`

**Key Change:**
```javascript
// Get the post text from Claude
let postText = blueskyPost.content[0].text || '';

// CLEAN THE TEXT FIRST - Remove character count patterns that Claude might add
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');
```

**Full updated code** is in `BUILD_BLUESKY_BODY_FIXED.js`.

## How to Apply

1. Open your n8n workflow
2. Find the "Build Bluesky Body" Code node
3. Add this line **right after** `let postText = blueskyPost.content[0].text || '';`:
   ```javascript
   // Remove character count patterns that Claude might add
   postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');
   ```
4. Save and test

## What This Removes

The regex pattern removes:
- `(147 characters)`
- `(150 chars)`
- `147 characters`
- `150 chars`
- `(147)`
- `147 chars`

Any variation of character count metadata that Claude might add.

## Alternative: Use Clean Bluesky Text Node

If you implement the "Clean Bluesky Text" node (recommended for better text cleaning), you can update "Build Bluesky Body" to use cleaned text instead:

```javascript
// Get cleaned text from Clean Bluesky Text node
let postText = '';
try {
  postText = $('Clean Bluesky Text').first().json.cleaned_text || '';
} catch (error) {
  // Fallback to direct Claude response if Clean node doesn't exist
  postText = blueskyPost.content[0].text || '';
  // Remove character count as fallback
  postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');
}
```

But for now, the quick fix is to add the character count removal directly to "Build Bluesky Body".
