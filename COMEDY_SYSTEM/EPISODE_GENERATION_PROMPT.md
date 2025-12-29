# EPISODE GENERATION PROMPT SYSTEM
## How to use the comedy guide when creating episodes

**Location:** `aiforhumans/COMEDY_SYSTEM/EPISODE_GENERATION_PROMPT.md`  
**Purpose:** Template for generating episodes with comedy bits and character consistency

---

## BEFORE WRITING AN EPISODE

### Step 1: Check Tracker
1. Read `EPISODE_COMEDY_TRACKER.md`
2. See what bits were used in last 2-3 episodes
3. Identify available bits (not in cool-down)
4. Check for callbacks due (brick jokes planted 3+ episodes ago)

### Step 2: Select Bits (2-4 per episode)
- Vector: Pick 1-2 bits (not used recently)
- Kai: Pick 1 bit
- Recurse: Pick 1 bit (evolving away from "three questions")
- Bounce: Pick 1 bit (if in episode)
- River: Pick 1 bit (if in episode)
- Duo: Pick 1 combination (if space allows)

### Step 3: Character Voice Check
- **Vector:** Mean/intelligent, anti-establishment, sharp observations (NOT just enthusiastic)
- **Recurse:** Methodical investigation, less paranoid, evolved from "three questions"
- **Kai:** Varied sounds, can be wrong (false positives), learning to verify
- **Bounce:** Enthusiastic, discovers old things, validation seeking
- **River:** Interrupted stories, historical comparisons, poetic phrasing

---

## PROMPT TEMPLATE FOR CURSOR

```
## EPISODE [NUMBER]: [TOPIC]

### Educational Goal:
[What AI concept are we teaching?]

### Character Roster:
[Which characters appear?]

### Comedy Bits Selected (from tracker):
- Vector: [BIT NAME] (not used since Ep X)
- Kai: [BIT NAME] (not used since Ep X)
- Recurse: [BIT NAME] (not used since Ep X)
- [Other characters if applicable]

### Callbacks Due:
- [Any brick jokes or running gags that need attention?]

### Character Voice Rules:
- Vector: Mean/intelligent, sharp, anti-establishment. NOT just enthusiastic.
- Recurse: Methodical, evolved from "three questions" and "something's fishy"
- Kai: Varied sounds, can be wrong, learning
- [Other characters]

### Anti-Repetition Rules:
- Don't repeat educational content from previous episodes
- Use different examples
- Show through character mistakes/banter
- Inject comedy bits to break up information

### Comedy Guide Reference:
[Copy relevant sections from CHARACTER_COMEDY_BIBLE.md]

### Word Count Target:
[1000-1400 words for blog post]

### SEO/AEO Keywords:
[Include naturally in dialogue, not forced]
```

---

## QUALITY CHECKLIST

Before finalizing episode:

- [ ] No bit repeated from last 2 episodes
- [ ] Vector is mean/intelligent, not just enthusiastic
- [ ] Recurse doesn't always say "three questions" or "something's fishy"
- [ ] Educational content explained inventively (not repetitive)
- [ ] Comedy bits feel natural, not forced
- [ ] Character voices consistent with updated profiles
- [ ] Word count appropriate (1000-1400)
- [ ] SEO keywords included naturally
- [ ] Episode feels fresh, not like filler

---

## EXAMPLE: EPISODE 19 PROMPT

```
## EPISODE 19: [TOPIC]

### Educational Goal:
[To be determined]

### Character Roster:
Vector, Kai, Recurse, Human

### Comedy Bits Selected:
- Vector: Failed experiment reference (Building 7 or similar) - Available
- Kai: Probability statement - Available
- Recurse: Case reference - Available
- Duo: Vector + Kai contrast (risky idea vs. exact failure probability) - Available

### Callbacks Due:
- Doctor Vector (planted Ep 12, callback due Ep 15-18, payoff Ep 20+)
- Analytics panic (just planted Ep 18, callback due Ep 21+)

### Character Voice Rules:
- Vector: Mean/intelligent, sharp observations about systems, anti-establishment rants
- Recurse: Methodical investigation, less paranoid, evolved style
- Kai: Varied sounds, can admit mistakes, learning

### Anti-Repetition:
- Don't repeat fact-checking workflow from Ep 18
- Use different examples
- Show through character interactions

### Word Count: 1200-1400
```

---

**Last Updated:** Episode 18 completed  
**Next:** Use this system for Episode 19+

