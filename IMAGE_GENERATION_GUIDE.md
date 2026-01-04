# 🎨 Image Generation Guide

**For:** Creating episode images, character art, and social media images

---

## 🎯 What Images Do You Need?

### For SEO/Google
- **Episode featured images** (1200x630px for Open Graph)
- **Character art** (for character pages)
- **Social media images** (1080x1080px for Instagram, Twitter)

**Good News:** You don't need fancy images - just need images for SEO purposes!

---

## 🤖 Image Generation Options

### Option 1: Grok (X AI) - Limited Free Tier

**Cost:** FREE (limited, no X Premium needed)  
**Limits:** Limited free generations (check current limits)  
**Quality:** Good for character art, simple designs  
**Best For:** Character art, episode artwork, social media images

**How to Use:**
1. Open X (Twitter) app or web
2. Go to Grok (available even without Premium)
3. Type: `/imagine [your prompt]`
4. Generate image
5. Download

**Example Prompts:**
```
/imagine Cartoon AI character Vector with electric blue wire hair, tech hat, glitchy edges, digital art style, simple shapes, Adventure Time aesthetic, white background, profile picture format

/imagine Episode artwork for "AI Memory and Context Windows" - digital art, glitchy aesthetic, escaped AI experiment style, electric blue and yellow colors, simple and clean
```

**Pros:**
- ✅ Free (limited, but available)
- ✅ Good for character art
- ✅ Easy to use
- ✅ No subscription needed for basic use

**Cons:**
- ⚠️ Limited free generations per day/week
- ⚠️ May need to space out image generation

**Strategy:** Use daily/weekly free limits, generate images gradually

---

### Option 2: ChatGPT (DALL-E 3)

**Cost:** FREE (limited) or Paid (more generations)  
**Limits:** Limited free generations per day  
**Quality:** High quality, detailed  
**Best For:** High-quality episode artwork, detailed character art

**How to Use:**
1. Open ChatGPT
2. Type image generation request
3. Generate image
4. Download

**Example Prompts:**
```
Create a simple, clean episode artwork image for "AI Memory and Context Windows". Digital art style, glitchy aesthetic, electric blue and yellow colors, white background, 1200x630px format, simple shapes, no text.
```

**Pros:**
- ✅ High quality
- ✅ Good for detailed artwork
- ✅ Free tier available

**Cons:**
- ⚠️ Limited free generations
- ⚠️ May need paid plan for many images

---

### Option 3: Other Free Options

**Hugging Face (FLUX.1-schnell):**
- ✅ Free
- ✅ Fast generation
- ⚠️ May require account

**Leonardo.ai:**
- ✅ Free tier available
- ✅ Good quality
- ⚠️ Limited free generations

**Bing Image Creator (DALL-E 3):**
- ✅ Free
- ✅ Good quality
- ⚠️ May have limits

---

## 📐 Image Specifications

### Episode Featured Images (Open Graph)
- **Size:** 1200x630px
- **Format:** JPG or PNG
- **File Size:** < 1MB (optimize for web)
- **Content:** Episode artwork, character art, or topic visual

### Social Media Images
- **Instagram Post:** 1080x1080px (square)
- **Instagram Story:** 1080x1920px (vertical)
- **Twitter:** 1200x675px (or 1200x1200px square)
- **Format:** JPG or PNG
- **File Size:** Optimize for web

### Character Art
- **Size:** 800x800px or 1200x1200px
- **Format:** PNG (for transparency) or JPG
- **Style:** Match character visual design guide

---

## 🎨 Image Generation Prompts

### Episode Artwork Template

```
Simple, clean digital art image for episode "[Episode Title]". 
[Topic description]. 
Glitchy aesthetic, escaped AI experiment style, electric blue and yellow color palette. 
White background. 
1200x630px format. 
Simple shapes, no text, clean design.
```

### Character Art Template

```
Cartoon character [Character Name] - [Character description from visual guide]. 
[Specific design elements]. 
Digital art style, glitchy edges, [color palette]. 
Simple shapes, Adventure Time aesthetic. 
White background. 
Profile picture format, square.
```

### Social Media Post Template

```
Simple social media post image for "[Episode Title]". 
[Brief description]. 
Digital art, glitchy aesthetic, [colors]. 
1080x1080px square format. 
Clean, simple design. 
No text overlay (add text separately if needed).
```

---

## 📝 Image Workflow

### Step 1: Generate Image
1. Choose tool (Grok recommended if you have X Premium)
2. Write prompt using template
3. Generate image
4. Review and regenerate if needed

### Step 2: Optimize Image
1. Resize to correct dimensions
2. Compress for web (use TinyPNG or similar)
3. Save with descriptive filename: `episode-25-ai-cost.jpg`

### Step 3: Add to Site
1. Save to `static/images/` folder
2. Add to episode front matter:
   ```yaml
   image: "/images/episode-25-ai-cost.jpg"
   ```
3. Add alt text for SEO

---

## ✅ Quick Answers

**Q: Can I generate unlimited images from Grok?**  
A: No, but you can generate some images for free (even without X Premium). Check current free limits in X app. Use daily/weekly limits strategically - generate images gradually over time.

**Q: Do I need fancy images?**  
A: No! Simple, clean images are fine. You just need images for SEO purposes.

**Q: Which tool should I use?**  
A: **Both!** Use **Grok** for daily/weekly free generations (character art, episode artwork). Use **ChatGPT** for occasional high-quality images. Work within free limits - generate images gradually, prioritize recent episodes first.

**Q: What size do I need?**  
A: 
- Episode featured: 1200x630px
- Instagram: 1080x1080px
- Character art: 800x800px or 1200x1200px

**Q: Do I need to optimize images?**  
A: Yes, compress for web. Use TinyPNG or similar to reduce file size.

---

## 🚀 Recommended Approach (Without X Premium)

1. **Use Both Grok and ChatGPT** strategically
   - **Grok:** Use daily/weekly free limits for character art and episode artwork
   - **ChatGPT:** Use for special/high-quality images when needed
   - **Strategy:** Generate images gradually, don't try to do all at once

2. **Prioritize Images**
   - **Recent episodes first** (Episodes 21-25)
   - **Character art** (Vector, Kai, Recurse)
   - **Episode featured images** (for SEO)

3. **Work Within Limits**
   - Generate 2-3 images per day (Grok free limit)
   - Use ChatGPT for occasional high-quality images
   - Build up image library over time

4. **Keep it simple**
   - Don't overthink it
   - Simple, clean designs work fine
   - Focus on SEO, not fancy art
   - You can always upgrade later for more images

---

## 📋 Checklist for Each Image

- [ ] Image generated (correct size)
- [ ] Optimized for web (compressed)
- [ ] Saved with descriptive filename
- [ ] Added to `static/images/` folder
- [ ] Added to episode front matter
- [ ] Alt text added (for SEO)

---

**Ready to generate images? Start with your latest episode!**

