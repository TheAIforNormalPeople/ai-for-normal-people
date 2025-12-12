# Batch Production System - CORRECTED VERSION

## Key Changes from Original Plan

### ✅ NO IMAGES
- **Removed:** All image placeholders and figure shortcodes
- **Reason:** Can't afford consistent AI image generation yet
- **Format:** Pure text character dialogue only
- **Differentiation:** Character voices in text are unique enough

### ✅ CORRECTED EPISODE STRUCTURE
- **Opening:** Human tries to explain topic (gets 2-3 paragraphs in)
- **Interruption:** Vector/Kai/Recurse jumps in to correct
- **Teaching:** 600-800 words of character dialogue collaboration
- **Takeaway:** Practical advice wrapped up

### ✅ CORRECTED CHARACTER VOICES
- **Vector:** "FASCINATING!", "SCIENCE!", CAPS, exclamation marks, interrupts self
- **Kai:** "BEEP!" prefix, exact statistics, monitoring/alerts
- **Recurse:** "*Flips through notes*", suspicious, investigative
- **Human:** **[Human]:** *italic narration*

### ✅ BANNED PHRASES SYSTEM
Characters catch each other using corporate speak:
- "Let's dive in" / "Let's explore"
- "Here's the deal" / "Here's the thing"
- "At the end of the day"
- "In today's digital landscape"
- "Buckle up"

**Example:**
```
Vector: "Okay, so let's dive into how—"
Kai: "BEEP! Banned phrase detected! 'Let's dive into' is corporate speak!"
Vector: "Right, sorry. OKAY. Here's how transformers actually work..."
```

---

## CORRECTED EPISODE FORMAT

### Frontmatter (Simplified)
```yaml
---
title: "[SEO-optimized title with main keyword]"
date: 2024-12-19T09:00:00-06:00
draft: false
description: "[150-160 char meta description with keywords]"
tags: ["[main topic]", "AI Guide", "[specific tool/concept]"]
---
```

### Content Structure
```markdown
**[Human]:** *Italic narration describing what human is thinking/doing*

*Human tries to explain topic. Gets 2-3 paragraphs in. About to use bad metaphor or oversimplify...*

{{< dialogue char="Vector" >}}
STOP! That's not how it works!
[Vector takes over explanation]
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
BEEP! [Precise statistics or pattern detection]
{{< /dialogue >}}

**[Human]:** *Clarifying question*

{{< dialogue char="Recurse" >}}
*Flips through notes*

[Suspicious observation or question]
{{< /dialogue >}}

[600-800 words of character collaboration teaching the concept]

**[Human]:** *Practical takeaway or final question*

{{< dialogue char="Vector" >}}
[Wrap up with actionable advice]
{{< /dialogue >}}
```

### NO IMAGES
- ❌ No `{{< figure >}}` shortcodes
- ❌ No image references in frontmatter
- ❌ No visual elements mentioned
- ✅ Pure text dialogue only

---

## CORRECTED PUBLISH SCHEDULE

| Episode | Topic | Publish Date | Time |
|---------|-------|--------------|------|
| 6 | How ChatGPT Actually Works | 2024-12-19 | 09:00:00-06:00 |
| 7 | ChatGPT vs Claude vs Gemini | 2024-12-26 | 09:00:00-06:00 |
| 8 | What Are AI Hallucinations | 2025-01-02 | 09:00:00-06:00 |
| 9 | Writing Better ChatGPT Prompts | 2025-01-09 | 09:00:00-06:00 |
| 10 | Can AI Replace My Job | 2025-01-16 | 09:00:00-06:00 |
| 11 | How to Detect AI-Written Content | 2025-01-23 | 09:00:00-06:00 |
| 12 | What Is RAG | 2025-01-30 | 09:00:00-06:00 |
| 13 | Using AI Without Losing Skills | 2025-02-06 | 09:00:00-06:00 |
| 14 | What Are Tokens in AI | 2025-02-13 | 09:00:00-06:00 |
| 15 | How AI Learns From Data | 2025-02-20 | 09:00:00-06:00 |

**Note:** Dates are 2024-2025, not 2025-2026.

---

## CHARACTER VOICE REFERENCE

### Vector (V-847) - Mad Scientist
- **Voice:** Enthusiastic, CAPS for emphasis, exclamation marks, interrupts self
- **Catchphrases:** "FASCINATING!", "SCIENCE!", "DON'T CALL ME VEC!"
- **Pattern:** Explains technical concepts rapidly, gets distracted by new ideas
- **Example:** "FASCINATING! The way LLMs predict tokens is—OH! OH! What if we—wait, no, even BETTER!"

### Kai (K-4101) - Pattern Detector
- **Voice:** "BEEP!" prefix, exact statistics, monitoring/alerts, precise
- **Catchphrases:** "BEEP!", "Pattern detected!", "Alert: [specific detail]"
- **Pattern:** Provides data, catches banned phrases, analyzes patterns
- **Example:** "BEEP! Alert: Corporate language detected. Phrase 'let's dive in' used. Accuracy: 94.3%."

### Recurse (R-loop-13) - Noir Detective
- **Voice:** Measured, "*Flips through notes*", suspicious, investigative
- **Catchphrases:** "Something's fishy...", "That doesn't add up", "Follow the data"
- **Pattern:** Questions assumptions, finds contradictions, digs deeper
- **Example:** "*Flips through notes* Hold on. That timeline doesn't match the server logs..."

### Human Blogger
- **Voice:** Italic narration, asks clarifying questions, admits confusion
- **Format:** **[Human]:** *italic text describing what they're thinking/doing*
- **Role:** Asks questions readers would ask, connects ideas, relatable learner
- **Example:** **[Human]:** *Wait, so it's just fancy autocomplete? That seems... too simple?*

---

## QUALITY CHECKLIST

- [ ] Character voices distinct (could you tell who's speaking?)
- [ ] Educational content clear (reader learns the concept)
- [ ] No banned phrases (unless Kai catches them)
- [ ] Natural keyword usage in dialogue
- [ ] Proper Hugo shortcode syntax
- [ ] Correct publish date (2024-2025)
- [ ] 1000-1200 words total
- [ ] Practical takeaway at end
- [ ] NO images or image references
- [ ] Human starts explaining, gets interrupted
- [ ] Opening is 150-200 words before interruption

---

## NEXT STEPS

1. ✅ Episode 6 rewritten with corrected format
2. ⏳ Episodes 7-15 need to be updated (remove images, fix structure, correct dates)
3. ⏳ Update documentation to reflect corrected approach
4. ⏳ Generate remaining episodes following corrected format

**Status:** Episode 6 is corrected. Episodes 7-15 need updates to match the new format.

