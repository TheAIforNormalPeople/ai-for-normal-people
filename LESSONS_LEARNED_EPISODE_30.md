# Lessons Learned - Episode 30: Character Dialogue Box Styling

## Date: January 2026
## Episode: 30 - "How AI Designs Interfaces (Without Even Trying)"

---

## Key Accomplishments

### 1. Unique Character Dialogue Box Styles
- **Vector**: Terminal/data stream aesthetic with circuit patterns and data flow animations
- **Kai**: Security monitoring dashboard with grid patterns, scanning lines, and status indicators
- **Recurse**: Debugging/analysis interface with recursive loop patterns, logic flow lines, and question mark indicators
- **Bounce**: 8-bit gaming style (already existed)

### 2. Character Tag Alignment
- Fixed duplicate Bounce character tags by skipping Bounce in the characters array loop for Episode 30+
- Aligned all character tags with consistent sizing, font, and spacing
- Bounce tag uses white outline to stand out while maintaining alignment

### 3. Episode Content Improvements
- Added comedic back-and-forth between Vector, Human, and Bounce
- Vector's defensive rant about legacy code (with counting quirk)
- Human's confusion about scrambled data in Sector 7-B
- Bounce's enthusiastic but oblivious responses
- Removed repetitive explanations to Human

---

## Technical Implementation

### CSS Styling
- **File**: `aiforhumans/static/css/episode-26-bounce.css`
- Added unique dialogue box styles for Vector, Kai, and Recurse
- Each style includes:
  - Custom header with character designation
  - Background patterns (circuits, grids, loops)
  - Animations (pulses, scans, data streams)
  - Color schemes matching character personalities
  - High contrast mode support

### Hugo Shortcode Updates
- **File**: `aiforhumans/layouts/shortcodes/dialogue.html`
- Added conditional logic to apply unique box styles for Episode 30+
- Vector: `dialogue-box vector`
- Kai: `dialogue-box kai` (with improvement detection)
- Recurse: `dialogue-box recurse`

### Template Updates
- **File**: `aiforhumans/layouts/episode/single.html`
- Updated episode banner message for Episode 30
- Fixed character tag rendering to prevent duplicates
- Updated sidebar status for Episode 30 (Status: Improving, Location: Main Lab, DESIGN MODS: Active)

---

## Writing Lessons

### Character Voice Consistency
- Vector: Uses counting quirk when stressed, ALL CAPS when excited, technical tangents
- Kai: Monitoring/security language, percentages, soft chimes for positive recognition
- Recurse: Methodical questioning, three-part structures, skeptical detective tone
- Bounce: Excited, oblivious, uses exclamations more than questions

### Dialogue Flow
- Shorter exchanges (1-2 sentences) for banter
- Longer boxes reserved for teaching moments
- Back-and-forth conversations instead of sequential monologues
- Characters respond directly to each other

### Comedy Structure
- Vector's defensive rants work well when he's challenged
- Bounce's obliviousness creates comedic contrast
- Human caught in the middle adds tension
- Recurse provides logical explanations

---

## Common Issues to Avoid

### 1. Repetition
- Watch for repeated phrases (e.g., "I can try" appeared multiple times)
- Vary character responses even when saying similar things
- Use MCP tools to check for repetition before finalizing

### 2. Character Voice Violations
- Don't have Human teaching when they should be learning
- Keep Bounce's questions to a minimum (use exclamations)
- Vector should count when stressed, not randomly

### 3. Visual Consistency
- Ensure character tags align properly
- Check for duplicate tags/boxes
- Verify CSS loads for correct episodes

---

## MCP Tools Used

- `character_lookup` - Verified character voices
- `analyze_episode_stats` - Checked word count and structure
- `check_banned_phrases` - Removed corporate language
- `validate_character_voice` - Ensured consistency

---

## Next Steps

1. Continue using unique dialogue box styles for all characters in future episodes
2. Maintain character voice consistency using MCP validation
3. Keep dialogue exchanges short and conversational
4. Use MCP tools before finalizing episodes to catch repetition and voice issues

---

## Files Modified

- `aiforhumans/content/blog/episode-30-prompt-engineering-does-it-actually-work.md`
- `aiforhumans/static/css/episode-26-bounce.css`
- `aiforhumans/layouts/shortcodes/dialogue.html`
- `aiforhumans/layouts/episode/single.html`
- `aiforhumans/layouts/partials/character-sidebar.html`
