---
# DUMMY — caso B2B de arquitectura compleja (empresa ficticia)
title: 'Untangling roles & permissions for a freight platform'
company: 'Fletta'
role: 'Senior Product Designer — platform team, paired with a staff engineer'
period: '2023 – 2024'
summary: 'Rebuilt a permissions model that had grown into 240 unreadable toggles.'
confidential: false
wip: false
order: 2
accent: 'blue'
gradient: 'grad-blue'
tags: ['B2B', 'Information Architecture']
tldr: 'Fletta is a B2B freight-management SaaS. Its permissions screen had grown to **240 individual toggles** that admins were afraid to touch. We rebuilt the model around role templates and a “preview as” mode, and cut permission-related support tickets by more than a third.'
metrics:
  - { value: '−37%', label: 'Permission-related support tickets' }
  - { value: '4.6/5', label: 'Admin CSAT after rollout' }
stats:
  - { value: '−37%', label: 'Support tickets on permissions' }
  - { value: '4.6/5', label: 'Admin CSAT' }
  - { value: '240 → 9', label: 'Toggles → role templates' }
sections:
  - type: prose
    label: 'Context & role'
    title: 'A platform problem wearing a UI costume'
    paragraphs:
      - 'Fletta sells freight-management software to logistics operators — dispatchers, warehouse leads, accountants and drivers all touch the same shipments with very different rights. I was the **senior designer on the platform team**, working day-to-day with a staff engineer and the head of support.'
      - 'I owned research, the information architecture of the new model, and the admin-facing UI. The engineer owned the underlying policy system; we designed the model together because neither half worked without the other.'
  - type: prose
    label: 'The problem, with evidence'
    title: '240 toggles nobody dared to touch'
    paragraphs:
      - 'Five years of feature growth had each added “just one more checkbox”. The result: a settings page with **240 permission toggles**, no grouping logic, and names only the original developers understood.'
      - 'The cost was measurable: **19% of all support tickets** were permission-related, onboarding a new customer admin took a 90-minute guided call, and support had a private spreadsheet mapping toggles to what they actually did. DUMMY figures throughout.'
  - type: stakeholders
    label: 'Constraints & tradeoffs'
    title: 'Four rooms, four different definitions of “safe”'
    paragraphs:
      - 'The hard part was not drawing screens — it was that every stakeholder needed the migration to be safe in a different way, and some needs pulled in opposite directions.'
    items:
      - { role: 'Head of Support', need: 'Fewer tickets, not a new flood during migration', resolution: 'Old and new model ran side by side for one release; support could flip any account back instantly.' }
      - { role: 'Enterprise customers', need: 'Their hand-tuned toggle combinations preserved exactly', resolution: 'Every legacy account got an auto-generated “Custom” template capturing its current state, byte for byte.' }
      - { role: 'Engineering', need: 'Kill the legacy policy code within two quarters', resolution: 'We agreed to deprecate toggles API-side only after 95% of accounts had adopted templates.' }
      - { role: 'Sales', need: 'A permissions story they could demo in five minutes', resolution: 'The nine templates map to the nine job titles that appear in every deal — the demo tells itself.' }
  - type: prose
    label: 'Tradeoff'
    title: 'What we decided not to build'
    paragraphs:
      - 'We explicitly did **not** build a full custom-role editor in v1, even though power users asked for it. Usage data showed 92% of accounts used combinations that collapsed into nine patterns. Shipping the editor first would have meant migrating complexity instead of removing it. It stayed on the roadmap, gated on template adoption.'
  - type: steps
    label: 'The work'
    title: 'From audit to a model admins can reason about'
    items:
      - { title: 'Permission audit & clustering', text: 'Mapped all 240 toggles against 14 months of usage logs with the data team. 61 toggles had never been changed by anyone; 38 were duplicates with different names.' }
      - { title: 'Nine role templates', text: 'Card-sorted the remaining permissions with 12 customer admins into roles matching real job titles: Dispatcher, Warehouse Lead, Accountant, Driver, and five more.' }
      - { title: '“Preview as” mode', text: 'The decision that mattered most: admins can see the product exactly as any role sees it before saving. Fear of breaking things — not complexity — was the real blocker.' }
      - { title: 'Progressive disclosure for exceptions', text: 'Templates cover the 92%; per-permission overrides still exist, but live behind an “Advanced” layer with plain-language names rewritten with support.' }
  - type: visual
    label: 'Role template picker & preview-as mode'
    caption: 'DUMMY placeholder — replace with real admin screens (template picker, preview-as banner, advanced overrides).'
    aspect: 'full'
  - type: results
    label: 'Impact'
    title: 'Safety turned out to be the feature'
    paragraphs:
      - 'Rolled out to all new accounts at launch and to legacy accounts over two quarters. DUMMY figures.'
    items:
      - { value: '−37%', label: 'Permission-related support tickets within 3 months' }
      - { value: '90 → 25 min', label: 'Time to onboard a new customer admin' }
      - { value: '4.6/5', label: 'Admin CSAT on the new permissions flow' }
      - { value: '97%', label: 'Legacy accounts migrated to templates in two quarters' }
  - type: lessons
    label: 'Reflection'
    items:
      - { title: 'The audit was the design', text: 'Most of the value was created in the spreadsheet phase, before any UI. The nine templates fell out of the data almost by themselves.' }
      - { title: 'Design for fear, not just clarity', text: '“Preview as” did more for adoption than any visual simplification. In admin tools, confidence is the currency.' }
      - { title: 'I would prototype the migration earlier', text: 'We designed the target state first and the migration path second; the migration turned out to be the riskier design problem.' }
---

<!-- DUMMY: el cuerpo estructurado de este caso vive en el frontmatter
     (sections[]). Sustituye textos y cifras por los reales. -->
