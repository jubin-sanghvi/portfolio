## Project-Specific Agent Rules

- Build checks: `npm run build` in background bash, not subagent
- Lighthouse audits: background bash
- Deploy: use existing .claude/commands/deploy.md

# Portfolio -- Jubin Sanghvi

Personal portfolio website for Jubin Sanghvi at jubinsanghvi.com.

## Stack

- **Framework:** Astro 5.x, static output, no UI library, no Tailwind
- **Hosting:** GitHub Pages, deployed via GitHub Actions on push to main
- **Repository:** portfolio
- **Domain:** jubinsanghvi.com

## CSS Architecture

Load order: tokens.css → global.css → animations.css → components.css → utilities.css → print.css

All colors, fonts, and motion settings come from `src/data/theme.ts`. No hardcoded colors or font names elsewhere.

## Data Layer

All content lives in `src/data/`, never hardcoded in pages or components.

## Component Rules

- Each component owns one responsibility
- Stay under 100 lines where possible

## GitHub Integration

Build-time fetch in `src/lib/github.ts` using `PORTFOLIO_GITHUB_PAT` env var. If missing, returns empty array silently.

## Contact Policy

LinkedIn only. No email or phone number exposed anywhere.

## How to Update Content

- **Add experience entry:** edit `src/data/experience.ts` only
- **Add project:** push a public repo to GitHub, it appears automatically on next build
- **Update resume:** replace `public/resume/Jubin_Sanghvi_Senior_Engineering_Manager.pdf`
- **Update profile photo:** replace `public/images/profile.jpg`
- **Change accent color:** edit `themeConfig.accent` in `src/data/theme.ts`
- **Change fonts:** edit `themeConfig.fonts` in `src/data/theme.ts`
- **Site metadata:** edit `src/data/site.ts`

## Performance Target

Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO.

## Future Additions Ready

/writing page, blog via Astro content collections, RSS, Plausible analytics.
