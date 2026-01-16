// Generate Sora 2 Video Prompt for TikTok
// Input: Script from "Generate Tiktok via Claude" node
// Output: Optimized Sora 2 video generation prompt with experimental/glitchy TV-headed style
//
// Workflow: Generate TikTok Content → Generate Tiktok via Claude → [THIS NODE] → Generate Video (Sora 2)
//
// Style: Experimental, glitchy aesthetic - characters figuring out how to use Sora 2 to break into TikTok
// Characters are discovering their form, experimenting, not polished/professional

// Get Claude script output (this is the input from "Generate Tiktok via Claude" node)
const claudeOutput = $input.first().json;
let claudeScript = '';

// Claude node output format: { content: [{ type: "text", text: "script here..." }] }
if (claudeOutput.content && Array.isArray(claudeOutput.content) && claudeOutput.content[0]) {
  const contentItem = claudeOutput.content[0];
  if (contentItem.text) {
    claudeScript = contentItem.text;
  } else if (typeof contentItem === 'string') {
    claudeScript = contentItem;
  }
} else if (typeof claudeOutput === 'string') {
  claudeScript = claudeOutput;
} else if (claudeOutput.text) {
  claudeScript = claudeOutput.text;
}

// Clean up the script - extract just the dialogue/script part if there's a VIDEO DESCRIPTION section
if (claudeScript.includes('VIDEO DESCRIPTION')) {
  const parts = claudeScript.split('VIDEO DESCRIPTION');
  claudeScript = parts[0].trim(); // Keep only the script part
}

// Extract key points from Claude script instead of using full script
// This makes the prompt shorter and helps with time constraints
function extractScriptKeyPoints(script) {
  if (!script || script.length === 0) {
    return {
      mainTopic: '',
      keyPhrases: [],
      energy: 'energetic'
    };
  }
  
  // Remove timing markers like [0-2 seconds], **[HOOK]**, etc.
  let cleaned = script
    .replace(/\[\d+-\d+\s*seconds?[^\]]*\]/gi, '')
    .replace(/\*\*\[.*?\]\*\*/g, '')
    .replace(/\*\*[A-Z]+\*\*:/g, '')
    .replace(/\*\*/g, '')
    .trim();
  
  // Extract main topic - look for the core message (usually in first 2-3 sentences)
  const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const mainTopic = sentences.slice(0, 2).join('. ').trim() || sentences[0] || '';
  
  // Extract key phrases that show character voice (ALL CAPS, exclamations, character-specific terms)
  const keyPhrases = [];
  const lines = cleaned.split('\n').filter(line => line.trim().length > 5);
  
  for (const line of lines) {
    // Look for character voice indicators
    if (line.match(/[A-Z]{3,}/) || // ALL CAPS words
        line.includes('!') || // Exclamations
        line.includes('FASCINATING') || line.includes('BEEP') || line.includes('Alert')) {
      const phrase = line.substring(0, 100).trim(); // First 100 chars
      if (phrase.length > 10) {
        keyPhrases.push(phrase);
      }
    }
  }
  
  // Limit to 2-3 key phrases
  const selectedPhrases = keyPhrases.slice(0, 3);
  
  // Determine energy level
  let energy = 'energetic';
  const scriptLower = script.toLowerCase();
  if (scriptLower.includes('fascinating') || scriptLower.includes('excited') || scriptLower.includes('!')) {
    energy = 'very energetic';
  } else if (scriptLower.includes('methodical') || scriptLower.includes('investigat')) {
    energy = 'thoughtful';
  }
  
  return {
    mainTopic: mainTopic.substring(0, 200), // Limit length
    keyPhrases: selectedPhrases,
    energy: energy
  };
}

const scriptKeyPoints = extractScriptKeyPoints(claudeScript);

// Get episode data from "Select Character" node
let episodeTitle = '';
let episodeDescription = '';
let episodeLink = '';
let character = 'Vector';
let characterName = 'Vector';

try {
  const selectChar = $('Select Character').first().json;
  episodeTitle = selectChar.episodeTitle || '';
  episodeDescription = selectChar.episodeDescription || '';
  episodeLink = selectChar.episodeLink || '';
  character = selectChar.character || 'Vector';
  characterName = selectChar.characterName || 'Vector';
} catch (e) {
  // If Select Character not accessible, try to get from Generate TikTok Content
  try {
    const tiktokContent = $('Generate TikTok Content').first().json;
    episodeTitle = tiktokContent.episodeTitle || '';
    episodeDescription = tiktokContent.episodeDescription || '';
    episodeLink = tiktokContent.episodeLink || '';
    character = tiktokContent.character || 'Vector';
    characterName = tiktokContent.characterName || 'Vector';
  } catch (e2) {
    // Fallback
  }
}

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
  
  // Extract key topics for screen visuals
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
  
  // Default: general tech/AI visuals
  if (screenContent.length === 0) {
    screenContent.push('AI-related graphics, technical diagrams, code snippets, data visualizations');
  }
  
  return screenContent.join(', ');
}

const screenVisuals = generateScreenVisuals(episodeTitle, episodeDescription);

// Extract key points from Claude script to enhance screen visuals
let enhancedScreenVisuals = screenVisuals;
if (claudeScript) {
  const scriptLower = claudeScript.toLowerCase();
  if (scriptLower.includes('interface') || scriptLower.includes('ui') || scriptLower.includes('design')) {
    enhancedScreenVisuals = 'interface mockups, UI wireframes, color palettes, design layouts, before/after comparisons';
  } else if (scriptLower.includes('code') || scriptLower.includes('programming')) {
    enhancedScreenVisuals = 'code snippets, programming examples, technical diagrams';
  } else if (scriptLower.includes('prompt')) {
    enhancedScreenVisuals = 'text prompts, AI responses, code examples, prompt structures';
  }
}

// Build the Sora 2 video prompt - experimental/glitchy style, concise
const scriptSummary = scriptKeyPoints.mainTopic || 'explaining the episode topic';
const characterVoice = scriptKeyPoints.keyPhrases.length > 0 
  ? scriptKeyPoints.keyPhrases[0].substring(0, 60) 
  : '';

const soraPrompt = `A TV-headed character in a glitchy digital space, experimenting with Sora 2. Their head is a CRT TV screen (cartoon, glitchy). They speak about: ${scriptSummary}. ${characterVoice ? `"${characterVoice}"` : ''}

TV screen shows: ${enhancedScreenVisuals}. Screen glitches and changes.

Character: ${traits.personality}. ${traits.movements}. ${scriptKeyPoints.energy} energy.

Setting: Glitchy digital space, experimental, raw. Vertical 9:16 format.

Style: Cartoon with glitch effects. Character discovering their form. Breaking into TikTok through Sora 2.

CRITICAL: Exactly 12 seconds. Must end at 12 seconds with clear conclusion. Fast pacing.`;

// Also create a detailed video description for reference
const videoDescription = `TV-headed character in glitchy digital space. CRT TV screen shows ${enhancedScreenVisuals}. ${traits.personality}. Experimental style. 12 seconds exactly.`;

return [{
  json: {
    // Episode data
    episodeTitle: episodeTitle,
    episodeDescription: episodeDescription,
    episodeLink: episodeLink,
    character: character,
    characterName: characterName,
    
    // Claude's generated script (preserved)
    claudeScript: claudeScript,
    
    // Sora 2 prompt (incorporates Claude's script)
    soraPrompt: soraPrompt,
    videoDescription: videoDescription,
    screenVisuals: enhancedScreenVisuals,
    
    // Video specs
    videoLength: 12,
    format: 'vertical',
    aspectRatio: '9:16',
    style: 'cartoon_experimental',
    
    // Metadata
    platform: 'TikTok',
    contentType: 'episode_highlight'
  }
}];
