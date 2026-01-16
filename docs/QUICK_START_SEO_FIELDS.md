# Quick Start: Add SEO Fields to Episode 31

**Date:** 2026-01-20  
**Purpose:** Example of what to add for `seo_title` and `plain_summary`

---

## Current Episode 31 Frontmatter

```yaml
---
title: "How AI Can Improve Website Content"
date: 2026-01-20T09:00:00-05:00
type: "episode"
episode_number: 31
draft: false
slug: "how-ai-can-improve-website-content"
description: "Bounce has been improving the blog's design. Now Human looks at their writing and wonders: can AI help improve the content too? Vector wants to analyze patterns. Kai wants to track engagement. Recurse wants to know if it actually works. And Bounce? Bounce just wants everything to feel more engaging. Learn how to use AI prompts and large language models (LLMs) for content editing, optimization, and improvement."
tags: ["AI prompts", "LLM", "large language model", "content editing", "content optimization", "AI editing", "content improvement", "AI tools"]
characters: ["Vector", "Kai", "Recurse", "Human", "Bounce"]
---
```

---

## Add These Two Fields

### 1. `seo_title` (SEO-Friendly Title)

**Add after `title:` line:**

```yaml
title: "How AI Can Improve Website Content"
seo_title: "How to Use AI to Improve Website Content - LLM Editing Guide"
```

**Why:** 
- Creative title stays the same (character voice preserved)
- SEO title is more keyword-focused
- Used in `<title>` tag, Open Graph, Twitter cards
- H1 on page still uses creative title

**Best Practices:**
- 50-60 characters
- Include target keywords ("AI", "website content", "LLM")
- Clear, descriptive
- No emojis

---

### 2. `plain_summary` (TL;DR Section)

**Add after `description:` line:**

```yaml
description: "Bounce has been improving the blog's design..."
plain_summary: "Learn how to use AI prompts and large language models (LLMs) to edit and improve your website content. This guide covers content optimization, editing techniques, and when AI helps vs. when human judgment is needed. Perfect for content creators, bloggers, and website owners looking to improve their writing with AI tools."
```

**Why:**
- Shows in TL;DR box at top of episode
- Helps readers quickly understand content
- Helps Google understand episode topics
- Plain English (no jargon)

**Best Practices:**
- 2-3 sentences (50-100 words)
- Plain English
- Answers "What will I learn?"
- Includes keywords naturally

---

## Complete Example (Episode 31)

```yaml
---
title: "How AI Can Improve Website Content"
seo_title: "How to Use AI to Improve Website Content - LLM Editing Guide"
date: 2026-01-20T09:00:00-05:00
type: "episode"
episode_number: 31
draft: false
slug: "how-ai-can-improve-website-content"
description: "Bounce has been improving the blog's design. Now Human looks at their writing and wonders: can AI help improve the content too? Vector wants to analyze patterns. Kai wants to track engagement. Recurse wants to know if it actually works. And Bounce? Bounce just wants everything to feel more engaging. Learn how to use AI prompts and large language models (LLMs) for content editing, optimization, and improvement."
plain_summary: "Learn how to use AI prompts and large language models (LLMs) to edit and improve your website content. This guide covers content optimization, editing techniques, and when AI helps vs. when human judgment is needed. Perfect for content creators, bloggers, and website owners looking to improve their writing with AI tools."
tags: ["AI prompts", "LLM", "large language model", "content editing", "content optimization", "AI editing", "content improvement", "AI tools"]
characters: ["Vector", "Kai", "Recurse", "Human", "Bounce"]
---
```

---

## What Happens When You Add These?

### `seo_title`:
- ✅ Appears in browser `<title>` tag
- ✅ Appears in Open Graph (Facebook, LinkedIn)
- ✅ Appears in Twitter card
- ✅ H1 on page still uses creative `title` (unchanged)

### `plain_summary`:
- ✅ Shows in TL;DR box at top of episode
- ✅ Styled with dark background, blue border
- ✅ Helps readers quickly understand content
- ✅ Helps Google understand episode topics

---

## Testing

After adding these fields:

1. **Build site:** `hugo server`
2. **Check `<title>` tag:** View page source, should see SEO title
3. **Check H1:** On page, should see creative title
4. **Check TL;DR:** Should see summary box at top

---

## Next Steps

1. Add `seo_title` and `plain_summary` to Episode 31
2. Test locally
3. Gradually add to other episodes
4. Create better OG image (see `OG_IMAGE_GUIDE.md`)

---

**That's it! Just add those two fields to your frontmatter.**
