# 🎨 REFERÊNCIA VISUAL - Isabele Mariana Nails

## Layout da Página

```
┌─────────────────────────────────┐
│                                 │
│   📱 VIEWPORT: 375px x 874px    │
│                                 │
├─────────────────────────────────┤
│                                 │
│   Gradiente: #ffd9e7 → #a8617b │
│                                 │
├─────────────────────────────────┤
│                                 │
│         [   Logo IM   ]         │  ↑
│        (239x167px)              │  │ Espaço superior
│                                 │  ↓
├─────────────────────────────────┤
│                                 │
│   Criando Tendências &          │  ← Tagline
│   Realizando Sonhos             │     (30px, Semibold)
│   (centered, 291x80px)          │
│                                 │
├─────────────────────────────────┤
│                                 │
│     ┌───────────────────────┐   │
│     │      Login            │   │  ← Button (Primary)
│     │  (#591c31, #f0c1d1)   │   │     350x60px
│     │  Font: 25px, Segoe UI │   │
│     └───────────────────────┘   │
│                                 │
│     ┌───────────────────────┐   │
│     │   Registre-se         │   │  ← Button (Secondary)
│     │  (#f0c1d1, #591c31)   │   │     350x50px
│     │  Font: 25px, Segoe UI │   │
│     └───────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

---

## Variações de Tamanho (Breakpoints)

### Extra Small (320px - 375px)
```
Tagline: 28px (reduzido)
Button Font: 22px (reduzido)
Padding reduzido
```

### Small (376px - 480px)
```
Tagline: 30px (padrão)
Button Font: 25px (padrão)
Padding: 24px
```

### Medium+ (481px+)
```
max-width: 480px mantido
Container centralizado
```

---

## Estados dos Botões

### Estado Normal
```
Login:
  Fundo: #591c31 (marrom escuro)
  Texto: #f0c1d1 (rosa claro)
  Shadow: 0px 2px 4px rgba(0,0,0,0.25)

Registre-se:
  Fundo: #f0c1d1 (rosa claro)
  Texto: #591c31 (marrom escuro)
  Shadow: 0px 2px 4px rgba(0,0,0,0.25)
```

### Estado Hover
```
Ambos:
  Transform: translateY(-2px)  ← Sobe 2px
  Shadow: 0px 4px 8px rgba(0,0,0,0.3)  ← Sombra aumenta
  Transição: 0.3s ease-in-out
```

### Estado Ativo (Clicado)
```
Ambos:
  Transform: translateY(0)  ← Volta ao normal
  Shadow: 0px 2px 4px rgba(0,0,0,0.25)  ← Volta ao normal
```

### Estado Focus (Teclado)
```
Ambos:
  outline: 2px solid #f2e4ee
  outline-offset: 2px
  (Visível para navegação por teclado)
```

---

## Paleta de Cores Completa

```css
/* Cores Primárias */
#591c31   Dark Burgundy    ▼ (Botão Login - Fundo)
#f0c1d1   Light Pink       ▼ (Botão Registre-se - Fundo)
#a8617b   Mauve            ▼ (Gradiente base)
#ffd9e7   Very Light Pink  ▼ (Gradiente topo)
#f2e4ee   Very Light Mauve ▼ (Tagline text)
```

### Renderização de Cores
```
#591c31 ████████ (RGB: 89, 28, 49)
#f0c1d1 ████████ (RGB: 240, 193, 209)
#a8617b ████████ (RGB: 168, 97, 123)
#ffd9e7 ████████ (RGB: 255, 217, 231)
#f2e4ee ████████ (RGB: 242, 228, 238)
```

---

## Tipografia

```
Fonte: Segoe UI (System Font)
Fallback: Tahoma, Geneva, Verdana, sans-serif

┌─────────────────────┬──────────┬─────────┐
│ Elemento            │ Tamanho  │ Peso    │
├─────────────────────┼──────────┼─────────┤
│ Tagline             │ 30px     │ 600     │
│ Botão               │ 25px     │ 500     │
│ Body (padrão)       │ 16px     │ 400     │
└─────────────────────┴──────────┴─────────┘

Altura de Linha:
├─ Tagline: 1.3 (39px efetivo)
├─ Botão: 1.5 (37.5px efetivo)
└─ Body: 1.5 (24px efetivo)
```

---

## Espaçamento

```
Componentes:
├─ Logo: 239px × 167px
├─ Tagline: ~291px × 80px
├─ Botão Login: 350px × 60px (min-height: 44px)
├─ Botão Registre-se: 350px × 50px (min-height: 44px)

Gaps:
├─ Entre logo e tagline: 228px (layout automático)
├─ Entre tagline e botões: 143px (layout automático)
├─ Entre botões: 12px (--spacing-md)
├─ Padding horizontal: 26px (bordas)
└─ Padding vertical: 24px+ (variável)
```

---

## Sombras

```
Shadow Primary (--shadow-sm):
  0px 2px 4px 0px rgba(0, 0, 0, 0.25)
  
  Offset: (0px, 2px)
  Blur: 4px
  Spread: 0px
  Cor: Preto 25% opacidade

Shadow Hover:
  0px 4px 8px 0px rgba(0, 0, 0, 0.3)
  
  Offset: (0px, 4px)
  Blur: 8px
  Spread: 0px
  Cor: Preto 30% opacidade
```

---

## Border Radius

```
Logo: Sem border radius (imagem retangular)
Botões: 20px (border-radius: var(--radius-md))

Visualização:
   ╭─────────────────╮
   │                 │  ← Cantos arredondados 20px
   │   Botão Text    │
   │                 │
   ╰─────────────────╯
```

---

## Transições

```css
--transition-base: 0.3s ease-in-out

Propriedades Animadas no Hover:
├─ background-color: suave
├─ transform: suave
├─ box-shadow: suave
└─ Duração: 0.3s

Curva: ease-in-out
├─ Inicio: aceleração leve
├─ Meio: velocidade constante
└─ Fim: desaceleração leve
```

---

## Efeitos de Acessibilidade

### Preferência: Reduced Motion
```css
Ativa quando: prefers-reduced-motion: reduce

Mudanças:
├─ Desabilita transform (translateY)
├─ Desabilita todas as transições (0.01ms)
├─ Mantém visual, remove movimento
└─ UX: Não prejudica, apenas simplifica
```

### Preferência: High Contrast
```css
Ativa quando: prefers-contrast: more

Mudanças:
├─ --color-primary-dark: #3d0e20 (mais escuro)
├─ --color-primary-light: #f8e8f0 (mais claro)
└─ Resultado: Contraste aumentado para legibilidade
```

### Preferência: Dark Mode
```css
Ativa quando: prefers-color-scheme: dark

Mudanças:
├─ Gradiente: #d4b5c8 → #8b4d63 (tom escuro)
├─ Cores ajustadas mantendo legibilidade
└─ Background: Mais escuro e suportável
```

---

## Dimensões Finais

```
┌─────────────────────────────────┐
│ Container App                   │
│ max-width: 480px                │
│ min-height: 100vh               │
│ width: 100%                     │
├─────────────────────────────────┤
│ Compatível com:                 │
│ ├─ iPhone SE (375px)            │
│ ├─ iPhone 12 (390px)            │
│ ├─ Pixel 4/5 (414px)            │
│ ├─ Galaxy S20 (360px)           │
│ ├─ Nokia 3 (320px)              │
│ └─ Todos entre 320px - 480px    │
└─────────────────────────────────┘
```

---

## Fluxo de Interação

```
Usuário abre index.html
        ↓
Carrega HTML + CSS + JS
        ↓
Página renderiza com gradiente
        ↓
Logo exibido (lazy loaded)
        ↓
Tagline centralizada
        ↓
Dois botões (44px+ touch area)
        ↓
Usuário pode:
├─ Clicar Login → vai para login.html
├─ Clicar Registre-se → vai para registro.html
├─ Navegar com teclado → Focus visível
└─ Em mobile → Comportamento otimizado
```

---

## Performance

```
Métricas Esperadas (Lighthouse):
├─ Performance: 95+
├─ Accessibility: 95+
├─ Best Practices: 90+
├─ SEO: 90+
└─ Score Geral: 93+

Tamanhos:
├─ HTML: ~2 KB
├─ CSS: ~8 KB
├─ JS: ~2 KB
├─ Logo PNG: ~30-50 KB (estimado)
└─ Total: ~42-62 KB
```

---

**Referência Visual Completa**  
**Gerado**: 2026-06-12  
**Status**: ✅ Pronto para Uso
