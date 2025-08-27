# Sistema de Animaciones Portfolio - Plan de Implementación

## 📋 Objetivo

Crear un sistema de animaciones reutilizable que permita agregar efectos consistentes a todas las entradas del portfolio sin necesidad de editar cada archivo individualmente.

## 🏗️ Arquitectura del Sistema

### Archivos Principales
```
src/
├── styles/
│   └── animations.css          # Clases CSS base y estados iniciales
├── scripts/
│   └── portfolio-animations.js # Lógica GSAP reutilizable
├── layouts/
│   └── PortfolioLayout.astro   # Layout específico para casos de estudio
└── docs/animations/
    └── animations.md           # Esta documentación
```

## 🎯 Funcionamiento

### 1. Sistema de Atributos Data
Cada elemento que necesite animación llevará atributos `data-animate`:

```html
<!-- Títulos -->
<h1 data-animate="fade-up" data-delay="0.2">TÍTULO PROYECTO</h1>
<h2 data-animate="slide-left" data-stagger="0.1">SECCIÓN</h2>

<!-- Secciones completas -->
<section data-animate="section-reveal" data-trigger="top 80%">
  <div data-animate="slide-left">Texto izquierda</div>
  <div data-animate="slide-right">Imagen derecha</div>
</section>

<!-- Estadísticas animadas -->
<div data-animate="counter" data-target="90" data-suffix="%">0</div>

<!-- Imágenes con efectos -->
<img data-animate="image-hover" data-scale="1.05" src="..." />
```

### 2. Tipos de Animaciones Planificadas

#### Animaciones de Entrada
- `fade-up` - Aparece desde abajo con fade
- `fade-down` - Aparece desde arriba con fade
- `slide-left` - Desliza desde la izquierda
- `slide-right` - Desliza desde la derecha
- `scale-in` - Aparece con escala desde 0.8 a 1
- `rotate-in` - Aparece con rotación sutil

#### Animaciones de Sección
- `section-reveal` - Revela sección completa al hacer scroll
- `stagger-children` - Anima elementos hijos con delay escalonado
- `parallax-section` - Efecto paralaje sutil

#### Efectos de Interacción
- `image-hover` - Hover effect en imágenes
- `button-hover` - Efectos de botones
- `card-hover` - Hover para tarjetas de contenido

#### Animaciones Especiales
- `counter` - Animación de conteo para estadísticas
- `progress-bar` - Barras de progreso animadas
- `text-reveal` - Revelado de texto línea por línea

### 3. Parámetros Configurables

#### Timing
- `data-delay="0.2"` - Retraso en segundos
- `data-duration="0.8"` - Duración de la animación
- `data-stagger="0.1"` - Retraso entre elementos hermanos

#### Triggers de Scroll
- `data-trigger="top 80%"` - Cuándo activar la animación
- `data-start="top bottom"` - Punto de inicio del scroll trigger
- `data-end="bottom top"` - Punto final del scroll trigger

#### Personalización
- `data-scale="1.05"` - Factor de escala para hovers
- `data-target="90"` - Valor objetivo para contadores
- `data-suffix="%"` - Sufijo para contadores

## 🚀 Plan de Implementación

### Fase 1: Estructura Base ✅
- [x] Crear carpetas y archivos base
- [x] Documentar el sistema
- [x] Establecer arquitectura

### Fase 2: CSS Base (Futuro)
- [ ] Definir estados iniciales para animaciones
- [ ] Crear keyframes reutilizables
- [ ] Implementar clases de utilidad
- [ ] Establecer variables CSS para timing

### Fase 3: Lógica GSAP (Futuro)
- [ ] Sistema de auto-detección de elementos
- [ ] Implementar ScrollTrigger para cada tipo
- [ ] Crear factory de animaciones
- [ ] Sistema de staggering automático

### Fase 4: Portfolio Layout (Futuro)
- [ ] Crear layout específico para casos de estudio
- [ ] Integrar sistema de animaciones
- [ ] Establecer estructura HTML estándar
- [ ] Documentar patrones de uso

### Fase 5: Testing y Refinamiento (Futuro)
- [ ] Probar en diferentes dispositivos
- [ ] Optimizar performance
- [ ] Crear ejemplos de uso
- [ ] Documentar best practices

## 💡 Ventajas del Sistema

### Escalabilidad
- **Una vez configurado**: Nuevas entradas solo necesitan atributos data
- **Mantenimiento centralizado**: Un solo lugar para todas las animaciones
- **Consistencia**: Mismos efectos en todo el portfolio

### Performance
- **GSAP se carga una vez**: Optimización de recursos
- **Lazy loading**: Animaciones solo cuando son necesarias
- **Hardware acceleration**: Uso de transform y opacity

### Flexibilidad
- **Override específico**: Casos especiales pueden tener animaciones custom
- **Configuración por atributos**: Fácil personalización sin tocar código
- **Modular**: Se puede deshabilitar o modificar por secciones

## 📝 Ejemplos de Uso Futuro

### Caso de Estudio Básico
```astro
---
// src/pages/proyecto/nuevo-proyecto.astro
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
---

<PortfolioLayout title="Nuevo Proyecto">
  <!-- Hero con animación -->
  <section data-animate="section-reveal">
    <h1 data-animate="fade-up" data-delay="0.2">NUEVO PROYECTO</h1>
    <p data-animate="fade-up" data-delay="0.4">Descripción del proyecto</p>
  </section>

  <!-- Resultados con contadores -->
  <section data-animate="section-reveal">
    <div data-animate="counter" data-target="150" data-suffix="%">0</div>
    <div data-animate="counter" data-target="45" data-suffix="min">0</div>
  </section>

  <!-- Imágenes con hover -->
  <img data-animate="image-hover" src="proyecto.jpg" alt="Proyecto" />
</PortfolioLayout>
```

### Layout Automático
```astro
---
// src/layouts/PortfolioLayout.astro
import Layout from './Layout.astro';
import '../styles/animations.css';
---

<Layout>
  <main>
    <slot />
  </main>
  
  <script src="/scripts/portfolio-animations.js"></script>
</Layout>
```

## 🎯 Estado Actual

**✅ COMPLETADO**: Estructura base y documentación
**⏳ PENDIENTE**: Implementación de animaciones (post-proyecto Trove)

## 📅 Próximos Pasos

1. **Finalizar proyecto Trove actual**
2. **Implementar CSS base** con estados iniciales
3. **Desarrollar lógica GSAP** para auto-detección
4. **Crear PortfolioLayout** estándar
5. **Migrar proyecto Trove** al nuevo sistema
6. **Crear nuevas entradas** usando el sistema

---

**Nota**: Este sistema está diseñado para implementarse después de completar el proyecto Trove actual, permitiendo un desarrollo eficiente y escalable del portfolio.