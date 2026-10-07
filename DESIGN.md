# Mannu Design Direction

## Goal
Make the site feel like a handmade, over-engineered gift dossier someone built specifically for one person — not a generic dark quiz UI.

## Visual system
- Base: warm paper / ivory neutral ramp
- Ink: warm near-black
- Accent: one intentional postal red
- No purple gradients, neon glows, glassmorphism, pulsing status dots, or multi-color competition
- Typography: Instrument Serif for personality + Manrope for utility copy
- Layout language: parcel labels, stamped marks, dossier grids, editorial whitespace

## Motion rules
- UI motion under 300ms
- Press feedback around 140ms with scale(.97)
- Question transitions use transform + opacity only
- No infinite decorative motion
- No hover-scale-on-everything
- Delight reserved for the rare completion stamp
- Respect prefers-reduced-motion

## Responsive rules
- Compact: 16px outer margin, single-column answer layout
- Medium+: 24–36px outer margin
- Desktop: asymmetrical intro composition and side case strip
- Touch targets >= 44px

## Source guidance consulted
- Emil Kowalski skills: animation standards / restraint
- Anthropic frontend-design: distinctive, context-specific visual direction; avoid generic AI aesthetic
- UI/UX Pro Max: design-system and UI-styling guidance
- Material 3 skill: spacing and responsive layout principles
- Karpathy guidelines: simple, readable implementation and careful change scope
- Animate skill: transform/opacity motion and reduced-motion accessibility
- Design Motion Principles: anti-AI-slop motion checklist
- AgentsORG Design Engineering: monochromatic palette + one accent, OKLCH color ramps

## Source repositories
- https://github.com/emilkowalski/skills
- https://github.com/anthropics/skills
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://github.com/hamen/material-3-skill
- https://github.com/multica-ai/andrej-karpathy-skills
- https://github.com/delphi-ai/animate-skill
- https://github.com/kylezantos/design-motion-principles
- https://github.com/AgentsORG/design-engineering

Note: literal `git clone` was attempted in the runtime but outbound GitHub DNS is blocked there. The connected GitHub API was used to read the actual skill files instead.
