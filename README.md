# ImStryker Portfolio

Portfolio profesional construido con Astro, Tailwind CSS y GSAP.

## 🚀 Tech Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP + Lottie
- **Languages**: TypeScript
- **i18n**: Español (principal) + Inglés

## 🌍 Estructura Bilingüe

```
src/pages/
├── index.astro          # Español (por defecto)
├── sobre-mi.astro       # Español
├── proyectos.astro      # Español
└── en/                  # Inglés
    ├── index.astro
    ├── about.astro
    └── projects.astro
```

## 📁 Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── assets/          # Imágenes, iconos, etc.
│   ├── components/      # Componentes reutilizables
│   ├── data/           # Datos del portfolio
│   ├── layouts/        # Layouts de páginas
│   ├── pages/          # Páginas del sitio
│   ├── styles/         # Estilos globales
│   ├── types/          # Tipos TypeScript
│   └── utils/          # Utilidades
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Comandos

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Type checking
npm run check
```

## 🎨 Sistema de Diseño

### Colores
- **Primary**: #faf015 (Amarillo ImStryker)
- **Black**: #263654 (Negro profesional)
- **White**: #ffffff
- **Grays**: Escala completa para elementos UI

### Tipografías
- **Primary**: Inter (Sans-serif)
- **Secondary**: Cardo (Serif)

## 🎭 Animaciones

### GSAP Capabilities
- Scroll-triggered animations
- Page transitions
- Micro-interactions
- Parallax effects
- Loading states

### Performance
- 60fps garantizado
- Hardware acceleration
- Optimized for mobile

## 🌟 Features Awwwards-Level

- [ ] Cursor personalizado magnético
- [ ] Micro-interacciones avanzadas
- [ ] Storytelling visual inmersivo
- [ ] Case studies interactivos
- [ ] Performance optimizada (<3s load)

## 🚀 Deployment

Configurado para deployment en VPS con Dockploy:

```dockerfile
# Dockerfile incluido para containerización
FROM node:18-alpine
# ... configuración Docker
```

## 📈 Objetivos

- **Time on site**: >3 minutos
- **Bounce rate**: <30%
- **Contact conversion**: >5%
- **Lighthouse score**: >90 (móvil)
- **Awwwards nomination**: Q2 2025

---

*Portfolio desarrollado con metodología neuromarketing y 15 años de experiencia en diseño web.*
