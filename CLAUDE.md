# Contexto do Projeto: Motorista Seguro - LP

Este documento serve como a única fonte da verdade (Single Source of Truth) para a arquitetura, convenções de código e estrutura do projeto **Motorista Seguro - LP**. Siga estas diretrizes rigorosamente em todas as respostas e gerações de código.

---

## 🛠 Stack Tecnológica
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS Modules (`.module.css`) + CSS Variables nativas
- **Proibido:** Uso de frameworks utilitários de CSS (como Tailwind, UnoCSS ou Bootstrap) e bibliotecas de CSS-in-JS em runtime (como Styled Components).

---

## 📐 Diretrizes e Convenções de Código

### 1. Componentização e Estrutura
- Cada componente deve ser isolado em sua própria pasta contendo exatamente o arquivo estrutural (`.tsx`) e o arquivo de estilo específico (`.module.css`).
- **Exemplo:** `src/components/sections/Hero/Hero.tsx` e `src/components/sections/Hero/Hero.module.css`.

### 2. Regra de Composição de Componentes (Modularidade Rígida)
- **Proibido Componentes Compostos Diretos:** Nenhum elemento complexo de UI deve ser escrito diretamente dentro de uma seção ou layout. Componentes maiores (compostos) devem atuar estritamente como orquestradores, importando subcomponentes menores e isolados.
- **Exemplo Prático:** O `Header` (Layout) ou a seção `Hero` não devem conter a estrutura JSX crua e a estilização de um botão ou de um card em seus escopos. O botão deve ser criado isoladamente em `src/components/ui/Button/`, e então importado para dentro do `Header` ou `Hero`.
- **Regra de Estilo:** A margem ou o posicionamento do componente filho dentro do pai deve ser controlada pelo CSS do **componente pai**, garantindo que o componente filho permaneça 100% reutilizável e agnóstico ao contexto.

### 3. Uso Rígido do Design System (CSS Variables)
- **Regra de Ouro:** Nunca utilize valores fixos (*hardcoded*) de cores, fontes, tamanhos, *paddings*, *margins* ou *border-radius* nos arquivos `.module.css`. Tudo deve consumir as variáveis globais injetadas a partir de `src/styles/variables.css`.
- O projeto adota uma arquitetura de duas camadas para os Design Tokens no `:root`:
  - **Primitivos (Uso Restrito):** Valores brutos e escalonados. *Nunca use diretamente nos componentes.* Ex: `--color-govazul-500`, `--color-gray-600`, `--spacing-4`, `--radius-lg`.
  - **Semânticos / Aliases (Uso Obrigatório):** Variáveis que carregam a intenção do design. *Apenas estes devem ser mapeados nos componentes.* Ex: `--bg-page`, `--bg-card`, `--border-default`, `--fg-emphasis`, `--fg-default`, `--fg-muted`, `--fg-brand`, `--fg-white`.

> ❌ **Errado:** `color: var(--color-gray-600);` ou `padding: 16px;`
> 
>  **Certo:** `color: var(--fg-default);` ou `padding: var(--spacing-4);`

### 4. Diretrizes para Assets e Ícones (SVGs)
- Não utilizamos bibliotecas externas de ícones (como `lucide-react` ou `react-icons`) para manter o *bundle* leve.
- Todos os arquivos `.svg` brutos (ícones de marcas, ilustrações e logotipos) ficam centralizados em `public/images/icons/` e `public/images/logos/`.
- **Ícones Estáticos (Marcas/Logos):** Devem ser chamados usando o componente `Image` nativo do Next.js passando o caminho absoluto da pasta pública. Ex: `src="/images/icons/googleplay.svg"`.
- **Ícones Dinâmicos (Interativos):** Caso o ícone precise mudar de cor via CSS de acordo com o estado do componente (como um ícone de download), o código interno do SVG deve ser transformado em um componente React puro (usando `fill="currentColor"` ou `stroke="currentColor"`) e armazenado em `src/components/ui/` ou subpastas de ícones dedicadas.

---

## 📦 Estrutura Real de Pastas

```text
MOTORISTASEGURO-LP/
├── public/
│   ├── favicon_io/       # Favicons do projeto
│   └── images/           # Assets visuais estáticos e vetores
│       ├── icons/        # Arquivos brutos .svg (Apple.svg, dot.svg, download.svg, googleplay.svg, Playstore.svg)
│       └── logos/        # Logotipos institucionais (logo.svg)
├── src/
│   ├── app/              # Roteamento, layout raiz e estilos globais (globals.css, layout.tsx, page.tsx)
│   ├── components/
│   │   ├── layout/       # Componentes estruturais fixos (Header, Footer)
│   │   ├── sections/     # Seções da Landing Page (Hero, etc.)
│   │   └── ui/           # Elementos de interface atômicos e reutilizáveis (Button, Card, Badge)
│   ├── lib/              # Funções utilitárias, constantes e helpers
│   └── styles/           # Arquitetura global de CSS (reset.css, variables.css)