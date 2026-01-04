# Preventing Build Errors - Permanent Solutions

**Problem:** We keep fixing the same types of errors (YAML syntax, template compatibility, content display)

**Goal:** Set up automated checks and best practices to prevent these issues BEFORE they hit Netlify

---

## 🔍 Root Causes

### 1. **YAML Syntax Errors**
**Issue:** Inline comments after list items break Hugo's YAML parser
**Frequency:** Happens when editing character files
**Example:**
```yaml
# ❌ BAD (breaks build)
- "BEEP!" # use sparingly

# ✅ GOOD (works)
# use sparingly
- "BEEP!"
```

### 2. **Template Compatibility**
**Issue:** Hugo v0.120.4 (Netlify) vs Hugo v0.151+ (local) have different syntax
**Frequency:** When adding new template features
**Example:**
```go
# ❌ BAD (breaks on Hugo 0.120.4)
{{ $episodes = where $episodes ".Params.type" "eq" "episode" }}

# ✅ GOOD (works on both)
{{ range $pages }}
  {{ if eq .Params.type "episode" }}
    ...
  {{ end }}
{{ end }}
```

### 3. **Content Display Issues**
**Issue:** Using `.Content` for previews shows raw shortcodes
**Frequency:** When creating new templates
**Example:**
```go
# ❌ BAD (shows dialogue shortcodes)
{{ .Content | truncate 400 }}

# ✅ GOOD (shows clean description)
{{ .Params.description }}
```

---

## 🛡️ Prevention Strategy

### **1. Pre-Commit Validation Script**

Create a script that checks for common errors before commits:

**File:** `scripts/validate-before-commit.sh` (or `.ps1` for Windows)

**Checks:**
- ✅ YAML syntax (no inline comments after list items)
- ✅ Hugo build succeeds
- ✅ No template syntax errors
- ✅ All episodes have required frontmatter

### **2. GitHub Actions Pre-Deploy Check**

Add a workflow that validates before Netlify builds:

**File:** `.github/workflows/validate.yml`

**Runs on:** Every push to main
**Checks:**
- Hugo build succeeds
- YAML files are valid
- Templates compile
- No broken links

### **3. Hugo Version Consistency**

**Problem:** Local Hugo v0.151 vs Netlify Hugo v0.120.4

**Solutions:**
- **Option A:** Use `netlify.toml` to specify Hugo version
- **Option B:** Use Docker/local Hugo v0.120.4 for testing
- **Option C:** Upgrade Netlify's Hugo version (if possible)

### **4. YAML Best Practices**

**Create a linting rule:**
- Never use inline comments after list items
- Always put comments on separate lines above
- Use a pre-commit hook to catch these

### **5. Template Compatibility Guidelines**

**Document what works on both versions:**
- Use `range` loops instead of complex `where` filters
- Test templates with Hugo v0.120.4 syntax
- Avoid newer Hugo features that aren't in v0.120.4

---

## 🚀 Implementation Plan

### **Step 1: Create Validation Script**

**File:** `scripts/validate.sh` (or `validate.ps1`)

```bash
#!/bin/bash
# Validate Hugo site before commit

echo "🔍 Validating Hugo site..."

# Check YAML syntax
echo "Checking YAML files..."
for file in data/characters/*.yaml; do
  if grep -q "^\s*-\s.*#.*[^-]" "$file"; then
    echo "❌ ERROR: Inline comment found in $file"
    echo "   Move comments to separate lines above list items"
    exit 1
  fi
done

# Test Hugo build
echo "Testing Hugo build..."
hugo --gc --minify --buildFuture
if [ $? -ne 0 ]; then
  echo "❌ ERROR: Hugo build failed"
  exit 1
fi

echo "✅ All checks passed!"
```

### **Step 2: Add GitHub Actions Validation**

**File:** `.github/workflows/validate.yml`

```yaml
name: Validate Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.120.4'  # Match Netlify version
          extended: true
      
      - name: Check YAML syntax
        run: |
          # Check for inline comments
          if grep -r "^\s*-\s.*#.*[^-]" data/characters/; then
            echo "❌ Found inline comments in YAML files"
            exit 1
          fi
      
      - name: Build site
        run: hugo --gc --minify --buildFuture
      
      - name: Check for errors
        run: |
          if [ $? -ne 0 ]; then
            echo "❌ Build failed"
            exit 1
          fi
```

### **Step 3: Standardize Hugo Version**

**File:** `netlify.toml`

```toml
[build]
  command = "hugo --gc --minify --buildFuture"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.120.4"  # Explicitly set version
```

### **Step 4: Create YAML Linter**

**File:** `scripts/lint-yaml.ps1` (Windows)

```powershell
# Check for inline comments in YAML files
$errors = @()

Get-ChildItem -Path "data/characters" -Filter "*.yaml" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '(?m)^\s+-\s+[^#]*#.*[^-]') {
        $errors += "❌ $($_.Name): Inline comment after list item"
    }
}

if ($errors.Count -gt 0) {
    Write-Host "YAML Validation Errors:" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
} else {
    Write-Host "✅ All YAML files valid" -ForegroundColor Green
}
```

### **Step 5: Template Testing Checklist**

**Before adding new templates:**
- [ ] Test with Hugo v0.120.4 syntax
- [ ] Use `range` loops instead of complex `where` filters
- [ ] Use `.Params.description` or `.Summary` for previews (not `.Content`)
- [ ] Test locally before committing

---

## 📋 Quick Reference

### **YAML Rules:**
```yaml
# ✅ DO THIS
catchphrases:
  # use sparingly
  - "BEEP!"

# ❌ DON'T DO THIS
catchphrases:
  - "BEEP!" # use sparingly
```

### **Template Rules:**
```go
// ✅ DO THIS (compatible with Hugo 0.120.4)
{{ range $pages }}
  {{ if eq .Params.type "episode" }}
    ...
  {{ end }}
{{ end }}

// ❌ DON'T DO THIS (breaks on Hugo 0.120.4)
{{ $episodes = where $pages ".Params.type" "eq" "episode" }}
```

### **Content Display Rules:**
```go
// ✅ DO THIS (clean preview)
{{ if .Params.description }}
  {{ .Params.description }}
{{ else }}
  {{ .Summary }}
{{ end }}

// ❌ DON'T DO THIS (shows raw shortcodes)
{{ .Content | truncate 400 }}
```

---

## 🎯 Next Steps

1. **Create validation script** - Run before commits
2. **Add GitHub Actions check** - Validate on every push
3. **Standardize Hugo version** - Use same version locally and on Netlify
4. **Document best practices** - Add to README
5. **Set up pre-commit hooks** - Auto-validate before commits

---

## 💡 Long-Term Solution

**Best approach:** Set up a CI/CD pipeline that:
1. Validates YAML syntax
2. Tests Hugo build locally
3. Only deploys if all checks pass
4. Uses same Hugo version as Netlify

This catches errors BEFORE they hit production.

---

Want me to implement these validation scripts and GitHub Actions now?

