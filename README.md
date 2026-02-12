# دعاء السنطاوي — موقع تعريفي

مشروع React + Vite + Tailwind لعرض خدمات ميك أب احترافية باللغة العربية (RTL).

تشغيل محليًا:

```bash
# تثبيت الاعتمادات
npm install

# تشغيل في وضع التطوير
npm run dev

# بناء
npm run build
```

ملاحظات:
- لا يوجد Backend؛ الحجوزات عبر WhatsApp.
- لتعديل أرقام الواتساب، حرر روابط `wa.me` في مكونات `Navbar`, `Hero`, `Services`, `FloatingWhatsApp`.
# دعاء السنطاوي — موقع ميك أب فاخر

Local development

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

What I changed
- Refined global styles for premium visuals (`src/index.css`).
- Improved hero, portfolio, services, footer, and navbar layouts.
- Implemented accessible skip-link and focus-visible states.
- Added interactive Floating WhatsApp panel with branch-specific messages.
- Added `STYLEGUIDE.md` with color, type, spacing tokens.

Notes for deployment
- Vite output is under `dist/`. Deploy to static host (Netlify/Vercel) or any static server.
- Replace placeholder phone number `201234567890` with the real number.

Optional next steps
- Provide final high-res photography and brand logo.
- Add analytics and SEO meta tags per language locales.
