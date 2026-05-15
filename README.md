# Profile Card

A frosted-glass profile card app with a winter theme, built with Next.js.

## Features
- Frosted glass card with animated snow background
- Editable username (click to type)
- Toggleable online/offline status dot
- Discord, GitHub, TikTok social links
- Volume and brightness sliders
- View count

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Deploy (framework auto-detected as Next.js)

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customization
- Edit `app/ProfileCard.js` to change username, age, bio, avatar emoji, social links
- Edit `app/globals.css` to change the background colors
- Swap the 🦌 emoji for an `<img>` tag to use a real profile picture
