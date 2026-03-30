# 02 — Menos “quadradão”, bolinhas sem letras, referência ao ondulado

**Status:** em andamento (primeira leva no código: ícones nos orbs + divisores ondulados + cantos)  
**Origem:** WhatsApp (Pedro ↔ Luiza) — manter profissionalismo com detalhes orgânicos; bolinhas dos cards **sem iniciais**; inspirar-se em **ondas** / menos rigidez de grid.

---

## 1. Síntese por “persona” (agents do repo)

> **Nota:** `ui-designer.md` não está na pasta `.claude/agents/` deste repositório; usamos **visual-architect** e **ux-researcher** como referência de UI/UX. **nextjs-expert**, **nodejs-expert** e **webpack-expert** não alteram o escopo deste feedback (é majoritariamente front estático).

| Perspectiva | Implicação técnica |
|-------------|-------------------|
| **UX researcher** | Reduzir carga cognitiva: iniciais genéricas (“CD”, “ES”) exigem decodificação; ícones reconhecíveis (com título ao lado) melhoram escaneabilidade sem parecer “infantil” se forem discretos (stroke fino, paleta contida). |
| **Visual architect** | Quebrar monotonia retangular com **curvas de baixa amplitude** (ondas de seção, `border-radius` um pouco maiores, micro-assimetria leve em listas), sempre com tokens (`luiza.css`) para não “sair” da identidade. |
| **Next.js / perf** | Preferir SVG inline leve (divisor) e ícones já no bundle (`lucide-react`); evitar imagens de padrão pesadas até decisão de arte final (ex.: Seigaiha em tile — ver `01-ornamento-seigaiha.md`). |

---

## 2. Implementado nesta leva (código)

| Item | Onde |
|------|------|
| Orbs dos cards de serviço com **ícone Lucide por `slug`**, sem texto | `apps/web/lib/service-icons.tsx`; `page.tsx` (home grid); `servicos/page.tsx` |
| Divisor **ondulado** entre blocos areia → branco | `apps/web/components/ui/SectionWaveDivider.tsx`; home: após hero e após grade de serviços |
| Cards um pouco menos “caixa” | `rounded-[1.65rem]` nos `service-card-pro` da home e `/servicos` |
| Lista “Por que me escolher” com leve irregularidade de raio | `rounded-2xl rounded-br-md` nos itens |

**Ícones por slug (revisável com a cliente):**

- `clareamento` → Sparkles  
- `facetas-em-resina` → Layers  
- `extracao-de-sisos` → Scissors  
- `restauracoes` → Puzzle  
- `toxina-botulinica` → Syringe  
- `profilaxia` → BrushCleaning  
- `tratamento-periodontal` → HeartPulse  
- `agulhamento-a-seco` → Crosshair  
- `atendimento-de-urgencia` → Zap  

---

## 3. Backlog sugerido (próximas iterações)

- [ ] **Seigaiha / textura de ondas** no lugar ou como complemento do `LaceOrnament` — ver [01-ornamento-seigaiha.md](./01-ornamento-seigaiha.md).
- [ ] Revisar **`.lace-tile`** (grade de pontos): pode reforçar sensação “técnica / quadrada”; testar variante mais suave ou conviver só com ondas nas junções.
- [ ] **Hero:** cards flutuantes (“5 estrelas”, etc.) — avaliar se versão mais orgânica (só formas) atende sem perder legibilidade.
- [ ] Validar com Luiza se algum ícone **não comunica** o serviço; trocar por variante ou ícone custom SVG mínimo.

---

## 4. Critérios de aceite (feedback fechado)

- [ ] Cliente confirma que os orbs **sem letras** ainda parecem profissionais.
- [ ] Ondas entre seções são **sutis** (não competidoras com CTA).
- [ ] Nenhuma regressão de contraste (WCAG) em textos sobre `areia` / branco.
