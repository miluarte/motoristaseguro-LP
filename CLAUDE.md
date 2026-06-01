# Landing Page Gov — [Nome do Projeto]

## Stack
- Next.js 15 (App Router)
- TypeScript
- CSS Modules + CSS Variables (sem Tailwind)

## Convenções
- Cada componente tem sua própria pasta com .tsx e .module.css
- Variáveis de design ficam em src/styles/variables.css
- Nunca usar valores hardcoded de cor, fonte ou espaçamento
- Imagens ficam em public/images/ organizadas por contexto

## Design System — Camadas de variáveis

### Primitivas (não usar diretamente nos componentes)
Cores brutas da paleta: --color-govazul-500, --color-gray-200, etc.
Espaçamentos numéricos: --spacing-4, --radius-lg, etc.

### Semânticas / Aliases (usar nos componentes)
--bg-page, --bg-card          → fundos
--border-default              → bordas
--fg-emphasis, --fg-default, --fg-muted, --fg-brand, --fg-white → textos e ícones

### Regra
Componentes usam SEMPRE tokens semânticos.
Tokens primitivos só existem para alimentar os semânticos.
Exemplo correto:   color: var(--fg-default);
Exemplo errado:    color: var(--color-gray-600);

## Estrutura
src/app/             → páginas e layout raiz
src/components/
  layout/            → Header e Footer
  sections/          → seções da landing (Hero, About, Features, CTA...)
  ui/                → componentes reutilizáveis (Button, Card, Badge...)
src/styles/          → variables.css e reset.css
src/lib/             → utilitários e helpers
public/images/
  hero/              → imagens da seção hero
  icons/             → ícones SVG
  logos/             → logotipos

## Como adicionar uma nova seção
1. Criar pasta em src/components/sections/NomeSecao/
2. Criar NomeSecao.tsx e NomeSecao.module.css
3. Importar e adicionar na page.tsx
