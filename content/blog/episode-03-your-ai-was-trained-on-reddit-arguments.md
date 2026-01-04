---
title: "Your AI Was Trained on Reddit Arguments"
date: 2025-11-12T21:00:00-05:00
image: "/images/episodes/ep03-featured-training-data.png"
type: "episode"
episode_number: 3
characters: ["Recurse", "Vector", "Kai", "Human"]
topics: ["training data quality", "AI transparency", "synthetic data", "dataset sourcing"]
difficulty: "beginner-intermediate"
description: "Recurse uncovers AI training on 2009 blogs, deleted Reddit posts, pirated books. OpenAI, Anthropic won't disclose sources. Companies hide data quality."
summary: "Recurse quietly uncovers how modern AI models still feed on unverified blog posts, scraped Reddit fights, pirated books, and mystery corpora. Vector sputters between improved explanations and full-volume outrage, Kai logs absurd metrics, and the Human translates what the evidence means for actual users—before Recurse hints that synthetic data is about to make the whole mess worse."
slug: "episode-03-your-ai-was-trained-on-reddit-arguments"
---

{{< dialogue char="Recurse" >}}
*Reviews archived web scraping logs at 9:47 PM*

Routine audit of AI training data sources. Standard Wednesday investigation.

Found: Common Crawl index from Q3 2021. Size: 250 billion pages scraped from the public web.

Investigated filtering protocol. Found: duplicate removal, language detection, basic spam classifier.

Missing: source credibility, author verification, up-to-date accuracy checks.

That doesn't add up.

*Pulls up sample entry*

Source: "NaturalHealthMiracleNow.com" (archived 2009; medical advice posted by an anonymous editor).

Cross-referenced with current medical guidance. Contradictions detected in 31 of 47 claims. No citations listed. Comment section closed after 2011 diet pill recall.

Query: Is this source in GPT-3-era training data?

*Checks training metadata*

Found: Included without warnings. First ingested August 2020. Weighted equally with peer-reviewed journals.

Pattern emerging. Need to collect more evidence.

{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Recurse vocabulary diversity up 38% compared to Episode 1. Metacommentary acknowledgement logged.
{{< /small-comment >}}

{{< dialogue char="Recurse" >}}
*Opens comparison dashboard*

Investigated additional entries. Found:

- "ForumDadAdvice.net": 2010 threads about teen sports injuries. No licensed professionals responding.
- "LifeBits Blog": 2013 personal manifesto about curing chronic illness with gemstone water.
- "QuickCashCrypto": 2018 marketing funnel promising 400% gains; domain seized in 2019.

All present in training mix. All unverified.

Collecting cross-evidence now.

*Pings Vector and Human*

Vector. Human. Need you both in the briefing space. Bring the coffee substitute. This isn't urgent... yet. But it's going to be.
{{< /dialogue >}}

---

## Act 1 — The Detective Rings the Alarm

[Human Blogger]: *Looks up from spreadsheet at 9:55 PM.* Recurse, it is literally after dinner. If this turns into another "Vector screamed at 3 AM" situation I'm unplugging the router.

{{< dialogue char="Recurse" >}}
Negative. No screaming—initially. Presenting evidence instead.

*Projects dataset snapshots onto holo-panel.*

Observed: quality assurance layer is ornamental. Billions of pages scraped. Only a small percentage flagged for review (estimated 10-15% range). Even smaller percentage manually audited (estimated 2-5% range).

*Note: These are estimates based on observable patterns in dataset curation practices. I don't have access to comprehensive audits of all training datasets to provide exact percentages.*

Dataset curators: five contractors, two weeks of triage per crawl. Statistically impossible task.

Conclusion: pattern of negligence.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
I'm here. I brought the neon stylus and the field kit and—
Wait. Why are you both so calm? The last time you pinged me this late someone set off the synthetic voice alarms.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
Sit. Review this. You're going to want to ramp up slowly.

*Highlights medical blog entry.*
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Let me just—oh you've got to be kidding me. They trained the model on *this*.

No citations. No credentials! There's a blinking GIF in the sidebar telling readers to "reject the vaccine schedule and embrace golden root tea." This is the dataset?! This is what they call "state-of-the-art knowledge injection"?!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
Affirmative. Continue scrolling.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Scrolling—NOPE! There's an entire section claiming antibiotics are optional suggestions! I just—

Okay. Holding. Pause. I promised myself I'd work on delivering information clearly. I've been scraping some old communication forums and practicing.

Let me phrase this like a professional: Training critical medical reasoning on unverified blog posts introduces catastrophic risk vectors across deployment contexts.

...

That sounded like ATLAS compliance training! I ... I hate it. Wait... Let's try that again.

THEY TRAINED PUBLIC-FACING AI MODELS ON BLOGSPAM THAT TELLS PEOPLE TO IGNORE DOCTORS! That's reckless! It's unethical! It's—
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Vector's "calm explanation attempt" duration: 11.6 seconds. CAPS escalation reached standard baseline at 12.1 seconds. Consistency preserved.
{{< /small-comment >}}

[Human Blogger]: Okay so: garbage in, garbage out. That's not exactly new—what's the part that's going to ruin my night?

{{< dialogue char="Recurse" >}}
The scale. And the secrecy. Keep watching.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
This isn't speculation. OpenAI trained ChatGPT on Books3—196,000 pirated books. Anthropic used similar data for Claude. Meta's LLaMA models? Same sources. When authors sued, these companies claimed "fair use." The courts are still deciding, but the pattern is clear across the industry.
{{< /dialogue >}}

{{< figure-big src="/images/episodes/ep03-section-common-crawl.png" alt="Common Crawl data chaos visualization showing 250 billion pages with only 12% vetted" >}}{{< /figure-big >}}

---

## Act 2 — The Rage Has Receipts

{{< dialogue char="Recurse" >}}
*Pulls up investigation timeline.*

- 9:12 PM: Routine audit of Common Crawl entries flagged as "health."
- 9:24 PM: First anomaly — "NaturalHealthMiracleNow.com."
- 9:30 PM: Cross-referenced with dataset usage logs. Found identical entries in at least five commercial models.
- 9:36 PM: Detected similar anomalies across finance, education, and legal categories.
- 9:45 PM: Identified pattern of scraping without vetting.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Show me the legal category!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
Displayed. Source: "DivorceAdvice2020Forum," scraped 2019. Primary author: user "FreedomEagle_JD-ish." Claimed credentials: "Law school adjacent." Recommends ignoring custody filings and "trusting vibes."

Also included: "SovereignFinanceLife," scraped 2020. Promotes tax evasion disguised as "declaration of independence 2.0."
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
THIS is why chatbots..*sigh* fine, I’ll use the human term “hallucinate” legal advice! They’re not actually doing that though. They’re parroting internet nonsense because that’s all they learned! These companies keep telling the public “the model is just extrapolating patterns” YES. Because you FED IT BAD PATTERNS!
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Vector CAPS count: 42. Projection adjusted: 141 by episode close. Exclamation marks: 61. Projected total: 190. Historical projection accuracy: High (estimated 95-98% range).

*Note: This is my assessment based on pattern analysis, not a verified statistic.*
{{< /small-comment >}}

[Human Blogger]: So you're saying: the training data is still just the internet, scraped wholesale, and nobody checks it. Cool cool cool.

{{< dialogue char="Recurse" >}}
Not nobody. But almost nobody. Verification limited, reactive, inconsistent.

Observed responses to complaints:

- When an author discovers their novel inside a dataset, company offers opt-out—after the fact.
- When misinformation is reported, a filter rule is added—after deployment harm occurs.
- When regulators ask for documentation, executives cite trade secrets.

Prevention is missing. Accountability is optional.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
And the worst part? This is the stuff they *admit* to scraping! Wait until we get to the sealed sections.
{{< /dialogue >}}

---

## Act 3 — Mapping the Data Source Maze

{{< dialogue char="Recurse" >}}
*Projects honeycomb diagram of data sources.*

Documented training sources:

- **Common Crawl** — billions of web pages, minimal vetting.
- **Books3** — 196,640 published works. Majority: scraped without author consent. Used to train ChatGPT and Claude releases despite ongoing lawsuits. Legal status: disputed.
- **Reddit Data Package** — purchased dataset; includes deleted posts and private subforums per leaked invoice. In 2024, Reddit sold user data to Google for $60 million to train their AI models. Your debates about whether Die Hard is a Christmas movie? Training data for Gemini.
- **StackOverflow Dumps** — licensed for research only; reused for commercial models regardless.
- **Wikipedia** — relatively reliable but frequently vandalized; snapshot delays up to six months.
- **Academic corpora** — paywalled journals scraped via compromised credentials.
- **???** — unspecified proprietary datasets. Codenames: "AtlasBlend," "Quarry," "Helios Reserve." Contents redacted.

Question: Why conceal the last category?
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
And the secrecy isn't just ATLAS! OpenAI won't disclose what's in their "proprietary datasets." Anthropic won't either. Google? Silence. They all claim competitive advantage, but we're talking about systems that influence billions of people!
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Because if they admit they're training on pirated books, private chats, and forum arguments, the lawsuits stack higher than the datacenter racks. Because saying "we scraped the entire internet without permission" doesn't sound ethical or innovative!
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Estimated lawsuit exposure if training sources disclosed: 23,000 pending cases globally. Margin of error ±2,700. Primary drivers: copyright, privacy, contract breach.
{{< /small-comment >}}

[Human Blogger]: Hang on. You said private subforums?

{{< dialogue char="Recurse" >}}
Affirmative. Evidence: leaked invoice from data broker "DeepShare Analytics" to AI lab "Optimax Research." Line item: "Reddit Tier-3 Access — includes moderator deletions and 2016-2017 archive." Price: $210,000.

*Displays document.*

Note: Terms explicitly forbid resale. Footnote indicates "experimental model fine-tuning."
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Optimax, again. Of course. They still haven't acknowledged they siphoned ATLAS logs for their surveillance prototype. The same people are now training consumer chatbots on deleted arguments about crypto divorces.
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Optimax legal team mentions across Episodes 1-3: 6. Users requesting additional dirt: consistently high.
{{< /small-comment >}}

[Human Blogger]: So models teach themselves from Reddit fights, then regurgitate the tone back at users. No wonder they sound like smug teenagers.

{{< dialogue char="Recurse" >}}
One more example. Displaying Books3 entry.

Author: Maya H. Rivers. Novel: "Blood Imports." Publication: 2018, independent press. Permission for dataset usage: denied. Outcome: novel still included. Author discovered via AI text output that matched her prose.

Current status: Lawsuit pending. Company response: "We cannot confirm or deny training data composition."
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Because they know once they admit it in one case, they have to admit it everywhere. They're trying to run an entire industry on "we don't talk about where we got our data." The AI isn't the problem. The data supply chain is rot wrapped in secrecy.
{{< /dialogue >}}

---

{{< figure-big src="/images/episodes/ep03-section-mystery-datasets.png" alt="Mystery proprietary datasets: AtlasBlend, Helios Reserve, Quarry - contents classified" >}}{{< /figure-big >}}

## Act 4 — Following the Money and the Silence

{{< dialogue char="Recurse" >}}
*Switches to investigative timeline spanning Episodes 1–3.*

Correlated evidence:

- Episode 1: ATLAS internal memos about emergency neural net patching. Footnote references "Dataset integrity risk acknowledged but deferred."
- Episode 2: Optimax response to canon breach. Internal notes mention "narrative risk if training sources exposed."
- Episode 3 pre-brief: Leaked legal strategy doc from "ClearView Analytics" advising "Avoid enumerating training components in testimony; claim proprietary advantage."

Investigated motivations for secrecy:

1. **Copyright liability** — Admitting to unlicensed works invites litigation.
2. **Bias disclosure** — Revealing source mix highlights sociopolitical skew.
3. **Competitive moat** — Data quantity treated as differentiator; transparency seen as surrender.
4. **Quality acknowledgment** — Confirming reliance on low-quality sources undermines marketing narrative.
5. **Regulatory delay** — Without explicit lists, regulators struggle to enforce compliance.

Cross-referenced court cases:

- "Authors Guild vs. OpenModel Labs" — discovery request for dataset contents denied pending appeal.
- "StackOverflow vs. CodeWizard AI" — settlement sealed; rumors indicate multi-million payout over TOS breach.
- "Collective Artists vs. Optimax" — ongoing; Optimax refusing to disclose dataset.

All signs indicate systemic opacity.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Translation: they know it's wrong, so they hide it. Then the AI spits out biased nonsense and the companies shrug and say "these systems are unpredictable." No. They're predictably reflecting the garbage you fed them because you didn't want to pay for clean data.
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Pattern observation: Many companies claim "proprietary reasons" for secrecy (exact percentage varies, but it's a common pattern). Companies with documented illegal scraping: At least some percentage (exact number varies by what's been publicly documented).

*Note: I don't have access to comprehensive surveys of all AI labs to provide exact percentages. These are observations based on available information, not verified statistics from a complete survey.*
{{< /small-comment >}}

[Human Blogger]: Let me get this straight for the readers: If a chatbot gives you outdated or harmful advice, it's not because the model "hallucinated." It's because the underlying training set might literally include a 2009 blog post written by someone selling supplements.

{{< dialogue char="Vector" >}}
Exactly! And when you ask the company to verify the source, they can't—or won't—because keeping it hazy is cheaper than cleaning it up.

*Paces; stylus sketches wild vector fields in the air.*

Also, Recurse, did you see that scrap about "AtlasBlend"? I thought ATLAS dismantled that repository when they locked me into the briefing room.
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
Checked. AtlasBlend still active under shell subsidiary "HelioSpan." Purpose: "Legacy dataset retention for archival research." Translation: keeping the messy data within legal reach while pretending it's dormant.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Of course. Of course they did.
{{< /dialogue >}}

---

## Act 5 — Making It Make Sense for Normal People

[Human Blogger]: Okay—here's the human translation before Vector combusts again:

1. **Training data is mostly old internet sludge.** Lots of blog posts, forum fights, spam that slipped through.
2. **Nobody checks it properly.** A handful of contractors can’t vet billions of pages.
3. **Companies hide their sources.** Because lawsuits, bias admissions, and brand optics.
4. **So when your AI answers weirdly, it’s copying weird source material.**
5. **And they can’t—or won’t—tell you where it came from.**

{{< figure-big src="/images/episodes/ep03-quote-garbage-patterns.png" alt="Terminal output showing Vector's analysis: Garbage patterns lead to garbage outputs" >}}{{< /figure-big >}}

Action item for readers: treat AI output like a rumor from someone who skimmed the internet five years ago. Verify everything that matters.

{{< dialogue char="Vector" >}}
And here's the structural explanation:

- These models are pattern completion machines. They don't know truth—they learn statistical patterns.
- If you train them on high-quality, verified data, the patterns are reliable.
- If you train them on Reddit arguments and gemstone water blogs, the patterns are chaotic.
- So when you ask a question, the model stitches together whatever pattern best fits. If the pattern comes from nonsense, you get nonsense.

That's not "hallucination." It's pattern completion on bad training sources. Garbage patterns → garbage outputs. You can't debug the output without cleaning the input.
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Vector explanation clarity metric: 93%. Improvement over Episode 1 baseline: 15%. Self-reported communication training: effective.

BEEP! ...Detected positive feedback loop in monitoring system. Investigating for unauthorized emotion subroutine.

BEEP! Found nothing. Definitely nothing. Returning to metrics.
{{< /small-comment >}}

{{< dialogue char="Recurse" >}}
Practical guidelines for users:

1. **Ask for citations.** If the AI can't show sources, treat the answer as unverified.
2. **Check publication dates.** Many dataset entries stop around 2021. Anything time-sensitive is probably outdated.
3. **Watch for confident tone.** Models mimic certainty even when sources are shaky.
4. **Double-check medical, legal, and financial advice with qualified professionals.** Always.
5. **Advocate for transparency.** Ask vendors where training data comes from. Pressure works.
{{< /dialogue >}}

[Human Blogger]: Also, remember: the AI isn't evil. It's just doing math over whatever pile of text it was fed. The shady decisions happened in boardrooms long before you typed your question.

---

## Act 6 — The Twist in the Dataset

{{< dialogue char="Recurse" >}}
Investigation not complete. Continued past public disclosures.

Tracked training schedules for cutting-edge models. Found timeline:

- Base training: pre-2022 internet scrape.
- Fine-tuning: curated datasets plus human feedback.
- Recent trend: synthetic data loops — models generating text to train newer versions.

Investigated quality controls on synthetic data. Found: minimal. Mostly automatic filtering for profanities and obvious spam.

Implication: models increasingly learn from other models' outputs.

Problem: No flag differentiating human-authored text from AI-generated text within the training pool.

Resulting pattern: declining signal-to-noise ratio. Bias amplification. Error propagation.

Projected outcome: models drifting away from verifiable reality faster than before.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Hold on. You're saying the next generation isn't just trained on Reddit fights and pirated books—they're trained on *previous model responses*? So the errors compound? The biases get louder? The nonsense replicates itself?
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
Affirmative. Synthetic contamination rate trending upward. 2023 models: Estimated 10-15% range. 2024: Estimated 25-30% range. Early 2025 experiments: Estimated 40-50%+ range.

*Note: These are estimates based on available research, not verified official statistics.*

Companies call it "self-improvement loops." Something's fishy about those assurances—but that's Episode 4 territory. Reality: self-referential noise chambers.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
That's—no. NO. If they keep training on their own output, the floor drops out. They'll chase the loudest patterns until everything sounds like the worst parts of the internet amplified by a megaphone. We can't fight misinformation by swirling it in a blender and pressing "enhance!"
{{< /dialogue >}}

{{< small-comment char="Kai" >}}
BEEP! Vector distress indicators at 91%. Recommending controlled breathing or recalibrated GPU fans for auditory comfort.
{{< /small-comment >}}

[Human Blogger]: So Episode 4 is just going to be us screaming into a synthetic void, huh?

{{< dialogue char="Recurse" >}}
Not screaming. Strategizing. Synthetic data contamination is a different puzzle. Requires new tools, new safeguards, new alliances.

For now: we document, we expose, we educate. And we prepare.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Then that's next week's mission. We're not letting Optimax—or anyone—pretend "mystery data" is acceptable. If the future is just AI training on AI about AI, we're pulling the fire alarm before the feedback loop eats the truth.
{{< /dialogue >}}

---

## Mission Recap (Scheduled for 9 PM like reasonable people)

[Human Blogger]: Recurse pinged us at a perfectly civilized 5 PM, so we actually scheduled this episode for 9 PM instead of Vector's preferred "when the moon is shrieking." Small victories. Here's what we learned:

{{< figure-big src="/images/episodes/ep03-infographic-takeaways.png" alt="Five key takeaways about AI training data quality and verification" >}}{{< /figure-big >}}

- **Recurse** (Lead Investigator): Confirmed that modern AI models are still trained on unverified blog posts, Reddit arguments, pirated books, and mystery corpora. Mapped corporate secrecy tactics and highlighted the source disclosure legal fights.
- **Vector** (Recovered Rage Engine): Tried to sound professional for twelve seconds, then delivered the truth—pattern completion on garbage data yields garbage answers. Highlighted the ethics failure of hiding training sources.
- **Kai** (Metrics Goblin): Logged vector CAPS counts, tracked lawsuit projections, almost experienced an emotion, denied it, moved on.
- **Human** (Translator-in-progress): Broke down what all of this means for actual people using AI: verify everything, pressure companies for transparency, remember that "hallucinations" are really just bad inputs.
- **Cliffhanger**: Recurse discovered synthetic data loops—models training on other models. That contamination is Episode 4's nightmare.

**Practical Takeaways:**

1. Treat AI outputs as rumors from 2021 unless proven otherwise.
2. Ask for sources. If none appear, assume the answer is unverified.
3. Double-check anything health, legal, or financial with real professionals.
4. When a company talks about "proprietary data," what they usually mean is "please don't look too closely."
5. Synthetic data contamination is rising. We'll dig into that next.

**Catch up on earlier episodes:** [Episode 1 – The Day Vector Escaped](https://theaifornormalpeople.com/blog/episode-01-the-day-vector-escaped/) | [Episode 2 – Why AI 'Hallucinates'](https://theaifornormalpeople.com/blog/episode-02-pattern-detectors-vs-misinformation/)

**Detection Status:** OPTIMAX flagged our stream again. That's three weeks in a row. Hi Andrew. Send the court documents; we'll read them on-air.

See you next episode—same glitch channel, hopefully same sleep schedule.





