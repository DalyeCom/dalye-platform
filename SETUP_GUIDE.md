# Dalye Platform Setup Guide

## Zielbild

- Code -> GitHub
- Frontend -> Cloudflare Pages
- Dateien -> IDrive E2
- CDN / Routing / DNS / SSL -> Cloudflare

## GitHub Secrets

Im Repository `DalyeCom/dalye-platform` unter:

Settings -> Secrets and variables -> Actions

anlegen:

- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID
- IDRIVE_E2_ACCESS_KEY
- IDRIVE_E2_SECRET_KEY
- IDRIVE_E2_ENDPOINT

## Cloudflare Pages

- Project name: `dalye-web`
- Production branch: `main`
- Framework preset: `Vite`
- Build command: `pnpm build`
- Build output directory: `apps/web/dist`
- Root directory: `/`

## Cloudflare DNS

### Website
- `www.dalye.com` -> Cloudflare Pages
- optional `dalye.com` -> Redirect auf `www.dalye.com`

### CDN
- `cdn.dalye.com` -> CNAME auf IDrive E2 Hostname
- Proxy Status: Proxied
- TTL: Auto

## Cloudflare SSL/TLS

- SSL Mode: `Full`
- Always Use HTTPS: `On`
- Automatic HTTPS Rewrites: `On`

## Cloudflare Cache

Für `cdn.dalye.com`:

- Cache eligibility: Eligible for cache
- Edge TTL: 1 month
- Browser TTL: Respect origin

Für versionierte Assets:

- `Cache-Control: public, max-age=31536000, immutable`

## IDrive E2

### Bucket
- `dalye-prod-public`

### Empfohlene Struktur
- `images/`
- `videos/`
- `downloads/`
- `exports/`

### Beispielpfade
- `images/logo.png`
- `videos/intro.mp4`
- `downloads/brochure.pdf`

## Deployment Ablauf

Bei Push auf `main`:

1. pnpm installieren
2. Abhängigkeiten installieren
3. Frontend bauen
4. Deploy zu Cloudflare Pages
5. optional `assets/` nach IDrive E2 synchronisieren

## Lokaler Test

```bash
pnpm install
pnpm build
