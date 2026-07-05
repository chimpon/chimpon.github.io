---
# DUMMY — caso B2C de conversión/retención (empresa ficticia)
title: 'Getting trial users to their first real win'
company: 'Bocado'
role: 'Senior Product Designer — only designer on the growth squad'
period: '2024 – 2025'
summary: 'A gamified first-week quest that turned trial curiosity into a paying habit.'
confidential: false
wip: false
order: 1
accent: 'green'
gradient: 'grad-mint'
tags: ['Retention', 'Gamification']
metrics:
  - { value: '+18%', label: 'Trial-to-paid conversion uplift' }
  - { value: '~43%', label: 'Quest completion rate' }
tldr: 'Bocado is a restaurant-membership app. Most trial users redeemed **one deal and vanished**. We replaced a planned streak system with a voluntary 5-step quest — and moved trial-to-paid conversion by double digits.'
stats:
  - { value: '+18%', label: 'Trial-to-paid conversion' }
  - { value: '~43%', label: 'Quest completion' }
  - { value: '6 wks', label: 'Concept to release' }
sections:
  - type: prose
    label: 'Context & role'
    title: 'One designer, one growth squad, one number to move'
    paragraphs:
      - 'Bocado is a membership app for restaurant deals operating in a dozen cities. I was the **only designer on the growth squad** — a PM, four engineers and a data analyst — and owned everything from problem framing to handed-off UI.'
      - 'The squad had a single quarterly goal: improve trial-to-paid conversion without touching pricing. My job was to find where new users fell out of love with the product, and design the mechanism that kept them in.'
  - type: chart
    label: 'The problem, with evidence'
    title: 'Most trial users were redeeming exactly one deal'
    paragraphs:
      - 'Behavioural data was blunt: **61% of trial users redeemed a single deal and never came back**. Users who reached three redemptions in their first week converted at more than twice the base rate. The product had a first-week problem, not a pricing problem.'
    chart:
      title: 'Deals redeemed during trial (cohort share)'
      sub: 'DUMMY data — Q3 2024 trial cohort, n=11,400'
      bars:
        - { label: '0', h: 38 }
        - { label: '1', h: 100, hl: true }
        - { label: '2', h: 46 }
        - { label: '3', h: 24 }
        - { label: '4+', h: 15 }
      legend:
        - { color: 'accent', label: 'Largest cohort: exactly one redemption' }
        - { color: 'muted', label: 'Everyone else' }
  - type: findings
    label: 'Constraints & tradeoffs'
    title: 'What we decided not to build'
    paragraphs:
      - 'The obvious answer was a streak system. We killed it on purpose — and the constraints we accepted made the design sharper.'
    items:
      - icon: '🔥'
        title: 'No streaks'
        text: 'Streaks punish missing a day, and eating out is not a daily behaviour. Loss-framed mechanics felt wrong for a category built on treats, not chores.'
      - icon: '💸'
        title: 'No monetary rewards'
        text: 'Finance vetoed a free-month incentive; it also teaches users to expect payment for basic actions. Recognition had to be the reward.'
      - icon: '5️⃣'
        title: 'Five tasks maximum'
        text: 'Every extra task had to predict retention or die. We cut the list from eleven candidate actions to the five that correlated with week-4 activity.'
      - icon: '🙋'
        title: 'Strictly voluntary'
        text: 'The quest could never block the app. That made the entry point the highest-risk design decision of the project.'
  - type: hypothesis
    label: 'Hypothesis'
    statement: 'If new trial users complete a short guided quest that gets them to three redemptions in week one, they will convert to paid at a meaningfully higher rate — without any monetary incentive.'
    rationale: 'Grounded in the redemption-cohort data: three first-week redemptions was the clearest behavioural line between users who stayed and users who churned. DUMMY rationale for illustration.'
  - type: quests
    label: 'The work'
    title: 'Five steps to a first real win'
    paragraphs:
      - 'The quest lives as a floating card on Discover — the default screen — and expands into a checklist sheet. Each step is a real product behaviour, not an engagement trick.'
    items:
      - { icon: '👀', title: 'See how Bocado works', text: 'A 30-second interactive tour that ends on a live deal near the user, not a slideshow.', xp: 'Step 1' }
      - { icon: '❤️', title: 'Save three restaurants', text: 'Seeds the personal feed and gives the recommender something to work with.', xp: 'Step 2' }
      - { icon: '🍽️', title: 'Redeem a first deal', text: 'The core action. The sheet deep-links straight into nearby redeemable deals.', xp: 'Step 3' }
      - { icon: '⭐', title: 'Rate the experience', text: 'Closes the loop and feeds restaurant quality scores.', xp: 'Step 4' }
      - { icon: '🏅', title: 'Redeem two more deals', text: 'Crosses the three-redemption line that predicts retention. Finishing earns a profile badge and a confetti moment.', xp: 'Step 5' }
  - type: visual
    label: 'Quest entry point & checklist sheet'
    caption: 'DUMMY placeholder — replace with real product screens (entry card on Discover, expanded checklist, completion state).'
    aspect: 'full'
  - type: steps
    label: 'Key decisions'
    title: 'Three calls that shaped the outcome'
    items:
      - { title: 'Entry point on Discover, not Home', text: 'Prototypes that relied on users finding the quest on Home saw ~9% engagement; a floating entry card on the default Discover screen saw ~46%. Same feature, different door. DUMMY figures.' }
      - { title: 'Progress over payoff', text: 'We tested badge + confetti against a discount reward in a fake-door test. Recognition performed within noise of the discount — at zero cost.' }
      - { title: 'Dismissible forever', text: 'One tap hides the quest permanently. Counter-intuitively, making it easy to leave raised completion: users who stayed had chosen to.' }
  - type: results
    label: 'Impact'
    title: 'Both bets paid off'
    paragraphs:
      - 'Shipped to 100% of new trials after a 4-week A/B test. All figures are DUMMY but directionally realistic.'
    items:
      - { value: '+18%', label: 'Trial-to-paid conversion uplift vs. control' }
      - { value: '~43%', label: 'Of new trial users completed the full quest' }
      - { value: '2.1×', label: 'Week-4 retention for quest completers vs. non-completers' }
      - { value: '0€', label: 'Incentive cost per converted user' }
  - type: quote
    text: '“The quest didn’t make people love the product. It removed everything standing between them and the moment they already would.”'
  - type: lessons
    label: 'Lessons learned'
    items:
      - { title: 'Achievement beats discounts', text: 'People respond to progress and status more than cash-value incentives — and the finance team sleeps better.' }
      - { title: 'Optional features live or die by their entry point', text: 'The feature never changed between prototypes; only its placement did. That one decision was worth 5× engagement.' }
      - { title: 'Constraints sharpen decisions', text: 'Having to justify every task forced the right question: which actions actually predict that someone stays?' }
  - type: nextsteps
    label: "What's next"
    items:
      - { title: 'Levels beyond redemptions', text: 'Let reviews and saves count toward progression, so the system reflects how people actually use the app.' }
      - { title: 'Seasonal quests', text: 'Limited-time themed versions to extend the mechanic past onboarding.' }
      - { title: 'Friendly competition', text: 'Shared progress with friends as a referral hook — currently being explored (see next project).' }
---

<!-- DUMMY: el cuerpo estructurado de este caso vive en el frontmatter
     (sections[]). Sustituye textos y cifras por los reales. -->
