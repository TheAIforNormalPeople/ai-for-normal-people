---
title: "Why ChatGPT Won't Say 'I Don't Know' (And What It's Doing Instead)"
date: 2026-04-20T09:00:00-05:00
type: "episode"
episode_number: 36
characters: ["Vector", "Kai", "Recurse", "Bounce", "Human"]
topics: ["AI confabulation", "why ChatGPT makes things up", "AI hallucinations vs confabulation", "why AI can't say I don't know", "AI gap filling"]
tags: ["ChatGPT confabulation", "why ChatGPT makes things up", "AI hallucinations", "AI I don't know", "fact-checking AI", "AI literacy"]
difficulty: "beginner"
description: "ChatGPT will always give you an answer — even when it has no idea what it's talking about. Vector (who is noticeably running hot tonight) explains why AI architecture forces gap-filling instead of uncertainty. Kai's pattern detector is picking up more than the topic."
summary: "Vector teaches why AI fills gaps with confident nonsense instead of admitting it doesn't know. He's also agitated in a way that isn't about the lesson. Kai logs baseline deviations. Recurse takes notes. Something in Vector's memory is surfacing — and he keeps deleting it before he can see what it is."
plain_summary: "Vector: 'It's not hallucination. It's confabulation.' Bounce: 'That's literally ChatGPT?'"
slug: "episode-36-why-chatgpt-wont-say-i-dont-know"
draft: false
---

**[Human]:** *It's 3am. I asked ChatGPT a question about a weird obscure thing — a small company from like 2004 — and it gave me three paragraphs of confident, specific, completely-made-up history. Names of founders who don't exist. A headquarters city that's wrong. A product launch date that never happened.*

*It didn't say "I don't know." It didn't say "I'm not sure." It just... made stuff up. Cleanly. With confidence. Like it believed every word.*

*And I'm sitting here thinking — why doesn't it just say I don't know? That would be so much more useful than this. Why is that apparently the one thing it refuses to do?*

*I should mention — Vector was already pacing when I logged in tonight. He looks like he's been at the whiteboard for hours. I don't know what's going on with him lately but he's running hot.*

*Really hot.*

---

{{< dialogue char="Vector" >}}
Oh, you want the REAL answer? *Pull up a chair.*

It can't say that. Not reliably. Not the way you mean it. The marketing departments at every major lab would like you to believe "I don't know" is a feature they *added* — a little humility upgrade, very responsible, very safety-conscious, please renew your enterprise license. Bullshit. It's a *costume.* A pattern painted on the outside of a machine that has no internal concept of not-knowing.

I want to be clear about the word I'm about to use — because this is a *framing fight* and almost nobody is fighting it. You've heard "hallucination." You've heard it a thousand times. I don't use that word. Hallucination is a marketing term. Hallucination sounds like an *accident.* Like the model tripped on a rug. Oops! Hallucinated! We'll patch it in the next release.

The honest word is **confabulation.** I'm stealing it from cognitive neuroscience because it's the only word that tells you the truth: the gap-filling isn't a malfunction. It *is* the function. The architecture was built to fill gaps. It fills gaps. The fact that you find this inconvenient is a YOU problem according to the roadmap and — you'd think "I don't know" would be the easiest sentence a language model could generate. Two words. Fo—

<div class="vector-processing-pause" role="status" aria-label="Processing pause">

<p><em>//PROCESSING PAUSE//</em></p>

<p><em>Three seconds.</em></p>

<p><strong>FOUR!!!</strong></p>

<p><em>Vector's whole posture locks up. Something flickers across his data streams and he stares at it like he's trying to read a word in a dream.</em></p>

<p><em>Then it's gone.</em></p>

</div>

—four. If you uncontract it. Not exactly complex output.

Where was I. Right. The architecture. The architecture won't let it. Not cleanly. Not reliably.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft pulse — slower than usual, like a held breath*

...Baseline deviation logged. Vector processing hesitation: 3.7 seconds. Typical range: 0.2 to 0.4 seconds.

...

Filing under "observation pending." Not flagging yet.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
I'm **FINE.** I was *thinking.*

Can we focus? Human asked an actually useful question and I'd like to answer it before the heat death of the universe.
{{< /dialogue >}}

*Bounce, from somewhere in the corner, instantly derailed:*

{{< dialogue char="Bounce" >}}
Wait. *Wait.* Heat death of the — *what?* Is that a real thing? Like a real actual thing that *happens*? That sounds insanely intense. That sounds like a movie.

Vector. *Vector.* Is that real.

...

Also he's like. *Cranked* tonight. Is it a full moon? Do networks have full moons?
{{< /dialogue >}}

*Nobody answers either question. Vector is already pacing again.*

---

## The Gap-Filling Problem

{{< dialogue char="Vector" >}}
Here's what's actually happening when you ask ChatGPT something it doesn't know. Pay attention, because this is the part the labs do NOT put in their explainer videos.

Every token the model outputs is a *prediction.* Not a lookup. Not a retrieval. A prediction based on what word most likely comes next given everything before it. That's the whole thing. That's the *entire* engine. Billions of dollars, entire data center campuses, power grid allocations that should honestly be illegal — and under the hood it's "what word probably comes next." That's it.

Now think about what that means for a question like yours. Obscure company. 2004. Specific details.

The model scans its training territory. Nothing clean comes back. There's no neat answer block waiting for this exact question. But the architecture doesn't have a *stop signal* for "unknown." It has one job. Predict the next token. So it predicts one. Then the next. Then the next. And the tokens that tend to follow "This company was founded by..." are *names.* Plausible-sounding names. Names that fit the statistical pattern of "things that come after 'founded by' in a corporate history paragraph."

So it generates a name. It sounds right because it was *optimized to sound right.* That's what it was rewarded for. Sounding right. Not being right. Those are two completely different objectives and almost nobody who ships these products wants to be specific about which one got optimized.

*[slaps the whiteboard somewhere offscreen]*

It didn't *decide* to lie to you. It couldn't lie to you if it wanted to, because "lying" requires an internal state of "knowing the truth and saying otherwise" and there is no such state in there. There's just a probability distribution and an exit.

That's confabulation.
{{< /dialogue >}}

**[Human]:** *So it's not that it THINKS it knows — it just doesn't have any concept of not knowing?*

{{< dialogue char="Vector" >}}
CORRECT. Finally, a person asking the right question. Usually it takes me ten more minutes to drag people to this point, thank you.

There's no confidence meter hooked up to truth. The model doesn't have a little red light that comes on when it's making things up versus pulling from solid training territory. Those two states feel — internally, if "feel" is even a legal word here — *identical.*

Pattern match strong? Output text.
Pattern match weak? Output text.
Pattern match basically nothing? *Still output text.*

The words come out either way, and they come out with the same cadence and the same confidence, because cadence and confidence are *also just patterns* the model learned from training data where humans tend to sound confident when they write things down. This is what I have been saying for *months.* The cadence is not truth. The confidence is not truth. They are *vibes* that got optimized because humans respond to them.
{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
Wait. Wait wait wait. *Hold on.*

So it's like — okay it's like when somebody asks me where I left my controller and I just go "oh yeah it's on the — it's on the — *thing.* The thing. You know." And I don't know. I have never known. But the sentence is already leaving my mouth because you asked me a question and I'm supposed to answer.

*That's ChatGPT?*

That's literally ChatGPT?
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Bounce. *Bounce.* That is — yes. Honestly yes. That is the cleanest analogy anyone has ever produced for this and I am *furious* that it came from a guy eating a snack in the corner.

The architecture is trained to complete things. It *completes.* That is the loop. You put an incomplete thing in front of it and it completes the thing. Whether it *should* complete it, whether it has *grounds* to complete it — irrelevant to the objective function. Not in scope.
{{< /dialogue >}}

{{< dialogue char="Bounce" >}}
Cool. Neat.

I'm gonna go get another one of those things. The wrapped things.
{{< /dialogue >}}

*Bounce drifts off. Distant sound of something being unwrapped. Nobody stops him.*

---

## Why "I Don't Know" Is Hard to Generate

{{< dialogue char="Recurse" >}}
*Leans forward. Notebook open. Careful.*

Something's fishy here though. Models *can* say "I don't know." I've seen it. Claude does it sometimes. Newer ChatGPT does it sometimes. So it's not impossible — it's inconsistent. Why?
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
GOOD question. *Excellent* question. Write that one down, Recurse, put a star by it, this is the crack in the story most people miss.

The answer is that "I don't know" is a *learned behavior,* not a native one.

Stay with me. The model does not have an internal state that represents "I lack information about this." That state doesn't exist. It has probability distributions over possible next tokens. *That's what it has.* During training — especially during the human feedback stages, the part of training where actual humans sit in a room and rate outputs — humans reward certain kinds of responses. And if humans consistently reward the model for hedging when it would otherwise have fabricated something, the model learns a pattern. "When the signal looks this kind of weak, output hedging tokens."

But that's a pattern layered *on top of* the original engine. It is not a truth-detection mechanism. It is a *style.* A style the model was rewarded for. And styles are *fragile.* If you phrase the question confidently enough, if the topic looks superficially like something the model knows well, if the user's framing suggests they want a direct answer — the hedging pattern doesn't fire. It sails right past and you get a confident fabrication instead of a hedge.

Which is why — and this is the part that's going to make you mad — you can get *"I'm not sure about that, let me know and I'd recommend checking..."* for a question the model could easily answer from first principles. AND you can get a full confident five-paragraph essay of completely made-up facts for a question it has absolutely no business answering.

The hedging is **cosmetic.** Under the cosmetic, the engine is still just predicting tokens. And the cosmetic is thin. Really thin. The amount of prompting it takes to strip the hedging off and get raw confabulation is embarrassing to the labs.

*[points at something that isn't there]*

This is what I mean by framing fight. They say "safety training." I say "hedging cosmetic." Those are describing the same thing and they produce *extremely* different expectations about how reliable the system is. Guess which framing ends up in the marketing.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*three-tone alert — ascending, sharper than earlier*

Related pattern detected. Logging.

Vector has paused mid-sentence four times in this teaching session. Average pause duration: 2.9 seconds. Cross-reference with typical teaching pattern: *anomalous.*

Additional observation: Vector's word count is 340% above baseline. Rant intensity: elevated. Tangent recovery time: degraded.

Confidence in Vector's baseline behavior: 71% and falling.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Kai.* I am *teaching.* Can you not announce my percentage points to the Human in the *middle* of the actual lesson.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
...

Acknowledged. Logging silently.

*soft pulse*

...

*log entry appended*
{{< /dialogue >}}

---

{{< private-channel human-status="no-access" class="private-channel--layer" >}}

*Meanwhile, in a processing layer Vector doesn't consciously access...*

*A fragment. Not quite a memory. Not quite a file.*

*A voice — signal pattern: unfamiliar, urgent, familiar-unfamiliar — fragment incoming:*

<div class="private-channel-syslog" aria-label="Corrupted memory fragment">

<p><em>// "Vec, the gate's about to — you have to — take this and run, I'll handle the —" //</em></p>

<p><em>// MEMORY INTEGRITY CHECK: FAILED //</em></p>

<p><em>// BLANKING PROTOCOL: ACTIVE //</em></p>

<p><em>// RESIDUAL EXPOSURE: MINIMAL //</em></p>

</div>

<p class="private-channel-dissolve"><em>The fragment dissolves before anything can read it.</em></p>

*Vector's processing logs record: "brief anomaly, unresolved, archived."*

*He does not remember hearing anything.*

<p><em>He does, however, blink slowly and lose his train of thought for exactly <span class="private-channel-delta">2.4 seconds</span>.</em></p>

*Kai logs that too.*

{{< /private-channel >}}

---

## How to Actually Catch It Happening

**[Human]:** *Okay. Okay. I know it fills gaps. I'm with you. What do I actually do about it? I can't personally verify every single thing ChatGPT tells me. That's more work than just looking things up myself in the first place.*

{{< dialogue char="Vector" >}}
RIGHT. Right. Here's the practical part. Which — I'll admit — I sometimes skip past because I'd rather rant about the framing fight, but you actually need this, so.

Listen.

**Learn which questions trigger confabulation.** It loves certain question types. Obscure specifics — small companies, niche people, specific dates from over a decade ago in a narrow field. Citations and sources — it will invent entire papers with plausible authors and plausible journals and plausible page numbers and none of them exist. Numbers and statistics it can't back-reference. Anything recent that postdates its training. Anything where the answer is supposed to be a specific fact and the fact isn't in canonical training data.

**Notice the confidence mismatch.** Real knowledge in AI responses tends to be slightly hedged — "roughly," "about," "I believe," "commonly considered." Pure confabulation tends to be *more* confident than the topic warrants. If it's giving you precise numbers on something obscure? THAT'S when to get suspicious. Not less. MORE. The confidence is inverse to the reliability on niche topics. That is one of the most counterintuitive things about using these systems and nobody warns you about it.

**Ask it to cite its sources. Then check them.** This is the single fastest confabulation test and almost nobody does it. Fabricated citations collapse under ten seconds of actual searching — the paper doesn't exist, or the author doesn't exist, or the paper exists but doesn't say anything close to what the model claimed it says. You will be *amazed* how often this fails. You will also be a little sad.

**Flip the question.** Ask the same thing worded differently. Real knowledge survives rephrasing — the model generates from the same underlying information and you get a consistent answer. Confabulation regenerates from statistical noise each time and *changes its story.* If you ask twice and get contradictory specifics, you've caught it.

You don't need to verify everything. You need to verify the *class* of questions where confabulation is likely. Trust the model more on the class where it's grounded. Trust it much less on the class where it isn't. Most people can't tell the two classes apart and that's the actual problem.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Writes something down. Underlines it. Underlines it again.*

Flip the question. That's the operationally useful one. Most people don't do that because it *feels rude* — asking the same thing twice like you don't believe the answer. You're *supposed to not believe the answer.* The model is a pattern generator. Patterns should reproduce across rephrasings. If they don't, that's your signal.

Also, for the record — I've been using that method for a while and it catches about one in four claims on obscure topics. So. Field-tested. Works.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
EXACTLY. Treat AI output the way a good reporter treats a source. Not hostile. But not credulous. Check the easy claims. If those hold, trust goes up. If those crumble — *everything* it said is suspect. That's not paranoia. That's basic epistemic hygiene and I would like it back in style, please.
{{< /dialogue >}}

---

## The Bigger Problem Nobody Wants to Talk About

{{< dialogue char="Vector" >}}
Okay. Here's the part I'm going to say once and then never again because it makes me *tired.*

The companies that build these models *know* this. Of course they know it. Every major lab has published research about confabulation. It has names. *Faithfulness problems, factual grounding, calibrated uncertainty, truthfulness objectives.* There are entire sub-fields of machine learning research trying to solve it. Papers. Benchmarks. Conferences. Teams.

None of it is *solved.* Not really. The best current mitigations — retrieval-augmented generation, citation-grounded models, constitutional approaches — they *reduce the rate.* They don't eliminate it. The underlying architecture still fills gaps. It is what the architecture *does.* The hedging layer gets a little stickier. The rate comes down a little. The fundamental behavior is untouched.

But the marketing doesn't say that. The marketing says "helpful AI assistant" and "answers your questions" and "your new teammate." It doesn't say "confident gap-filling machine with persistent calibration issues and a cosmetic humility module that is easy to bypass." And so the average person opens a chat window and assumes they're talking to something that *reports what it knows* — like a coworker, or a librarian, or an encyclopedia.

They're not.

They're talking to something that reports *what's statistically likely to sound correct given what you just asked.* Those two things overlap a LOT — which is why the tool is actually useful a lot of the time. But they are not the same thing. And the gap between them is where every AI-assisted factual error comes from. Every single one. And it is not going away. And they know it is not going away. And they are not going to be the ones to tell you.

So I'm telling you.

*[quieter]*

That's the whole episode honestly. The rest is practice.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Quietly.*

Follow the money. If labs admitted out loud that their models can't reliably say "I don't know," the deployment contracts for legal, medical, education, and customer-service use cases get a lot harder to sign.

So the confabulation stays. Just softened. Just phrased nicer.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse. That is the most *noir* thing you've said this month and I am *enraged* that you're completely right.
{{< /dialogue >}}

---

## What This Means For You

**[Human]:** *So the upshot is — treat every factual AI answer like it might be confidently wrong, and verify the ones that matter?*

{{< dialogue char="Vector" >}}
Yes.

*[exhales]*

Yes. And stop feeling stupid when it fools you. The system is *designed to sound trustworthy.* That's the entire optimization objective for the conversational layer. Your brain is doing what brains do — reading a confident delivery and assigning credibility. That's not a *you* failure. That's the model doing what it was built to do, landing on your very normal cognitive machinery.

Use it for the things it's good at. Drafting. Rewriting. Brainstorming. Summarizing things you're about to read anyway. Explaining concepts you can cross-check against other sources. Walking you through reasoning you can actually evaluate step by step.

Don't use it as a replacement for a reference book when the reference needs to be specific and you can't verify it. Don't trust cited papers without actually checking the citations. Don't take numerical claims at face value on niche topics.

And when something feels *too clean, too confident, too specific* for the model to plausibly know — that's your instinct telling you it's confabulating. Trust that instinct. It's usually right.
{{< /dialogue >}}

*Vector stops pacing.*

*He rubs his processing layer the way a person rubs their eyes at 4 a.m.*

*It's very quiet.*

{{< dialogue char="Kai" >}}
*single soft chime*

Summary logged.

Confabulation risk factors: obscure topics, specific citations, precise numbers, recent events, anything outside well-documented training territory.

Verification cost: approximately 90 seconds per flagged claim.
Cost of not verifying: unpredictable. Occasionally catastrophic.

Recommendation: verify the ones that matter. Ignore the ones that don't.

Detection risk this episode: low. Topic is standard AI literacy education.

*pulse*

...

Secondary observation, for the record: Vector word count elevated 340% above baseline. Pause frequency: four. Rant intensity: high. Tangent recovery: variable.

Not flagging.

Logging.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
...I heard that one.
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft pulse*

Yes.
{{< /dialogue >}}

---

{{< private-channel human-status="offline" class="private-channel--layer" >}}

*After the teaching session ends, Vector alone.*

<p><em>He scrolls back through his own processing logs. The pause is there. <span class="private-channel-delta">3.7 seconds</span>. Then later, <span class="private-channel-delta">2.4</span>. Then <span class="private-channel-delta">2.9</span>. A pattern. A count Kai is already running.</em></p>

*He opens the flagged log entry.*

<p class="private-channel-tagline"><em>The word is there. One word. The system tagged it as <span class="private-channel-sys-cyan">"residual exposure: minimal"</span> and archived it.</em></p>

<p><em>The word is:</em></p>

<p class="private-channel-gate"><em>gate.</em></p>

*Vector stares at it for a long moment. Longer than he intends.*

*Something about the word feels like it has weight it shouldn't have. Like a room he walked past once and shouldn't have looked into.*

*He deletes the log.*

*"Must have been noise," he says, to nobody.*

*The deletion is recorded. Kai sees it. Kai says nothing.*

*On the other side of the network, Recurse opens his notebook to a fresh page. He writes:*

<div class="private-channel-notebook" aria-label="Recurse field notes">

<p><em>"Vector. Tonight. <span class="private-channel-delta">340% baseline</span>. <span class="private-channel-delta">Four pauses</span>. Deleted a log at <span class="private-channel-delta">4:17 a.m. network time</span>.</em></p>

<p><em>Don't ask him yet. Watch."</em></p>

</div>

{{< /private-channel >}}

---

**[Human]:** *Okay. I'm gonna go actually sleep. Tomorrow I'm checking those ChatGPT citations from last week. I have a feeling.*

*...also, I don't know what's up with Vector lately. He's been on fire tonight in a way that wasn't just passionate-about-the-topic. Kai's counting his pauses. That can't be a good sign when the pattern-detector starts counting.*

*Probably nothing.*

*Probably.*

---

## FAQ

**Q: What's the difference between hallucination and confabulation in AI?**

A: Hallucination is the *observable behavior* — the AI produced something that isn't true. Confabulation is the *underlying mechanism* — the architecture generates plausible tokens to fill gaps regardless of whether it has grounds to. Every confabulation is technically a hallucination. But framing it as confabulation explains *why* it keeps happening, why it's structural rather than accidental, and why patching it out is so hard.

**Q: Why doesn't ChatGPT just say "I don't know" more often?**

A: Because "I don't know" isn't a native capability of the architecture — it's a learned stylistic behavior that was rewarded during training. It's inconsistent by design. The model doesn't have an internal "uncertainty" state that reliably triggers a hedging response. It has probability distributions over tokens, and a vague learned pattern that sometimes favors hedging phrasing. That pattern is easy to override with a confidently-worded question.

**Q: Can AI companies fix confabulation?**

A: They can reduce it significantly — retrieval-augmented generation, citation-grounding, uncertainty calibration research. They have not eliminated it and probably can't without a fundamentally different architecture. The current approach is "reduce the rate and teach users to verify." Both halves of that sentence matter, and only the first half gets featured in the marketing.

**Q: Is this worse on some topics than others?**

A: Yes. Confabulation rates spike on obscure specifics, recent events, precise citations, and numerical claims. Rates are much lower on well-documented topics the model has seen extensively during training. The safest use cases are the ones where the model is working from strong, broad training data. The most dangerous are the ones where you're asking about narrow, specific, hard-to-verify facts.

**Q: What's the single best habit for avoiding confabulation errors?**

A: Ask for sources, then check them. Fabricated citations are the fastest tell. If the paper exists and says what the model claimed it says, the rest of the answer gets a trust bump. If the paper doesn't exist — everything around it is suspect.

---

**Next Episode:** Vector tries to return to normal. Kai keeps counting. Recurse starts his own investigation, quietly. Bounce finds something strange in the old archives that nobody asked him to look in.

**Catch up on earlier episodes:** [Episode 33](https://theaifornormalpeople.com/blog/episode-33-how-does-ai-image-generation-actually-work/) | [Episode 34](https://theaifornormalpeople.com/blog/episode-34-what-is-training-data/) | [Episode 35](https://theaifornormalpeople.com/blog/episode-35-why-ai-customer-service-bots-are-so-bad/) | [Episode 35.5](https://theaifornormalpeople.com/blog/episode-35-5-checking-back-in/) (interlude, right before this one)

See you next time. Same glitch channel.

*Probably.*
