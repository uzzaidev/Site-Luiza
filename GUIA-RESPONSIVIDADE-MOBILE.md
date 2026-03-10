# Guia Técnico - Responsividade Mobile (Android & iOS)

## 📋 Índice
1. [Análise Atual do Projeto](#1-análise-atual-do-projeto)
2. [Problemas Identificados](#2-problemas-identificados)
3. [Estratégia de Breakpoints](#3-estratégia-de-breakpoints)
4. [Análise Componente por Componente](#4-análise-componente-por-componente)
5. [Recomendações Técnicas Específicas](#5-recomendações-técnicas-específicas)
6. [Considerações Android vs iOS](#6-considerações-android-vs-ios)
7. [Plano de Implementação](#7-plano-de-implementação)
8. [Testes e Validação](#8-testes-e-validação)

---

## 1. Análise Atual do Projeto

### 1.1 Stack Tecnológica
- **Framework:** Next.js 15.5.4 + React 19.2.0
- **Estilização:** Tailwind CSS 4.1.14 + CSS Modules + Design Tokens
- **Arquitetura:** Turbo Monorepo (Apps + Packages)
- **Internacionalização:** next-intl 3.23.2

### 1.2 Sistema de Estilização Híbrido

#### Tailwind CSS (apps/web/tailwind.config.js)
```javascript
// Breakpoints padrão do Tailwind 4:
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop pequeno
xl: 1280px  // Desktop
2xl: 1536px // Desktop grande
```

#### CSS Personalizado (apps/web/app/luciano.css)
```css
/* ÚNICO breakpoint atual */
@media (max-width: 968px) {
  /* Cobre tablet + mobile */
}
```

**⚠️ PROBLEMA:** Apenas 1 breakpoint para cobrir desde tablets até smartphones pequenos.

### 1.3 Componentes Analisados

| Componente | Arquivo | Status Responsivo | Método |
|------------|---------|-------------------|---------|
| Header | `components/Header.tsx` | ✅ Parcial | CSS custom + JS |
| Footer | `components/Footer.tsx` | ✅ Bom | Tailwind classes |
| HeroSection | `components/sections/HeroSection.tsx` | ⚠️ Precisa melhoria | CSS custom |
| AboutSection | `components/sections/AboutSection.tsx` | ⚠️ Precisa melhoria | CSS custom |
| PhilosophySection | `components/sections/PhilosophySection.tsx` | ⚠️ Precisa melhoria | CSS custom |
| AulasSection | `components/sections/AulasSection.tsx` | ⚠️ Precisa melhoria | CSS custom |
| StatsSection | `components/sections/StatsSection.tsx` | ✅ Bom | Tailwind classes |
| TestimonialsSection | `components/sections/TestimonialsSection.tsx` | ⚠️ Precisa melhoria | CSS custom |
| ContactForm | `components/ContactForm.tsx` | ✅ Bom | Tailwind classes |

---

## 2. Problemas Identificados

### 🔴 Críticos

#### 2.1 Breakpoint Único (968px)
**Localização:** `apps/web/app/luciano.css:1241`

```css
@media (max-width: 968px) {
  /* Trata tablet, mobile landscape e mobile portrait iguais */
}
```

**Problema:**
- Tablets (768px-968px) recebem layout mobile
- Nenhum breakpoint para mobile pequeno (< 480px)
- Sem tratamento específico para mobile landscape (480px-768px)

**Dispositivos afetados:**
- iPad (768px): Desperdiça espaço
- iPhone 14 Pro Max (430px): Elementos muito apertados
- Galaxy Fold (280px aberto): Quebra layout

#### 2.2 Grid Layouts Sem Fallback Adequado

**HeroSection (linha 202 luciano.css):**
```css
.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* Desktop */
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr; /* Muda abruptamente */
  }
}
```

**Problema:**
- Mudança abrupta de 2 colunas → 1 coluna em 968px
- Sem layout intermediário para tablets
- Imagem do hero (510x680px) não escala proporcionalmente

#### 2.3 Tipografia Fixa

**Exemplo (linha 209 luciano.css):**
```css
.hero-text h1 {
  font-size: 3.5rem; /* 56px fixo */
}

@media (max-width: 968px) {
  .hero-text h1 {
    font-size: 2.5rem; /* 40px em mobile */
  }
}
```

**Problema:**
- Não usa `clamp()` para escalamento fluido
- Tamanhos fixos não se adaptam a telas intermediárias
- iPhone SE (375px) vs iPhone 14 Pro Max (430px) recebem mesmo tamanho

#### 2.4 Padding e Spacing Inadequados

**Exemplo (linha 179 luciano.css):**
```css
.hero {
  padding: 8rem 2rem 6rem; /* Desktop */
}

@media (max-width: 968px) {
  /* SEM AJUSTE DE PADDING ❌ */
}
```

**Problema:**
- Padding vertical excessivo em mobile (8rem = 128px)
- Padding horizontal fixo (2rem = 32px) em telas < 375px
- Desperdiça espaço vertical precioso no mobile

#### 2.5 CTAs e Botões

**Exemplo (linha 239 luciano.css):**
```css
.cta-group {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 1.2rem 2.5rem; /* 19.2px x 40px */
}
```

**Problema em mobile:**
- Botões lado a lado quebram em telas < 400px
- Texto em 2 linhas nos botões (HeroSection.tsx:40-41)
- Área de toque abaixo dos 44px recomendados pela Apple

#### 2.6 Menu Mobile

**Header.tsx + luciano.css (linha 110-136):**
```css
.mobile-menu {
  width: 80%;
  max-width: 300px; /* ✅ Bom */
}
```

**Problemas:**
- Overlay não bloqueia scroll (corrigido em Header.tsx:28-38)
- Menu não fecha no resize da tela
- Sem animação de fade no overlay

#### 2.7 Imagens

**HeroSection.tsx (linha 52-59):**
```tsx
<Image
  src="/images/Luciano_2_sem_fundo_menor.png"
  width={510}
  height={680}
  className="object-contain"
/>
```

**Problemas:**
- Dimensões fixas não usam `sizes` attribute
- Sem imagens otimizadas para diferentes DPRs (1x, 2x, 3x)
- `object-contain` pode criar espaços vazios

### 🟡 Moderados

#### 2.8 Z-index Inconsistente
```css
/* luciano.css */
header { z-index: 100; }
.hamburger-btn { z-index: 101; }
.mobile-menu-overlay { z-index: 98; }
.mobile-menu { z-index: 99; }
```

**vs Design Tokens (themes.css linha 198-204):**
```css
--z-modal: 1050;
--z-modal-backdrop: 1040;
```

**Problema:** Não usa tokens, escala z-index inconsistente.

#### 2.9 Stats Section

**luciano.css (linha 363-389):**
```css
.stats {
  grid-template-columns: repeat(4, 1fr); /* Desktop */
}

@media (max-width: 968px) {
  .stats {
    grid-template-columns: repeat(2, 1fr); /* Mobile */
  }
}
```

**Problema:**
- 2 colunas adequado para tablets, mas não para mobile < 480px
- Deveria ser 1 coluna em mobile portrait

---

## 3. Estratégia de Breakpoints

### 3.1 Breakpoints Recomendados

#### Mobile-First + Tailwind + CSS Custom

```css
/* ===== BREAKPOINTS MOBILE-FIRST ===== */

/* 1. Mobile Portrait (padrão - sem media query) */
/* 320px - 479px */
/* iPhone SE, Galaxy A, dispositivos compactos */

/* 2. Mobile Landscape */
@media (min-width: 480px) {
  /* 480px - 767px */
  /* iPhone landscape, pequenos tablets */
}

/* 3. Tablet Portrait */
@media (min-width: 768px) {
  /* 768px - 1023px */
  /* iPad, Android tablets portrait */
}

/* 4. Tablet Landscape / Desktop Pequeno */
@media (min-width: 1024px) {
  /* 1024px - 1279px */
  /* iPad landscape, laptops pequenos */
}

/* 5. Desktop */
@media (min-width: 1280px) {
  /* 1280px+ */
  /* Desktops, laptops grandes */
}

/* 6. Mobile Pequeno (ajustes específicos) */
@media (max-width: 375px) {
  /* iPhone SE, Galaxy Fold fechado */
  /* Redução de fontes e padding */
}
```

### 3.2 Mapeamento para Tailwind

```javascript
// tailwind.config.js (já configurado)
screens: {
  'sm': '640px',  // ≈ Mobile landscape
  'md': '768px',  // Tablet portrait
  'lg': '1024px', // Tablet landscape
  'xl': '1280px', // Desktop
  '2xl': '1536px' // Desktop large
}
```

### 3.3 Tabela de Dispositivos Alvo

| Dispositivo | Largura | Altura | DPR | Breakpoint |
|-------------|---------|--------|-----|------------|
| **Android** |
| Galaxy S23 Ultra | 412px | 915px | 3.5x | Mobile Portrait |
| Pixel 7 Pro | 412px | 892px | 3.5x | Mobile Portrait |
| Galaxy Z Fold 5 (fechado) | 280px | 796px | 3.0x | Mobile Pequeno |
| Galaxy Z Fold 5 (aberto) | 673px | 841px | 2.0x | Mobile Landscape |
| Galaxy Tab S8 | 800px | 1280px | 2.0x | Tablet Portrait |
| **iOS** |
| iPhone SE (3rd) | 375px | 667px | 2.0x | Mobile Portrait |
| iPhone 14 | 390px | 844px | 3.0x | Mobile Portrait |
| iPhone 14 Pro Max | 430px | 932px | 3.0x | Mobile Portrait |
| iPhone 14 landscape | 844px | 390px | 3.0x | Mobile Landscape |
| iPad (10th gen) | 820px | 1180px | 2.0x | Tablet Portrait |
| iPad Pro 11" | 834px | 1194px | 2.0x | Tablet Portrait |
| iPad Pro 12.9" | 1024px | 1366px | 2.0x | Tablet Landscape |

---

## 4. Análise Componente por Componente

### 4.1 Header (components/Header.tsx)

#### Status Atual: ✅ 70% Responsivo

**O que funciona:**
- Menu hambúrguer aparece < 968px ✅
- Overlay bloqueia scroll ✅
- Menu lateral animado ✅

**O que precisa melhorar:**

1. **Breakpoint muito alto:**
```css
/* ANTES (luciano.css:1269) */
@media (max-width: 968px) {
  .nav-links { display: none; }
}

/* DEPOIS - usar Tailwind */
/* Header.tsx */
<ul className="nav-links hidden md:flex">
```

2. **Logo muito grande em mobile pequeno:**
```css
/* ADICIONAR (luciano.css:41) */
.logo {
  font-size: 1.8rem; /* Desktop */
}

@media (max-width: 480px) {
  .logo {
    font-size: 1.4rem; /* Mobile */
  }
}

@media (max-width: 375px) {
  .logo {
    font-size: 1.2rem; /* Mobile pequeno */
  }
}
```

3. **Padding do nav muito grande:**
```css
/* ANTES (luciano.css:35) */
nav {
  padding: 0 2rem;
}

/* DEPOIS */
nav {
  padding: 0 2rem;
}

@media (max-width: 768px) {
  nav {
    padding: 0 1.5rem;
  }
}

@media (max-width: 480px) {
  nav {
    padding: 0 1rem;
  }
}
```

4. **Menu mobile muito largo em landscape:**
```css
/* ADICIONAR (luciano.css:122) */
.mobile-menu {
  width: 80%;
  max-width: 300px;
}

@media (max-width: 768px) and (max-height: 500px) {
  /* Mobile landscape */
  .mobile-menu {
    width: 60%;
    padding-top: 3rem;
  }

  .mobile-nav-links {
    gap: 1rem; /* Reduzir espaçamento */
  }
}
```

### 4.2 HeroSection (components/sections/HeroSection.tsx)

#### Status Atual: ⚠️ 40% Responsivo

**Arquivo CSS:** `luciano.css:174-295`

**Problemas Críticos:**

1. **Grid quebra abruptamente:**
```css
/* ANTES */
.hero-content {
  grid-template-columns: 1.2fr 1fr; /* Desktop */
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr; /* Mobile */
  }
}

/* DEPOIS */
.hero-content {
  display: grid;
  grid-template-columns: 1fr; /* Mobile first */
  gap: 2rem;
}

@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 0.8fr; /* Tablet */
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: 1.2fr 1fr; /* Desktop */
    gap: 4rem;
  }
}
```

2. **Tipografia não escala:**
```css
/* ANTES */
.hero-text h1 {
  font-size: 3.5rem;
}

@media (max-width: 968px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }
}

/* DEPOIS - Escalamento Fluido */
.hero-text h1 {
  font-size: clamp(1.75rem, 5vw + 1rem, 3.5rem);
  /* Mobile 1.75rem (28px) → Desktop 3.5rem (56px) */
}

.hero-text .subtitle {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
  /* Mobile 1rem (16px) → Desktop 1.3rem (21px) */
}

.hero-text .tagline {
  font-size: clamp(0.95rem, 1.5vw + 0.5rem, 1.1rem);
}
```

3. **Padding excessivo em mobile:**
```css
/* ANTES */
.hero {
  padding: 8rem 2rem 6rem;
}

/* DEPOIS */
.hero {
  padding: 3rem 1rem 2rem; /* Mobile */
}

@media (min-width: 480px) {
  .hero {
    padding: 4rem 1.5rem 3rem;
  }
}

@media (min-width: 768px) {
  .hero {
    padding: 5rem 2rem 4rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 8rem 2rem 6rem; /* Desktop original */
  }
}
```

4. **CTAs quebram em mobile:**
```css
/* ANTES */
.cta-group {
  display: flex;
  gap: 1.5rem;
}

/* DEPOIS */
.cta-group {
  display: flex;
  flex-direction: column; /* Mobile */
  gap: 1rem;
  width: 100%;
}

.cta-group .btn {
  width: 100%; /* Full width em mobile */
  padding: 1rem 1.5rem;
}

@media (min-width: 480px) {
  .cta-group {
    flex-direction: row;
    width: auto;
  }

  .cta-group .btn {
    width: auto;
    padding: 1.2rem 2rem;
  }
}

@media (min-width: 768px) {
  .cta-group {
    gap: 1.5rem;
  }

  .cta-group .btn {
    padding: 1.2rem 2.5rem;
  }
}
```

5. **Imagem não otimizada:**
```tsx
/* ANTES (HeroSection.tsx:52) */
<Image
  src="/images/Luciano_2_sem_fundo_menor.png"
  width={510}
  height={680}
  className="object-contain"
/>

/* DEPOIS */
<Image
  src="/images/Luciano_2_sem_fundo_menor.png"
  alt="Luciano Giorgetta - Instrutor de Yôga"
  width={510}
  height={680}
  sizes="(max-width: 480px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 510px"
  className="object-contain w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[680px]"
  priority
  quality={90}
/>
```

### 4.3 AboutSection (components/sections/AboutSection.tsx)

#### Status Atual: ⚠️ 50% Responsivo

**Arquivo CSS:** `luciano.css:296-390`

**Problemas:**

1. **Timeline quebra mal:**
```css
/* ANTES */
.timeline {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 968px) {
  .timeline {
    grid-template-columns: 1fr;
  }
}

/* DEPOIS */
.timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .timeline {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}
```

2. **Stats deveria ser 1 coluna em mobile pequeno:**
```css
/* ANTES */
.stats {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 968px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* DEPOIS */
.stats {
  display: grid;
  grid-template-columns: 1fr; /* Mobile pequeno */
  gap: 1.5rem;
  padding: 2rem 1.5rem;
}

@media (min-width: 480px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem 2rem;
  }
}

@media (min-width: 768px) {
  .stats {
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .stats {
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem;
  }
}
```

3. **Números das stats muito grandes em mobile:**
```css
/* ADICIONAR */
.stat-number {
  font-size: clamp(2rem, 5vw + 1rem, 3rem);
}

.stat-label {
  font-size: clamp(0.85rem, 1vw + 0.5rem, 0.95rem);
}
```

### 4.4 PhilosophySection (components/sections/PhilosophySection.tsx)

#### Status Atual: ⚠️ 50% Responsivo

**Arquivo CSS:** `luciano.css:391-442`

**Problemas:**

1. **Grid 2x2 quebra em 1 coluna abruptamente:**
```css
/* ANTES */
.filosofia-grid {
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 968px) {
  .filosofia-grid {
    grid-template-columns: 1fr;
  }
}

/* DEPOIS */
.filosofia-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .filosofia-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .filosofia-grid {
    gap: 3rem;
  }
}
```

2. **Quote muito grande em mobile:**
```css
/* ANTES */
.filosofia-quote {
  font-size: 1.8rem;
  padding: 2rem;
}

/* DEPOIS */
.filosofia-quote {
  font-size: clamp(1.2rem, 2.5vw + 0.5rem, 1.8rem);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .filosofia-quote {
    padding: 2rem;
    margin-bottom: 3rem;
  }
}
```

### 4.5 AulasSection (components/sections/AulasSection.tsx)

#### Status Atual: ⚠️ 50% Responsivo

**Arquivo CSS:** `luciano.css:443-511`

**Problemas:**

1. **Grid 3 colunas → 1 coluna muito abrupto:**
```css
/* ANTES */
.aulas-grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 968px) {
  .aulas-grid {
    grid-template-columns: 1fr;
  }
}

/* DEPOIS */
.aulas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .aulas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .aulas-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}
```

2. **Ícones muito grandes em mobile:**
```css
/* ADICIONAR */
.aula-icon {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .aula-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
}
```

### 4.6 TestimonialsSection

#### Status Atual: ⚠️ 50% Responsivo

**Arquivo CSS:** `luciano.css:512-561`

```css
/* ANTES */
.depoimentos-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 968px) {
  .depoimentos-grid {
    grid-template-columns: 1fr;
  }
}

/* DEPOIS */
.depoimentos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .depoimentos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}
```

### 4.7 Blog Pages

#### Posts individuais precisam ajustes:

```css
/* ANTES (luciano.css:1124) */
.blog-post-header h1 {
  font-size: 3rem;
}

@media (max-width: 968px) {
  .blog-post-header h1 {
    font-size: 2rem;
  }
}

/* DEPOIS */
.blog-post-header h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}

/* Imagem do post */
.blog-post-image {
  margin: -6rem auto 4rem;
}

@media (max-width: 768px) {
  .blog-post-image {
    margin: -3rem auto 2rem; /* Menos overlap em mobile */
  }
}
```

---

## 5. Recomendações Técnicas Específicas

### 5.1 Tipografia Responsiva com clamp()

#### Função clamp() - Explicação:
```css
font-size: clamp(MIN, PREFERIDO, MAX);
```

- **MIN:** Tamanho mínimo (mobile)
- **PREFERIDO:** Valor fluido baseado em viewport (vw)
- **MAX:** Tamanho máximo (desktop)

#### Tabela de Conversão Recomendada:

| Elemento | Desktop Atual | Mobile Atual | clamp() Recomendado | Escala |
|----------|---------------|--------------|---------------------|---------|
| H1 Hero | 3.5rem (56px) | 2.5rem (40px) | `clamp(1.75rem, 5vw + 1rem, 3.5rem)` | 28px → 56px |
| H2 Section | 2.8rem (45px) | 2rem (32px) | `clamp(1.75rem, 4vw + 0.8rem, 2.8rem)` | 28px → 45px |
| Subtitle | 1.3rem (21px) | 1rem (16px) | `clamp(1rem, 2vw + 0.5rem, 1.3rem)` | 16px → 21px |
| Body | 1.1rem (18px) | 1rem (16px) | `clamp(1rem, 0.5vw + 0.8rem, 1.1rem)` | 16px → 18px |
| Small | 0.95rem (15px) | 0.85rem (14px) | `clamp(0.85rem, 0.5vw + 0.6rem, 0.95rem)` | 14px → 15px |

### 5.2 Spacing Responsivo

#### Usar Tailwind classes dinâmicas:

```tsx
/* ❌ EVITAR */
<div className="p-8">

/* ✅ RECOMENDADO */
<div className="p-4 sm:p-6 md:p-8 lg:p-10">
```

#### Tabela de Spacing Mobile-First:

| Uso | Mobile | Tablet | Desktop |
|-----|--------|--------|---------|
| Section padding vertical | `py-12` (3rem) | `py-16` (4rem) | `py-24` (6rem) |
| Section padding horizontal | `px-4` (1rem) | `px-6` (1.5rem) | `px-8` (2rem) |
| Container max-width | `100%` | `max-w-screen-md` | `max-w-screen-xl` |
| Gap entre cards | `gap-4` (1rem) | `gap-6` (1.5rem) | `gap-8` (2rem) |

### 5.3 Imagens Responsivas

#### Next.js Image Component - Boas Práticas:

```tsx
<Image
  src="/images/foto.jpg"
  alt="Descrição"
  width={1200}
  height={800}
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 90vw,
         (max-width: 1024px) 70vw,
         1200px"
  className="w-full h-auto"
  priority={isAboveFold}
  quality={85}
/>
```

**Sizes Explicação:**
- `(max-width: 480px) 100vw` → Mobile usa 100% da largura
- `(max-width: 768px) 90vw` → Tablet usa 90% da largura
- `(max-width: 1024px) 70vw` → Desktop pequeno usa 70%
- `1200px` → Desktop usa tamanho fixo

### 5.4 Touch Targets (Apple & Google Guidelines)

#### Tamanhos Mínimos Recomendados:

| Plataforma | Tamanho Mínimo | Recomendado |
|------------|----------------|-------------|
| Apple HIG | 44x44 pt | 48x48 pt |
| Material Design | 48x48 dp | 56x56 dp |
| **Implementação** | **min 44px** | **48-56px** |

#### CSS para botões:

```css
.btn {
  min-height: 44px; /* Apple mínimo */
  min-width: 44px;
  padding: 0.75rem 1.5rem; /* ~12px 24px */
}

@media (hover: hover) {
  /* Desktop com mouse */
  .btn {
    min-height: 40px;
    padding: 0.625rem 1.25rem;
  }
}

@media (hover: none) {
  /* Touch devices */
  .btn {
    min-height: 48px;
    padding: 0.875rem 1.75rem;
  }
}
```

### 5.5 Viewport Units Seguros

#### Problema do 100vh em mobile:

```css
/* ❌ EVITAR */
.full-height {
  height: 100vh; /* Barra de endereço cobre conteúdo */
}

/* ✅ RECOMENDADO */
.full-height {
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic Viewport Height - iOS 15.4+ */
}

/* ✅ ALTERNATIVA - CSS Custom Property com JS */
.full-height {
  height: calc(var(--vh, 1vh) * 100);
}
```

```javascript
// Script para calcular vh real
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
window.addEventListener('resize', setVh);
```

### 5.6 Safe Area (iOS Notch/Dynamic Island)

```css
/* Suporte a notch e Dynamic Island */
.header {
  padding-top: max(1.5rem, env(safe-area-inset-top));
}

.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}

/* Para conteúdo full-width */
.full-width-content {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}
```

---

## 6. Considerações Android vs iOS

### 6.1 Diferenças de Renderização

| Aspecto | iOS (WebKit) | Android (Chromium) | Solução |
|---------|--------------|---------------------|---------|
| **Fonts** | Renderiza mais fino | Renderiza mais grosso | `-webkit-font-smoothing: antialiased` |
| **Fixed positioning** | Problemas com keyboard | Funciona bem | Usar `position: sticky` quando possível |
| **100vh** | Inclui barra de endereço | Funciona bem | Usar `100dvh` ou JS |
| **Border radius + overflow** | Pode quebrar | Funciona bem | Adicionar `transform: translateZ(0)` |
| **Scroll bounce** | Bounce nativo | Sem bounce | `-webkit-overflow-scrolling: touch` |

### 6.2 CSS Específico para Plataforma

```css
/* iOS apenas */
@supports (-webkit-touch-callout: none) {
  .ios-specific {
    /* Estilos para iOS */
  }
}

/* Android apenas (feature query) */
@supports not (-webkit-touch-callout: none) {
  .android-specific {
    /* Estilos para Android */
  }
}

/* Detecção via JavaScript mais confiável */
```

```javascript
// utils/platform.ts
export const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

export const isAndroid = () => {
  return /Android/.test(navigator.userAgent);
};
```

### 6.3 Viewport Meta Tag

```html
<!-- apps/web/app/layout.tsx -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
/>
```

**Explicação:**
- `width=device-width` → Usa largura do dispositivo
- `initial-scale=1` → Sem zoom inicial
- `maximum-scale=5` → Permite zoom até 5x (acessibilidade)
- `user-scalable=yes` → Permite zoom (WCAG)
- `viewport-fit=cover` → Suporte a notch/Dynamic Island

### 6.4 PWA Meta Tags (Opcional)

```html
<!-- Para melhor experiência quando adicionado à tela inicial -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="theme-color" content="#1A3A52">
```

---

## 7. Plano de Implementação

### Fase 1: Preparação (1-2 horas)

#### 1.1 Criar arquivo de CSS responsivo separado
```bash
touch apps/web/app/luciano-responsive.css
```

#### 1.2 Configurar breakpoints no Tailwind
```javascript
// apps/web/tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '375px',   // NOVO: Mobile pequeno
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop pequeno
      'xl': '1280px',  // Desktop
      '2xl': '1536px', // Desktop grande
    },
  },
};
```

#### 1.3 Importar novo CSS
```css
/* apps/web/app/globals.css */
@import "tailwindcss";
@import "../../../packages/design-tokens/src/themes.css";
@import "./luciano-responsive.css"; /* NOVO */
```

### Fase 2: Header & Navegação (2-3 horas)

#### 2.1 Atualizar Header.tsx
```tsx
/* ❌ Remover classes inline, usar Tailwind */
<nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <Link href="/" className="logo text-2xl xs:text-xl md:text-3xl">
    Luciano <span>Giorgetta</span>
  </Link>

  <ul className="nav-links hidden lg:flex gap-8">
    {/* ... */}
  </ul>
</nav>
```

#### 2.2 Atualizar luciano.css (Header)
```css
/* luciano-responsive.css */
.logo {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
}

nav {
  padding: 0 clamp(1rem, 2vw, 2rem);
}

@media (max-width: 768px) and (max-height: 500px) {
  .mobile-menu {
    width: 60%;
    padding-top: 3rem;
  }
}
```

### Fase 3: HeroSection (3-4 horas)

#### 3.1 Refatorar CSS do Hero
```css
/* luciano-responsive.css */

/* Mobile First */
.hero {
  padding: clamp(3rem, 8vw, 8rem) clamp(1rem, 3vw, 2rem) clamp(2rem, 6vw, 6rem);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.hero-text h1 {
  font-size: clamp(1.75rem, 5vw + 1rem, 3.5rem);
  line-height: 1.2;
}

.hero-text .subtitle {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
  margin-bottom: 1.5rem;
}

.hero-text .tagline {
  font-size: clamp(0.95rem, 1.5vw + 0.5rem, 1.1rem);
  margin-bottom: 2rem;
}

.cta-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.cta-group .btn {
  width: 100%;
  padding: 1rem 1.5rem;
  min-height: 48px;
}

/* Mobile Landscape */
@media (min-width: 480px) {
  .cta-group {
    flex-direction: row;
    width: auto;
  }

  .cta-group .btn {
    width: auto;
    padding: 1.1rem 2rem;
  }
}

/* Tablet */
@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 0.8fr;
    gap: 3rem;
  }

  .cta-group {
    gap: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
  }

  .cta-group .btn {
    padding: 1.2rem 2.5rem;
  }
}
```

#### 3.2 Atualizar HeroSection.tsx
```tsx
<Image
  src="/images/Luciano_2_sem_fundo_menor.png"
  alt="Luciano Giorgetta"
  width={510}
  height={680}
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 510px"
  className="w-full h-auto max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[680px] object-contain"
  priority
  quality={90}
/>
```

### Fase 4: Seções (AboutSection, PhilosophySection, AulasSection) (4-5 horas)

#### 4.1 AboutSection - Timeline
```css
.timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .timeline {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

.timeline-year {
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.timeline-title {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
}
```

#### 4.2 Stats Section
```css
.stats {
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 1rem;
}

@media (min-width: 480px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .stats {
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem 2rem;
  }
}

.stat-number {
  font-size: clamp(2rem, 5vw + 1rem, 3rem);
}
```

#### 4.3 PhilosophySection
```css
.filosofia-quote {
  font-size: clamp(1.2rem, 2.5vw + 0.5rem, 1.8rem);
  padding: 1.5rem;
}

.filosofia-grid {
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .filosofia-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

#### 4.4 AulasSection
```css
.aulas-grid {
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .aulas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .aulas-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

.aula-icon {
  width: clamp(60px, 10vw, 80px);
  height: clamp(60px, 10vw, 80px);
  font-size: clamp(1.5rem, 3vw, 2rem);
}
```

### Fase 5: Blog & Páginas Internas (2-3 horas)

#### 5.1 Blog Posts
```css
.blog-post-header h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}

.blog-post-image {
  margin: clamp(-3rem, -5vw, -6rem) auto clamp(2rem, 3vw, 4rem);
}

.blog-post-content {
  padding: clamp(2rem, 4vw, 4rem) clamp(1rem, 2vw, 2rem);
}
```

### Fase 6: Testes e Ajustes Finais (3-4 horas)

---

## 8. Testes e Validação

### 8.1 Checklist de Dispositivos

#### Mobile Portrait (320px - 479px)
- [ ] iPhone SE (375x667)
- [ ] Galaxy A12 (360x740)
- [ ] Galaxy Fold fechado (280x653)

**Testar:**
- [ ] Header não quebra
- [ ] CTAs são clicáveis (min 44px)
- [ ] Textos legíveis (min 16px corpo)
- [ ] Imagens não estouram
- [ ] Sem scroll horizontal

#### Mobile Landscape (480px - 767px)
- [ ] iPhone 14 landscape (844x390)
- [ ] Galaxy S23 landscape (915x412)

**Testar:**
- [ ] Menu mobile funciona
- [ ] Hero não ocupa tela inteira
- [ ] CTAs visíveis sem scroll

#### Tablet Portrait (768px - 1023px)
- [ ] iPad (820x1180)
- [ ] Galaxy Tab S8 (800x1280)

**Testar:**
- [ ] Grids mostram 2 colunas
- [ ] Não desperdiça espaço horizontal
- [ ] Navegação desktop aparece (se design permitir)

#### Tablet Landscape / Desktop (1024px+)
- [ ] iPad Pro 12.9 (1366x1024)
- [ ] Desktop 1920x1080

**Testar:**
- [ ] Layout desktop completo
- [ ] Grids com 3-4 colunas
- [ ] Hover states funcionam

### 8.2 Ferramentas de Teste

#### 8.2.1 Chrome DevTools
```
1. Abrir DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Testar presets:
   - iPhone SE
   - iPhone 14 Pro Max
   - Pixel 7
   - iPad Air
   - Galaxy Fold
4. Testar rotação (Ctrl+Shift+R)
5. Testar throttling (Slow 3G)
```

#### 8.2.2 BrowserStack / LambdaTest
```
Testar em dispositivos reais:
- iOS 16, 17, 18 (Safari)
- Android 12, 13, 14 (Chrome)
```

#### 8.2.3 Lighthouse Mobile Score
```bash
# Rodar audit mobile
npm run build
npm run start
lighthouse http://localhost:3000 --view --preset=mobile
```

**Metas:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95

### 8.3 Testes de Interação

#### Touch Targets
```
Usar ferramenta: Chrome DevTools > Rendering > Show touch actions
```
- [ ] Todos os botões ≥ 44x44px
- [ ] Espaçamento entre elementos touch ≥ 8px
- [ ] Links em parágrafos têm padding

#### Gestures
- [ ] Swipe para fechar menu mobile funciona
- [ ] Scroll suave em iOS (momentum scrolling)
- [ ] Pinch zoom permitido (acessibilidade)
- [ ] Não interfere com gestos nativos (voltar, drawer)

### 8.4 Testes de Performance

#### Imagens
```bash
# Verificar tamanhos de imagem
npm run build
# Checar .next/static/media/
```
- [ ] WebP/AVIF gerados
- [ ] Múltiplos tamanhos (srcset)
- [ ] Lazy loading (exceto above fold)

#### JavaScript Bundle
```bash
npm run build
# Checar .next/static/chunks/
```
- [ ] Code splitting por rota
- [ ] Sem bibliotecas duplicadas
- [ ] Tree shaking funcionando

### 8.5 Validação Automatizada

#### Script de teste responsivo
```javascript
// scripts/test-responsive.js
const puppeteer = require('puppeteer');

const devices = [
  'iPhone SE',
  'iPhone 14 Pro Max',
  'Pixel 7',
  'iPad',
  'iPad Pro'
];

async function testResponsive() {
  const browser = await puppeteer.launch();

  for (const deviceName of devices) {
    const device = puppeteer.devices[deviceName];
    const page = await browser.newPage();
    await page.emulate(device);
    await page.goto('http://localhost:3000');

    // Screenshot
    await page.screenshot({
      path: `screenshots/${deviceName}.png`,
      fullPage: true
    });

    // Checar scroll horizontal
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    if (hasHorizontalScroll) {
      console.error(`❌ ${deviceName}: Scroll horizontal detectado!`);
    } else {
      console.log(`✅ ${deviceName}: OK`);
    }
  }

  await browser.close();
}

testResponsive();
```

---

## 📊 Resumo Executivo

### Problemas Críticos Identificados
1. ⚠️ **Breakpoint único (968px)** → Implementar 5 breakpoints
2. ⚠️ **Tipografia fixa** → Usar `clamp()` para escala fluida
3. ⚠️ **Grids quebram abruptamente** → Mobile-first progressivo
4. ⚠️ **Padding excessivo em mobile** → Reduzir 60% em telas pequenas
5. ⚠️ **CTAs muito pequenos** → Aumentar para 48x48px mínimo

### Tempo Estimado de Implementação
- **Preparação:** 1-2h
- **Header:** 2-3h
- **HeroSection:** 3-4h
- **Seções principais:** 4-5h
- **Blog/Páginas:** 2-3h
- **Testes:** 3-4h
- **TOTAL:** 15-21 horas

### Priorização (MoSCoW)

#### Must Have (Implementar primeiro)
- [ ] Breakpoints mobile (< 480px)
- [ ] Tipografia com `clamp()`
- [ ] Padding/spacing responsivo
- [ ] Touch targets 44px mínimo
- [ ] Imagens com `sizes`

#### Should Have (Implementar depois)
- [ ] Viewport dinâmico (dvh)
- [ ] Safe area (iOS notch)
- [ ] Scroll suave
- [ ] Hover states desktop

#### Could Have (Bônus)
- [ ] PWA meta tags
- [ ] Skeleton screens
- [ ] Animações otimizadas
- [ ] Dark mode mobile

#### Won't Have (Não necessário)
- [ ] Suporte IE11
- [ ] Layout landscape específico para tablet

---

## 🔧 Ferramentas e Recursos

### Documentação Oficial
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Material Design Layout](https://m3.material.io/foundations/layout/applying-layout/window-size-classes)

### Ferramentas de Teste
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [BrowserStack](https://www.browserstack.com/)
- [Responsively App](https://responsively.app/) - Free desktop app
- [Polypane](https://polypane.app/) - Paid, excelente para responsivo

### Geradores CSS
- [Fluid Type Scale Calculator](https://www.fluid-type-scale.com/)
- [Clamp Calculator](https://clamp.font-size.app/)
- [Utopia - Fluid Responsive Design](https://utopia.fyi/)

---

## 📝 Notas Finais

Este guia foi criado após análise detalhada de:
- ✅ 15+ componentes React
- ✅ 1342 linhas de CSS personalizado
- ✅ Configuração Tailwind + Design Tokens
- ✅ Estrutura Next.js 15 + App Router

**Próximos Passos:**
1. Revisar este documento com a equipe
2. Priorizar fases de implementação
3. Criar branch `feat/responsividade-mobile`
4. Implementar fase por fase
5. Testar em dispositivos reais
6. Validar com usuários

**Contato para Dúvidas:**
- Documentação: Este arquivo
- Issues: GitHub Issues do projeto

---

**Última atualização:** 2025-12-02
**Versão:** 1.0.0
**Autor:** Claude Code (Análise Automatizada)
