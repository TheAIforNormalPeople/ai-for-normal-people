# Phase 1A: Fix Social Sharing - Implementation Guide

## Current Status

✅ Episode 12: Featured image removed from frontmatter (commented out)
✅ Episode 12: Figure shortcodes commented out
⏳ Default og-image.jpg: **NEEDS TO BE CREATED**

## What Needs to Happen

### Step 1: Create Default og-image.jpg

**Location:** `static/images/og-image.jpg`

**Specifications:**
- Size: 1200x630px (Open Graph standard)
- Format: JPG (smaller file size) or PNG (better quality)
- Content:
  - Site logo/title: "AI for Normal People"
  - Tagline: "Real talk about AI tools for normal people"
  - Subtle character silhouettes: Vector, Kai, Recurse (optional)
  - Color scheme: Match site theme (dark mode friendly)

**Tools to Create:**
1. **Canva Free** (Recommended - fastest)
   - Template: "Open Graph Image" or "Facebook Post"
   - Size: 1200x630px
   - Add text: Site title + tagline
   - Download as JPG

2. **Google Gemini** (Free, experimental)
   - Prompt: "Create a 1200x630px image for 'AI for Normal People' blog. Include the title, tagline 'Real talk about AI tools for normal people', and subtle tech/AI visual elements. Professional, clean design."

3. **Ideogram.ai** (Free, better quality)
   - Similar prompt to Gemini

**Timeline:** 30-60 minutes

---

### Step 2: Verify Hugo Config

**Current Config:**
```toml
[params]
  images = ["/images/og-image.jpg"]
```

**Status:** ✅ Already configured correctly!

**How It Works:**
- If episode has `image:` in frontmatter → uses that
- If episode has NO `image:` → falls back to `/images/og-image.jpg`
- No 404 errors, clean social sharing

---

### Step 3: Fix All Episode Image References

**Episodes with broken image references:**
- Episode 12: ✅ Fixed (commented out)
- Episode 11: ⏳ Check if image exists
- Episode 10: ⏳ Check if image exists
- Episode 9: ⏳ Check if image exists
- Episode 8: ⏳ Check if image exists
- Episode 13-50: ⏳ Check all

**Action:**
1. Check which images actually exist
2. Remove `image:` from frontmatter for non-existent images
3. Comment with `# TODO: Add episode-specific image when ready`

---

## Implementation Checklist

- [ ] Create og-image.jpg (1200x630px)
- [ ] Place in `static/images/og-image.jpg`
- [ ] Verify Hugo config (already correct)
- [ ] Check Episode 11-15 for broken image references
- [ ] Remove/fix broken references
- [ ] Test social sharing preview (use Facebook Debugger or Twitter Card Validator)

---

## Testing Social Sharing

**After og-image.jpg is created:**

1. **Facebook Debugger:**
   - Go to: https://developers.facebook.com/tools/debug/
   - Enter: `https://theaifornormalpeople.com/blog/episode-12-...`
   - Check: Image preview shows og-image.jpg

2. **Twitter Card Validator:**
   - Go to: https://cards-dev.twitter.com/validator
   - Enter: Episode URL
   - Check: Image preview shows og-image.jpg

3. **LinkedIn Post Inspector:**
   - Go to: https://www.linkedin.com/post-inspector/
   - Enter: Episode URL
   - Check: Image preview shows og-image.jpg

---

## Next Steps After This

Once og-image.jpg exists:
1. ✅ Social sharing fixed
2. → Move to Priority 1B: Fix Light Mode
3. → Then Priority 1C: Publish Episode 12

---

## Notes

- **Don't overthink the og-image** - Simple is better
- **Can be updated later** - Not permanent
- **Focus on text clarity** - Title + tagline readable at small sizes
- **Test on mobile** - Most social shares happen on mobile

