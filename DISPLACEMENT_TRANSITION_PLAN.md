# Displacement Map Transition - ScrollTrigger Projekt

## 📋 Projektübersicht

Ein Three.js-basiertes Displacement-Map-Transition-System, das auf GSAP ScrollTrigger reagiert. Das Projekt ermöglicht flüssige Übergänge zwischen 3 Bildern basierend auf dem Scroll-Progress eines Elements.

## 🎯 Anforderungen

1. **3 Bilder**: Transition von Bild 1 → Bild 2 → Bild 3
2. **Scroll-Trigger**: Element mit Klasse `threeTrigger`
3. **Transition-Punkte**:
   - 38% Scroll-Progress: Bild 1 → Bild 2
   - 63% Scroll-Progress: Bild 2 → Bild 3
4. **Bidirektional**: Muss auch beim Zurückscrollen funktionieren
5. **Basis**: CodePen Displacement-Effekt mit "Drift" Displacement Map

## 🔍 CodePen-Analyse

### Aktuelle Implementierung

**Struktur:**
- `Displacer` Klasse verwaltet Three.js Scene
- Shader-basierte Transitions zwischen 2 Bildern
- GSAP TweenMax für Animationen (nicht ScrollTrigger)
- Displacement Map für Distortion-Effekt

**Wichtige Komponenten:**

1. **Vertex Shader**: Einfach, leitet nur UV-Koordinaten weiter
2. **Fragment Shader**: 
   - Nutzt Displacement Map für Position-Verschiebung
   - Rotations-Matrix für Distortion-Winkel
   - Mix zwischen texture1 und texture2 basierend auf `dispFactor`

3. **Displacer Klasse**:
   - Lädt 2 Texturen + Displacement Map
   - ShaderMaterial mit Uniforms
   - `transitionIn()` / `transitionOut()` für Animationen

4. **Themes-Array**: Enthält verschiedene Bild-Kombinationen, inkl. "drift"

## 🏗️ Umsetzungsplan

### Phase 1: Projektstruktur

```
displacement-transition/
├── src/
│   └── displacement-transition.js
├── public/
│   └── displacement-transition.js (gebautes Bundle)
├── package.json
└── README.md
```

### Phase 2: Dependencies

**Hinzuzufügen:**
- `gsap` (für ScrollTrigger)
- `three` (bereits vorhanden)
- `esbuild` (bereits vorhanden)

**Note:** ScrollTrigger ist Teil von GSAP, benötigt separaten Import

### Phase 3: Code-Anpassungen

#### 3.1 Shader-Anpassungen

**Fragment Shader** muss erweitert werden:
- Aktuell: `texture1` ↔ `texture2` basierend auf `dispFactor`
- Neu: Unterstützung für 3 Texturen mit zwei Übergängen:
  - `dispFactor1`: 0.0 → 1.0 bei 0% → 38% (Bild 1 → Bild 2)
  - `dispFactor2`: 0.0 → 1.0 bei 38% → 63% (Bild 2 → Bild 3)

**Option A: Zwei getrennte Mix-Operationen**
```glsl
// Zwischen Bild 1 und 2
vec4 mix1 = mix(texture1, texture2, dispFactor1);
// Zwischen Ergebnis und Bild 3
vec4 final = mix(mix1, texture3, dispFactor2);
```

**Option B: Drei Texturen mit gewichteten Mixes**
```glsl
vec4 final = texture1 * (1 - dispFactor1) + 
             texture2 * (dispFactor1 * (1 - dispFactor2)) + 
             texture3 * (dispFactor2);
```

#### 3.2 Displacer-Klasse Anpassungen

**Neue Properties:**
- `texture3`: Drittes Bild
- `image3`: URL für drittes Bild
- `uniforms.dispFactor1`: Für ersten Übergang
- `uniforms.dispFactor2`: Für zweiten Übergang

**Methoden-Änderungen:**
- `setTextures()`: Lädt jetzt 3 Texturen
- `setMaterial()`: Erweitert Uniforms für 3 Bilder
- **NEU:** `updateProgress(scrollProgress)`: Berechnet dispFactor1/2 basierend auf Scroll-Progress

#### 3.3 ScrollTrigger-Integration

**Neue Klasse oder Erweiterung:**

```javascript
class ScrollDisplacer extends Displacer {
  constructor(opts) {
    super(opts);
    this.setupScrollTrigger();
  }
  
  setupScrollTrigger() {
    // Finde Element mit Klasse "threeTrigger"
    const triggerElement = document.querySelector('.threeTrigger');
    
    if (!triggerElement) {
      console.warn('Element with class "threeTrigger" not found');
      return;
    }
    
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 → 1.0
        
        // Berechne dispFactor1 (0% → 38%)
        if (progress <= 0.38) {
          this.material.uniforms.dispFactor1.value = progress / 0.38;
          this.material.uniforms.dispFactor2.value = 0.0;
        }
        // Berechne dispFactor2 (38% → 63%)
        else if (progress <= 0.63) {
          this.material.uniforms.dispFactor1.value = 1.0;
          this.material.uniforms.dispFactor2.value = (progress - 0.38) / (0.63 - 0.38);
        }
        // Bei > 63%: Beide bei 1.0
        else {
          this.material.uniforms.dispFactor1.value = 1.0;
          this.material.uniforms.dispFactor2.value = 1.0;
        }
        
        this.render();
      }
    });
  }
}
```

### Phase 4: API-Design

**Verwendungsbeispiel:**

```javascript
const displacer = new ScrollDisplacer({
  element: document.querySelector('.threeTrigger'),
  image1: 'url-zum-bild-1.jpg',
  image2: 'url-zum-bild-2.jpg',
  image3: 'url-zum-bild-3.jpg',
  displacementImage: 'url-zur-drift-displacement-map.jpg',
  intensity: 0.8,
  angle: Math.PI / 4, // Wird für "Drift" angepasst
  shaders: {
    vertex: vertexShader,
    fragment: fragmentShader
  }
});
```

### Phase 5: Optimierungen

1. **Performance**:
   - Texturen vorladen
   - ScrollTrigger mit `scrub: true` für smooth Animation
   - Render-Loop nur bei Scroll-Update

2. **Responsive**:
   - Größe passt sich Container an
   - PixelRatio-Optimierung

3. **Fallbacks**:
   - Graceful Degradation wenn ScrollTrigger nicht verfügbar
   - Fehlerbehandlung für fehlende Bilder

## 🎨 "Drift" Displacement Map Details

Aus dem CodePen:
- Theme: 'drift'
- Displacement Image: `1465146633011-14f8e0781093` (Unsplash ID)
- Angle: Standard (Math.PI/4 wird verwendet wenn nicht spezifiziert)
- Background: 'blanchedalmond'

## 📦 Deployment

Ähnlich wie Globe-Projekt:
- Vercel-Hosting
- Build mit esbuild
- Bundle als einzelne JS-Datei
- Einbindung in Wix über Custom Element oder direkter Script-Tag

## ✅ Nächste Schritte

1. ✅ Analyse abgeschlossen
2. ⏳ Projektstruktur erstellen
3. ⏳ Dependencies hinzufügen
4. ⏳ Code-Implementierung
5. ⏳ Testing & Optimierung
