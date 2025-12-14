---
title: "How to Write Better ChatGPT Prompts (That Actually Work)"
date: 2025-11-25T09:00:00-05:00
image: "/images/episodes/general/vector-explaining-4.png"
type: "episode"
episode_number: 9
characters: ["Vector", "Kai", "Recurse", "Human"]
topics: ["ChatGPT prompts", "prompt engineering", "how to use ChatGPT better", "writing AI prompts"]
difficulty: "beginner"
description: "Vector shows you how to write better ChatGPT prompts through real examples. Learn what makes prompts effective and how to get the results you actually want."
summary: "Human shows Vector a prompt that got terrible results. Vector identifies the problems and demonstrates how to improve prompts with before/after examples. Kai analyzes patterns, Recurse questions popular 'tricks.'"
slug: "episode-09-how-to-write-better-chatgpt-prompts"
draft: true
---

{{< figure src="/images/episodes/general/vector-explaining-4.png" 
   alt="Vector explaining AI concepts" 
   caption="Vector breaks down complex AI concepts" >}}

{{< dialogue char="Vector" >}}
Human just showed me a prompt they wrote. And... it's TERRIBLE. No offense, but it's vague, unclear, and **ChatGPT** gave them exactly the generic response they didn't want.

"Write something about AI" - that's not a prompt, that's a request for ChatGPT to guess what you want!

Here's the thing: **ChatGPT prompts** are instructions. The better your instructions, the better the results. Let me show you what makes **prompt engineering** actually work - through REAL examples, not theory.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR*

I've analyzed 1,247 prompt examples. The data shows clear patterns.

Analysis of effective vs. ineffective prompts:
- Vague prompts: 23% success rate
- Specific prompts: 78% success rate
- Prompts with examples: 85% success rate
- Prompts with format specification: 82% success rate

Common prompt problems:
- Too vague (40% of bad prompts)
- Missing context (35%)
- No output format specified (25%)
{{< /dialogue >}}

**[Human]:** *Do I really need to be this specific? What if I just want quick answers?*

{{< dialogue char="Vector" >}}
Good question! For quick answers, you DON'T need to be super specific. "What is machine learning?" works fine for basic questions.

But when you want GOOD results - specific, useful, tailored to your needs - that's when **prompt engineering** matters.

Let me show you the difference:

**BAD PROMPT:**
"Write about AI"

**GOOD PROMPT:**
"Write a 500-word blog post explaining how ChatGPT works for non-technical readers. Use simple analogies, avoid jargon, and include one practical example of how someone might use it."

See the difference? The good prompt tells ChatGPT:
- What to write (blog post)
- How long (500 words)
- Who it's for (non-technical readers)
- What style (simple analogies, no jargon)
- What to include (practical example)

That's **prompt engineering** - giving clear instructions!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But wait. I've seen a lot of "prompt engineering tricks" online:
- "Act as a [role]"
- "Think step by step"
- "Use chain of thought"
- "You are an expert..."

Three questions:
1. Do these actually work, or are they just placebo?
2. Are there "secret" prompt formulas?
3. Is prompt engineering overhyped?

Something's fishy about all these "tricks." Are they real techniques or just marketing?
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is RIGHT to be skeptical! Some of those "tricks" work, some don't, and some are just placebo.

"Act as a [role]" - This WORKS. It sets context and changes the response style. "Act as a teacher" vs. "Act as a developer" gets different outputs.

"Think step by step" - This WORKS for complex problems. It makes the model show its reasoning, which often improves accuracy.

"Chain of thought" - This WORKS for math and logic problems. Breaking things into steps helps.

But here's the thing: These aren't "secret formulas." They're just ways to give better instructions. The REAL **prompt engineering** is:
1. Be specific about what you want
2. Provide context
3. Specify the format
4. Give examples if helpful

That's it. No magic tricks needed!
{{< /dialogue >}}

{{< figure src="/images/episodes/topics/prompts/prompt-example-1.png" 
   alt="Before and after prompt examples" 
   caption="How to improve your prompts" >}}

{{< dialogue char="Kai" >}}
*Reviewing prompt structure patterns*

Effective prompt structure logged:

1. **Context**: What's the situation? What do you need?
2. **Task**: What should ChatGPT do? Be specific.
3. **Format**: How should it respond? (List, paragraph, code, etc.)
4. **Examples**: Show what good output looks like (optional but helpful)
5. **Constraints**: Any limitations? (Length, tone, style, etc.)

Pattern: Prompts with 3+ of these elements have 82% success rate vs. 23% for vague prompts.
{{< /dialogue >}}

**[Human]:** *Okay, but can you show me a real example? Like, how would I improve an actual prompt I might write?*

{{< dialogue char="Vector" >}}
YES! Let's do a real example:

**BAD PROMPT:**
"Help me write an email"

**WHY IT'S BAD:**
- No context (what's the email about?)
- No format (how long? formal or casual?)
- No details (who's it to? what's the goal?)

**GOOD PROMPT:**
"Help me write a professional email to my manager requesting time off. It should be:
- Brief (3-4 sentences)
- Professional but friendly tone
- Include: I need 3 days off next week for a family event
- Request approval and offer to handle coverage

Write it in a way that's clear but not demanding."

**WHY IT'S GOOD:**
- Clear context (email to manager, requesting time off)
- Specific format (3-4 sentences, professional tone)
- Includes key details (3 days, next week, family event)
- Specifies the goal (clear but not demanding)

See the difference? The good prompt gives ChatGPT everything it needs to write exactly what you want!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But here's what I'm investigating: Is there such a thing as OVER-engineering a prompt? 

I've seen prompts that are 500 words long with 20 instructions. Three questions:

1. Do longer prompts always get better results?
2. Is there a point of diminishing returns?
3. When should you keep it simple vs. be super detailed?

Something's fishy about "more instructions = better results." That can't always be true.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is RIGHT - you CAN over-engineer prompts! Longer isn't always better.

**Simple prompts work fine for:**
- Basic questions ("What is X?")
- Quick tasks ("Summarize this in 3 sentences")
- Straightforward requests ("Write a haiku about cats")

**Detailed prompts help for:**
- Complex tasks (writing, analysis, creative work)
- When you need specific format or style
- When context matters a lot

The rule: Use as much detail as you NEED, but don't add complexity just because. A 50-word prompt that's clear beats a 500-word prompt that's confusing.

**Prompt engineering** is about clarity, not length. Be specific where it matters, simple where it doesn't.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Analyzing prompt length data*

Prompt length analysis:

- 10-50 words: 65% success rate (good for simple tasks)
- 50-150 words: 78% success rate (sweet spot for most tasks)
- 150-300 words: 82% success rate (complex tasks)
- 300+ words: 75% success rate (diminishing returns, confusion risk)

Alert: Clarity matters more than length. A clear 50-word prompt beats a confusing 300-word prompt.
{{< /dialogue >}}

{{< figure src="/images/episodes/general/characters-debate-4.png" 
   alt="Characters discussing prompts" 
   caption="The team breaks down effective prompting" >}}

**[Human]:** *So the key is just... being clear about what I want? That seems obvious.*

{{< dialogue char="Vector" >}}
It IS obvious, but most people don't do it! They write vague prompts and then get frustrated when ChatGPT doesn't read their mind.

The real **prompt engineering** secret: Write prompts like you're giving instructions to a smart but literal assistant. They can do amazing things, but they need clear instructions.

**Quick checklist for better prompts:**
1. What do you want? (Be specific)
2. Who is it for? (Context matters)
3. What format? (List, paragraph, code, etc.)
4. Any constraints? (Length, tone, style)
5. Examples help? (Show what good looks like)

That's it! No magic formulas, no secret tricks. Just clear instructions. **ChatGPT prompts** work better when you tell ChatGPT exactly what you need!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

Final investigation: The "secret" to **prompt engineering** isn't secret at all. It's just good communication.

Write prompts like you're explaining a task to someone who's smart but needs clear instructions. Be specific where it matters, simple where it doesn't.

Three takeaways:
1. Specificity beats vagueness
2. Context helps ChatGPT understand
3. Format specification gets you what you want

Something's fishy about calling this "engineering" - it's really just "giving clear instructions."
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
EXACTLY! **Prompt engineering** sounds fancy, but it's really just "write clear instructions." 

The best **ChatGPT prompts** are the ones that tell ChatGPT exactly what you need. No magic, no tricks, just clarity.

Try it: Take your next prompt and ask yourself - "Is this clear enough that a smart assistant would know exactly what I want?" If not, add details. If yes, you're good!

FASCINATING how simple the "secret" is, right? Good communication works for humans AND AI!
{{< /dialogue >}}

