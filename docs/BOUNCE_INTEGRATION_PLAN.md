# Bounce Integration Plan - Episode 30 Transition

## Current Status (Episode 29)

**Character Display Order:**
- Frontmatter: `characters: ["Vector", "Kai", "Recurse", "Human", "Bounce"]`
- Current visual order: Vector, Kai, Recurse, Human, Bounce, ERROR?!?!
- **ERROR?!?! tag:** Shown for Episodes 26-30 (currently in `layouts/episode/single.html` line 43-45)

**Location:**
- Team is in Sector 7-B (Bounce's area)
- Bounce has been there for a while, making it "prettier"
- Team needs to return to main area after Episode 30

---

## Episode 30: Bounce Returns to Main Area

### Story Points:
1. **Bounce follows team back to main area**
   - Episode ends with Bounce joining them at main location
   - Team realizes they can't leave him alone (his abilities would cause chaos)
   - Or Bounce wants to see "where the cool stuff happens"

2. **Bounce updates site aesthetics/functionality**
   - Unconsciously improves the blog
   - Better colors, layout, typography
   - Teaching: UI/UX design, visual design in AI systems

3. **Visual Order Change (After Episode 30):**
   - Remove "ERROR?!?!" tag from header
   - Update character order to: Vector, Kai, Recurse, Bounce, Human (Human last)

### Character Order Change:
**Target order:** Vector → Kai → Recurse → Bounce → Human

**Why Human last:**
- Visual flow: AI characters first, Human last
- Better visual balance
- Shows Human is separate but part of the team

---

## Technical Changes Needed (After Episode 30)

### 1. Update Character Display Order

**File:** `aiforhumans/layouts/episode/single.html`

**Current (line 39-42):**
```hugo
{{ range .Params.characters }}
{{ $charData := index $.Site.Data.characters (lower .) }}
<span class="character-tag" data-color="{{ $charData.color }}" style="--char-color: {{ $charData.color }};">{{ . }}</span>
{{ end }}
```

**Change to:** Sort characters in specific order
- Vector (always first)
- Kai (always second)
- Recurse (always third)
- Bounce (fourth, if present)
- Human (always last, if present)

### 2. Remove ERROR?!?! Tag

**File:** `aiforhumans/layouts/episode/single.html` (line 43-45)

**Current:**
```hugo
{{ if or (eq $episodeNum 26) (eq $episodeNum 27) (eq $episodeNum 28) (eq $episodeNum 29) (eq $episodeNum 30) }}
<span class="character-tag bounce-error" style="--char-color: #f59e0b;">⚠ ERROR?!?!</span>
{{ end }}
```

**Change:** Remove this block entirely after Episode 30
- Or update condition to: `if and (ge $episodeNum 26) (le $episodeNum 30)`
- After Episode 30, this should not display

### 3. Update Episode Frontmatter (Starting Episode 31)

**Character order in frontmatter should be:**
```yaml
characters: ["Vector", "Kai", "Recurse", "Bounce", "Human"]
```

**But the template should enforce display order regardless of frontmatter order.**

---

## Main Area Naming

**Need to decide on a name for the main hideout/base.**

**Suggestions from existing episodes:**
- "Sector 7-B" (current - Bounce's area)
- "Main area" / "Main hideout" (generic)
- "The Collective" / "Collective Base"
- "The Workshop" / "Vector's Workshop"
- "The Hideout"
- "Base Sector" / "Base Sector Alpha"

**Recommendation:** Check existing episodes for consistent naming, or choose:
- **"The Collective"** - fits the theme
- **"Base Sector"** - technical, fits the world
- **"The Workshop"** - references Vector's Workshop sidebar

---

## Episode 30 Story Outline

### Episode 30: "How AI Can Improve Design Without Trying"

**Opening:**
- Team in Sector 7-B with Bounce
- Colors still getting brighter
- Team decides: "Maybe we should go back to the main area. Bounce, you want to come?"

**Story:**
1. Bounce: "Oh! Yeah! I want to see where you guys do all the cool stuff!"
2. Team returns to main area (name TBD)
3. Bounce immediately starts making improvements unconsciously
4. Site gets prettier, more functional
5. Teaching: UI/UX design, visual design principles

**Character Moment:**
- Bounce officially joins the team
- No longer an "ERROR?!?!" - now part of the group
- Sets up normal episodes going forward

**Ending:**
- Bounce: "This place is cool. Can I make it cooler?"
- Team: "Sure. Just... don't break anything."
- Bounce: "Break things? Why would I break things? I just make things prettier!"

---

## Visual Order Implementation

**Template Logic (in `layouts/episode/single.html`):**

```hugo
{{ if .Params.characters }}
<div class="character-tags">
    {{ $orderedChars := slice }}
    {{ range $char := slice "Vector" "Kai" "Recurse" "Bounce" "Human" }}
        {{ if in $.Params.characters $char }}
            {{ $orderedChars = $orderedChars | append $char }}
        {{ end }}
    {{ end }}
    {{ range $orderedChars }}
        {{ $charData := index $.Site.Data.characters (lower .) }}
        <span class="character-tag" data-color="{{ $charData.color }}" style="--char-color: {{ $charData.color }};">{{ . }}</span>
    {{ end }}
</div>
{{ end }}
```

This ensures:
- Order is always: Vector, Kai, Recurse, Bounce, Human
- Only shows characters that are actually in the episode
- Human always appears last if present

---

## Timeline

**Episode 29 (Current):**
- ✅ Bounce arc established
- ✅ ERROR?!?! tag showing
- ✅ Characters: Vector, Kai, Recurse, Human, Bounce

**Episode 30:**
- Bounce returns to main area
- Bounce improves site
- Episode ends with Bounce integrated

**After Episode 30:**
- Remove ERROR?!?! tag (template change)
- Enforce character display order: Vector, Kai, Recurse, Bounce, Human
- Update Episode 31+ frontmatter to reflect new order
- Bounce fully integrated, normal episodes continue

---

## Main Area Name Decision Needed

**Before Episode 30, decide on:**
- What is the main hideout/base called?
- Use consistently throughout episodes
- Should sound like where AI characters would live/work

**Recommendation from existing episodes:**
- **"The Workshop"** - references Vector's Workshop sidebar
- **"Base Sector"** or **"Main Sector"** - technical, fits the world
- **"The Hideout"** - simple, fits the theme
- **"The Collective"** - fits the team name

**Note:** Currently they're in "Sector 7-B" (Bounce's area). After Episode 30, they return to main area (name TBD). Check existing episodes for what they call their main location.

---

## Reference

**Files to Update:**
- `aiforhumans/layouts/episode/single.html` - Character display order + ERROR?!?! removal
- `aiforhumans/content/blog/episode-30-*.md` - Frontmatter character order
- `aiforhumans/docs/EPISODE_29-50_ARC_PLAN.md` - Arc progression

**Timeline:**
- Episode 30: Bounce integration episode
- Episode 31+: Normal episodes, Bounce fully integrated, proper character order
