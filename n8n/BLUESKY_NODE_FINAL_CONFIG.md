# ✅ Configure "Post to Bluesky" Node - Final Steps

**Now that the Code node is working, configure the HTTP Request node:**

---

## Step 1: Verify Connection

Make sure "Post to Bluesky" is connected to the **Code node** (not directly to "Generate Bluesky Post"):
- Code node → Post to Bluesky ✅

---

## Step 2: Configure Body

1. **Send Body:** ✅ (enabled)
2. **Body Content Type:** `JSON`
3. **Specify Body:** `Using JSON`
4. **JSON field:** Paste this:
   ```
   ={{$json}}
   ```

**This uses the entire output from the Code node as the request body.**

---

## Step 3: Verify Headers

Make sure you have these headers:

1. **Content-Type:** `application/json`
2. **Authorization:** `Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJFUzI1NksifQ.eyJzY29wZSI6ImNvbS5hdHByb3RvLmFwcFBhc3MiLCJzdWIiOiJkaWQ6cGxjOmZ1NjU3bHFyZ3dnNXhpeTVsZzJmZXNkbSIsImlhdCI6MTc2NjQzNjk4NywiZXhwIjoxNzY2NDQ0MTg3LCJhdWQiOiJkaWQ6d2ViOmRpc2NpbmEudXMtd2VzdC5ob3N0LmJza3kubmV0d29yayJ9.u_7zFGMT2VhD5kF9_NTk_8xDzzXl6OKauzGF0__1r4J_YiaW1a5f0c_bFA3ZHvFyVIiLrh5L7bHnXSHJFF4Wvw`

---

## Step 4: Verify Authentication

- **Authentication:** `None` (not "Generic Credential Type")

---

## Step 5: Test

Click "Execute step" - it should work now! 🎉

---

## ✅ Quick Checklist:

- [ ] Node connected to Code node (not Generate Bluesky Post)
- [ ] Body: "Using JSON" with `={{$json}}`
- [ ] Headers: Content-Type and Authorization
- [ ] Authentication: None
- [ ] Tested successfully

