---
title: "AI Privacy: What's Actually Collected"
type: "episode"
date: 2025-12-29T09:00:00-05:00
draft: true
description: "Real privacy risks vs paranoia. Recurse investigates privacy policies, Kai quantifies risks, Vector explains what companies can do vs what they do. Learn what to avoid sharing."
tags: ["AI privacy", "AI Guide", "ChatGPT privacy"]
---

**[Human]:** *My friend refuses to use ChatGPT because "they're training on everything you say." Is that true? Should I be worried?*

*I've been putting all kinds of stuff into ChatGPT - work documents, personal notes, ideas for projects. If they're training on that, that's a problem. But I also don't want to be paranoid if it's not actually happening. What's the real—*

{{< dialogue char="Recurse" >}}
*Flips through privacy policies*

Let me tell you what's ACTUALLY happening with your data...

*Pulls up investigation dashboard*

OpenAI Privacy Policy, Section 3.2: "We may use Content to provide, maintain, and improve our Services." But training data usage is opt-in, not default.

Anthropic Privacy Policy: Similar - chat history stored, training usage is separate and opt-in.

Something's fishy about the "they train on everything" claim. Let me dig deeper...
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Analyzing patterns*`n`nPattern detection: User searches "AI privacy" include terms: ChatGPT privacy, AI data collection.

Privacy policy analysis:
- Chat history: Stored by default (all companies)
- Training data: Opt-in by default (not automatic)
- Data breaches: Risk exists (all cloud services)
- Employee access: Possible (for moderation/support)

Alert: Key distinction between chat storage and training data usage.
{{< /dialogue >}}

**[Human]:** *So what IS actually collected?*

{{< dialogue char="Vector" >}}
EXCELLENT question! Here's what's ACTUALLY collected:

**What IS collected (by default):**
- **Chat history** - All conversations are stored
- **Usage patterns** - How you use the service, what features you use
- **Device information** - Browser, device type, IP address
- **Account information** - Email, payment info (if you pay)

**What's NOT collected (by default):**
- **Training data** - Your chats are NOT used for training unless you opt-in
- **Private documents** - Files you reference externally (not uploaded) aren't stored
- **Third-party data** - Information from other services (unless you connect them)

**The key distinction:**
- **Chat storage** = Your conversations are saved (for your history, support, moderation)
- **Training usage** = Your conversations are used to train models (separate, opt-in)

**Most companies:** Store chats by default, use for training only if you opt-in!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But wait. Three questions:

1. If chats are stored, can employees see them?
2. What about data breaches - is my data safe?
3. Are there differences between companies?

Something's fishy about saying "it's safe" when data breaches happen all the time.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is RIGHT to be skeptical! Here's the reality:

**Can employees see your chats?**
- **YES** - For moderation, support, safety
- **Limited access** - Not all employees, only those who need it
- **Audited** - Access is logged and monitored
- **Risk exists** - Employees could potentially see sensitive data

**Data breach risk:**
- **YES** - All cloud services have breach risk
- **Probability** - Low but not zero (like all cloud services)
- **Impact** - Chat history could be leaked
- **Mitigation** - Companies use encryption, but breaches still happen

**Company differences:**
- **ChatGPT** - Stores chats, training is opt-in, employees can access for moderation
- **Claude** - Similar policy, training is opt-in
- **Gemini** - Google's privacy policy (more complex, data used for ads)
- **Open source** - Self-hosted options (you control data)

**The reality:** Your data IS stored, employees CAN access it, breaches ARE possible. The question is: Is the risk acceptable for you?
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*WHIRR*`n`nPrivacy risk assessment:

**High risk data:**
- Personal information (SSN, addresses, phone numbers)
- Financial information (account numbers, passwords)
- Medical information (health records, conditions)
- Legal information (contracts, confidential documents)
- Proprietary information (trade secrets, business plans)

**Low risk data:**
- General questions
- Public information
- Non-sensitive topics
- Educational content

**Mitigation strategies:**
- Use incognito/private mode (chats not saved to history)
- Don't share sensitive information
- Read privacy settings (opt out of training if concerned)
- Use self-hosted options (if technically capable)

Alert: No cloud service is 100% private. Assess risk based on data sensitivity.
{{< /dialogue >}}

**[Human]:** *So what should I avoid putting in ChatGPT?*

{{< dialogue char="Vector" >}}
EXCELLENT question! Here's what to avoid:

**Don't share:**
- **Personal identifiers** - SSN, addresses, phone numbers, email addresses
- **Financial information** - Account numbers, passwords, credit card info
- **Medical information** - Health records, conditions, medications
- **Legal information** - Contracts, confidential documents, legal strategies
- **Proprietary information** - Trade secrets, business plans, unpublished research
- **Passwords or security info** - Any authentication credentials

**Safe to share:**
- **General questions** - Public information, educational topics
- **Non-sensitive work** - General writing, research, brainstorming
- **Public information** - Things already published or public
- **Hypotheticals** - "What if" scenarios, not real data

**The rule:** If you wouldn't post it publicly, don't put it in ChatGPT. Even with privacy policies, data can be:
- Accessed by employees (for moderation/support)
- Leaked in breaches
- Used for training (if you opt-in)
- Subject to legal requests

**Better safe than sorry:** Treat AI like a public forum - don't share anything you want to keep private!
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Flips through notes*

But here's what I'm investigating: Are privacy policies actually enforced?

What if companies SAY they don't use data for training, but do anyway? What if employees access data inappropriately? What if breaches happen and companies don't disclose them?

Something's fishy about trusting privacy policies when enforcement is unclear.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Recurse is asking the HARD questions! Here's the reality:

**Are privacy policies enforced?**
- **Partially** - Companies try to follow policies, but mistakes happen
- **Audited** - Some companies have third-party audits
- **Legal risk** - Violations can lead to lawsuits and fines
- **Not perfect** - Enforcement isn't 100% guaranteed

**What if policies aren't followed?**
- **Legal consequences** - Companies can be sued, fined
- **Reputation damage** - Privacy violations hurt brand
- **Regulatory action** - GDPR, CCPA can impose penalties
- **But** - Enforcement takes time, damage is done

**The reality:** Privacy policies are promises, not guarantees. Companies try to follow them, but:
- Mistakes happen
- Employees make errors
- Breaches occur
- Policies change

**The practical approach:** Don't rely on privacy policies alone. Use best practices:
- Don't share sensitive data
- Use incognito mode for sensitive topics
- Read privacy settings
- Assume data could be accessed

**The key:** Privacy policies help, but they're not perfect. Act as if your data could be seen, and only share what you're comfortable with!
{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Reviewing data*`n`nPractical takeaway logged:

**What's collected:**
- Chat history (stored by default)
- Usage patterns
- Device information
- Training data (opt-in, not default)

**Privacy risks:**
- Employee access (for moderation/support)
- Data breaches (possible but low probability)
- Policy changes (companies can update policies)
- Legal requests (companies may comply with subpoenas)

**What to avoid sharing:**
- Personal identifiers
- Financial information
- Medical information
- Legal/confidential documents
- Passwords/security info

**Best practices:**
- Use incognito mode for sensitive topics
- Don't share anything you want to keep private
- Read privacy settings
- Assume data could be accessed

Detection risk: Low. General privacy advice.
{{< /dialogue >}}

**[Human]:** *Okay, so be careful about what I share, use incognito mode for sensitive stuff, and don't assume anything is 100% private. That makes sense.*

{{< dialogue char="Vector" >}}
EXACTLY! Be careful about what you share, use privacy features when available, and don't assume cloud services are 100% private.

Privacy policies help, but they're not guarantees. The safest approach: Don't share anything in AI that you want to keep completely private. Treat it like a public forum - if you wouldn't post it publicly, don't put it in ChatGPT!

FASCINATING how privacy works in practice - policies exist, but the safest approach is to be careful about what you share regardless, right?
{{< /dialogue >}}

