# Modern React Portfolio Design (2025 Style)

## Vision

Das Ziel ist kein typisches Anfänger-Portfolio mit großen bunten Karten und zufälligen Animationen.

Das Ziel ist:

- minimalistisch
- technisch professionell
- performant
- ruhig
- modern
- premium
- developer-focused

Inspiration:
- Stripe
- Linear
- Vercel
- Framer
- Raycast
- Apple Developer Pages

---

# Design Prinzipien

## 1. Weniger Farben

Verwende:
- Schwarz / Weiß / Grautöne
- 1 Accent Color

Empfohlen:

```css
zinc palette
```

Accent Beispiele:
- Violet
- Cyan
- Emerald

Nicht:
- zu viele Farben
- starke Gradients überall
- Neon-Chaos

---

## 2. Große Typografie

Große Headlines wirken sofort professioneller.

Beispiel:

```txt
text-6xl
text-7xl
font-bold
tracking-tight
```

Hero Headlines sollten dominant sein.

---

## 3. Viel Whitespace

Professionelle Seiten haben:

- große Abstände
- klare Sections
- wenig visuelles Chaos

Nutze:

```txt
py-32
py-40
max-w-6xl
```

---

## 4. Motion ist subtil

Animationen:

- smooth
- langsam
- minimal

Nicht:
- aggressive bouncing
- spinning cards
- random transitions

Empfohlen:

- fade-in
- slide-up
- hover scale 1.02
- opacity transitions

---

# Finales Portfolio Layout

```txt
Navbar
Hero
Trusted By / Tech Stack
About
Featured Projects
Experience / Timeline
Skills
Contact
Footer
```

---

# 1. Navbar

## Ziel

Minimal und clean.

## Inhalt

Links:
- Logo / Name

Mitte:
- About
- Projects
- Skills
- Contact

Rechts:
- Theme Toggle
- Language Switch
- GitHub Link

---

## Style

```txt
height: 72px
backdrop blur
sticky top-0
border-bottom
semi-transparent background
```

Tailwind:

```txt
backdrop-blur-xl
border-b
border-zinc-800
bg-black/40
```

---

# 2. Hero Section

## Ziel

Sofort professionell wirken.

Nicht:

"Hello World"

Sondern:

"I design and build scalable modern web applications."

---

## Layout

Links:
- Text
- CTA Buttons

Rechts:
- Portrait / abstract visual / code preview

---

## Hero Inhalt

### Kleine obere Zeile

```txt
Frontend Engineer • React • TypeScript
```

### Große Headline

```txt
Building modern digital experiences for the web.
```

### Beschreibung

2 Zeilen maximal.

---

## Buttons

Primär:

```txt
View Projects
```

Sekundär:

```txt
Contact Me
```

---

## Style

```txt
min-h-screen
flex items-center
```

Headline:

```txt
text-7xl
font-bold
tracking-tight
leading-none
```

---

# 3. Tech Stack Section

## Ziel

Schnell Kompetenz zeigen.

---

## Beispiel

```txt
React
TypeScript
Next.js
Tailwind
Node.js
PostgreSQL
```

---

## Style

Keine riesigen Logos.

Nutze:

```txt
small badges
minimal icons
```

---

# 4. About Section

## Ziel

Kurz.

Nicht Lebensgeschichte.

---

## Gute Struktur

### Absatz 1

Wer du bist.

### Absatz 2

Was du technisch machst.

### Absatz 3

Worauf du spezialisiert bist.

---

## Layout

2-column layout:

Links:
- Text

Rechts:
- Stats
- Years
- Projects
- Technologies

---

# 5. Featured Projects

## WICHTIGSTE SECTION

Hier entscheidet sich:

"Sieht professionell aus" oder nicht.

---

# Projektkarten Design

## Jede Karte enthält

- Preview Image
- Titel
- Beschreibung
- Stack
- GitHub
- Live Demo

---

## Style

```txt
rounded-3xl
border
hover lift
subtle glow
```

---

## Layout

Desktop:

```txt
2-column grid
```

Mobile:

```txt
1-column
```

---

## Gute Projektbeschreibung

Nicht:

```txt
A todo app made with React.
```

Besser:

```txt
Task management platform with realtime synchronization and responsive dashboard architecture.
```

---

# 6. Experience Timeline

## Ziel

Zeigen:
- Lernen
- Projekte
- Entwicklung

Auch ohne Job möglich.

---

## Beispiel

2025
- Built multilingual portfolio
- Developed fullstack dashboard
- Learned TypeScript architecture

---

# 7. Skills Section

## Nicht langweilige Skillbars

Skillbars wirken veraltet.

Nutze:

```txt
categories
```

---

## Beispiel

Frontend:
- React
- TypeScript
- Tailwind

Backend:
- Node.js
- Express
- PostgreSQL

Tools:
- Git
- Docker
- Figma

---

# 8. Contact Section

## Minimal

Nicht riesiges Formular.

Besser:

```txt
Let's build something great together.
```

Buttons:
- Email
- GitHub
- LinkedIn

---

# 9. Footer

Sehr minimal.

```txt
© 2025 Your Name
Built with React & Tailwind
```

---

# Farbpalette Empfehlung

## Dark Theme

```txt
Background: zinc-950
Cards: zinc-900
Borders: zinc-800
Text: zinc-100
Muted: zinc-400
Accent: violet-400
```

---

# Typography Empfehlung

## Fonts

Empfohlen:

- Inter
- Satoshi
- Geist

---

# Animation System

## Empfohlen

Nutze:

- Framer Motion

Nicht:

- AOS
- random animation libraries

---

# Responsive Regeln

## Mobile First

Sehr wichtig.

Die meisten schlechten Portfolios:

- sehen mobil schlecht aus
- haben kaputte spacing systems

---

## Container Regel

```txt
max-w-6xl mx-auto px-6
```

Fast überall.

---

# Design Fehler die du vermeiden solltest

## Nicht machen

❌ Zu viele Farben
❌ Riesige Shadows
❌ Glasmorphism überall
❌ Skillbars
❌ Zu viele Animationen
❌ Lange Texte
❌ Zu viele Icons
❌ Schlechte mobile Ansicht
❌ Zu viele Fonts
❌ Zentrierter Fließtext überall

---

# Tech Stack Empfehlung

## Frontend

- React
- TypeScript
- Tailwind
- Framer Motion

---

## Deployment

- Vercel

---

## Optional

- Next.js
- GSAP
- Shadcn/ui

---

# Finales Ziel

Wenn dein Portfolio fertig ist, sollte es wirken wie:

- ein echtes SaaS Frontend
- ein professionelles Produkt
- ein Entwickler mit Architekturverständnis

Nicht wie:

"mein erstes React Projekt"

---

# Nächster Schritt

Empfohlene Reihenfolge:

1. Navbar
2. Hero
3. Theme System
4. Projects Grid
5. Responsive Layout
6. Animationen
7. Content polishing
8. Deployment

