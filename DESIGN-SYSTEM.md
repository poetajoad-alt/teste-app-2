# 🎨 DESIGN SYSTEM - CSS Variables

## Introdução

O novo design system unifica todas as variáveis CSS em um único ponto de verdade, preparado para compartilhamento entre múltiplas páginas.

---

## 📦 Estrutura de Arquivo Recomendada

```
css/
├── variables.css          ← Design system compartilhado (novo)
├── index.css              ← Importa variables.css + estilos específicos
├── login.css              ← Importa variables.css + estilos específicos
└── registro.css           ← Importa variables.css + estilos específicos
```

---

## 🎨 PALETA DE CORES

```css
:root {
  /* Cores Primárias */
  --color-primary-dark: #591c31;        /* Marrom escuro */
  --color-primary-light: #f0c1d1;       /* Rosa claro */
  --color-accent: #a8617b;              /* Magenta/roxo */
  --color-text-light: #f2e4ee;          /* Rosa muito claro */
  
  /* Cores de Gradiente */
  --color-gradient-top: #ffd9e7;        /* Rosa claro */
  --color-gradient-bottom: #a8617b;     /* Magenta */
  
  /* Gradiente Principal */
  --gradient-main: linear-gradient(
    180deg,
    var(--color-gradient-top) 0%,
    var(--color-gradient-bottom) 100%
  );
}
```

---

## 🔤 TIPOGRAFIA

```css
:root {
  --font-family-base: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  
  /* Escalas de Fonte - Fluidas com clamp() */
  --font-size-body: 16px;
  --font-size-heading: clamp(28px, 7vw, 30px);        /* 28px → 30px */
  --font-size-button: clamp(22px, 5vw, 25px);         /* 22px → 25px */
  
  /* Line Heights */
  --line-height-base: 1.5;      /* Texto corpo */
  --line-height-heading: 1.3;   /* Títulos */
}
```

### Como Funciona `clamp()`?
```
clamp(MIN, PREFERRED, MAX)

--font-size-heading: clamp(28px, 7vw, 30px)
├─ 28px     = Tamanho mínimo (320px device)
├─ 7vw      = Escalado a 7% da viewport width
└─ 30px     = Tamanho máximo (480px+ device)

Resultado:
320px  → 22.4px
360px  → 25.2px
390px  → 27.3px
414px  → 28.98px
480px  → 30px (máximo atingido)
```

---

## 📏 ESPAÇAMENTO (Spacing Scale)

```css
:root {
  /* Escala Fixa (base) */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 20px;
  
  /* Escala Fluida (responsiva) */
  --spacing-xl: clamp(20px, 5vw, 24px);      /* 20px → 24px */
  --spacing-2xl: clamp(24px, 6vw, 32px);     /* 24px → 32px */
}
```

### Uso na Prática
```css
.landing-main {
  padding: var(--spacing-xl) var(--spacing-md);
  /* Mobile (320px):  20px 16px */
  /* Desktop (480px): 24px 16px */
}
```

---

## 🔘 BORDER RADIUS

```css
:root {
  --radius-sm: 10px;    /* Botões pequenos */
  --radius-md: 20px;    /* Inputs, cards */
  --radius-lg: 24px;    /* Containers maiores */
}
```

---

## 💫 SOMBRAS

```css
:root {
  --shadow-sm: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  --shadow-hover: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  
  /* Sombras para inputs (login.css) */
  --shadow-input-light: 0px 2px 4px 0px #f0c1d1;
}
```

---

## ✨ TRANSIÇÕES

```css
:root {
  --transition-base: 0.3s ease-in-out;
}
```

### Exemplo de Uso
```css
.landing-button {
  transition: all var(--transition-base);
}

/* Afeta: background, color, box-shadow, transform */
```

---

## 🎯 COMO USAR EM NOVAS PÁGINAS

### Passo 1: Criar variables.css
```bash
cp index.css variables.css
# Remove estilos específicos, mantém :root apenas
```

### Passo 2: Importar em Todas as Páginas
```css
/* login.css */
@import 'variables.css';

/* Usar variáveis */
.login-button {
  background-color: var(--color-primary-dark);
  font-size: var(--font-size-button);
  padding: var(--spacing-lg) var(--spacing-md);
}
```

### Passo 3: Evitar Duplicação
```css
/* ❌ ERRADO - duplicar variáveis */
:root {
  --color-primary-dark: #591c31;
}

/* ✅ CORRETO - importar uma vez */
@import 'variables.css';
```

---

## 🔄 TEMAS DARK MODE

### Sistema Atual
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-gradient-top: #d4b5c8;
    --color-gradient-bottom: #8b4d63;
    /* Cores se atualizam automaticamente */
  }
}
```

### Estender para Login
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary-dark: #7d3a4f;       /* Mais claro */
    --color-primary-light: #f8e8f0;      /* Mais brilhante */
    --color-input-bg: #2a2a2a;           /* Fundo escuro */
  }
}
```

---

## 📱 RESPONSIVIDADE COM CLAMP

### Fórmula para Criar Escalas Fluidas

```
Para uma propriedade que vai de MIN até MAX entre MOBILE e DESKTOP:

clamp(MIN, (MOBILE-VALUE + (DESKTOP-VALUE - MOBILE-VALUE) * (vw - MOBILE-WIDTH) / (DESKTOP-WIDTH - MOBILE-WIDTH)), MAX)

Simplificado com vw:
clamp(MIN, X vw, MAX)

Onde X é calculado como:
X = (DESKTOP-VALUE - MOBILE-VALUE) / (DESKTOP-WIDTH - MOBILE-WIDTH) * 100

Exemplo:
--font-size-heading: clamp(28px, 7vw, 30px)
Vai de 28px (320px) até 30px (480px) = 2px diferença
2px / (480-320) = 2/160 = 0.0125 = 1.25% = aprox 7vw ajustado
```

### Escalas Pré-Calculadas
```css
/* 2px de diferença em 160px viewport */
--font-size-heading: clamp(28px, 7vw, 30px);

/* 2px de diferença em 160px viewport */
--font-size-button: clamp(22px, 5vw, 25px);

/* 4px de diferença em 160px viewport */
--spacing-xl: clamp(20px, 5vw, 24px);

/* 8px de diferença em 160px viewport */
--spacing-2xl: clamp(24px, 6vw, 32px);
```

---

## ♿ ACESSIBILIDADE

### Preferência de Movimento Reduzido
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Alto Contraste
```css
@media (prefers-contrast: more) {
  :root {
    --color-primary-dark: #3d0e20;       /* Mais escuro */
    --color-primary-light: #f8e8f0;      /* Mais brilhante */
  }
}
```

---

## 📝 Exemplo Completo: Novo Componente

### HTML
```html
<button class="card-button">Clique aqui</button>
```

### CSS (Usando Variables)
```css
.card-button {
  /* Tipografia */
  font-family: var(--font-family-base);
  font-size: var(--font-size-button);
  
  /* Espaçamento */
  padding: var(--spacing-lg) var(--spacing-md);
  
  /* Cores */
  background-color: var(--color-primary-dark);
  color: var(--color-primary-light);
  
  /* Visual */
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  
  /* Animação */
  transition: all var(--transition-base);
}

.card-button:hover {
  box-shadow: var(--shadow-hover);
}

/* ✅ Automático em dark mode! */
/* ✅ Automático em alto contraste! */
/* ✅ Automático em prefers-reduced-motion! */
```

---

## 🔗 Referência Rápida

| Propriedade | Variável | Valor |
|-------------|----------|-------|
| Cor Principal Escura | `--color-primary-dark` | #591c31 |
| Cor Principal Clara | `--color-primary-light` | #f0c1d1 |
| Font Body | `--font-family-base` | Segoe UI, ... |
| Font Tamanho Body | `--font-size-body` | 16px |
| Font Tamanho Heading | `--font-size-heading` | clamp(28px, 7vw, 30px) |
| Padding Pequeno | `--spacing-sm` | 12px |
| Padding Médio | `--spacing-md` | 16px |
| Border Radius Médio | `--radius-md` | 20px |
| Sombra Pequena | `--shadow-sm` | 0px 2px 4px... |
| Transição | `--transition-base` | 0.3s ease-in-out |

---

## 🚀 Migração para Design System

### Arquivo: variables.css
```css
/* ============================================================
   DESIGN SYSTEM - Variáveis CSS Globais
   ============================================================ */

:root {
  /* CORES */
  --color-primary-dark: #591c31;
  --color-primary-light: #f0c1d1;
  --color-accent: #a8617b;
  --color-text-light: #f2e4ee;
  --color-gradient-top: #ffd9e7;
  --color-gradient-bottom: #a8617b;
  --gradient-main: linear-gradient(180deg, var(--color-gradient-top) 0%, var(--color-gradient-bottom) 100%);

  /* TIPOGRAFIA */
  --font-family-base: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --font-size-body: 16px;
  --font-size-heading: clamp(28px, 7vw, 30px);
  --font-size-button: clamp(22px, 5vw, 25px);
  --line-height-base: 1.5;
  --line-height-heading: 1.3;

  /* ESPAÇAMENTO */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 20px;
  --spacing-xl: clamp(20px, 5vw, 24px);
  --spacing-2xl: clamp(24px, 6vw, 32px);

  /* BORDER RADIUS */
  --radius-sm: 10px;
  --radius-md: 20px;
  --radius-lg: 24px;

  /* SOMBRAS */
  --shadow-sm: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  --shadow-hover: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);

  /* TRANSIÇÕES */
  --transition-base: 0.3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: more) {
  :root {
    --color-primary-dark: #3d0e20;
    --color-primary-light: #f8e8f0;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-gradient-top: #d4b5c8;
    --color-gradient-bottom: #8b4d63;
  }
}
```

---

## ✅ Checklist para Uso

- [ ] Criar `variables.css`
- [ ] Importar `@import 'variables.css'` em todas as páginas
- [ ] Usar `var(--propriedade)` em vez de valores hardcoded
- [ ] Testar em 320px, 375px, 414px, 480px
- [ ] Validar dark mode
- [ ] Validar alto contraste
- [ ] Validar prefers-reduced-motion

---

**Design System v1.0**  
**Última atualização**: 2026-06-12  
**Status**: ✅ Pronto para Uso
