# TikTok Node Installation Guide

**Package:** `n8n-nodes-tiktok`  
**Method:** Community Node

---

## ✅ Recommended: Install via n8n UI (Easiest)

### Steps:

1. **Open n8n** (your workflow editor)
2. **Go to:** Settings (gear icon, usually top right)
3. **Click:** Community Nodes (in sidebar)
4. **Click:** Install (button)
5. **Enter package name:** `n8n-nodes-tiktok`
6. **Click:** Install
7. **Wait for installation** (may take 30-60 seconds)
8. **Restart n8n** (if it prompts you, or do it manually)

**Done!** The TikTok node should now appear when you search for nodes.

---

## 🔧 Alternative: Install via npm (Self-Hosted)

**Only if UI method doesn't work or you prefer command line:**

### For Self-Hosted n8n:

1. **Find your n8n installation directory**
   - Usually: `/usr/local/lib/node_modules/n8n/` (Linux/Mac)
   - Or wherever n8n is installed

2. **Navigate to n8n directory:**
   ```bash
   cd /usr/local/lib/node_modules/n8n
   ```

3. **Install the package:**
   ```bash
   npm install n8n-nodes-tiktok
   ```

4. **Restart n8n:**
   ```bash
   # Restart n8n service (depends on your setup)
   # Could be: systemctl restart n8n
   # Or: pm2 restart n8n
   # Or just restart the n8n process
   ```

**Note:** This requires access to the n8n installation directory and may require root/admin access.

---

## ⚠️ Important Notes

### For Self-Hosted n8n:
- **UI method is recommended** (easiest, no command line needed)
- **npm method works** but requires access to n8n directory
- **Both methods require n8n restart** after installation

### For Cloud n8n:
- **Only UI method available** (Settings → Community Nodes)
- **No command line access** for cloud instances

---

## ✅ Which Method Should You Use?

### Use UI Method (Recommended):
- ✅ Easier (no command line)
- ✅ Works for both self-hosted and cloud
- ✅ No need to find n8n directory
- ✅ No admin/root access needed
- ✅ Built into n8n

### Use npm Method (If Needed):
- ⚠️ Only for self-hosted n8n
- ⚠️ Requires access to n8n directory
- ⚠️ May require admin/root access
- ⚠️ Need to know where n8n is installed

---

## 🔍 Verify Installation

**After installing (either method):**

1. **Restart n8n** (if not already done)
2. **Add new node** in workflow
3. **Search for:** "TikTok"
4. **Should see:** "TikTok" node in results
5. **If it appears:** ✅ Installation successful!
6. **If it doesn't:** ⚠️ Check installation logs, try restarting n8n

---

## 📋 Quick Steps Summary

**Recommended Method (UI):**
1. Open n8n
2. Settings → Community Nodes
3. Install → Enter `n8n-nodes-tiktok`
4. Install → Wait
5. Restart n8n
6. Done!

**Alternative Method (npm):**
1. `cd /path/to/n8n` (n8n installation directory)
2. `npm install n8n-nodes-tiktok`
3. Restart n8n
4. Done!

---

## ❓ Troubleshooting

### Node doesn't appear after installation:

1. **Restart n8n** (most common fix)
2. **Check installation logs** (n8n console/terminal)
3. **Verify package name:** `n8n-nodes-tiktok` (exact spelling)
4. **Check n8n version** (community nodes need compatible n8n version)
5. **Try UI method** if npm method didn't work

### Installation fails:

1. **Check internet connection** (needs to download from npm)
2. **Check npm/node version** (if using npm method)
3. **Check n8n permissions** (if using npm method)
4. **Check n8n logs** for error messages
5. **Try UI method** instead

---

## 🎯 Next Steps After Installation

1. ✅ **Install node** (done)
2. ⏳ **Get TikTok API credentials** (TikTok Developer Portal)
3. ⏳ **Add TikTok credentials** to n8n
4. ⏳ **Add TikTok node** to workflow
5. ⏳ **Configure and test**

---

**Recommendation: Use the UI method (Settings → Community Nodes) - it's much easier!** 🚀
