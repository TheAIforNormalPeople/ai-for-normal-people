# 📝 DECISIONS LOG - What We Decided and Why

**Purpose:** Remember why we made choices, so we don't re-debate them later.

---

## December 22, 2025

### Decision: Use HTTP Request for Twitter (Not Community Node)
**What:** Changed Twitter node from `n8n-nodes-base.twitter` to HTTP Request
**Why:** 
- Community nodes require installation (breaks easily)
- HTTP Request is built-in (more reliable)
- Works the same way
- No maintenance needed
**Status:** ✅ Implemented in `multi-platform-social-json-tracking-FIXED.json`

### Decision: Archive Sunny Project
**What:** Stop using Sunny project for character generation
**Why:**
- We create characters manually now (better quality)
- It was causing confusion
- Not aligned with current workflow
- Focus on manual creation
**Status:** ⏳ Needs archiving (not done yet)

### Decision: Clean Up n8n Folder
**What:** Reduce 80+ files to ~5 essential files
**Why:**
- Too many files = confusion
- Most are outdated/debug files
- Hard to find what matters
- Focus on what works
**Status:** ⏳ Plan created, needs execution

### Decision: Improve Vector Prompts
**What:** Made social media prompts more specific to Vector's voice
**Why:**
- Generic prompts = generic tweets
- Vector has specific voice (FASCINATING!, ALL CAPS, etc.)
- Better tweets = more engagement = more money
**Status:** ✅ Updated in workflow

### Decision: Create Context System
**What:** Three documents (MASTER_VISION, CURRENT_FOCUS, DECISIONS_LOG)
**Why:**
- Context gets lost between conversations
- Goals get condensed
- Vision gets forgotten
- Need persistent reference
**Status:** ✅ Created

---

## Key Principles (From Decisions)

1. **Simple > Complex** - Use built-in tools, avoid community packages
2. **Manual > Automated** - Better quality, more control
3. **Clean > Cluttered** - Fewer files, easier to find things
4. **Specific > Generic** - Better prompts = better results
5. **Context > Memory** - Document decisions, don't rely on memory

---

## What We're NOT Doing

- ❌ Using Sunny project (archived)
- ❌ Installing community nodes (use HTTP Request)
- ❌ Keeping 80+ documentation files (clean up)
- ❌ Generic prompts (use specific character voices)
- ❌ Complex setups (keep it simple)

---

**Add new decisions here as we make them.**

