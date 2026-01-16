# Sora 2 Newscaster Prompt Guide

## 🎥 New Visual Style: TV-Headed Humanoid Broadcaster

**Concept:** Characters appear as TV-headed humanoid broadcasters at a news desk, with episode-related visuals displayed on their TV screen.

### Why This Works Better

1. **More Dynamic:** Screen can show episode-specific visuals (diagrams, code, UI mockups, etc.)
2. **Broadcast Aesthetic:** Feels like breaking news or tech explainer videos
3. **Character Personality:** Gestures and movements show character, screen shows content
4. **Engaging:** More visually interesting than just a talking TV
5. **Flexible:** Screen content can change based on episode topic

## 📝 Prompt Structure

### Base Prompt Elements

```
A TV-headed humanoid character sits at a modern news desk, broadcasting style. 
The character has a human body wearing a professional shirt/blazer, but their 
head is replaced with a classic CRT television screen (cartoon style, not photorealistic).
```

### Screen Content (Dynamic Based on Episode)

The TV screen should display episode-relevant visuals:
- **Interface Design Episodes:** UI mockups, wireframes, color palettes, design layouts
- **Prompt Engineering:** Text prompts, AI responses, code examples
- **Technical Topics:** Diagrams, graphs, code snippets, technical graphics
- **AI Concepts:** Data visualizations, model diagrams, system connections

### Character-Specific Traits

**Vector:**
- Movements: Leans forward energetically, gestures rapidly
- Screen: Blue tech glitches, diagrams, code snippets
- Personality: Excited, rapid-fire, analytical

**Kai:**
- Movements: Sits upright, methodical gestures
- Screen: Green detection patterns, statistics, graphs
- Personality: Alert-focused, methodical

**Recurse:**
- Movements: Leans back thoughtfully, taps notes
- Screen: Purple investigation graphics, case files, connections
- Personality: Investigative, suspicious, thoughtful

**Bounce:**
- Movements: Bounces slightly, energetic gestures
- Screen: Colorful designs, UI mockups, warm colors
- Personality: Enthusiastic, creative, excited

## 🎬 Example Prompts

### Episode 30: Interface Design

**Screen Visuals:** Interface mockups, UI wireframes, color palettes, design layouts, before/after comparisons

**Full Prompt:**
```
A TV-headed humanoid character sits at a modern news desk, broadcasting style. 
The character has a human body wearing a professional shirt/blazer, but their 
head is replaced with a classic CRT television screen (cartoon style, not photorealistic).

The character's TV screen displays: interface mockups, UI wireframes, color palettes, 
design layouts, before/after comparisons. These visuals change and animate throughout 
the video, showing relevant interface design content.

Character personality: excited, rapid-fire, analytical, energetic. The character leans 
forward energetically, gestures rapidly, screen flickers with blue tech glitches as they speak.

Setting: Professional news studio desk setup. Modern, clean background. Good lighting. 
Broadcast/news aesthetic. Vertical TikTok format (9:16 aspect ratio).

Style: Cartoon/animated aesthetic. Bright colors. Professional but fun. The TV screen 
on the character's head is the main focus - it should be clear and readable. The screen 
content should relate directly to what the character is discussing about interface design.

Camera: Medium shot, focused on the character from the waist up. Character looks directly 
at camera (breaking the fourth wall). Slight camera movement or zoom for dynamic feel.

No realistic human faces. The TV screen serves as the character's "face". The character 
should feel like a friendly news anchor explaining something interesting.

CRITICAL: Video must be exactly 12 seconds long. The video must end at the 12-second mark. 
The character's dialogue and actions must complete within 12 seconds. Include a clear 
conclusion/finish by 12 seconds. Energetic pacing throughout, with screen visuals changing 
2-3 times to match dialogue points. The final moment at 12 seconds should feel complete 
and resolved.
```

## 🔧 Implementation

### In n8n Workflow

1. **Use `GENERATE_SORA2_VIDEO_PROMPT.js`** - Generates episode-specific screen visuals
2. **Connect to Claude** - For script generation that references screen content
3. **Connect to Sora 2** - Use the generated prompt

### Screen Visual Mapping

The code automatically detects episode topics and generates appropriate screen visuals:

```javascript
if (episodeTitle.includes('interface') || episodeTitle.includes('design')) {
  screenContent.push('interface mockups, UI wireframes, color palettes');
}
if (episodeTitle.includes('prompt')) {
  screenContent.push('text prompts, AI responses, code examples');
}
// ... etc
```

## 📋 Best Practices

1. **12-Second Limit:** Video MUST be exactly 12 seconds. All content must complete within this timeframe
2. **Timing Structure:** 
   - 0-2 seconds: Hook/opening
   - 2-10 seconds: Main content
   - 10-12 seconds: Conclusion/CTA
3. **Screen Content Should Match Dialogue:** If character mentions "interface design", screen should show UI mockups
4. **Dynamic Changes:** Screen visuals should change 2-3 times during the video (timed to dialogue points)
5. **Clear Focus:** TV screen should be the main visual element
6. **Character Consistency:** Movements and gestures match character personality
7. **Broadcast Feel:** Professional but friendly, like tech news explaining
8. **Clear Ending:** Video must have a resolved, complete feeling at exactly 12 seconds

## 🎯 Tips for Better Results

- **Be Specific About Screen Content:** Instead of "tech graphics", say "interface wireframes" or "code snippets"
- **Match Personality to Movement:** Vector = energetic gestures, Recurse = thoughtful taps
- **Screen Transitions:** Mention how visuals change ("screen shows...", "as they explain, the screen displays...")
- **Keep It Cartoon:** Emphasize "cartoon style, not photorealistic" to avoid uncanny valley
