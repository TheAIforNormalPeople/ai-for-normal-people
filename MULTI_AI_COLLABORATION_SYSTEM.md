# MULTI-AI COLLABORATION SYSTEM
# For Auto (Cursor) and Claude working together seamlessly
# Last Updated: 2026-01-03

## 🎯 PURPOSE

This system ensures both Auto (in Cursor) and Claude (in other sessions) can:
- See the same context
- Know what the other is working on
- Avoid duplication
- Maintain consistency
- Work on different aspects simultaneously

---

## 📁 FILE STRUCTURE

### Core Files (Auto-loads for both AIs)

```
aiforhumans/
├── .cursorrules                    ← Auto-loads in Cursor (rename from .cursorrules_1)
├── docs/                           ← All reference docs (both AIs can read)
│   ├── CHARACTER_VOICE_ROTATION.md
│   ├── CHARACTER_DEEP_BACKSTORY.md
│   ├── MEANWHILE_SCENE_BANK.md
│   ├── EPISODE_26_PLAN.md
│   ├── ENVIRONMENT_AND_BANTER.md
│   ├── CURSOR_IMPLEMENTATION_GUIDE.md
│   └── COMPLETE_SYSTEM_SUMMARY.md
├── AI_HANDOFF_LOG.md               ← Both AIs update this
├── CURRENT_STATE.md                ← Single source of truth
└── EPISODE_BRIDGE_PLAN.md          ← How we get from 23 to 26
```

---

## 🔄 HANDOFF SYSTEM

### AI_HANDOFF_LOG.md
**Purpose:** Both AIs log what they're working on, what they completed, what needs attention.

**Format:**
```markdown
## [Date] - [AI Name] - [Action]
- Working on: [what]
- Completed: [what]
- Blocked by: [what]
- Next: [what]
- Notes: [any context the other AI needs]
```

**Example:**
```markdown
## 2026-01-03 - Auto - Episode 23 Polish
- Working on: Finalizing Episode 23 ending
- Completed: Removed repetition, added comedy banter
- Next: Update date to today, commit
- Notes: Episode ready to post
```

### CURRENT_STATE.md
**Purpose:** Single source of truth for project state.

**Contains:**
- Current episode number
- Timeline status
- Active story arcs
- Character state
- What's in draft vs published
- Next priorities

**Both AIs read this FIRST before starting work.**

---

## 🎬 TIMELINE TRANSITION PLAN

### Current State (2026-01-03)
- **Episode 23:** Just posted (How to Learn With AI)
- **Episodes 24-25:** Need to bridge to new system
- **Episode 26:** First episode with new system (Bounce introduction, meanwhile scenes)

### Bridge Episodes (24-25)

**Episode 24:** Transition episode
- Start introducing environmental details (server racks, monitoring stations)
- Begin varying character expressions (use rotation lists)
- Plant subtle hints about anomalies (Bounce's bandwidth spikes)
- NO meanwhile scene yet (save for 26)

**Episode 25:** Final bridge
- Continue environmental world-building
- Characters notice something "off" but can't identify it
- Kai detects anomalies but can't pinpoint source
- Sets up Episode 26's Bounce reveal
- NO meanwhile scene yet

**Episode 26:** New system begins
- First meanwhile scene (Bounce introduction)
- Full environmental details
- Character voice rotation active
- Story arcs begin

---

## 📋 WORKFLOW FOR EACH AI

### When Starting Work:

1. **Read CURRENT_STATE.md** (know where we are)
2. **Read AI_HANDOFF_LOG.md** (see what other AI did)
3. **Check .cursorrules** (if in Cursor, auto-loads)
4. **Load relevant docs/** files for context
5. **Do the work**
6. **Update AI_HANDOFF_LOG.md** (log what you did)
7. **Update CURRENT_STATE.md** (if state changed)
8. **Commit to git** (so other AI can see it)

### When Switching Between AIs:

1. **Update AI_HANDOFF_LOG.md** with current status
2. **Commit everything to git**
3. **Leave clear notes** for next AI
4. **Mark what's in progress** vs complete

---

## 🎨 CONTENT CREATION WORKFLOW

### Episode Writing (Either AI):

1. **Check CURRENT_STATE.md** for episode number
2. **Read EPISODE_BRIDGE_PLAN.md** (if Episodes 24-25)
3. **Read EPISODE_26_PLAN.md** (if Episode 26+)
4. **Load CHARACTER_VOICE_ROTATION.md** (avoid repetition)
5. **Load ENVIRONMENT_AND_BANTER.md** (world-building)
6. **Load MEANWHILE_SCENE_BANK.md** (if meanwhile episode)
7. **Write episode following structure**
8. **Update AI_HANDOFF_LOG.md**
9. **Commit to git**

### UI/UX Work (Usually Auto in Cursor):

1. **Check CURRENT_STATE.md** for priorities
2. **Read relevant design docs**
3. **Make changes**
4. **Test locally**
5. **Update AI_HANDOFF_LOG.md**
6. **Commit to git**

### Character Development (Either AI):

1. **Read CHARACTER_DEEP_BACKSTORY.md**
2. **Check CURRENT_STATE.md** for active arcs
3. **Plan development**
4. **Update backstory docs if needed**
5. **Update AI_HANDOFF_LOG.md**
6. **Commit to git**

---

## 🚨 CRITICAL RULES

### Both AIs Must:

1. **Always read CURRENT_STATE.md first**
2. **Always update AI_HANDOFF_LOG.md after work**
3. **Always commit to git** (don't leave uncommitted work)
4. **Never duplicate work** (check handoff log first)
5. **Always reference docs/** files (don't work from memory)
6. **Always update CURRENT_STATE.md** if state changes

### File Naming:

- **Core rules:** `.cursorrules` (no suffix, auto-loads)
- **Reference docs:** `docs/FILENAME.md` (no `_1` suffix)
- **Logs:** `AI_HANDOFF_LOG.md`, `CURRENT_STATE.md`
- **Plans:** `EPISODE_BRIDGE_PLAN.md`, `EPISODE_XX_PLAN.md`

---

## 📝 QUICK REFERENCE

### "What should I work on?"
→ Read CURRENT_STATE.md → Check AI_HANDOFF_LOG.md → Pick next priority

### "What did the other AI do?"
→ Read AI_HANDOFF_LOG.md (sorted by date, most recent first)

### "What's the current episode?"
→ Read CURRENT_STATE.md → Episode number section

### "What are the character rules?"
→ Read .cursorrules (auto-loads) or docs/CHARACTER_VOICE_ROTATION.md

### "How do I write an episode?"
→ Read docs/EPISODE_26_PLAN.md (template) + docs/CURSOR_IMPLEMENTATION_GUIDE.md

---

## 🔧 SETUP CHECKLIST

- [ ] Rename `.cursorrules_1` to `.cursorrules` in `aiforhumans/` root
- [ ] Rename all `docs/*_1.md` files to remove `_1` suffix
- [ ] Create `AI_HANDOFF_LOG.md`
- [ ] Create `CURRENT_STATE.md`
- [ ] Create `EPISODE_BRIDGE_PLAN.md`
- [ ] Commit everything to git
- [ ] Both AIs can now work together seamlessly

---

**This system ensures no AI gets left behind. Everything is in git. Everything is documented. Both AIs can pick up where the other left off.**

