# 🧘‍♀️ Kinderyoga Website – Umsetzungsplan

## Projekt-Briefing

**Kundin:** Martina Partsch
**Standort:** Am Lohfeld 5, 83125 Eggstätt
**Telefon:** +49 1708764438
**Angebot:** Kinderyoga in drei Altersgruppen
**Website-Typ:** One-Pager, bilingual (DE/EN)

---

## 🎯 Zielgruppe & Tonalität

- **Primär:** Eltern von Kindern 3–16 Jahre
- **Sekundär:** Erzieher:innen, Lehrer:innen
- **Ton:** Warm, einladend, beruhigend, vertrauensvoll – nie kitschig
- **Kernbotschaft:** *Kinder finden ihre innere Ruhe – spielerisch, liebevoll, in kleinen Gruppen*

---

## 🏗️ Sektionen (Scroll-Reihenfolge)

### 1. Hero Section
- Fullscreen, weicher Farbverlauf (warme Pastelltöne: Lavendel → Pfirsich → Salbei)
- Große Headline mit sanfter Einblend-Animation (staggered)
- DE: **„Kleine Yogis, große Ruhe"** / EN: **"Little Yogis, Big Calm"**
- Subtitle: DE: *„Kinderyoga in Eggstätt – spielerisch zur inneren Balance"* / EN: *"Children's Yoga in Eggstätt – playful paths to inner balance"*
- Sanft schwebende, minimalistische Illustrationen (Lotus, Sterne, Mond) via CSS-Animation
- Scroll-Indicator (animierter Pfeil nach unten)

### 2. Über Martina (About)
- Bild von Martina (Platzhalter vorsehen) mit parallax-leichtem Effekt
- Kurzer warmherziger Text:
  - DE: *„Ich bin Martina – Yogalehrerin aus Leidenschaft. Mein Herz schlägt dafür, Kindern einen Raum zu schenken, in dem sie ganz bei sich ankommen dürfen. In kleinen Gruppen üben wir gemeinsam, wie Stille sich gut anfühlen kann."*
  - EN: *"I'm Martina – a yoga teacher with a passion. My heart beats for giving children a space where they can truly arrive within themselves. In small groups, we practice together how stillness can feel wonderful."*
- Fade-in on scroll

### 3. Die drei Gruppen (Angebot)
- 3 Karten nebeneinander (mobile: gestackt), jede mit eigenem Farbakzent
- Staggered reveal beim Scrollen (eine nach der anderen)

**Karte 1 – Mini-Yogis (Kindergarten, 3–6 Jahre)**
- Icon: Schmetterling oder Stern
- DE: *„Spielerisch die Welt der Yoga-Tiere entdecken. Fantasiereisen, Bewegungslieder und ganz viel Staunen."*
- EN: *"Playfully discovering the world of yoga animals. Fantasy journeys, movement songs, and lots of wonder."*

**Karte 2 – Yoga-Entdecker (Grundschule, 6–10 Jahre)**
- Icon: Baum oder Berg
- DE: *„Kraft und Ruhe finden – mit Atemübungen, Partnerübungen und Entspannungsreisen, die den Schulalltag leichter machen."*
- EN: *"Finding strength and calm – with breathing exercises, partner poses, and relaxation journeys that make school days lighter."*

**Karte 3 – Teen Yoga (Teenies, 10–16 Jahre)**
- Icon: Mond oder Welle
- DE: *„Dein Raum, dein Tempo. Yoga, das dir hilft, den Kopf frei zu bekommen – ohne Leistungsdruck, mit viel Selbstbestimmung."*
- EN: *"Your space, your pace. Yoga that helps you clear your mind – no pressure, full autonomy."*

### 4. So läuft's ab (Details)
- Minimale, ikonbasierte Liste mit Scroll-Reveal
- **Kleine Gruppen** (max. 8 Kinder) – DE: *„Jedes Kind wird gesehen"* / EN: *"Every child is seen"*
- **Regelmäßige Termine** – DE: *„Feste Kurszeiten für Routine und Vertrauen"* / EN: *"Fixed schedules for routine and trust"*
- **Kein Leistungsdruck** – DE: *„Hier darf jeder so sein, wie er ist"* / EN: *"Here, everyone can be just as they are"*
- **Zertifiziert & erfahren** – DE: *„Qualifizierte Anleitung in sicherer Umgebung"* / EN: *"Qualified guidance in a safe environment"*

### 5. Kontakt / CTA
- Sanfter Hintergrundwechsel (leichter Gradient-Shift)
- Große CTA: DE: **„Jetzt Platz sichern"** / EN: **"Reserve a Spot"**
- Telefon-Link: `tel:+491708764438` – gut sichtbar
- Adresse mit kleiner, eingebetteter Karte (oder statische Karte als Bild)
- Optional: Einfaches Kontaktformular (Name, E-Mail, Nachricht, Gruppenwahl)

### 6. Footer
- Minimal: Name, Adresse, Telefon, Copyright
- Locale-Switcher (DE/EN)
- Links: Impressum, Datenschutz (Platzhalter-Seiten)

---

## 🎨 Design System

### Farbpalette
| Rolle | Farbe | Hex |
|-------|-------|-----|
| Primary | Soft Lavender | `#C4B5E0` |
| Secondary | Warm Peach | `#F5C7A9` |
| Accent | Sage Green | `#A8C5A0` |
| Background | Warm Cream | `#FFF9F5` |
| Text | Soft Charcoal | `#3A3A3A` |
| Muted Text | Warm Grey | `#8A8A8A` |

### Typografie
- **Headings:** `DM Serif Display` (warm, einladend, nicht steif)
- **Body:** `Inter` oder `Nunito` (rund, freundlich, gut lesbar)
- Beide via Google Fonts

### Icons
- Lucide Icons (schon im Projekt), ergänzt durch einfache SVG-Illustrationen
- Stil: Thin line, organisch, abgerundet

---

## ✨ Animationen & Effekte

### Libraries (bereits installiert)
- **`motion`** (v12) – React-Animation-Library (ehem. Framer Motion). Für scroll-triggered Animationen, staggered reveals, layout-Transitions
- **`lenis`** – Ultra-smooth Scrolling (wie auf awwwards-Seiten)

### Animation-Konzept

**Lenis Smooth Scroll (Global):**
- `SmoothScrollProvider` Client Component im Layout
- Wraps die ganze Seite, sorgt für butterweiche Scroll-Experience
- `lerp: 0.1` für sanften, organischen Scroll-Feel

**Hero Section:**
- `motion.div` mit `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- Headline: Jedes Wort einzeln animiert via `staggerChildren: 0.08`
- Subtitle: Fade-in mit Delay nach Headline
- Floating SVGs: `motion.animate` mit `repeat: Infinity`, leichte Y-Bewegung + Rotation
- Scroll-Progress-Indicator: `motion.useScroll()` + `motion.useTransform()` für Parallax beim Runterscrollen (Hero faded out + Zoom)

**Sektionen (About, Groups, Details, Contact):**
- Jede Sektion nutzt `motion.div` mit `whileInView` Trigger:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
  ```
- `viewport.once: true` → Animation nur beim ersten Mal

**Gruppen-Karten (Staggered):**
- Parent: `staggerChildren: 0.15`
- Jede Karte slidet nacheinander rein
- Hover: `whileHover={{ y: -8, scale: 1.02 }}` mit `transition: { type: "spring", stiffness: 300 }`

**Details-Liste:**
- Jedes Item staggered: `staggerChildren: 0.1`
- Icon hat subtile `whileInView` Rotation oder Scale-Bounce

**Parallax-Effekte:**
- `useScroll()` + `useTransform()` für:
  - Hero-Bild/Gradient zoomt leicht beim Scrollen
  - About-Bild bewegt sich langsamer als Text (Parallax-Offset)
  - Dekorative Elemente (Lotus, Sterne) bewegen sich auf verschiedenen Geschwindigkeiten

**Gradient-Shift:**
- Hintergrundfarbe shifted subtil zwischen Sektionen via `useScroll` + `useTransform` auf CSS Custom Properties

**Reduced Motion:**
- Alle Animationen respektieren `prefers-reduced-motion`:
  ```tsx
  const prefersReducedMotion = useReducedMotion()
  // Falls true → keine Animationen, instant reveal
  ```

### Architektur: Animation Components
```
src/components/
├── providers/
│   └── SmoothScrollProvider.tsx    # Lenis Setup (Client Component)
├── animations/
│   ├── ScrollReveal.tsx            # Wiederverwendbar: whileInView fade-in
│   ├── StaggerContainer.tsx        # Parent für staggered children
│   ├── StaggerItem.tsx             # Child-Element mit stagger
│   ├── ParallaxImage.tsx           # Bild mit Parallax-Offset
│   ├── FloatingElement.tsx         # Endlos schwebende Deko-SVGs
│   └── SplitText.tsx              # Headline wortweise animiert
```

### Cursor-pointer & Hover
- Alle klickbaren Elemente: `cursor-pointer`
- Transitions: 200ms ease-out
- Karten: Spring-basierte Hover-Animation (Motion)

---

## 🛠️ Technische Umsetzung

### Dateistruktur (neu zu erstellen)
```
src/
├── app/(frontend)/[locale]/
│   └── page.tsx                    # One-Pager mit allen Sektionen
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Groups.tsx
│   │   ├── Details.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/                         # shadcn/ui (Button, Card, etc.)
│   ├── ScrollReveal.tsx            # Wiederverwendbare Scroll-Animation-Wrapper
│   ├── FloatingElements.tsx        # Dekorative schwebende SVGs
│   └── GroupCard.tsx               # Karte für Yoga-Gruppen
messages/
├── de.json                         # Alle deutschen Texte
└── en.json                         # Alle englischen Texte
```

### Benötigte shadcn/ui Komponenten
```bash
pnpm dlx shadcn@latest add button card
```

### Google Fonts (in Layout einbinden)
```tsx
import { DM_Serif_Display, Inter } from 'next/font/google'
```

### Payload CMS Collections

Content, der von Martina editierbar sein soll, kommt aus Payload – nicht aus Translation-Files. Translation-Files nur für UI-Labels (Button-Texte, Navigation, etc.).

**Neue Collections in `src/collections/`:**

```
src/collections/
├── Users.ts          # (existiert bereits)
├── Media.ts          # (existiert bereits)
├── HomePage.ts       # Payload Global – alle One-Pager Inhalte
└── YogaGroups.ts     # Collection – die 3 Yoga-Gruppen
```

**`HomePage` (Payload Global – Singleton):**
- `hero.headline` (localized text)
- `hero.subtitle` (localized text)
- `about.image` (relation → Media)
- `about.text` (localized richtext)
- `contact.ctaText` (localized text)
- `contact.phone` (text)
- `contact.address` (text)
- `contact.email` (text, optional)
- `details` (array of `{ icon: select, title: localized text, description: localized text }`)
- `seo.metaTitle` (localized text)
- `seo.metaDescription` (localized text)

**`YogaGroups` (Collection):**
- `title` (localized text) – z.B. "Mini-Yogis"
- `ageRange` (text) – z.B. "3–6 Jahre"
- `description` (localized richtext)
- `icon` (select: butterfly, tree, moon, star, mountain, wave)
- `color` (select: lavender, peach, sage)
- `order` (number) – Sortierung

**Datenfluss:**
```
Payload Admin (Martina editiert) → SQLite DB → Server Component fetcht via Payload Local API → Rendert Sektion
```

**Fetch-Pattern in Sektionen:**
```tsx
import { getPayload } from 'payload'
import config from '@/payload.config'

const payload = await getPayload({ config })
const homePage = await payload.findGlobal({ slug: 'home-page', locale })
const groups = await payload.find({ collection: 'yoga-groups', locale, sort: 'order' })
```

### Was bleibt in Translation-Files (messages/*.json)?
- Navigation-Labels
- Button-Texte ("Jetzt Platz sichern", "Reserve a Spot")
- Footer-Labels ("Impressum", "Datenschutz")
- Form-Labels & Validation-Messages
- Accessibility-Texte (aria-labels, sr-only)

### Wichtige Patterns
- Animation Components in `src/components/animations/` – wiederverwendbare Motion-Wrapper
- `SmoothScrollProvider` (Lenis) im Root-Layout als Client Component
- Sektionen: Server Components fetchen Content via Payload Local API, wrappen Inhalte in Animation-Components
- Locale wird via `next-intl` an Payload `locale` Parameter weitergegeben
- Responsive: Mobile-first, Breakpoints bei `md` (768px) und `lg` (1024px)
- Bilder: Payload Media Collection → `next/image` mit Blur-Placeholder
- `useReducedMotion()` aus `motion` – alle Animationen deaktivieren wenn User das will

---

## 📝 Prompt für Claude

Kopiere alles oben + füge hinzu:

> Setze diesen Plan um. Erstelle alle Dateien gemäß der Dateistruktur. Nutze `motion` (v12, ehem. Framer Motion) für alle Animationen: scroll-triggered whileInView reveals, staggered children, Parallax via useScroll/useTransform, spring-basierte Hover-Animationen. Nutze `lenis` für globales smooth scrolling (SmoothScrollProvider im Layout). Erstelle die wiederverwendbaren Animation-Components (ScrollReveal, StaggerContainer, StaggerItem, ParallaxImage, FloatingElement, SplitText) in `src/components/animations/`. Editierbarer Content kommt aus Payload CMS – erstelle `HomePage` (Global) und `YogaGroups` (Collection) mit lokalisierten Feldern (de/en), registriere sie in `payload.config.ts`. UI-Labels kommen aus `messages/de.json` und `messages/en.json`. Sektionen sind Server Components die via Payload Local API fetchen und Inhalte in Animation-Client-Components wrappen. Achte auf: WCAG AA Kontraste, mobile-first responsive, smooth 60fps Animationen, `useReducedMotion()` Support. Erstelle ALLE Dateien komplett – keine Platzhalter, keine TODOs. Seede die Payload DB mit den initialen Inhalten aus dem Plan.

---

## 📋 Nice-to-Have (Phase 2)
- Kontaktformular mit Payload CMS Form-Collection
- Google Maps Embed für Standort
- Testimonials von Eltern
- Kursplan/Stundenplan-Sektion
- Blog/Aktuelles via Payload CMS
- Cookie-Banner / Datenschutz
