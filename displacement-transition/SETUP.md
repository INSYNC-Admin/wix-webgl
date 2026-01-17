# 🚀 Schnellstart-Anleitung - Displacement Transition

## Schritt 1: Dependencies installieren

```bash
cd displacement-transition
npm install
```

## Schritt 2: Lokalen Build testen

```bash
npm run build
```

Dies erstellt die Datei `public/displacement-transition.js`.

## Schritt 3: Test-HTML erstellen (lokal testen)

Erstelle eine `test.html` Datei im `public/` Ordner:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Displacement Transition Test</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f0f0f0;
        }
        
        .spacer {
            height: 100vh;
            background: #ddd;
        }
        
        .threeTrigger {
            width: 100%;
            height: 600px;
            background: #333;
            position: relative;
            margin: 50px 0;
        }
        
        .spacer-bottom {
            height: 100vh;
            background: #ddd;
        }
    </style>
</head>
<body>
    <div class="spacer"></div>
    
    <!-- Dein Displacement Element -->
    <div 
        class="threeTrigger" 
        data-image1="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998ca6fd3a1267e1342b_image%20315.avif"
        data-image2="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c9085c8dc397ba853_image%20321.avif"
        data-image3="https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c52fe6011f65559df_image%20322.avif"
        data-displacement="https://images.unsplash.com/photo-1465146633011-14f8e0781093?fit=crop&w=512&h=512"
    ></div>
    
    <div class="spacer-bottom"></div>
    
    <script src="displacement-transition.js"></script>
</body>
</html>
```

## Schritt 4: GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com) und erstelle ein neues Repository
2. Nenne es z.B. `displacement-transition`
3. Lasse das Repository zunächst leer

## Schritt 5: Code zu GitHub pushen

Im Terminal (im `displacement-transition` Ordner):

```bash
git init
git add .
git commit -m "Initial commit: Displacement Transition with ScrollTrigger"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/displacement-transition.git
git push -u origin main
```

## Schritt 6: Vercel Deployment

1. Gehe zu [vercel.com](https://vercel.com) und melde dich an (mit GitHub)
2. Klicke auf **"Add New..."** → **"Project"**
3. Wähle dein GitHub Repository aus
4. Vercel erkennt automatisch:
   - Build Command: `npm run build`
   - Output Directory: `public`
5. Klicke auf **"Deploy"**
6. Nach erfolgreichem Deployment bekommst du eine URL:
   - `https://displacement-transition.vercel.app`
   - Deine JS-Datei: `https://displacement-transition.vercel.app/displacement-transition.js`

## Schritt 7: In Wix einbinden

### Option A: Custom Element

1. Erstelle ein Custom Element in Wix Studio
2. Füge das Script als URL ein: `https://dein-projekt.vercel.app/displacement-transition.js`
3. Nutze HTML mit der Klasse `threeTrigger`:

```html
<div 
    class="threeTrigger" 
    data-image1="url-zum-bild-1.jpg"
    data-image2="url-zum-bild-2.jpg"
    data-image3="url-zum-bild-3.jpg"
    style="width: 100%; height: 600px;"
></div>
```

### Option B: Direktes Script

Füge das Script direkt in dein Wix-Projekt ein:

```html
<script src="https://dein-projekt.vercel.app/displacement-transition.js"></script>
```

## ✅ Fertig!

Deine Displacement Transition sollte jetzt funktionieren:

- **0% → 38% Scroll-Progress**: Transition von Bild 1 zu Bild 2
- **38% → 63% Scroll-Progress**: Transition von Bild 2 zu Bild 3
- **63% → 100%**: Bild 3 vollständig angezeigt
- Funktioniert bidirektional (vor- und zurückscrollen)

## 🔄 Updates durchführen

Bei Änderungen:

1. Ändere Code in `src/displacement-transition.js`
2. Teste lokal: `npm run build`
3. Committe und pushe zu GitHub:
   ```bash
   git add .
   git commit -m "Update displacement transition"
   git push
   ```
4. Vercel deployt automatisch (wenn GitHub Integration aktiviert)
5. Neue Version ist nach ca. 1-2 Minuten live

## 🐛 Troubleshooting

**Problem**: Transitions funktionieren nicht
- Prüfe Browser-Konsole (F12) auf Fehler
- Stelle sicher, dass alle Bilder geladen werden (CORS-Probleme?)
- Prüfe, ob Element mit Klasse `threeTrigger` existiert

**Problem**: Scroll-Trigger reagiert nicht
- Prüfe, ob GSAP ScrollTrigger geladen ist
- Stelle sicher, dass das Element genug Höhe hat (mind. 100vh)
- Prüfe, ob ScrollTrigger korrekt initialisiert wurde

**Problem**: Bilder werden nicht angezeigt
- Prüfe Bild-URLs (müssen öffentlich zugänglich sein)
- Prüfe CORS-Einstellungen bei externen Bildern
- Verwende absolute URLs statt relative
