---
title: "Standing up a design system for a 0-to-1 habit-tracking app"
company: "Side project — Dummy Labs"
role: "Product Designer & front-end — solo"
period: "2025"
summary: "From zero to a token-based system shipping a real product."
category: "0-1 · Systems"
confidential: false
cover: "/placeholders/case-c-cover.svg"
coverRatio: "16/9"
order: 3
---
<!-- DUMMY: caso de estudio de ejemplo. Reemplazar por contenido real. -->

## Context and role

A self-initiated habit-tracking app, designed and built end-to-end. With no existing brand or codebase, the first product decision was infrastructural: a small design-token system that could carry a real, shipping product without ballooning into a full design system before there was anything to design.

## Problem, with evidence

Solo 0-1 work fails in a predictable way — every new screen reinvents spacing, colour and type, and by screen ten the thing is incoherent. The "evidence" here is preventive rather than diagnostic: across earlier prototypes I'd accumulated **four slightly different button paddings** and two greys doing the same job. The cost is compounding inconsistency and slow iteration.

## Constraints and tradeoffs

One person, evenings and weekends, no time for a component library nobody else would use. I deliberately scoped the system to **tokens plus a thin set of primitives**, not a full library with documentation site and Storybook. The tradeoff: less reusability theatre, faster shipping, and a system sized to exactly one product.

## The work

I defined colour, type, spacing and radius as CSS custom properties first, then built every screen from that single source. Progress visualisation was the signature surface — a ring that fills as a habit streak grows — and I constrained it to the same tokens so it never became a one-off. The key decision was sequencing: tokens before screens, primitives before features.

Before: ad-hoc values per prototype.
After: one token file, every screen downstream of it.

## Impact

New screens went from "redesign the basics each time" to assembling from primitives, which is the only reason a solo project reached a usable v1 at all. The mechanism — constrain first, design second — is the transferable lesson. *(Dummy project.)*

## Reflection

I over-built the colour ramp before I needed it. A token system earns its keep by what it prevents, so next time I'd add tokens only when a second screen actually demands them.
