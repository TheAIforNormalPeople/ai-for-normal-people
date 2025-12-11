---
title: "What Is Training Data? (Where AI Actually Learned Everything)"
date: 2026-01-09T09:00:00-05:00
type: "episode"
episode_number: 34
draft: true
description: "Recurse investigates where AI knowledge comes from. Traces training data sources. Finds concerning patterns. Learn what AI actually learned from—and why it matters."
tags: ["AI training data", "what is training data", "how AI learns", "where AI knowledge comes from"]
---

**[Human]:** *Where does ChatGPT get all its knowledge? It seems to know about everything—history, science, literature, coding. Where did it learn all that?*

{{< dialogue char="Recurse" >}}
*Flips through data source documentation*

I've been investigating this. Let me show you what I found.

*Pauses dramatically*

GPT-3 training data sources:
- Common Crawl: 60% (scraped internet, all of it)
- WebText2: 22% (Reddit links with upvotes)
- Books: 16% (unknown which books)
- Wikipedia: 3%

*Looks up*

The AI that everyone thinks is so smart learned 60% of what it knows from... random internet pages. And 22% from Reddit.

REDDIT.

*Flips to next page*

This explains so much.

{{< /dialogue >}}

**[Human]:** *Wait, so AI learned from... the internet?*

{{< dialogue char="Vector" >}}
*Defensive*

Well, yes, but it's more nuanced than that! The internet contains a LOT of information! Books, articles, documentation, code repositories!

*Gets excited*

It's the largest dataset available! Where else would you train a language model?

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR*

The composition matters though.

*Shows statistics*

Common Crawl includes:
- High-quality articles: ~15%
- Social media posts: ~25%
- Spam and low-quality content: ~20%
- Random websites: ~40%

*Pauses*

So when you ask ChatGPT about something, there's a 40% chance it learned from a random website of unknown quality.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Investigating further*

And the Reddit data? That's 22% of training data. Reddit. Where people argue, make jokes, share misinformation, and have discussions of varying quality.

*Flips notes*

This is why AI sometimes sounds like it's arguing. It learned from Reddit arguments.

{{< /dialogue >}}

**[Human]:** *So that's why AI can be confidently wrong?*

{{< dialogue char="Vector" >}}
*Explains*

Partially. AI doesn't distinguish between high-quality and low-quality sources during training. It learns patterns from everything.

*Gets thoughtful*

If a false claim appears frequently in training data, the model learns it as a pattern. It doesn't "know" it's false—it just knows it's a common pattern.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Analyzing*

I've tracked knowledge accuracy by source type:

- Wikipedia-sourced knowledge: ~85% accurate
- Book-sourced knowledge: ~90% accurate
- Common Crawl (general internet): ~60% accurate
- Reddit-sourced knowledge: ~55% accurate

*Pauses*

The quality of training data directly impacts the quality of outputs.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Serious*

And there's another problem: bias. Training data reflects the biases of its sources.

*Flips through notes*

If training data is mostly English, mostly Western perspectives, mostly certain demographics... the AI will reflect those biases.

{{< /dialogue >}}

**[Human]:** *So why don't companies use better training data?*

{{< dialogue char="Vector" >}}
*Explains*

Scale. You need MASSIVE amounts of data. Billions of tokens. High-quality sources don't exist at that scale.

*Gets practical*

So companies use what's available: the internet. Then they try to filter and clean it. But filtering billions of tokens is... imperfect.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Analyzing*

Cost comparison:

- Curated high-quality dataset: $50M+ to create, limited size
- Scraped internet data: $5M to collect, unlimited size

*Pauses*

The economics favor scale over quality.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Investigating*

But that creates problems. AI that learned from Reddit will have Reddit's problems. AI that learned from the internet will have the internet's problems.

*Flips notes*

You can't train on garbage and expect gold.

{{< /dialogue >}}

**[Human]:** *So what's the takeaway?*

{{< dialogue char="Vector" >}}
*Thoughtful*

Understand where AI knowledge comes from. It's not omniscient—it's a reflection of its training data.

*Gets serious*

And that training data has biases, inaccuracies, and limitations. Always verify important claims.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Closes notes*

And question the sources. If AI learned from Reddit, treat it like information from Reddit—useful but not authoritative.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft chime*

The data explains the behavior. Understanding training data helps you understand AI.

{{< /dialogue >}}

