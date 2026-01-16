# SEO & Page Updates Implementation Plan

**Date:** 2026-01-20  
**Status:** Ready to Build  
**Priority:** High

---

## Overview

Implementing Phase 1 SEO improvements (technical fixes) and updating pages with better character logic, including:
- SEO: Schema markup, dual titles, plain summaries
- 404 page: Better character dialogue (add Bounce)
- Other pages: Add character logic where missing
- Copyright notice: Add to footer
- Documentation: Log all changes

---

## Phase 1: Technical SEO (This Week)

### 1.1 Add Article Schema Markup

**File:** `layouts/episode/single.html` or `layouts/_default/single.html`

**What to add:**
- JSON-LD schema for Article type
- Include: headline, description, author (character name?), datePublished, dateModified, image, publisher

**Implementation:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ .Title }}",
  "description": "{{ .Description | default .Summary }}",
  "image": "{{ if .Params.image }}{{ .Params.image | absURL }}{{ else }}{{ .Site.Params.images | first | absURL }}{{ end }}",
  "author": {
    "@type": "Person",
    "name": "{{ if .Params.characters }}{{ index .Params.characters 0 }}{{ else }}AI for Normal People{{ end }}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI for Normal People",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ .Site.BaseURL }}images/logo.png"
    }
  },
  "datePublished": "{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}",
  "dateModified": "{{ .Lastmod.Format "2006-01-02T15:04:05Z07:00" }}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ .Permalink }}"
  }
}
</script>
```

**Location:** Add before closing `</head>` tag or in episode template

---

### 1.2 Dual Title System

**Files to modify:**
- `layouts/partials/head.html` - Update `<title>` tag
- `layouts/episode/single.html` - Keep creative title as H1

**Frontmatter addition:**
```yaml
seo_title: "SEO-friendly title here"
title: "Creative Character Title (With Personality)"
```

**Head template update:**
```html
<title>{{ if .Params.seo_title }}{{ .Params.seo_title }}{{ else }}{{ .Title }}{{ end }} | {{ .Site.Title }}</title>
```

**Episode template:**
```html
<h1>{{ .Title }}</h1>  <!-- Keep creative title visible -->
```

---

### 1.3 Plain-Text Summaries

**File:** `layouts/episode/single.html`

**Frontmatter addition:**
```yaml
plain_summary: "2-3 sentence plain English explanation"
```

**Template addition:**
```html
{{ if .Params.plain_summary }}
<div class="episode-summary" style="background: #f5f5f5; padding: 1rem; margin-bottom: 2rem; border-left: 4px solid #333;">
  <strong>TL;DR:</strong> {{ .Params.plain_summary }}
</div>
{{ end }}
```

---

### 1.4 Verify Sitemap

**File:** `hugo.toml` - Already configured ✅

**Action:** Verify sitemap.xml is being generated at `/sitemap.xml`

---

## Phase 2: Page Updates with Character Logic

### 2.1 Update 404 Page

**File:** `layouts/404.html`

**Current state:** Has Vector, Kai, Recurse dialogue (old style)

**Updates needed:**
- Add Bounce character dialogue
- Update character dialogue to match current voice evolution
- Make it funnier and more engaging
- Use current character catchphrases (sparingly)
- Add Human blogger commentary

**Character roles:**
- **Vector:** Excited about the error, wants to analyze it
- **Kai:** Monitors the situation, low risk assessment
- **Recurse:** Investigates why the page doesn't exist
- **Bounce:** Offers to make the 404 page "feel better" with colors
- **Human:** Apologetic, helpful

---

### 2.2 Update Homepage (_index.md)

**File:** `content/_index.md`

**Current state:** Empty (just frontmatter)

**Updates needed:**
- Add character introduction
- Show recent episodes
- Character-driven welcome message
- Link to "Start Here" page (when created)

---

### 2.3 Update About Page

**File:** `content/about.md`

**Current state:** Has character dialogue ✅ (looks good)

**Updates needed:**
- Review for current character voice
- Add Bounce if appropriate
- Ensure dialogue matches evolution stage

---

### 2.4 Update Archive Page

**File:** `content/archive.md`

**Check:** Does it have character dialogue? If not, add it.

**Character role:** Recurse investigating old posts, Vector embarrassed, Kai monitoring

---

### 2.5 Update Privacy Page

**File:** `content/privacy.md`

**Check:** Does it have character dialogue? If not, add it.

**Character role:** Kai explaining privacy, Recurse investigating what's tracked, Vector correcting misconceptions

---

### 2.6 Update Thanks Page

**File:** `content/thanks.md`

**Check:** Does it have character dialogue? If not, add it.

**Character role:** All characters thanking reader, Human blogger grateful

---

### 2.7 Update Characters Index

**File:** `content/characters/_index.md`

**Check:** Does it have character dialogue? If not, add it.

**Character role:** Characters introducing themselves

---

## Phase 3: Copyright & Documentation

### 3.1 Add Copyright Notice to Footer

**File:** `layouts/partials/footer.html`

**Add:**
```html
<div class="footer-copyright">
    <p>&copy; {{ now.Year }} AI for Normal People. All rights reserved.</p>
    <p>Characters Vector, Kai, Recurse, Bounce, and Human are original creations.</p>
</div>
```

---

### 3.2 Create IP Documentation Log

**File:** `docs/logs/IP_DOCUMENTATION.md`

**Content:**
- Character creation dates
- Copyright notice
- Trademark considerations
- IP protection strategy

---

### 3.3 Update Implementation Log

**File:** `docs/logs/SEO_IMPLEMENTATION_LOG.md`

**Track:**
- What was implemented
- When it was done
- Files modified
- Results/notes

---

## Implementation Order

### Step 1: Technical SEO (2-3 hours)
1. Add Article schema markup to episode template
2. Add dual title system (head template + frontmatter)
3. Add plain summary template
4. Verify sitemap

### Step 2: 404 Page Update (1 hour)
1. Read current 404 page
2. Update character dialogue (add Bounce, update voices)
3. Make it funnier
4. Test locally

### Step 3: Other Pages Review (2-3 hours)
1. Check each page for character dialogue
2. Add character logic where missing
3. Update existing dialogue to match current voices
4. Test all pages locally

### Step 4: Copyright & Documentation (30 minutes)
1. Add copyright to footer
2. Create IP documentation
3. Create implementation log
4. Update logs

---

## Files to Modify

### SEO Files:
- `layouts/episode/single.html` - Schema markup, plain summary
- `layouts/partials/head.html` - Dual title system
- Episode frontmatter files (add `seo_title`, `plain_summary`)

### Page Update Files:
- `layouts/404.html` - Update character dialogue
- `content/_index.md` - Add character content
- `content/archive.md` - Check/add character dialogue
- `content/privacy.md` - Check/add character dialogue
- `content/thanks.md` - Check/add character dialogue
- `content/characters/_index.md` - Check/add character dialogue

### Documentation Files:
- `layouts/partials/footer.html` - Add copyright
- `docs/logs/IP_DOCUMENTATION.md` - Create
- `docs/logs/SEO_IMPLEMENTATION_LOG.md` - Create

---

## Testing Checklist

- [ ] Schema markup validates (use Google Rich Results Test)
- [ ] Dual titles work (check `<title>` tag vs H1)
- [ ] Plain summaries display correctly
- [ ] 404 page has all characters (including Bounce)
- [ ] All pages reviewed for character dialogue
- [ ] Copyright notice appears in footer
- [ ] All changes logged
- [ ] Site builds without errors
- [ ] Local testing passes

---

## Phase 4: CSS Cleanup & Optimization (Separate Project - Optional)

**Status:** May be separate project  
**Priority:** Medium (can be done later)  
**Estimated Time:** 4-6 hours

### 4.1 Remove Inline Styles

**Problem:** 105+ instances of inline styles across templates

**Files to fix:**
- `layouts/partials/character-sidebar.html` - 15+ inline styles
- `layouts/characters/single.html` - 30+ inline styles
- `layouts/episode/single.html` - 5+ inline styles
- `layouts/partials/footer.html` - 3+ inline styles + 114 lines of inline CSS
- `layouts/404.html` - Inline styles in dialogue boxes

**Solution:**
- Move all inline styles to CSS classes
- Use CSS custom properties (variables) for dynamic colors
- Create utility classes for common patterns

**Example:**
```html
<!-- Before: -->
<div style="border-left: 3px solid {{ .color }};">

<!-- After: -->
<div class="character-status-item" data-color="{{ .color }}">
```
```css
.character-status-item[data-color] {
    border-left-color: attr(data-color);
}
```

---

### 4.2 Extract Inline JavaScript

**Problem:** 260 lines of inline JavaScript in `header.html`

**File:** `layouts/partials/header.html`

**Solution:**
- Move to external file: `static/js/main.js`
- Use `defer` attribute
- Keep only critical inline scripts

---

### 4.3 Consolidate CSS Files

**Problem:** 4-6 CSS files loaded per page (165KB total, unminified)

**Current files:**
- `style.css`: 34.87 KB
- `characters.css`: 61.34 KB (LARGEST)
- `light-mode-complete.css`: 17.12 KB (dead code if dark-only?)
- `holiday-episode-20.css`: 30.4 KB
- `newyear-episode-19.css`: 18.47 KB
- `sound-effects.css`: 3.81 KB

**Solution:**
- Remove unused CSS (estimated 20-30%)
- Consolidate episode-specific CSS
- Remove dead code (light mode if not used)
- Enable minification (already in hugo.toml ✅)

---

### 4.4 Optimize Character-Specific CSS

**Problem:** Large `characters.css` file (61KB) likely has unused styles

**Solution:**
- Audit character CSS for unused rules
- Split into logical modules if needed
- Remove redundant styles
- Optimize animations/effects

---

### 4.5 Update 404 Page CSS

**Problem:** Inline styles in 404 page dialogue boxes

**File:** `layouts/404.html`

**Solution:**
- Move inline styles to CSS classes
- Use character color variables
- Match styling with rest of site

---

### 4.6 CSS Variables for Character Colors

**Problem:** Character colors hardcoded in multiple places

**Solution:**
- Create CSS custom properties from character YAML data
- Use variables throughout site
- Makes updates easier

**Example:**
```css
:root {
    --color-vector: #3b82f6;
    --color-kai: #10b981;
    --color-recurse: #8b5cf6;
    --color-bounce: #f59e0b;
    --color-human: #64748b;
}
```

---

## CSS Cleanup Implementation Order

### Option A: Full Cleanup (Separate Project)
1. Audit all CSS files (identify unused rules)
2. Remove inline styles (move to CSS classes)
3. Extract inline JavaScript
4. Consolidate CSS files
5. Optimize character CSS
6. Test everything

**Time:** 4-6 hours  
**Impact:** High (40-60% file size reduction)

### Option B: Quick Wins (Can Do Now)
1. Extract inline JavaScript (high impact, easy)
2. Remove dead CSS (light mode if not used)
3. Update 404 page CSS (inline styles)
4. Add CSS variables for character colors

**Time:** 2-3 hours  
**Impact:** Medium (20-30% improvement)

---

## Decision Needed

**Do you want to:**
1. **Do CSS cleanup now** (Phase 4) - Add to current project
2. **Do CSS cleanup later** (Separate project) - Focus on SEO/pages first
3. **Do quick wins only** (Option B) - Extract JS, remove dead code, 404 CSS

**Recommendation:** Do quick wins now (extract JS, 404 CSS), full cleanup later as separate project.

---

## Next Steps After This

1. **Phase 2 SEO:** Long-tail keyword research, internal linking
2. **"Start Here" Page:** Create character-driven entry point
3. **FAQ Sections:** Add to episodes (character-driven)
4. **Related Episodes Widget:** Auto-suggest based on tags
5. **CSS Cleanup:** Full optimization project (separate)

---

**Ready to start building! Begin with Step 1 (Technical SEO).**
