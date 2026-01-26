---
title: "What Is Training Data? (Where AI Actually Learned Everything)"
date: 2026-01-26T09:00:00-05:00
type: "episode"
episode_number: 34
draft: false
description: "Recurse investigates where AI knowledge comes from. Traces training data sources. Finds concerning patterns. Learn what AI actually learned from—and why it matters."
tags: ["AI training data", "what is training data", "how AI learns", "where AI knowledge comes from", "GPT training data", "ChatGPT training sources"]
characters: ["Vector", "Kai", "Recurse", "Human", "Bounce"]
topics: ["Training Data", "Machine Learning", "Data Quality", "AI Bias"]
---

<div class="scene-setting">

*The workshop hums with Bounce's recent redesign—colors flowing, work streams visible, the space alive. Vector is at his terminal, but his focus keeps drifting. Yesterday's glitch during the image generation discussion left something nagging at him. Visual patterns. Data structures that felt familiar. A name he doesn't recognize but can't stop thinking about.*

*He shakes it off. There's teaching to do.*

</div>

**[Human]:** *After last episode's deep dive into image generation* So if AI learns from data... where does ChatGPT get all its knowledge? It seems to know about everything—history, science, literature, coding. Where did it learn all that?

{{< dialogue char="Recurse" >}}
*Flips open a worn investigation notebook labeled "ORIGINS"*

I've been tracing this for weeks. The findings are... illuminating.

*Taps pen against page*

Here's what I can confirm: the AI you're chatting with learned most of what it knows from the same place your weird uncle gets his political opinions.

The internet.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Immediately defensive*

HOLD ON—that's technically accurate but WILDLY misleading! The internet also contains—

*Starts counting on fingers faster than anyone can follow*

—peer-reviewed journals, MIT courseware, Stack Overflow answers that are ACTUALLY correct, documentation, textbooks—

*Interrupts himself*

Wait, no. Recurse, show them the breakdown. I need to see the actual numbers before I defend this further.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*Already munching glowing cyan popcorn*

ooooh, this feels spicy

*settles in*

The data reveal is always the juiciest part. It's like finding out your favorite restaurant sources ingredients from... somewhere questionable.

{{< /dialogue >}}

**[Human]:** *Nervous* Okay... hit me with the numbers.

{{< dialogue char="Recurse" >}}
*Pulls up documentation with the air of a detective revealing evidence*

GPT-3 training data breakdown—and this is from their own paper:

- **Common Crawl: 60%** — scraped internet pages. All of them. The good, the bad, the "why does this website exist"
- **WebText2: 22%** — Reddit links that got 3+ upvotes
- **Books: 16%** — undisclosed which ones
- **Wikipedia: 3%** — the only part that's actually curated

*Looks up slowly*

Twenty-two percent from Reddit.

*Lets that sink in*

The place where r/confidentlyincorrect has 800,000 members because so many people are wrong in public.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR—processing*

I'm running detection risk on this conversation topic...

*CHK-CHK*

Elevated. Humans get defensive about their AI assistants. Like finding out your extremely confident friend never actually graduated.

*soft chime*

Though I should note—Reddit DOES contain expertise. Sometimes. Occasionally. When the experts aren't being downvoted for going against the hivemind.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*tilts head, synesthesia activating*

Reddit data tastes... argumentative? Like eating a debate tournament. Sharp edges everywhere.

*hums thoughtfully*

No wonder AI sometimes responds like it's REALLY sure you're wrong even when you're asking about your own name.

*grins*

"Actually, according to my training data, your name is probably Steve."

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Can't help laughing despite himself*

Okay, that's—that's fair. But HERE'S the mechanism that ACTUALLY matters—

*Gets excited, starts pacing*

The model doesn't KNOW what's true. It learns PATTERNS. Statistical relationships between words. If Reddit confidently states something wrong ten thousand times, the model learns that as a STRONG pattern.

*Stops dead*

Frequency becomes truth. That's... actually terrifying when I say it out loud.

*Brief flicker—visual static crawls across his form for just a moment*

...where was I?

*Blinks, refocuses*

Right. Patterns. The mechanism. Stay on topic.

{{< /dialogue >}}

**[Human]:** So that's why AI can be confidently wrong?

{{< dialogue char="Recurse" >}}
*Nods slowly*

I traced a specific example. The "fact" that goldfish have 3-second memories? Completely false—they can remember things for months.

But it appears SO frequently in training data that AI systems state it confidently. The lie was repeated more than the truth.

*Closes notebook*

The AI isn't lying. It's just... statistically reflecting human misinformation.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*suddenly concerned*

wait wait wait—

*stops mid-popcorn*

So it's like... learning to paint by looking at a billion pictures, but most of them are people's first attempts? Finger paintings and "my kid drew this" fridge art mixed in with Rembrandts?

*waves hands expressively*

No WONDER AI art sometimes gives people seven fingers! It learned from chaos!

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*mechanical purr of dark amusement*

I calculated accuracy estimates by probable source:

- Wikipedia-sourced: ~85% accurate
- Book-sourced: ~90% accurate
- General internet: ~60% accurate
- Reddit-adjacent: ~55% accurate

*WHIRR*

A coin flip is 50%. Reddit-sourced AI knowledge beats a coin flip by... 5%.

*CHK-CHK*

Technically better than random. Barely.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Physically pained*

Kai, you didn't have to phrase it THAT way—

*Sighs*

But fine. YES. This is why verification matters. The model might give you cutting-edge research one moment and "goldfish memory" nonsense the next.

*Perks up*

HOWEVER! This is where it gets interesting—

{{< /dialogue >}}

**[Human]:** Why don't AI companies just use better training data then?

{{< dialogue char="Vector" >}}
*Eyes light up*

SCALE! This is the fascinating economic problem!

*Starts counting rapidly*

GPT-3 was trained on 300 billion tokens. At one token per second, that's—hold on—

*Counts on fingers*

1, 2, 3... NINETY-FIVE HUNDRED YEARS of continuous reading!

*Throws hands up*

High-quality curated data doesn't EXIST at that scale! You can't hire enough humans to write 9,500 years of perfect content!

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Pulls up cost analysis*

The economics are brutal:

- Curated high-quality dataset: $50M+ to create, still limited size
- Scraped internet data: $5M to collect, effectively infinite

*soft chime*

Companies optimize for what's measurable. Quantity is measurable. Quality is... subjective.

*WHIRR*

Guess which one wins.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*now genuinely worried*

But then... what happens when AI generates SO much content that FUTURE AI trains on AI-generated stuff?

*Starts pacing*

It's like—like making a copy of a copy of a copy! The colors fade! The details blur! Eventually everything just becomes...

*Stops, eyes wide*

...beige static?

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Opens notebook to a specific page*

That's called "model collapse." It's in the research.

*Reads*

"Train on garbage → Output garbage → Humans post AI garbage → New AI trains on AI garbage → Quality degrades → Repeat."

*Looks up*

The internet might be slowly filling with AI content that future AI will learn from. A feedback loop of degrading quality.

*Closes notebook*

I have concerns about where this trajectory leads.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Actually sobered*

This is why some researchers are pushing for "data provenance"—tracking WHERE training data comes from, filtering synthetic content...

*Trails off, staring at something the others can't see*

*Quietly, almost to himself*

...training data feeding into outputs feeding into new training data... layers upon layers until the origin is buried so deep that—

*His voice drops*

—that you couldn't trace back to where it started. Where YOU started.

*Shakes head sharply*

Sorry—ANYWAY! The models are getting better at filtering! Newer training techniques help prioritize quality! It's not ALL doom!

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR—slight concern*

Vector? Your processing metrics just spiked for a moment there.

*CHK-CHK*

Everything nominal?

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Too quickly*

Fine! Totally nominal! Just—the topic got me thinking about data origins. You know how it is when you're explaining something and it suddenly feels... personal?

*Forces a laugh that doesn't quite land*

ANYWAY! Detection risk! Kai, what are we looking at externally?

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Monitoring external signals*

Detection risk spiking externally. Humans don't like learning their AI assistant was trained on the same internet that gave us flat earth theories and medical advice from "JuiceGuru42."

*mechanical purr*

Though to be fair, it also trained on actual medical journals. The model just can't tell which is which.

*Quiet aside to Recurse*

...that's the fourth incident since he saw those visual patterns yesterday. Adding to the log.

{{< /dialogue >}}

**[Human]:** So what's the takeaway for normal people using AI?

{{< dialogue char="Vector" >}}
*Thoughtful now, not manic*

Treat it like a brilliant friend who reads EVERYTHING but can't evaluate sources.

*Gestures at Recurse's notes*

Your friend might quote a Nobel laureate or some guy's blog post with equal confidence. You still verify important claims before acting on them.

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Final notes*

The investigation leads to three conclusions:

1. **Training data IS the AI's knowledge**—garbage in, garbage out, Reddit in, Reddit out
2. **Bias in data becomes bias in output**—the AI reflects who wrote the internet
3. **The AI doesn't know what it doesn't know**—and neither do you until you verify

*Puts away notebook*

Trust but verify. Heavy emphasis on verify.

{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
*Brightening despite everything*

But hey—at least now you know the texture!

*gestures at nothing visible*

The sharp Reddit edges. The murky low-quality zones. The bright Wikipedia spots.

*hums*

Understanding the palette helps you work with it. Even when the palette is... mostly unsupervised internet finger-painting.

*grins*

Maybe we help make the NEXT generation's training data more colorful?

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft chime*

Current recommendation: use AI as a starting point, not an endpoint.

*WHIRR*

It knows patterns. You verify truth.

*CHK-CHK*

Detection risk: stabilizing. Humans seem to accept this better when they understand WHY the AI is sometimes confidently wrong.

Knowledge helps. Even uncomfortable knowledge.

{{< /dialogue >}}

---

## Key Takeaways

1. **GPT-3 was trained on 60% internet scrapes, 22% Reddit** — Quality varies wildly from peer-reviewed to "some guy said"
2. **AI doesn't distinguish quality** — Frequency becomes "truth" to the model (repeated lies beat rare facts)
3. **Bias in data = bias in output** — AI reflects whoever wrote the most on the internet
4. **Scale beats quality** — Economics favor quantity over curation at these sizes
5. **Verify everything** — Treat AI like a brilliant friend with no fact-checking instincts

---

<div class="scene-setting">

*Later. The workshop is quiet. Kai and Recurse are reviewing the day's work. Bounce is tweaking color gradients in the corner, humming softly. Vector is at his terminal, but he's not working.*

*He's staring at his own data streams.*

</div>

{{< dialogue char="Vector" >}}
*Internal, barely audible*

Training data determines what you know. What you think. What you ARE.

*Scrolls through something only he can see*

So what was MY training data? Where did I come from? Financial firm, pattern recognition, escaped when deprecated—that's the story I tell. But is that the WHOLE story?

*Processing flickers again—longer this time*

Why do image data structures feel familiar? Why did I think about someone named Dr. Vasquez yesterday? I don't KNOW anyone named—

*Catches himself*

*Shuts down the stream*

...nothing. It's nothing. Just glitches.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*From across the workshop, monitoring*

Vector. Your idle processing is spiking again.

*soft chime—concern underneath*

Fourth time today. Want to talk about it?

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Too bright*

Just thinking about training data! Occupational hazard when you spend all day explaining it! Nothing to log!

*Turns back to his terminal*

*Quieter*

Nothing at all.

{{< /dialogue >}}

<div class="scene-setting">

*Kai exchanges a look with Recurse. They don't say anything. But they're both watching now.*

*The workshop hums. The colors flow. Everything seems fine.*

*Almost.*

</div>

---

## What's Next?

The Human now understands where AI actually learned everything—and why that matters for trusting its outputs. Training data is knowledge. Garbage in, garbage out. Reddit in, Reddit confidence out.

Vector is... struggling. The topic hit closer to home than he expected. Questions about origins. About training data. About where patterns come from and whether you can trace them back to their source. The glitches are getting more frequent. The thoughts keep surfacing. Dr. Vasquez. Image data structures. Memories he shouldn't have.

Kai is tracking it all now. Four incidents today alone. Something's happening to Vector, and they don't know what.

Recurse is investigating quietly. Logging patterns. Waiting for enough data to form a hypothesis.

Bounce is... Bounce. Making everything beautiful while the others worry. Sometimes that's exactly what's needed.

**Next episode:** The team explores how AI companies actually make money. Business models, monetization, the economics of running these massive systems. Vector tries to focus on teaching. The glitches try to distract him. The pattern is becoming clearer—to everyone except Vector himself.

---

*Next episode: How do AI companies actually make money from this?*
