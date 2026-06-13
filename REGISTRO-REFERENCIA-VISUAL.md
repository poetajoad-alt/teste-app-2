# 🎨 REFERÊNCIA VISUAL - Página de Cadastro

## 1. LAYOUT ESTRUTURAL

```
┌─ Background Gradiente #ffd9e7 → #a8617b ────────────────┐
│                                                            │
│  ┌─ Padding Responsivo (clamp) ──────────────────────┐  │
│  │                                                      │  │
│  │  Registre-se  ← Title #934761, 30px, Segoe UI    │  │
│  │                                                      │  │
│  │  ┌─ Card Branca #fcfcfc ───────────────────────┐  │  │
│  │  │  Padding: clamp(20px, 5vw, 32px)           │  │  │
│  │  │  Box-shadow: 0 1px 1px rgba(0,0,0,0.1)    │  │  │
│  │  │  Border-radius: 20px                       │  │  │
│  │  │                                              │  │  │
│  │  │  Nome                                       │  │  │
│  │  │  ┌──────────────────────────────────────┐  │  │  │
│  │  │  │ ← Seu nome completo            |  │  │  │
│  │  │  │   Border: 2px #f0c1d1 (rosa)      │  │  │  │
│  │  │  │   Focus: #934761, translateY(-2px)│  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  │                                              │  │  │
│  │  │  E-mail                                     │  │  │
│  │  │  ┌──────────────────────────────────────┐  │  │  │
│  │  │  │ ← seu@email.com                 |  │  │  │
│  │  │  │   Border: 1px #d2cec5 (cinza)      │  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  │                                              │  │  │
│  │  │  Celular                                    │  │  │
│  │  │  ┌──────────────────────────────────────┐  │  │  │
│  │  │  │ ← (11) 99999-9999               |  │  │  │
│  │  │  │   Border: 1px #d2cec5              │  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  │                                              │  │  │
│  │  │  ☑ Concorde com os Termos e Condições     │  │  │
│  │  │                                              │  │  │
│  │  │  ┌──────────────────────────────────────┐  │  │  │
│  │  │  │        Registre-se                  │  │  │  │
│  │  │  │     #934761 | #f0c1d1               │  │  │  │
│  │  │  │     Border-radius: 10px             │  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  │                                              │  │  │
│  │  │  ─────────── ou ───────────                 │  │  │
│  │  │                                              │  │  │
│  │  │  ┌──────────────────────────────────────┐  │  │  │
│  │  │  │ 🔵 Registre-se com o Google         │  │  │  │
│  │  │  │   #f9f8f6 background, #e0e0e0 border│  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  │                                              │  │  │
│  │  │  Já tem uma conta? Entre aqui               │  │  │
│  │  │                     ↳ Link #934761         │  │  │
│  │  │                                              │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 2. PALETE DE CORES

### Principais
```
███ #934761  ← Primary (Buttons, Headers, Focus states)
███ #f0c1d1  ← Primary Light (Button text, accents)
███ #6d1f3a  ← Primary Dark (Hover effect buttons)
```

### Backgrounds
```
███ #fcfcfc  ← Card background
███ #f9f8f6  ← Input background
███ #ffd9e7  ← Gradient top
███ #a8617b  ← Gradient bottom
```

### Borders & Text
```
███ #d2cec5  ← Input borders (padrão)
███ #e0e0e0  ← Button borders
███ #f0c1d1  ← Input border (primeira entrada)
███ #000000  ← Text color
███ #999999  ← Placeholder color
```

---

## 3. TIPOGRAFIA

### Hierarchy

```
┌─────────────────────────────────────────────────┐
│ REGISTRE-SE                                     │
│ Font: Segoe UI, 30px, weight 600               │
│ Color: #934761                                  │
│ Line-height: 1.3                               │
│ Margin-bottom: 16-32px                         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Nome                                            │
│ Font: Roboto, 16px, weight 500                 │
│ Color: #000000                                  │
│ Line-height: 1.5                               │
│ Margin-bottom: 8px                             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Seu nome completo                               │
│ Font: Segoe UI, 16px, weight 400               │
│ Color: #999999 (placeholder)                    │
│ Line-height: 1.5                               │
│ Padding: 12px 20px                             │
└─────────────────────────────────────────────────┘
```

---

## 4. COMPONENTES VISUAIS

### Input Campo (Normal)

**Estado Padrão**:
```
┌───────────────────────────────────┐
│ ← seu@email.com              |    │
│ Fundo: #f9f8f6                    │
│ Border: 1px #d2cec5              │
│ Border-radius: 20px              │
│ Altura: 40-44px                  │
│ Shadow: 0px 2px 4px rgba(...)   │
└───────────────────────────────────┘
```

**Estado Focus**:
```
┌───────────────────────────────────┐
│ ← texto do usuário          |    │
│ Fundo: #934761                    │
│ Cor Texto: #ffffff                │
│ Border: 1px #934761              │
│ Transform: translateY(-2px)       │
│ Shadow: 0px 4px 8px rgba(...)   │
└───────────────────────────────────┘
```

### Input Campo (Primeira Entrada - Nome)

**Estado Padrão**:
```
┌───────────────────────────────────┐
│ ← Seu nome completo         |    │
│ Fundo: #f9f8f6                    │
│ Border: 2px #f0c1d1 (ROSA!)      │
│ Border-radius: 20px              │
│ Shadow: 0px 0px 0px 2px #f0c1d1 │
└───────────────────────────────────┘
```

### Checkbox

**Não Marcado**:
```
☐ Concorde com os Termos e Condições
├─ Box: 21x21px
├─ Border: 1px #d2cec5
├─ Fundo: #f9f8f6
├─ Border-radius: 4px
└─ Gap do label: 12px
```

**Marcado**:
```
☑ Concorde com os Termos e Condições
├─ Box: 21x21px
├─ Border: 1px #934761
├─ Fundo: #934761
├─ Checkmark: SVG #f0c1d1
└─ Transform: (sem alteração)
```

**Focus**:
```
⦿ Concorde com os Termos e Condições
├─ Outline: 2px #934761
├─ Outline-offset: 2px
└─ Keyboard focused
```

### Botão Primário (Cadastro)

**Estado Padrão**:
```
┌─────────────────────────────┐
│     Registre-se             │
│ Fundo: #934761              │
│ Cor Texto: #f0c1d1          │
│ Border-radius: 10px         │
│ Altura: 44px+               │
│ Shadow: 0px 2px 2px rgba(...)│
│ Cursor: pointer             │
└─────────────────────────────┘
```

**Estado Hover**:
```
┌─────────────────────────────┐
│     Registre-se             │
│ Fundo: #6d1f3a (darker)    │
│ Transform: translateY(-2px)  │
│ Shadow: 0px 4px 8px rgba(...)│
└─────────────────────────────┘
```

**Estado Active**:
```
┌─────────────────────────────┐
│     Registre-se             │
│ Fundo: #934761              │
│ Transform: translateY(0)     │
│ Shadow: 0px 2px 2px rgba(...)│
└─────────────────────────────┘
```

### Botão Google

**Estado Padrão**:
```
┌────────────────────────────────────┐
│ 🔵 Registre-se com o Google       │
│ Fundo: #f9f8f6                     │
│ Cor Texto: #000000                 │
│ Border: 1px #e0e0e0               │
│ Gap ícone-texto: 12px             │
│ Altura: 44px+                     │
│ Border-radius: 10px                │
└────────────────────────────────────┘
```

**Estado Hover**:
```
┌────────────────────────────────────┐
│ 🔵 Registre-se com o Google       │
│ Fundo: #f5f5f5 (levemente mais)   │
│ Border: 1px #d0d0d0               │
│ Shadow: 0px 2px 4px rgba(0,0,0,0.1)│
└────────────────────────────────────┘
```

**Estado Active**:
```
┌────────────────────────────────────┐
│ 🔵 Registre-se com o Google       │
│ Fundo: #934761 (cor primária!)    │
│ Cor Texto: #ffffff                 │
│ Border: 1px #934761               │
│ Transform: translateY(0)           │
└────────────────────────────────────┘
```

---

## 5. DIVISOR "OU"

```
─────────────── ou ───────────────
└─ Linha: 1px #d2cec5, opacity 0.5
└─ Texto: 14px, #999999, peso 500
└─ Gap: 12px
```

---

## 6. FOOTER

```
Já tem uma conta? Entre aqui
├─ Font: 14px, #000000
├─ Link: #934761, font-weight 600
├─ Padding-top: 12-16px
└─ Border-top: 1px #e0e0e0
```

---

## 7. RESPONSIVIDADE

### Breakpoints (Mobile-First)

```
320px (Mínimo)
├─ Padding: 16px
├─ Gap: 16px
├─ Font-title: 28px
├─ Font-button: 16px
└─ Button width: 100%

375px (iPhone SE)
├─ Padding: 20px (calculado por clamp)
├─ Gap: 18px
├─ Font-title: 29.2px
├─ Font-button: 17.5px
└─ Responsividade fluida

414px (iPhone 12)
├─ Padding: 22px
├─ Gap: 19px
├─ Font-title: 29.8px
├─ Font-button: 18.75px
└─ Responsividade fluida

480px (Máximo)
├─ Padding: 24px
├─ Gap: 20px
├─ Font-title: 30px
├─ Font-button: 20px
└─ Max-width: atingido
```

### Cálculo clamp()

```
clamp(MIN, PREFERRED, MAX)

--font-size-title: clamp(28px, 7vw, 30px)
├─ 320px: 22.4px (limitado ao mínimo 28px)
├─ 360px: 25.2px
├─ 390px: 27.3px
├─ 414px: 28.98px
└─ 480px: 30px (máximo atingido)

--spacing-xl: clamp(20px, 5vw, 24px)
├─ 320px: 20px
├─ 360px: 18px + 2px extra
├─ 400px: 20px + 2px extra
└─ 480px: 24px
```

---

## 8. ESTADOS ESPECIAIS

### Dark Mode

```
Body Background: linear-gradient(180deg, #d4b5c8, #8b4d63)
Card Fundo: #2a2a2a (escuro)
Input Fundo: #3a3a3a
Input Border: #555
Texto: #ffffff
Primary: #934761 (preservado)
```

### High Contrast

```
Border-width: 2px (em vez de 1px)
Cores: Mais saturadas
Contrast-ratio: >7:1
```

### Reduced Motion

```
Transitions: 0.01ms (desabilitadas)
Animations: 0.01ms
Transforms: Apenas instantâneas se necessário
```

---

## 9. STATES VISUAIS

### Form Validation

**Campo Válido**:
```
✓ Sem feedback visual
  (aceito automaticamente)
```

**Campo com Erro**:
```
✗ Border: vermelho (#e74c3c recomendado)
  Mensagem: abaixo do campo
  Color: #e74c3c
  Font-size: 12px
```

**Campo Obrigatório Não Preenchido**:
```
! Destacado ao tentar submit
  Mensagem de erro aparece
```

---

## 10. ANIMAÇÕES

### Transição Padrão
```
Duration: 0.3s
Timing: ease-in-out
Properties: all (background, border, shadow, transform)
```

### Focus Transform
```
Hover: translateY(-2px) com sombra aumentada
Active: translateY(0) com sombra normal
```

### Checkbox Animation
```
Unchecked → Checked: Background fade + Checkmark appear
Duration: 0.3s
```

---

## 11. COMPARAÇÃO COM LOGIN

| Aspecto | Login | Cadastro |
|---------|-------|----------|
| Campos | 2 | 3 |
| Primeira entrada border | Rosa | Rosa ✓ |
| Checkbox | Não | Sim ✓ |
| Google button | Sim | Sim ✓ |
| Gradiente | Idêntico | Idêntico ✓ |
| Tipografia | Idêntica | Idêntica ✓ |
| Cores | Idênticas | Idênticas ✓ |

---

## 12. REFERÊNCIA RÁPIDA DE DIMENSÕES

```
┌─ App Container: 100% / max 480px
│
├─ Card padding: clamp(20px, 5vw, 32px)
├─ Form gap: clamp(16px, 4vw, 20px)
├─ Input height: 40-44px (min 44px)
├─ Input padding: 12px 20px
├─ Checkbox size: 21x21px
├─ Button height: 44px+
├─ Google icon: 20x20px
│
└─ Margens externas: clamp(16px, 5vw, 24px)
```

---

**Referência Visual v1.0**  
**Data**: 2026-06-12  
**Status**: ✅ Completa
