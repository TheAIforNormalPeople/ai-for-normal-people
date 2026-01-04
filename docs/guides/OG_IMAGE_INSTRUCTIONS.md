# Create OG Image - Quick Instructions

## ✅ FASTEST METHOD: Use the HTML Generator

**I've created an automated generator for you!**

### Steps (2 minutes):

1. **Open the generator:**
   - File: `scripts/generate-og-image.html`
   - Double-click to open in your browser
   - Or right-click → Open with → Chrome/Firefox

2. **Download the image:**
   - Click "Download Image" button
   - Save as `og-image.jpg`

3. **Place in site:**
   - Move to: `static/images/og-image.jpg`
   - Done!

**That's it!** The image will automatically be used for all social sharing.

---

## Alternative: Canva (if HTML doesn't work)

### Canva Instructions (5 minutes):

1. Go to: https://www.canva.com (free account)
2. Create design → Custom size → 1200x630px
3. Background: Dark blue (#0f172a)
4. Add text:
   - Title: "AI for Normal People" (large, bold, white/blue)
   - Subtitle: "Where AI Characters Teach Humans About AI" (smaller, gray)
5. Optional: Add 3 colored circles (blue, green, purple) for characters
6. Download as JPG
7. Save to `static/images/og-image.jpg`

---

## Alternative: AI Generation (Ideogram/Gemini)

### Ideogram.ai Prompt:
```
Create a 1200x630px social media image for "AI for Normal People" blog. 
Dark background (#0f172a), title "AI for Normal People" in blue, 
subtitle "Where AI Characters Teach Humans About AI" in light gray. 
Terminal/tech aesthetic with subtle grid pattern. 
Three small colored circles (blue, green, purple) representing AI characters. 
Clean, professional, readable at small sizes.
```

### Gemini Prompt:
```
Create a 1200x630px Open Graph image for a tech blog called "AI for Normal People". 
Dark navy background (#0f172a), white/blue text, terminal aesthetic. 
Title: "AI for Normal People", subtitle: "Where AI Characters Teach Humans About AI". 
Simple, clean design optimized for social media previews.
```

---

## Verify It Works

After placing `og-image.jpg` in `static/images/`:

1. **Test locally:**
   - Run `hugo server`
   - Check episode page source for `<meta property="og:image">`
   - Should show: `https://theaifornormalpeople.com/images/og-image.jpg`

2. **Test social sharing:**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - Enter any episode URL
   - Should show your og-image

---

## Current Status

✅ HTML generator created (`scripts/generate-og-image.html`)
✅ Hugo config already set to use `/images/og-image.jpg`
⏳ **YOU NEED TO:** Generate and save the image file

**Once you save `og-image.jpg` to `static/images/`, you're done!**

