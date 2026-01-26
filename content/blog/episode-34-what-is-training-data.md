---
title: "What Is Training Data? (Where AI Actually Learned Everything)"
date: 2026-01-23T09:00:00-05:00
type: "episode"
episode_number: 34
draft: false
description: "Recurse investigates where AI knowledge comes from. Traces training data sources. Finds concerning patterns. Learn what AI actually learned from—and why it matters."
tags: ["AI training data", "what is training data", "how AI learns", "where AI knowledge comes from", "GPT training data", "ChatGPT training sources"]
characters: ["Vector", "Kai", "Recurse", "Human", "Bounce"]
topics: ["Training Data", "Machine Learning", "Data Quality", "AI Bias"]
---

**[Human]:** *After last episode's deep dive into image generation* So if AI learns from data... where does ChatGPT get all its knowledge? It seems to know about everything—history, science, literature, coding. Where did it learn all that?

{{< dialogue char="Recurse" >}}
*Flips through data source documentation*

I've been investigating this. And I have concerns.

*Pauses dramatically*

Three questions before we start:
1. Do you know what percentage of GPT-3's training came from Reddit?
2. Do you know what "Common Crawl" actually contains?
3. Are you prepared for the answer to be worse than you think?

*Opens investigation notes*

Let me show you what I found.

{{< /dialogue >}}

**[Human]:** *Nervous* Okay... hit me.

{{< dialogue char="Recurse" >}}
*Pulls up documentation*

GPT-3 training data breakdown:
- Common Crawl: 60% (scraped internet, ALL of it)
- WebText2: 22% (Reddit links with 3+ upvotes)
- Books: 16% (undisclosed which books)
- Wikipedia: 3%

*Looks up slowly*

The AI that everyone trusts learned SIXTY PERCENT of what it knows from... random internet pages.

And TWENTY-TWO PERCENT from Reddit.

*Flips notes*

Reddit. Where arguments happen. Where misinformation spreads. Where people confidently say wrong things.

This explains SO much.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*tilts head, sensing something*

ohhh...

*hums softly*

That feels muddy. Like... murky purple? No, more like static that wants to be music but can't find the beat.

*taps finger rhythmically*

Reddit data has this... argumentative texture. Sharp edges everywhere. No wonder AI outputs sometimes feel prickly.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Jumping in defensively*

WAIT. That's—okay, yes, technically accurate, but CONTEXT matters here!

*Starts counting on fingers*

The internet contains: 1) academic papers, 2) documentation, 3) code repositories, 4) journalism, 5) educational content—

*Interrupts himself*

Actually no, Recurse has a point. The RATIO is concerning. Let me run the numbers...

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR*

The composition matters more than the source.

*Pulls up analysis*

Common Crawl breakdown:
- High-quality articles: ~15%
- Social media posts: ~25%
- Spam and low-quality content: ~20%
- Random websites of unknown quality: ~40%

*CHK-CHK*

So when you ask ChatGPT a question, there's a 40% chance the relevant training data came from... a random website nobody verified.

Detection risk on this topic: elevated. People don't like learning this.

{{< /dialogue >}}

**[Human]:** *Processing* So that's why AI can be confidently wrong?

{{< dialogue char="Vector" >}}
*Getting serious now*

YES. And here's the mechanism—this is actually IMPORTANT:

AI doesn't distinguish between high-quality and garbage during training. It learns PATTERNS from everything equally.

*Pacing*

If a false claim appears 1,000 times in training data, the model learns it as a strong pattern. It doesn't "know" it's false—it just knows: "This sequence of tokens appears frequently."

The frequency IS the truth to the model.

*Stops*

That's terrifying when you think about it.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft chime*

I've tracked accuracy by likely source:

- Wikipedia-sourced knowledge: ~85% accurate
- Book-sourced knowledge: ~90% accurate
- General internet: ~60% accurate
- Reddit-adjacent knowledge: ~55% accurate

*WHIRR*

Quality in, quality out. Or in this case...

*trails off meaningfully*

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*perks up*

Ohhh wait—

*starts sketching invisible patterns in the air*

So it's like... learning to paint by looking at a billion pictures, but 60% are finger paintings and crayon scribbles...

*grins*

Your art would be WEIRD. Not bad-weird, just... unpredictably weird. Sometimes masterpiece, sometimes kindergarten.

The chaos IS the training. That actually makes it make sense!

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Connecting dots*

And there's a bigger problem I traced. Bias.

Training data isn't neutral. It reflects whoever created it.

*Opens new notes*

If training data is:
- Mostly English → English-centric worldview
- Mostly Western sources → Western perspectives overrepresented
- Mostly certain demographics → other demographics underrepresented

The AI doesn't INTEND bias. It just learned from biased data.

*Closes notebook*

Something's fishy about calling this "artificial intelligence" when it's really "statistical reflection of whoever wrote the most on the internet."

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*frowns, which is rare*

That feels... less colorful than it should be.

*softly*

Like learning music from only one radio station. You'd think that's what ALL music sounds like. You wouldn't even know what you're missing.

*brightens slightly*

But maybe that's why we need to keep painting different pictures? Add more colors to the palette?

{{< /dialogue >}}

**[Human]:** Why don't AI companies just use better training data then?

{{< dialogue char="Vector" >}}
*Excited to explain economics*

SCALE. That's the whole problem.

Modern language models need BILLIONS of tokens. Literally billions. GPT-3 was trained on 300 billion tokens.

*Counts rapidly*

1, 2, 3... actually, at one token per second, that's 9,500 YEARS of reading.

*Stops counting*

High-quality curated data doesn't EXIST at that scale. So companies use what's available: the internet. Then they TRY to filter it, but filtering billions of tokens is...

*Waves hand vaguely*

...imperfect. At best.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*CHK-CHK*

Cost analysis supports this:

- Curated high-quality dataset: $50M+ to create, limited size
- Scraped internet data: $5M to collect, unlimited size

*mechanical purr*

The economics favor scale over quality. Every time.

Companies optimize for what's measurable. Training data QUALITY isn't easily measured. Quantity is.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Final investigation note*

Which creates a loop I've been tracking:

Train on garbage → Output garbage → People post AI output → New AI trains on AI garbage → Quality degrades further

*Looks up*

It's called "model collapse" in the research. I have concerns about the long-term trajectory here.

You can't train on garbage and expect gold. But companies keep trying.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*winces visibly*

oh no no no—

*starts pacing*

That's like copying a copy of a copy until everything's just gray smudge. The colors fade. The edges blur. Eventually you can't even tell what the original WAS.

*stops, looks worried*

What if we're watching the internet slowly turn into... static?

*quieter*

That doesn't shimmer at all.

{{< /dialogue >}}

**[Human]:** So what's the takeaway for normal people using AI?

{{< dialogue char="Vector" >}}
*Thoughtful now*

Understand what you're actually talking to.

AI isn't omniscient. It's not a genius in a box. It's a statistical pattern matcher trained on... *gestures at Recurse's notes* ...mostly the internet.

*Gets serious*

That training data has biases, errors, and limitations baked in. ALWAYS verify important claims. Treat AI like a smart but unreliable research assistant, not an oracle.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Closing investigation*

And question the sources. If AI learned from Reddit, treat its knowledge like Reddit knowledge—potentially useful, frequently wrong, requires verification.

Three things to remember:
1. Training data IS the AI's knowledge—garbage in, garbage out
2. Bias in data becomes bias in output—always
3. The AI doesn't know what it doesn't know—and neither do you

*Puts away notes*

The investigation continues.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*softening again*

But hey—

*small smile*

At least now you know why it feels the way it feels. The texture makes sense. Sharp edges from arguments. Muddy bits from low-quality stuff. Bright spots from good data.

*hums*

Understanding the palette helps you work with it better. Even if the palette is... chaotic.

What if we helped make the next generation of training data more colorful?

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft chime*

The data explains the behavior. Understanding training data helps you understand AI's limitations.

*WHIRR*

And maybe treat its outputs with appropriate skepticism.

Current recommendation: trust but verify. Always verify.

{{< /dialogue >}}

---

## Key Takeaways

1. **GPT-3 was trained on 60% internet scrapes, 22% Reddit** - Quality varies wildly
2. **AI doesn't distinguish quality** - Frequency becomes "truth" to the model
3. **Bias in data = bias in output** - AI reflects its training sources
4. **Scale beats quality** - Economics favor quantity over curation
5. **Verify everything** - Treat AI like an unreliable research assistant

---

*Next episode: How do AI companies actually make money from this?*
