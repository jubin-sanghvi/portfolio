# Jubin Sanghvi — Portfolio

Personal portfolio website at [jubinsanghvi.com](https://jubinsanghvi.com).

Built with Astro 5.x, deployed to GitHub Pages.

## Local development

```bash
npm install
cp .env.example .env   # add your GitHub PAT
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deployment

Push to `main`. GitHub Actions builds and deploys automatically.

## How to update content

- **Experience entries:** `src/data/experience.ts`
- **Projects (auto):** push a public GitHub repo and redeploy
- **Resume PDF:** replace `public/resume/Jubin_Sanghvi_Senior_Engineering_Manager.pdf`
- **Profile photo:** replace `public/images/profile.jpg`
- **Accent color or fonts:** `src/data/theme.ts`
- **Site metadata:** `src/data/site.ts`

## GitHub Pages setup

1. Push this repository to GitHub as `portfolio`
2. Go to Settings > Pages > Source > GitHub Actions
3. Add custom domain: `jubinsanghvi.com`
4. Enable Enforce HTTPS

## Porkbun DNS setup for GitHub Pages

Add these DNS records at porkbun.com for `jubinsanghvi.com`:

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     jubin-sanghvi.github.io
```

Propagation typically takes 10 to 30 minutes.
