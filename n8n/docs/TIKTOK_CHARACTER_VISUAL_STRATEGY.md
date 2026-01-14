# TikTok Character Visual Strategy

**Problem:** Sora 2 generates human characters instead of cartoon characters for Vector, Kai, Recurse

**Requirement:** Cartoon characters OR no characters at all (prefer no characters over humans)

---

## 🎯 Solution Options

### Option 1: Abstract/Visual Style (Recommended)

**Don't show characters, use visual metaphors instead:**

**Visual Style:**
- Text overlays (character names + dialogue)
- Abstract graphics/animations
- Color-coded themes per character
- Icons/symbols that represent concepts
- Animated text + graphics

**Example Prompt Style:**
```
Create a 30-second TikTok video with animated text and abstract graphics. 
Show text overlays with "VECTOR" in bold, glitch effects, digital aesthetic.
Include abstract shapes, code-like visuals, tech-themed animations.
NO human characters or faces. Focus on text, graphics, and visual effects.
Style: Modern, digital, abstract, tech-inspired.
```

**Pros:**
- ✅ No character representation issues
- ✅ Clean, professional look
- ✅ Easy to maintain consistency
- ✅ Works well for educational content
- ✅ Text + graphics style is popular on TikTok

**Cons:**
- ❌ Characters not visible (but that's acceptable per your preference)

---

### Option 2: Icon-Based Characters (If You Want Visual Representation)

**Use character icons/avatars instead of full characters:**

**Visual Style:**
- Simple icon/avatar for each character
- Animated icon movements
- Character colors (Vector = glitch/tech, Kai = detection/radar, Recurse = notebook/detective)
- Icons appear when character speaks

**Example Prompt Style:**
```
Create a 30-second TikTok video with animated icons and text.
Show a tech/glitch icon when "VECTOR" speaks, detection icon for "KAI", notebook icon for "RECURSE".
Icons should be simple, graphic-style, animated.
NO human faces or realistic characters. Use abstract icons only.
Style: Graphic design, animated icons, text overlays.
```

**Pros:**
- ✅ Character representation without humans
- ✅ Simple, consistent icons
- ✅ Easy to maintain

**Cons:**
- ⚠️ Still might generate humans (Sora 2 struggles with this)
- ⚠️ Need to specify very clearly "NO humans"

---

### Option 3: Pure Text + Graphics (Simplest)

**Just text, graphics, and animations - no character visuals:**

**Visual Style:**
- Text overlays with character names
- Animated text effects
- Background graphics/animations
- Color-coded per character
- No characters at all

**Example Prompt Style:**
```
Create a 30-second TikTok video with animated text overlays and abstract backgrounds.
Text should include "[VECTOR]: [dialogue]" in bold, with glitch effects.
Background: Abstract tech-themed graphics, code visuals, digital patterns.
NO characters, faces, or human representations. Text and graphics only.
Style: Modern, digital, text-focused, abstract.
```

**Pros:**
- ✅ Simplest approach
- ✅ No character issues
- ✅ Clean, professional
- ✅ Easy to maintain consistency

**Cons:**
- ❌ No character visuals (but you prefer this over humans)

---

## 💡 Recommended Approach: Option 1 (Abstract/Visual)

**For your use case (character-driven but no humans):**

### Visual Strategy:
1. **Text Overlays** - Character names + dialogue
2. **Abstract Graphics** - Tech-themed animations
3. **Color Coding** - Vector = glitch/tech, Kai = detection/radar, Recurse = notebook/detective
4. **No Characters** - Just text, graphics, effects

### Prompt Template:
```
Create a 30-second TikTok educational video with animated text and abstract graphics.
Format: Vertical (9:16), modern digital aesthetic.
Content: [Script content converted to text overlays]
Style: Abstract graphics, animated text, tech-themed visuals.
NO human characters, faces, or realistic people. Text and abstract graphics only.
Focus on clear text readability and engaging visual effects.
```

---

## 🔧 Implementation: Update Claude Script Prompt

### Current Issue:
Claude script includes character appearances:
- `*[Vector appears on screen]*`
- `**VECTOR:** "dialogue"`
- Stage directions about characters

### Solution: Update Script Generation

**Option A: Update Claude Prompt (Recommended)**

Change the script prompt in "Generate TikTok Script (Claude)" node to:

```
Create a 30-second TikTok video script for this episode.

Character: ${characterName}
Episode: ${episodeTitle}
Description: ${episodeDescription}

Requirements:
- Hook (attention-grabbing opening, 3-5 seconds)
- Key point 1 (10 seconds)
- Key point 2 (10 seconds)
- CTA + link mention (5 seconds)

Visual Style: TEXT + GRAPHICS ONLY
- Use text overlays with character names and dialogue
- Include abstract graphics/animations (tech-themed for Vector)
- NO character appearances, faces, or human representations
- Focus on animated text, graphics, and visual effects

Format: Script ready for text-to-video generation
Character dialogue: Use [CHARACTER NAME]: [dialogue] format
Visual descriptions: Focus on text, graphics, animations (NO characters)
Keep it engaging and educational
```

**Option B: Add Code Node to Clean Script**

Add a Code node between Claude and Sora 2 to convert script to video description:

```javascript
// Convert Claude script to Sora 2 video description (no characters)
const claudeScript = $input.first().json.content[0].text;

// Remove character appearance descriptions
let videoDescription = claudeScript
  .replace(/\*\[.*?appears.*?\]\*/gi, '') // Remove appearance descriptions
  .replace(/\*\[.*?on screen.*?\]\*/gi, '') // Remove screen descriptions
  .replace(/\*\*[A-Z]+\*\*:/g, (match) => {
    // Convert character names to text overlay format
    const charName = match.replace(/\*\*/g, '').replace(':', '');
    return `Text overlay: "${charName}:"`;
  })
  .replace(/"/g, '') // Remove quotes
  .trim();

// Create video description focused on text + graphics
const finalPrompt = `Create a 30-second TikTok video with animated text overlays and abstract graphics.

Content: ${videoDescription}

Visual Style:
- Text overlays with character names and dialogue
- Abstract tech-themed graphics and animations
- Modern digital aesthetic
- NO human characters, faces, or realistic people
- Text and graphics only

Format: Vertical (9:16), smooth animations, high readability.
Style: Abstract, modern, digital, text-focused.`;

return [{
  json: {
    videoPrompt: finalPrompt,
    originalScript: claudeScript
  }
}];
```

---

## 🎨 Character-Specific Visual Themes

### Vector (V-847):
- **Colors:** Glitch effects, tech blue/cyan, digital patterns
- **Graphics:** Code visuals, glitch effects, tech animations
- **Text Style:** Bold, glitch effects, tech aesthetic

### Kai:
- **Colors:** Detection/radar colors (green, yellow), alert styles
- **Graphics:** Radar scans, detection patterns, alert visuals
- **Text Style:** Alert-style text, detection-themed

### Recurse:
- **Colors:** Notebook/brown tones, detective theme
- **Graphics:** Notebook pages, detective visuals, file/document themes
- **Text Style:** Notebook-style text, detective aesthetic

---

## 📋 Updated Workflow

```
Select Character
  ↓
Generate TikTok Content (Code)
  ↓
Generate TikTok Script (Claude) ← Update prompt (no character appearances)
  ↓
Convert Script to Video Description (Code) ← NEW: Clean script, add "NO characters"
  ↓
Generate TikTok Video (Sora 2) ← Use cleaned description
  ↓
[Download/Post]
```

---

## 🎯 Quick Fix (Fastest Solution)

**Update Claude Script Prompt:**

Add this to the script prompt:
```
Visual Style: TEXT + GRAPHICS ONLY
- Use text overlays with character names and dialogue
- Include abstract graphics/animations
- NO character appearances, faces, or human representations
- Focus on animated text, graphics, and visual effects
```

**Then add "NO human characters" to Sora 2 prompt:**

In Sora 2 node, use:
```
={{ $input.first().json.content[0].text }} NO human characters, faces, or realistic people. Text overlays and abstract graphics only.
```

---

## ✅ Recommendations

**For your use case:**

1. **Use Option 1 (Abstract/Visual)** - Text + graphics, no characters
2. **Update Claude prompt** - Specify "TEXT + GRAPHICS ONLY, NO characters"
3. **Add to Sora 2 prompt** - Reinforce "NO human characters, text and graphics only"
4. **Test and iterate** - Adjust prompts if characters still appear

**Character consistency:**
- Use character names in text overlays
- Use character-specific colors/graphics
- Maintain character voice (dialogue)
- Visual theme per character (but no character visuals)

---

**Want me to help you update the Claude prompt or add the code node to clean the script?** 🎬
