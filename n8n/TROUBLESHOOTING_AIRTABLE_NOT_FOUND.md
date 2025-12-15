# Troubleshooting Airtable "NOT_FOUND" Error

## The Error
```
The resource you are requesting could not be found
NOT_FOUND
```

This means n8n can't find your Airtable base or table. Let's fix it step by step.

---

## Step 1: Verify Your Base ID

### Get Your Base ID:
1. Go to https://airtable.com/api
2. Find your "Automation Tracking" base
3. Copy the Base ID (starts with `app` - looks like `appXXXXXXXXXXXXXX`)

### Check in n8n:
1. In n8n, go to **Settings** → **Environment Variables**
2. Look for `AIRTABLE_APP_ID`
3. **Does it exist?** If not, add it:
   - Click "Add Variable"
   - Name: `AIRTABLE_APP_ID`
   - Value: Your Base ID (e.g., `appXXXXXXXXXXXXXX`)
   - Click "Save"

4. **Does it match?** Compare:
   - The Base ID in n8n environment variable
   - The Base ID from airtable.com/api
   - They must match EXACTLY

---

## Step 2: Verify Table Name

### In Airtable:
1. Open your "Automation Tracking" base
2. Check the table name at the top
3. It must be exactly: **"Posted Content"** (with a space, capital P and C)

### In n8n Node:
1. Click on **"Check If Already Posted"** node
2. Look at the "Table" field
3. It should say: **"Posted Content"**
4. If it's different, change it to exactly: `Posted Content`

**Common mistakes:**
- ❌ "PostedContent" (no space)
- ❌ "posted content" (lowercase)
- ❌ "Posted  Content" (double space)
- ✅ "Posted Content" (correct)

---

## Step 3: Verify API Token Has Access

### Check Token Permissions:
1. Go to https://airtable.com/create/tokens
2. Find your token (or create a new one)
3. Make sure it has:
   - **Access to "Automation Tracking" base**
   - **Scopes:** `data.records:read` and `data.records:write`

### Check in n8n:
1. Go to **Credentials** → Find your Airtable credential
2. Click to edit it
3. Make sure the API token is correct
4. If you're not sure, create a new token and update the credential

---

## Step 4: Test the Base ID Directly

Instead of using the environment variable, try hardcoding it temporarily:

1. Click on **"Check If Already Posted"** node
2. In the "Application" field, replace `{{$env.AIRTABLE_APP_ID}}` with your actual Base ID
3. For example: `appXXXXXXXXXXXXXX` (your actual ID)
4. Click "Execute step"
5. **Does it work now?**
   - ✅ If YES: The environment variable isn't set correctly
   - ❌ If NO: The Base ID itself is wrong, or the table name is wrong

---

## Step 5: Verify Field Names

The node uses a filter: `URL = '{{$json["link"]}}'`

Make sure your Airtable table has a field named exactly **"URL"** (capital letters, no spaces before/after).

### Check in Airtable:
1. Open "Posted Content" table
2. Look at the column headers
3. First field should be: **"URL"** (not "A URL" or "URL Field")

---

## Step 6: Check the Node Configuration

In the **"Check If Already Posted"** node, verify:

1. **Operation:** Should be "Read"
2. **Application:** Should be `{{$env.AIRTABLE_APP_ID}}` OR your Base ID directly
3. **Table:** Should be `Posted Content` (exact match, with space)
4. **Filter By Formula:** Should be `URL = '{{$json["link"]}}'`
5. **Credential:** Should be connected to your Airtable credential

---

## Step 7: Test with a Simple Read

Try reading ALL records (no filter) to test the connection:

1. Click **"Check If Already Posted"** node
2. In "Filter By Formula", temporarily clear it (leave empty)
3. Click "Execute step"
4. **Does it work?**
   - ✅ If YES: The filter formula might be wrong
   - ❌ If NO: The Base ID, Table name, or credentials are wrong

---

## Common Issues & Fixes

### Issue: "Environment variable not found"
**Fix:** Make sure `AIRTABLE_APP_ID` is set in Settings → Environment Variables

### Issue: "Base ID is wrong"
**Fix:** Get the correct Base ID from https://airtable.com/api

### Issue: "Table name doesn't match"
**Fix:** Table name must be exactly "Posted Content" (case-sensitive, with space)

### Issue: "Token doesn't have access"
**Fix:** Create a new token at https://airtable.com/create/tokens with access to your base

### Issue: "Field name is wrong"
**Fix:** First field must be named exactly "URL" (not "A URL")

---

## Quick Checklist

Before testing again, verify:

- [ ] Base ID is correct (from airtable.com/api)
- [ ] Base ID is set in n8n environment variable `AIRTABLE_APP_ID`
- [ ] Table name is exactly "Posted Content" (with space)
- [ ] API token has access to "Automation Tracking" base
- [ ] API token is correctly entered in n8n credentials
- [ ] First field in Airtable table is named "URL"
- [ ] Credential is connected to the "Check If Already Posted" node

---

## Still Not Working?

If you've checked everything above and it still doesn't work:

1. **Create a fresh Airtable base** using the prompt in `AIRTABLE_SETUP_TWITTER_ONLY.md`
2. **Get a new API token** with full access
3. **Update the environment variable** with the new Base ID
4. **Test again**

Sometimes starting fresh is faster than debugging!

