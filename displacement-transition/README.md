# Displacement Transition - ScrollTrigger Projekt

Ein Three.js-basiertes Displacement-Map-Transition-System mit GSAP ScrollTrigger. Ermöglicht flüssige Übergänge zwischen 3 Bildern basierend auf dem Scroll-Progress eines Elements.

## 🚀 Features

- **3-Bild-Transition**: Flüssiger Übergang zwischen 3 Bildern
- **Scroll-Trigger**: Automatische Transitions bei 38% und 63% Scroll-Progress
- **Bidirektional**: Funktioniert sowohl beim Vor- als auch beim Zurückscrollen
- **Displacement-Effekt**: Nutzt "Drift" Displacement Map für den Distortion-Effekt
- **Responsive**: Passt sich automatisch an Elementgrößen an

## 📋 Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn
- GitHub Account
- Vercel Account (kostenlos)

## 🛠️ Setup & Entwicklung

### 1. Dependencies installieren

```bash
cd displacement-transition
npm install
```

### 2. Build erstellen

```bash
npm run build
```

Dies erstellt die optimierte `public/displacement-transition.js` Datei.

### 3. Development-Modus (mit Watch)

```bash
npm run dev
```

## 📦 Deployment auf Vercel

### Option 1: GitHub Integration

1. **GitHub Repository erstellen und pushen:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/displacement-transition.git
git push -u origin main
```

2. **In Vercel Dashboard:**
   - Gehe zu [vercel.com](https://vercel.com)
   - Klicke auf "New Project"
   - Verbinde dein GitHub Repository
   - Vercel erkennt automatisch die Konfiguration aus `vercel.json`
   - Klicke auf "Deploy"

3. **Vercel erstellt automatisch eine URL:**
   - Beispiel: `https://dein-projekt.vercel.app`
   - Deine JS-Datei ist dann unter: `https://dein-projekt.vercel.app/displacement-transition.js`

## 🔗 Verwendung in Wix

### Custom Element einrichten

1. Öffne Wix Studio
2. Gehe zu **Custom Elements** → **Add Custom Element**
3. Fülle folgende Felder aus:
   - **Tag Name**: `displacement-trigger`
   - **Script URL**: `https://dein-projekt.vercel.app/displacement-transition.js`
   - **Name**: z.B. "Displacement Transition"
4. Speichere das Custom Element
5. Ziehe das Element auf deine Seite

### HTML-Struktur

In deinem Custom Element HTML Editor:

```html
<displacement-trigger 
  class="threeTrigger"
  data-image1="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998ca6fd3a1267e1342b_image%20315.avif"
  data-image2="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c9085c8dc397ba853_image%20321.avif"
  data-image3="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c52fe6011f65559df_image%20322.avif"
  data-displacement="https://images.unsplash.com/photo-1465146633011-14f8e0781093?fit=crop&w=512&h=512"
  style="width: 100%; height: 600px;"
></displacement-trigger>
```

### Wichtig

- **Tag Name**: Muss genau `displacement-trigger` sein
- **Klasse**: Die Klasse `threeTrigger` ist optional, wird aber empfohlen für zusätzliche Styling-Möglichkeiten
- **Data-Attribute**: Alle drei Bilder sind Pflicht
  - `data-image1`: URL zum ersten Bild
  - `data-image2`: URL zum zweiten Bild
  - `data-image3`: URL zum dritten Bild
  - `data-displacement`: URL zur Displacement Map (optional, nutzt Standard "Drift" Map wenn nicht angegeben)
- **Höhe**: Das Element sollte eine Mindesthöhe haben (z.B. `height: 600px`) für ausreichenden Scroll-Bereich

### Funktionsweise

Das Custom Element:
- Initialisiert automatisch beim Laden
- Lädt die Bilder aus den data-Attributen
- Nutzt sich selbst als ScrollTrigger (trigger: this)
- Startet Transitions automatisch beim Scrollen

## ⚙️ Scroll-Progress-Punkte

- **0% → 38%**: Transition von Bild 1 zu Bild 2
- **38% → 63%**: Transition von Bild 2 zu Bild 3
- **63% → 100%**: Bild 3 vollständig angezeigt

## 🎨 "Drift" Displacement Map

Das Projekt nutzt standardmäßig die "Drift" Displacement Map aus dem ursprünglichen CodePen-Projekt. Du kannst eine eigene Displacement Map über das `data-displacement` Attribut angeben.

## ⚙️ Build-Konfiguration

Das Projekt nutzt **esbuild** für:
- **Bundling**: Three.js, GSAP und ScrollTrigger werden in eine Datei gepackt
- **Minifizierung**: Reduzierte Dateigröße für schnellere Ladezeiten
- **IIFE Format**: Keine Module-Imports, direkt ausführbar

## 📁 Projektstruktur

```
displacement-transition/
├── src/
│   └── displacement-transition.js    # Source-Code
├── public/
│   └── displacement-transition.js    # Gebautes Bundle (wird generiert)
├── package.json
├── vercel.json                       # Vercel-Konfiguration
└── README.md
```

## 🔧 Anpassungen

### Intensität ändern

Die Intensität des Displacement-Effekts kann angepasst werden:

```javascript
const displacer = new ScrollDisplacer({
  // ...
  intensity: 1.2 // Höhere Intensität
});
```

### Winkel anpassen

Der Distortion-Winkel kann angepasst werden:

```javascript
const displacer = new ScrollDisplacer({
  // ...
  angle: Math.PI / 2 // 90 Grad
});
```

### Scroll-Punkte ändern

Um die Scroll-Punkte (38%, 63%) zu ändern, passe die `setupScrollTrigger()` Methode in `src/displacement-transition.js` an.

## 📝 Lizenz

MIT
