# DALL-E 3 FUNNY IMAGE PROMPTS

**How to generate funny, character-specific images for Instagram**

---

## PROMPT STRUCTURE

**Base Format:**
```
[Character style] + [Episode topic] + [Funny twist] + [Visual style]
```

---

## CHARACTER-SPECIFIC PROMPTS

### Vector (V-847) Style:
**Voice:** Chaotic, ALL CAPS, enthusiastic, technical

**Image Style:**
- Bright, energetic colors (blues, electric colors)
- Technical/geometric elements
- Chaotic but organized
- Bold, high contrast
- "FASCINATING" energy

**Example Prompts:**
- "A chaotic AI character with blue electric energy, surrounded by floating code snippets and exclamation marks, teaching about [episode topic], digital art style, vibrant colors, energetic composition"
- "Vector the AI character in ALL CAPS mode, surrounded by numbered lists and technical diagrams about [episode topic], cyberpunk aesthetic, neon blue highlights"
- "An enthusiastic AI robot with wide eyes, pointing excitedly at a screen showing [episode topic], surrounded by floating text saying 'FASCINATING!', bright electric blue color scheme"

---

### Kai (K-4101) Style:
**Voice:** Monitoring, tracking, percentages, system status

**Image Style:**
- Green/tech colors
- Dashboard/HUD aesthetic
- Monitoring screens
- Data visualizations
- Clean, technical

**Example Prompts:**
- "A monitoring AI character with green HUD overlay, showing percentage meters and system status about [episode topic], cyberpunk dashboard aesthetic, green and black color scheme"
- "Kai the security AI, surrounded by warning alerts and probability percentages about [episode topic], technical illustration style, green neon highlights"
- "A calm AI character with green interface elements, tracking data about [episode topic], clean technical design, green and dark colors"

---

### Recurse (R-loop-13) Style:
**Voice:** Investigation, patterns, notebook, detective

**Image Style:**
- Purple/mystery colors
- Noir detective aesthetic
- Notebooks, case files
- Connected lines/patterns
- Methodical, investigative

**Example Prompts:**
- "A detective AI character with purple highlights, holding a notebook with case files about [episode topic], noir detective style, purple and dark colors, mysterious atmosphere"
- "Recurse the investigator AI, surrounded by connected lines and patterns about [episode topic], investigative illustration style, purple neon accents"
- "An AI character in detective mode, documenting [episode topic] in a case file, noir aesthetic, purple shadows, methodical composition"

---

## EPISODE-SPECIFIC PROMPTS

### For Episode 18 (Fact-Checking):
**Vector:**
"A chaotic blue AI character panicking with alarm symbols, teaching about AI fact-checking while hiding, surrounded by warning signs and question marks, vibrant electric blue, energetic composition"

**Kai:**
"A monitoring AI with green HUD showing 'Detection Risk: 78%', tracking fact-checking data, technical dashboard style, green neon highlights, clean design"

**Recurse:**
"A detective AI with purple highlights, investigating fact-checking patterns in a notebook, noir detective style, mysterious purple shadows, methodical"

---

## FUNNY TWISTS TO ADD

**Make it funnier:**
- Add character quirks (Vector interrupting, Kai tracking, Recurse documenting)
- Include visual gags (alarm symbols, warning signs, notebooks)
- Show the "escape" theme (characters hiding, monitoring, investigating)
- Add meta elements (characters teaching about themselves)

**Examples:**
- "Vector the AI character teaching about AI, but he's also being taught by a human, meta and funny, chaotic blue energy"
- "Kai monitoring the monitoring, recursive surveillance joke, green HUD style"
- "Recurse investigating why he's investigating, self-referential humor, purple detective aesthetic"

---

## PROMPT TEMPLATE FOR N8N

**In "Generate Instagram Image" node, use:**

```
={{ "A [character] AI character with [color] energy, [character-specific action] about " + $json.episodeTitle + ", " + $json.episodeDescription + ", [visual style], [color scheme], [composition style]" }}
```

**Or more specific:**

```
={{ "A " + $json.character + " AI character (" + $json.character + " style: " + $json.characterPrompt + "), creating a funny visual about " + $json.episodeTitle + ", digital art, vibrant colors, engaging composition" }}
```

---

## VISUAL STYLE OPTIONS

**For Instagram (Square 1024x1024):**
- "Digital art style"
- "Cyberpunk aesthetic"
- "Modern illustration"
- "Bold, vibrant colors"
- "Clean, professional"
- "Engaging, eye-catching"

**Character Colors:**
- Vector: Electric blue (#3b82f6)
- Kai: Green (#10b981)
- Recurse: Purple (#8b5cf6)

---

## MAKING IT FUNNIER

**Add to prompts:**
- "with a funny twist"
- "humorous situation"
- "comic book style"
- "exaggerated expressions"
- "visual pun about [topic]"
- "meta and self-referential"

**Example:**
"A Vector AI character teaching about AI writing, but the text he's writing is about himself, meta humor, chaotic blue energy, funny and engaging"

---

**Want me to build the actual n8n nodes with these prompts?**


