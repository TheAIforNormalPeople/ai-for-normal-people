# n8n Workflows for "The Normal People"

This folder contains all n8n workflows, setup guides, and related files for automating social media posting.

## 📁 Folder Structure

```
n8n/
├── workflows/          # Active workflow files
├── docs/              # Setup guides and documentation
├── code/              # Code snippets for n8n nodes
├── tracking/          # JSON tracking files (posted content, character evolution)
└── archive/           # Old/debug files (for reference only)
```

## 🚀 Quick Start

**New to n8n?** Start here: [`docs/QUICK_START_SETUP.md`](docs/QUICK_START_SETUP.md)

**Need detailed setup?** See: [`docs/COMPLETE_SETUP_GUIDE_NOW.md`](docs/COMPLETE_SETUP_GUIDE_NOW.md)

## 📋 Active Files

### Workflows
- **`workflows/multi-platform-social-json-tracking-FIXED.json`** ⭐
  - Main workflow that posts new episodes to Twitter and Bluesky
  - Automatically rotates characters (Vector/Kai/Recurse) based on episode number
  - Tracks all posts in `tracking/posted-content.json`

### Documentation
- **`docs/QUICK_START_SETUP.md`** - 15-minute quick setup guide
- **`docs/COMPLETE_SETUP_GUIDE_NOW.md`** - Detailed step-by-step setup
- **`docs/TWITTER_API_SETUP_STEPS.md`** - Twitter API credentials setup
- **`docs/TWITTER_TEXT_FIX.md`** - Common Twitter text formatting issues
- **`docs/TWITTER_OAUTH2_SETUP.md`** - OAuth 2.0 setup (if needed)
- **`docs/WORKFLOW_UPDATES_2025-12-30.md`** - Recent workflow changes

### Code Snippets
- **`code/SELECT_CHARACTER_NODE_CODE.js`** - Character rotation logic
- **`code/CLEAN_TWITTER_TEXT_SIMPLE.js`** - Twitter text cleaning code
- **`code/get-bluesky-token.ps1`** - PowerShell script for Bluesky token

### Tracking Files
- **`tracking/posted-content.json`** - Logs all posted content (auto-generated)
- **`tracking/character-evolution.json`** - Character evolution tracking

## 🔧 How It Works

1. **RSS Feed Reader** - Checks for new blog episodes
2. **Check If Posted** - Verifies if episode was already posted
3. **Select Character** - Rotates between Vector, Kai, and Recurse
4. **Generate Posts** - Creates posts in character's voice via Claude
5. **Post to Platforms** - Posts to Twitter and Bluesky
6. **Track Posts** - Logs everything to JSON file

## 📝 Character Rotation

Episodes rotate characters automatically:
- **Episodes 18, 21, 24, 27...** = Vector (episodeNumber % 3 === 0)
- **Episodes 19, 22, 25, 28...** = Kai (episodeNumber % 3 === 1)
- **Episodes 20, 23, 26, 29...** = Recurse (episodeNumber % 3 === 2)

## 🐛 Troubleshooting

- **Twitter 403 errors?** See `docs/TWITTER_TEXT_FIX.md`
- **Bluesky token expired?** See `code/get-bluesky-token.ps1`
- **Workflow not triggering?** Check RSS feed URL and schedule trigger

## 📚 Archive

The `archive/` folder contains old debug files, troubleshooting guides, and previous versions. These are kept for reference but are not actively used.

## 🔄 Updating the Workflow

1. Export the workflow from n8n
2. Save it to `workflows/` with a descriptive name
3. Update this README if structure changes

---

**Last Updated:** January 2025  
**Status:** ✅ Fully Operational (Twitter + Bluesky)

