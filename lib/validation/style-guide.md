# EPISODE STYLE GUIDE - ENFORCE CONSISTENCY

## FRONTMATTER (EXACT FORMAT)
```yaml
---
title: "How ChatGPT Actually Works"
date: 2024-12-19T09:00:00-06:00
draft: false
description: "Vector explains how ChatGPT really works—token prediction, not magic. Learn what's actually happening behind the scenes."
tags: ["ChatGPT", "AI Basics", "How AI Works"]
---
```

**Rules:**
- Title: Natural, conversational (not "The Ultimate Guide to X")
- Date: ISO format with timezone (-06:00 for CST)
- Description: 150-160 chars, includes main keyword, conversational tone
- Tags: 3 tags max, specific > generic
- draft: false (unless actually a draft)

## CONTENT STRUCTURE (REQUIRED ORDER)

Every episode MUST follow this structure:

### 1. Opening (Human Narration)
**Format:**
```markdown
**[Human]:** *Italic text describing situation or question*
```

**Length:** 2-3 paragraphs (150-200 words)

**Tone:** Conversational, relatable, sets up the problem

**Example:**
```markdown
**[Human]:** *I've been trying to explain how ChatGPT works to people, and I keep 
saying it's "like a really smart search engine that understands questions."*

*But something about that explanation feels... wrong?*
```

### 2. Interruption (Character Takes Over)
**Format:**
```markdown
{{< dialogue char="Vector" >}}
STOP! That's completely wrong! It's NOT a search engine!
{{< /dialogue >}}
```

**Length:** 100-150 words

**Who interrupts:** Usually Vector (technical corrections) or Kai (pattern detection)

### 3. Teaching Dialogue (Main Content)
**Format:** Alternating character dialogue with occasional Human narration

**Structure:**
```markdown
{{< dialogue char="Vector" >}}
Character explanation
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
Statistical observation or data
{{< /dialogue >}}

**[Human]:** *Clarifying question readers would ask*

{{< dialogue char="Recurse" >}}
*Flips through notes*

Questioning or challenging detail
{{< /dialogue >}}
```

**Length:** 600-800 words

**Character rotation:** Don't let one character dominate. Alternate perspectives.

### 4. Practical Takeaway (Conclusion)
**Format:** Usually Human summarizes + characters add final thoughts

**Length:** 100-150 words

**Example:**
```markdown
**[Human]:** *Okay, so to summarize: ChatGPT predicts tokens based on patterns, 
not searching or understanding. Got it.*

{{< dialogue char="Vector" >}}
EXACTLY! And once you understand that, all the weird behaviors make sense!
{{< /dialogue >}}
```

## DIALOGUE FORMATTING RULES

### Character Dialogue:
```markdown
{{< dialogue char="Vector" >}}
Dialogue text here. Can be multiple paragraphs.

Like this.
{{< /dialogue >}}
```

**Rules:**
- NO quotes inside the shortcode (it's already quoted)
- CAN include markdown (bold, italic, lists)
- CAN span multiple paragraphs
- Character name: "Vector", "Kai", "Recurse" (exact capitalization)

### Human Narration:
```markdown
**[Human]:** *Italic text describing thoughts/actions*
```

**Rules:**
- ALWAYS uses double asterisks for bold
- ALWAYS uses single asterisks for italic
- Can span multiple paragraphs (repeat format for each)

### Character Actions:
```markdown
{{< dialogue char="Recurse" >}}
*Flips through notes*

Actual dialogue here.
{{< /dialogue >}}
```

**Rules:**
- Actions in italics *inside* the dialogue shortcode
- Blank line after action before dialogue
- Common actions: "*Flips through notes*", "*Processing...*", "*BEEP!*"

## PARAGRAPH FORMATTING

### Line Length:
- Max ~100 characters per line
- Break long lines for readability
- Don't break mid-sentence randomly

### Spacing:
- ONE blank line between paragraphs
- TWO blank lines between major sections
- NO extra spaces within paragraphs

### Lists (if needed):
```markdown
**Key points:**
- First point
- Second point
- Third point
```

Use sparingly. Dialogue > lists.

## TONE CONSISTENCY

Every episode should feel:
- ✅ Conversational (like friends explaining)
- ✅ Educational (actually teaching concepts)
- ✅ Self-aware (meta about AI patterns)
- ✅ Funny but not silly (humor serves teaching)

Every episode should NOT feel:
- ❌ Corporate (no "let's dive in", "key takeaways")
- ❌ Academic (no walls of text, citations in dialogue)
- ❌ Listicle (no "5 Ways to...", "Top 10...")
- ❌ Generic AI (no "as an AI", "I don't have opinions")

## CURSOR STYLING CHECKLIST

Before saving each episode, verify:

**Frontmatter:**
- [ ] Title conversational (not clickbait-y)
- [ ] Date in ISO format with timezone
- [ ] Description 150-160 chars
- [ ] 3 relevant tags
- [ ] draft: false

**Structure:**
- [ ] Opens with Human narration
- [ ] Character interrupts naturally
- [ ] 600-800 words of teaching dialogue
- [ ] Practical takeaway at end
- [ ] Total: 1000-1200 words

**Formatting:**
- [ ] Dialogue uses correct shortcode syntax
- [ ] Human narration uses **[Human]:** *italic* format
- [ ] Character actions in italics inside dialogue
- [ ] Proper spacing (1 line between paragraphs)
- [ ] No broken lines mid-sentence

**Tone:**
- [ ] Sounds conversational (not corporate)
- [ ] Characters have distinct voices
- [ ] Educational but entertaining
- [ ] Self-aware about AI patterns

If ANY checklist item fails, FIX before moving to next episode.

