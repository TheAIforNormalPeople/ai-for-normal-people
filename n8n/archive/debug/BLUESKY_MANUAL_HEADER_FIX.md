# ✅ Bluesky Fix: Manual Header (No Credentials Needed)

**I've updated the workflow to add the Authorization header manually instead of using credentials.**

## What Changed:

- Removed credential authentication
- Added `Authorization` header directly in the node
- Token is hardcoded (will need to update when it expires)

## In n8n UI:

1. **Open "Post to Bluesky" node**
2. **Set Authentication to "None"** (remove any credential)
3. **In Headers section, make sure you have:**
   - `Content-Type`: `application/json`
   - `Authorization`: `Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw`

4. **Make sure JSON body is correct:**
   ```json
   {
     "repo": "thenormalpeople.bsky.social",
     "collection": "app.bsky.feed.post",
     "record": {
       "$type": "app.bsky.feed.post",
       "text": "{{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}",
       "createdAt": "{{$now}}"
     }
   }
   ```

## ⚠️ Token Expiration:

When the token expires, you'll need to:
1. Run `get-bluesky-token.ps1` again
2. Update the Authorization header value in the node

**OR** we can add an authentication node that gets a fresh token each time (better long-term solution).

---

**The workflow file has been updated. Re-import it or manually update the node as shown above.**

