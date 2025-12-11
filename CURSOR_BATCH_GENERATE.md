# Cursor Batch Generation Command

## Quick Command for Cursor

Copy this entire block and paste into Cursor:

```
Generate 10 episodes (Episodes 6-15) using the CHARACTER_LED_TEMPLATE.md format.

For each episode:
1. Use topic from BATCH_PRODUCTION_SYSTEM.md (topics 1-10)
2. Follow character voice guides in CHARACTER_VOICE_GUIDE_UPDATED.md
3. Generate complete Hugo markdown with frontmatter
4. Save to content/blog/[slug].md
5. Set publish date: staggered 7 days apart starting 2025-12-19

Episode details:
- Episode 6: Topic 1 "How does ChatGPT actually work" - Publish: 2025-12-19
- Episode 7: Topic 2 "ChatGPT vs Claude vs Gemini" - Publish: 2025-12-26
- Episode 8: Topic 3 "What are AI hallucinations" - Publish: 2026-01-02
- Episode 9: Topic 4 "How to write better ChatGPT prompts" - Publish: 2026-01-09
- Episode 10: Topic 5 "Can AI replace my job" - Publish: 2026-01-16
- Episode 11: Topic 6 "How to detect AI-written content" - Publish: 2026-01-23
- Episode 12: Topic 7 "What is RAG" - Publish: 2026-01-30
- Episode 13: Topic 8 "How to use AI without losing skills" - Publish: 2026-02-06
- Episode 14: Topic 9 "What are AI tokens" - Publish: 2026-02-13
- Episode 15: Topic 10 "How does AI learn from data" - Publish: 2026-02-20

Frontmatter template for each:
---
title: "[SEO-optimized title with main keyword]"
date: 2025-12-19T09:00:00-05:00
image: "/images/episodes/general/vector-explaining-1.png"
type: "episode"
episode_number: [6-15]
characters: ["Vector", "Kai", "Recurse", "Human"]
topics: ["[keyword1]", "[keyword2]", "[keyword3]"]
difficulty: "beginner" or "intermediate"
description: "[Meta description with keywords - 150 chars max]"
summary: "[2-3 sentence summary]"
slug: "episode-[NUMBER]-[kebab-case-title]"
draft: true
---

Content structure (from CHARACTER_LED_TEMPLATE.md):
- Characters: 600-800 words (80% of content)
- Human: 100-200 words (20% of content)
- Total: 1000-1200 words
- 2-3 images using {{< figure >}} shortcode
- Vector leads teaching, Kai provides stats, Recurse questions, Human asks clarifying questions

Generate all 10 episodes. Don't ask for approval between each.
Save each as draft: true initially.
Use placeholder images (we'll replace later).
```

---

## After Generation

1. **Review each episode** for:
   - Character voice consistency
   - SEO keywords naturally integrated
   - Image placeholders in place
   - Publish dates correct
   - Draft status: true

2. **Replace placeholder images** with actual images from stockpile:
   - Rotate through `vector-explaining-1.png` through `vector-explaining-5.png`
   - Use topic-specific images where appropriate

3. **Commit to repo:**
   ```bash
   git add content/blog/episode-*.md
   git commit -m "Add episodes 6-15 (batch generated)"
   git push
   ```

4. **Update Airtable:**
   - Add all 10 episodes to "Content Pipeline" table
   - Status: "Scheduled"
   - Set publish dates

---

## Next Batch (Episodes 16-25)

When ready for next batch, use same command but:
- Topics 11-20 from BATCH_PRODUCTION_SYSTEM.md
- Episode numbers 16-25
- Publish dates: 2026-02-27 through 2026-04-24 (weekly)

---

**This is your production system. Generate, review, commit, schedule. Repeat.**

