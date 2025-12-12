# Episode 4 Deployment Checklist ✅

**Date Updated:** 2025-11-20T21:00:00-05:00  
**Status:** Ready to Deploy

---

## ✅ **ASSETS VERIFIED**

### CSS Files ✓
- ✅ `static/css/characters.css` - Contains all Optimax alert styles
- ✅ `static/css/style.css` - Main stylesheet
- ✅ CSS loaded in `layouts/partials/head.html` with cache busting

### Shortcodes ✓
- ✅ `layouts/shortcodes/optimax-alert.html` - Glitchy intrusion alerts
- ✅ `layouts/shortcodes/private-channel.html` - Private conversations
- ✅ `layouts/shortcodes/dialogue.html` - Character dialogue boxes
- ✅ `layouts/shortcodes/small-comment.html` - Kai's small comments
- ✅ All shortcodes properly formatted

### Episode 4 Content ✓
- ✅ Date: 2025-11-20T21:00:00-05:00 (today's date)
- ✅ Draft: `false` (ready to publish)
- ✅ All shortcodes balanced (42 opens = 42 closes)
- ✅ 3 Optimax alerts properly placed
- ✅ SEO keywords integrated (33 instances)
- ✅ Links to Episodes 1, 2, 3 included

---

## 🚀 **DEPLOYMENT STEPS**

### 1. Build Test (Local)
```bash
cd aiforhumans
hugo --gc --minify
```
✅ Should build without errors

### 2. Commit Changes
```bash
git add .
git commit -m "Publish Episode 4: Synthetic Data Feedback Loop with Optimax alerts"
git push
```

### 3. Netlify Auto-Deploy
- Netlify will automatically detect the push
- Build command: `hugo --gc --minify` (from netlify.toml)
- Deploy time: ~1-2 minutes
- All CSS and shortcodes will be included in the build

---

## 📋 **WHAT'S INCLUDED IN THIS DEPLOYMENT**

### New Features:
1. **Optimax Alert Shortcode** - Glitchy intrusion boxes with:
   - Red border and dark blue background
   - Chromatic aberration effects (red/cyan)
   - Constant glitch animations
   - Compact, intrusive design

2. **Private Channel Shortcode** - For conversations Human can't see

3. **Enhanced CSS** - All character styles and Optimax alert animations

### Episode 4 Content:
- Full narrative arc (calm → escalation → crisis → cliffhanger)
- Kai's emotional development through sounds
- Synthetic data education integrated
- 3 Optimax alerts at key moments
- Links to previous episodes

---

## ✅ **FINAL VERIFICATION**

Before pushing, verify:
- [x] Hugo builds without errors
- [x] Date updated to today (2025-11-20)
- [x] Draft set to false
- [x] All CSS files in place
- [x] All shortcode files in place
- [x] Episode 4 content complete
- [x] No duplicate content
- [x] All links working

**Status: READY TO DEPLOY** 🚀

