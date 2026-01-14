# Twitter OAuth 2.0 Manual Flow with PKCE

## Complete Workflow Setup

Since OAuth 1.0a keeps giving 403 and n8n doesn't handle PKCE automatically, we'll do the OAuth 2.0 flow manually.

---

## Step 1: Generate PKCE Codes (Code Node)

**Node Name:** "Generate PKCE Codes"

**Code:**
```javascript
// Generate code_verifier (random 43-128 character string, URL-safe)
function generateCodeVerifier() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
    .substring(0, 43);
}

// Generate code_challenge from code_verifier using SHA256
async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hash));
  return btoa(String.fromCharCode(...hashArray))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Generate both
const codeVerifier = generateCodeVerifier();
const codeChallenge = await generateCodeChallenge(codeVerifier);

// Store in workflow data or pass through
return [{
  json: {
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    state: Math.random().toString(36).substring(2, 15) // Random state for security
  }
}];
```

**Position:** At the very start, before any Twitter operations

---

## Step 2: Build Authorization URL (Code Node)

**Node Name:** "Build Twitter Auth URL"

**Code:**
```javascript
const pkceData = $input.first().json;
const clientId = 'YOUR_CLIENT_ID'; // Get from Twitter Developer Portal
const redirectUri = 'http://localhost:5678/rest/oauth2-credential/callback'; // Or your actual callback

const authUrl = `https://twitter.com/i/oauth2/authorize?` +
  `response_type=code&` +
  `client_id=${clientId}&` +
  `redirect_uri=${encodeURIComponent(redirectUri)}&` +
  `scope=tweet.read%20tweet.write%20offline.access&` +
  `state=${pkceData.state}&` +
  `code_challenge=${pkceData.code_challenge}&` +
  `code_challenge_method=S256`;

return [{
  json: {
    auth_url: authUrl,
    code_verifier: pkceData.code_verifier,
    state: pkceData.state
  }
}];
```

**Replace:** `YOUR_CLIENT_ID` with your actual OAuth 2.0 Client ID from Twitter

---

## Step 3: Manual Authorization (Manual Step)

**Node Name:** "Authorize Twitter"

**Type:** Manual Trigger or HTTP Request (redirect)

**Option A - Manual:**
1. Copy the `auth_url` from previous node
2. Open in browser
3. Authorize
4. Copy the `code` from the callback URL

**Option B - HTTP Request (redirect):**
- Set up HTTP Request to redirect to auth_url
- User authorizes
- Capture callback

---

## Step 4: Extract Authorization Code (Code Node)

**Node Name:** "Extract Auth Code"

**Code:**
```javascript
// If you got the callback URL, extract the code
// This depends on how you captured it
const callbackUrl = $input.first().json.callback_url || '';
const urlParams = new URLSearchParams(callbackUrl.split('?')[1]);
const code = urlParams.get('code');
const state = urlParams.get('state');

// Get code_verifier from earlier (you'll need to store this)
const codeVerifier = $('Generate PKCE Codes').first().json.code_verifier;

return [{
  json: {
    code: code,
    state: state,
    code_verifier: codeVerifier
  }
}];
```

---

## Step 5: Exchange Code for Token (HTTP Request)

**Node Name:** "Get Twitter Access Token"

**Method:** POST
**URL:** `https://api.twitter.com/2/oauth2/token`

**Headers:**
- `Content-Type: application/x-www-form-urlencoded`
- `Authorization: Basic [base64(client_id:client_secret)]`

**Body (form-urlencoded):**
```
code={{$json.code}}
grant_type=authorization_code
redirect_uri=http://localhost:5678/rest/oauth2-credential/callback
code_verifier={{$json.code_verifier}}
```

**Response:** Will contain `access_token` and `refresh_token`

---

## Step 6: Store Token (Code Node)

**Node Name:** "Store Twitter Token"

**Code:**
```javascript
const tokenResponse = $input.first().json;

return [{
  json: {
    access_token: tokenResponse.access_token,
    refresh_token: tokenResponse.refresh_token,
    token_type: tokenResponse.token_type || 'Bearer',
    expires_in: tokenResponse.expires_in
  }
}];
```

---

## Step 7: Update "Post to Twitter" Node

**Node Name:** "Post to Twitter"

**Method:** POST
**URL:** `https://api.twitter.com/2/tweets`

**Headers:**
- `Authorization: Bearer {{$('Store Twitter Token').first().json.access_token}}`
- `Content-Type: application/json`

**Body (JSON):**
```json
{
  "text": "={{$json['content'][0]['text']}}\n\n{{$('Check If Posted').first().json.episodeLink}}"
}
```

---

## Alternative: Store Token in Workflow Data

Instead of referencing nodes, store the token in workflow static data or a file, then read it when needed.

---

## Important Notes

1. **Token Expiration:** Access tokens expire. You'll need to refresh using `refresh_token`
2. **State Parameter:** Use it to verify the callback matches your request
3. **Code Verifier:** Must match the code_challenge you sent
4. **One-Time Setup:** Do this once, then store the token for reuse

---

**This is complex but will work. The token can be reused until it expires, then you refresh it.**

