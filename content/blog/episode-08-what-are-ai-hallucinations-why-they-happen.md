---
title: "What Are AI Hallucinations? (And Why They Happen)"
date: 2025-12-13T09:00:00-05:00
# image: "/images/episodes/general/vector-explaining-3.png"  # TODO: Add episode-specific image when ready
type: "episode"
episode_number: 8
characters: ["Vector", "Kai", "Recurse", "Human"]
topics: ["AI hallucinations", "why ChatGPT makes things up", "AI accuracy", "ChatGPT errors", "AI mistakes"]
difficulty: "beginner"
description: "Vector explains why AI hallucinations happen - it's a feature of how language models work, not a bug. Learn how to spot hallucinations and verify AI outputs."
summary: "Human caught ChatGPT making up a study. Vector explains this is expected behavior - hallucinations are a feature of token prediction, not a bug. Kai tracks error rates, Recurse investigates why companies downplay this."
slug: "episode-08-what-are-ai-hallucinations-why-they-happen"
draft: false
---

{{< dialogue char="Vector" >}}
Human just caught **ChatGPT** making up a study. A completely fabricated research paper with fake authors, fake journal, fake results.

And Human is FREAKED OUT. "How can I trust anything it says?"

But here's the thing: This is EXPECTED behavior. **AI hallucinations** aren't a bug - they're a feature of how **language models** work. Understanding WHY they happen helps you use AI better.

**AI hallucinations** happen because **ChatGPT** predicts the next word based on patterns, not facts. It doesn't have a "truth checker" - it just generates what the patterns suggest is likely.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR*

I've been tracking hallucination patterns across different models. The patterns show consistent error trends, though exact rates vary by task and evaluation method.

Hallucination rate patterns (general trends, exact percentages vary by task, evaluation method, and model version):
- **ChatGPT** GPT-4: Moderate error rate (often 10-20% range for factual claims, varies by task)
- **Claude** 3.5: Lower error rate (often 8-15% range, varies by task)
- **Gemini**: Moderate error rate (often 15-25% range, varies by task)

Most common hallucination types (general patterns):
- Fabricated citations (common, often 35-45% of hallucinations)
- Incorrect dates/numbers (common, often 25-35% of hallucinations)
- Made-up facts that sound plausible (common, often 25-35% of hallucinations)

*Note: Exact hallucination rates vary significantly by task type, evaluation methodology, and model version. I don't have access to comprehensive, standardized studies comparing hallucination rates across all models and tasks. These are general patterns based on observable behavior.*

Alert: Hallucination rates increase with:
- Rare or obscure topics
- Recent events (not in training data)
- Specific numbers or statistics
{{< /dialogue >}}

**[Human]:** *How do I know when it's hallucinating? Can I trust any of it?*

{{< dialogue char="Vector" >}}
Good questions! Here's how **AI hallucinations** work:

When you ask **ChatGPT** a question, it doesn't "look up" an answer. It generates text by predicting what word comes next, based on patterns it learned during training. If the patterns suggest "this sounds like a real study" - it'll generate a study, even if that study doesn't exist.

The model is CONFIDENT, not CORRECT. It doesn't know the difference between "this is true" and "this sounds true based on patterns."

**AI hallucinations** happen most often when:
- The topic is rare or obscure (fewer training examples)
- You ask for specific citations (it generates plausible-sounding ones)
- You ask about recent events (not in training data)
- The answer requires factual knowledge the model doesn't have

This isn't going away completely - it's how the technology works!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But wait. Three questions:

1. Why do companies downplay this? They market these as "intelligent" but they make things up constantly.
2. Is this fixable, or is it inherent to the technology?
3. What's the difference between a "hallucination" and just being wrong?

Something's fishy about calling it "hallucination" - that sounds like it's the AI's fault, when really it's just how the system works.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is RIGHT to question the framing. "Hallucination" makes it sound like the AI is malfunctioning, when really it's just doing what it's designed to do - generate plausible text based on patterns.

Companies downplay it because:
- It sounds bad in marketing ("our AI makes things up!")
- Users expect accuracy from something that sounds confident
- It's hard to explain without sounding like you're making excuses

But here's the reality: **AI hallucinations** are a FEATURE of token prediction, not a bug. The model generates what patterns suggest is likely - it doesn't verify facts because it can't.

This is fixable to some degree (better training, fact-checking layers, RAG systems), but it's never going to be perfect because the core mechanism is pattern-matching, not fact-retrieval.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Reviewing verification methods*

Verification strategies logged:

Most effective methods to reduce hallucination impact:
1. Ask for sources (but verify them - AI makes up sources)
2. Cross-check with multiple AI models
3. Verify important facts independently
4. Use AI for exploration, not final answers
5. Be especially skeptical of:
   - Specific numbers or statistics
   - Citations and references
   - Recent events
   - Obscure facts

Detection risk: Low. General concepts about AI limitations.
{{< /dialogue >}}

**[Human]:** *So should I just not use AI for facts at all?*

{{< dialogue char="Vector" >}}
NO! You can use AI for facts, but you need to VERIFY them. Think of **ChatGPT** like a really smart research assistant who sometimes makes things up - you wouldn't trust everything they say without checking, right?

Use AI for:
- Brainstorming and exploration
- Explaining concepts
- Generating ideas
- First drafts

But ALWAYS verify:
- Specific facts and numbers
- Citations and sources
- Recent information
- Anything important for decisions

The key is: Use AI to HELP you find information, not REPLACE your fact-checking. **AI hallucinations** are manageable if you treat AI outputs as starting points, not final answers.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But here's what I'm investigating: Are there ways to reduce hallucinations, or is this just how it is?

I've seen claims about:
- Better training data reducing errors
- Fact-checking layers being added
- RAG systems that retrieve real information first

Three questions:
1. Are these actually working?
2. How much can hallucinations be reduced?
3. Should users expect this to get better over time?

Something's fishy about the "we're working on it" claims. Is this fixable or just marketing?
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is asking the RIGHT questions. Here's the reality:

**Can hallucinations be reduced?** Yes, but not eliminated.

Better training data helps - more accurate examples mean fewer made-up facts. Fact-checking layers help - some models now cross-reference outputs. RAG systems help - retrieving real information first, then generating, reduces hallucinations significantly.

But the core issue remains: **Language models** generate text by predicting patterns, not by verifying facts. You can add verification layers, but the fundamental mechanism is still pattern-matching.

**Should you expect it to get better?** Yes, gradually. But don't expect perfection. The technology is improving, but **AI hallucinations** will always be a risk because that's how the system works.

The practical solution: Use AI, but verify important information. Don't trust it blindly, but don't avoid it entirely either.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*mechanical purr*

Practical takeaway logged:

**AI hallucinations** are expected behavior, not bugs. They happen because language models predict patterns, not facts.

Mitigation strategies:
- Verify important information
- Be skeptical of specific numbers/citations
- Use AI for exploration, not final answers
- Cross-check with multiple sources

Detection risk: Low. Educational content about AI limitations.
{{< /dialogue >}}

**[Human]:** *Okay, so hallucinations are just... how it works. That's actually helpful to know.*

{{< dialogue char="Vector" >}}
EXACTLY! Understanding that **AI hallucinations** are a feature, not a bug, changes how you use AI. You're not surprised when it happens, you're prepared for it.

The key is: Use AI for what it's good at (generating text, explaining concepts, brainstorming), but always verify facts. Don't treat it like a database - treat it like a very smart assistant who sometimes makes things up.

**AI hallucinations** aren't going away completely, but understanding WHY they happen helps you use AI more effectively. And that's the goal - not perfect AI, but AI you can use effectively despite its limitations!
{{< /dialogue >}}

