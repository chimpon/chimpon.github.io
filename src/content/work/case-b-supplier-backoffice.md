---
title: "A supplier back-office that scales with the catalogue, not against it"
company: "Dummy Marketplace Co."
role: "Product Designer — supply squad"
period: "2023–2024"
summary: "Information architecture for a dense B2B operations tool."
category: "B2B · Architecture"
confidential: false
cover: "/placeholders/case-b-cover.svg"
coverRatio: "16/9"
order: 2
---
<!-- DUMMY: caso de estudio de ejemplo. Reemplazar por contenido real. -->

## Context and role

The supply side of the marketplace runs on an internal back-office used by operations staff and external partners to manage listings, availability and pricing. I joined the supply squad as the only designer alongside two PMs and a backend-heavy team. My remit was the information architecture and the day-to-day operational surfaces, not the public storefront.

## Problem, with evidence

The tool had grown by accretion: partners managed listings through **eleven separate screens** with overlapping responsibilities, and support tickets tagged "where do I edit X" were the single largest category that quarter. The cost was not aesthetic — it was task-completion time and a steady stream of escalations to a small ops team.

## Constraints and tradeoffs

Every screen had at least one power user who depended on its exact layout, so a clean-sheet redesign was off the table. There were also hard permission boundaries: internal staff and external partners see different slices of the same record. I chose to **preserve existing URLs and deep links** and refactor the navigation model underneath, trading a slower rollout for zero broken workflows.

## The work

I mapped the eleven screens to the actual jobs behind them and collapsed them into a record-centric model: one listing, one canonical view, with editing in context rather than on dedicated pages. I built a scoring panel that surfaced the few fields that drove ranking, so partners could see *why* a listing under-performed. The key decision was to make the data model legible in the interface — naming things by what the partner controls, not by how the system stored them.

## Impact

Pilot partners completed common edits with fewer page loads, and the "where do I edit X" ticket category shrank over the following cycles. The architecture, not a visual refresh, did the work. *(Dummy figures.)*

## Reflection

The hardest part was political, not visual: retiring screens people were attached to. Next time I would ship a visible "old view" escape hatch from day one to lower the resistance.
