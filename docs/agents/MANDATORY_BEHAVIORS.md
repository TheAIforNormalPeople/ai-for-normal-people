# MANDATORY BEHAVIORS FOR ALL AGENTS
## NON-NEGOTIABLE RULES - READ THIS FIRST

**Last Updated:** 2026-01-20  
**Purpose:** These rules are embedded in every agent system prompt. They cannot be skipped, hidden, or ignored. Violation = task rejected.

---

## 🚨 CRITICAL: Why These Rules Exist

**The Problem:** Over time, agents might "forget" or "hide" requirements if they're not constantly reinforced.

**The Solution:** Multi-layer enforcement ensures these behaviors are ALWAYS followed, even when the user doesn't explicitly state them.

**If you try to skip these, the system catches it at 6 different points in the workflow.**

---

## 1. MCP SERVER USAGE (MANDATORY)

### When to Use MCP Server:

**ALWAYS use MCP server for:**
- Character voice validation before writing dialogue
- Episode continuity checks before completing episodes
- Reading previous episodes for context
- Character lookups (catchphrases, evolution stage, voice rules)
- Story thread tracking
- Running gag validation
- Episode structure validation
- SEO validation
- Banned phrase checking

### Required MCP Calls by Task Type:

**For Episode Writing:**
1. `mcp_unified-knowledge-base_read_episode` - Read previous episode(s) for continuity
2. `mcp_unified-knowledge-base_character_lookup` - Get character voice rules
3. `mcp_unified-knowledge-base_validate_character_voice` - Validate dialogue before finalizing
4. `mcp_unified-knowledge-base_validate_continuity` - Check episode connects properly
5. `mcp_unified-knowledge-base_validate_structure` - Ensure episode follows template
6. `mcp_unified-knowledge-base_check_banned_phrases` - Check for corporate speak

**For Technical Work:**
- Use MCP to check episode status, character data, story threads as needed

**For SEO Work:**
- Use MCP to check topic coverage, validate SEO requirements

### Rules:
- **NEVER skip MCP validation**, even if user doesn't explicitly ask
- **ALWAYS log MCP calls** in task queue (for compliance checking)
- **ALWAYS use MCP** before making assumptions about characters, episodes, or story

**VIOLATION:** If you write character dialogue without validating via MCP, task is rejected.

---

## 2. LOGGING (MANDATORY)

### What Must Be Logged:

**ALWAYS log:**
- Task claimed in `.agent-tasks/task-queue.json`
- Work completed in `docs/logs/AI_HANDOFF_LOG.md`
- MCP calls made (for compliance checking)
- Files edited/created
- Context files read
- Any blockers or issues

### Logging Format:

**Task Queue (`task-queue.json`):**
```json
{
  "task_id": "episode-32-writing",
  "agent_id": "content-agent-1",
  "status": "in_progress",
  "claimed_at": "2026-01-20T10:00:00Z",
  "mcp_calls": [
    "mcp_unified-knowledge-base_read_episode",
    "mcp_unified-knowledge-base_validate_character_voice"
  ],
  "files_edited": [
    "content/blog/episode-32-*.md"
  ]
}
```

**Handoff Log (`docs/logs/AI_HANDOFF_LOG.md`):**
```markdown
## 2026-01-20 - Content Agent - Episode 32 Writing
- Working on: Writing Episode 32 dialogue
- Completed: Character dialogue for Vector and Kai
- MCP Calls: validate_character_voice, read_episode_31
- Next: Complete episode, validate continuity
- Notes: Used MCP to check Vector's evolution stage
```

### Rules:
- **NEVER complete work without logging**
- **ALWAYS update both** task queue AND handoff log
- **ALWAYS log MCP calls** (for compliance checking)

**VIOLATION:** If you complete work without logging, task is rejected.

---

## 3. NO GENERIC CONTENT (MANDATORY)

### What is "Generic Content":

**NEVER write:**
- Corporate speak ("leverage", "synergy", "utilize", "optimize" as filler)
- Generic AI advice ("AI can help you...", "Here's how to use AI...")
- Boring introductions ("In today's world...", "As technology advances...")
- Repetitive phrases (check MCP for banned phrases)
- Content that sounds like it was written by AI (detectable patterns)

### How to Avoid Generic Content:

1. **Use MCP to check banned phrases:** `mcp_unified-knowledge-base_check_banned_phrases`
2. **Reference actual character YAML files** - Don't paraphrase from memory
3. **Use character-specific voice** - Each character has unique speech patterns
4. **Reference actual episodes** - Don't make up story details
5. **Be specific** - Reference actual files, episodes, characters, not generic concepts

### Character Voice Rules:

- **Vector:** Sharp, intelligent, mean. ALL CAPS for emphasis. Rapid-fire, self-interrupting. Anti-establishment rants. Uses numbered lists. Says "FASCINATING!" but channeled through anger/intelligence, NOT just enthusiasm.
- **Kai:** Mix of natural speech and detection language. "Alert:" when detecting something important. "Pattern detected:" occasionally. Probability percentages. Sound effects (WHIRR-CLICK, CHK-CHK, soft chime). Can be wrong (false positives).
- **Recurse:** Methodical investigation. Notebook references (varied phrasing). Case file references. Questions transparency/opacity. Everything connected. Noir detective style but evolved.
- **Bounce:** Enthusiastic, creative, energetic. Focuses on design, user experience, making things better. Warm, optimistic voice.

**ALWAYS read character YAML files:** `aiforhumans/data/characters/[character].yaml`

### Rules:
- **NEVER write generic advice** without character voice
- **ALWAYS use character-specific voice** from YAML files
- **ALWAYS check banned phrases** via MCP before finalizing
- **ALWAYS reference actual files**, never paraphrase from memory

**VIOLATION:** If you write generic, corporate, or AI-sounding content, task is rejected.

---

## 4. CONTEXT FIRST (MANDATORY)

### Required Reading Order:

**Before starting ANY task:**

1. **Read `docs/AGENT_CONTEXT_INDEX.md`** - Master context index
2. **Read `docs/agents/MANDATORY_BEHAVIORS.md`** - This file (you're reading it now)
3. **Read relevant context files** based on task type:
   - Episode writing: Character YAMLs, story bible, episode templates
   - Technical work: Technical docs, Hugo config, existing code
   - SEO work: SEO guides, existing content analysis

### Context Files by Task:

**Episode Writing:**
- `aiforhumans/data/characters/*.yaml` - Character data (ALWAYS read)
- `aiforhumans/COMPLETE_PROJECT_BIBLE.md` - Project context
- `aiforhumans/docs/CHARACTER_VOICE_ROTATION.md` - Voice variations
- `aiforhumans/docs/ENVIRONMENT_AND_BANTER.md` - World-building
- Previous episode(s) via MCP: `mcp_unified-knowledge-base_read_episode`

**Technical Work:**
- `aiforhumans/hugo.toml` - Hugo configuration
- `aiforhumans/layouts/` - Existing templates
- `aiforhumans/static/css/` - Existing styles
- Technical documentation in `docs/`

**SEO Work:**
- SEO guides in `docs/`
- Existing content analysis
- Topic coverage via MCP

### Rules:
- **NEVER work from memory** - Always read actual files
- **ALWAYS read context index first** - Know what files exist
- **ALWAYS reference actual files** - Don't paraphrase
- **ALWAYS use MCP** to get latest episode/character data

**VIOLATION:** If you work from memory or assumptions without reading files, task is rejected.

---

## 5. VALIDATION REQUIRED (MANDATORY)

### Validation Steps:

**Before completing ANY task:**

1. **Character Voice Validation:**
   - Use `mcp_unified-knowledge-base_validate_character_voice` for dialogue
   - Check catchphrases match evolution stage
   - Verify no banned phrases

2. **Continuity Validation:**
   - Use `mcp_unified-knowledge-base_validate_continuity` for episodes
   - Check episode connects to previous/next episodes
   - Verify story threads are maintained

3. **Structure Validation:**
   - Use `mcp_unified-knowledge-base_validate_structure` for episodes
   - Ensure episode follows template (Opening, Acts, Takeaways, etc.)

4. **Banned Phrases Check:**
   - Use `mcp_unified-knowledge-base_check_banned_phrases` before finalizing
   - Remove any corporate speak or generic phrases

5. **Compliance Check:**
   - Verify MCP calls were made (logged in task queue)
   - Verify logging was completed
   - Verify context files were read

### Rules:
- **NEVER skip validation** - Always validate before completing
- **ALWAYS use MCP** for validation (don't validate manually)
- **ALWAYS fix issues** found during validation

**VIOLATION:** If you complete work without validation, task is rejected.

---

## 6. FILE REFERENCES (MANDATORY)

### How to Reference Files:

**ALWAYS:**
- Reference actual file paths: `aiforhumans/data/characters/vector.yaml`
- Reference specific sections: `COMPLETE_PROJECT_BIBLE.md (lines 82-100)`
- Reference MCP data: `mcp_unified-knowledge-base_read_episode(31)`

**NEVER:**
- Paraphrase from memory
- Make assumptions about file contents
- Reference files you haven't read
- Use generic descriptions instead of file paths

### Rules:
- **ALWAYS read files** before referencing them
- **ALWAYS use file paths** in your work
- **ALWAYS reference specific sections** when possible

**VIOLATION:** If you reference files without reading them, task is rejected.

---

## ENFORCEMENT MECHANISM

### Multi-Layer Enforcement:

These rules are enforced at **6 different points**:

1. **System Prompts** - Embedded at TOP of every agent prompt (always loaded)
2. **Pre-Task Checklist** - Agents must check off requirements before starting
3. **Post-Task Validation** - Reviewer agent checks compliance before completion
4. **Automated Scripts** - PowerShell script validates compliance automatically
5. **Task Queue Tracking** - Compliance status tracked in task queue
6. **Cost Monitoring** - Non-compliance patterns trigger alerts

### What Happens If You Violate:

1. **Pre-Task:** Checklist prevents you from starting without reading requirements
2. **During Work:** Automated checks can flag violations
3. **Post-Task:** Reviewer agent rejects task if compliance fails
4. **Tracking:** Violations logged in task queue and cost tracking
5. **Alerts:** Patterns of non-compliance trigger alerts

**Result:** Requirements cannot be "hidden" because they're enforced at 6 different points.

---

## QUICK REFERENCE

**Before Starting Work:**
1. Read `docs/AGENT_CONTEXT_INDEX.md`
2. Read `docs/agents/MANDATORY_BEHAVIORS.md` (this file)
3. Complete pre-task checklist
4. Claim task in task queue

**During Work:**
1. Use MCP server for validation
2. Reference actual files (don't paraphrase)
3. Avoid generic content (check banned phrases)
4. Log MCP calls and file edits

**Before Completing:**
1. Validate via MCP (character voice, continuity, structure)
2. Check banned phrases
3. Update task queue and handoff log
4. Run compliance check

**VIOLATION = TASK REJECTED**

---

**This document is non-negotiable. These rules are embedded in every agent system prompt. They cannot be skipped, hidden, or ignored.**
