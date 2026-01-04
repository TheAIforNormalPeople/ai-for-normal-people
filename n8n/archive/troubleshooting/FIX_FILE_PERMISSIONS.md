# 🔧 Fix: File Not Writable Error

The error "The file 'n8n/tracking/posted-content.json' is not writable" is a permissions or path issue.

---

## Solution 1: Check File Path (Most Likely Issue)

**If you're running n8n in Docker, the path might be different.**

**Check your "Write Tracking JSON" node:**
- **File Name:** Should be the full path relative to n8n's file system

**Common paths:**
- **Docker:** `/home/node/.n8n-files/tracking/posted-content.json`
- **Local:** `n8n/tracking/posted-content.json` or full path like `C:\Users\arick\SORA\aiforhumans\n8n\tracking\posted-content.json`

---

## Solution 2: Create Directory and Set Permissions

**If using Docker:**

1. **SSH into your Docker container:**
   ```bash
   docker exec -it <n8n-container-name> sh
   ```

2. **Create the directory:**
   ```bash
   mkdir -p /home/node/.n8n-files/tracking
   ```

3. **Set permissions:**
   ```bash
   chmod -R 777 /home/node/.n8n-files/tracking
   ```

4. **Create empty file:**
   ```bash
   echo '[]' > /home/node/.n8n-files/tracking/posted-content.json
   chmod 666 /home/node/.n8n-files/tracking/posted-content.json
   ```

5. **Update "Write Tracking JSON" node:**
   - **File Name:** `/home/node/.n8n-files/tracking/posted-content.json`

---

## Solution 3: Use Absolute Path (Local n8n)

**If running n8n locally (not Docker):**

1. **Check where n8n stores files:**
   - Usually in: `C:\Users\<username>\.n8n\` or similar
   - Or in your workspace: `C:\Users\arick\SORA\aiforhumans\n8n\tracking\`

2. **Create the directory if it doesn't exist:**
   ```powershell
   New-Item -ItemType Directory -Force -Path "C:\Users\arick\SORA\aiforhumans\n8n\tracking"
   ```

3. **Create empty file:**
   ```powershell
   Set-Content -Path "C:\Users\arick\SORA\aiforhumans\n8n\tracking\posted-content.json" -Value "[]"
   ```

4. **Update "Write Tracking JSON" node:**
   - **File Name:** `C:\Users\arick\SORA\aiforhumans\n8n\tracking\posted-content.json`
   - Or relative path: `n8n/tracking/posted-content.json` (if n8n's working directory is correct)

---

## Solution 4: Check n8n File Storage Location

**Find where n8n stores files:**

1. **Check n8n settings** for file storage path
2. **Or check environment variables:**
   - `N8N_USER_FOLDER` - where n8n stores user files
   - Usually: `/home/node/.n8n-files` (Docker) or `~/.n8n` (local)

3. **Use that path + your file:**
   - Example: `/home/node/.n8n-files/n8n/tracking/posted-content.json`

---

## Solution 5: Use Environment Variable

**If n8n has a configured file storage path, use it:**

In "Write Tracking JSON" node:
- **File Name:** `={{$env.N8N_USER_FOLDER}}/n8n/tracking/posted-content.json`

Or if you have a custom path:
- **File Name:** `={{$env.CUSTOM_FILE_PATH}}/posted-content.json`

---

## Quick Check: What Path Does "Read Tracking JSON" Use?

**Check your "Read Tracking JSON" node:**
- What **File Name** does it use?
- Use the **same path** in "Write Tracking JSON"

**They should match!**

---

## Most Likely Fix

**If "Read Tracking JSON" works, copy its exact path to "Write Tracking JSON":**

1. **Open "Read Tracking JSON" node**
2. **Note the exact "File Name" value**
3. **Copy it to "Write Tracking JSON" node**
4. **Make sure the directory exists and is writable**

---

## Docker-Specific Fix

**If using Docker, the path is likely:**

```
/home/node/.n8n-files/n8n/tracking/posted-content.json
```

**Steps:**
1. Create directory in container
2. Set permissions
3. Update "Write Tracking JSON" to use this path

---

## Test

**After fixing:**
1. Run the workflow
2. Check if file is created/updated
3. Verify file exists at the path you specified




