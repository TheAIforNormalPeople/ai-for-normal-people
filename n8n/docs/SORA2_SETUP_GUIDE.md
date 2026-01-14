# OpenAI Sora 2 Setup Guide for TikTok Videos

**Goal:** Automate TikTok video creation using OpenAI Sora 2 (built into n8n!)

---

## 🎯 Why Sora 2?

- ✅ **Built into n8n!** (no HTTP requests needed)
- ✅ **OpenAI quality** (excellent!)
- ✅ **Text-to-video** (uses your Claude script)
- ✅ **Easy setup** (native node)
- ✅ **Professional quality**

---

## 📋 Current Workflow

**What you have:**
```
Select Character → Generate TikTok Content (Code) → Generate TikTok Script (Claude)
```

**What we're adding:**
```
... → Generate TikTok Script (Claude) → Generate Video (Sora 2) → [Download/Post]
```

---

## 🔧 Step-by-Step Setup

### Step 1: Add OpenAI Video Operations Node

1. **Open your n8n workflow**
2. **Add new node** after "Generate TikTok Script (Claude)"
3. **Search for:** `OpenAI Video Operations`
4. **Select:** "OpenAI Video Operations" node
5. **Name it:** "Generate TikTok Video (Sora 2)"

---

### Step 2: Configure OpenAI Credentials

**If you already have OpenAI credentials:**
- Select existing OpenAI credentials from dropdown

**If you need to create credentials:**
1. **Click "Create New Credential"**
2. **Credential Type:** OpenAI
3. **API Key:** Enter your OpenAI API key
   - Get it from: https://platform.openai.com/api-keys
4. **Save credentials**

---

### Step 3: Configure Video Operations Node

**Node Settings:**

**Operation:** `Generate Video` (or similar - check available options)

**Model:** 
- `sora-2` (standard)
- `sora-2-pro` (higher quality, more expensive)

**Prompt:**
- Use script from Claude node
- Expression: `={{ $('Generate TikTok Script').first().json.content[0].text }}`
- Or if connected directly: `={{ $input.first().json.content[0].text }}`

**Duration:** 
- `60` seconds (TikTok format)
- Or adjust based on your needs

**Resolution:**
- `1080x1920` (TikTok vertical format, 9:16)
- Or `720x1280` (lower quality, cheaper)

**Other Settings:**
- Check n8n node documentation for additional options
- May include: aspect ratio, quality settings, etc.

---

### Step 4: Connect Nodes

**Workflow:**
```
Generate TikTok Script (Claude) → Generate TikTok Video (Sora 2)
```

**Connection:**
- Connect FROM: "Generate TikTok Script (Claude)"
- Connect TO: "Generate TikTok Video (Sora 2)"

---

### Step 5: Format Prompt (Important!)

**Claude outputs a script with:**
- Time markers: `[0:00-0:05] HOOK`
- Character dialogue: `**VECTOR:** "I wasn't taught to lie..."`
- Stage directions: `*[Vector appears on screen]*`

**Sora 2 needs a video description prompt, not a script!**

**Solution: Convert script to video description:**

**Option A: Add Code Node (Recommended)**

Add a Code node between Claude and Sora 2:

```javascript
// Convert Claude script to Sora 2 video prompt
const claudeScript = $input.first().json.content[0].text;

// Extract key elements from script
// Remove time markers, keep descriptions and dialogue
let videoPrompt = claudeScript
  .replace(/\[\d+:\d+-\d+:\d+\]\s*\*\*/g, '') // Remove time markers
  .replace(/\*\*[A-Z]+\*\*:/g, '') // Remove character names
  .replace(/\*\[.*?\]\*/g, '') // Remove stage directions
  .replace(/"/g, '') // Remove quotes
  .trim();

// Create a video description prompt
const finalPrompt = `Create a 60-second TikTok video: ${videoPrompt}. 
Style: Educational, character-driven, engaging. 
Format: Vertical (9:16), high quality, smooth transitions.`;

return [{
  json: {
    videoPrompt: finalPrompt,
    originalScript: claudeScript
  }
}];
```

**Then connect:**
```
Claude → Convert Script to Prompt (Code) → Sora 2
```

**Option B: Use Claude Script Directly**

Try using Claude's script directly as prompt (may work, but less optimal):
```
={{ $input.first().json.content[0].text }}
```

---

### Step 6: Handle Video Output

**Sora 2 will return:**
- Video file URL
- Video ID
- Status

**Add nodes to:**
1. **Download video** (HTTP Request node)
2. **Save video** (to file system or cloud storage)
3. **Post to TikTok** (when TikTok API available)

---

## 📊 Pricing

**OpenAI Sora 2 Pricing:**
- **Pay-per-use:** Based on video length/resolution
- **Check:** https://openai.com/pricing for current rates
- **Typical cost:** Varies by length/resolution

**Example (check current pricing):**
- 60-second video: ~$X (check OpenAI pricing)
- Higher resolution: More expensive
- Lower resolution: Cheaper

**Recommendation:** Start with lower resolution to test, then upgrade if needed.

---

## 🎯 Full Workflow Structure

```
Select Character
  ↓
Generate TikTok Content (Code)
  ↓
Generate TikTok Script (Claude)
  ↓
Convert Script to Prompt (Code) ← NEW!
  ↓
Generate TikTok Video (Sora 2) ← NEW!
  ↓
Download Video (HTTP Request) ← NEW!
  ↓
[Post to TikTok] ← Future
```

---

## 🔍 Testing

### Step 1: Test with One Video

1. **Run workflow** with Episode 29
2. **Check each node:**
   - ✅ Claude generates script
   - ✅ Code node converts to prompt
   - ✅ Sora 2 generates video
   - ✅ Video downloads successfully

### Step 2: Check Video Quality

1. **Download video** from Sora 2 output
2. **Check:**
   - ✅ Quality (resolution, clarity)
   - ✅ Length (60 seconds)
   - ✅ Format (vertical 9:16)
   - ✅ Content (matches script)

### Step 3: Optimize

- **Adjust prompt** if needed
- **Change resolution** if quality/cost needs adjustment
- **Modify duration** if needed

---

## 💡 Tips

### Prompt Optimization

**Good prompts for Sora 2:**
- ✅ Clear, descriptive
- ✅ Include style/format requirements
- ✅ Mention character/visual elements
- ✅ Specify duration/format

**Example:**
```
Create a 60-second educational TikTok video featuring Vector (V-847), 
a sharp AI character explaining emergent AI behavior. 
Style: Modern, engaging, character-driven. 
Format: Vertical (9:16), smooth transitions, high quality.
```

### Cost Management

- ✅ Start with lower resolution (test)
- ✅ Use shorter videos for testing
- ✅ Monitor usage/costs
- ✅ Optimize prompts (better prompts = better results)

### Quality vs. Cost

- **Higher resolution:** Better quality, more expensive
- **Lower resolution:** Lower quality, cheaper
- **Find balance** for your needs

---

## 🚨 Troubleshooting

### Error: "No credentials"

**Fix:**
- Add OpenAI API key in credentials
- Make sure key is valid

### Error: "Invalid prompt"

**Fix:**
- Check prompt format
- Remove special characters if needed
- Simplify prompt

### Error: "Video generation failed"

**Fix:**
- Check API key is valid
- Verify you have credits/quota
- Try simpler prompt
- Check OpenAI status

### Video Quality Issues

**Fix:**
- Increase resolution
- Improve prompt (more descriptive)
- Try `sora-2-pro` model (if available)

---

## 📚 Resources

**OpenAI Sora 2:**
- n8n Docs: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations/
- OpenAI Pricing: https://openai.com/pricing
- OpenAI API Docs: Check OpenAI website

**n8n:**
- Community: https://community.n8n.io/
- Workflows: https://n8n.io/workflows/

---

## ✅ Checklist

**Setup:**
- [ ] Add "OpenAI Video Operations" node
- [ ] Configure OpenAI credentials
- [ ] Set model (sora-2 or sora-2-pro)
- [ ] Add "Convert Script to Prompt" code node
- [ ] Connect nodes properly
- [ ] Test with one video

**Optimization:**
- [ ] Check video quality
- [ ] Adjust resolution if needed
- [ ] Optimize prompt
- [ ] Monitor costs
- [ ] Add download/post nodes

---

## 🎯 Next Steps

1. **Add Sora 2 node** to workflow
2. **Add code node** to convert script to prompt
3. **Test with one video**
4. **Check quality/cost**
5. **Optimize if needed**
6. **Add download/post automation**

---

**Ready to set up? Let me know if you need help with any step!** 🎬
