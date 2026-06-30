# Figma-Inspired Portfolio Redesign

## Goal
Redesign the portfolio UI taking inspiration from the Figma design at [Portfolio (Community)](https://www.figma.com/proto/FWoMTJnziF9d0LShaqLTsM/Portfolio--Community-?node-id=0-1). The redesign adapts the terminal-meets-developer aesthetic (Fira Code monospace, `#`-prefixed headers, bordered cards, purple accent) while keeping all existing content and technology choices intact.

## Design System (from Figma)
| Token        | Value      | Tailwind Custom Name |
|-------------|-----------|---------------------|
| Background   | `#282C33` | `bg-portfolio`     |
| Gray text    | `#ABB2BF` | `text-portfolio-gray` |
| White        | `#FFFFFF` | `text-white`        |
| Primary      | `#C778DD` | `text-portfolio-purple` / `border-portfolio-purple` |
| Font         | Fira Code  | Added via Google Fonts |

## Files to Change

### 1. `src/index.css` — New design tokens + utility classes
- Add `@import url('...')` for Fira Code from Google Fonts
- Define custom CSS variables for the portfolio colors
- Add monospace body font class
- Add `.dot-grid` utility for decorative dot patterns
- Add `.border-line` horizontal line separator class
- Keep existing animations

### 2. `src/components/SectionHeader.jsx` — `#section-name` format
- Replace gradient-bar heading with `#` + title format
- Purple `#` prefix + white title text + horizontal line separator
- Keep subtitle support

### 3. `src/components/Navbar.jsx` — Solid dark + `#` nav links
- Always-solid dark background (`bg-portfolio`)
- Logo: `MHKP` → purple `#` + name style
- Nav links: `#home`, `#about-me`, etc. with purple `#` and gray text
- Active link gets white text
- Keep mobile menu

### 4. `src/components/Hero.jsx` — Purple highlights + current-work badge + social sidebar
- Replace gradient orbs with simpler dark bg
- Large heading with purple highlights on key phrases
- "Currently working on Portfolio" badge (bordered box with purple square indicator)
- Quote block: `"With great power comes great electricity bill"` (adapt to portfolio-relevant quote)
- Left-side vertical social media bar (vertical line + icons)
- Keep contact buttons, adapt to purple border style

### 5. `src/components/About.jsx` — Image right + `Read more →` button
- Profile image on right side (matching Figma layout)
- Text on left
- `Read more →` button linking to about section or resume

### 6. `src/components/Skills.jsx` — Bordered card groups
- Replace percentage bars with bordered card groups
- Each group: category heading, separator line, skill tags
- Categories: Languages, Frameworks, Tools, Databases, etc.
- Keep certifications section but restyle with border cards

### 7. `src/components/Projects.jsx` — Border cards + terminal buttons
- Cards with `border border-[#abb2bf]` 
- Image area at top (colored placeholder)
- Tech tags row with separator
- Title + description
- `Live <~>` button (purple border) and `Cached >=` button (gray border)

### 8. `src/components/Contact.jsx` — Bordered message box
- `#contacts` header with separator
- Left: description text
- Right: "Message me here" bordered box with Discord/Email icons

### 9. `src/components/Footer.jsx` — Separator line + restructure
- Horizontal line separator (like Figma)
- Logo + name on left
- Email link
- Role subtitle
- Media links
- Copyright

### 10. `src/App.jsx` — Background color update
- Change `bg-zinc-950` to `bg-[#282C33]` (the portfolio dark)

### 11. NEW: `src/components/SideSocial.jsx` — Left vertical social bar
- Fixed left sidebar with vertical line + social icons
- GitHub, Facebook, LinkedIn (matching existing data)

## Files NOT Changed
- `src/data.js` — all data remains the same
- `src/icons.jsx` — all icons remain (may add a few SVG paths)
- `src/main.jsx` — no change
- `src/components/ScrollReveal.jsx` — no change
- `src/components/ErrorBoundary.jsx` — no change
- `vite.config.js`, `package.json`, `eslint.config.js` — no dependency changes

## Color Mapping
| Old Token           | New Token         |
|--------------------|-------------------|
| `blue-400/500/600` | `[#C778DD]` (purple) |
| `cyan-400/500`     | `[#C778DD]`        |
| `zinc-950`         | `[#282C33]`        |
| `zinc-900`         | `[#282C33]`        |
| `zinc-800`         | `[#282C33]` + border |
| `zinc-700`         | `[#abb2bf]` (gray)  |
| `zinc-400/500`     | `[#abb2bf]`         |
| `zinc-300`         | `white` or `[#abb2bf]` |

## Verification
1. `npm run build` succeeds
2. Visual check: all sections render, colors match the dark purple-gray scheme
3. Mobile responsive: navbar menu, stacked layouts work
4. No regressions: all links, scroll behavior, animations intact
5. Accessibility: reduced motion still respected, sufficient contrast

## Risk
- Low: purely cosmetic changes, no data or structural changes
- Color contrast needs verification (gray `#abb2bf` on dark `#282C33` = ~5:1 ratio, passes WCAG AA)
