# n8n Workflow Updates - December 30, 2025

## ✅ What Was Fixed

### 1. **Character Rotation System Added**
- **New Node:** "Select Character" - Automatically determines which character to use based on episode number
- **Rotation Pattern:**
  - Episodes 18, 21, 24, 27... = **Vector** (episodeNumber % 3 === 0)
  - Episodes 19, 22, 25, 28... = **Kai** (episodeNumber % 3 === 1)
  - Episodes 20, 23, 26, 29... = **Recurse** (episodeNumber % 3 === 2)
- Extracts episode number from URL (e.g., `episode-24-...`) or title
- Defaults to Vector if episode number can't be determined

### 2. **Updated Character Prompts**
All character prompts now match current character evolution from `character-evolution.json`:

**Vector:**
- ✅ Updated from "FASCINATING! ALL CAPS!" to "Sharp, intelligent, mean"
- ✅ FASCINATING used selectively, channeled through anger/intelligence
- ✅ More nuanced anti-establishment rants
- ✅ Still uses numbered lists, zero corporate speak

**Kai:**
- ✅ Mix of natural speech and detection language
- ✅ "Alert:" when detecting, "Pattern detected:" occasionally
- ✅ Probability percentages (may not be perfectly accurate)
- ✅ Sound effects (WHIRR-CLICK, CHK-CHK, soft chime)
- ✅ Can be wrong (false positives), learning humor

**Recurse:**
- ✅ Methodical investigation (evolved from paranoid)
- ✅ Varied notebook references ("That's going in THE file", "Case file complete. Documented.")
- ✅ Questions transparency/opacity
- ✅ "Who benefits?" questioning prominent
- ✅ Less "three questions", more methodical

### 3. **Fixed Bluesky Prompt**
- ✅ Removed reference to non-existent `$json.systemPrompt`
- ✅ Now uses character prompt from "Select Character" node
- ✅ Automatically adjusts "tweet" → "Bluesky post" and "240 characters" → "150 characters"

## 📋 How to Use

### Import the Updated Workflow

1. **In n8n:**
   - Go to **Workflows**
   - Click **Import from File**
   - Select: `multi-platform-social-json-tracking-FIXED.json`
   - Click **Import** (or **Replace** if it already exists)

2. **Verify Connections:**
   - The workflow flow is now:
     - Schedule Trigger → RSS Feed Reader → Read Tracking JSON → Check If Posted → If Not Posted → **Select Character** → Generate Tweet/Bluesky Post → Post → Log → Merge → Write

3. **Test:**
   - Click **Execute Workflow** to test
   - Check that "Select Character" node determines the correct character
   - Verify both Twitter and Bluesky posts use the correct character voice

## 🔍 How Character Selection Works

The "Select Character" node:
1. Extracts episode number from URL (e.g., `episode-24-ai-bias...` → `24`)
2. Calculates: `episodeNumber % 3`
3. Selects character based on result:
   - `0` = Vector
   - `1` = Kai  
   - `2` = Recurse
4. Generates character-specific prompt with current voice traits
5. Passes prompt to both Twitter and Bluesky generation nodes

## 📝 Example

**Episode 24 (AI Bias):**
- Episode number: 24
- 24 % 3 = 0
- Character: **Vector**
- Prompt: Uses Vector's updated voice (sharp, intelligent, mean, nuanced rants)

**Episode 25 (next episode):**
- Episode number: 25
- 25 % 3 = 1
- Character: **Kai**
- Prompt: Uses Kai's voice (detection language, probability percentages, learning humor)

## ⚠️ Important Notes

- **Episode Number Extraction:** The workflow tries to extract episode number from:
  1. URL pattern: `/episode-XX-...`
  2. Title pattern: "Episode XX: ..."
  
  If it can't find the number, it defaults to Vector.

- **Character Prompts:** All prompts are stored in the "Select Character" node code. To update character voices in the future, edit that node's JavaScript code.

- **Bluesky Token:** Still uses hardcoded token (you mentioned it's working). If you want to switch to credential-based auth later, we can update that.

## ✅ Next Steps

1. Import the updated workflow
2. Test with a recent episode
3. Verify character rotation works correctly
4. Monitor posts to ensure character voices match

---

**Updated:** December 30, 2025  
**Workflow File:** `multi-platform-social-json-tracking-FIXED.json`

