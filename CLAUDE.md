# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Portfólio pessoal de página única feito com React 19 + TypeScript + Vite + Tailwind CSS v4. Não há backend, roteamento nem testes automatizados.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento (Vite)
npm run build    # tsc -b (checagem de tipos) + vite build → dist/
npm run lint     # oxlint (configurado em .oxlintrc.json, não ESLint)
npm run preview  # serve o build de dist/
```

Não existe suíte de testes; a verificação é `npm run build` + `npm run lint` e conferência visual no navegador.

## Arquitetura

O conteúdo flui em três camadas:

- `src/data/` — todo o conteúdo do site como arrays tipados (habilidades, formação, projetos, redes sociais e o email de contato). Adicionar um projeto, curso ou habilidade é editar só o arquivo de dados correspondente, sem tocar no JSX.
- `src/sections/` — uma seção por bloco da página, compostas em ordem em `App.tsx`. Cada seção faz `.map()` sobre seus dados.
- `src/components/` — peças reutilizadas pelas seções (`Section`, `Card`, `Tags`/`Tag`, `SocialLink`, `WhatsAppModal`).

Os `id`s das seções (`sobre`, `habilits`, `forme`, `project`) são âncoras usadas pela navegação do rodapé e pelo botão "Ver projetos" do topo; mantenha-os em sincronia ao renomear.

Ícones ficam em `src/assets/icons` e são importados como módulos (`import icon from '../assets/icons/x.svg'`), não referenciados por caminho em `public/`.

## Estilo (Tailwind v4)

- Sem `tailwind.config.js`: o plugin é `@tailwindcss/vite` e os tokens de tema (`bg`, `card`, `accent`, `footer`, fonte Inter) ficam no bloco `@theme` de `src/index.css`. Use `bg-bg`, `bg-card`, `border-accent` etc. em vez de repetir os hex.
- Não escreva CSS próprio nem `@apply`; classes repetidas viram componente React.
- O visual foi migrado de um CSS antigo com fidelidade, o que explica alguns ajustes não óbvios:
  - `Card` usa `box-content` (o layout original dependia de `content-box`: largura 80% + padding).
  - `html` tem `line-height: normal` para anular o 1.5 do preflight.
  - O preflight zera tamanho/peso dos headings, então todo `h1`/`h2`/`h3` precisa de classes explícitas de tamanho e `font-bold`.
  - `Card` estiliza `h2` e `p` descendentes via variantes arbitrárias (`[&_h2]:…`, `[&_p]:…`).
- Breakpoints padrão do Tailwind, mobile-first (`sm`/`md`/`lg`).
- `hover:` no Tailwind v4 só se aplica em `@media (hover: hover)`; o Chrome headless reporta `hover: none`, então testes automatizados de hover precisam de navegador visível.

## Convenções

- Nomes de arquivos, componentes e variáveis em inglês; textos exibidos no site em português (pt-BR).
- Mensagens de commit em português.
