# n8n Setup Status Checklist

## Quick Status Check

Check off what you've completed:

### ✅ Airtable Setup
- [ ] Created "Automation Tracking" base
- [ ] Created "Posted Content" table
- [ ] Added fields: URL, Platform, Posted Date, Tweet Text, Tweet URL
- [ ] Got Base ID from https://airtable.com/api
- [ ] Created API token at https://airtable.com/create/tokens
- [ ] Token has access to "Automation Tracking" base
- [ ] Token has scopes: `data.records:read` and `data.records:write`

### ✅ n8n Workflow
- [ ] n8n is running (http://localhost:5678)
- [ ] Imported workflow from `auto-tweet-new-episodes-v2.json`
- [ ] Workflow is visible in n8n

### ✅ Environment Variables
- [ ] Set `AIRTABLE_APP_ID` in n8n Settings → Environment Variables
- [ ] Value is your Base ID (e.g., `appXXXXXXXXXXXXXX`)

### ✅ Credentials
- [ ] Created Airtable credential in n8n
- [ ] Created Anthropic (Claude) credential in n8n
- [ ] Created Twitter credential in n8n
- [ ] Connected Airtable credential to "Check If Already Posted" node
- [ ] Connected Airtable credential to "Log to Airtable" node
- [ ] Connected Anthropic credential to "Generate Tweet via Claude" node
- [ ] Connected Twitter credential to "Post to Twitter" node

### ✅ Node Configuration
- [ ] "Check If Already Posted" node:
  - [ ] Base field shows: `{{$env.AIRTABLE_APP_ID}}` OR your Base ID
  - [ ] Table field shows: `Posted Content`
  - [ ] Operation is: `search`
  - [ ] Filter formula: `URL = '{{$json["link"]}}'`
  - [ ] Credential is connected
- [ ] "Log to Airtable" node:
  - [ ] Base field shows: `{{$env.AIRTABLE_APP_ID}}` OR your Base ID
  - [ ] Table field shows: `Posted Content`
  - [ ] Operation is: `create`
  - [ ] Credential is connected

### ✅ Testing
- [ ] Tested "RSS Feed Reader" node (executes successfully)
- [ ] Tested "Check If Already Posted" node (executes successfully)
- [ ] Tested "If Not Posted" node (executes successfully)
- [ ] Tested "Generate Tweet via Claude" node (executes successfully)
- [ ] Tested "Post to Twitter" node (executes successfully)
- [ ] Tested "Log to Airtable" node (executes successfully)
- [ ] Tested full workflow end-to-end

### ✅ Automation
- [ ] Set up schedule trigger (optional - can run manually for now)
- [ ] Workflow is active

---

## Where Are You Stuck?

### If "Check If Already Posted" node fails:
→ See `TROUBLESHOOTING_AIRTABLE_NOT_FOUND.md`

### If credentials aren't working:
→ See `N8N_SETUP_STEP_BY_STEP.md` → Step 4

### If workflow won't import:
→ See `IMPORT_UPDATED_WORKFLOW.md`

### If Twitter posting fails:
→ See `TWITTER_OAUTH_SETUP.md`

---

## Next Steps (Once Everything Works)

1. **Test manually:** Click "Execute Workflow" and watch it run
2. **Check results:**
   - Did it find a new episode in RSS?
   - Did it check Airtable?
   - Did it generate a tweet?
   - Did it post to Twitter?
   - Did it log to Airtable?
3. **Set up automation:** Add schedule trigger to run every 4-6 hours
4. **Monitor:** Check Airtable to see logged posts

---

## Quick Reference

**n8n URL:** http://localhost:5678

**Airtable Base ID:** Get from https://airtable.com/api

**Airtable Token:** Create at https://airtable.com/create/tokens

**Anthropic API Key:** Get from https://console.anthropic.com/

**Twitter API:** Get from https://developer.twitter.com/

---

## Current Status

Fill this in as you go:

**Last thing I completed:** _________________

**Currently working on:** _________________

**Stuck on:** _________________

**Next step:** _________________

