# ASSETS UTILIZADOS - Isabele Mariana Nails

## 📷 Imagens

### Logo Principal
| Nome | Tipo | Localização | Dimensões (Figma) | Status | Notas |
|------|------|-------------|------------------|--------|-------|
| Logo IM | PNG | `Assets/images/Logo/logo-isabele-mariana.png` | 239x167px | ⚠️ Não gerada | Inclui ícone de unhas + letras IM |

**Instruções para obter o asset**:
1. Acesse o Figma: [Link do Design](https://www.figma.com/design/paNgDJIeAvhDUOI0nY3J0Z/Sem-t%C3%ADtulo?node-id=1-12)
2. Selecione o node com ID: `1:12` (image 1)
3. Exporte como PNG (100% scale)
4. Salve em: `Assets/images/Logo/logo-isabele-mariana.png`

---

## 🎨 Cores (Variáveis CSS)

Todas as cores estão documentadas em [index.css](index.css) como variáveis CSS customizadas.

```css
--color-primary-dark: #591c31      /* Marrom escuro - Botão Login */
--color-primary-light: #f0c1d1     /* Rosa claro - Botão Registre-se */
--color-accent: #a8617b            /* Magenta - Gradiente inferior */
--color-text-light: #f2e4ee        /* Rosa muito claro - Tagline */
--color-gradient-top: #ffd9e7      /* Rosa claro - Gradiente superior */
--color-gradient-bottom: #a8617b   /* Magenta - Gradiente inferior */
```

---

## 🔤 Tipografia

### Font Family
- **Primária**: Segoe UI (sistema)
- **Fallbacks**: Tahoma, Geneva, Verdana, sans-serif

### Tamanhos
```css
--font-size-body: 16px         /* Corpo padrão */
--font-size-heading: 30px      /* Tagline */
--font-size-button: 25px       /* Botões */
```

### Pesos
- Regular: 400 (botões)
- Semibold: 600 (tagline)

---

## 📐 Ícones/Recursos Especiais

Nenhum ícone separado foi necessário nesta página.

O ícone de unhas está integrado na imagem do logo.

---

## 🎬 Animações/Transições

Nenhuma animação complexa foi necessária.

Transições simples implementadas em CSS:
- Hover dos botões: `0.3s ease-in-out`
- Transform: `translateY(-2px)`
- Sombra aumentada no hover

---

## 📦 Estrutura de Pastas Esperada

```
App Isabele Mariana Nails/
├── index.html                          ✅ Criado
├── Css/
│   └── index.css                       ✅ Criado
├── js/
│   └── index.js                        ✅ Criado
├── Assets/
│   └── images/
│       └── Logo/
│           ├── Icons/                  (existente)
│           └── logo-isabele-mariana.png   ⚠️ NECESSÁRIO
└── IMPLEMENTACAO.md                    ✅ Criado
```

---

## 🔄 Versões e Variações

### Logo
- **Versão**: 1.0 (única)
- **Variações**: Nenhuma para esta página
- **Sugestão**: Considere gerar variações em escala de cinza para modo dark

---

## 📝 Notas sobre Compressão

Para **produção**, recomenda-se:

### Imagens
```bash
# Comprimir PNG (usando pngquant ou similar)
pngquant --quality=65-80 logo-isabele-mariana.png

# Gerar WebP para navegadores modernos
cwebp -q 75 logo-isabele-mariana.png -o logo-isabele-mariana.webp
```

**HTML atualizado seria**:
```html
<picture>
  <source srcset="Assets/images/Logo/logo-isabele-mariana.webp" type="image/webp">
  <img src="Assets/images/Logo/logo-isabele-mariana.png" alt="...">
</picture>
```

### CSS
```bash
# Minificar CSS (usando cssnano, clean-css, etc)
npx cleancss -o index.min.css index.css
```

---

## ✅ Validação de Assets

**Checklist antes de publicar**:

- [ ] Logo PNG está em `Assets/images/Logo/logo-isabele-mariana.png`
- [ ] Imagem tem 239x167px (ou escala proporcional)
- [ ] Imagem está otimizada (< 50KB)
- [ ] Cores CSS correspondem ao Figma
- [ ] Fonte Segoe UI renderiza corretamente
- [ ] Botões têm dimensões mínimas de 44x44px
- [ ] Testado em 320px, 375px, 414px e 480px

---

## 🔗 Referências do Figma

| Elemento | Node ID | Tipo |
|----------|---------|------|
| Frame Principal | 1:2 | Frame |
| Botão Login | 1:7 | Rounded Rectangle |
| Botão Registre-se | 1:8 | Rounded Rectangle |
| Texto "Login" | 1:9 | Text |
| Texto "Registre-se" | 1:10 | Text |
| Tagline | 1:11 | Text |
| Logo | 1:12 | Image |

---

## 📋 Resumo

| Item | Total |
|------|-------|
| Imagens | 1 (faltando) |
| Cores Únicas | 7 (todas em CSS variables) |
| Fonts Distintas | 1 (Segoe UI) |
| Tamanhos de Font | 3 |
| Transições | 1 (0.3s) |

---

**Gerado**: 2026-06-12  
**Status**: ⚠️ Aguardando logo em PNG
