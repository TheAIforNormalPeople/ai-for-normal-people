# Sora 2 Speed Optimization - Reduce Wait Time

## The Problem
Sora 2 video generation takes 30-120+ seconds, which can cause timeouts in n8n.

## Quick Fixes

### 1. Lower Resolution (Fastest Solution)

In your "Generate a video" node:
- **Current:** `1080x1920` (high quality, slow)
- **Change to:** `720x1280` (lower quality, faster)
- **Or:** `512x896` (lowest quality, fastest)

Lower resolution = faster generation = less timeout risk

### 2. Use Sora 2 (not Sora 2 Pro)

- **Sora 2:** Faster, cheaper
- **Sora 2 Pro:** Slower, higher quality

If you're using Pro, switch to regular Sora 2 for speed.

### 3. Increase n8n Timeout

In "Generate a video" node:
- **Options** → **Timeout:** Set to `600` seconds (10 minutes)
- This gives Sora 2 enough time to finish

### 4. Simplify Prompt Even More

The prompt might still be too detailed. Try minimal version:

```
TV-headed character in glitchy space. Speaks about: [topic]. TV screen shows: [visuals]. 12 seconds. Vertical format.
```

### 5. Check OpenAI Status

Sometimes delays are on OpenAI's side:
- Check: https://status.openai.com
- High traffic = slower generation

## Recommended Settings for Speed

**For fastest generation:**
- Resolution: `512x896` or `720x1280`
- Model: `sora-2` (not pro)
- Timeout: `600` seconds
- Prompt: As short as possible

**Trade-off:** Lower quality but much faster, less timeout risk.

## Alternative: Generate Videos Manually

If automation is too slow/unreliable:
1. Use n8n to generate the prompt
2. Copy prompt to OpenAI's Sora 2 interface
3. Generate video manually
4. Download and post

This gives you more control and avoids timeout issues.
