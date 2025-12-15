# Import Updated Workflow (Airtable v2.1)

## What Changed

This updated workflow uses **Airtable node version 2.1** (latest) instead of version 1, which should fix the NOT_FOUND errors.

## Key Updates

1. **Airtable nodes upgraded to v2.1:**
   - "Check If Already Posted" node
   - "Log to Airtable" node

2. **Updated parameter structure:**
   - Base ID now uses proper reference format
   - Table name uses list mode
   - Filter formula moved to options

3. **Better error handling:**
   - Updated IF condition to handle empty records safely

---

## How to Import

### Option 1: Replace Existing Workflow

1. Open n8n (http://localhost:5678)
2. Open your existing "Auto-Tweet New Episodes" workflow
3. Click the **"..."** menu (top right)
4. Select **"Import from file"**
5. Choose: `aiforhumans/n8n/auto-tweet-new-episodes-v2.json`
6. Click **"Import"**
7. n8n will ask if you want to replace - click **"Replace"**

### Option 2: Create New Workflow

1. In n8n, go to **Workflows** → **Add workflow**
2. Click the **"..."** menu → **"Import from file"**
3. Choose: `aiforhumans/n8n/auto-tweet-new-episodes-v2.json`
4. Click **"Import"**

---

## After Importing

### 1. Connect Credentials

Click on each node and connect credentials:

- **"Check If Already Posted"**: Connect "Airtable account" credential
- **"Generate Tweet via Claude"**: Connect "Anthropic API" credential  
- **"Post to Twitter"**: Connect "Twitter account" credential
- **"Log to Airtable"**: Connect "Airtable account" credential

### 2. Verify Environment Variable

1. Go to **Settings** → **Environment Variables**
2. Make sure `AIRTABLE_APP_ID` is set
3. Value should be your Base ID (e.g., `appXXXXXXXXXXXXXX`)

### 3. Test the Workflow

1. Click **"Execute Workflow"** (top right)
2. Watch it run through each node
3. Check for errors

---

## What Should Work Now

✅ Airtable nodes use latest API (v2.1)  
✅ Base ID properly referenced  
✅ Table name correctly configured  
✅ Filter formula in correct location  
✅ Better error handling  

---

## If You Still Get Errors

### "NOT_FOUND" Error:
- Check Base ID in environment variable
- Verify table name is exactly "Posted Content"
- Make sure API token has access to the base

### "Credential not found":
- Connect credentials to each node (see step 1 above)

### "Environment variable not found":
- Set `AIRTABLE_APP_ID` in Settings → Environment Variables

---

## Differences from Old Version

**Old (v1):**
```json
"application": "{{$env.AIRTABLE_APP_ID}}",
"table": "Posted Content",
"filterByFormula": "URL = '{{$json[\"link\"]}}'"
```

**New (v2.1):**
```json
"base": {
  "__rl": true,
  "value": "={{$env.AIRTABLE_APP_ID}}",
  "mode": "id"
},
"table": {
  "__rl": true,
  "value": "Posted Content",
  "mode": "list"
},
"options": {
  "filterByFormula": "URL = '{{$json[\"link\"]}}'"
}
```

This new structure is what Airtable v2.1 expects!

