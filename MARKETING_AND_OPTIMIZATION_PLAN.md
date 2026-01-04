# 📈 Marketing & Optimization Plan

**Created:** January 2025  
**Status:** Action Plan

---

## 🎯 Overview

This plan covers:
1. **Episode Review & Improvement System**
2. **SEO Optimization**
3. **Site Audit Implementation**
4. **Marketing Strategy** (Twitter, Bluesky, Instagram, Reddit)

---

## 1️⃣ Episode Review & Improvement System

### Automated Review Checklist

Create a system to review each episode for:

**Character Consistency:**
- [ ] Character voices match evolution
- [ ] No repetitive phrases
- [ ] Character interactions flow naturally
- [ ] Comedy bits are varied

**Content Quality:**
- [ ] Educational content is clear
- [ ] Examples are relatable
- [ ] No overly AI-sounding language
- [ ] Proper heading hierarchy (H1 → H2 → H3)

**SEO Basics:**
- [ ] Title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] 3-5 relevant tags
- [ ] Internal links to other episodes
- [ ] Image alt text (if images exist)

**Technical:**
- [ ] No spelling/grammar errors
- [ ] Proper markdown formatting
- [ ] Date is correct
- [ ] Draft status is correct

### Implementation

**Option A: Manual Review Template**
- Create a checklist file for each episode
- Review before publishing

**Option B: Automated Script**
- Create a script that checks:
  - Character phrase repetition
  - SEO basics (title length, description length)
  - Internal link count
  - Heading structure

**Option C: AI-Assisted Review**
- Use Claude to review episodes for:
  - Character voice consistency
  - Educational clarity
  - SEO optimization suggestions

---

## 2️⃣ SEO Optimization

### Current State (from Site Audit)

**Issues Found:**
- ❌ 105 instances of inline styles
- ❌ Large unminified CSS files (165KB total)
- ❌ Inline JavaScript (260+ lines)
- ❌ No minification configured
- ⚠️ Estimated 20-30% unused CSS

**What's Good:**
- ✅ Semantic HTML
- ✅ Sitemap generated automatically
- ✅ RSS feed
- ✅ robots.txt
- ✅ Open Graph and Twitter Cards
- ✅ Mobile responsive

### SEO Action Items

#### A. Technical SEO (High Priority)

1. **Minify CSS/JS**
   - Add Hugo minification config
   - Reduce CSS file sizes by 40-60%
   - Move inline styles to CSS files

2. **Optimize Images**
   - Compress existing images
   - Add alt text to all images
   - Use WebP format where possible

3. **Fix Inline Styles**
   - Move 105 inline styles to CSS files
   - Clean up template files

4. **Remove Dead Code**
   - Remove unused CSS (20-30% estimated)
   - Remove disabled theme toggle code

#### B. Content SEO (Medium Priority)

1. **Meta Tags**
   - Ensure all posts have meta descriptions
   - Add Open Graph images per post
   - Verify Twitter Card tags

2. **Internal Linking**
   - Add 2-3 internal links per episode
   - Link to related episodes
   - Create topic clusters

3. **Structured Data**
   - Add JSON-LD schema for articles
   - Add breadcrumb schema
   - Add FAQ schema (if applicable)

#### C. Performance SEO (Low Priority)

1. **Lazy Loading**
   - Implement lazy loading for images
   - Defer non-critical JavaScript

2. **Caching**
   - Verify Netlify caching headers
   - Add cache-control headers

---

## 3️⃣ Site Audit Follow-Up

### Priority Fixes (from SITE_AUDIT_REPORT.md)

**Phase 1: Quick Wins (1-2 hours)**
1. Remove dead code (theme toggle)
2. Add minification config to Hugo
3. Add alt text to images

**Phase 2: Medium Effort (4-6 hours)**
1. Move inline styles to CSS files
2. Remove unused CSS rules
3. Optimize images

**Phase 3: Larger Refactor (8-12 hours)**
1. Refactor template structure
2. Consolidate CSS files
3. Implement structured data

### Implementation Plan

**Step 1: Create Hugo Minification Config**
```toml
[minify]
  [minify.css]
    keepCSSComments = false
  [minify.html]
    keepComments = false
  [minify.js]
    keepJSComments = false
```

**Step 2: Move Inline Styles**
- Audit all templates
- Create utility CSS classes
- Replace inline styles

**Step 3: Image Optimization**
- Run images through compression tool
- Add alt text to all images
- Convert to WebP where possible

---

## 4️⃣ Marketing Strategy

### Current Platforms

✅ **Twitter/X** - Working via n8n  
✅ **Bluesky** - Working via n8n

### New Platforms to Add

#### Instagram

**Status:** ⚠️ Requires Setup  
**Cost:** FREE (if you can get Developer access)  
**Requirements:**
- Meta Business Account
- Instagram Business Account
- Meta Developer App
- Instagram Graph API access

**Setup Complexity:** Medium-High  
**Time to Setup:** 2-4 hours (if approved)

**Pros:**
- Free API access
- Visual platform (good for character art)
- Large audience

**Cons:**
- Requires Developer account approval
- Can take 24-48 hours to get access
- More complex setup than Twitter/Bluesky

**Recommendation:**
- ✅ Try to get Developer access (follow `n8n/archive/setup-guides/INSTAGRAM_SETUP_STEPS.md`)
- ⏳ If blocked, use manual posting via Business Suite for now
- 🔄 Add to n8n workflow once access is approved

#### Reddit

**Status:** ✅ Easy to Add  
**Cost:** FREE  
**Requirements:**
- Reddit account
- Reddit app (create at https://www.reddit.com/prefs/apps)
- OAuth2 credentials

**Setup Complexity:** Low  
**Time to Setup:** 30-60 minutes

**Pros:**
- FREE
- Built-in n8n node (no custom code needed)
- Easy OAuth2 setup
- Great for educational content
- Can post to relevant subreddits

**Cons:**
- Need to follow subreddit rules
- Some subreddits don't allow self-promotion
- Need to engage, not just post

**Recommendation:**
- ✅ **ADD THIS FIRST** - Easiest to set up
- Post to relevant subreddits:
  - r/artificial
  - r/MachineLearning
  - r/learnmachinelearning
  - r/technology
  - r/programming
  - r/explainlikeimfive (for simple explanations)

### Marketing Workflow Strategy

#### Content Distribution Flow

```
New Episode Published
    ↓
n8n Workflow Triggers
    ↓
┌─────────────────────────────────────┐
│  Generate Posts (Character Voice)   │
└─────────────────────────────────────┘
    ↓
    ├─→ Twitter (auto-post)
    ├─→ Bluesky (auto-post)
    ├─→ Reddit (auto-post to relevant subreddits)
    └─→ Instagram (manual or auto if approved)
```

#### Posting Schedule

**Twitter/Bluesky:**
- ✅ Automatic via n8n
- Posts immediately when episode publishes
- Character rotates automatically

**Reddit:**
- ✅ Automatic via n8n (once set up)
- Post to 2-3 relevant subreddits per episode
- Space out posts (don't spam)
- Engage with comments

**Instagram:**
- ⏳ Manual for now (via Business Suite)
- Or automatic once Developer access approved
- Post episode image + link
- Use character art when available

### Reddit Strategy

**Subreddits to Target:**
1. **r/artificial** - General AI discussion
2. **r/learnmachinelearning** - Educational content
3. **r/explainlikeimfive** - Simple explanations
4. **r/technology** - Tech news/discussion
5. **r/programming** - Developer-focused content

**Posting Rules:**
- ✅ Read subreddit rules first
- ✅ Engage with comments (don't just post and leave)
- ✅ Provide value, not just self-promotion
- ✅ Space out posts (don't post to same subreddit daily)
- ❌ Don't spam multiple subreddits with same post

**Post Format:**
- Title: Episode title + brief hook
- Body: Episode summary + link
- Engage: Respond to comments

---

## 📋 Implementation Priority

### Week 1: Quick Wins
1. ✅ Set up Reddit in n8n (30-60 min)
2. ✅ Create episode review checklist
3. ✅ Add Hugo minification config
4. ⏳ Try Instagram Developer access

### Week 2: SEO Improvements
1. Move inline styles to CSS
2. Optimize images
3. Add internal linking to episodes
4. Add meta descriptions where missing

### Week 3: Content Review
1. Review existing episodes for improvements
2. Update character consistency
3. Add internal links
4. Fix any SEO issues

### Week 4: Advanced
1. Implement structured data
2. Advanced image optimization
3. Performance improvements
4. Instagram automation (if approved)

---

## 🛠️ Tools Needed

**SEO:**
- Hugo minification (built-in)
- Image compression tool (Squoosh, TinyPNG)
- CSS analyzer (PurgeCSS, UnCSS)

**Marketing:**
- n8n (already have)
- Reddit app (create at reddit.com/prefs/apps)
- Meta Developer account (for Instagram)

**Review:**
- Character evolution tracker (already have)
- Episode review checklist (create)
- SEO audit tool (Google Search Console)

---

## 📊 Success Metrics

**SEO:**
- Page load time < 2 seconds
- CSS file size < 100KB
- All images optimized
- 100% of posts have meta descriptions

**Marketing:**
- Posts to 4 platforms (Twitter, Bluesky, Reddit, Instagram)
- Engagement on Reddit (comments, upvotes)
- Consistent posting schedule
- Character voice consistency across platforms

---

## 🚀 Next Steps

1. **Immediate:** Set up Reddit in n8n (easiest win)
2. **This Week:** Add Hugo minification, create review checklist
3. **This Month:** Implement SEO improvements, try Instagram access
4. **Ongoing:** Review episodes, engage on Reddit, optimize content

---

**Ready to start? Let's begin with Reddit setup - it's the easiest and most immediate win!**

