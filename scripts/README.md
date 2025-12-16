# Validation Scripts

**Run these BEFORE committing to catch errors early!**

---

## Quick Validation (Before Every Commit)

### Windows (PowerShell):
```powershell
.\scripts\validate-build.ps1
```

### What it checks:
- ✅ YAML syntax (no inline comments)
- ✅ Hugo build succeeds
- ✅ Episode frontmatter is valid

**If it passes:** Safe to commit!  
**If it fails:** Fix the errors before pushing.

---

## Episode Validation (Before Saving Episodes)

### Bash/Linux/Mac:
```bash
bash scripts/validate-episode.sh content/blog/episode-XX.md
```

### What it checks:
- ✅ No banned phrases
- ✅ Character voices are consistent
- ✅ Word count is appropriate
- ✅ Structure is correct

---

## Automated Validation

**GitHub Actions** automatically validates on every push:
- Runs on every commit to `main`
- Uses Hugo v0.120.4 (same as Netlify)
- Catches errors before they hit production

**Location:** `.github/workflows/validate.yml`

---

## Common Errors & Fixes

### ❌ YAML Inline Comment Error
```yaml
# BAD
- "BEEP!" # use sparingly

# GOOD
# use sparingly
- "BEEP!"
```

### ❌ Template Compatibility Error
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

### ❌ Content Display Error
```go
// BAD (shows raw shortcodes)
{{ .Content | truncate 400 }}

// GOOD (shows clean description)
{{ .Params.description }}
```

---

## Best Practices

1. **Run validation before committing:**
   ```powershell
   .\scripts\validate-build.ps1
   ```

2. **Test locally with Hugo 0.120.4:**
   - Netlify uses Hugo 0.120.4
   - Your local might be newer
   - Test with same version to catch compatibility issues

3. **Check YAML files:**
   - Never use inline comments after list items
   - Always put comments on separate lines

4. **Test templates:**
   - Use `range` loops instead of complex `where` filters
   - Use `.Params.description` for previews, not `.Content`

---

## Setup Pre-Commit Hook (Optional)

**Windows (PowerShell):**
Create `.git/hooks/pre-commit`:
```powershell
#!/bin/sh
powershell.exe -File scripts/validate-build.ps1
if [ $? -ne 0 ]; then
    echo "Validation failed - commit aborted"
    exit 1
fi
```

This will automatically validate before every commit.

---

## Need Help?

See `PREVENT_BUILD_ERRORS.md` for detailed explanations and solutions.

