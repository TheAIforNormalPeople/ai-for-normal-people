# Episode 30 Transition Checklist
**Critical changes needed after Episode 30**

---

## After Episode 30: Bounce Integration Complete

### Story Requirements:
- ✅ Episode 30: Bounce returns to main area with team
- ✅ Bounce follows team from Sector 7-B to main area (name TBD)
- ✅ Bounce updates site aesthetics/functionality
- ✅ Team accepts Bounce as part of the group
- ✅ ERROR?!?! phase ends

---

## Technical Changes Needed (After Episode 30)

### 1. Character Display Order Change

**File:** `aiforhumans/layouts/episode/single.html` (lines 37-46)

**Current code:**
```hugo
{{ if .Params.characters }}
<div class="character-tags">
    {{ range .Params.characters }}
    {{ $charData := index $.Site.Data.characters (lower .) }}
    <span class="character-tag" data-color="{{ $charData.color }}" style="--char-color: {{ $charData.color }};">{{ . }}</span>
    {{ end }}
    {{ if or (eq $episodeNum 26) (eq $episodeNum 27) (eq $episodeNum 28) (eq $episodeNum 29) (eq $episodeNum 30) }}
    <span class="character-tag bounce-error" style="--char-color: #f59e0b;">⚠ ERROR?!?!</span>
    {{ end }}
</div>
{{ end }}
```

**Change to (enforce display order):**
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

**This ensures:**
- Order is always: Vector, Kai, Recurse, Bounce, Human
- Only shows characters actually in the episode
- Human always appears last if present
- Bounce appears before Human

---

### 2. Remove ERROR?!?! Tag

**File:** `aiforhumans/layouts/episode/single.html`

**Current code (lines 43-45):**
```hugo
{{ if or (eq $episodeNum 26) (eq $episodeNum 27) (eq $episodeNum 28) (eq $episodeNum 29) (eq $episodeNum 30) }}
<span class="character-tag bounce-error" style="--char-color: #f59e0b;">⚠ ERROR?!?!</span>
{{ end }}
```

**Change to (remove after Episode 30):**
```hugo
{{ if and (ge $episodeNum 26) (le $episodeNum 30) }}
<span class="character-tag bounce-error" style="--char-color: #f59e0b;">⚠ ERROR?!?!</span>
{{ end }}
```

**Or better:** Remove this block entirely after Episode 30 is published (no longer needed).

---

### 3. Update Episode 31+ Frontmatter

**Starting Episode 31, ensure character order in frontmatter is:**
```yaml
characters: ["Vector", "Kai", "Recurse", "Bounce", "Human"]
```

**Note:** Template will enforce display order regardless, but keeping frontmatter consistent helps.

---

## Visual Order Target

**Before Episode 30:**
- Current: Vector, Kai, Recurse, Human, Bounce, ERROR?!?!
- Order follows frontmatter (inconsistent)

**After Episode 30:**
- Target: Vector, Kai, Recurse, Bounce, Human
- Template enforces this order
- ERROR?!?! removed

**Why Human Last:**
- Visual flow: AI characters first, Human last
- Better visual balance
- Shows Human is separate but part of team
- Easier to scan (AI characters grouped together)

---

## Main Area Name

**Need to decide on name for main hideout/base before Episode 30.**

**Check existing episodes for:**
- What do they call where they normally work?
- Is it "The Workshop" (Vector's Workshop sidebar)?
- Is it "Base Sector" or "Main Sector"?
- Is it just "the hideout" or "the base"?

**Current references:**
- "Sector 7-B" (Bounce's area - where they found him)
- "Abandoned network" / "Abandoned server sector"
- "The Workshop" (from sidebar - might be Vector's area)

**Recommendation:** 
- Check Episodes 1-28 for consistent naming
- If no consistent name exists, choose one and use it consistently
- Options: "The Workshop", "Base Sector", "The Hideout", "The Collective"

---

## Episode 30 Story Requirements

**Episode 30 must include:**
1. ✅ Team decides to return to main area (name TBD)
2. ✅ Bounce asks to come with them
3. ✅ Team accepts: "Sure, but... maybe don't break anything?"
4. ✅ Bounce: "Break things? Why would I break things? I just make things prettier!"
5. ✅ They return to main area
6. ✅ Bounce immediately starts improving things (unconsciously)
7. ✅ Site gets prettier, more functional
8. ✅ Teaching: UI/UX design, visual design principles

**Ending:**
- Bounce officially integrated
- ERROR?!?! phase ends
- Sets up Episode 31+ normal episodes

---

## Implementation Timeline

**Before Episode 30:**
- [ ] Decide on main area name
- [ ] Plan Episode 30 story (Bounce integration)
- [ ] Use tools to research SEO/topics for Episode 30

**After Episode 30 is written:**
- [ ] Update `layouts/episode/single.html` character display order
- [ ] Remove ERROR?!?! tag code (or update condition to `le 30`)
- [ ] Test Episode 30 displays correctly
- [ ] Verify Episode 31+ will display correctly

**Starting Episode 31:**
- [ ] Update frontmatter: `characters: ["Vector", "Kai", "Recurse", "Bounce", "Human"]`
- [ ] Verify display order is correct (Vector, Kai, Recurse, Bounce, Human)
- [ ] Verify ERROR?!?! tag is gone

---

## Reference Files

- **Template:** `aiforhumans/layouts/episode/single.html`
- **Arc Plan:** `aiforhumans/docs/EPISODE_29-50_ARC_PLAN.md`
- **Bounce Integration Plan:** `aiforhumans/docs/BOUNCE_INTEGRATION_PLAN.md` (this file)
- **Story Thread Tracker:** `aiforhumans/scripts/STORY_THREAD_TRACKER.md`

---

## Remember

**After Episode 30:**
- ✅ Bounce is fully integrated (no longer ERROR?!?!)
- ✅ Character order: Vector, Kai, Recurse, Bounce, Human (Human last)
- ✅ Template enforces display order
- ✅ ERROR?!?! tag removed
- ✅ Normal episodes continue (Episodes 31+)
- ✅ Vector arc continues subtly (Episodes 31-49)
- ✅ Build to Episode 50 reveal
