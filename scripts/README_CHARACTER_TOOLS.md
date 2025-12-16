# Character Voice & Story Tools
**Production tools for showrunning Episodes 12-50**

---

## 🎯 Tools Created

### 1. Character Voice Consistency Checker ✅
**File:** `check-character-voice.ps1`

**What it does:**
- Validates character dialogue matches defined voice
- Checks catchphrase usage (frequency, context)
- Validates speech patterns
- Checks for banned phrases
- Validates evolution stage appropriateness
- Outputs detailed report with stats

**Usage:**
```powershell
.\scripts\check-character-voice.ps1 -EpisodeFile "content\blog\episode-12-*.md" -EpisodeNumber 12
```

**Output:**
- ✅ PASS: No issues
- ❌ ISSUES: Must fix (banned phrases, catchphrase spam)
- ⚠️ WARNINGS: Should review (missing catchphrases, evolution concerns)

**Example Output:**
```
=== CHARACTER VOICE CONSISTENCY CHECK ===
Episode: episode-11-*.md
Episode Number: 11
Evolution Stage: mid
Word Count: 1482

⚠️  WARNINGS:
  • Recurse: Says 'Three questions:' but found 5 question marks. Should be exactly 3.
  • Vector: No 'FASCINATING!' found. This might be intentional (evolution), but verify voice is still enthusiastic.

=== CHARACTER STATS ===
Vector:
  Dialogue blocks: 6
Kai:
  Dialogue blocks: 3
  Evolved sounds: 1
Recurse:
  Dialogue blocks: 2
  Catchphrases:
    • 'Three questions:': 2
```

---

### 2. Story Thread Tracker ✅
**File:** `STORY_THREAD_TRACKER.md`

**What it does:**
- Tracks 5 main story threads across Episodes 12-50
- Shows cause-and-effect chains
- Prevents dropped threads
- Visual tracking of episode connections

**Threads Tracked:**
1. Vector's Teaching Evolution (Ep 12-28)
2. Kai's Recognition (Ep 12-24)
3. Recurse's Trust (Ep 12-40)
4. Human's Growth (Ep 12-48)
5. Meta-Narrative (Ep 15-50)

**Usage:**
- After revising each episode: Update "What Happened"
- Before revising next: Check "What's Next" for continuity
- Mark status: ✅ Planned, ⏳ Pending, ✅ Complete, ❌ Dropped

---

### 3. Running Gag Evolution Tracker ✅
**File:** `RUNNING_GAG_TRACKER.md`

**What it does:**
- Tracks running gags across episodes
- Shows gag evolution over time
- Prevents gag spam or stagnation
- Plans major gag moments

**Gags Tracked:**
1. Doctor Vector (Ep 12-28, resolves Ep 28)
2. Kai's Warnings Ignored (Ep 12-24, resolves Ep 24)
3. Recurse's Three Questions (Ep 12-50, consistent)
4. Human's Control (Ep 12-50, evolves)

**Usage:**
- After revising: Mark if gag appears
- Check frequency: Not too much, not too little
- Track evolution: Gags should evolve, not just repeat

---

### 4. Batch Revision Template ✅
**File:** `BATCH_REVISION_TEMPLATE.md`

**What it does:**
- Standardized prompt for episode revision
- Ensures consistency across batches
- Includes all requirements (voice, threads, gags, SEO)

**Template Includes:**
- Episode type & intensity
- Educational goal
- Character beat (if applicable)
- Story threads (cause-and-effect)
- Running gags
- Structure outline
- Character voice requirements
- SEO requirements
- Quality checklist

**Usage:**
- Fill template for each episode
- Use with Cursor master context
- Validate after revision

---

## 🚀 Workflow

### Step 1: Prepare Episode
1. Check Story Thread Tracker for cause-and-effect
2. Check Running Gag Tracker for gag usage
3. Fill Batch Revision Template

### Step 2: Revise Episode
1. Use Cursor with master context
2. Apply template requirements
3. Maintain educational core
4. Add character personality

### Step 3: Validate
1. Run character voice checker
2. Verify story threads connected
3. Check running gag frequency
4. Quality checklist pass

### Step 4: Update Trackers
1. Update Story Thread Tracker
2. Update Running Gag Tracker
3. Mark episode complete

---

## 📋 Next Steps

### This Week:
1. ✅ Build tools (DONE)
2. ⏳ Test on Episode 11 (validate tools work)
3. ⏳ Revise Episode 12 (first test of new approach)
4. ⏳ Validate Episode 12 (run all tools)
5. ⏳ Ship Episode 12 (publish to test real-world)

### Week 2:
1. Revise Episodes 13-15
2. Refine based on Episode 12 learnings
3. Establish rhythm

---

## 💡 Tips

1. **Run voice checker FIRST** - Catches issues early
2. **Update trackers AS YOU GO** - Don't wait until end
3. **Use templates consistently** - Ensures quality
4. **Validate before moving on** - Fix issues immediately
5. **Test on Episode 12** - Validate approach before batching

---

## 🔧 Integration

These tools work together:
- **Voice Checker** → Validates character consistency
- **Thread Tracker** → Ensures cause-and-effect
- **Gag Tracker** → Prevents spam/stagnation
- **Revision Template** → Standardizes process

All tools reference:
- Character YAML files (`data/characters/*.yaml`)
- Master context (`THE_NORMAL_PEOPLE_COMPLETE.md`)
- Episode roadmap (from master plan)

---

**Ready to start Episode 12 revision!** 🎬

