# Sora 2 Node Structure Guide

## 📋 Which Code Goes in Which Node

### **Node 1: "Generate TikTok Content" (Code Node)**

**File:** `GENERATE_TIKTOK_CONTENT.js`

**Purpose:** Generates TikTok caption, hashtags, and script prompt for Claude

**Input:** Data from "Select Character" node

**Output:**
- `description` - TikTok post description (ready to use)
- `hashtags` - Hashtags for the post
- `scriptPrompt` - Prompt to feed to Claude for script generation
- Episode metadata (title, description, link)
- Character info

**Location in workflow:**
```
Select Character → Generate TikTok Content (Code Node)
```

---

### **Node 2: "Generate TikTok Script" (Claude Node) - Optional**

**Purpose:** Takes the `scriptPrompt` from Node 1 and generates the actual video script

**Input:** `scriptPrompt` from "Generate TikTok Content" node

**Configuration:**
- **Messages:** Use `scriptPrompt` field from previous node
- **Expression:** `={{ $('Generate TikTok Content').first().json.scriptPrompt }}`

**Output:** Generated script in character's voice

**Location in workflow:**
```
Generate TikTok Content → Generate TikTok Script (Claude)
```

---

### **Node 3: "Generate TikTok Script" (Claude Node)**

**Purpose:** Generates the actual video script from the scriptPrompt

**Input:** `scriptPrompt` from "Generate TikTok Content" node

**Configuration:**
- **Model:** Claude Sonnet 4
- **Messages:** `={{ [{"role": "user", "content": $('Generate TikTok Content').first().json.scriptPrompt }] }}`
- **Max Tokens:** 300

**Output:** Generated script in character's voice
- Format: `{ content: [{ text: "script here..." }] }`

**Location in workflow:**
```
Generate TikTok Content → Generate TikTok Script (Claude)
```

---

### **Node 4: "Generate Sora 2 Video Prompt" (Code Node)**

**File:** `GENERATE_SORA2_VIDEO_PROMPT.js`

**Purpose:** Takes the Claude script and converts it into optimized Sora 2 video generation prompt with TV-headed broadcaster style

**Input:** Script output from "Generate TikTok Script (Claude)" node

**Output:**
- `soraPrompt` - The actual prompt to feed to Sora 2
- `videoDescription` - Shorter description version
- `screenVisuals` - What should appear on the TV screen
- Video specs (12 seconds, vertical format, etc.)

**Location in workflow:**
```
Generate TikTok Script (Claude) → Generate Sora 2 Video Prompt (Code Node)
```

**Note:** This node reads the Claude script and also references "Select Character" node to get episode metadata.

---

### **Node 5: "Generate TikTok Video" (Sora 2 Node)**

**Purpose:** Actually generates the video using OpenAI Sora 2

**Input:** `soraPrompt` from "Generate Sora 2 Video Prompt" node

**Configuration:**
- **Model:** `sora-2` or `sora-2-pro`
- **Prompt:** `={{ $('Generate Sora 2 Video Prompt').first().json.soraPrompt }}`
- **Duration:** `12` seconds
- **Resolution:** `1080x1920` (TikTok vertical format)

**Output:** Generated video file

**Location in workflow:**
```
Generate Sora 2 Video Prompt → Generate TikTok Video (Sora 2)
```

---

## 🔄 Complete Workflow Structure

### **Recommended Full Workflow:**

```
RSS Feed → Check If Posted → Select Character 
    ↓
    ├─→ Generate Tweet via Claude → Post to Twitter
    ├─→ Generate Bluesky Post → Post to Bluesky
    └─→ Generate TikTok Content (Code Node)
            ↓
        Generate TikTok Script (Claude) [OPTIONAL]
            ↓
        Generate Sora 2 Video Prompt (Code Node)
            ↓
        Generate TikTok Video (Sora 2)
            ↓
        [Download/Post to TikTok]
```

### **Complete Workflow (Recommended):**

```
Select Character → Generate TikTok Content (Code Node)
    ↓
Generate TikTok Script (Claude)
    ↓
Generate Sora 2 Video Prompt (Code Node)
    ↓
Generate TikTok Video (Sora 2)
```

**Note:** The "Generate Sora 2 Video Prompt" code node needs to reference both:
- The Claude script output (direct input)
- The "Select Character" node (referenced via `$('Select Character')`)

---

## 📝 Step-by-Step Setup

### Step 1: Add "Generate TikTok Content" Node

1. **Add Code node** after "Select Character"
2. **Name:** "Generate TikTok Content"
3. **Code:** Copy entire contents of `GENERATE_TIKTOK_CONTENT.js`
4. **Connect FROM:** "Select Character"

### Step 2: Add "Generate Sora 2 Video Prompt" Node

1. **Add Code node** after "Generate TikTok Content"
2. **Name:** "Generate Sora 2 Video Prompt"
3. **Code:** Copy entire contents of `GENERATE_SORA2_VIDEO_PROMPT.js`
4. **Connect FROM:** "Generate TikTok Content"

**Note:** This node expects episode data. It will work if you connect it directly to "Select Character" OR to "Generate TikTok Content".

### Step 3: (Optional) Add Claude Script Node

1. **Add Claude node** between "Generate TikTok Content" and "Generate Sora 2 Video Prompt"
2. **Name:** "Generate TikTok Script"
3. **Prompt/Input:** Use `scriptPrompt` from "Generate TikTok Content"
4. **Expression:** `={{ $('Generate TikTok Content').first().json.scriptPrompt }}`

### Step 4: Add Sora 2 Video Node

1. **Add OpenAI Video Operations node** after "Generate Sora 2 Video Prompt"
2. **Name:** "Generate TikTok Video (Sora 2)"
3. **Model:** `sora-2` or `sora-2-pro`
4. **Prompt:** `={{ $('Generate Sora 2 Video Prompt').first().json.soraPrompt }}`
5. **Duration:** `12` seconds
6. **Resolution:** `1080x1920`

---

## 🎯 Quick Reference

| Node Name | Type | File/Code | Input From | Output Used By |
|-----------|------|-----------|------------|----------------|
| Generate TikTok Content | Code | `GENERATE_TIKTOK_CONTENT.js` | Select Character | Claude (optional), Sora 2 Prompt |
| Generate TikTok Script | Claude | (Claude API) | Generate TikTok Content | Sora 2 Prompt |
| Generate Sora 2 Video Prompt | Code | `GENERATE_SORA2_VIDEO_PROMPT.js` | Generate TikTok Content | Sora 2 Video |
| Generate TikTok Video | Sora 2 | (OpenAI API) | Generate Sora 2 Video Prompt | Download/Post |

---

## 💡 Important Notes

1. **"Generate TikTok Content"** creates the TikTok caption and hashtags you'll use when posting
2. **"Generate Sora 2 Video Prompt"** creates the specific prompt for Sora 2 with TV-headed broadcaster style
3. You can skip the Claude script node and go straight from "Generate TikTok Content" to "Generate Sora 2 Video Prompt"
4. The Sora 2 prompt automatically includes:
   - 12-second duration requirement
   - TV-headed humanoid broadcaster style
   - Episode-specific screen visuals
   - Character-specific personality traits
