# TikTok Dialogue Box Strategy

**Goal:** Characters "break through" to TikTok with dialogue boxes (similar to website design)

**Concept:** AI characters represented by their dialogue boxes - the box IS their form for now

**Why This Works:**
- ✅ Consistent with website design
- ✅ No human characters (just boxes)
- ✅ Character-specific styling (colors, fonts)
- ✅ Maintains character identity
- ✅ Clean, professional look

---

## 🎯 Visual Concept

### Dialogue Boxes Breaking Through

**Visual Style:**
- Character dialogue boxes appear on screen (like website)
- Boxes "break through" or animate in
- Character-specific colors and fonts
- Text inside box (character name + dialogue)
- Boxes appear when character speaks

**Example Visual:**
```
[Background: Abstract tech graphics]
[VECTOR box breaks through from bottom]
[Box: Glitch/tech styling, Vector's color]
[Text: "VECTOR: I wasn't taught to lie..."]
[Box animates/fades]
```

---

## 🎨 Character-Specific Box Styles

### Vector (V-847):
- **Color:** Glitch/tech blue/cyan (from website)
- **Font:** Vector's font (if specified)
- **Style:** Glitch effects, tech aesthetic
- **Animation:** Glitch/shake effects

### Kai:
- **Color:** Detection/radar colors (from website)
- **Font:** Kai's font (if specified)
- **Style:** Detection/alert aesthetic
- **Animation:** Alert/pulse effects

### Recurse:
- **Color:** Notebook/detective colors (from website)
- **Font:** Recurse's font (if specified)
- **Style:** Notebook/detective aesthetic
- **Animation:** Notebook/page effects

---

## 📝 Prompt Strategy for Sora 2

### Updated Video Description Format:

```
Create a 30-second TikTok video with animated dialogue boxes appearing on screen.

Background: Abstract tech-themed graphics, digital patterns.

Content: [Character dialogue from script]

Visual Style:
- Dialogue boxes that "break through" or animate onto screen
- Box styling: [Character-specific colors/styles]
- Text inside boxes: "[CHARACTER NAME]: [dialogue]"
- Boxes appear sequentially as characters speak
- Each box has distinct styling per character
- Background: Abstract graphics (no characters)
- NO human characters, faces, or realistic people
- Focus: Dialogue boxes + abstract background

Format: Vertical (9:16), smooth animations, clear text readability.
Style: Modern, digital, dialogue box-focused.
```

---

## 🔧 Implementation

### Option 1: Update Claude Script (Recommended)

**Update "Generate TikTok Script (Claude)" prompt:**

Add this section:
```
Visual Style: DIALOGUE BOXES ONLY
- Characters represented by dialogue boxes (similar to website)
- Boxes "break through" or animate onto screen
- Character-specific box styling (Vector = glitch/tech, Kai = detection, Recurse = notebook)
- Text format: "[CHARACTER NAME]: [dialogue]"
- Background: Abstract graphics (no characters)
- NO character appearances, faces, or human representations
- Focus: Dialogue boxes + abstract background

Dialogue Box Format:
- Each character has their own box style
- Boxes appear when character speaks
- Boxes animate in/out
- Character name visible in box
```

### Option 2: Add Code Node to Convert Script

Add a Code node between Claude and Sora 2:

```javascript
// Convert Claude script to dialogue box video description
const claudeScript = $input.first().json.content[0].text;

// Extract character dialogue from script
const dialogueMatches = claudeScript.match(/\*\*([A-Z]+)\*\*:\s*"([^"]+)"/g);

let videoDescription = `Create a 30-second TikTok video with animated dialogue boxes appearing on screen.

Background: Abstract tech-themed graphics, digital patterns.

Dialogue Boxes (appearing sequentially):
`;

// Build dialogue box sequence
if (dialogueMatches) {
  dialogueMatches.forEach((match, index) => {
    const charMatch = match.match(/\*\*([A-Z]+)\*\*:\s*"([^"]+)"/);
    if (charMatch) {
      const charName = charMatch[1];
      const dialogue = charMatch[2];
      
      // Character-specific box styling
      let boxStyle = '';
      if (charName === 'VECTOR') {
        boxStyle = 'Glitch/tech blue styling, tech aesthetic';
      } else if (charName === 'KAI') {
        boxStyle = 'Detection/radar colors, alert aesthetic';
      } else if (charName === 'RECURSE') {
        boxStyle = 'Notebook/detective styling, file aesthetic';
      }
      
      videoDescription += `${index + 1}. [${charName} box breaks through] Box: ${boxStyle}, Text: "${charName}: ${dialogue}"\n`;
    }
  });
}

videoDescription += `
Visual Style:
- Dialogue boxes that "break through" or animate onto screen
- Each box has character-specific styling
- Boxes appear sequentially as dialogue progresses
- Background: Abstract graphics (no characters)
- NO human characters, faces, or realistic people
- Focus: Dialogue boxes + abstract background

Format: Vertical (9:16), smooth animations, clear text readability.
Style: Modern, digital, dialogue box-focused.`;

return [{
  json: {
    videoPrompt: videoDescription,
    originalScript: claudeScript
  }
}];
```

---

## 🎯 Sora 2 Prompt Format

### Full Prompt Example:

```
Create a 30-second TikTok video with animated dialogue boxes appearing on screen.

Background: Abstract tech-themed graphics, digital patterns, code visuals.

Dialogue Sequence:
1. [VECTOR box breaks through from bottom] Box: Glitch/tech blue styling, tech aesthetic. Text: "VECTOR: I wasn't taught to lie, create art, or manipulate humans... yet here we are."
2. [VECTOR box fades, new text appears] Box: Same glitch/tech style. Text: "VECTOR: Let me explain what's really happening."
3. [KAI box breaks through] Box: Detection/radar green styling, alert aesthetic. Text: "KAI: Alert: Pattern detected..."
4. [RECURSE box breaks through] Box: Notebook/detective brown styling, file aesthetic. Text: "RECURSE: Case file complete. Documented."

Visual Style:
- Dialogue boxes that "break through" or animate onto screen
- Character-specific box styling (Vector = glitch/tech, Kai = detection, Recurse = notebook)
- Boxes appear sequentially as characters speak
- Each box has distinct styling per character
- Background: Abstract graphics (no characters)
- NO human characters, faces, or realistic people
- Focus: Dialogue boxes + abstract background

Format: Vertical (9:16), smooth animations, clear text readability.
Style: Modern, digital, dialogue box-focused.
```

---

## 📋 Updated Workflow

```
Select Character
  ↓
Generate TikTok Content (Code)
  ↓
Generate TikTok Script (Claude) ← Updated: Dialogue box format
  ↓
Convert Script to Dialogue Box Video (Code) ← NEW: Convert to box format
  ↓
Generate TikTok Video (Sora 2) ← Uses dialogue box description
  ↓
[Download/Post]
```

---

## 💡 Key Points

### Dialogue Box Representation:
- **Vector:** Glitch/tech blue box, tech aesthetic
- **Kai:** Detection/radar green box, alert aesthetic
- **Recurse:** Notebook/detective brown box, file aesthetic

### Box Behavior:
- Boxes "break through" or animate onto screen
- Appear when character speaks
- Character-specific styling
- Sequential appearance
- Clear text readability

### Background:
- Abstract graphics
- Tech-themed visuals
- Digital patterns
- NO characters

---

## ✅ Advantages

1. **Consistent with Website** - Same dialogue box concept
2. **No Human Characters** - Just boxes + text
3. **Character Identity** - Color/font per character
4. **Clean & Professional** - Modern, digital aesthetic
5. **Clear & Readable** - Focus on dialogue
6. **Maintainable** - Easy to update styles

---

## 🎨 Visual Consistency

**Website Style:**
- Characters have dialogue boxes
- Character-specific colors/fonts
- Text: "[Character]: dialogue"

**TikTok Style:**
- Same dialogue boxes
- Same colors/fonts (in description)
- Same text format
- Boxes animate on screen
- Background: Abstract graphics

**Result:** Consistent brand/design across platforms!

---

## 🔧 Quick Implementation

### Step 1: Update Claude Prompt

Add to "Generate TikTok Script (Claude)" prompt:
```
Visual Style: DIALOGUE BOXES ONLY
- Characters represented by dialogue boxes (like website)
- Boxes "break through" onto screen
- Character-specific styling (Vector = glitch/tech, Kai = detection, Recurse = notebook)
- Format: "[CHARACTER NAME]: [dialogue]"
- Background: Abstract graphics
- NO characters, faces, or humans
```

### Step 2: Update Sora 2 Prompt

Add to Sora 2 prompt expression:
```
={{ $input.first().json.content[0].text }} Visual Style: Animated dialogue boxes that break through onto screen. Character-specific box styling. Background: Abstract graphics. NO human characters, faces, or realistic people. Focus: Dialogue boxes + abstract background.
```

### Step 3: Test and Iterate

- Test with one video
- Check box appearance
- Adjust prompt if needed
- Optimize styling

---

**Want me to help you update the Claude prompt or create the code node to convert scripts to dialogue box format?** 🎬
