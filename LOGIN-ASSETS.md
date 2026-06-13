# ASSETS - Página Login

## 📷 Imagens/Ícones

| Nome | Tipo | Localização | Dimensões | Status | Descrição |
|------|------|-------------|-----------|--------|-----------|
| Google Icon | PNG/SVG | `Assets/images/Icons/google-icon.png` | 20x20px | ⚠️ FALTANDO | Ícone oficial do Google |

---

## 🎨 Cores (CSS Variables)

Todas definidas em [login.css](login.css):

```css
/* Cores Primárias */
--color-primary: #934761              /* Rosa-roxo - labels, títulos, primary button */
--color-primary-light: #f0c1d1        /* Rosa claro - texto botão, borda input */
--color-primary-dark: #591c31         /* Marrom escuro - texto, button google */
--color-accent: #a8617b               /* Magenta - gradiente */
--color-gradient-top: #ffd9e7         /* Rosa claro - topo gradiente */
--color-gradient-bottom: #a8617b      /* Magenta - base gradiente */

/* Cores de Input */
--color-input-bg: #f9f8f6             /* Bege claro - fundo inputs */
--color-input-border-light: #f0c1d1   /* Rosa claro - borda email input */
--color-input-border-dark: #d2cec5    /* Bege escuro - borda password input */
```

---

## 🔤 Tipografia

### Font Family
- **Primária**: Segoe UI (sistema)
- **Fallbacks**: Tahoma, Geneva, Verdana, sans-serif

### Tamanhos de Fonte
```
30px  → Título "Login" (Semibold)
25px  → Labels "Nome", "Senha" (Bold)
25px  → Botão "Login" (Semibold)
16px  → Inputs (Regular)
15px  → Botão Google (Regular)
14px  → Footer (Regular)
```

### Pesos
- 400: Regular (inputs, texto)
- 500: Medium (opcional)
- 600: Semibold (título, botão)
- 700: Bold (labels)

---

## 🎬 Ícones/SVG

### Ícone Google

**Alternativa 1: PNG (20x20px)**
```
Localização: Assets/images/Icons/google-icon.png
Tamanho: 20x20px
Formato: PNG com transparência
Fonte: https://www.google.com/intl/pt-BR/about/brand/
```

**Alternativa 2: SVG Inline (recomendado)**
```html
<svg class="login-google-icon" viewBox="0 0 24 24" width="20" height="20">
  <!-- SVG code -->
</svg>
```

**SVG do Google (exemplo)**:
```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
</svg>
```

---

## 📁 Estrutura de Pastas Necessária

```
App Isabele Mariana Nails/
├── index.html                          ✅
├── login.html                          ✅
├── css/
│   ├── index.css                       ✅
│   └── login.css                       ✅
├── js/
│   ├── index.js                        ✅
│   └── login.js                        ✅
├── Assets/
│   └── images/
│       ├── Logo/
│       │   ├── logo-isabele-mariana.png.png    ✅ (duplicado)
│       │   └── Icons/
│       └── Icons/
│           └── google-icon.png         ⚠️ NECESSÁRIO
├── LOGIN-IMPLEMENTACAO.md              ✅
├── LOGIN-REFERENCIA-VISUAL.md          ✅
└── ASSETS.md                           ✅
```

---

## 🔍 Como Obter os Assets

### 1. Ícone Google

**Opção A: Usar SVG inline**
- Mais rápido
- Sem requisição extra
- Recomendado ✅

**Opção B: PNG do Figma**
1. Abra o design no Figma (node-id: 6:78)
2. Clique em "Export"
3. Configure: PNG, 20x20px, 1x scale
4. Salve em: `Assets/images/Icons/google-icon.png`

**Opção C: Usar ícone online**
```html
<!-- Exemplo usando CDN -->
<img src="https://www.gstatic.com/images/branding/product/1x/gsa_20dp.png" 
     alt="Google" class="login-google-icon">
```

### 2. Verificar Logo Existente
```
Assets/images/Logo/logo-isabele-mariana.png.png
│
└─ Ⓘ Nota: Arquivo tem extensão dupla (.png.png)
   Pode causar problemas em alguns servidores
   Considere renomear para: logo-isabele-mariana.png
```

---

## 🖼️ Dimensões Esperadas

| Asset | Resolução | DPI | Formato |
|-------|-----------|-----|---------|
| Google Icon | 20x20px | 1x | PNG/SVG |
| Logo IM | 239x167px | 1x | PNG |

---

## 🎨 Cores em Diferentes Contextos

### Google Button
```
Fundo: #f9f8f6 (bege claro)
Ícone: Colorido (padrão Google)
Texto: #591c31 (marrom escuro)
Borda: #d2cec5 (bege escuro)
```

### Se Implementar em Dark Mode
```
Fundo: #3a3a3a (cinza escuro)
Ícone: Colorido (mantém cores)
Texto: #f0f0f0 (branco)
Borda: #5a5a5a (cinza médio)
```

---

## 📋 Checklist de Assets

- [ ] Ícone Google (20x20px) - PNG ou SVG
- [x] Logo IM em `Assets/images/Logo/`
- [x] Cores CSS em `login.css`
- [x] Tipografia Segoe UI (sistema)
- [ ] Testar em 320px, 375px, 414px, 480px
- [ ] Validar cores em navegadores diferentes
- [ ] Testar modo dark
- [ ] Testar com leitores de tela

---

## 🚀 Melhorias Opcionais

### 1. Adicionar Favicon
```html
<link rel="icon" type="image/png" href="Assets/images/Logo/favicon.png">
```

### 2. Adicionar Splash Screen
Para mobile PWA:
```html
<link rel="apple-touch-icon" href="Assets/images/Logo/apple-icon.png">
```

### 3. Adicionar Loading States
- Ícone de carregamento
- Spinner animado

### 4. Adicionar Erro/Sucesso Icons
- Checkmark ✓
- X vermelho ✗

---

## 📝 Notas de Produção

### Otimização de Imagens
```bash
# Comprimir PNG
pngquant --quality=65-80 google-icon.png

# Converter para WebP (navegadores modernos)
cwebp -q 75 google-icon.png -o google-icon.webp

# Usar picture element
<picture>
  <source srcset="google-icon.webp" type="image/webp">
  <img src="google-icon.png" alt="Google">
</picture>
```

### Performance
- ✅ Ícones como SVG (preferido)
- ✅ PNG pequenos (<5KB)
- ✅ Lazy loading implementado
- ✅ Cache de longa duração

### CDN
Considerar servir através de CDN para produção:
```
cdn.seudominio.com/assets/images/icons/google-icon.png
```

---

## 🔗 Referências

### Ícone Google Oficial
- Guia: https://developers.google.com/identity/branding-guidelines
- SVG: Google Material Icons
- PNG: Já disponível em www.gstatic.com

### Figma Export
- Node-id para ícone: 6:78
- Settings: PNG, 1x, transparent background

---

**Inventário de Assets**  
**Gerado**: 2026-06-12  
**Status**: ⚠️ 1 asset faltando (Google Icon)
