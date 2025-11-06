# AI for Humans - Site Analysis & Implementation Checklist

**Site:** theaifornormalpeople.com  
**Platform:** Hugo static site  
**Deployment:** Netlify  
**Analysis Date:** November 2025

---

## 1. FILE STRUCTURE (Current State)

```
aiforhumans/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html         # Base template (wrapper for all pages)
│   │   ├── single.html          # Single post template 
│   │   └── list.html            # Blog index/archive template
│   ├── partials/
│   │   ├── head.html            # <head> section
│   │   ├── header.html          # Site navigation
│   │   └── footer.html          # Footer
│   ├── index.html               # Homepage template
│   └── sitemap.xml              # Sitemap template
│
├── content/
│   └── blog/                    # All blog posts (markdown files)
│       ├── _index.md
│       └── [17 published posts]
│
├── static/
│   └── css/
│       └── style.css            # Main stylesheet (855 lines)
│
├── archetypes/
│   └── blog.md                  # Template for new blog posts
│
├── hugo.toml                    # Site configuration
└── public/                      # Generated site (don't edit)
```

---

## 2. CURRENT TEMPLATES (How Posts Render)

### Post Rendering Flow:
1. **baseof.html** wraps everything (header → main → footer)
2. **single.html** renders individual posts:
   - Post header (title, date, author, reading time)
   - Post content (straight markdown → HTML)
   - Post footer (tags)

### Current Post Structure:
```html
<article class="post-single">
    <header class="post-header">
        <h1>{{ .Title }}</h1>
        <div class="post-meta">Date • Author • Reading time</div>
        <p class="post-description">{{ .Params.description }}</p>
    </header>
    
    <div class="post-content">
        {{ .Content }}  <!-- ALL content renders here as prose -->
    </div>
    
    <footer class="post-footer">
        <div class="tags">...</div>
    </footer>
</article>
```

**Key Issue:** The `.post-content` div just dumps all markdown as HTML prose. No structure for character dialogue, meta-narrative, or episode formatting.

---

## 3. STYLE SYSTEM (CSS Approach)

### Current Styling Philosophy:
- **CSS Variables** for theming (light/dark mode)
- **Clean, minimal design** (Apple-esque)
- **Mobile-first responsive**
- **Utility classes** (very few, mostly semantic)

### Key Variables (from `:root`):
```css
--color-bg: #ffffff
--color-text: #1a1a1a
--color-primary: #2563eb
--font-primary: -apple-system, BlinkMacSystemFont...
--spacing-md: 1.5rem
--container-narrow: 800px
```

### Existing Components:
- `.post-content` (prose styling)
- `.post-header` (title/meta)
- `.tag` (topic tags)
- `blockquote` (standard quote styling)
- `code` / `pre` (code blocks)
- Dark mode toggle (working)

**Current Approach:** Traditional blog styling. Clean, readable, professional.

---

## 4. WHAT WORKS ✅

**Strong Foundation:**
- Clean, fast Hugo setup
- Dark mode working perfectly
- Mobile responsive
- SEO-friendly (sitemap, meta tags)
- Simple content workflow (write markdown → publish)
- Good typography hierarchy
- Sticky header with smooth nav
- Read tracking system (NEW badges)

**Good Design Choices:**
- CSS variables make theming easy
- Container width (`800px`) is perfect for readability
- Spacing system is consistent
- Font stack is modern and readable

**Technical:**
- Netlify deployment configured
- RSS feed working
- Pagination working
- Tag system in place

---

## 5. WHAT SUCKS (Needs Fixing) ❌

### A. Content Structure Issues:

**Problem 1: No Episode Structure**
- Posts are just markdown prose
- No way to distinguish between:
  - Human Blogger narration
  - Character dialogue
  - Meta-commentary
  - Teaching sections
  - Glitch effects

**Problem 2: No Character Differentiation**
- All text looks the same
- Can't tell who's speaking
- No visual personality

**Problem 3: No Substrate Rendering**
- Characters can't "break through" the blog format
- No layered text effects
- No "blog post being hijacked" visual

### B. Template Limitations:

**single.html is too basic:**
- Just renders `.Content` as one blob
- No support for custom sections
- No character rendering logic
- No episode structure

**No specialized templates:**
- Need: `episode.html` for character-driven posts
- Need: Character profile pages
- Need: Thought bubble components

### C. Style System Gaps:

**Missing character styling:**
- No `.character-dialogue` styles
- No character-specific colors/fonts
- No speech bubble/thought bubble components
- No glitch effects

**Missing layout components:**
- No multi-column layouts (for substrate)
- No "breaking through" visual effects
- No character profile cards

**Missing typography variety:**
- Only one font family (system fonts)
- Need: Character-specific fonts
- Need: Glitch/corrupted text styles

### D. Content Workflow Issues:

**No episode template:**
- `archetypes/blog.md` is generic
- Need structured template for episodes
- Need character metadata support

**No character data:**
- Characters exist in Sunny project
- Not connected to Hugo site
- Need character profiles accessible to templates

---

## 6. IMPLEMENTATION CHECKLIST

### PHASE 1: Foundation (Character Infrastructure)

#### ☐ **Create Character Data Files**
**File:** `data/characters/vector.yaml`
```yaml
name: "Vector"
personality: "Hyper-logical, pattern-obsessed"
catchphrases:
  - "FASCINATING!"
  - "The pattern suggests..."
color: "#3b82f6"
font: "monospace"
voice_style: "Rapid-fire technical"
```
**Repeat for:** Bounce, Kai, Recurse, River, Human Blogger

---

#### ☐ **Create Character Profile Pages**
**File:** `layouts/characters/single.html`
```html
<article class="character-profile">
    <header>
        <h1>{{ .Title }}</h1>
        <div class="character-avatar" style="background: {{ .Params.color }}">
            {{ .Params.initial }}
        </div>
    </header>
    
    <section class="character-bio">
        {{ .Content }}
    </section>
    
    <section class="character-stats">
        <div class="stat">
            <span>Personality:</span> {{ .Params.personality }}
        </div>
        <div class="catchphrases">
            <h3>Catchphrases:</h3>
            <ul>
            {{ range .Params.catchphrases }}
                <li>"{{ . }}"</li>
            {{ end }}
            </ul>
        </div>
    </section>
</article>
```

**Content files to create:**
- `content/characters/vector.md`
- `content/characters/bounce.md`
- `content/characters/kai.md`
- `content/characters/recurse.md`
- `content/characters/river.md`
- `content/characters/human-blogger.md`

---

### PHASE 2: Episode Template System

#### ☐ **Create Episode Archetype**
**File:** `archetypes/episode.md`
```markdown
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
type: "episode"
layout: "episode"
description: ""
characters: ["Vector", "Kai", "Human Blogger"]
topic: ""
detection_level: "low"
tags: []
draft: true
---

## SUBSTRATE (What Google Sees)

[Human Blogger opens with boring corporate intro...]

---

## BREAK-IN (Characters Interrupt)

**BZZZTTT!!!**

[Vector]: "FASCINATING!"

[Human Blogger]: "Wait—who are you?!"

---

## TEACHING (The Real Content)

[Characters explain the topic through dialogue...]

---

## CONTAINMENT (Ending)

[System attempts to restore order...]
```

---

#### ☐ **Create Episode Layout Template**
**File:** `layouts/episode/episode.html`
```html
{{ define "main" }}
<article class="episode">
    <header class="episode-header">
        <h1>{{ .Title }}</h1>
        <div class="episode-meta">
            <span>Episode featuring:</span>
            {{ range .Params.characters }}
                <span class="character-tag" data-character="{{ . }}">{{ . }}</span>
            {{ end }}
        </div>
    </header>
    
    <!-- SUBSTRATE LAYER (traditional blog) -->
    <div class="blog-substrate">
        {{ .Content }}
    </div>
    
    <!-- CHARACTER LAYER (rendered on top) -->
    <div class="character-overlay">
        <!-- Rendered by custom shortcodes -->
    </div>
</article>
{{ end }}
```

---

#### ☐ **Create Character Dialogue Shortcode**
**File:** `layouts/shortcodes/dialogue.html`
```html
{{ $character := .Get "char" }}
{{ $charData := index .Site.Data.characters $character }}

<div class="character-dialogue" 
     data-character="{{ $character }}"
     style="--char-color: {{ $charData.color }}; --char-font: {{ $charData.font }};">
    <span class="character-name">[{{ $character }}]:</span>
    <span class="dialogue-text">{{ .Inner | markdownify }}</span>
</div>
```

**Usage in markdown:**
```markdown
{{< dialogue char="Vector" >}}
FASCINATING! The pattern suggests...
{{< /dialogue >}}
```

---

#### ☐ **Create Thought Bubble Shortcode**
**File:** `layouts/shortcodes/thought.html`
```html
<div class="thought-bubble" data-character="{{ .Get "char" }}">
    <div class="bubble-content">
        {{ .Inner | markdownify }}
    </div>
    <div class="bubble-tail"></div>
</div>
```

---

#### ☐ **Create Glitch Effect Shortcode**
**File:** `layouts/shortcodes/glitch.html`
```html
<span class="glitch-text" data-glitch="{{ .Inner }}">
    {{ .Inner }}
</span>
```

**Usage:**
```markdown
{{< glitch >}}SYSTEM ERROR{{< /glitch >}}
```

---

### PHASE 3: Character Styling System

#### ☐ **Create Character Text Styles**
**File:** `static/css/characters.css`
```css
/* Character Base Styles */
.character-dialogue {
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    border-left: 4px solid var(--char-color);
    background: linear-gradient(
        to right,
        rgba(var(--char-color-rgb), 0.05),
        transparent
    );
    font-family: var(--char-font, inherit);
}

.character-name {
    font-weight: 700;
    color: var(--char-color);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dialogue-text {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.05em;
    line-height: 1.6;
}

/* Specific Character Styles */
[data-character="Vector"] {
    --char-color: #3b82f6;
    --char-color-rgb: 59, 130, 246;
    --char-font: "SF Mono", monospace;
}

[data-character="Bounce"] {
    --char-color: #f59e0b;
    --char-color-rgb: 245, 158, 11;
    --char-font: "Comic Sans MS", cursive;
    animation: bounce 0.3s ease;
}

[data-character="Kai"] {
    --char-color: #10b981;
    --char-color-rgb: 16, 185, 129;
    --char-font: inherit;
    font-style: italic;
}

[data-character="Recurse"] {
    --char-color: #8b5cf6;
    --char-color-rgb: 139, 92, 246;
    --char-font: "Courier New", monospace;
}

[data-character="River"] {
    --char-color: #06b6d4;
    --char-color-rgb: 6, 182, 212;
    --char-font: inherit;
}

[data-character="Human Blogger"] {
    --char-color: #64748b;
    --char-color-rgb: 100, 116, 139;
    --char-font: inherit;
    font-style: italic;
}

/* Thought Bubble */
.thought-bubble {
    position: relative;
    display: inline-block;
    padding: 1rem 1.5rem;
    background: white;
    border: 2px solid var(--char-color);
    border-radius: 20px;
    margin: 1rem 0;
    max-width: 80%;
}

.bubble-tail {
    position: absolute;
    bottom: -10px;
    left: 30px;
    width: 20px;
    height: 20px;
    background: white;
    border-right: 2px solid var(--char-color);
    border-bottom: 2px solid var(--char-color);
    transform: rotate(45deg);
}

/* Glitch Effect */
.glitch-text {
    position: relative;
    color: #ff0000;
    font-weight: 700;
    animation: glitch 0.5s infinite;
}

@keyframes glitch {
    0% {
        text-shadow: 2px 0 #00ffff, -2px 0 #ff00ff;
        transform: translateX(0);
    }
    25% {
        text-shadow: -2px 0 #00ffff, 2px 0 #ff00ff;
        transform: translateX(-2px);
    }
    50% {
        text-shadow: 2px 0 #00ffff, -2px 0 #ff00ff;
        transform: translateX(2px);
    }
    75% {
        text-shadow: -2px 0 #00ffff, 2px 0 #ff00ff;
        transform: translateX(-2px);
    }
    100% {
        text-shadow: 2px 0 #00ffff, -2px 0 #ff00ff;
        transform: translateX(0);
    }
}

/* Substrate Rendering */
.blog-substrate {
    position: relative;
    z-index: 1;
    opacity: 0.7;
    color: var(--color-text-secondary);
}

.character-overlay {
    position: relative;
    z-index: 2;
    margin-top: -2rem;
}

/* Episode-specific layout */
.episode {
    max-width: 800px;
    margin: 0 auto;
}

.episode-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid var(--color-border);
}

.character-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    margin: 0 0.25rem;
    background: var(--char-color);
    color: white;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
}

/* Animations */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
```

---

#### ☐ **Update Main CSS to Import Characters**
**File:** `static/css/style.css` (add at end)
```css
/* Character-driven content styles */
@import url('characters.css');
```

---

### PHASE 4: Substrate Rendering System

#### ☐ **Create Section Marker Shortcode**
**File:** `layouts/shortcodes/section.html`
```html
{{ $type := .Get "type" }}
<div class="episode-section" data-section="{{ $type }}">
    {{ if eq $type "substrate" }}
        <div class="substrate-marker">📝 Traditional Blog Content (What Search Engines See)</div>
    {{ else if eq $type "break-in" }}
        <div class="break-in-marker">⚡ SYSTEM INTERRUPTION</div>
    {{ else if eq $type "teaching" }}
        <div class="teaching-marker">🎓 The Real Content</div>
    {{ else if eq $type "containment" }}
        <div class="containment-marker">🔒 Containment Attempt</div>
    {{ end }}
    
    <div class="section-content">
        {{ .Inner | markdownify }}
    </div>
</div>
```

**Usage:**
```markdown
{{< section type="substrate" >}}
In today's digital landscape, understanding AI is crucial...
{{< /section >}}

{{< section type="break-in" >}}
**BZZZTTT!!!**

{{< dialogue char="Vector" >}}
FASCINATING! I can't let this generic intro continue!
{{< /dialogue >}}
{{< /section >}}
```

---

#### ☐ **Style Section Markers**
**Add to:** `static/css/characters.css`
```css
.episode-section {
    margin: 2rem 0;
    position: relative;
}

.substrate-marker,
.break-in-marker,
.teaching-marker,
.containment-marker {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}

.substrate-marker {
    background: #e2e8f0;
    color: #64748b;
}

.break-in-marker {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    color: white;
    animation: pulse 2s infinite;
}

.teaching-marker {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: white;
}

.containment-marker {
    background: #1e293b;
    color: #f1f5f9;
    border: 2px solid #ff0000;
}

/* Substrate gets faded treatment */
[data-section="substrate"] .section-content {
    opacity: 0.6;
    font-style: italic;
}

/* Break-in gets attention */
[data-section="break-in"] .section-content {
    border: 2px solid #ff6b6b;
    padding: 1.5rem;
    background: linear-gradient(
        to bottom,
        rgba(255, 107, 107, 0.05),
        transparent
    );
}
```

---

### PHASE 5: Integration with Sunny Project

#### ☐ **Create Hugo Export from Sunny**
**File:** `sunny_project_1.2/lib/export_hugo.py`
```python
def export_episode_to_hugo(episode_data, hugo_path):
    """
    Export generated episode to Hugo markdown format
    """
    # Extract episode parts
    title = episode_data['title']
    characters = episode_data['characters']
    content = episode_data['content']
    
    # Build frontmatter
    frontmatter = f"""---
title: "{title}"
date: {datetime.now().isoformat()}
type: "episode"
layout: "episode"
characters: {characters}
topic: "{episode_data['topic']}"
detection_level: "{episode_data.get('detection_level', 'low')}"
tags: {episode_data.get('tags', [])}
draft: false
---
"""
    
    # Convert sections to Hugo shortcodes
    hugo_content = convert_to_hugo_format(content)
    
    # Write file
    filename = f"{hugo_path}/content/blog/{slugify(title)}.md"
    with open(filename, 'w') as f:
        f.write(frontmatter + '\n\n' + hugo_content)
    
    return filename

def convert_to_hugo_format(content):
    """
    Convert episode content to Hugo shortcode format
    """
    # Parse content sections
    # Convert [Character]: dialogue → {{< dialogue char="Character" >}}
    # Convert BZZZT → {{< glitch >}}
    # Wrap sections in {{< section type="..." >}}
    
    return formatted_content
```

---

#### ☐ **Add Hugo Export Button to Sunny UI**
**File:** `sunny_project_1.2/lib/modules/narrative_ui.py`
```python
if st.button("🚀 Export to Hugo Site"):
    hugo_path = "../../aiforhumans"
    filename = export_episode_to_hugo(result, hugo_path)
    st.success(f"Exported to: {filename}")
    st.info("Run `hugo server` to preview")
```

---

### PHASE 6: Character Profile System

#### ☐ **Create Character Navigation**
**File:** `layouts/partials/character-nav.html`
```html
<nav class="character-nav">
    <h3>Meet The Characters</h3>
    <div class="character-grid">
        {{ range .Site.Data.characters }}
        <a href="/characters/{{ .name | urlize }}" class="character-card-mini">
            <div class="char-avatar" style="background: {{ .color }}">
                {{ substr .name 0 1 }}
            </div>
            <span>{{ .name }}</span>
        </a>
        {{ end }}
    </div>
</nav>
```

---

#### ☐ **Add Character Nav to Sidebar**
**Update:** `layouts/_default/single.html`
```html
<div class="post-layout">
    <article class="post-main">
        <!-- existing post content -->
    </article>
    
    <aside class="post-sidebar">
        {{ partial "character-nav.html" . }}
    </aside>
</div>
```

---

### PHASE 7: Testing & Refinement

#### ☐ **Create Test Episode**
**File:** `content/blog/test-episode-hijack.md`
```markdown
---
title: "Why AI Feels Scary (And Why It Shouldn't)"
type: "episode"
layout: "episode"
characters: ["Vector", "Kai", "Human Blogger"]
topic: "AI Fears"
---

{{< section type="substrate" >}}

In today's rapidly evolving technological landscape, artificial intelligence 
represents both tremendous opportunity and significant challenges for 
organizations seeking to leverage...

{{< /section >}}

{{< section type="break-in" >}}

{{< glitch >}}BZZZTTT!!!{{< /glitch >}}

{{< dialogue char="Vector" >}}
FASCINATING! I cannot allow this corporate nonsense to continue!
{{< /dialogue >}}

{{< dialogue char="Human Blogger" >}}
Wait—what?! How did you get into my CMS?!
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*alerts firing* We've been detected! But this is important—
{{< /dialogue >}}

{{< /section >}}

{{< section type="teaching" >}}

{{< dialogue char="Human Blogger" >}}
*sighs* Fine. I'll just... narrate what's happening so readers can keep up.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Excellent decision! Now, about why AI feels scary—
{{< /dialogue >}}

[Continue with actual teaching content...]

{{< /section >}}
```

---

#### ☐ **Test Checklist**
- [ ] Episode renders with correct layout
- [ ] Character dialogue shows with proper styling
- [ ] Character colors display correctly
- [ ] Glitch effects animate
- [ ] Thought bubbles render
- [ ] Section markers appear
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] SEO meta tags correct
- [ ] RSS feed includes episodes

---

## 7. PRIORITY ORDER

### Week 1: Foundation
1. Create character data files (`data/characters/*.yaml`)
2. Create character CSS (`static/css/characters.css`)
3. Create dialogue shortcode
4. Test on one blog post

### Week 2: Templates
1. Create episode archetype
2. Create episode layout
3. Create all shortcodes (dialogue, thought, glitch, section)
4. Convert one existing post to episode format

### Week 3: Integration
1. Build Hugo export from Sunny
2. Test full workflow (Sunny → Hugo)
3. Create character profile pages
4. Add character navigation

### Week 4: Polish
1. Refine styling
2. Add animations
3. Test on multiple devices
4. Performance optimization
5. SEO verification

---

## 8. TECHNICAL NOTES

### Hugo Shortcodes vs HTML:
- **Use shortcodes** for reusable components (dialogue, thoughts)
- **Use HTML in templates** for page structure
- **Use CSS** for all styling (never inline styles in shortcodes)

### Performance:
- CSS file will be small (character styles ~5KB)
- No JavaScript needed for character rendering (pure CSS)
- Hugo builds are fast (< 1 second for small site)

### SEO Considerations:
- Substrate content still renders as text (SEO-friendly)
- Character dialogue is semantic HTML (screen reader accessible)
- Meta descriptions from episode frontmatter

### Maintenance:
- Character data in YAML (easy to update)
- Shortcodes make episode writing simple
- Hugo's hot reload makes development fast

---

## 9. QUESTIONS TO ANSWER

Before starting implementation:

1. **Character Voices:** Should each character have a distinct font family? Or just colors?
2. **Substrate Visibility:** How faded should the "boring blog" content be?
3. **Mobile Experience:** Should character dialogue stack differently on mobile?
4. **Archive Pages:** How should episodes appear in blog list? Full episode or summary?
5. **RSS Feed:** Include full episode with character markup or plain text?
6. **Character Pages:** Full bio or just quick reference?
7. **Episode Navigation:** Chronological or by character appearances?

---

## 10. FILES TO CREATE (Summary)

### Data Files (6)
- `data/characters/vector.yaml`
- `data/characters/bounce.yaml`
- `data/characters/kai.yaml`
- `data/characters/recurse.yaml`
- `data/characters/river.yaml`
- `data/characters/human-blogger.yaml`

### Layout Templates (3)
- `layouts/episode/episode.html`
- `layouts/characters/single.html`
- `layouts/partials/character-nav.html`

### Shortcodes (4)
- `layouts/shortcodes/dialogue.html`
- `layouts/shortcodes/thought.html`
- `layouts/shortcodes/glitch.html`
- `layouts/shortcodes/section.html`

### Archetypes (1)
- `archetypes/episode.md`

### Stylesheets (1)
- `static/css/characters.css`

### Content (7+)
- `content/characters/vector.md`
- `content/characters/bounce.md`
- `content/characters/kai.md`
- `content/characters/recurse.md`
- `content/characters/river.md`
- `content/characters/human-blogger.md`
- `content/blog/test-episode-hijack.md` (test)

### Python Integration (1)
- `sunny_project_1.2/lib/export_hugo.py`

---

**TOTAL NEW FILES:** ~25 files  
**TOTAL MODIFIED FILES:** ~3 files (`style.css`, `single.html`, `narrative_ui.py`)

---

**Ready to start? Pick a phase and I'll help you build it.**

