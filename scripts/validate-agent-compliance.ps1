# AGENT COMPLIANCE VALIDATION SCRIPT
# Validates that agents followed mandatory behaviors
# Usage: .\scripts\validate-agent-compliance.ps1 -TaskId "task-id" [-Verbose]

param(
    [Parameter(Mandatory=$false)]
    [string]$TaskId,
    
    [Parameter(Mandatory=$false)]
    [switch]$Verbose,
    
    [Parameter(Mandatory=$false)]
    [switch]$AllTasks
)

# Set error action preference
$ErrorActionPreference = "Stop"

# Get script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$TaskQueuePath = Join-Path $ProjectRoot ".agent-tasks\task-queue.json"
$HandoffLogPath = Join-Path $ProjectRoot "docs\logs\AI_HANDOFF_LOG.md"
$ComplianceCheckerPath = Join-Path $ProjectRoot ".agent-tasks\compliance-checker.md"

# Colors for output
function Write-Success { param([string]$Message) Write-Host $Message -ForegroundColor Green }
function Write-Warning { param([string]$Message) Write-Host $Message -ForegroundColor Yellow }
function Write-Error { param([string]$Message) Write-Host $Message -ForegroundColor Red }
function Write-Info { param([string]$Message) Write-Host $Message -ForegroundColor Cyan }

# Check if required files exist
if (-not (Test-Path $TaskQueuePath)) {
    Write-Error "Task queue not found: $TaskQueuePath"
    Write-Info "Creating empty task queue..."
    $EmptyQueue = @{
        tasks = @()
        active_agents = @{}
        completed_tasks = @()
        last_updated = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
    }
    $EmptyQueue | ConvertTo-Json -Depth 10 | Out-File -FilePath $TaskQueuePath -Encoding UTF8
}

# Load task queue
try {
    $TaskQueue = Get-Content $TaskQueuePath -Raw | ConvertFrom-Json
} catch {
    Write-Error "Failed to parse task queue: $_"
    exit 1
}

# Compliance check results
$ComplianceResults = @{
    timestamp = Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ"
    checker = "automated-script"
    tasks_checked = @()
}

# Function to check MCP usage
function Test-MCPUsage {
    param([object]$Task)
    
    $Result = @{
        passed = $false
        required_calls = @()
        actual_calls = @()
        missing_calls = @()
    }
    
    # Determine task type and required MCP calls
    if ($Task.task_type -eq "episode_writing" -or $Task.task_id -like "episode-*") {
        $Result.required_calls = @(
            "mcp_unified-knowledge-base_read_episode",
            "mcp_unified-knowledge-base_character_lookup",
            "mcp_unified-knowledge-base_validate_character_voice",
            "mcp_unified-knowledge-base_validate_continuity",
            "mcp_unified-knowledge-base_validate_structure",
            "mcp_unified-knowledge-base_check_banned_phrases"
        )
    } elseif ($Task.task_type -eq "technical_work") {
        $Result.required_calls = @("mcp_unified-knowledge-base_get_episode_status")
    } elseif ($Task.task_type -eq "seo_work") {
        $Result.required_calls = @(
            "mcp_unified-knowledge-base_check_topic_coverage",
            "mcp_unified-knowledge-base_validate_seo"
        )
    }
    
    # Get actual MCP calls from task
    if ($Task.mcp_calls) {
        $Result.actual_calls = $Task.mcp_calls
    } elseif ($Task.mcp_calls_logged) {
        $Result.actual_calls = $Task.mcp_calls_logged
    }
    
    # Check for missing calls
    foreach ($required in $Result.required_calls) {
        if ($required -notin $Result.actual_calls) {
            $Result.missing_calls += $required
        }
    }
    
    $Result.passed = ($Result.missing_calls.Count -eq 0)
    
    return $Result
}

# Function to check logging
function Test-Logging {
    param([object]$Task)
    
    $Result = @{
        passed = $false
        task_claimed = $false
        handoff_logged = $false
        mcp_calls_logged = $false
        files_logged = $false
    }
    
    # Check task queue logging
    if ($Task.agent_id -and $Task.claimed_at) {
        $Result.task_claimed = $true
    }
    
    if ($Task.mcp_calls -or $Task.mcp_calls_logged) {
        $Result.mcp_calls_logged = $true
    }
    
    if ($Task.files_edited -or $Task.files_created) {
        $Result.files_logged = $true
    }
    
    # Check handoff log (simplified - just check if file exists and was recently updated)
    if (Test-Path $HandoffLogPath) {
        $HandoffLog = Get-Content $HandoffLogPath -Raw
        if ($HandoffLog -match $Task.task_id -or $HandoffLog -match $Task.agent_id) {
            $Result.handoff_logged = $true
        }
    }
    
    $Result.passed = ($Result.task_claimed -and $Result.handoff_logged)
    
    return $Result
}

# Function to check context files
function Test-ContextFiles {
    param([object]$Task)
    
    $Result = @{
        passed = $false
        files_referenced = @()
        required_files = @()
    }
    
    # This is a simplified check - in practice, would need to parse agent's work
    # For now, check if task has notes about files read
    if ($Task.context_files_read) {
        $Result.files_referenced = $Task.context_files_read
        $Result.passed = $true
    } elseif ($Task.notes -and $Task.notes -match "read|loaded|referenced") {
        $Result.passed = $true
    } else {
        $Result.passed = $false
    }
    
    return $Result
}

# Function to check for generic content (simplified)
function Test-GenericContent {
    param([object]$Task)
    
    $Result = @{
        passed = $true
        warnings = @()
    }
    
    # Check if banned phrases check was run
    if ($Task.mcp_calls -contains "mcp_unified-knowledge-base_check_banned_phrases") {
        # If check was run, assume it passed (would need to check results in practice)
        $Result.passed = $true
    } else {
        $Result.warnings += "Banned phrases check not run"
        $Result.passed = $false
    }
    
    return $Result
}

# Function to check validation
function Test-Validation {
    param([object]$Task)
    
    $Result = @{
        passed = $false
        validations_completed = @()
        required_validations = @()
    }
    
    # Check for validation MCP calls
    $ValidationCalls = @(
        "mcp_unified-knowledge-base_validate_character_voice",
        "mcp_unified-knowledge-base_validate_continuity",
        "mcp_unified-knowledge-base_validate_structure",
        "mcp_unified-knowledge-base_validate_seo"
    )
    
    foreach ($call in $ValidationCalls) {
        if ($Task.mcp_calls -contains $call) {
            $Result.validations_completed += $call
        }
    }
    
    # For episode writing, require at least 3 validations
    if ($Task.task_type -eq "episode_writing" -or $Task.task_id -like "episode-*") {
        $Result.required_validations = @(
            "mcp_unified-knowledge-base_validate_character_voice",
            "mcp_unified-knowledge-base_validate_continuity",
            "mcp_unified-knowledge-base_validate_structure"
        )
        
        $missing = $Result.required_validations | Where-Object { $_ -notin $Result.validations_completed }
        $Result.passed = ($missing.Count -eq 0)
    } else {
        $Result.passed = $true  # Other task types may not require validation
    }
    
    return $Result
}

# Function to check pre-task checklist
function Test-PreTaskChecklist {
    param([object]$Task)
    
    $Result = @{
        passed = $false
        checklist_completed = $false
    }
    
    # Check if checklist was completed (simplified)
    if ($Task.pre_task_checklist_completed) {
        $Result.checklist_completed = $true
        $Result.passed = $true
    } elseif ($Task.notes -and $Task.notes -match "checklist") {
        $Result.passed = $true
    } else {
        $Result.passed = $false
    }
    
    return $Result
}

# Main compliance check function
function Test-TaskCompliance {
    param([object]$Task)
    
    $Compliance = @{
        task_id = $Task.task_id
        agent_id = $Task.agent_id
        timestamp = $Task.completed_at
        checks = @{}
        score = 0
        total_checks = 6
        passed = $false
    }
    
    # Run all 6 compliance checks
    $Compliance.checks.mcp_usage = Test-MCPUsage -Task $Task
    $Compliance.checks.logging = Test-Logging -Task $Task
    $Compliance.checks.context_files = Test-ContextFiles -Task $Task
    $Compliance.checks.generic_content = Test-GenericContent -Task $Task
    $Compliance.checks.validation = Test-Validation -Task $Task
    $Compliance.checks.pre_task_checklist = Test-PreTaskChecklist -Task $Task
    
    # Calculate score
    foreach ($check in $Compliance.checks.Values) {
        if ($check.passed) {
            $Compliance.score++
        }
    }
    
    # Determine if passed (5/6 or 6/6)
    $Compliance.passed = ($Compliance.score -ge 5)
    
    return $Compliance
}

# Main execution
Write-Info "=== AGENT COMPLIANCE VALIDATION ==="
Write-Info "Timestamp: $($ComplianceResults.timestamp)"
Write-Info ""

if ($AllTasks) {
    Write-Info "Checking all completed tasks..."
    $TasksToCheck = $TaskQueue.completed_tasks
} elseif ($TaskId) {
    Write-Info "Checking task: $TaskId"
    $Task = $TaskQueue.completed_tasks | Where-Object { $_.task_id -eq $TaskId }
    if (-not $Task) {
        $Task = $TaskQueue.tasks | Where-Object { $_.task_id -eq $TaskId }
    }
    if (-not $Task) {
        Write-Error "Task not found: $TaskId"
        exit 1
    }
    $TasksToCheck = @($Task)
} else {
    Write-Info "Checking most recent completed task..."
    if ($TaskQueue.completed_tasks.Count -gt 0) {
        $TasksToCheck = @($TaskQueue.completed_tasks[-1])
    } else {
        Write-Warning "No completed tasks found"
        exit 0
    }
}

foreach ($Task in $TasksToCheck) {
    Write-Info "Checking task: $($Task.task_id)"
    Write-Info "Agent: $($Task.agent_id)"
    Write-Info ""
    
    $Compliance = Test-TaskCompliance -Task $Task
    
    # Display results
    Write-Info "Compliance Score: $($Compliance.score)/$($Compliance.total_checks)"
    Write-Info ""
    
    foreach ($checkName in $Compliance.checks.Keys) {
        $check = $Compliance.checks[$checkName]
        if ($check.passed) {
            Write-Success "  ✓ $checkName"
        } else {
            Write-Error "  ✗ $checkName"
            if ($Verbose) {
                Write-Warning "    Details: $($check | ConvertTo-Json -Compress)"
            }
        }
    }
    
    Write-Info ""
    if ($Compliance.passed) {
        Write-Success "RESULT: PASSED (Score: $($Compliance.score)/$($Compliance.total_checks))"
    } else {
        Write-Error "RESULT: FAILED (Score: $($Compliance.score)/$($Compliance.total_checks))"
        Write-Warning "Task requires fixes before approval"
    }
    
    Write-Info ""
    Write-Info "---"
    Write-Info ""
    
    # Add to results
    $ComplianceResults.tasks_checked += $Compliance
}

# Save compliance results
$ComplianceResultsPath = Join-Path $ProjectRoot ".agent-tasks\compliance-results.json"
$ComplianceResults | ConvertTo-Json -Depth 10 | Out-File -FilePath $ComplianceResultsPath -Encoding UTF8

Write-Info "Compliance results saved to: $ComplianceResultsPath"
Write-Info ""
Write-Success "Validation complete!"
