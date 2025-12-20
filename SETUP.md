# 🚀 Schnellstart-Anleitung

## Schritt 1: Dependencies installieren

Öffne ein Terminal im Projektordner und führe aus:

```bash
npm install
```

## Schritt 2: Lokalen Build testen

```bash
npm run build
```

Dies erstellt die Datei `public/globe-pointer.js`. Du kannst diese lokal testen, indem du eine HTML-Datei erstellst:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Globe Test</title>
    <style>
        body { margin: 0; height: 100vh; }
        globe-pointer { width: 100%; height: 100%; }
    </style>
</head>
<body>
    <globe-pointer></globe-pointer>
    <script src="./public/globe-pointer.js"></script>
</body>
</html>
```

## Schritt 3: GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com) und erstelle ein neues Repository
2. Nenne es z.B. `wix-globe-pointer`
3. **WICHTIG**: Lasse das Repository zunächst leer (keine README, keine .gitignore, kein License)

## Schritt 4: Code zu GitHub pushen

Im Terminal (im Projektordner):

```bash
git init
git add .
git commit -m "Initial commit: Wix Globe Pointer"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
git push -u origin main
```

Ersetze `DEIN-USERNAME` und `DEIN-REPO-NAME` mit deinen Werten.

## Schritt 5: Vercel Deployment

### Option A: Über Vercel Dashboard (Einfachste Methode)

1. Gehe zu [vercel.com](https://vercel.com) und melde dich an (mit GitHub)
2. Klicke auf **"Add New..."** → **"Project"**
3. Wähle dein GitHub Repository aus
4. Vercel erkennt automatisch:
   - Build Command: `npm run build`
   - Output Directory: `public`
5. Klicke auf **"Deploy"**
6. Warte ca. 1-2 Minuten
7. Nach erfolgreichem Deployment bekommst du eine URL wie:
   - `https://wix-globe-pointer.vercel.app`
   - Deine JS-Datei ist dann unter: `https://wix-globe-pointer.vercel.app/globe-pointer.js`

### Option B: Über Vercel CLI

```bash
npm i -g vercel
vercel
```

Folge den Anweisungen.

## Schritt 6: In Wix Studio einbinden

1. Öffne Wix Studio
2. Gehe zu **Custom Elements** → **Add Custom Element**
3. Fülle aus:
   - **Tag Name**: `globe-pointer` (muss genau so heißen!)
   - **Script URL**: `https://dein-projekt.vercel.app/globe-pointer.js`
4. Speichere
5. Ziehe das Element auf deine Seite

## ✅ Fertig!

Dein Globe sollte jetzt deutlich schneller laden, da:
- ✅ Alles in einem optimierten Bundle liegt
- ✅ Vercel CDN für schnelle Auslieferung sorgt
- ✅ Caching-Header für Browser-Cache gesetzt sind
- ✅ Code minifiziert ist

## 🔄 Updates durchführen

Bei Änderungen:

1. Ändere Code in `src/globe-pointer.js`
2. Teste lokal: `npm run build`
3. Committe und pushe zu GitHub:
   ```bash
   git add .
   git commit -m "Update globe"
   git push
   ```
4. Vercel deployt automatisch (wenn GitHub Integration aktiviert)
5. Neue Version ist nach ca. 1-2 Minuten live

## 🐛 Troubleshooting

**Problem**: Globe lädt nicht in Wix
- Prüfe Browser-Konsole (F12) auf Fehler
- Stelle sicher, dass die Vercel-URL korrekt ist
- Prüfe, ob Tag-Name `globe-pointer` genau übereinstimmt

**Problem**: Vercel baut nicht
- Prüfe, ob `package.json` und `vercel.json` im Root sind
- Prüfe Vercel Build-Logs im Dashboard

**Problem**: Performance immer noch schlecht
- Prüfe Texture-Größe (sollte < 1MB sein)
- Reduziere `IcosahedronGeometry` Detail weiter (z.B. von 5 auf 4)

