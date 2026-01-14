# Fix: Remove Character Count from Posts

## Problem

Claude is sometimes including character count metadata in the post text, like:
- "(147 characters)"
- "(150 chars)"
- "147 characters"

This shouldn't be in the actual post - it's metadata that Claude adds.

## Solution

Added regex pattern to remove character count patterns in both Twitter and Bluesky cleaning code:

```javascript
// Remove character count patterns that Claude might add
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');
```

This pattern matches:
- `(147 characters)`
- `(150 chars)`
- `147 characters`
- `150 chars`
- `(147)`
- `147 chars`

## Files Updated

1. **`aiforhumans/n8n/code/CLEAN_TWITTER_TEXT_FIXED.js`** - Added character count removal
2. **`aiforhumans/n8n/code/CLEAN_BLUESKY_TEXT_FIXED.js`** - Added character count removal

## Implementation

Both cleaning nodes now:
1. **First step:** Remove character count patterns
2. Then do all other cleaning (smart quotes, character cleaning, etc.)

This ensures character count metadata is stripped before any other processing.

## Alternative: Fix in Claude Prompt

You could also update the character prompts to explicitly say:
"DO NOT include character count, length, or any metadata in your response. Only output the post text."

But cleaning it in code is safer - catches it even if Claude forgets.
