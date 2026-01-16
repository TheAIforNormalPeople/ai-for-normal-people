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

// Generate script prompt for Claude (12-second video with TV-headed humanoid broadcaster)
// Characters are aware they're using Sora 2 to "break into" TikTok
const scriptPrompt = `Create a 12-second TikTok video script for this episode.

Character: ${characterName}
Episode: ${episodeTitle}
Description: ${episodeDescription}

IMPORTANT CONTEXT:
${characterName} is aware they're using Sora 2 to create this video. They're trying to "break into" TikTok through Sora 2. They know this isn't their actual form - they're using Sora 2 to create content.

Requirements:
- Hook (attention-grabbing opening, 0-2 seconds)
- Main point (2-10 seconds) - mention what's on their screen
- CTA (10-12 seconds)

Character voice: ${character} (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight
Character should reference what's showing on their TV screen during the video

CRITICAL TIMING REQUIREMENT:
- Video must be exactly 12 seconds long
- Script must complete within 12 seconds with a clear ending
- The video must END at 12 seconds, not continue beyond`;

// Character-specific personality traits for TV screen and movements
const characterTraits = {
  'Vector': {
    movements: 'leans forward energetically, gestures rapidly, screen flickers with blue tech glitches',
    screenStyle: 'diagrams, code snippets, technical graphics, blue energy effects',
    personality: 'excited, rapid-fire, analytical, energetic'
  },
  'Kai': {
    movements: 'sits upright, methodical gestures, screen pulses with green detection patterns',
    screenStyle: 'statistics, graphs, detection alerts, green scanning effects, data visualizations',
    personality: 'alert-focused, methodical, analytical, cautious'
  },
  'Recurse': {
    movements: 'leans back thoughtfully, taps notes, screen shows notebook-style graphics',
    screenStyle: 'case files, notes, connections, purple investigation graphics, question marks',
    personality: 'investigative, methodical, suspicious, thoughtful'
  },
  'Bounce': {
    movements: 'bounces slightly, energetic gestures, screen pulses with warm orange/gold colors',
    screenStyle: 'colorful designs, UI mockups, creative graphics, warm color effects',
    personality: 'enthusiastic, creative, energetic, excited'
  }
};

const traits = characterTraits[character] || characterTraits['Vector'];

// Generate episode-specific screen visuals based on episode title/description
function generateScreenVisuals(title, description) {
  const lowerTitle = title.toLowerCase();
  const lowerDesc = description.toLowerCase();
  
  let screenContent = [];
  
  if (lowerTitle.includes('interface') || lowerTitle.includes('design') || lowerDesc.includes('ui') || lowerDesc.includes('ux')) {
    screenContent.push('interface mockups, UI wireframes, color palettes, design layouts');
  }
  if (lowerTitle.includes('prompt') || lowerDesc.includes('prompt')) {
    screenContent.push('text prompts, AI responses, code examples, prompt structures');
  }
  if (lowerTitle.includes('fine-tun') || lowerDesc.includes('fine-tun')) {
    screenContent.push('training data, model diagrams, optimization graphs');
  }
  if (lowerTitle.includes('emergent') || lowerDesc.includes('emergent')) {
    screenContent.push('complexity diagrams, system connections, emergence patterns');
  }
  if (lowerTitle.includes('hallucinat') || lowerDesc.includes('hallucinat')) {
    screenContent.push('error examples, comparison visuals, accuracy metrics');
  }
  if (lowerTitle.includes('bias') || lowerDesc.includes('bias')) {
    screenContent.push('data distribution charts, fairness metrics, comparison graphs');
  }
  if (lowerTitle.includes('memory') || lowerDesc.includes('context')) {
    screenContent.push('context windows, memory diagrams, token limits');
  }
  
  if (screenContent.length === 0) {
    screenContent.push('AI-related graphics, technical diagrams, code snippets, data visualizations');
  }
  
  return screenContent.join(', ');
}

const screenVisuals = generateScreenVisuals(episodeTitle, episodeDescription);

// Generate Sora 2 video prompt (concise, ready to use)
const soraPrompt = `A TV-headed character in a glitchy digital space, experimenting with Sora 2. Their head is a CRT TV screen (cartoon, glitchy). They speak about: ${episodeTitle} - ${episodeDescription.substring(0, 100)}.

TV screen shows: ${screenVisuals}. Screen glitches and changes.

Character: ${traits.personality}. ${traits.movements}. Energetic energy.

Setting: Glitchy digital space, experimental, raw. Vertical 9:16 format.

Style: Cartoon with glitch effects. Character discovering their form. Breaking into TikTok through Sora 2.

CRITICAL: Exactly 12 seconds. Must end at 12 seconds with clear conclusion. Fast pacing.`;

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
    
    // Sora 2 video prompt (ready to use)
    soraPrompt: soraPrompt,
    
    // Video specs
    videoLength: 12, // seconds
    format: 'vertical', // TikTok format
    aspectRatio: '9:16',
    
    // Metadata
    platform: 'TikTok',
    contentType: 'episode_highlight'
  }
}];
