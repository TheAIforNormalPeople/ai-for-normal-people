# MCP Server Explanation - How It Works

## What is MCP?

**MCP (Model Context Protocol)** is a protocol that allows AI assistants (like Cursor) to connect to external tools and services. Think of it as an API that gives the AI access to specialized tools.

## MCP vs RAG - Key Differences

### MCP (What We Have)
- **Structured Tools**: Provides specific, named tools (like `validate_episode`, `research_seo_topic`)
- **Direct Function Calls**: AI calls specific functions with parameters
- **Controlled Access**: Only accesses what the tools are designed to access
- **Structured Data**: Returns JSON/structured data, not raw text
- **Purpose**: Extends AI capabilities with specialized tools

**Example:**
```
AI: "I need to validate Episode 33"
→ Calls MCP tool: validate_episode(episode_number=33)
→ Gets structured response: {valid: true, errors: [...]}
```

### RAG (What We DON'T Have)
- **Semantic Search**: Searches through embedded documents using meaning
- **Vector Database**: Stores document embeddings for similarity search
- **Retrieval**: Finds relevant chunks of text based on query
- **Unstructured**: Returns raw text chunks from documents
- **Purpose**: Augments AI knowledge with document retrieval

**Example:**
```
AI: "What did we say about Vector's trauma?"
→ RAG searches vector embeddings
→ Returns relevant text chunks from episodes
→ AI uses those chunks in response
```

## Our MCP Server - What It Does

Our MCP server (`mcp-server/`) provides **48+ specialized tools** organized into categories:

### 1. Validation Tools
- `validate_character_voice` - Check if dialogue matches character rules
- `validate_frontmatter` - Verify episode metadata
- `validate_structure` - Check episode follows template
- `validate_continuity` - Verify story connections
- `validate_seo` - Check SEO requirements

### 2. Analysis Tools
- `analyze_episode_stats` - Get word count, character appearances
- `analyze_story_threads` - Track story arcs
- `analyze_character_arc` - Character evolution tracking
- `find_gaps` - Find plot holes

### 3. Research Tools
- `research_seo_opportunities` - Find SEO keywords
- `research_ai_topic` - Research AI topics with current info
- `verify_ai_information` - Fact-check AI claims

### 4. Generation Tools
- `generate_episode_outline` - Create episode structure
- `suggest_dialogue` - Suggest character dialogue
- `generate_frontmatter` - Create episode metadata

### 5. Knowledge Base Tools
- `read_story_bible` - Get character details and canon
- `read_episode` - Read specific episode
- `get_episode_status` - Check what's published
- `character_lookup` - Quick character reference

## How It Works

1. **Server Setup**: The MCP server runs as a Python process
2. **Connection**: Cursor connects to it via MCP protocol
3. **Tool Registration**: Server registers all available tools
4. **Tool Calls**: When AI needs something, it calls a tool
5. **Response**: Server processes request and returns structured data

## Where the Data Comes From

The MCP server reads from:
- **Local Files**: `aiforhumans/content/blog/`, `aiforhumans/data/characters/`
- **Database**: `mcp-server/data/knowledge.db` (SQLite database)
- **Project Files**: All files in the workspace

**It does NOT:**
- Search the internet (unless using research tools with user approval)
- Access external APIs (unless explicitly configured)
- Read files outside the workspace

## Security Considerations

The MCP server:
- ✅ Only accesses files in the workspace
- ✅ Only provides tools we've explicitly created
- ✅ Returns structured data (not arbitrary code)
- ✅ Runs locally (not on external servers)

**However:**
- ⚠️ Research tools may access the internet (with user approval)
- ⚠️ Always verify external sources with the user
- ⚠️ Don't trust external information blindly

## Using MCP Tools

When you need to:
- Validate an episode → Use `validate_episode` tool
- Check character voice → Use `validate_character_voice` tool
- Research SEO → Use `research_seo_opportunities` tool
- Get character info → Use `character_lookup` tool

The tools are available automatically when the MCP server is connected to Cursor.

## Summary

- **MCP = Tool Server**: Provides structured tools for specific tasks
- **RAG = Document Retrieval**: Would search through embedded documents (we don't have this)
- **Our MCP Server**: 48+ tools for episode management, validation, research, and analysis
- **Security**: Only accesses workspace files, always verify external sources with user

---

**The MCP server extends the AI's capabilities with specialized tools, but it's not RAG - it's a structured tool API.**
