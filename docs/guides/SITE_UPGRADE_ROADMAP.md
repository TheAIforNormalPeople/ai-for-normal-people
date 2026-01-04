# Site Upgrade Roadmap - Implementation Plan

**Based on your comprehensive plan - organized for execution**

---

## ✅ PHASE 1: FIX CRITICAL BREAKS (THIS WEEK)

### Priority 1A: Fix Social Sharing ✅ IN PROGRESS

**Status:**
- ✅ Episode 12: Fixed (image commented out)
- ⏳ Default og-image.jpg: **NEEDS CREATION** (you need to create this)
- ⏳ Other episodes: Need to check/fix broken references

**What I Can Do:**
- ✅ Document what needs to happen
- ✅ Check which episodes have broken image references
- ✅ Remove broken references from frontmatter
- ❌ Create og-image.jpg (you need to do this - I can't generate images)

**What You Need to Do:**
1. Create og-image.jpg (1200x630px) using Canva/Gemini/Ideogram
2. Save to `static/images/og-image.jpg`
3. Test social sharing preview

**Files Created:**
- `PHASE_1_SOCIAL_SHARING_FIX.md` - Detailed implementation guide

---

### Priority 1B: Fix Light Mode

**Status:** You mentioned "3 fixes from other Claude"

**What I Need:**
- Can you share those 3 fixes? Or should I:
  1. Review current light mode CSS
  2. Identify issues
  3. Create fixes based on best practices?

**Timeline:** 3-4 hours (after I have the fixes or create them)

---

### Priority 1C: Publish Episode 12

**Status:** ✅ Ready to publish (just needs `draft: false`)

**Action:** Change `draft: true` → `draft: false` when ready

---

## 📋 PHASE 2: ADD REVENUE FOUNDATIONS (WEEK 2)

### Priority 2A: Email Collection

**Setup Needed:**
- Choose service (ConvertKit vs Buttondown)
- Get API key
- Add signup form to episodes/sidebar/footer
- Create welcome email

**I Can Help:**
- ✅ Add signup form HTML/CSS (already have email-signup.html partial)
- ✅ Integrate with service API
- ✅ Style forms to match site
- ❌ Set up service account (you need to do this)

---

### Priority 2B: Basic Analytics

**Setup Needed:**
- Choose service (Plausible vs Simple Analytics)
- Get tracking code
- Add to Hugo head partial

**I Can Help:**
- ✅ Add tracking script to `layouts/partials/head.html`
- ✅ Set up privacy-friendly analytics
- ❌ Create account (you need to do this)

---

### Priority 2C: Monetization Test

**Options:**
- Affiliate links (passive)
- Buy Me a Coffee / Ko-fi (tip jar)
- Carbon Ads (ethical ads)

**I Can Help:**
- ✅ Add affiliate link styling
- ✅ Add tip jar widget
- ✅ Add ad placement code
- ❌ Get affiliate accounts (you need to do this)

---

## 📋 PHASE 3: SOCIAL AMPLIFICATION (WEEK 3-4)

### Priority 3A: n8n Automation

**You mentioned n8n is already set up**

**I Can Help:**
- ✅ Create workflow documentation
- ✅ Design Twitter post templates
- ✅ Plan automation triggers
- ❌ Configure n8n (you need to do this - it's your account)

---

### Priority 3B: Reddit Strategy

**I Can Help:**
- ✅ Identify relevant subreddits
- ✅ Create sharing templates
- ✅ Document best practices
- ❌ Actually post (you need to do this manually)

---

## 📋 PHASE 4: IMAGE STRATEGY (ONGOING)

**Tier 1: Essential Images (11 total)**
- og-image.jpg (site default)
- 6 character portraits
- 4 episode type badges

**Tier 2: Episode-Specific (17 total)**
- Character episodes (8)
- Crisis episodes (8)
- Episode 50 (1)

**I Can Help:**
- ✅ Document image requirements
- ✅ Create image planning spreadsheet
- ✅ Design image specifications
- ❌ Create images (you need to do this)

---

## 🎯 IMMEDIATE NEXT STEPS

### Today:
1. **Create og-image.jpg** (30-60 min)
   - Use Canva/Gemini/Ideogram
   - 1200x630px
   - Site title + tagline
   - Save to `static/images/og-image.jpg`

2. **Fix broken image references** (I'll do this)
   - Check all episodes
   - Remove non-existent images from frontmatter
   - Comment with TODO

3. **Test social sharing** (5 min)
   - Use Facebook Debugger
   - Verify og-image shows up

### Tomorrow:
4. **Fix Light Mode** (3-4 hours)
   - Need the 3 fixes from other Claude, OR
   - I'll create fixes based on best practices

### Day 3:
5. **Publish Episode 12** (5 min)
   - Change `draft: false`
   - Push to GitHub

---

## 💡 DECISIONS NEEDED

1. **Light Mode Fixes:** Share the 3 fixes from other Claude, or should I create them?

2. **Email Service:** ConvertKit or Buttondown? (I recommend Buttondown for simplicity)

3. **Analytics:** Plausible or Simple Analytics? (I recommend Plausible - better free tier)

4. **Monetization:** Start with affiliate links + Ko-fi, or just one?

---

## 📊 PROGRESS TRACKING

**Phase 1:**
- [x] Document roadmap
- [ ] Create og-image.jpg (YOU)
- [ ] Fix broken image references (ME)
- [ ] Fix light mode (ME, after you share fixes OR I create them)
- [ ] Publish Episode 12 (YOU)

**Phase 2:**
- [ ] Email collection setup
- [ ] Analytics setup
- [ ] Monetization test

**Phase 3:**
- [ ] n8n Twitter automation
- [ ] Reddit strategy

**Phase 4:**
- [ ] Tier 1 images (11 total)
- [ ] Tier 2 images (17 total, ongoing)

---

**Ready to start! What should I tackle first?**

1. Fix broken image references in all episodes?
2. Create light mode fixes (if you don't have the other Claude's fixes)?
3. Set up email collection code (ready for when you choose service)?
4. Something else?

