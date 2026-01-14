# Quick Fix: Remove Character Count from Bluesky Posts

## The Issue

Character count like "(147 characters)" is showing up in Bluesky posts because the "Build Bluesky Body" node uses Claude's raw response.

## Quick Fix (1 line of code)

In your n8n workflow, open the **"Build Bluesky Body"** Code node and add this line:

**Find this line:**
```javascript
let postText = blueskyPost.content[0].text || '';
```

**Add this line RIGHT AFTER it:**
```javascript
// Remove character count patterns that Claude might add
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');
```

**Result:**
```javascript
// Get the post text from Claude
let postText = blueskyPost.content[0].text || '';

// Remove character count patterns that Claude might add
postText = postText.replace(/\s*\(?\d+\s*(character|char|chars)\)?/gi, '');

// ... rest of the code continues ...
```

## That's It!

This one line will remove character count metadata before it gets posted to Bluesky.

The pattern matches:
- `(147 characters)`
- `(150 chars)`  
- `147 characters`
- Any variation of character count

Save the node and test - character count should no longer appear in posts!
