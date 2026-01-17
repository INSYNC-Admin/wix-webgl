# Wix WebGL Components

Ein Repository mit verschiedenen Three.js WebGL-Komponenten für Wix Studio, gehostet auf Vercel.

## 📦 Projekte

### 1. 🌍 Globe Pointer
Ein performantes Three.js Globe Custom Element mit warmem Orange/Gelb-Gradient.

- **Datei**: `public/globe-pointer.js`
- **Dokumentation**: Siehe [Globe Pointer README](./README.md#globe-pointer)
- **Source**: `src/globe-pointer.js`

### 2. 🎨 Displacement Transition
Ein ScrollTrigger-basierter Displacement-Map-Übergang zwischen 3 Bildern.

- **Datei**: `displacement-transition/public/displacement-transition.js`
- **Dokumentation**: Siehe [Displacement Transition README](./displacement-transition/README.md)
- **Source**: `displacement-transition/src/displacement-transition.js`

## 🚀 Quick Start

### Alle Projekte bauen

```bash
# Dependencies installieren
npm run install:all

# Alle Projekte bauen
npm run build
```

### Einzelne Projekte bauen

```bash
# Globe Pointer
npm run build:globe

# Displacement Transition
npm run build:displacement
```

---

## 🌍 Globe Pointer

Ein performantes Three.js Globe Custom Element für Wix Studio, gehostet auf Vercel.

## 🚀 Features

- **Optimierte Performance**: Minifiziertes Bundle mit esbuild
- **Schnelle Ladezeiten**: CDN-Hosting über Vercel mit Caching
- **Custom Element**: Einfache Integration in Wix Studio
- **Warmes Farbschema**: Orange/Gelb-Gradient für den Globe
- **Interaktiv**: Klick-Effekte mit Ripple-Animation

## 📋 Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn
- GitHub Account
- Vercel Account (kostenlos)

## 🛠️ Setup & Entwicklung

### 1. Dependencies installieren

```bash
npm install
```

### 2. Build erstellen

```bash
npm run build:globe
```

Dies erstellt die optimierte `public/globe-pointer.js` Datei.

### 3. Development-Modus (mit Watch)

```bash
npm run dev:globe
```

## 📦 Deployment auf Vercel

### Option 1: Vercel CLI (empfohlen)

1. Vercel CLI installieren:
```bash
npm i -g vercel
```

2. Im Projektordner:
```bash
vercel
```

Folge den Anweisungen für die erste Einrichtung.

3. Für Production:
```bash
vercel --prod
```

### Option 2: GitHub Integration (empfohlen für automatische Deployments)

1. **GitHub Repository erstellen und pushen:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
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
   - Deine JS-Datei ist dann unter: `https://dein-projekt.vercel.app/globe-pointer.js`

### Option 3: Vercel Dashboard (ohne CLI)

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf "Add New..." → "Project"
3. Importiere dein GitHub Repository
4. Vercel erkennt die Einstellungen automatisch
5. Klicke auf "Deploy"

## 🔗 Integration in Wix Studio

1. Öffne Wix Studio
2. Gehe zu **Custom Elements** → **Add Custom Element**
3. Fülle folgende Felder aus:
   - **Tag Name**: `globe-pointer`
   - **Script URL**: `https://dein-projekt.vercel.app/globe-pointer.js`
   - **Name**: z.B. "Globe Pointer"
4. Speichere das Custom Element
5. Ziehe das Element auf deine Seite

### Beispiel-HTML:

```html
<globe-pointer></globe-pointer>
```

## ⚙️ Build-Konfiguration

Das Projekt nutzt **esbuild** für:
- **Bundling**: Three.js und OrbitControls werden in eine Datei gepackt
- **Minifizierung**: Reduzierte Dateigröße für schnellere Ladezeiten
- **IIFE Format**: Keine Module-Imports, direkt ausführbar

## 🎨 Performance-Optimierungen

- `antialias: false` für schnellere Rendering
- `powerPreference: 'high-performance'` für GPU-Optimierung
- PixelRatio auf max. 0.75 gedeckelt
- IcosahedronGeometry Detail 5 (statt 6)
- Raycasting nur einmal pro Frame
- Optimierte Shader-Code

## 📁 Projektstruktur

```
.
├── src/
│   └── globe-pointer.js    # Source-Code
├── public/
│   └── globe-pointer.js    # Gebautes Bundle (wird generiert)
├── package.json
├── vercel.json             # Vercel-Konfiguration
└── README.md
```

## 🔧 Anpassungen

### Texture ändern

In `src/globe-pointer.js` die URL in `initScene()` anpassen:

```javascript
new THREE.TextureLoader().load(
  'https://deine-textur-url.png',
  // ...
);
```

### Farben anpassen

Im `FRAGMENT_SHADER_MAP` die Farbwerte `c1`, `c2`, `c3` ändern.

### Performance weiter optimieren

- `IcosahedronGeometry` Detail reduzieren (aktuell: 5)
- `setPixelRatio` weiter reduzieren (aktuell: 0.75)
- `u_dot_size` Multiplikator anpassen

## 📝 Lizenz

MIT
