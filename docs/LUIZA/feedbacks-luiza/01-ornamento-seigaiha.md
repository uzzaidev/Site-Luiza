# 01 — Ornamento: de círculo / “bússola” para padrão Seigaiha (ondas)

**Status:** em rollout gradual (Fase 1 ativa na home — seção tratamentos; ver `.pattern-seigaiha-subtle` e `public/images/patterns/seigaiha-tile.svg`)  
**Origem:** feedback da cliente (visual do hero e seções com elemento circular técnico).  
**Objetivo:** substituir o elemento decorativo atual por um fundo ou camada com padrão **Seigaiha** (青海波 — ondas do mar), mantendo leveza, baixa opacidade e boa leitura do texto.

---

## 1. O que existe hoje (baseline técnico)

### Componente

- **Arquivo:** `apps/web/components/ui/LaceOrnament.tsx`
- **Implementação:** SVG único (`viewBox 0 0 200 200`) com:
  - quatro círculos concêntricos em traço;
  - 16 raios curvos do centro para o anel externo;
  - 24 pontos no anel médio;
  - disco central (dois círculos preenchidos).
- **Cor:** `currentColor` + `text-[var(--azul-praia)]` (espessuras/opacidades no próprio SVG).

### Onde é usado

| Arquivo | Uso resumido |
|---------|----------------|
| `[locale]/page.tsx` | Hero (`size="lg"`, canto direito) + várias seções (`md` / `lg`, posicionamento absoluto) |
| `[locale]/sobre/page.tsx` | `md`, canto superior esquerdo |
| `[locale]/servicos/page.tsx` | `lg`, canto superior esquerdo |
| `[locale]/servicos/[slug]/page.tsx` | `lg`, canto superior direito |

Cada uso combina `pointer-events-none`, `absolute` e `opacity-*` para não competir com o conteúdo.

### Outro padrão relacionado (não confundir)

- **Classe** `.lace-tile` em `luiza.css`: grade de **pontos** (`radial-gradient`), usada em outros contextos — é independente do `LaceOrnament`.

---

## 2. Mudança desejada (produto / design)

- **De:** um único ornamento focal, geométrico, estilo “diagrama / bússola”.
- **Para:** textura de **ondas Seigaiha**, repetível (tile), com aparência tradicional mas integrada à paleta Luiza (areia + azuis da marca).
- **Restrições:**
  - manter **acessibilidade** (decorativo: `aria-hidden` ou equivalente);
  - **performance** (evitar PNG grande se der para vectorizar ou CSS/SVG inline pequeno);
  - **contraste** do texto do hero e demais seções não pode piorar.

---

## 3. Por que SVG ou CSS (explicação para stack Next.js + Tailwind)

O padrão Seigaiha é matematicamente regular: dá para expressar como **tile SVG** ou **camadas de `background-image`** (gradientes ou `data:image/svg+xml`). Vantagens:

| Critério | SVG tile / CSS pattern |
|----------|-------------------------|
| Nitidez | Escala com zoom sem pixelização |
| Peso | Sem download de bitmap pesado (se bem feito) |
| Manutenção | Troca de cor via tokens CSS (`var(--azul-praia)` etc.) |
| Performance | Renderização nativa do browser; tile pequeno + `repeat` |

**Alternativa:** tile PNG/WebP transparente repetido — útil se a cliente quiser traço **mais orgânico** e menos “geométrico perfeito”; custo: arquivo extra + eventual ajuste de `background-size`.

---

## 4. Opções de implementação (para o dev escolher)

### Opção A — Classe utilitária em CSS global (`luiza.css`)

- Adicionar algo como `.bg-seigaiha-subtle` com:
  - `background-color: var(--areia)` (ou transparente se o fundo da section já for areia);
  - `background-image`: combinação de gradientes radiais (exemplo genérico abaixo) **ou** URL SVG codificado;
  - `background-size` + `background-repeat: repeat`.
- **Prós:** rápido, sem novo componente.  
- **Contras:** menos controle fino por breakpoint sem media queries; ajuste de opacidade pode exigir overlays em camada extra.

*Nota:* exemplos genéricos da web costumam usar hex fixos (ex.: `#cedce0` / `#5da1b2`). **No projeto Luiza, mapear para tokens** (`--areia`, `--azul-praia`, `--azul-claro`) e opacidades em `rgba()` alinhadas ao que já se usa em `.lace-tile`.

### Opção B — Componente React `SeigaihaPattern` (ou evolução do `LaceOrnament`)

- `div` absolutamente posicionado com `inset-0` (ou área parcial) + estilo inline / `className` com `backgroundImage` de SVG (URL encoded ou import de SVG otimizado).
- **Prós:** props para `opacity`, `scale` (via `background-size`), `variant` (hero vs seção interna).  
- **Contras:** um arquivo a mais; necessidade de alinhar com todos os pontos de uso atuais do `LaceOrnament`.

### Opção C — Substituir só o hero; manter `LaceOrnament` no restante

- Útil se o feedback for **específico do primeiro bloco**.  
- Documentar explicitamente com a cliente para não deixar dois idiomas visuais misturados sem intenção.

**Recomendação de produto:** decidir com a Luiza se a troca é **global** (todas as ocorrências de `LaceOrnament`) ou **só hero** — isso altera o escopo do PR.

---

## 5. Integração com código atual (passos sugeridos)

1. **Escopo:** listar páginas afetadas (tabela na seção 1) e remover/substituir `<LaceOrnament ... />` conforme a decisão.
2. **Camada:** no hero, o padrão pode cobrir **toda a `<section>`** como pseudo-fundo (`::before` com opacidade) em vez de um único canto — aproxima o efeito de “textura infinita” do Seigaiha.
3. **Tokens:** usar `var(--areia)` como base e traços/fill em `rgba` derivados de `--azul-praia` / `--azul-claro` com opacidade baixa (~0.06–0.15), no mesmo espírito do ornamento atual (`opacity-30`–`55` nos wrappers).
4. **Dark mode:** se não existir tema escuro no site, ignorar; caso exista no futuro, isolar cores em variáveis.

---

## 6. Critérios de aceite

- [ ] Hero e/ou seções exibem padrão de ondas perceptível mas **não domina** título, subtítulo e CTAs.
- [ ] Nenhum impacto em **pointer events** ou **foco** de links/botões.
- [ ] **Lighthouse / a11y:** elemento puramente decorativo não gera ruído em leitores de tela.
- [ ] Visual consistente em **mobile e desktop** (tile não “pula” de forma estranha — testar `background-position` se necessário).
- [ ] Cores coerentes com **manual / `luiza.css`** (sem depender só de hex de terceiros).

---

## 7. Referência histórica (pesquisa de implementação)

Foram consideradas duas abordagens genéricas (CSS com gradientes radiais em tiling; e fundo com SVG em data-URL). Ambas são válidas; a escolha final deve priorizar **consistência com o design system Luiza** e o **escopo** (hero apenas vs site inteiro).

---

## 8. Checklist antes de fechar a tarefa

- [ ] Confirmado com a cliente: **só hero** vs **todas as seções com ornamento**.
- [ ] Removido ou mantido `LaceOrnament` documentado (evitar componente morto).
- [ ] Screenshots antes/depois anexados no PR ou neste doc.
