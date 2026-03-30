# 03 — Variantes de marco em fotos (A–F)

**Objetivo:** reduzir sensação de “retângulo perfeito” com detalhes **sutis e profissionais**; cada letra é um estilo distinto para a equipe / Luiza escolher o favorito e depois unificar.

**Implementação:** classes em `apps/web/app/luiza.css` (`.photo-shell`, `.photo-shell--a` … `--f`) + classe `photo-crop` na tag `Image`.

**Borda:** **C** combina **2px** nos demais lados com **4px à esquerda** + glow (alinhado ao hero). **D, E e F** usam **2px** uniforme. **Hero** tem **3px** à esquerda sobre **1px** nos outros lados. **B** segue só o filete em gradiente.

## Mapa rápido (onde ver cada uma)

| Letra | Tratamento (resumo) | Onde ver no site |
|------|---------------------|------------------|
| **Hero** | Foto ~91% largura (sombra + raio grande) + **bloco orgânico atrás** (gradiente Luiza) + contorno **mais espesso à esquerda** (3px + glow leve `-6px`) para leitura orgânica. Classes: `photo-hero-luiza*`. | Home — primeiro bloco |
| **A** | Cantos assimétricos + `ornament-frame` (disponível no CSS; hoje sem uso no TSX). | — |
| **B** | Filete em gradiente (azul-claro → azul-praia → madeira suave) | Home — “Conheça a Dra. Luiza” |
| **C** | Micro-rotação (~0,7°); borda **mais espessa à esquerda** (4px + glow) como no hero; sem rotação se `prefers-reduced-motion` | Home — “Por que me escolher” |
| **D** | Raios alternados (um canto mais “aberto”), fundo areia | `/sobre` — foto jaleco |
| **E** | Recorte tipo faixa (raios contrastantes para caso antes/depois) | `/servicos` — imagem clínica |
| **F** | Base clara em gradiente + ênfase no arco **inferior** (fachada) | `/contato` — foto do prédio |

## Depois da escolha

1. Copiar a classe vencedora (ex.: `photo-shell--b`) para os outros `photo-shell--*` ou extrair valores para um único modificador.
2. Remover comentários `Marco X` nos TSX se quiser diff mais limpo.
3. Se **C** for escolhida globalmente, manter a regra de `prefers-reduced-motion` para acessibilidade.

**Status:** pronto para revisão visual.
