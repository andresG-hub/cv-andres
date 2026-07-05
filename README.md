# CV – Andrés Felipe González González

**Ingeniero Mecatrónico | Lead Mechatronics Teacher | IoT & AI Developer**

Hoja de vida interactiva construida como Single Page Application con diseño editorial premium inspirado en Apple.

---

## Live Demo

- **Español:** [https://andresg-hub.github.io/cv-andres/](https://andresg-hub.github.io/cv-andres/)
- **English:** [https://andresg-hub.github.io/cv-andres/index-en.html](https://andresg-hub.github.io/cv-andres/index-en.html)

---

## Características

- Diseño premium con estética Apple
- Dos versiones: Español e Inglés
- Responsive (desktop, tablet, mobile)
- Microanimaciones y transiciones suaves
- Barras de habilidades animadas
- Timeline de experiencia con hover effects
- Cards de proyectos con gradientes
- QR code al repositorio GitHub
- Exportación a PDF integrada
- Optimizado para impresión
- Compatible con ATS
- Lucide Icons (outline, minimalistas)
- Google Fonts (Inter)

---

## Stack Tecnológico

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (Vanilla)
- Google Fonts (Inter)
- Lucide Icons
- html2pdf.js

---

## Estructura del Proyecto

```
cv-andres/
├── index.html          # CV en Español
├── index-en.html       # CV en Inglés
├── styles/
│   └── main.css        # Estilos principales
├── scripts/
│   └── app.js          # Animaciones y PDF export
├── assets/
│   ├── profile.jpg     # Foto profesional
│   ├── icons/
│   └── pdf/
├── README.md
└── LICENSE
```

---

## Uso

### Publicar con GitHub Pages

1. Ve a Settings > Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Save

### Exportar a PDF

1. Abre la página en un navegador
2. Haz clic en "Export PDF" (botón flotante inferior derecho)
3. El PDF se descarga automáticamente

### Agregar foto

1. Coloca tu foto profesional como `assets/profile.jpg`
2. Se mostrará automáticamente con el marco animado

---

## Personalización

### Colores

Edita las variables CSS en `styles/main.css`:

```css
:root {
    --navy: #0A2540;
    --cyan: #00D4FF;
    --neon: #00FF9D;
    --amber: #E67E22;
}
```

---

## Licencia

MIT License. Ver archivo LICENSE.
