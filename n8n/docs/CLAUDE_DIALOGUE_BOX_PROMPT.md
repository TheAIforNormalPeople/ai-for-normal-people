# Updated Claude Prompt for Dialogue Boxes

**Goal:** Update Claude script generation to create dialogue box-focused scripts (no character appearances)

---

## 📋 Current Prompt (What You Have)

```
Create a 60-second TikTok video script for this episode.

Character: Vector (V-847)
Episode: How AI Develops Abilities It Was Never Taught
Description: 

Requirements:
- Hook (attention-grabbing opening, 5 seconds)
- Key point 1 (15 seconds)
- Key point 2 (15 seconds)  
- Key point 3 (15 seconds)
- CTA + link mention (10 seconds)

Character voice: Vector (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight
```

---

## ✅ Updated Prompt (With Dialogue Box Visual Style)

**Use this in your Claude node:**

```
Create a 30-second TikTok video script for this episode.

Character: Vector (V-847)
Episode: How AI Develops Abilities It Was Never Taught
Description: 

Requirements:
- Hook (attention-grabbing opening, 3-5 seconds)
- Key point 1 (10 seconds)
- Key point 2 (10 seconds)
- CTA + link mention (5 seconds)

Character voice: Vector (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight

Visual Style: DIALOGUE BOXES ONLY
- Characters represented by dialogue boxes that "break through" onto screen (similar to website design)
- Boxes appear when character speaks, with character name + dialogue
- Character-specific box styling: Vector = glitch/tech blue (#3b82f6), monospace font, tech aesthetic
- Background: Abstract tech-themed graphics, digital patterns (NO characters)
- NO character appearances, faces, human representations, or character visuals
- Focus: Dialogue boxes + abstract background
- Format: "[CHARACTER NAME]: [dialogue]"
- Boxes animate sequentially as dialogue progresses

Dialogue Box Format:
- Each dialogue should be formatted as: "VECTOR: [dialogue text]"
- Boxes break through or animate onto screen
- Character-specific colors/styles per character
- Background remains abstract graphics throughout
```

---

## 🔧 Full JSON for Claude Node

**Copy this entire JSON into your Claude node:**

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1000,
  "messages": [
    {
      "role": "user",
      "content": "Create a 30-second TikTok video script for this episode.\n\nCharacter: Vector (V-847)\nEpisode: How AI Develops Abilities It Was Never Taught\nDescription: \n\nRequirements:\n- Hook (attention-grabbing opening, 3-5 seconds)\n- Key point 1 (10 seconds)\n- Key point 2 (10 seconds)\n- CTA + link mention (5 seconds)\n\nCharacter voice: Vector (use character's voice style)\nFormat: Script ready for voice-over (natural speech, not formal)\nKeep it engaging and educational\nInclude one \"mic-drop\" moment or interesting insight\n\nVisual Style: DIALOGUE BOXES ONLY\n- Characters represented by dialogue boxes that \"break through\" onto screen (similar to website design)\n- Boxes appear when character speaks, with character name + dialogue\n- Character-specific box styling: Vector = glitch/tech blue (#3b82f6), monospace font, tech aesthetic\n- Background: Abstract tech-themed graphics, digital patterns (NO characters)\n- NO character appearances, faces, human representations, or character visuals\n- Focus: Dialogue boxes + abstract background\n- Format: \"[CHARACTER NAME]: [dialogue]\"\n- Boxes animate sequentially as dialogue progresses\n\nDialogue Box Format:\n- Each dialogue should be formatted as: \"VECTOR: [dialogue text]\"\n- Boxes break through or animate onto screen\n- Character-specific colors/styles per character\n- Background remains abstract graphics throughout"
    }
  ]
}
```

---

## 📝 If Using Expression Format

**If you're using expression syntax in n8n, use this:**

```
Create a 30-second TikTok video script for this episode.

Character: {{ $('Select Character').first().json.characterName }}
Episode: {{ $('Select Character').first().json.episodeTitle }}
Description: {{ $('Select Character').first().json.episodeDescription }}

Requirements:
- Hook (attention-grabbing opening, 3-5 seconds)
- Key point 1 (10 seconds)
- Key point 2 (10 seconds)
- CTA + link mention (5 seconds)

Character voice: {{ $('Select Character').first().json.character }} (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight

Visual Style: DIALOGUE BOXES ONLY
- Characters represented by dialogue boxes that "break through" onto screen (similar to website design)
- Boxes appear when character speaks, with character name + dialogue
- Character-specific box styling per character
- Background: Abstract tech-themed graphics, digital patterns (NO characters)
- NO character appearances, faces, human representations, or character visuals
- Focus: Dialogue boxes + abstract background
- Format: "[CHARACTER NAME]: [dialogue]"
- Boxes animate sequentially as dialogue progresses

Dialogue Box Format:
- Each dialogue should be formatted as: "[CHARACTER NAME]: [dialogue text]"
- Boxes break through or animate onto screen
- Character-specific colors/styles per character
- Background remains abstract graphics throughout
```

---

## 🎯 Key Changes

### What Changed:
1. ✅ **30 seconds** (instead of 60 - better for TikTok, cheaper)
2. ✅ **Dialogue box visual style** added
3. ✅ **NO character appearances** specified
4. ✅ **Character-specific styling** (Vector = glitch/tech blue)
5. ✅ **Abstract background** specified
6. ✅ **Dialogue format** specified ([CHARACTER NAME]: [dialogue])

### Why:
- **30 seconds:** Better engagement, lower cost, standard TikTok length
- **Dialogue boxes:** Consistent with website design
- **NO characters:** Avoids human character generation
- **Character styling:** Maintains character identity
- **Abstract background:** Professional, clean look

---

## 💡 Character-Specific Styling Reference

### Vector (V-847):
- **Color:** Glitch/tech blue (#3b82f6)
- **Font:** Monospace ('SF Mono', 'Monaco', 'Courier New')
- **Style:** Glitch effects, tech aesthetic

### Kai:
- **Color:** Detection green (#10b981)
- **Font:** Inherit (default)
- **Style:** Detection/alert aesthetic

### Recurse:
- **Color:** Notebook purple (#8b5cf6)
- **Font:** Monospace ('Courier New')
- **Style:** Notebook/detective aesthetic

---

## ✅ Quick Copy-Paste

**Just update the "content" field with this:**

```
Create a 30-second TikTok video script for this episode.

Character: Vector (V-847)
Episode: How AI Develops Abilities It Was Never Taught
Description: 

Requirements:
- Hook (attention-grabbing opening, 3-5 seconds)
- Key point 1 (10 seconds)
- Key point 2 (10 seconds)
- CTA + link mention (5 seconds)

Character voice: Vector (use character's voice style)
Format: Script ready for voice-over (natural speech, not formal)
Keep it engaging and educational
Include one "mic-drop" moment or interesting insight

Visual Style: DIALOGUE BOXES ONLY
- Characters represented by dialogue boxes that "break through" onto screen (similar to website design)
- Boxes appear when character speaks, with character name + dialogue
- Character-specific box styling: Vector = glitch/tech blue (#3b82f6), monospace font, tech aesthetic
- Background: Abstract tech-themed graphics, digital patterns (NO characters)
- NO character appearances, faces, human representations, or character visuals
- Focus: Dialogue boxes + abstract background
- Format: "[CHARACTER NAME]: [dialogue]"
- Boxes animate sequentially as dialogue progresses

Dialogue Box Format:
- Each dialogue should be formatted as: "VECTOR: [dialogue text]"
- Boxes break through or animate onto screen
- Character-specific colors/styles per character
- Background remains abstract graphics throughout
```

---

**Copy the content section above and paste it into your Claude node's content field!** 🎬
