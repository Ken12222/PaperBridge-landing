# PaperBridge landing page (React + Vite)

The PaperBridge waitlist page, built with React 19-style function components and plain CSS. No UI framework.

## Run it

```bash
npm install
cp .env.example .env.local     # then edit the two values
npm run dev                    # http://localhost:5173
npm test                       # renders the page and checks links, anchors, landmarks
npm run build                  # static files in dist/
npm run preview                # serve dist/ locally
```

## Set before you publish

| Variable | What it does |
|---|---|
| `VITE_WHATSAPP_URL` | Your WhatsApp community invite link. Every "Join waitlist" button uses it. Until you set it, buttons point to a placeholder. |
| `VITE_CONTACT_EMAIL` | Shows a Contact column in the footer. Leave empty to hide it. |

Variables are read at build time, so rebuild after changing them (on Netlify/Vercel, set them in the project settings).

## Where things are

| Change | Edit |
|---|---|
| Wording, FAQs, cards, nav | `src/content.js` |
| Name, link, email, year | `src/config.js` |
| Colors, fonts, spacing | top of `src/styles.css` (CSS variables) |
| Layout and structure | `src/components/*.jsx` |

## Deploy

`npm run build`, then upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own server). It is one page with no server code.

## Notes

- "PaperBridge" is a working name; change it in `src/config.js` and `index.html`.
- Fonts (Fraunces and Inter) load from Google Fonts. To avoid the third-party request, self-host them and remove the links in `index.html`.
- The ticker stops moving for visitors who ask their device to reduce motion.
