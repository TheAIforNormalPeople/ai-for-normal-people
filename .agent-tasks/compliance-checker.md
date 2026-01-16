# AGENT COMPLIANCE CHECKER
## Rules for Validating Mandatory Behaviors

**Last Updated:** 2026-01-20  
**Purpose:** This document defines how to check if agents followed mandatory behaviors. Used by Reviewer agent and automated scripts.

---

## COMPLIANCE CHECK PROCESS

### When to Run Compliance Check:

- **Before marking task complete** (Reviewer agent)
- **After each agent completes work** (Automated script)
- **Before merging changes** (Git workflow)
- **On-demand** (User request)

---

## CHECK 1: MCP SERVER USAGE

### What to Check:

1. **Task Queue Log:**
   - Open `.agent-tasks/task-queue.json`
   - Find task entry
   - Check `mcp_calls` array
   - Verify required MCP calls were made

2. **Required MCP Calls by Task Type:**

   **Episode Writing:**
   - `mcp_unified-knowledge-base_read_episode` (at least one previous episode)
   - `mcp_unified-knowledge-base_character_lookup` (for each character with dialogue)
   - `mcp_unified-knowledge-base_validate_character_voice` (before finalizing)
   - `mcp_unified-knowledge-base_validate_continuity` (before completing)
   - `mcp_unified-knowledge-base_validate_structure` (before completing)
   - `mcp_unified-knowledge-base_check_banned_phrases` (before finalizing)

   **Technical Work:**
   - At least one MCP call to check episode status or character data (if relevant)

   **SEO Work:**
   - `mcp_unified-knowledge-base_check_topic_coverage` (if checking topics)
   - `mcp_unified-knowledge-base_validate_seo` (if validating SEO)

### Pass Criteria:

- ✅ All required MCP calls for task type are logged in task queue
- ✅ MCP calls were made at appropriate times (validation before completion)
- ✅ MCP calls match task requirements

### Fail Criteria:

- ❌ Required MCP calls missing from task queue
- ❌ MCP calls made after task marked complete (should be before)
- ❌ No MCP calls logged for task that requires them

**Action if Failed:** Reject task, require agent to make missing MCP calls

---

## CHECK 2: LOGGING

### What to Check:

1. **Task Queue:**
   - Task claimed with agent ID and timestamp
   - Task status updated during work
   - MCP calls logged
   - Files edited logged
   - Task completed with timestamp

2. **Handoff Log:**
   - Entry in `docs/logs/AI_HANDOFF_LOG.md`
   - Date, agent name, action
   - Working on, completed, next steps
   - MCP calls mentioned
   - Files edited mentioned

### Pass Criteria:

- ✅ Task claimed in task queue
- ✅ Entry in handoff log
- ✅ MCP calls logged in both places
- ✅ Files edited logged
- ✅ Task status updated appropriately

### Fail Criteria:

- ❌ Task not claimed in task queue
- ❌ No entry in handoff log
- ❌ MCP calls not logged
- ❌ Files edited not logged

**Action if Failed:** Reject task, require agent to complete logging

---

## CHECK 3: CONTEXT FILES REFERENCED

### What to Check:

1. **Pre-Task Checklist:**
   - Check `.agent-tasks/pre-task-checklist.json` (if agent created instance)
   - Verify required files were loaded

2. **Agent Notes/Work:**
   - Look for file path references in agent's work
   - Check if agent references actual files vs. paraphrasing
   - Verify character YAML files were read (for episode writing)

3. **Required Files by Task Type:**

   **Episode Writing:**
   - Character YAML files referenced
   - Story bible referenced
   - Character voice rotation referenced
   - Previous episode(s) referenced (via MCP)

   **Technical Work:**
   - Hugo config referenced
   - Existing templates/styles referenced
   - Technical docs referenced

### Pass Criteria:

- ✅ Required files for task type are referenced
- ✅ File paths are specific (not generic descriptions)
- ✅ Agent references actual files, not memory

### Fail Criteria:

- ❌ Required files not referenced
- ❌ Generic descriptions instead of file paths
- ❌ Agent appears to work from memory

**Action if Failed:** Reject task, require agent to read and reference actual files

---

## CHECK 4: NO GENERIC CONTENT

### What to Check:

1. **Banned Phrases:**
   - Use MCP: `mcp_unified-knowledge-base_check_banned_phrases`
   - Check for corporate speak: "leverage", "synergy", "utilize" (as filler), etc.
   - Check for generic AI advice patterns

2. **Character Voice:**
   - Verify dialogue matches character voice from YAML
   - Check catchphrases match evolution stage
   - Verify no repetition of overused phrases

3. **Content Quality:**
   - Check for generic introductions ("In today's world...")
   - Check for boring, AI-sounding patterns
   - Verify content is specific and character-driven

### Pass Criteria:

- ✅ No banned phrases detected
- ✅ Character voice matches YAML data
- ✅ Content is specific, not generic
- ✅ No AI-sounding patterns

### Fail Criteria:

- ❌ Banned phrases found
- ❌ Character voice doesn't match YAML
- ❌ Generic, corporate, or AI-sounding content
- ❌ Overused catchphrases

**Action if Failed:** Reject task, require agent to rewrite with proper character voice

---

## CHECK 5: VALIDATION COMPLETED

### What to Check:

1. **Validation MCP Calls:**
   - Check task queue for validation MCP calls
   - Verify validation happened BEFORE task completion
   - Check validation results (if logged)

2. **Required Validations by Task Type:**

   **Episode Writing:**
   - Character voice validation (before finalizing)
   - Continuity validation (before completing)
   - Structure validation (before completing)
   - Banned phrases check (before finalizing)

   **Technical Work:**
   - Code review (if applicable)
   - Local testing (if applicable)

### Pass Criteria:

- ✅ Required validations completed
- ✅ Validation happened before task completion
- ✅ Validation issues addressed (if any)

### Fail Criteria:

- ❌ Required validations missing
- ❌ Validation happened after task completion
- ❌ Validation issues not addressed

**Action if Failed:** Reject task, require agent to complete validation

---

## CHECK 6: PRE-TASK CHECKLIST

### What to Check:

1. **Checklist Completion:**
   - Check if agent created checklist instance
   - Verify all required items completed
   - Check timestamp (should be before work started)

2. **Required Checklist Items:**
   - Read context index
   - Read mandatory behaviors
   - Checked MCP server
   - Claimed task in queue
   - Checked file locks
   - Loaded required files
   - Understood task scope

### Pass Criteria:

- ✅ Checklist created and completed
- ✅ All required items checked
- ✅ Checklist timestamp before work started

### Fail Criteria:

- ❌ No checklist created
- ❌ Required items not completed
- ❌ Checklist created after work started

**Action if Failed:** Reject task, require agent to complete checklist

---

## OVERALL COMPLIANCE SCORE

### Scoring:

- **6/6 checks passed:** ✅ Task approved
- **5/6 checks passed:** ⚠️ Task approved with warnings (fix issues)
- **4/6 or fewer passed:** ❌ Task rejected (fix all issues)

### Reviewer Agent Process:

1. Run all 6 compliance checks
2. Score compliance (pass/fail for each check)
3. If 6/6 or 5/6: Approve task (with warnings if needed)
4. If 4/6 or fewer: Reject task, list all failures
5. Log compliance score in task queue

---

## AUTOMATED COMPLIANCE CHECK

### PowerShell Script:

The script `scripts/validate-agent-compliance.ps1` runs these checks automatically:

1. Reads task queue
2. Finds completed tasks
3. Runs all 6 compliance checks
4. Generates compliance report
5. Flags non-compliant tasks

### Usage:

```powershell
cd aiforhumans
.\scripts\validate-agent-compliance.ps1 -TaskId "episode-32-writing"
```

---

## COMPLIANCE LOGGING

### Where Compliance is Logged:

1. **Task Queue:** Compliance score added to task entry
2. **Handoff Log:** Compliance check results logged
3. **Cost Tracking:** Non-compliance patterns tracked

### Compliance Data Structure:

```json
{
  "compliance_check": {
    "timestamp": "2026-01-20T10:00:00Z",
    "checker": "reviewer-agent-1",
    "score": "6/6",
    "checks": {
      "mcp_usage": "pass",
      "logging": "pass",
      "context_files": "pass",
      "no_generic_content": "pass",
      "validation": "pass",
      "pre_task_checklist": "pass"
    },
    "warnings": [],
    "failures": []
  }
}
```

---

**This compliance checker ensures mandatory behaviors are always enforced. No exceptions.**
