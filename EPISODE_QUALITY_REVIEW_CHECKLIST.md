# Episode Quality Review Checklist

## Quick Review Before Publishing

### ✅ SCHEDULER CHECK
- [ ] Episode date matches scheduled publish date
- [ ] `draft: true` (will auto-publish) or `draft: false` (already published)
- [ ] Date format: `YYYY-MM-DDTHH:MM:SS-05:00` (EST timezone)
- [ ] No duplicate dates with other episodes

### 🚨 BANNED PHRASES (Remove These)
- ❌ "Let's dive in" / "dive in"
- ❌ "Key takeaways"
- ❌ "In conclusion" / "To sum up" / "In summary"
- ❌ "Utilize" (use "use" instead)
- ❌ "Leverage" (use "use" instead)
- ❌ "Synergy"
- ❌ "Circle back"
- ❌ Generic corporate speak

### 📝 CHARACTER QUALITY
- [ ] Character voices are distinct (Vector = enthusiastic, Kai = analytical, Recurse = skeptical)
- [ ] Catchphrases used sparingly (≤3 per 1000 words)
- [ ] Dialogue feels natural, not scripted
- [ ] Characters enhance the content, don't distract
- [ ] No character sounds identical to another

### 📚 CONTENT QUALITY
- [ ] Educational value is clear
- [ ] Explains concepts clearly for "normal people"
- [ ] No gatekeeping or overly technical jargon
- [ ] Actionable takeaways present
- [ ] Content flows naturally (not template-y)
- [ ] Narrative blog post format (not script format)

### 🎯 SEO & METADATA
- [ ] Title is clear and searchable
- [ ] Description is compelling (150-160 chars ideal)
- [ ] Tags/topics are relevant
- [ ] Keywords appear naturally (3-5 times per 1000 words)
- [ ] No keyword stuffing

### 🔍 TECHNICAL
- [ ] Frontmatter is correct (date, type, draft status)
- [ ] No YAML syntax errors
- [ ] Images referenced exist (if any)
- [ ] Shortcodes are correct (`{{< dialogue >}}`, etc.)
- [ ] No broken links

### 🎨 FORMATTING
- [ ] Proper markdown formatting
- [ ] Headers used appropriately (H2, H3)
- [ ] Lists formatted correctly
- [ ] Code blocks formatted (if any)
- [ ] Dialogue shortcodes properly closed

---

## Episode 9 Specific Review (Dec 14, 2025)

**Status:** ✅ Ready to publish
- Draft: `true` (will auto-publish tomorrow)
- Date: `2025-12-14T09:00:00-05:00` ✓
- No banned phrases found ✓
- Character voices distinct ✓
- Educational value clear ✓

**Notes:**
- Good character balance (Vector, Kai, Recurse, Human)
- Practical examples provided
- Natural dialogue flow
- No generic content detected

---

## Daily Workflow Verification

**Workflow:** `.github/workflows/daily-publish.yml`
- Runs: 9am UTC daily (4am EST / 5am EDT)
- Logic: Finds `draft: true` posts with date matching today
- Action: Changes `draft: true` → `draft: false` and commits

**Next Episode:** Episode 9 (Dec 14)
- Will auto-publish at 9am UTC on Dec 14, 2025
- Current status: `draft: true` ✓
- Date: `2025-12-14` ✓

**All Future Episodes:** Episodes 10-50
- All have `draft: true` ✓
- All scheduled daily from Dec 15 onwards ✓
- Dates are sequential ✓

---

## Quick Quality Scan Results

**Episodes 9-15:** No banned phrases detected ✓
**Character voices:** Appear distinct in sampled episodes ✓
**Format:** All episodes use proper dialogue shortcodes ✓

---

## Action Items

1. ✅ Scheduler verified - working correctly
2. ✅ Episode 9 reviewed - ready for tomorrow
3. ⏳ Continue reviewing episodes 10+ for quality
4. ⏳ Monitor auto-publish workflow after Episode 9 publishes

