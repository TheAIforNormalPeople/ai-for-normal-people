# CHECK WHAT "SELECT CHARACTER" NODE OUTPUTS

**The "Select character" node exists in your workflow!**

According to `CHARACTER_ROTATION_SYSTEM.md`, the "Select character" node outputs:

```javascript
return [{
  json: {
    character: character,
    characterPrompt: characterPrompt,  // ← This is what we need!
    episodeNumber: episodeNumber,
    episodeTitle: checkNode.episodeTitle,
    episodeDescription: checkNode.episodeDescription,
    episodeLink: checkNode.episodeLink,
    episodeUrl: checkNode.episodeUrl,
    existingEntries: checkNode.existingEntries
  }
}];
```

**So `{{$json.characterPrompt}}` SHOULD work!**

But you said "we don't have this defined" - let me check:
1. Does the "Select character" node actually output `characterPrompt`?
2. Or does it output something else like `systemPrompt`?

**Can you check in n8n:**
- Click on "Select character" node
- Look at its output/result
- What fields does it show? (`characterPrompt`? `systemPrompt`? something else?)

Then we can update the prompt to use the correct field name.

