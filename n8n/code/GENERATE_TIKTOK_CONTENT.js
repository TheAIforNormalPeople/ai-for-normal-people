// Generate TikTok Content from Episode Data
// Input: Episode data from "Select Character" (connected) and "Check If Posted" (referenced)
// Output: Script, description, hashtags for TikTok video
//
// IMPORTANT: This node must be connected FROM "Select Character" in the workflow!

// Get data from "Select Character" node (connected input)
const selectChar = $input.first().json;

// Get data from "Check If Posted" node (referenced, not connected)
let checkNode;
try {
  checkNode = $('Check If Posted').first().json;
} catch (error) {
  // If "Check If Posted" not accessible, use data from "Select Character" (has episodeLink, episodeTitle, etc.)
  checkNode = selectChar;
}

// Get episode data (prefer from checkNode, fallback to selectChar)
const episodeTitle = checkNode.episodeTitle || selectChar.episodeTitle || '';
const episodeDescription = checkNode.episodeDescription || selectChar.episodeDescription || '';
const episodeLink = checkNode.episodeLink || selectChar.episodeLink || '';
const character = selectChar.character || 'Vector';
const characterName = selectChar.characterName || 'Vector';

// Generate TikTok description (max 2200 characters, but keep shorter)
// Format: Title + Description + Link + Hashtags
const hashtags = '#AI #MachineLearning #TechEducation #LearnAI #AITutorial #TechTips';
const description = `${episodeTitle}\n\n${episodeDescription}\n\n👉 Full episode: ${episodeLink}\n\n${hashtags}`;

// Generate script prompt for Claude (12-second video with cartoon talking TV)
// Characters are aware they're using Sora 2 to "break into" TikTok
// Visual: Classic cartoon-style talking TV that moves and talks like the character
const scriptPrompt = `Create a 12-second TikTok video script for this episode.

Character: ${characterName}
Episode: ${episodeTitle}
Description: ${episodeDescription}

IMPORTANT CONTEXT:
${characterName} is aware they're using Sora 2 to create this video. They're trying to "break into" TikTok through Sora 2. They know this isn't their actual form - they're using Sora 2 to create content.

Requirements:
- Hook (attention-grabbing opening, 2-3 seconds)
- Main point (7-8 seconds)
- CTA (2 seconds)

Character voice: ${character} (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight

Visual Style: CARTOON TALKING TV
- Classic-looking old TV (cartoon style, not realistic)
- TV moves and talks like ${characterName} would
- Character's personality comes through TV's movements and expressions
- TV has personality - moves, tilts, reacts as character speaks
- Background: Simple, clean (studio setting or abstract)
- Style: Cartoon/animated, not realistic
- NO human characters or faces
- Focus: Talking TV with character personality

Video Description Format:
- Describe the TV's movements and reactions
- TV should feel like it has ${characterName}'s personality
- Example: "A vintage cartoon TV tilts forward, screen flickers, talks with energy..."
- Keep descriptions simple and clear for video generation`;

// For now, return the prompt (Claude node would generate actual script)
// In full workflow, this would call Claude API to generate script

return [{
  json: {
    // Episode data
    episodeTitle: episodeTitle,
    episodeDescription: episodeDescription,
    episodeLink: episodeLink,
    character: character,
    characterName: characterName,
    
    // TikTok content
    description: description,
    hashtags: hashtags,
    
    // Script generation (prompt for Claude)
    scriptPrompt: scriptPrompt,
    
    // Video specs
    videoLength: 12, // seconds
    format: 'vertical', // TikTok format
    aspectRatio: '9:16',
    
    // Metadata
    platform: 'TikTok',
    contentType: 'episode_highlight'
  }
}];
