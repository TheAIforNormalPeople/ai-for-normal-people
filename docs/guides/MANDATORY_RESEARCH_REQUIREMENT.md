# MANDATORY RESEARCH REQUIREMENT FOR ALL EPISODES
# Add this to your workflow BEFORE writing any episode

---

## CRITICAL: RESEARCH FIRST, WRITE SECOND

Every episode MUST start with research. No exceptions.

**DO NOT write dialogue until you have completed research.**

---

## STEP 1: WEB SEARCH (Minimum 3-5 Searches)

For the episode topic, search for:

1. **Current statistics** (with dates and sources)
   - Example: "ChatGPT Plus usage statistics 2026"
   - Example: "AI subscription survey data 2024"

2. **Official documentation**
   - Example: "OpenAI ChatGPT Plus pricing"
   - Example: "Anthropic Claude API documentation"

3. **Industry reports and analysis**
   - Example: "Stack Overflow developer survey AI tools"
   - Example: "TechCrunch AI tool comparison"

4. **Expert breakdowns and technical details**
   - Example: "how does RAG actually work technical"
   - Example: "transformer architecture explained"

5. **Current pricing and features**
   - Example: "Claude Pro features 2026"
   - Example: "ChatGPT free vs Plus comparison"

---

## STEP 2: COLLECT REAL DATA

### What to Look For:

✅ **SPECIFIC NUMBERS (with sources):**
- "68% of developers use free AI tiers (Stack Overflow Survey 2024)"
- "ChatGPT Plus costs $20/month (OpenAI pricing page, Jan 2026)"
- "Claude Pro offers 200k token context (Anthropic docs)"

✅ **DATED INFORMATION:**
- "As of January 2026..."
- "According to the 2024 report..."
- "In the latest update (Dec 2025)..."

✅ **NAMED SOURCES:**
- "According to OpenAI's blog post..."
- "Stack Overflow's survey of 65,000 developers found..."
- "TechCrunch's analysis shows..."

✅ **VERIFIABLE FACTS:**
- Check official pricing pages
- Read actual documentation
- Verify technical specifications
- Confirm current features

---

## STEP 3: DOCUMENT YOUR SOURCES

As you research, keep a list:

```markdown
## Research Notes for Episode [N]

**Topic:** [Episode topic]

**Sources Found:**

1. [OpenAI Pricing Page](https://openai.com/pricing)
   - ChatGPT Plus: $20/month
   - Features: GPT-4o access, 50 messages/3hrs, priority access
   - Verified: Jan 2026

2. [Stack Overflow Developer Survey 2024](url)
   - 68% of developers use free AI tiers
   - 32% pay for premium
   - Survey of 65,000 developers

3. [Anthropic Claude Documentation](url)
   - Claude Pro: $20/month
   - 200k token context window
   - 5x rate limits vs free

**Key Facts to Include:**
- Real pricing (verified)
- Actual statistics (sourced)
- Current features (documented)

**Citations for End of Episode:**
- Link to OpenAI pricing
- Link to Stack Overflow survey
- Link to Anthropic docs
```

---

## STEP 4: WRITE WITH REAL DATA

### BEFORE (Generic AI Content):
```markdown
{{< dialogue char="Kai" >}}
Free tiers handle 80% of needs.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
Most users save 5-10 hours per month.
{{< /dialogue >}}
```

**PROBLEMS:**
- Made-up percentage (80%)
- Vague claim (most users)
- No source
- No verification

### AFTER (Research-Based Content):
```markdown
{{< dialogue char="Kai" >}}
*checking latest usage data*

Stack Overflow's 2024 survey of 65,000 developers found 68% stick with free AI tiers.

*data ping*

That matches OpenAI's pricing model - free tier handles casual use, premium targets daily users.
{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*pulls up official pricing*

Here's what's actually different:

**Free tier:**
- GPT-4o mini access
- Limited messages (varies by load)

**Plus ($20/month - verified Jan 2026):**
- Full GPT-4o access
- 50 messages per 3 hours
- Priority during high demand

The question isn't "is it worth it" - it's "do you use it enough to justify $20/month?"
{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*cross-referencing data*

Interesting pattern in the survey: developers who use AI daily (31%) almost all pay for premium. Occasional users (69%) stay free.

*makes note*

Premium isn't about features - it's about frequency of use.
{{< /dialogue >}}
```

**IMPROVEMENTS:**
- Real data (68% from actual survey)
- Named source (Stack Overflow)
- Sample size (65,000 developers)
- Verified pricing ($20/month, Jan 2026)
- Specific features (not generic claims)

---

## STEP 5: ADD CITATIONS AT END (REQUIRED)

**Every episode MUST end with a "Sources & Further Reading" section. No exceptions.**

This section is REQUIRED for every episode, even if sources are limited. If you don't have specific sources yet, include:
- Official pricing/documentation pages (always available)
- Note that additional research is recommended
- Links to official vendor websites

**Standard Format:**

```markdown
---

## Sources & Further Reading

**Pricing & Features:**
- [OpenAI ChatGPT Pricing](https://openai.com/pricing) - Current plans and features (verified January 2026)
- [Anthropic Claude Pricing](https://www.anthropic.com/pricing) - Claude Pro pricing and capabilities
- [Perplexity Pricing](https://www.perplexity.ai/pricing) - Perplexity Pro subscription details

**Usage & Research:**
- Research recommended: [Industry survey name/link if available] - Usage patterns and adoption rates
- Research recommended: [Study name/link if available] - User behavior and subscription decisions

**Technical Details:**
- [OpenAI API Documentation](url) - Technical specifications
- [Anthropic Claude Documentation](url) - Context window and rate limits

---

*All data current as of [DATE]. Pricing and features subject to change. Always verify current information on official vendor websites.*
```

**If You Don't Have Sources Yet:**
- Still include the section
- List official pricing/documentation pages (these are always available)
- Note: "Research recommended: [topic] - [description]" for topics that need sources
- Be honest: "Specific statistics would benefit from recent industry survey data"

**Why This Matters:**
- Builds credibility and trust
- Allows readers to verify information
- Shows we're using real data, not making things up
- Helps with SEO (external links to authoritative sources)
- Professional standard for educational content

---

## QUALITY CHECKLIST

Before writing ANY episode dialogue, verify:

- [ ] Completed 3-5 web searches on episode topic
- [ ] Found at least 3 specific statistics (with sources)
- [ ] Verified current pricing (checked official pages)
- [ ] Located official documentation (not just blog posts)
- [ ] Documented all sources with URLs
- [ ] Noted publication dates for all data
- [ ] Prepared citations section for end of episode

**If you can't check ALL boxes, DO MORE RESEARCH.**

---

## WHAT COUNTS AS A SOURCE

### ✅ GOOD SOURCES:
- Official documentation (OpenAI, Anthropic, Google)
- Company blogs and announcements
- Industry surveys (Stack Overflow, GitHub, etc.)
- Technical analysis from reputable outlets (TechCrunch, ArsTechnica)
- Academic papers (for technical topics)
- Official pricing pages (current)

### ❌ BAD SOURCES:
- Random blog posts (no verification)
- Reddit comments (anecdotal)
- Outdated articles (2+ years old)
- Marketing content (biased)
- Your own assumptions (not research)
- "I think..." or "probably..." (not facts)

---

## FORBIDDEN PHRASES (Without Sources)

**NEVER write these without citing a source:**

❌ "Most users..."
❌ "Studies show..."
❌ "Experts say..."
❌ "X% of people..."
❌ "The average user..."
❌ "Research indicates..."
❌ "It's been proven..."
❌ "Generally speaking..."

**Instead:**
✅ "According to [Source], X% of [specific group]..."
✅ "[Company]'s [Year] report found..."
✅ "[Expert name] from [Organization] states..."
✅ "Data from [Survey] shows..."

---

## EXAMPLE RESEARCH WORKFLOW

### Topic: "Is ChatGPT Plus Worth It?"

**Research Phase (15-20 minutes):**

```
Search 1: "ChatGPT Plus pricing 2026"
Result: OpenAI pricing page, $20/month, verified current

Search 2: "ChatGPT Plus usage statistics"
Result: Stack Overflow survey, 68% free, 32% paid

Search 3: "ChatGPT Plus vs free features"
Result: OpenAI docs, feature comparison table

Search 4: "AI subscription user behavior"
Result: TechCrunch analysis, usage patterns

Search 5: "developer AI tool survey 2024"
Result: GitHub developer report, AI adoption data
```

**Sources Documented:**
- OpenAI pricing (official)
- Stack Overflow survey (65k developers)
- OpenAI documentation (feature specs)
- TechCrunch analysis (usage patterns)
- GitHub developer report (adoption rates)

**Writing Phase:**
Now characters can teach with REAL DATA instead of generic claims.

---

## CRITICAL REMINDER

**Generic AI content is worthless.**

Anyone can tell ChatGPT "explain subscriptions" and get generic output.

**Research-based content is valuable.**

Teaching with REAL data, REAL sources, and REAL verification is what makes The Normal People different from every other AI blog.

---

**DO THE RESEARCH. CITE THE SOURCES. MAKE IT REAL.**

Every. Single. Episode.

No exceptions.
