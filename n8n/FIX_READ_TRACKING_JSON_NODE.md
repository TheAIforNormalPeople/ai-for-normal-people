# 🔧 FIX: Read Tracking JSON Node - File Path Error

**Error:** "Access to the file is not allowed. Allowed paths: /home/node/.n8n-files"

**Problem:** n8n restricts file access to a specific directory for security.

---

## ✅ SOLUTION: Use Allowed Path

n8n only allows file access in `/home/node/.n8n-files/`

### Step 1: Update File Path in Node

**In the "Read Tracking JSON" node:**

**File Path:**
```
/home/node/.n8n-files/posted-content.json
```

**Property Name:**
```
data
```

---

### Step 2: Create the File in Allowed Location

**Option A: If n8n is running in Docker:**
1. Copy the file to the allowed location:
   ```bash
   docker exec -it <n8n-container-name> sh
   mkdir -p /home/node/.n8n-files
   echo '[]' > /home/node/.n8n-files/posted-content.json
   ```

**Option B: If n8n is local/desktop:**
1. Find your n8n data directory (usually `~/.n8n` or `C:\Users\arick\.n8n`)
2. Create folder: `.n8n-files` (or `n8n-files`)
3. Create file: `posted-content.json` with content: `[]`

**Option C: Use n8n's file system (easiest):**
1. In n8n, go to "Files" section (if available)
2. Upload or create `posted-content.json` there
3. Use the path n8n provides

---

### Step 3: Update "Write Tracking JSON" Node Too

**Same path for the "Write Tracking JSON" node:**

**File Path:**
```
/home/node/.n8n-files/posted-content.json
```

**Property Name:**
```
data
```

---

## 🔄 ALTERNATIVE: Use Code Node Instead

If the file path restriction is too limiting, we can use a Code node to read/write JSON:

**Read Tracking JSON (Code Node):**
```javascript
// Read from allowed path
const fs = require('fs');
const path = '/home/node/.n8n-files/posted-content.json';

let trackingData = [];
try {
  const fileContent = fs.readFileSync(path, 'utf8');
  trackingData = JSON.parse(fileContent);
} catch (error) {
  // File doesn't exist yet, use empty array
  trackingData = [];
}

return [{
  json: {
    data: JSON.stringify(trackingData),
    trackingData: trackingData
  }
}];
```

**Write Tracking JSON (Code Node):**
```javascript
// Write to allowed path
const fs = require('fs');
const path = '/home/node/.n8n-files/posted-content.json';

// Get merged logs from previous node
const mergedLogs = $input.first().json;

// Read existing data
let trackingData = [];
try {
  const fileContent = fs.readFileSync(path, 'utf8');
  trackingData = JSON.parse(fileContent);
} catch (error) {
  trackingData = [];
}

// Add new entries
if (Array.isArray(mergedLogs)) {
  trackingData = trackingData.concat(mergedLogs);
} else if (mergedLogs) {
  trackingData.push(mergedLogs);
}

// Write back
fs.writeFileSync(path, JSON.stringify(trackingData, null, 2));

return [{ json: { success: true, entries: trackingData.length } }];
```

---

## 🎯 RECOMMENDED: Use Allowed Path

**Simplest solution:** Use `/home/node/.n8n-files/posted-content.json`

1. Update both "Read Tracking JSON" and "Write Tracking JSON" nodes
2. Create the file in that location
3. Test the workflow

---

## 📝 QUICK FIX STEPS

1. **In "Read Tracking JSON" node:**
   - File Path: `/home/node/.n8n-files/posted-content.json`
   - Property Name: `data`

2. **Create the file:**
   - If Docker: `docker exec -it <container> sh -c "echo '[]' > /home/node/.n8n-files/posted-content.json"`
   - If local: Create file manually in n8n's data directory

3. **In "Write Tracking JSON" node:**
   - File Path: `/home/node/.n8n-files/posted-content.json`
   - Property Name: `data`

4. **Test:** Execute the "Read Tracking JSON" node - should work now!

---

**Let me know which option works for your n8n setup!**

