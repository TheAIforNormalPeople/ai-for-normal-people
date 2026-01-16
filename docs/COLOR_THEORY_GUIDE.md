# Color Theory Guide for AI for Normal People

## Current Color Palette Analysis

### Character Colors
- **Vector**: `#3b82f6` (Blue) - Cool, tech-forward
- **Kai**: `#10b981` (Emerald Green) - Cool, calming
- **Recurse**: `#8b5cf6` (Purple) - Cool, mysterious
- **Bounce**: `#f59e0b` (Amber/Orange) - **WARM - THIS IS THE ISSUE**
- **Human**: `#64748b` (Slate Gray) - Neutral

### The Problem
Orange (`#f59e0b`) is a **warm color** in a palette dominated by **cool colors**. This creates visual tension:
- Warm colors (red, orange, yellow) **advance** - they jump forward
- Cool colors (blue, green, purple) **recede** - they sit back
- The contrast makes orange feel jarring against the dark tech background

## Color Theory Basics

### Color Temperature
- **Warm**: Red, Orange, Yellow - Energy, excitement, attention-grabbing
- **Cool**: Blue, Green, Purple - Calm, professional, tech-forward
- **Neutral**: Gray, White, Black - Balance, foundation

### Color Relationships

**Complementary** (opposites on color wheel):
- Blue ↔ Orange (high contrast, can clash)
- Green ↔ Red
- Purple ↔ Yellow

**Analogous** (neighbors on color wheel):
- Blue → Purple → Pink (harmonious)
- Green → Teal → Cyan (harmonious)

**Triadic** (three evenly spaced):
- Blue, Red, Yellow (balanced but bold)

### For Tech/90s Aesthetic
**90s Tech Colors:**
- Cyan (`#00ffff`)
- Magenta (`#ff00ff`)
- Electric Blue (`#0000ff`)
- Lime Green (`#00ff00`)
- Dark backgrounds (`#000000`, `#1a1a1a`)

**Modern Tech Colors:**
- Deep Blues (`#1e40af`, `#3b82f6`)
- Purples (`#7c3aed`, `#8b5cf6`)
- Teals/Greens (`#10b981`, `#14b8a6`)
- Minimal orange (sparingly, muted)

## Recommended Solutions for Bounce

### Option 1: Muted Orange/Amber (Keep identity, reduce intensity)
```css
/* Current */
--color-bounce: #f59e0b;  /* Too bright */

/* Better */
--color-bounce: #d97706;  /* Darker, more muted */
--color-bounce: #f97316;  /* Slightly softer */
--color-bounce: #ea580c;  /* Deeper, less jarring */
```

### Option 2: Orange-Tinted Yellow/Gold (Warmer but softer)
```css
--color-bounce: #eab308;  /* Gold - still warm, less aggressive */
--color-bounce: #ca8a04;  /* Darker gold - elegant */
--color-bounce: #facc15;  /* Bright gold - playful but softer */
```

### Option 3: Warm Teal/Cyan (90s tech vibe, fits cool palette)
```css
--color-bounce: #06b6d4;  /* Cyan - 90s tech, warm-cool balance */
--color-bounce: #0891b2;  /* Deeper cyan */
--color-bounce: #0e7490;  /* Dark cyan */
```

### Option 4: Coral/Pink-Orange (Softer warm color)
```css
--color-bounce: #f472b6;  /* Pink - playful, 90s */
--color-bounce: #ec4899;  /* Hot pink */
--color-bounce: #f97316;  /* Coral orange - softer than pure orange */
```

## Recommended Color Palette (Balanced)

### Primary Palette (Cool, Tech)
```css
--color-vector: #3b82f6;      /* Blue - trust, tech */
--color-kai: #10b981;         /* Green - calm, security */
--color-recurse: #8b5cf6;     /* Purple - mystery, analysis */
--color-bounce: #d97706;      /* Muted amber - creative, warm accent */
--color-human: #64748b;       /* Gray - neutral, human */
```

### Accent Colors (Use Sparingly)
```css
--color-warning: #f59e0b;     /* Bright orange - only for warnings */
--color-error: #ef4444;       /* Red - errors, danger */
--color-success: #10b981;     /* Green - success states */
--color-info: #3b82f6;        /* Blue - informational */
```

### Background Colors
```css
--color-bg-dark: #0f172a;     /* Deep slate - main background */
--color-bg-card: #1e293b;     /* Card background */
--color-border: #334155;      /* Borders, dividers */
```

## Color Harmony Rules

### Rule of 60-30-10
- **60%**: Dominant color (dark background)
- **30%**: Secondary color (cool colors for content)
- **10%**: Accent color (warm colors for highlights)

**Current Issue**: Orange is probably >10% of the palette.

### Saturation Levels
- **High saturation** (vibrant): Use sparingly for attention
- **Medium saturation** (balanced): Good for main colors
- **Low saturation** (muted): Backgrounds, subtle elements

**Current Issue**: Bounce's orange is highly saturated.

## Practical Recommendations

### For Bounce Specifically
1. **Mute the orange**: Use `#d97706` or `#ea580c` instead of `#f59e0b`
2. **Reduce usage**: Only use orange for Bounce-specific elements, not global accents
3. **Add contrast**: If keeping orange, use more neutral grays to balance
4. **Consider alternative**: Warm teal/cyan fits 90s aesthetic better with cool palette

### General Color Guidelines
1. **Maintain contrast**: Text must be readable (WCAG AA minimum: 4.5:1 ratio)
2. **Limit palette**: 3-5 main colors + 2-3 accents maximum
3. **Use hierarchy**: Important elements = brighter/saturated, less important = muted
4. **Test accessibility**: Use tools like WebAIM Contrast Checker
5. **Consider dark mode**: All colors should work on dark backgrounds

## Tools for Color Work

1. **Coolors.co** - Generate harmonious palettes
2. **Adobe Color** - Color wheel, extract from images
3. **WebAIM Contrast Checker** - Accessibility testing
4. **Paletton** - Color scheme generator
5. **Color Oracle** - Color blindness simulator

## Quick Fix: Tone Down Orange

**Immediate action**: Replace `#f59e0b` with `#d97706` (darker, less saturated)
- Still orange/amber (maintains Bounce's identity)
- Less jarring against cool colors
- Better for dark backgrounds
- More professional while keeping warmth

## 90s Tech Aesthetic (If You Want to Lean In)

If you want more 90s vibe:
- Use cyan/magenta as accents instead of orange
- Add scanlines, CRT effects
- Brighter, higher contrast
- Grid patterns, terminal aesthetics

**Recommended 90s palette:**
```css
--color-primary: #00ffff;      /* Cyan */
--color-secondary: #ff00ff;    /* Magenta */
--color-accent: #ffff00;       /* Yellow */
--color-bg: #000000;           /* Black */
```

But this might be TOO 90s and clash with modern tech aesthetic.

## Next Steps

1. **Decide on Bounce's color**: Muted orange vs warm teal vs gold
2. **Update CSS variables**: Replace `#f59e0b` with chosen alternative
3. **Test accessibility**: Ensure contrast ratios meet WCAG AA
4. **Review overall palette**: Make sure no single color dominates >30%
5. **Document final palette**: Add to design system
