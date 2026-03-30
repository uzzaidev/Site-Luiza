# Feedbacks — Dra. Luiza Stoduto

Documentação técnica para traduzir o retorno da cliente em tarefas implementáveis no monorepo (`apps/web`).

## Como usar este diretório

- Cada arquivo `NN-titulo-curto.md` descreve **um pedido**, com contexto, impacto no código, opções de implementação e critérios de aceite.
- Atualize o **status** em cada arquivo (`pendente` | `em andamento` | `feito`) conforme o trabalho avançar.
- O índice abaixo é o backlog visível para design + dev.

## Índice

| # | Tema | Arquivo | Status |
|---|------|---------|--------|
| 01 | Trocar ornamento circular (hero e seções) por padrão Seigaiha | [01-ornamento-seigaiha.md](./01-ornamento-seigaiha.md) | em andamento (fase 1 na home) |
| 02 | Menos “quadradão”; orbs sem letras; ondulação | [02-menos-quadrado-orgânico.md](./02-menos-quadrado-orgânico.md) | em andamento |
| 03 | Marcos de foto A–F (cada foto um estilo para escolha) | [03-variantes-marcos-foto.md](./03-variantes-marcos-foto.md) | em revisão |

## Referências rápidas do projeto

- **Design system:** `apps/web/app/luiza.css` (`--areia`, `--azul-praia`, `--azul-profundo`, etc.).
- **Ornamento atual:** `apps/web/components/ui/LaceOrnament.tsx` (círculos concêntricos + raios + pontos).
- **Onde o ornamento aparece:** `apps/web/app/[locale]/page.tsx`, `sobre/page.tsx`, `servicos/page.tsx`, `servicos/[slug]/page.tsx`.

---

*Última organização: consolidar aqui novos feedbacks da Luiza em novos arquivos numerados.*

**Hero (home):** tratamento de foto com bloco de marca atrás — ver seção “Hero” em [03-variantes-marcos-foto.md](./03-variantes-marcos-foto.md) e classes `photo-hero-luiza*` em `apps/web/app/luiza.css`.
