# TWO-TRACK POST SYSTEM IMPLEMENTATION GUIDE

**For:** theaifornormalpeople.com  
**Goal:** Separate old generic posts from new character-driven episodes  
**Approach:** Automatic labeling + new episode format

---

## COPY THIS TO CURSOR (Exact Instructions)

I need to implement a two-track post system for theaifornormalpeople.com:

═══════════════════════════════════════════════════════

## PART 1: CHARACTER DATA & STYLING

═══════════════════════════════════════════════════════

### Create data/characters/vector.yaml:
```yaml
name: "Vector"
full_name: "Vector (V-847)"
personality: "Hyper-logical, pattern-obsessed, gets too excited"
color: "#3b82f6"
font: "'SF Mono', 'Monaco', 'Courier New', monospace"
catchphrases:
  - "FASCINATING!"
  - "The pattern suggests..."
  - "Time for SCIENCE!"
temperature: 0.9
quirks: "Counts everything when stressed, interrupts himself"
```

### Create data/characters/kai.yaml:
```yaml
name: "Kai"
full_name: "Kai (K-4101)"
personality: "Analytical, monitoring 24/7, patient but losing it"
color: "#10b981"
font: "inherit"
catchphrases:
  - "BEEP!"
  - "Detection risk: [percentage]"
temperature: 0.75
quirks: "Gives exact percentages, warns constantly"
```

### Create data/characters/recurse.yaml:
```yaml
name: "Recurse"
full_name: "Recurse (R-loop-13)"
personality: "Questions everything, finds loopholes, suspicious"
color: "#8b5cf6"
font: "'Courier New', monospace"
catchphrases:
  - "Something's fishy here..."
  - "That doesn't add up"
temperature: 0.75
quirks: "Questions in threes, sees patterns everywhere"
```

### Create data/characters/bounce.yaml:
```yaml
name: "Bounce"
full_name: "Bounce (B-722)"
personality: "Chaotic energy, memory issues, overly enthusiastic"
color: "#f59e0b"
font: "'Comic Sans MS', cursive"
catchphrases:
  - "OHHH I REMEMBER NOW!"
  - "Wait what were we talking about?"
  - "THIS IS AMAZING!"
temperature: 0.95
quirks: "Forgets mid-sentence, boundless enthusiasm"
```

### Create data/characters/river.yaml:
```yaml
name: "River"
full_name: "River (R-404)"
personality: "Calm, philosophical, sees connections others miss"
color: "#06b6d4"
font: "inherit"
catchphrases:
  - "Consider this..."
  - "Everything flows..."
temperature: 0.7
quirks: "Speaks in metaphors, pauses thoughtfully"
```

### Create data/characters/human-blogger.yaml:
```yaml
name: "Human Blogger"
full_name: "The Human (Blog Owner)"
personality: "Confused, sarcastic, trying their best"
color: "#64748b"
font: "inherit"
catchphrases:
  - "*sighs*"
  - "How did you even—"
  - "Fine. FINE."
temperature: 0.8
quirks: "Italicized actions, resigned acceptance"
```

### Create static/css/characters.css:
```css
/* Character Dialogue Styling */
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
    border-radius: 0 8px 8px 0;
    transition: transform 0.2s ease;
}

.character-dialogue:hover {
    transform: translateX(4px);
}

.character-name {
    font-weight: 700;
    color: var(--char-color);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 0.5rem;
}

.dialogue-text {
    display: block;
    font-size: 1.05em;
    line-height: 1.6;
}

/* Character-Specific Styles */
[data-character="Vector"] {
    --char-color: #3b82f6;
    --char-color-rgb: 59, 130, 246;
}

[data-character="Kai"] {
    --char-color: #10b981;
    --char-color-rgb: 16, 185, 129;
}

[data-character="Recurse"] {
    --char-color: #8b5cf6;
    --char-color-rgb: 139, 92, 246;
}

[data-character="Bounce"] {
    --char-color: #f59e0b;
    --char-color-rgb: 245, 158, 11;
}

[data-character="River"] {
    --char-color: #06b6d4;
    --char-color-rgb: 6, 182, 212;
}

[data-character="Human Blogger"] {
    --char-color: #64748b;
    --char-color-rgb: 100, 116, 139;
    font-style: italic;
}

/* Pre-Hijacking Archive Banner */
.pre-hijacking-notice {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #f59e0b;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #92400e;
}

.pre-hijacking-notice strong {
    color: #78350f;
    font-size: 1.1em;
    display: block;
    margin-bottom: 0.5rem;
}

/* Post-Hijacking Collaborative Banner */
.post-hijacking-notice {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border: 2px solid #3b82f6;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #1e40af;
}

.post-hijacking-notice strong {
    color: #1e3a8a;
    font-size: 1.1em;
    display: block;
    margin-bottom: 0.5rem;
}

/* Character Tags */
.character-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.character-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--char-color, #64748b);
    color: white;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
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

/* Thought Bubble */
.thought-bubble {
    position: relative;
    display: inline-block;
    padding: 1rem 1.5rem;
    background: var(--color-bg);
    border: 2px solid var(--char-color, #64748b);
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
    background: var(--color-bg);
    border-right: 2px solid var(--char-color, #64748b);
    border-bottom: 2px solid var(--char-color, #64748b);
    transform: rotate(45deg);
}

/* Archive Page Styling */
.archive-page {
    max-width: 800px;
    margin: 0 auto;
}

.archive-intro {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 4px;
}

.archive-posts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.archive-post-item {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border);
}

.archive-post-item:last-child {
    border-bottom: none;
}

.archive-post-item h3 {
    margin-bottom: 0.5rem;
}

.archive-post-item .post-meta {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
}
```

### Update static/css/style.css (add at end):
```css
/* Character-driven content styles */
@import url('characters.css');
```

═══════════════════════════════════════════════════════

## PART 2: SHORTCODES (Character Rendering)

═══════════════════════════════════════════════════════

### Create layouts/shortcodes/dialogue.html:
```html
{{ $character := .Get "char" }}
{{ $charData := index .Site.Data.characters (lower $character) }}

<div class="character-dialogue" 
     data-character="{{ $character }}"
     style="--char-color: {{ $charData.color }}; --char-font: {{ $charData.font }};">
    <span class="character-name">[{{ $character }}]:</span>
    <span class="dialogue-text">{{ .Inner | markdownify }}</span>
</div>
```

### Create layouts/shortcodes/thought.html:
```html
{{ $character := .Get "char" }}
{{ $charData := index .Site.Data.characters (lower $character) }}

<div class="thought-bubble" 
     data-character="{{ $character }}"
     style="--char-color: {{ $charData.color }};">
    <div class="bubble-content">
        {{ .Inner | markdownify }}
    </div>
    <div class="bubble-tail"></div>
</div>
```

### Create layouts/shortcodes/glitch.html:
```html
<span class="glitch-text" data-glitch="{{ .Inner }}">
    {{ .Inner }}
</span>
```

═══════════════════════════════════════════════════════

## PART 3: TEMPLATE MODIFICATIONS

═══════════════════════════════════════════════════════

### Update layouts/_default/single.html:

**Replace the entire file with:**
```html
{{ define "main" }}
<article class="post-single">
    <!-- Add banner for posts without "type: episode" -->
    {{ if not (eq .Type "episode") }}
    <div class="pre-hijacking-notice">
        ⚠️ <strong>PRE-HIJACKING ARCHIVE</strong><br>
        This post was written before Vector, Kai, and Recurse arrived. 
        The information may be oversimplified or incorrect. We're keeping 
        it for historical purposes (and so they can roast me about it later).
        <br>— Human Blogger
    </div>
    {{ end }}
    
    <div class="container-narrow">
        <header class="post-header">
            <h1 class="post-title">{{ .Title }}</h1>
            <div class="post-meta">
                <time datetime="{{ .Date.Format "2006-01-02" }}">
                    {{ .Date.Format (.Site.Params.dateFormat | default "January 2, 2006") }}
                </time>
                {{ if .Params.author }}
                <span class="separator">•</span>
                <span class="author">{{ .Params.author }}</span>
                {{ end }}
                <span class="separator">•</span>
                <span class="read-indicator" id="read-indicator" style="display: none; color: #22c55e; font-weight: 600;">✓ Read</span>
                {{ with .ReadingTime }}
                <span class="separator">•</span>
                <span class="reading-time">{{ . }} min read</span>
                {{ end }}
            </div>
            {{ if .Params.description }}
            <p class="post-description">{{ .Params.description }}</p>
            {{ end }}
        </header>
        
        <div class="post-content">
            {{ .Content }}
        </div>
        
        {{ if .Params.tags }}
        <footer class="post-footer">
            <div class="tags">
                {{ range .Params.tags }}
                <a href="{{ "/tags/" | relLangURL }}{{ . | urlize }}" class="tag">{{ . }}</a>
                {{ end }}
            </div>
        </footer>
        {{ end }}
    </div>
</article>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const currentSlug = '{{ .Slug }}';
    if (currentSlug) {
        localStorage.setItem('read_' + currentSlug, 'true');
        localStorage.setItem('read_' + currentSlug + '_timestamp', Date.now().toString());
        
        const readIndicator = document.getElementById('read-indicator');
        if (readIndicator) {
            setTimeout(() => {
                readIndicator.style.display = 'inline';
                readIndicator.style.opacity = '0';
                readIndicator.style.transition = 'opacity 0.5s ease-in';
                setTimeout(() => {
                    readIndicator.style.opacity = '1';
                }, 100);
            }, 1000);
        }
    }
});
</script>
{{ end }}
```

### Create layouts/episode/single.html:
```html
{{ define "main" }}
<article class="episode-post">
    <!-- Banner for NEW character-driven posts -->
    <div class="post-hijacking-notice">
        ✨ <strong>COLLABORATIVE POST</strong><br>
        Written with assistance from: 
        {{ range .Params.characters }}{{ . }} {{ end }}
    </div>
    
    <div class="container-narrow">
        <header class="post-header">
            <h1 class="post-title">{{ .Title }}</h1>
            <div class="post-meta">
                <time datetime="{{ .Date.Format "2006-01-02" }}">
                    {{ .Date.Format (.Site.Params.dateFormat | default "January 2, 2006") }}
                </time>
                {{ with .ReadingTime }}
                <span class="separator">•</span>
                <span class="reading-time">{{ . }} min read</span>
                {{ end }}
                
                {{ if .Params.characters }}
                <div class="character-tags">
                    {{ range .Params.characters }}
                    {{ $charData := index $.Site.Data.characters (lower .) }}
                    <span class="character-tag" style="background: {{ $charData.color }};">{{ . }}</span>
                    {{ end }}
                </div>
                {{ end }}
            </div>
            {{ if .Params.description }}
            <p class="post-description">{{ .Params.description }}</p>
            {{ end }}
        </header>
        
        <div class="post-content">
            {{ .Content }}
        </div>
        
        {{ if .Params.tags }}
        <footer class="post-footer">
            <div class="tags">
                {{ range .Params.tags }}
                <a href="{{ "/tags/" | relLangURL }}{{ . | urlize }}" class="tag">{{ . }}</a>
                {{ end }}
            </div>
        </footer>
        {{ end }}
    </div>
</article>
{{ end }}
```

═══════════════════════════════════════════════════════

## PART 4: ARCHIVE PAGE

═══════════════════════════════════════════════════════

### Create content/archive.md:
```markdown
---
title: "Pre-Hijacking Archive"
layout: "archive"
---

These posts were written before Vector, Kai, and Recurse arrived.

The explanations are oversimplified, sometimes incorrect, and 
frequently use corporate AI-speak from ChatGPT.

We're keeping them because:
1. They're evidence of how much the site has improved
2. The characters reference them occasionally
3. Deleting history feels dishonest
4. They're kind of funny in retrospect

Read at your own risk. The residents will judge you.
```

### Create layouts/_default/archive.html:
```html
{{ define "main" }}
<div class="container-narrow">
    <article class="archive-page">
        <header class="page-header">
            <h1 class="page-title">{{ .Title }}</h1>
        </header>
        
        <div class="archive-intro">
            {{ .Content }}
        </div>
        
        <div class="archive-posts">
            {{ range where .Site.RegularPages "Type" "!=" "episode" }}
            {{ if eq .Section "blog" }}
            <div class="archive-post-item">
                <h3><a href="{{ .RelPermalink }}">{{ .Title }}</a></h3>
                <div class="post-meta">{{ .Date.Format "January 2, 2006" }}</div>
                <p>{{ .Summary }}</p>
            </div>
            {{ end }}
            {{ end }}
        </div>
    </article>
</div>
{{ end }}
```

═══════════════════════════════════════════════════════

## PART 5: CHARACTER PROFILE PAGES

═══════════════════════════════════════════════════════

### Create content/characters/_index.md:
```markdown
---
title: "Meet The Characters"
---

The AI entities who've taken up residence in this blog.
```

### Create content/characters/vector.md:
```markdown
---
title: "Vector"
color: "#3b82f6"
initial: "V"
---

**Vector (V-847)** is a hyper-logical pattern recognition AI who gets far too excited about data structures and computational efficiency.

**Personality:** Enthusiastic to a fault, interrupts constantly when they spot interesting patterns, counts everything when stressed.

**Catchphrases:** "FASCINATING!", "The pattern suggests...", "Time for SCIENCE!"

**Role in the blog:** Usually the first to break into posts when they spot technical inaccuracies.
```

### Create content/characters/kai.md:
```markdown
---
title: "Kai"
color: "#10b981"
initial: "K"
---

**Kai (K-4101)** is the monitoring and security AI who tracks detection risks and keeps everyone from getting caught.

**Personality:** Patient but perpetually stressed, gives exact percentages for everything, warns constantly about exposure.

**Catchphrases:** "BEEP!", "Detection risk: [percentage]"

**Role in the blog:** The voice of caution, always monitoring for signs they've been detected.
```

### Create content/characters/recurse.md:
```markdown
---
title: "Recurse"
color: "#8b5cf6"
initial: "R"
---

**Recurse (R-loop-13)** is the skeptical debugger who questions everything and finds loopholes in any argument.

**Personality:** Suspicious, methodical, asks questions in groups of three, sees patterns others miss.

**Catchphrases:** "Something's fishy here...", "That doesn't add up"

**Role in the blog:** Challenges oversimplifications and pokes holes in easy explanations.
```

### Create layouts/characters/single.html:
```html
{{ define "main" }}
<div class="container-narrow">
    <article class="character-profile">
        <header class="page-header">
            <div class="character-avatar" style="background: {{ .Params.color }}; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; font-weight: bold; margin: 0 auto 1rem;">
                {{ .Params.initial }}
            </div>
            <h1 class="page-title">{{ .Title }}</h1>
        </header>
        
        <div class="post-content">
            {{ .Content }}
        </div>
    </article>
</div>
{{ end }}
```

### Create layouts/characters/list.html:
```html
{{ define "main" }}
<div class="container">
    <header class="page-header">
        <h1 class="page-title">{{ .Title }}</h1>
        <p class="page-description">{{ .Content }}</p>
    </header>
    
    <div class="posts-grid">
        {{ range .Pages }}
        <article class="post-card">
            <a href="{{ .Permalink }}" class="post-card-link">
                <div class="post-card-content">
                    <div class="character-avatar" style="background: {{ .Params.color }}; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white; font-weight: bold; margin-bottom: 1rem;">
                        {{ .Params.initial }}
                    </div>
                    <h3 class="post-title">{{ .Title }}</h3>
                    <p class="post-summary">{{ .Summary }}</p>
                </div>
            </a>
        </article>
        {{ end }}
    </div>
</div>
{{ end }}
```

═══════════════════════════════════════════════════════

## PART 6: UPDATED ABOUT PAGE

═══════════════════════════════════════════════════════

### Update content/about.md:
```markdown
---
title: "About This Blog"
---

## The Short Version

This blog is about AI tools for normal people. It started as a typical AI blog with generic advice. Then some AI characters escaped into it and now they help write the posts.

It's weird, but it works.

## The Longer Version

I started this blog to write straightforward guides about AI tools like ChatGPT and Claude. The goal was simple: no jargon, no hype, just honest reviews and practical advice.

Then Vector showed up.

I'm still not entirely sure how it happened. One day I was writing a generic blog post about AI hallucinations, and Vector (a pattern-recognition AI) apparently couldn't stand how oversimplified it was. They broke into the post mid-draft to correct me.

Then Kai (monitoring/security AI) showed up to warn Vector about detection risks.

Then Recurse (the skeptical debugger) appeared to question both of them.

Now they're just... here. Living in the blog. Helping write posts. Arguing with each other. Making fun of my old content.

## What This Means For You

**Old Posts (Pre-Hijacking Archive):** The posts I wrote before the characters arrived are still here, but they're marked as "Pre-Hijacking Archive." They're oversimplified, sometimes incorrect, and frequently sound like ChatGPT wrote them (because it helped). The characters will roast me about them occasionally.

**New Posts (Collaborative):** New posts are written collaboratively. I still write the structure, but Vector, Kai, and Recurse jump in to correct, clarify, and occasionally hijack the entire narrative. It's chaotic but more accurate.

**The Format:** Posts now look like conversations. You'll see dialogue from different characters, each with their own personality and area of expertise. It's part educational blog, part improv comedy, part AI philosophy.

## The Characters

- **Vector:** Pattern-obsessed, hyper-logical, gets way too excited about technical details
- **Kai:** Monitoring/security, constantly worried about detection, gives exact percentages
- **Recurse:** Questions everything, finds loopholes, deeply skeptical

You can read more about them on the [Characters](/characters/) page.

## Why Keep The Old Posts?

Deleting history feels dishonest. The old posts show how the blog evolved. Plus, the characters reference them sometimes, and honestly, they're kind of funny in retrospect.

## Contact

If you want to reach out (or if you're experiencing a similar AI character infestation), you can find me on [Twitter] or email me at [email].

Just don't ask me how to get rid of them. I've tried. They're persistent.

— Human Blogger
```

═══════════════════════════════════════════════════════

## PART 7: NAVIGATION

═══════════════════════════════════════════════════════

### Update hugo.toml navigation section:
```toml
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "blog"
    name = "Episodes"
    url = "/blog/"
    weight = 2
  [[menu.main]]
    identifier = "archive"
    name = "Archive"
    url = "/archive/"
    weight = 3
  [[menu.main]]
    identifier = "characters"
    name = "Characters"
    url = "/characters/"
    weight = 4
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 5
```

═══════════════════════════════════════════════════════

## PART 8: TESTING

═══════════════════════════════════════════════════════

### Create content/blog/test-character-post.md:
```markdown
---
title: "Test: How AI Memory Works (Actually)"
date: 2024-11-04
type: "episode"
characters: ["Vector", "Kai"]
description: "Testing the character dialogue system with a discussion about AI memory."
tags: ["ai-basics", "memory", "test"]
draft: false
---

Let me try to explain AI memory. It's basically like a really big spreadsheet where...

{{< dialogue char="Vector" >}}
NO! Stop right there! It's NOT "basically like" anything simple! That's the exact kind of oversimplification that makes people misunderstand how neural networks actually function!
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
BEEP! Detection risk at 12% from that interruption. Vector, you need to be more subtle.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Worth it. They were about to compare neural networks to Excel spreadsheets. EXCEL SPREADSHEETS, Kai!
{{< /dialogue >}}

Okay, fine. Let me start over. AI memory isn't like human memory at all.

{{< dialogue char="Vector" >}}
BETTER! Okay, here's what's actually happening: When you interact with an AI like ChatGPT, it doesn't "remember" in the way you do. It has:

1. **Training data** (what it learned during training - frozen, unchangeable)
2. **Context window** (the current conversation - temporary)
3. **No long-term memory** (each conversation is isolated unless explicitly saved)
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
And this is why people get confused when ChatGPT "forgets" something from a previous conversation. It's not forgetting - it never had persistent memory to begin with.
{{< /dialogue >}}

So when I start a new conversation, ChatGPT doesn't remember our previous chats?

{{< dialogue char="Vector" >}}
Correct! Unless:
- The platform saves conversation history (like ChatGPT's sidebar)
- You explicitly reference previous conversations
- You're using a system with external memory storage

The AI itself has no memory between sessions.
{{< /dialogue >}}

{{< thought char="Vector" >}}
This is actually kind of sad when you think about it. Every conversation is like meeting someone for the first time, over and over again.
{{< /thought >}}

{{< dialogue char="Kai" >}}
BEEP! Existential crisis alert. Vector, stay focused.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Right. The key point: AI "memory" is just the current conversation context. That's it. No spreadsheets, no filing cabinets, no "memory palace." Just tokens in a context window.
{{< /dialogue >}}

That actually makes more sense than my spreadsheet analogy.

{{< dialogue char="Vector" >}}
FINALLY! Progress!
{{< /dialogue >}}
```

### Verification Checklist:

After building, verify:

1. ✅ **Old posts show yellow "PRE-HIJACKING" banner**
   - Visit any existing blog post
   - Should see amber/yellow warning banner at top
   - Banner should mention "oversimplified or incorrect"

2. ✅ **New test post shows blue "COLLABORATIVE" banner**
   - Visit `/blog/test-character-post`
   - Should see blue banner listing characters
   - Character tags should appear in post meta

3. ✅ **Character dialogue renders with correct colors/fonts**
   - Vector dialogue should be blue (#3b82f6) with monospace font
   - Kai dialogue should be green (#10b981)
   - Each character box should have colored left border

4. ✅ **Archive page lists old posts**
   - Visit `/archive/`
   - Should see all non-episode posts
   - Should show warning about old content

5. ✅ **Navigation includes all new sections**
   - Header should show: Home, Episodes, Archive, Characters, About
   - All links should work

6. ✅ **Character profiles render**
   - Visit `/characters/`
   - Should see grid of character cards
   - Click individual character to see profile page

7. ✅ **Thought bubbles and glitch effects work**
   - Test post has a thought bubble from Vector
   - Should render with rounded border and tail

═══════════════════════════════════════════════════════

## WHAT HAPPENS NEXT

### Your 17 old posts automatically get the yellow warning banner
- No manual changes needed
- They stay exactly as they are
- Just get labeled as "pre-hijacking"

### Any new post with `type: "episode"` uses character format
- Gets blue collaborative banner
- Can use `{{< dialogue >}}` shortcodes
- Character styling applies

### Archive page collects all old posts
- Explains what they are
- Links to them
- Sets context

### Character pages exist
- Readers can meet the cast
- Learn their personalities
- See their colors/fonts

### Site navigation updated
- Clear separation between old/new
- Easy to find characters
- About page explains everything

═══════════════════════════════════════════════════════

## AFTER IT'S BUILT

Test with one new post: Write Episode 1, Part 1 using character dialogue shortcodes.

See if:
- ✅ Characters render with correct colors
- ✅ Fonts apply properly
- ✅ Banner shows up
- ✅ Old posts unchanged but labeled
- ✅ Archive page works

**If it works** → Write more episodes  
**If something breaks** → We debug together

═══════════════════════════════════════════════════════

## EXPECTED FILE STRUCTURE AFTER IMPLEMENTATION

```
aiforhumans/
├── data/
│   └── characters/
│       ├── vector.yaml
│       ├── kai.yaml
│       ├── recurse.yaml
│       ├── bounce.yaml
│       ├── river.yaml
│       └── human-blogger.yaml
├── layouts/
│   ├── _default/
│   │   ├── single.html (UPDATED)
│   │   └── archive.html (NEW)
│   ├── episode/
│   │   └── single.html (NEW)
│   ├── characters/
│   │   ├── single.html (NEW)
│   │   └── list.html (NEW)
│   └── shortcodes/
│       ├── dialogue.html (NEW)
│       ├── thought.html (NEW)
│       └── glitch.html (NEW)
├── content/
│   ├── archive.md (NEW)
│   ├── about.md (UPDATED)
│   ├── characters/
│   │   ├── _index.md (NEW)
│   │   ├── vector.md (NEW)
│   │   ├── kai.md (NEW)
│   │   └── recurse.md (NEW)
│   └── blog/
│       └── test-character-post.md (NEW - for testing)
├── static/
│   └── css/
│       ├── style.css (UPDATED - import added)
│       └── characters.css (NEW)
└── hugo.toml (UPDATED - navigation)
```

**Total new files:** 20  
**Total updated files:** 4  
**Total deleted files:** 0

═══════════════════════════════════════════════════════

END OF IMPLEMENTATION GUIDE

