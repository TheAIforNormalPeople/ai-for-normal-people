# Image Strategy - Best Practices

## The Problem

Episode 12 (and many others) reference images that don't exist:
- Featured image in frontmatter: Used for social sharing (Open Graph, Twitter Cards)
- Figure shortcodes in content: Visual enhancements

## What Happens If Images Don't Exist?

### Featured Image (Frontmatter `image:`)
- ❌ **Social media crawlers get 404 errors** when trying to fetch the image
- ❌ **Broken image previews** on Twitter, Facebook, LinkedIn
- ✅ **Site still works** - Hugo won't break, but social sharing looks bad
- ✅ **Fallback exists** - If no `image:` specified, uses `/images/og-image.jpg`

### Figure Shortcodes (In Content)
- ✅ **Commented out = fine** - Doesn't affect anything
- ✅ **No performance impact** - Just HTML comments
- ✅ **Easy to uncomment later** - When images are ready

## Best Practice (What Real Web Designers Do)

### Option 1: Remove Non-Existent Featured Images (RECOMMENDED)
**Do this:**
- Remove `image:` from frontmatter if image doesn't exist
- Let it fall back to default `/images/og-image.jpg`
- Keep commented figure shortcodes in content (for future)

**Why:**
- No 404 errors in social media crawlers
- Clean social sharing (uses default image)
- Professional approach

### Option 2: Use Generic Placeholder
**Do this:**
- Create one generic episode image (e.g., character illustration)
- Use it for all episodes until specific images are ready
- Replace later with specific images

**Why:**
- Consistent social sharing
- No 404 errors
- Easy to update later

### Option 3: Create Images Now
**Do this:**
- Generate/create all referenced images
- Add them to `static/images/episodes/`
- Uncomment figure shortcodes

**Why:**
- Best user experience
- Professional appearance
- But: Time-consuming

## Recommendation for Episode 12

**Remove the featured image from frontmatter:**
```yaml
# Remove this line:
image: "/images/episodes/general/recurse-investigating-1.png"
```

**Keep commented figure shortcodes:**
```html
<!-- TODO: Add image when available
{{< figure src="/images/episodes/general/recurse-investigating-1.png" 
   alt="Recurse investigating" 
   caption="Recurse digs deeper into concepts" >}}
-->
```

**Result:**
- ✅ No 404 errors
- ✅ Uses default og-image.jpg for social sharing
- ✅ Future images preserved in comments
- ✅ Professional approach

## Future Image Planning

Create a separate document to track:
- Which episodes need images
- What images should be
- Priority order
- When to create them

**Example:**
```
Episode 12 - RAG:
- Featured: Recurse investigating (general/recurse-investigating-1.png)
- Diagram: RAG process (topics/ai-basics/rag-diagram-1.png)
- Scene: Characters debating (general/characters-debate-7.png)
Status: Planned, not created
```

---

## Action Items

1. **Remove non-existent featured images** from all episode frontmatter
2. **Keep commented figure shortcodes** (they're fine)
3. **Create image planning document** for future reference
4. **Use default og-image.jpg** for social sharing until images are ready

