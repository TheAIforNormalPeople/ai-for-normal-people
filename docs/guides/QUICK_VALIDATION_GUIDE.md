# Quick Validation Guide - Stop Build Errors Forever

**Problem:** We keep fixing the same errors (YAML syntax, template compatibility, content display)

**Solution:** Run validation BEFORE committing!

---

## 🚀 Quick Start

### Before Every Commit:
```powershell
.\scripts\validate-build.ps1
```

**That's it!** If it passes, you're safe to commit. If it fails, fix the errors first.

---

## ✅ What It Checks

1. **YAML Syntax** - No inline comments after list items
2. **Hugo Build** - Site builds successfully
3. **Episode Frontmatter** - Episodes have required fields

---

## 🔧 Automated Checks

**GitHub Actions** now validates on every push:
- Runs automatically when you push to `main`
- Uses Hugo v0.120.4 (same as Netlify)
- Catches errors BEFORE they hit production

**Location:** `.github/workflows/validate.yml`

---

## 📋 Common Errors & Quick Fixes

### ❌ YAML Inline Comment
```yaml
# BAD
- "BEEP!" # use sparingly

# GOOD  
# use sparingly
- "BEEP!"
```

### ❌ Template Compatibility
```go
// BAD (breaks on Hugo 0.120.4)
{{ $episodes = where $pages ".Params.type" "eq" "episode" }}

// GOOD (works on both)
{{ range $pages }}
  {{ if eq .Params.type "episode" }}
    ...
  {{ end }}
{{ end }}
```

### ❌ Content Display
```go
// BAD (shows raw shortcodes)
{{ .Content | truncate 400 }}

// GOOD (shows clean description)
{{ .Params.description }}
```

---

## 🎯 Best Practices

1. **Always run validation before committing:**
   ```powershell
   .\scripts\validate-build.ps1
   ```

2. **Test with Hugo 0.120.4:**
   - Netlify uses Hugo 0.120.4
   - Your local might be newer
   - The validation script tests with your local Hugo

3. **Follow the rules:**
   - No inline YAML comments
   - Use `range` loops, not complex `where` filters
   - Use `.Params.description` for previews

---

## 📚 More Info

- **Full Guide:** `PREVENT_BUILD_ERRORS.md`
- **Scripts:** `scripts/README.md`
- **Validation Script:** `scripts/validate-build.ps1`

---

## 💡 Why This Works

**Before:** Errors hit Netlify → Build fails → We fix → Repeat

**Now:** Validation catches errors → Fix before commit → No Netlify failures

**Result:** No more daily fixes! 🎉

---

**Run `.\scripts\validate-build.ps1` before every commit and you'll never have these issues again!**

