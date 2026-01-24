# Workshop Update Guide

## Overview

The Workshop system uses YAML data files to display character work streams and post comparisons. Updates are made by editing YAML files—no code changes required.

## File Structure

```
data/
├── workshop-base.yaml          # Default work streams (fallback)
└── workshop/
    ├── episode-33.yaml         # Episode-specific overrides
    ├── episode-34.yaml
    └── ...
```

## How It Works

1. **Base Data**: `workshop-base.yaml` contains default work streams that appear when no episode-specific data exists.
2. **Episode Overrides**: Files in `data/workshop/episode-XX.yaml` override base data for specific episodes.
3. **Automatic Loading**: The sidebar on episode pages automatically loads episode-specific data if available, otherwise falls back to base data.

## YAML Structure

### Base File (`workshop-base.yaml`)

```yaml
work_streams:
  - character: "Vector"
    activity: "Processing patterns..."
    episode_context: "Analyzing data structures"
    behind_scenes: "Pattern recognition active"
    preview: "Click to see Vector's current analysis..."
    expanded_content: "Full details about what Vector is working on..."

side_by_side_posts:
  enabled: true
  posts:
    - title: "Recent Episode"
      episode_number: null
      description: "Latest published episode"
```

### Episode-Specific File (`data/workshop/episode-XX.yaml`)

```yaml
work_streams:
  - character: "Vector"
    activity: "Explaining diffusion models..."
    episode_context: "Interrupting Human's explanation—AI image generation isn't painting, it's diffusion"
    behind_scenes: "Processing image data structures. Pattern recognition triggered something unusual..."
    preview: "Click to see Vector's analysis of diffusion models..."
    expanded_content: "Vector is explaining how DALL-E, Midjourney, and Stable Diffusion actually work..."

side_by_side_posts:
  enabled: true
  posts:
    - title: "Episode 33: AI Image Generation"
      episode_number: 33
      description: "How DALL-E, Midjourney, and Stable Diffusion actually work"
    - title: "Episode 32: Why AI is Bad at Math"
      episode_number: 32
      description: "Language models predict text, not calculate"
```

## Field Descriptions

### Work Stream Fields

- **`character`**: Character name (must match character data file name, e.g., "Vector", "Kai", "Recurse", "Bounce")
- **`activity`**: Short activity description (shown in header)
- **`episode_context`**: What the character is doing in THIS episode
- **`behind_scenes`**: Behind-the-scenes work or status
- **`preview`**: Preview text shown before expansion
- **`expanded_content`**: Full details shown when preview box is expanded

### Side-by-Side Posts Fields

- **`enabled`**: `true` or `false` to enable/disable post comparison
- **`posts`**: Array of post objects
  - **`title`**: Post title
  - **`episode_number`**: Episode number (or `null` for auto)
  - **`description`**: Post description

## Creating Episode-Specific Data

1. **Copy the base structure**: Start with `workshop-base.yaml` as a template
2. **Create episode file**: `data/workshop/episode-XX.yaml` (replace XX with episode number)
3. **Update work streams**: Modify character activities to match the episode content
4. **Update post comparison**: Set specific episodes to compare side-by-side
5. **Save**: The changes will appear automatically on the episode page sidebar

## Example: Episode 34

```yaml
# data/workshop/episode-34.yaml
work_streams:
  - character: "Vector"
    activity: "Analyzing new AI concept..."
    episode_context: "Explaining [topic] to Human"
    behind_scenes: "Processing [specific data]"
    preview: "Click to see Vector's analysis..."
    expanded_content: "Vector is working on [detailed explanation]..."
    
  - character: "Kai"
    activity: "Monitoring [specific risk]..."
    episode_context: "Tracking [episode-specific monitoring]"
    behind_scenes: "Vigilance: 100%. [Status]"
    preview: "Click to see Kai's monitoring..."
    expanded_content: "Kai is monitoring [details]..."
```

## Tips

1. **Keep it relevant**: Work streams should reflect what characters are actually doing in the episode
2. **Mix context**: Combine episode-specific context with behind-the-scenes work
3. **Character voice**: Use character-appropriate language (Vector: enthusiastic, Kai: monitoring-focused, etc.)
4. **Preview text**: Make preview text intriguing to encourage clicks
5. **Expanded content**: Provide meaningful details when expanded

## Where Updates Appear

- **Episode Sidebar**: Work streams appear in the right sidebar on episode pages
- **Workshop Page**: Full work streams and post comparison appear on `/workshop` page
- **Preview Boxes**: Clickable boxes expand to show full details

## Troubleshooting

- **Not showing?**: Check that the YAML file is valid (no syntax errors)
- **Wrong character?**: Ensure character name matches exactly (case-sensitive)
- **Missing data?**: Episode-specific files fall back to base data if fields are missing
- **Preview not expanding?**: Check that JavaScript is enabled (preview boxes require JS)

## Future Enhancements

- Auto-generation from episode frontmatter
- Character activity tracking
- Real-time updates
- More interactive features
