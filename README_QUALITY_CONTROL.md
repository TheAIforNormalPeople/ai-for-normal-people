# Quality Control System - Quick Start

## What Is This?

A complete quality control system to ensure every "AI for Normal People" episode is:
- ✅ Free of generic AI language
- ✅ Factually accurate with sources
- ✅ Consistently formatted
- ✅ Entertaining and educational
- ✅ Character-driven storytelling

## Quick Reference

### Before Generating Episodes

1. Read: `CURSOR_MASTER_GENERATION_PROMPT.md`
2. Read: `lib/validation/banned-phrases.txt`
3. Read: `lib/validation/style-guide.md`

### During Generation

Follow the workflow in `QUALITY_CONTROL_MASTER.md`:
1. Generate draft
2. Check banned phrases
3. Fact-check and cite
4. Verify character voices
5. Check structure/formatting
6. Run validation script
7. Creative validation
8. Final read-through

### Validation Script

```bash
bash scripts/validate-episode.sh content/blog/[filename].md
```

### Key Files

- **Generation:** `CURSOR_MASTER_GENERATION_PROMPT.md`
- **Quality Control:** `QUALITY_CONTROL_MASTER.md`
- **Creative System:** `ARTIST_STORYTELLER_SYSTEM.md`
- **Banned Phrases:** `lib/validation/banned-phrases.txt`
- **Style Guide:** `lib/validation/style-guide.md`
- **Citation Rules:** `lib/validation/citation-rules.md`

## Principles

1. **Storytelling, not content generation**
2. **Quality over speed** (perfect or don't save)
3. **Character-driven SEO** (keywords from character, not force-fit)
4. **Entertainment + Education** (enjoyable AND teaches)

---

For complete details, see `QUALITY_CONTROL_IMPLEMENTATION_SUMMARY.md`

