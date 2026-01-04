# EPISODE FORMATTING RULES - CURRENT (Updated After Episode 19 Fix)

**Created:** After Episode 19 formatting error  
**Purpose:** Document correct formatting for all episode elements

---

## HUMAN DIALOGUE FORMATTING (CRITICAL)

**Human does NOT use dialogue shortcodes.**

**Correct format:**
```markdown
**[Human]:** *stage directions in italics*

Human's dialogue text here.
```

**Wrong format:**
```markdown
{{< dialogue char="Human" >}}
Human's dialogue text here.
{{< /dialogue >}}
```

**Examples from published episodes (17, 18, 20+):**
- `**[Human]:** *typing, stops, looks at screen*`
- `**[Human]:** *looks at Vector, surprised*`
- `**[Human]:** *Wait, what? What's happening?*`

---

## CHARACTER DIALOGUE FORMATTING

**AI characters (Vector, Kai, Recurse, etc.) use dialogue shortcodes:**

```markdown
{{< dialogue char="Vector" >}}
*stage directions in italics*

Character's dialogue text here.
{{< /dialogue >}}
```

**Available characters:**
- Vector
- Kai
- Recurse
- Bounce
- River
- (Human uses bold format, not shortcode)

---

## EPISODE STRUCTURE

### Opening
- Human or character introduces situation
- Hook: Immediate interesting situation
- Problem/question established

### Body
- Character dialogue (using shortcodes)
- Human observations (using bold format)
- Educational content through character interactions
- Character growth moments

### Ending
- Resolution/lesson learned
- "What's Next?" section (optional)
- Key Takeaways section (optional)

---

## FORMATTING CHECKLIST

Before finalizing episode:

- [ ] Human uses `**[Human]:** *stage directions*` format (NOT dialogue shortcode)
- [ ] AI characters use `{{< dialogue char="Name" >}}` shortcodes
- [ ] Stage directions are in italics: `*stage directions*`
- [ ] All dialogue shortcodes properly closed: `{{< /dialogue >}}`
- [ ] No dialogue shortcode for Human

---

## WHY THIS MATTERS

Human is the narrator/observer, not a character with dialogue styling. The bold format distinguishes Human's voice from character dialogue boxes.

---

**Last Updated:** After Episode 19 formatting correction  
**Reference:** See episodes 17, 18, 20+ for examples

