# Twitter OAuth 2.0 PKCE Setup with Code Node

## The Problem
Twitter OAuth 2.0 requires PKCE (Proof Key for Code Exchange), but n8n 2.0.3 doesn't handle it automatically. We need to generate `code_verifier` and `code_challenge` manually.

## Solution: Use Code Node for PKCE

### Step 1: Create PKCE Generation Node

Add a Code node before your OAuth 2.0 credential setup:

**Node Name:** "Generate PKCE Codes"

**Code:**
```javascript
// Generate code_verifier (random 43-128 character string)
function generateCodeVerifier() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
    .substring(0, 43);
}

// Generate code_challenge from code_verifier (SHA256)
async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashBase64 = btoa(String.fromCharCode(...hashArray))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  return hashBase64;
}

// Generate both
const codeVerifier = generateCodeVerifier();
const codeChallenge = await generateCodeChallenge(codeVerifier);

return [{
  json: {
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  }
}];
```

### Step 2: Update OAuth 2.0 Credential

In your OAuth 2.0 credential settings:

**Auth URI Query Parameters:**
```
response_type=code&code_challenge={{$json.code_challenge}}&code_challenge_method=S256
```

**Note:** You'll need to reference the Code node output, but credentials might not support expressions. This is the limitation.

### Step 3: Alternative Approach - Manual Token Exchange

Since n8n credentials might not support dynamic PKCE, use HTTP Request nodes instead:

1. **Generate PKCE Codes** (Code node - use code above)
2. **Get Authorization Code** (HTTP Request - redirect to Twitter)
3. **Exchange Code for Token** (HTTP Request - include code_verifier)

## Actually, Better Solution:

**Just use OAuth 1.0a** - it was working, just needs fresh token with write permissions.

1. Go back to OAuth 1.0a credential
2. Make sure Twitter app permissions are "Read and write"
3. Click "Reconnect" to get fresh token
4. Test - should work!

---

**The PKCE approach is complex because n8n credentials don't easily support dynamic values. OAuth 1.0a is simpler and was already connecting.**

