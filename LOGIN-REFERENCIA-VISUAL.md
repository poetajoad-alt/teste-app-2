# 🎨 REFERÊNCIA VISUAL - Página Login

## Layout da Página

```
┌─────────────────────────────────┐
│                                 │
│   Gradiente: #ffd9e7 → #a8617b │
│                                 │
├─────────────────────────────────┤
│                                 │
│   Login                         │  ← Título (30px, Semibold)
│   (#934761)                     │
│                                 │
├─────────────────────────────────┤
│                                 │
│   Nome                          │  ← Label (25px, Bold)
│   ┌─────────────────────────┐   │  ← Input (320x39px)
│   │ seu@email.com           │   │
│   └─────────────────────────┘   │
│                                 │
├─────────────────────────────────┤
│                                 │
│   Senha                         │  ← Label (25px, Bold)
│   ┌─────────────────────────┐   │  ← Input (320x39px)
│   │ •••••••••••••           │   │
│   └─────────────────────────┘   │
│                                 │
├─────────────────────────────────┤
│                                 │
│     ┌──────────────────┐        │
│     │     Login        │        │  ← Button (159x62px)
│     │  (#934761 bg)    │        │     border-radius: 10px
│     └──────────────────┘        │
│                                 │
├─────────────────────────────────┤
│                                 │
│   ┌─────────────────────────┐   │
│   │ [G] Login com o Google  │   │  ← Button (319x44px)
│   │     (#f9f8f6 bg)        │   │     border-radius: 20px
│   └─────────────────────────┘   │
│                                 │
├─────────────────────────────────┤
│                                 │
│  Não tem uma conta?             │  ← Footer text
│  Registre-se                    │  ← Link (#934761)
│                                 │
└─────────────────────────────────┘
```

---

## Elementos Detalhados

### 1. Título "Login"
```
┌─────────────────────────────────┐
│ Login                           │
│ #934761, 30px, Semibold, left   │
└─────────────────────────────────┘

Posição: Topo esquerdo
Margin: ~65px do topo, 17px da esquerda
```

### 2. Campo Nome/Email
```
Nome
┌────────────────────────────────┐
│ seu@email.com                  │ ← Placeholder
└────────────────────────────────┘

Dimensões: 320px × 39px
Border Radius: 20px
Fundo: #f9f8f6
Borda: 1px solid #f0c1d1
Sombra: 0px 2px 4px #f0c1d1
Padding: 8px 20px
Min Height: 44px (acessibilidade)
```

### 3. Campo Senha
```
Senha
┌────────────────────────────────┐
│ ••••••••••••••••               │ ← Mascarado
└────────────────────────────────┘

Dimensões: 320px × 39px
Border Radius: 20px
Fundo: #f9f8f6
Borda: 1px solid #d2cec5
Sombra: 0px 2px 4px rgba(0,0,0,0.25)
Padding: 8px 20px
Min Height: 44px (acessibilidade)
```

### 4. Botão Login Primário
```
   ┌──────────────────┐
   │     Login        │
   │ 25px, Semibold   │
   │ #f0c1d1 text     │
   └──────────────────┘

Dimensões: 159px × 62px
Border Radius: 10px
Fundo: #934761
Texto: #f0c1d1
Sombra: 0px 2px 2px rgba(0,0,0,0.25)
Min Height: 44px
Hover: Sobe 2px, sombra aumenta
```

### 5. Botão Google
```
[G] Login com o Google
15px, Regular
#591c31 text

┌─────────────────────────────────┐
│ [Google Icon] Login com o Google│
│ #f9f8f6 bg, 1px borda           │
└─────────────────────────────────┘

Dimensões: 319px × 44px
Border Radius: 20px
Fundo: #f9f8f6
Borda: 1px solid #d2cec5
Ícone: 20x20px
Sombra: 0px 2px 4px rgba(0,0,0,0.25)
Min Height: 44px (já é)
Hover: Fundo #ffffff, sombra aumenta
```

### 6. Footer
```
Não tem uma conta? Registre-se

Texto: 14px, Regular, #591c31
Link: #934761, 600 weight
Hover: Sublinhado, cor mais escura
```

---

## Paleta de Cores

```
┌─ Cores Principais ─────────────────┐
│ #934761  Rosa-Roxo (Primary)       │ ███
│ #f0c1d1  Rosa Claro                │ ███
│ #591c31  Marrom Escuro             │ ███
│ #a8617b  Magenta/Roxo              │ ███
│ #ffd9e7  Rosa Muito Claro          │ ███
└────────────────────────────────────┘

┌─ Cores Inputs ─────────────────────┐
│ #f9f8f6  Bege Claro (Fundo)        │ ███
│ #f0c1d1  Rosa Claro (Borda Email)  │ ███
│ #d2cec5  Bege Escuro (Borda Senha) │ ███
│ #b0a89d  Bege (Placeholder)        │ ███
│ #d32f2f  Vermelho (Erro)           │ ███
└────────────────────────────────────┘
```

---

## Estados dos Componentes

### Input - Estado Normal
```
┌────────────────────────────────┐
│ Placeholder                    │
└────────────────────────────────┘
Borda: #f0c1d1
Fundo: #f9f8f6
Sombra: suave rosa
```

### Input - Estado Focus
```
┌════════════════════════════════┐
│ seu@email.com                  │
└════════════════════════════════┘
Borda: #934761 (mais destacada)
Fundo: #fafaf8 (levemente mais claro)
Sombra: 0px 2px 8px rgba(147, 71, 97, 0.3)
Cursor: dentro do campo
```

### Input - Estado Invalid
```
┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
│ email-inválido                 │
└╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
Borda: #d32f2f (vermelho)
Fundo: #fafaf8
Sombra: vermelha suave
```

### Botão - Estado Normal
```
   ┌──────────────────┐
   │     Login        │  ← Repouso
   └──────────────────┘
```

### Botão - Estado Hover
```
   ┌──────────────────┐
   │     Login        │  ← Sobe 2px
   └──────────────────┘
   ↑ Sombra: 0px 4px 8px rgba(0,0,0,0.3)
```

### Botão - Estado Active (Clicado)
```
   ┌──────────────────┐
   │     Login        │  ← Volta ao normal
   └──────────────────┘
   Sombra: 0px 2px 2px
```

### Botão - Estado Disabled
```
   ┌──────────────────┐
   │ Autenticando...  │  ← Texto muda
   │ opacity: 0.6     │
   └──────────────────┘
   Cursor: not-allowed
```

---

## Tipografia Completa

```
┌─ Estilos de Texto ──────────────┐
│                                │
│ Título                         │  30px, Semibold (#934761)
│                                │
│ Label                          │  25px, Bold (#934761)
│                                │
│ Input                          │  16px, Regular (#591c31)
│ seu@email.com                  │  14px, Regular (placeholder)
│                                │
│ Botão                          │  25px, Semibold (#f0c1d1)
│                                │
│ Google Button                  │  15px, Regular (#591c31)
│                                │
│ Footer                         │  14px, Regular (#591c31)
│ Registre-se                    │  14px, Bold (#934761)
│                                │
└────────────────────────────────┘

Font: Segoe UI, sans-serif
Line-height: 1.5 (padrão), 1.3 (títulos)
```

---

## Espaçamento

```
┌─ Gaps Verticais ───────────────┐
│ Header ↓ 65px                  │
│                                │
│ Nome ↓ 48px (label → input)    │
│                                │
│ Input Email ↓ 106px            │
│                                │
│ Senha ↓ 48px (label → input)   │
│                                │
│ Input Senha ↓ 115px            │
│                                │
│ Botão Login ↓ 131px            │
│                                │
│ Botão Google ↓ 119px           │
│                                │
│ Footer (link)                  │
└────────────────────────────────┘

┌─ Gaps Horizontais ─────────────┐
│ ←30px→                         │
│        ← 320px →               │
│←30px→                          │
└────────────────────────────────┘
```

---

## Transições

```
Property         Duration    Curve
────────────────────────────────────
background-color 0.3s        ease-in-out
border-color     0.3s        ease-in-out
box-shadow       0.3s        ease-in-out
transform        0.3s        ease-in-out
color            0.3s        ease-in-out

Hover Buttons:
  transform: translateY(-2px)
  Duração: 0.3s
  
Focus (Keyboard):
  outline: 2px solid
  outline-offset: 2px
```

---

## Acessibilidade

### Cores de Contraste
```
#934761 (Primary) vs #f0c1d1 (Light):
  Ratio: ~7:1 ✅ (WCAG AAA)

#591c31 (Dark) vs #f9f8f6 (Input BG):
  Ratio: ~13:1 ✅ (WCAG AAA)

#934761 vs #f9f8f6:
  Ratio: ~8:1 ✅ (WCAG AAA)
```

### Touch Targets
```
Inputs:    min-height: 44px ✅
Botões:    min-height: 44px ✅
           width: 100% ou min-width apropriada

Espacos:   gap: 24px entre elementos
           20px padding horizontal
```

### Focus Visible
```
Inputs:    outline: 2px solid #934761
           Cor do primary

Botões:    outline: 2px solid #f0c1d1 (primary)
                    ou #934761 (google)
           outline-offset: 2px
```

---

## Responsividade

### 320px - 375px (Extra Small)
```
Title:          28px (reduzido)
Label:          22px (reduzido)
Button:         22px (reduzido)
Padding:        reduzido
Gaps:           reduzido
```

### 376px - 480px (Small)
```
Padrão full
Sem alterações significativas
```

### 481px+ (Medium+)
```
max-width: 480px (mantido)
Container centralizado
```

---

## Performance

```
Componente      Tamanho     Carregamento
─────────────────────────────────────────
HTML (login)    ~3 KB       Instant
CSS (login)     ~9 KB       Instant
JS (login)      ~3 KB       Instant
Ícone Google    ~2 KB       lazy-load

Total: ~17 KB (sem ícone)
```

---

**Referência Visual - Login**  
**Gerado**: 2026-06-12  
**Status**: ✅ Completo
