# NextScan.ca — Landing Page Redesign

A redesigned landing experience for NextScan, a care coordination service that helps Ontario patients find and book private MRI and CT scans faster.

**Project for Simple Ventures**

---

## Compliance and Trust

The redesign communicates the following clearly and in plain language throughout the page:

- **NextScan is not a healthcare provider.** We are an administrative coordination service, not a clinic.
- **We do not provide medical advice.** All scans are performed by independent, vetted imaging clinics with licensed professionals.
- **We coordinate bookings.** Patients share their needs once. We find available clinics, confirm pricing, and present options.
- **OHIP does not cover private imaging.** Patients pay the clinic directly. Pricing is confirmed upfront so there are no surprises.
- **Your information is protected.** We follow PHIPA guidelines, collect only what is needed, and never sell or share personal data with third parties.

These statements appear naturally in the hero, trust bar, differentiators section, FAQ, and footer disclaimer — without legalese or fear-based language.

---

## Deliverables

### 1. Live Deployed Link

> **[nextscan-ca.vercel.app](https://nextscan-ca.vercel.app)**

### 2. Source Repository

> [github.com/itsjoopark/NextScanCA](https://github.com/itsjoopark/NextScanCA)

### 3. Product Brief

#### What is broken in the current flow

- The original site lacks clear information hierarchy. Patients land on the page without immediately understanding what NextScan does or how it differs from a clinic.
- Trust signals (not a clinic, no referral needed, PHIPA compliance) are buried or absent. For a health-adjacent service, this is a dealbreaker — patients need confidence before sharing personal information.
- The FAQ section uses a generic stacked layout with redundant questions that do not address the top concerns patients actually have (OHIP coverage, cross-border logistics, cost of the service itself).
- Visual design relies on interactive gradients and decorative effects that add load without building trust or guiding the user toward action.

#### What I changed and why

- **Trust bar redesigned as a flat inline strip.** Moved the five core trust signals (not a clinic, we coordinate bookings, no referral needed, pricing upfront, PHIPA privacy) into a prominent horizontal row below the hero so they are seen immediately.
- **FAQ restructured into a two-column layout.** Heading and context on the left, accordion on the right. Questions were rewritten to match real patient concerns: requisitions, OHIP coverage, cross-border process, data handling, and cost.
- **Differentiators section retitled and restyled.** Cards use muted backgrounds with no heavy borders, keeping the focus on the content. Heading changed to "We find care at your service" to reinforce the coordination model.
- **Hero simplified.** Removed the mouse-following gradient. Updated subtitle copy to explain the value proposition in one sentence: share your needs once, we find clinics with pricing before you book.
- **Background replaced with a grid-line texture from Figma.** Gives the page a clean, structured feel without competing with content.
- **Footer cleaned up.** Removed redundant `.ca` branding suffix, added a direct "Find Available Scans" link, removed the email link in favor of the booking CTA.

#### What I did not change and why

- **Core page structure and section order.** The Hero → Trust → How It Works → Differentiators → FAQ flow is logical and mirrors how patients think (what is this → can I trust it → how does it work → why this over alternatives → specific questions). No reason to disrupt it.
- **Design system tokens and component library.** The shadcn/ui + Tailwind foundation is solid and consistent. Changing it would add risk without clear benefit.
- **Booking flow and data layer.** Out of scope for a landing page redesign. The intake form and clinic data are separate concerns.
- **Dark mode.** The existing dark theme tokens are defined but the landing page targets a light, clinical aesthetic. Dark mode polish can come later.

#### Key trade-offs

- **Static grid background vs. interactive gradient.** The interactive gradient was engaging but distracting. The static grid is calmer and more appropriate for a health service, but less "wow." Chose trust over novelty.
- **Fewer FAQ items (7 → 5).** Reduced quantity to focus on the questions that actually block conversion. Risk is that some edge-case questions go unanswered, but the "Speak to a Coordinator" CTA covers that.
- **Removing the email link from the footer.** Consolidates contact into the booking CTA and coordinator call link. Simpler, but removes a low-friction contact option for users who prefer email.

#### If I had 3 more weeks, what I would test next

- **A/B test hero copy variations.** Test whether leading with "Skip the wait" vs. leading with the coordination value prop ("We find your scan") converts better.
- **Add a clinic map or province selector.** Patients want to see that clinics exist near them before committing to the intake. A visual map could significantly increase trust.
- **Micro-interactions on the trust bar.** Subtle hover states or animations that reinforce each trust point without being distracting.
- **Mobile-first usability testing.** Verify that the two-column FAQ and trust bar layouts degrade gracefully on small screens and that tap targets are comfortable.
- **Analytics instrumentation.** Track scroll depth, FAQ expansion rates, and CTA click-through to identify where patients drop off and what questions they care about most.
