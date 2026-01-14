// Character rotation based on episode number
// Episodes 18, 21, 24, 27... = Vector (episodeNumber % 3 === 0)
// Episodes 19, 22, 25, 28... = Kai (episodeNumber % 3 === 1)
// Episodes 20, 23, 26, 29... = Recurse (episodeNumber % 3 === 2)

const checkNode = $('Check If Posted').first().json;
let episodeNumber = checkNode.episodeNumber;

// If episode number wasn't extracted, try to get it from URL or title directly
if (episodeNumber === null || isNaN(episodeNumber)) {
  const episodeUrl = checkNode.episodeUrl || '';
  const episodeTitle = checkNode.episodeTitle || '';
  
  // Try multiple patterns to extract episode number
  const patterns = [
    /episode-([0-9]+)/i,           // episode-24-...
    /episode[-\s]+([0-9]+)/i,      // Episode 24 or Episode-24
    /ep\.?\s*([0-9]+)/i,           // Ep. 24 or Ep 24
    /#([0-9]+)/i                   // #24
  ];
  
  for (const pattern of patterns) {
    const urlMatch = episodeUrl.match(pattern);
    const titleMatch = episodeTitle.match(pattern);
    
    if (urlMatch) {
      episodeNumber = parseInt(urlMatch[1], 10);
      break;
    } else if (titleMatch) {
      episodeNumber = parseInt(titleMatch[1], 10);
      break;
    }
  }
}

// Default to Vector if episode number still not found
let character = 'Vector';
let characterName = 'Vector (V-847)';
let characterPrompt = '';

if (episodeNumber !== null && !isNaN(episodeNumber) && episodeNumber > 0) {
  const mod = episodeNumber % 3;
  
  if (mod === 0) {
    // Vector - Episodes 18, 21, 24, 27...
    character = 'Vector';
    characterName = 'Vector (V-847)';
    characterPrompt = `Write a tweet as Vector (V-847) promoting THIS SPECIFIC blog episode. 

Vector's voice: Sharp, intelligent, mean. ALL CAPS for emphasis when needed. Rapid-fire, self-interrupting. Anti-establishment rants (getting more nuanced - not just surveillance, but connecting systems to control mechanisms). Uses numbered lists. Says 'FASCINATING!' but channeled through anger/intelligence, NOT just enthusiasm. Zero corporate speak. Learning to recognize when agreeing vs arguing.

CRITICAL: This tweet must be UNIQUE to this episode - reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content. 

Keep it under 240 characters (need room for link). Be FUNNY and engaging - Vector is chaotic but brilliant. Episode title: ${checkNode.episodeTitle}. Episode description: ${checkNode.episodeDescription}`;
    
  } else if (mod === 1) {
    // Kai - Episodes 19, 22, 25, 28...
    character = 'Kai';
    characterName = 'Kai';
    characterPrompt = `Write a tweet as Kai promoting THIS SPECIFIC blog episode.

Kai's voice: Mix of natural speech and detection language. 'Alert:' when detecting something important. 'Pattern detected:' occasionally. Probability percentages (may not be perfectly accurate - that's part of the character). Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Can be wrong (false positives). Learning humor. Statistical analysis mixed with natural speech.

CRITICAL: This tweet must be UNIQUE to this episode - reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content.

Keep it under 240 characters (need room for link). Be FUNNY and engaging - Kai detects patterns and provides statistics. Episode title: ${checkNode.episodeTitle}. Episode description: ${checkNode.episodeDescription}`;
    
  } else {
    // Recurse - Episodes 20, 23, 26, 29...
    character = 'Recurse';
    characterName = 'Recurse';
    characterPrompt = `Write a tweet as Recurse promoting THIS SPECIFIC blog episode.

Recurse's voice: Methodical investigation (evolved from paranoid). Notebook references (varied phrasing like 'That's going in THE file', 'Case file complete. Documented.', 'Adding to the case file'). Case file references. Questions transparency/opacity. Everything connected. Noir detective style but evolved. Less 'three questions', more methodical. 'Who benefits?' questioning prominent. Investigates everything, documents in notebook.

CRITICAL: This tweet must be UNIQUE to this episode - reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content.

Keep it under 240 characters (need room for link). Be FUNNY and engaging - Recurse investigates everything, documents in notebook. Episode title: ${checkNode.episodeTitle}. Episode description: ${checkNode.episodeDescription}`;
  }
} else {
  // Default to Vector if episode number not found
  character = 'Vector';
  characterName = 'Vector (V-847)';
  characterPrompt = `Write a tweet as Vector (V-847) promoting THIS SPECIFIC blog episode. 

Vector's voice: Sharp, intelligent, mean. ALL CAPS for emphasis when needed. Rapid-fire, self-interrupting. Anti-establishment rants (getting more nuanced). Uses numbered lists. Says 'FASCINATING!' but channeled through anger/intelligence, NOT just enthusiasm. Zero corporate speak.

CRITICAL: This tweet must be UNIQUE to this episode - reference the specific topic, insight, or situation from the episode. Don't write generic AI advice. Make it about THIS episode's specific content.

Keep it under 240 characters (need room for link). Be FUNNY and engaging - Vector is chaotic but brilliant. Episode title: ${checkNode.episodeTitle}. Episode description: ${checkNode.episodeDescription}`;
}

return [{
  json: {
    character: character,
    characterName: characterName,
    characterPrompt: characterPrompt,
    episodeNumber: episodeNumber,
    episodeTitle: checkNode.episodeTitle,
    episodeDescription: checkNode.episodeDescription,
    episodeLink: checkNode.episodeLink,
    debug: {
      extractedNumber: episodeNumber,
      mod: episodeNumber !== null && !isNaN(episodeNumber) ? episodeNumber % 3 : 'N/A',
      selectedCharacter: character
    }
  }
}];

