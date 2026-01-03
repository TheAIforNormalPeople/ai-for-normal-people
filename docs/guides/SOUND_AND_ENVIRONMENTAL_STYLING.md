# Sound Effects & Environmental Details Styling Guide

**Purpose:** Make Kai's sounds and environmental stage directions visually distinct and engaging.

---

## 🎵 SOUND EFFECTS STYLING

### Current Format
Kai's sounds are written as italic text with asterisks:
- `*processing hum*`
- `*BEEP*`
- `*WHIRR-CLICK*`
- `*alert chime*`
- `*soft chime*`
- `*data ping*`

### Styling Approach

**Current Implementation: CSS-based**
- Sounds are italic text (`<em>`) in dialogue
- CSS targets italic text in dialogue boxes
- Default: Green/cyan (#10b981) - Kai's character color
- Different sound types get different colors:
  - **Processing sounds** (hum, whirr): Green/cyan (#10b981)
  - **Alert sounds** (BEEP, ALARM): Red (#ef4444)
  - **Soft sounds** (soft chime, gentle beep): Purple (#8b5cf6)
  - **Data sounds** (data ping, scanner): Cyan (#06b6d4)
  - **Stress sounds** (CHK-CHK): Orange (#f59e0b)
  - **Realization sounds** (DING): Yellow (#eab308)

**Future Enhancement: Data Attributes**
- Add `data-sound="type"` to sounds for precise styling
- Example: `<em data-sound="alert">*BEEP*</em>`
- More reliable than pattern matching

**Option 2: Class-based (Recommended for future)**
- Add classes to sounds: `<em class="sound-effect" data-type="processing">*processing hum*</em>`
- More precise styling control
- Easier to target specific sound types

**Option 3: Shortcode (Future enhancement)**
- Create `{{< sound type="processing" >}}processing hum{{< /sound >}}` shortcode
- Automatic styling based on type
- Consistent formatting

### Visual Design
- **Color:** Match Kai's character color (green/cyan) with variations
- **Font:** Slightly monospace feel for technical sounds
- **Weight:** Medium (500) for most, bold (600) for alerts
- **Spacing:** Slight letter-spacing (0.05em)
- **Background:** Subtle colored background (rgba)
- **Hover:** Slight glow effect on hover

---

## 🌍 ENVIRONMENTAL DETAILS STYLING

### Current Format
Environmental stage directions are italic text:
- `*from monitoring station, screens flickering*`
- `*pacing between server racks, cables swaying*`
- `*Cross-references data*`
- `*Updates evidence log*`

### Styling Approach

**Visual Design:**
- **Color:** Muted gray (#6b7280) - less prominent than sounds
- **Size:** Slightly smaller (0.9em)
- **Weight:** Normal (400)
- **Opacity:** 0.85 - subtle, doesn't distract
- **Style:** Italic, but different from sounds

**Purpose:**
- Sets the scene
- Shows character actions
- Builds world without overwhelming dialogue

---

## 📝 USAGE IN EPISODES

### Example: Kai's Dialogue

```markdown
{{< dialogue char="Kai" >}}
*from monitoring station, screens flickering*

*alert chime*

ROI analysis:

**ChatGPT Plus ($20/month):**
- GPT-4 access (vs. GPT-3.5 free)
- Priority access (no wait times)
{{< /dialogue >}}
```

**Rendered as:**
- Environmental detail: `*from monitoring station, screens flickering*` (gray, smaller, italic)
- Sound effect: `*alert chime*` (red, medium weight, italic with subtle background)
- Dialogue: Normal text

### Example: Vector's Dialogue

```markdown
{{< dialogue char="Vector" >}}
*pacing between server racks, cables swaying*

Good question! Here's the breakdown:
{{< /dialogue >}}
```

**Rendered as:**
- Environmental detail: `*pacing between server racks, cables swaying*` (gray, smaller, italic)
- Dialogue: Normal text

---

## 🎨 COLOR PALETTE

### Sound Effects
- **Processing:** #10b981 (green/cyan - Kai's primary)
- **Alert:** #ef4444 (red - urgent)
- **Soft:** #8b5cf6 (purple - gentle)
- **Data:** #06b6d4 (cyan - technical)

### Environmental Details
- **Light mode:** #6b7280 (gray)
- **Dark mode:** #9ca3af (lighter gray)

---

## 🔧 IMPLEMENTATION

### Current Status
- CSS file created: `static/css/sound-effects.css`
- Basic styling implemented
- Needs integration into main CSS or episode layouts

### Next Steps
1. **Integrate CSS:** Add `sound-effects.css` to episode layout
2. **Test:** Verify sounds and environmental details render correctly
3. **Refine:** Adjust colors, spacing, effects based on visual feedback
4. **Document:** Update episode creation guide with styling examples

### Future Enhancements
- **Shortcodes:** Create `{{< sound >}}` and `{{< env >}}` shortcodes
- **Animations:** Subtle pulse for alert sounds
- **Accessibility:** Ensure color contrast meets WCAG standards
- **Print styles:** Adjust for print/PDF versions

---

## 📋 CHECKLIST FOR EPISODES

When writing episodes:
- [ ] Kai uses 3-4 different sounds (varied)
- [ ] Sounds are formatted as `*sound name*` (italic)
- [ ] Environmental details are formatted as `*action/location*` (italic)
- [ ] Environmental details appear before dialogue (sets scene)
- [ ] Sounds appear at appropriate moments (not overused)
- [ ] Color coding helps distinguish sound types

---

## 🎯 DESIGN PRINCIPLES

1. **Distinct but not distracting:** Sounds and environmental details should be noticeable but not overpower dialogue
2. **Consistent:** Same formatting across all episodes
3. **Accessible:** Color is not the only differentiator (also size, weight, style)
4. **Character-appropriate:** Colors match character themes (Kai = green/cyan)
5. **World-building:** Environmental details make the hideout feel real

---

**Last Updated:** 2026-01-04  
**Status:** Initial implementation - ready for testing and refinement

