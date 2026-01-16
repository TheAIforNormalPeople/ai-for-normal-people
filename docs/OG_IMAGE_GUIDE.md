# OG Image Guide - Best Practices & Tools

**Date:** 2026-01-20  
**Purpose:** Create better OG images and understand what's needed for SEO

---

## Current Status

**Current OG Image:**
- Location: `static/images/og-image.jpg`
- Used as: Default fallback for all pages
- Status: Needs improvement

**What We Have:**
- ✅ Default OG image configured
- ✅ Per-post image support (via `image` frontmatter)
- ✅ Twitter card support
- ⚠️ Missing: `og:image:width`, `og:image:height`, `og:image:alt`
- ⚠️ Missing: Per-episode OG images

---

## OG Image Best Practices (2025)

### Dimensions & Format
- **Size:** 1200×630 pixels (1.91:1 ratio)
- **Format:** JPG (for photos) or PNG (for graphics)
- **File Size:** Keep under 2-5 MB (aim for < 500KB)
- **Quality:** 70-80% JPG compression

### Design Guidelines
- **Safe Area:** Keep important text/logo in center 1080×540 area (avoids cropping)
- **Text Size:** Minimum 72-96px at 1200px width
- **Text Length:** 8-12 words maximum
- **Contrast:** High contrast (dark text on light, or light on dark)
- **Branding:** Consistent background, logo, color scheme
- **No Dates:** Don't include dates in the image (they become outdated)

### What Makes a Good OG Image?
1. **Readable at Thumbnail Size** - Text must be large and clear
2. **Brand Consistent** - Matches your site's visual identity
3. **Episode-Specific** - Shows what the episode is about
4. **Eye-Catching** - Stands out in social feeds
5. **Simple** - Not cluttered, easy to understand quickly

---

## Tools for Creating OG Images

### Option 1: Canva (Easiest - Recommended)
**Best For:** Quick, professional results without design skills

**Steps:**
1. Go to [Canva.com](https://canva.com)
2. Create custom size: 1200×630px
3. Use their templates or start from scratch
4. Add:
   - Site logo/branding
   - Episode title (large, readable)
   - Character art (optional)
   - Background color/texture
5. Export as JPG (70-80% quality)

**Cost:** Free (with watermark) or $12.99/month (Pro - no watermark)

**Pros:**
- ✅ Easy to use
- ✅ Templates available
- ✅ No design skills needed
- ✅ Can create templates for reuse

**Cons:**
- ⚠️ Watermark on free version
- ⚠️ Requires manual creation per episode

---

### Option 2: Figma (Professional)
**Best For:** Designers, custom templates, batch creation

**Steps:**
1. Create 1200×630px frame
2. Design template with:
   - Background layer
   - Text layer (episode title)
   - Logo/branding layer
   - Character art layer (optional)
3. Use plugins like "OG Image Generator" for automation
4. Export as JPG

**Cost:** Free (personal) or $12/month (professional)

**Pros:**
- ✅ Professional design tool
- ✅ Can create reusable templates
- ✅ Plugins for automation
- ✅ Better control over design

**Cons:**
- ⚠️ Steeper learning curve
- ⚠️ More time-consuming

---

### Option 3: AI Image Generators (Creative)
**Best For:** Unique, artistic backgrounds

**Tools:**
- **Midjourney** - Best quality, creative
- **DALL-E 3** - Good for specific concepts
- **Stable Diffusion** - Free, open-source

**Workflow:**
1. Generate background image with AI
2. Add text overlay in Canva/Figma
3. Add logo/branding
4. Export as JPG

**Cost:** Varies ($10-30/month for Midjourney, free for some)

**Pros:**
- ✅ Unique, creative backgrounds
- ✅ Can match episode themes
- ✅ Stands out from generic images

**Cons:**
- ⚠️ Requires additional editing (text overlay)
- ⚠️ Can be inconsistent
- ⚠️ More expensive

---

### Option 4: Automated Tools (Best for Scale)
**Best For:** Generating OG images automatically from templates

**Tools:**
- **Cloudinary** - Dynamic image generation
- **Vercel OG Image** - Next.js tool (could adapt)
- **Custom Script** - Python/PHP script with Pillow/ImageMagick

**How It Works:**
1. Create template design
2. Script pulls episode title/description
3. Generates image automatically
4. Saves to `/static/images/og/[slug]-og.jpg`

**Cost:** Free (self-hosted) or $10-50/month (Cloudinary)

**Pros:**
- ✅ Automatic generation
- ✅ Consistent design
- ✅ Saves time long-term

**Cons:**
- ⚠️ Requires coding/scripting
- ⚠️ Initial setup time
- ⚠️ Less creative flexibility

---

## Recommended Approach for AI for Normal People

### Phase 1: Create Better Default OG Image
**Tool:** Canva (easiest) or Figma (if you want more control)

**Design Elements:**
- Background: Dark theme (matches site)
- Logo: "AI for Normal People" branding
- Tagline: "Real talk about AI tools for normal people"
- Character art: Vector, Kai, Recurse, or Bounce (optional)
- Color scheme: Match site colors (blues, greens, purples)

**File:** `static/images/og-image.jpg` (1200×630px, < 500KB)

---

### Phase 2: Create Per-Episode OG Images (Optional)
**Tool:** Canva template or automated script

**For Each Episode:**
1. Use template design
2. Replace title with episode title
3. Add episode number
4. Optional: Character art for featured character
5. Save as: `static/images/og/episode-[number]-og.jpg`

**Frontmatter:**
```yaml
image: "/images/og/episode-31-og.jpg"
```

---

## What We Need for Missing SEO Elements

### 1. `seo_title` (Dual Title System)
**What It Is:** SEO-friendly title for search engines (separate from creative title)

**Format:**
```yaml
seo_title: "How to Use AI to Improve Website Content"
title: "How AI Can Improve Website Content"  # Creative title (character voice)
```

**Best Practices:**
- 50-60 characters
- Include target keywords
- Clear, descriptive
- No emojis or special characters
- Different from creative title (if needed)

**Example for Episode 31:**
```yaml
seo_title: "How AI Can Improve Website Content - LLM Editing Guide"
title: "How AI Can Improve Website Content"  # Keep creative title
```

**Where to Add:**
- Add to `content/blog/episode-31-*.md` frontmatter
- Will be used in `<title>` tag, Open Graph, Twitter cards
- H1 on page still uses creative `title`

---

### 2. `plain_summary` (TL;DR Section)
**What It Is:** 2-3 sentence plain English summary at top of episode

**Format:**
```yaml
plain_summary: "Learn how to use AI prompts and large language models (LLMs) to edit and improve your website content. This guide covers content optimization, editing techniques, and when AI helps vs. when human judgment is needed."
```

**Best Practices:**
- 2-3 sentences (50-100 words)
- Plain English (no jargon)
- Answers "What will I learn?"
- Includes target keywords naturally
- Clear, concise

**Example for Episode 31:**
```yaml
plain_summary: "Learn how to use AI prompts and large language models (LLMs) to edit and improve your website content. This guide covers content optimization, editing techniques, and when AI helps vs. when human judgment is needed. Perfect for content creators, bloggers, and website owners looking to improve their writing with AI tools."
```

**Where to Add:**
- Add to `content/blog/episode-31-*.md` frontmatter
- Will display in TL;DR box at top of episode
- Helps readers quickly understand content
- Helps Google understand episode topics

---

## Implementation Checklist

### OG Image Improvements:
- [ ] Create new default OG image (1200×630px)
- [ ] Add `og:image:width` and `og:image:height` to head.html
- [ ] Add `og:image:alt` to head.html
- [ ] Test with Facebook/Twitter debuggers
- [ ] (Optional) Create per-episode OG images

### SEO Elements:
- [ ] Add `seo_title` to Episode 31 (test case)
- [ ] Add `plain_summary` to Episode 31 (test case)
- [ ] Test dual titles in browser
- [ ] Test TL;DR display
- [ ] Gradually add to other episodes

---

## Quick Start: Create OG Image Now

### Using Canva (Recommended):
1. Go to [canva.com](https://canva.com)
2. Click "Create a design" → "Custom size"
3. Set: 1200 width × 630 height
4. Design:
   - Background: Dark (#1a1a1a or similar)
   - Add text: "AI for Normal People" (large, readable)
   - Add tagline: "Real talk about AI tools for normal people"
   - Add character art (optional): Vector, Kai, or Bounce
   - Use site colors: Blues (#3b82f6), Greens (#10b981), Purples
5. Export as JPG (70-80% quality)
6. Save to: `static/images/og-image.jpg`
7. Replace existing file

### Design Tips:
- **Text:** Use large, bold font (72-96px minimum)
- **Contrast:** Light text on dark background (or vice versa)
- **Keep it Simple:** Don't clutter - focus on title and branding
- **Safe Area:** Keep important elements in center (avoid edges)

---

## Testing Your OG Image

### Facebook Debugger:
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL
3. Click "Scrape Again"
4. Check preview

### Twitter Card Validator:
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. Check preview

### LinkedIn Post Inspector:
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL
3. Check preview

---

## Next Steps

1. **Create new OG image** (Canva - 15 minutes)
2. **Add `seo_title` to Episode 31** (5 minutes)
3. **Add `plain_summary` to Episode 31** (5 minutes)
4. **Test locally** (10 minutes)
5. **Deploy and validate** (15 minutes)

**Total Time:** ~50 minutes for complete setup

---

**Questions?** Check the implementation logs or ask for help with specific tools.
