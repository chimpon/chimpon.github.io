---
# DUMMY — caso 0→1 / sistemas (empresa ficticia)
title: 'A design system for a bank that had none'
company: 'Brizo Bank'
role: 'Senior Product Designer — founded the system, team of 2'
period: '2022 – 2023'
summary: 'From 40 shades of grey to a tokenised system four squads actually adopted.'
confidential: false
wip: false
order: 3
accent: 'orange'
gradient: 'grad-orange'
tags: ['0 → 1', 'Design Systems']
tldr: 'Brizo Bank had four squads shipping four visual languages. I founded its first design system — **tokens, 68 components, and a governance model** — and got it adopted without a mandate from above.'
metrics:
  - { value: '68', label: 'Components shipped in v1' }
  - { value: '2.4×', label: 'Faster screen design (measured)' }
stats:
  - { value: '68', label: 'Components in v1' }
  - { value: '2.4×', label: 'Faster screen design' }
  - { value: '4/4', label: 'Squads adopted voluntarily' }
sections:
  - type: prose
    label: 'Context & role'
    title: 'Four squads, four visual languages, zero system'
    paragraphs:
      - 'Brizo is a mobile-first retail bank. When I joined, four product squads shipped independently — and it showed. An internal audit found **40 distinct greys, 12 button variants and 3 different bottom-sheet behaviours** in the same app. DUMMY figures.'
      - 'I pitched, founded and led the design system as a team of two: myself and a frontend engineer at 50% allocation. No mandate, no dedicated budget line — adoption had to be earned, not decreed.'
  - type: prose
    label: 'The problem, with evidence'
    title: 'Inconsistency was slowing everyone down'
    paragraphs:
      - 'Beyond the audit, we timed real work: designers spent **~30% of every feature cycle** redrawing primitives that already existed somewhere else, and QA logged a steady stream of “visual mismatch” bugs — 14% of all frontend tickets in the quarter we measured.'
      - 'The business case wrote itself once framed as time, not taste: the system would pay for itself if it saved each designer half a day a week.'
  - type: findings
    label: 'Constraints & tradeoffs'
    title: 'Decisions that kept the scope honest'
    items:
      - { icon: '🧱', title: 'Tokens before components', text: 'We spent the first month only on colour, type and spacing tokens. Boring, but every later component inherited the decisions for free.' }
      - { icon: '🚫', title: 'No big-bang migration', text: 'Old screens were never force-migrated. New work used the system; legacy screens converted only when touched. Adoption without resentment.' }
      - { icon: '🗳️', title: 'Contribution over control', text: 'Any squad could propose a component through an RFC template. We reviewed weekly. The system stayed theirs, not ours.' }
      - { icon: '✂️', title: 'What we cut', text: 'No theming engine, no white-label support, no marketing-site components in v1 — all requested, all deferred with a written rationale.' }
  - type: steps
    label: 'The work'
    title: 'From audit to adopted system'
    items:
      - { title: 'Interface inventory', text: 'Screenshotted and clustered every screen in the app. The 40-greys poster from this phase did more persuasion than any deck.' }
      - { title: 'Token architecture', text: 'Two-tier tokens (primitive → semantic) synced from Figma variables to code via a build step the engineer owned.' }
      - { title: 'Component library', text: '68 components in v1, each shipped as Figma asset + coded component + usage doc in the same week. Nothing existed in only one world.' }
      - { title: 'Governance', text: 'RFC process, weekly office hours, and a visible roadmap. Squads knew how to get things in — so they stopped forking.' }
  - type: visual
    label: 'Token architecture & component sheet'
    caption: 'DUMMY placeholder — replace with real artefacts (token map, component overview, before/after screens).'
    aspect: 'full'
  - type: results
    label: 'Impact'
    title: 'Adopted by choice, measured by time'
    paragraphs:
      - 'Twelve months after v1, with no adoption mandate at any point. DUMMY figures.'
    items:
      - { value: '4/4', label: 'Squads building new features on the system' }
      - { value: '2.4×', label: 'Faster screen design, measured on comparable features' }
      - { value: '−58%', label: 'Visual-mismatch bugs reported by QA' }
      - { value: '31', label: 'Components contributed by squads, not the core team' }
  - type: lessons
    label: 'Reflection'
    items:
      - { title: 'Sell time, not consistency', text: 'Nobody funds beauty. Everybody funds half a day per designer per week.' }
      - { title: 'Ship both worlds together', text: 'A component that exists in Figma but not in code (or vice versa) is a promise, not a component.' }
      - { title: 'I would start governance earlier', text: 'The RFC process arrived in month four; the first three months of ad-hoc requests created debt we later paid twice.' }
---

<!-- DUMMY: el cuerpo estructurado de este caso vive en el frontmatter
     (sections[]). Sustituye textos y cifras por los reales. -->
