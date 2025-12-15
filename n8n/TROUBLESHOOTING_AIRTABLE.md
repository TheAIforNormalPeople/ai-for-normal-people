# Troubleshooting Airtable "NOT_FOUND" Error

## Error: "The resource you are requesting could not be found"

This usually means one of these issues:

---

## CHECK 1: Environment Variable

1. In n8n, go to **Settings** → **Environment Variables**
2. Look for `AIRTABLE_APP_ID`
3. **Verify:**
   - Does it exist?
   - Is the value your actual Base ID? (should look like `appXXXXXXXXXXXXXX`)
   - No extra spaces or quotes?

**If missing or wrong:**
- Click "Add Variable" or edit existing
- Name: `AIRTABLE_APP_ID`
- Value: Your Base ID (just the ID, no quotes, no spaces)
- Save

---

## CHECK 2: Base ID Format

Your Base ID should:
- Start with `app`
- Be about 14-17 characters long
- Look like: `appAbCdEfGhIjKlMn`

**To get it:**
1. Go to https://airtable.com/api
2. Select your base
3. Copy the Base ID from the URL or API docs
4. It's NOT the base name - it's the ID

---

## CHECK 3: Table Name

The table name must be **exactly**: `Posted Content`

**Check:**
1. In Airtable, look at your table name (top left)
2. Is it exactly "Posted Content" (with space, capital P and C)?
3. Not "PostedContent" or "posted content" or "All Posts" (that's a view)

**If wrong:**
- Rename the table to exactly "Posted Content"

---

## CHECK 4: Credential Access

1. In n8n, click on "Check If Already Posted" node
2. Click on the credential dropdown
3. Verify the credential has:
   - Correct API token
   - Access to your base

**To fix:**
- Edit the credential
- Make sure the token has `data.records:read` scope
- Verify it's the token you just created

---

## CHECK 5: Test the Connection

In the node configuration:
1. Make sure **Base** field shows: `{{$env.AIRTABLE_APP_ID}}`
2. Make sure **Table** field shows: `Posted Content`
3. Try clicking "Execute step" again

---

## Quick Fix Checklist

- [ ] Environment variable `AIRTABLE_APP_ID` exists and has correct Base ID
- [ ] Base ID starts with `app` and is correct
- [ ] Table name is exactly "Posted Content"
- [ ] Credential has correct API token
- [ ] Token has `data.records:read` scope
- [ ] Base field shows `{{$env.AIRTABLE_APP_ID}}`
- [ ] Table field shows `Posted Content`

---

## Still Not Working?

Try this test:
1. In the node, change **Base** from `{{$env.AIRTABLE_APP_ID}}` to your actual Base ID directly (just for testing)
2. Execute step
3. If it works, the environment variable isn't set correctly
4. If it still fails, check table name and credential

