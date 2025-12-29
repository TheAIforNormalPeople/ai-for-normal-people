# SIMPLE FIX: Change 280 to 170

**What changed:** Just updated the character limit in "Generate Bluesky Post" from 280 to 170.

---

## WHAT WAS UPDATED

**In `multi-platform-social-json-tracking-FIXED.json`:**

**Before:**
```
IMPORTANT: Keep it under 280 characters (Bluesky limit is 300, but leave room for the URL).
```

**After:**
```
IMPORTANT: Keep it under 170 characters for text (Bluesky limit is 300, but URL ~65 chars + hashtags ~45 chars + newlines 2 = 282 total).
```

---

## THE MATH

- **Text:** 170 characters (what Claude generates)
- **URL:** ~65 characters (added in "Build Bluesky Body")
- **Hashtags:** ~45 characters (added in "Build Bluesky Body")
- **Newlines:** 2 characters (`\n\n`)
- **Total:** ~282 characters (under 300 limit ✅)

---

## NO OTHER CHANGES NEEDED

- "Build Bluesky Body" code stays the same (it already handles truncation if needed)
- No node references changed
- Just the number: 280 → 170

---

**That's it! Just reload the workflow and test.**

