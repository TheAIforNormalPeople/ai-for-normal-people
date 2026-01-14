# TikTok Node - npm Install Method

**Package:** `n8n-nodes-tiktok`  
**Method:** npm install (for self-hosted n8n)

---

## ✅ Quick Install (If Documentation Says So)

If the documentation says to use `npm install n8n-nodes-tiktok`, here's how:

---

## 🔧 Installation Steps

### Step 1: Find n8n Installation Directory

**Common locations on Windows:**
- `C:\Users\YourUsername\AppData\Roaming\npm\node_modules\n8n`
- `C:\Program Files\nodejs\node_modules\n8n`
- `C:\Program Files (x86)\nodejs\node_modules\n8n`
- Wherever you installed n8n globally

**How to find it:**
1. **Check where n8n is installed:**
   ```powershell
   npm list -g n8n
   ```
   
   Or:
   ```powershell
   Get-Command n8n
   ```

2. **Or check if n8n is in your npm global directory:**
   ```powershell
   npm root -g
   ```
   Then check: `npm root -g\n8n`

---

### Step 2: Navigate to n8n Directory

```powershell
cd "C:\Users\YourUsername\AppData\Roaming\npm\node_modules\n8n"
```

**Or whatever path you found in Step 1.**

---

### Step 3: Install TikTok Node

```powershell
npm install n8n-nodes-tiktok
```

**Wait for installation** (30-60 seconds)

---

### Step 4: Restart n8n

**Stop n8n** (if running):
- If running as service: Stop the service
- If running in terminal: Ctrl+C

**Start n8n again:**
- Start your n8n service/process

---

## ✅ Verify Installation

**After restarting n8n:**

1. **Open n8n** (your workflow editor)
2. **Add new node**
3. **Search for:** "TikTok"
4. **Should see:** "TikTok" node in results
5. **If it appears:** ✅ Installation successful!

---

## 🔍 Alternative: Global Install (If Needed)

**If the above doesn't work, try global install:**

```powershell
npm install -g n8n-nodes-tiktok
```

**Then restart n8n.**

---

## ⚠️ Important Notes

### For Self-Hosted n8n:
- **Must install in n8n directory** (not your project directory)
- **May need admin rights** (run PowerShell as admin)
- **Must restart n8n** after installation

### Directory Matters:
- ❌ **Don't run from:** Your project directory (`C:\Users\arick\SORA`)
- ✅ **Run from:** n8n installation directory (where n8n is installed)

---

## 📋 Quick Command (If You Know n8n Path)

**If you know where n8n is installed:**

```powershell
cd "C:\path\to\n8n\directory"
npm install n8n-nodes-tiktok
# Then restart n8n
```

**Example (if n8n is in default location):**
```powershell
cd "$env:APPDATA\npm\node_modules\n8n"
npm install n8n-nodes-tiktok
```

---

## ❓ Troubleshooting

### "Cannot find module" error:
- **Check:** Are you in the n8n directory?
- **Fix:** Navigate to n8n installation directory first

### "Permission denied" error:
- **Check:** Do you have admin rights?
- **Fix:** Run PowerShell as Administrator

### Node doesn't appear after install:
- **Check:** Did you restart n8n?
- **Fix:** Restart n8n service/process

### Can't find n8n directory:
- **Check:** Where did you install n8n?
- **Fix:** Check `npm list -g n8n` or `Get-Command n8n`

---

## 🎯 Summary

**Quick Steps:**
1. Find n8n directory: `npm root -g` or `Get-Command n8n`
2. Navigate to n8n directory
3. Run: `npm install n8n-nodes-tiktok`
4. Restart n8n
5. Done!

---

**If the documentation says to use npm install, this is the way!** 🚀
