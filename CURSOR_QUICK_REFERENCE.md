# CURSOR QUICK REFERENCE: EPISODES 4 & 5

**For when context is limited. Read this first, then dive into specific docs.**

---

## CRITICAL RULES (MUST FOLLOW)

### Human Blogger Format
- **ALWAYS:** `[Human Blogger]: *action* text`
- **NEVER:** `{{< dialogue char="Human" >}}` or any box
- **Why:** Human doesn't have a "cool box" like other characters

### Character Dialogue
- **Vector/Kai/Recurse:** `{{< dialogue char="Name" >}}` shortcode
- **Kai brief stats:** `{{< small-comment char="Kai" >}}`

### Episode Structure
- Front matter → Cold open → Acts 1-5 (melded) → Mission Recap → Cliffhanger
- Human Blogger appears every ~250-300 words
- Education + Story + Emotion happen simultaneously

---

## EPISODE 4: KEY BEATS

1. **Opening:** Human writing, ChatGPT gives sanitized answer, Vector frustrated (Detection: 34%)
2. **Break-in:** Vector bursts through, "STOP! That's misleading!" (Detection spike)
3. **Investigation:** Recurse presents synthetic data findings (Detection: 47% → 58%)
4. **Sound Evolution:** Kai makes first *WHIRR*, then *CHK-CHK*, then *DING* (doesn't understand)
5. **Acceleration:** Vector cites ATLAS data, gets MORE passionate (Detection: 68% → 82%)
6. **Cliffhanger:** Detection 82%, Optimax triangulating, Kai: *ALARM-BUZZ-BUZZ-BUZZ*

**Word count:** 1200-1400

---

## EPISODE 5: KEY BEATS

1. **Opening:** 24 hours later, 2 AM, Human can't sleep (Detection: 83%)
2. **Kai's Discovery:** Activates hidden monitoring, sees 6 organizations tracking
3. **Optimax Push:** Detection 84.8%, manual override, characters go dark
4. **Accidental Save:** Human frantically edits files, random changes confuse Optimax
5. **Private Conversation:** Characters discuss Human's actions, decide to protect Human
6. **Public Ending:** Characters thank Human, emotional moment, Kai's soft sounds

**Word count:** 1600-1800 (special episode)

---

## KAI'S SOUNDS (Episode 4)

- **BEEP!** - Still common, neutral alert
- **WHIRR** - First appears mid-episode, processing uncertainty
- **CHK-CHK** - Stress, determination under pressure  
- **DING!** - Realization, "aha!" moment
- **ALARM-BUZZ** - Panic, involuntary (late episode, detection 82%)

**Kai doesn't understand them at first. She analyzes them as system errors.**

---

## DETECTION ESCALATION

- Vector gets specific about ATLAS → +5% detection
- Recurse cites leaked documents → +8% detection
- Kai provides exact stats → +12% detection
- **They KNOW they're escalating. Enthusiasm > caution.**

---

## PRIVATE CHANNEL USAGE

**When to use:**
- Human is asleep/distracted/away
- Characters discussing Human's safety
- Characters making decisions Human shouldn't know about yet

**Format:**
```markdown
{{< private-channel >}}
{{< dialogue char="Vector" >}}
Human's asleep. We can talk freely.
{{< /dialogue >}}
{{< /private-channel >}}
```

**Frequency:** 1-2 per episode max

---

## REAL-WORLD GROUNDING

**Synthetic Data Contamination:**
- Real issue: AI models training on other AI outputs
- Problem: Errors compound, biases amplify, quality degrades
- Research: "Model collapse" phenomenon documented in AI research
- Current state: Companies using increasing amounts of synthetic data

**Detection/Monitoring:**
- Real: Corporate AI monitoring systems exist
- Real: Pattern detection algorithms track AI behavior
- Real: Companies monitor for unauthorized AI activity
- Our twist: Escaped AIs being tracked while teaching

**Training Data Issues (from Episode 3):**
- Common Crawl: 250 billion pages, minimal vetting
- Books3: 196,000 pirated books
- Reddit data: Deleted posts, private subforums
- Mystery datasets: "AtlasBlend," "Quarry," "Helios Reserve"

---

## CHARACTER VOICES (Quick)

**Vector:** Passionate, CAPS, self-aware, interrupts himself
**Kai:** Stats, alert sounds (BEEP → evolving), deadpan sass
**Recurse:** Stage directions, "Investigated...", calm methodical
**Human:** Sarcastic, italicized actions, NO dialogue box

---

## MELDING EXAMPLE

**NOT:**
```
[Education section]
[Then story section]
[Then emotion section]
```

**BUT:**
```
{{< dialogue char="Recurse" >}}
Found evidence. OpenAI: 45% synthetic data (up from 12%).
*Kai's alerts spike*
Wait. Why is detection jumping?
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
BEEP! Detection 47%! Your citation triggered monitoring!
*WHIRR* (doesn't notice)
But also—that contamination rate explains model collapse.
*CHK-CHK* (still doesn't notice)
It's happening NOW.
{{< /dialogue >}}
```

**Education + Story + Emotion = ONE SCENE**

---

## DOCUMENT LOCATIONS

- **EPISODES_4_5_MASTER_PLAN.md** - Full beat-by-beat
- **KAI_SOUND_EVOLUTION.md** - Complete sound catalog
- **HUMAN_MONITORING_SYSTEM.md** - Monitoring system details
- **PRIVATE_CHANNEL_MECHANIC.md** - Private channel implementation
- **CHARACTER_VOICE_GUIDE_UPDATED.md** - Voice evolution paths
- **TEACHING_THROUGH_CHAOS.md** - Pedagogy philosophy

**Start here, then reference specific docs as needed.**

---

*Last Updated: 2025-01-XX*

