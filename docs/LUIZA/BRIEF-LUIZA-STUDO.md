# BRIEF COMPLETO — Site Dra. Luiza Stoduto
> Documento de planejamento estratégico para desenvolvimento do site utilizando o UzzBuilder Template Skeleton
> Gerado a partir da entrevista de reunião + Guia de Entrevista preenchido + análise de referências visuais

---

## ÍNDICE

1. [Resumo Executivo](#1-resumo-executivo)
2. [Perfil da Profissional](#2-perfil-da-profissional)
3. [Posicionamento e Identidade de Marca](#3-posicionamento-e-identidade-de-marca)
4. [Direção de Identidade Visual](#4-direção-de-identidade-visual)
5. [Regras de Compliance CRO](#5-regras-de-compliance-cro)
6. [Arquitetura do Site](#6-arquitetura-do-site)
7. [Mapeamento de Seções e Conteúdo](#7-mapeamento-de-seções-e-conteúdo)
8. [Serviços Detalhados](#8-serviços-detalhados)
9. [Assets Necessários](#9-assets-necessários)
10. [Configuração do Skeleton (site.config.ts)](#10-configuração-do-skeleton)
11. [Componentes do Skeleton a Utilizar](#11-componentes-do-skeleton-a-utilizar)
12. [Referências Visuais (Screenshots)](#12-referências-visuais)
13. [Checklist de Desenvolvimento](#13-checklist-de-desenvolvimento)
14. [Insights Estratégicos](#14-insights-estratégicos)

---

## 1. RESUMO EXECUTIVO

**Cliente:** Dra. Luiza Stoduto
**Tipo de Projeto:** Site institucional de dentista (profissional autônoma)
**Tecnologia:** UzzBuilder Skeleton → Next.js 15 + TypeScript
**Status da Profissional:** Recém-formada, início de carreira, construindo presença digital do zero
**Objetivo Principal:** Captar novos pacientes e estabelecer credibilidade digital, garantindo que o paciente chegue já sabendo quem ela é e o que oferece
**CTA Principal:** "Agendar Consulta" via WhatsApp
**Formato do Site:** Site com múltiplas seções (pode iniciar como single-page robusta)

### Contexto do Projeto (UzzBuilder)
Este é o **segundo projeto real** do UzzBuilder (o primeiro foi Luciano, professor de yoga). O objetivo é:
- Testar o Template Skeleton para o nicho de dentistas
- Validar se o processo acelera e qualifica o desenvolvimento
- Servir de base para templates futuros de saúde (dentistas, médicos, fisioterapeutas)

---

## 2. PERFIL DA PROFISSIONAL

| Campo | Informação |
|-------|-----------|
| **Nome completo** | Luiza Quirino Stoduto |
| **Nome no site/Instagram** | Dra. Luiza Stoduto |
| **Título profissional** | Cirurgiã-dentista \| UFRGS |
| **CRO** | CRO/RS 33802 |
| **Especialidade** | Clínico Geral |
| **Formação** | UFRGS (Universidade Federal do Rio Grande do Sul) |
| **WhatsApp/Telefone** | +55 51 9531-3066 |
| **Localização** | Medplex Santana, Porto Alegre - RS |
| **Tempo de formada** | Recém-formada (aprox. 1 semana na data da reunião) |
| **Atende** | Crianças, adultos e idosos |
| **Canais atuais** | Instagram + Indicação |
| **Anúncios pagos** | Nunca fez (interesse futuro em aprender) |
| **Agendamento atual** | WhatsApp +55 51 9531-3066 |
| **Google Maps** | Ainda sem presença (**criar urgente**) |
| **Instagram** | ✅ @luizastoduto |
| **LinkedIn** | ✅ Criado recentemente, não atualizado |
| **Facebook / YouTube / TikTok / Twitter** | ❌ Não utiliza nenhum |

### História e Propósito
> *"Eu sempre soube que eu queria ser da área da saúde, eu sempre gostei muito de conversar e lidar com as pessoas. Nunca me vi trabalhando atrás de um computador. Passei por vários cursos e decidi odonto por destino, mas foi uma escolha bem feliz."*

> *"Quando o paciente me dá um feedback, tipo 'meu Deus, tava com muita dor, muito obrigada', isso gera um sentimento muito bom. Satisfação de poder ajudar."*

**Narrativa para o site:** A Dra. Luiza é uma dentista que escolheu a profissão pelo amor genuíno em cuidar de pessoas. Sua maior satisfação é ver o paciente partir sem dor e com o sorriso restaurado. O cuidado não é só técnico — é humano.

---

## 3. POSICIONAMENTO E IDENTIDADE DE MARCA

### Slogan Principal
> **"Entre risadas e sorrisos"**

*Origem:* Ela já usa no Instagram. Reflete sua personalidade leve, bem-humorada, que adora rir, ao mesmo tempo que transforma sorrisos dos pacientes.

### Slogans Alternativos a Gerar
(Gerar 2-3 opções mantendo a vibe alegre/leve/sorriso)
- Sugestão 1: *"Sorrisos que contam histórias"*
- Sugestão 2: *"Leveza no cuidado, confiança no sorriso"*
- Sugestão 3: *"Onde o cuidado encontra o sorriso"*

### 3 Palavras que o Paciente Deve Sentir ao Ver o Site
1. **Conforto** — o ambiente não será pesado, não será de dor
2. **Leveza** — experiência tranquila, sem estresse
3. **Carinho / Afeto** — atendimento humanizado e pessoal

### Diferencial Competitivo (Da Própria Luiza)
> *"Ser transparente e explicar o que estou fazendo e o procedimento. Explico como funciona, como se dá a cárie, o que está acontecendo enquanto faço o dente da pessoa."*

**Em linguagem de copy:** A Dra. Luiza não apenas trata — ela **educa e acompanha** o paciente durante todo o processo. Você nunca fica no escuro sobre o que está acontecendo na sua boca.

### Personalidade da Clínica (Exercício "Se sua clínica fosse uma pessoa")
> *"Leve, aberta, iluminada, clara. Com detalhes que lembram a praia — todo mundo quando lembra da praia, lembra de relaxamento. Azul, renda, madeira clara."*

---

## 4. DIREÇÃO DE IDENTIDADE VISUAL

> **ATENÇÃO:** A Luiza ainda não tem identidade visual. O site será desenvolvido com uma proposta de identidade gerada durante o processo, para ela aprovar e depois formalizar no Canva.

### Paleta de Cores Sugerida

| Papel | Cor | Hex Sugerido | Justificativa |
|-------|-----|-------------|---------------|
| **Primária** | Azul claro (praia) | `#4A9EBF` ou `#5BA8C4` | Remetendo ao mar/praia |
| **Secundária** | Off-white / Areia | `#F8F5F0` | Leveza, clareza |
| **Acento** | Verde-água | `#7ECBBD` | Saúde, frescor |
| **Neutro claro** | Branco puro | `#FFFFFF` | Base limpa |
| **Texto principal** | Cinza escuro | `#2D2D2D` | Legibilidade |
| **Madeira clara** | Bege/Tan | `#C9A882` | Textura orgânica |

> **Alternativa rosé** (baseada na Nicole que foi referência): Se a Luiza se identificar mais com tons rosados, usar `#C8849A` como primária em vez do azul. Apresentar as duas opções.

### Tipografia Sugerida
- **Título principal:** Playfair Display (elegante, feminino, presença)
- **Subtítulos:** Lora ou Cormorant Garamond
- **Corpo de texto:** Inter ou DM Sans (leitura fácil)
- **Alternativa mais clean:** Plus Jakarta Sans para tudo

### Estilo Visual
- **Referência:** Minimal-Luxury (leve, mas premium)
- **Texturas:** Elementos sutis de renda/madeira clara como backgrounds ou divisores
- **Ícones:** Linha fina (outline), não preenchidos — leveza visual
- **Fotos:** Clínica (ambiente bonito do Medplex), fotos dela no consultório, fotos de antes/depois (se autorizado pelo CRO), fotos do Medplex
- **NÃO usar:** Imagens genéricas de banco de imagens de dentista. Fotos reais da Luiza são fundamentais.

---

## 5. REGRAS DE COMPLIANCE CRO

> **CRÍTICO — Restrições obrigatórias do Conselho Regional de Odontologia**

| Proibido | Alternativa Permitida |
|----------|----------------------|
| ❌ Mostrar tabela de preços | ✅ "Agende uma consulta para seu orçamento personalizado" |
| ❌ Consulta online | ✅ WhatsApp para agendamento presencial |
| ❌ Garantir resultados | ✅ Mostrar processo e cuidado |
| ❌ "Melhor dentista" / Superlativos | ✅ Diferenciais concretos |
| ❌ Fotos de pacientes sem autorização | ✅ Fotos próprias + ambiente |
| ❌ Procedimentos com valores | ✅ "Solicite avaliação" |

**Implicação no CTA:** O botão principal não pode ser "Orçamento grátis" nem "Consulta online". Usar:
- "Agendar Consulta"
- "Fale Comigo pelo WhatsApp"
- "Marque sua Avaliação"

---

## 6. ARQUITETURA DO SITE

### Decisão: Site ou Landing Page?
**Decisão:** Iniciar como **site single-page robusto** (estrutura de landing page scrollável) com seções bem definidas, mas preparado para expandir para múltiplas páginas futuramente.

**Justificativa:**
- Luiza está no início — menos conteúdo para gerenciar
- Landing page tem melhor conversão para captação inicial
- O skeleton permite expandir depois facilmente
- Referência (Nicole) usou landing page e ficou ótimo

### Estrutura de Navegação (Header)

```
[Logo — Dra. Luiza Stoduto]    Início | Sobre | Serviços | Como Funciona | Depoimentos | Localização    [Agendar Consulta →]
```

### Mapa de Seções (scroll order)

```
01. HERO / BANNER PRINCIPAL
02. SOBRE — Dra. Luiza
03. SERVIÇOS — Cards dos procedimentos
04. DIFERENCIAIS — Por que escolher ela
05. COMO FUNCIONA — Jornada do paciente (steps)
06. DEPOIMENTOS — Testimonials (Google Reviews)
07. LOCALIZAÇÃO — Medplex Santana + Mapa
08. CTA FINAL — Banner de conversão
09. FOOTER
```

---

## 7. MAPEAMENTO DE SEÇÕES E CONTEÚDO

### SEÇÃO 01 — HERO

**Objetivo:** Apresentação imediata, impacto visual, CTA acima da dobra

**Layout:** Texto à esquerda + Foto da Dra. Luiza à direita (ou centralizada)

| Elemento | Conteúdo Sugerido |
|----------|------------------|
| **Eyebrow** | `Dra. Luiza Stoduto • CRO 33802` |
| **H1** | `Entre risadas e sorrisos` |
| **Subtítulo** | `Odontologia humanizada no coração de Porto Alegre. Conforto, leveza e carinho em cada atendimento.` |
| **CTA Primário** | `Agendar Consulta` → WhatsApp |
| **CTA Secundário** | `Conheça os Serviços` → âncora |
| **Badge/Credencial** | `Medplex Santana, Porto Alegre` |

**Assets necessários:**
- Foto principal da Dra. Luiza (preferencialmente no consultório ou com branco/fundo neutro)
- Possível foto do consultório no Medplex como fundo suave

---

### SEÇÃO 02 — SOBRE

**Objetivo:** Humanizar, criar conexão, apresentar a história

**Layout:** Foto dela + texto biográfico (similar ao da Nicole - Screenshot_6)

| Elemento | Conteúdo |
|----------|---------|
| **Eyebrow** | `Conheça a Dra. Luiza` |
| **Título** | `Cuidado e dedicação para o seu sorriso` |
| **Texto bio** | Baseado na história dela (escolheu saúde pelo amor a pessoas, odonto por destino feliz, satisfação em tirar a dor e mexer com autoestima) |
| **Badges** | `✓ CRO 33802` `✓ Clínica no Medplex Santana` `✓ Atendimento Humanizado` |
| **CTA** | `Fale comigo` → WhatsApp |

**Copy sugerida:**
> *"Sou a Dra. Luiza Stoduto, dentista clínico geral formada pela UFRGS. Sempre soube que queria trabalhar com pessoas — ouvir, cuidar, transformar. Na odontologia encontrei não apenas uma profissão, mas uma forma de fazer diferença real no dia a dia dos meus pacientes. Aqui, você não vai apenas sentar na cadeira e esperar. Vou explicar cada passo do seu tratamento, porque acredito que um paciente informado se sente muito mais seguro e confortável."*

---

### SEÇÃO 03 — SERVIÇOS

**Objetivo:** Apresentar os procedimentos disponíveis, gerar interesse

**Layout:** Grid de cards com ícone + título + breve descrição (modelo: Screenshot_1)

| # | Serviço | Ícone | Descrição Curta | Status |
|---|---------|-------|----------------|--------|
| 1 | **Clareamento Dental** | ✨ | Dentes mais brancos com técnica segura e resultado natural | ✅ Disponível |
| 2 | **Facetas em Resina** | 💎 | Transforme o formato e cor do seu sorriso com durabilidade | ✅ Disponível |
| 3 | **Extração de Sisos** | 🦷 | Procedimento tranquilo com técnica minimamente invasiva | ✅ Disponível |
| 4 | **Restaurações** | 🔧 | Recuperação estética e funcional com materiais de qualidade | ✅ Disponível |
| 5 | **Toxina Botulínica** | ✦ | Harmonização facial e tratamento do bruxismo | ✅ **Disponível** (curso concluído) |
| 6 | **Profilaxia (Limpeza)** | 🧼 | Prevenção e saúde bucal em dia | ✅ Disponível |
| 7 | **Consulta e Avaliação** | 📋 | Diagnóstico completo e plano de tratamento personalizado | ✅ Disponível |

**CTA da seção:** `Agende sua avaliação →`

---

### SEÇÃO 04 — DIFERENCIAIS

**Objetivo:** Reforçar por que escolher a Dra. Luiza vs. concorrentes

**Layout:** Lista de diferenciais com ícone + foto dela ou do consultório ao lado (modelo: Screenshot_3)

| # | Diferencial | Descrição |
|---|------------|-----------|
| 1 | **Transparência Total** | Explico cada procedimento enquanto realizo. Você sempre sabe o que está acontecendo |
| 2 | **Atendimento Humanizado** | Cada paciente é único. Cuidado real, sem pressa |
| 3 | **Localização Premium** | Consultório no Medplex Santana — estrutura moderna com vista privilegiada |
| 4 | **Atende Todas as Idades** | Da criança ao idoso — família inteira bem-vinda |
| 5 | **Ambiente Acolhedor** | Um espaço leve, claro e confortável para que você se sinta em casa |

---

### SEÇÃO 05 — COMO FUNCIONA

**Objetivo:** Reduzir fricção/medo, mostrar que é simples marcar e ser atendido

**Layout:** Steps horizontais/verticais numerados (modelo: Screenshot_2)

| # | Etapa | Descrição |
|---|-------|-----------|
| 1 | **Agendamento** | Envie uma mensagem pelo WhatsApp — rápido e sem complicação |
| 2 | **Avaliação** | Consulta completa para entender suas necessidades |
| 3 | **Plano de Tratamento** | Apresento as opções de forma clara e transparente |
| 4 | **Tratamento** | Procedimento realizado com conforto e técnica |
| 5 | **Acompanhamento** | Suporte contínuo para manter seu sorriso saudável |

---

### SEÇÃO 06 — DEPOIMENTOS

**Objetivo:** Prova social, credibilidade, redução de objeções

**Layout:** Cards de depoimento com avatar, nome, tempo como paciente, estrelas, texto (modelo: Screenshot_4)

> **SITUAÇÃO:** Luiza está começando e ainda não tem pacientes reais para depoimentos.

**Estratégia de curto prazo:**
- Incluir depoimentos de colegas, professores da UFRGS, ou pessoas que ela atendeu durante a formação (com autorização)
- Ou deixar a seção com espaço reservado e adicionar conforme receber reviews do Google
- **Recomendação:** Criar perfil no Google Maps IMEDIATAMENTE e pedir avaliações aos primeiros pacientes

**Placeholder:** A seção pode ser temporariamente substituída por uma seção de credenciais/formação acadêmica até acumular depoimentos.

---

### SEÇÃO 07 — LOCALIZAÇÃO

**Objetivo:** Eliminar a barreira "onde fica?", facilitar visita

**Layout:** Split — informações de contato à esquerda + Mapa do Google à direita (modelo: Screenshot_5)

| Informação | Dado |
|-----------|------|
| **Local** | Medplex Santana |
| **Endereço** | R. Gomes Jardim, 201 — Santana, Porto Alegre - RS |
| **Bairro** | Santana, Porto Alegre - RS |
| **Telefone/WhatsApp** | +55 51 9531-3066 |
| **E-mail** | *(pendente — obter com Luiza)* |
| **Horário de Funcionamento** | Seg–Sex, horário comercial |
| **Instagram** | @luizastoduto |

**Destaque:** Mencionar o Medplex como diferencial — é um endereço de prestígio em Porto Alegre.

---

### SEÇÃO 08 — CTA FINAL (Banner de Conversão)

**Objetivo:** Última chance de converter antes do footer

**Layout:** Banner com cor de fundo (azul ou primária), texto centralizado, 2 botões

| Elemento | Conteúdo |
|----------|---------|
| **Título** | `Pronta para transformar seu sorriso?` |
| **Subtítulo** | `Agende agora sua consulta. O primeiro passo é mais fácil do que você imagina.` |
| **CTA 1** | `Agendar pelo WhatsApp` |
| **CTA 2** | `Ver Localização` |

---

### SEÇÃO 09 — FOOTER

| Elemento | Conteúdo |
|----------|---------|
| **Logo** | Dra. Luiza Stoduto |
| **Tagline** | "Entre risadas e sorrisos" |
| **Links rápidos** | Sobre, Serviços, Localização, Contato |
| **Serviços** | Lista dos principais |
| **Contato** | Endereço, WhatsApp, E-mail |
| **Redes Sociais** | Instagram, (LinkedIn futuro) |
| **Rodapé** | `© 2025 Dra. Luiza Stoduto • CRO 33802` + `Desenvolvido por UzzAI` |

---

## 8. SERVIÇOS DETALHADOS

### Carro-Chefe (todos disponíveis agora)
1. **Clareamento Dental** — Alta demanda, resultado visual rápido, bom para captação
2. **Facetas em Resina** — Dentística, área de preferência dela
3. **Extração de Sisos** — Gosta de fazer, alta demanda, renda inicial
4. **Toxina Botulínica** — ✅ **Curso já concluído, disponível agora**
   - Alta demanda, bom ticket, muito procurado especialmente no Sul do Brasil
   - Pode virar carro-chefe futuro (amiga dela em Caxias: é o principal serviço dela)

### Serviços de Base (Clínico Geral)
5. Restaurações / Obturações
6. Profilaxia (Limpeza dental)
7. Consulta e avaliação diagnóstica
8. Tratamento infantil

---

## 9. ASSETS NECESSÁRIOS

### Fotos (PRIORIDADE CRÍTICA)
> O sucesso visual do site depende de fotos reais e autênticas da Dra. Luiza

| Asset | Status | Prioridade |
|-------|--------|-----------|
| Foto profissional da Dra. Luiza (consultório ou neutro) | Pendente | 🔴 CRÍTICO |
| Foto do consultório no Medplex (ambiente) | Pendente | 🔴 CRÍTICO |
| Foto da vista/fachada do Medplex Santana | Pendente | 🟡 ALTO |
| Foto dela trabalhando (cadeira, atendendo) | Pendente | 🟡 ALTO |
| Foto de perfil para avatar (depoimentos/sobre) | Pendente | 🟡 ALTO |
| Fotos de antes/depois (só se autorizado pelo CRO) | Pendente | 🟢 MÉDIO |

**Ação imediata:** Combinar sessão de fotos no Medplex antes de desenvolver o site.

### Identidade Visual
| Asset | Status | Ação |
|-------|--------|------|
| Logo / Assinatura visual | ❌ Não existe | Criar usando Canva (será guiada pelo brief) |
| Paleta de cores definida | ❌ Não existe | Propor 2 opções neste documento |
| Tipografia | ❌ Não existe | Definir junto com cores |
| Manual de identidade | ❌ Não existe | Gerar documento como fizemos para UzzAI e Luciano |

### Textos / Copy
| Asset | Status |
|-------|--------|
| CRO número | ✅ 33802 |
| Slogan | ✅ "Entre risadas e sorrisos" |
| Endereço completo | ❌ Pendente (pedir à Luiza) |
| Número WhatsApp | ❌ Pendente |
| E-mail de contato | ❌ Pendente |
| Horários de atendimento | ❌ Pendente |
| Handle Instagram | ❌ Confirmar @luizastoduto |
| Bio completa | 🟡 Rascunho neste documento |

---

## 10. CONFIGURAÇÃO DO SKELETON

### site.config.ts — Template para Luiza

```typescript
// site.config.ts — Dra. Luiza Stoduto
export const siteConfig = {
  // === IDENTIDADE ===
  nome: "Dra. Luiza Stoduto",
  nomeCurto: "Luiza Stoduto",
  cro: "33802",
  especialidade: "Cirurgiã-dentista | UFRGS",
  slogan: "Entre risadas e sorrisos",
  cta: "Agendar pelo WhatsApp",

  // === CONTATO ===
  whatsapp: "5551953130660", // +55 51 9531-3066
  telefone: "+55 51 9531-3066",
  email: "",    // ❌ PENDENTE — obter com Luiza
  instagram: "@luizastoduto",

  // === LOCALIZAÇÃO ===
  local: "Medplex Santana",
  endereco: "R. Gomes Jardim, 201",
  bairro: "Santana",
  cidade: "Porto Alegre",
  estado: "RS",

  // === HORÁRIOS ===
  horarios: {
    semana: "Seg–Sex: 08:00–18:00", // horário comercial — confirmar hora exata se necessário
    sabado: "Fechado",
    domingo: "Fechado",
  },

  // === IDENTIDADE VISUAL ===
  cores: {
    primaria: "#4A9EBF",      // Azul praia (ou rosé se ela preferir)
    secundaria: "#F8F5F0",    // Off-white areia
    acento: "#7ECBBD",        // Verde-água
    fundo: "#FFFFFF",
    texto: "#2D2D2D",
    madeira: "#C9A882",       // Elemento textura
  },
  tipografia: {
    titulo: "Playfair Display",
    corpo: "Inter",
  },

  // === SEO ===
  seoTitle: "Dra. Luiza Stoduto | Dentista em Porto Alegre - Medplex Santana",
  seoDescription: "Atendimento odontológico humanizado em Porto Alegre. Clareamento, facetas, extrações e muito mais. CRO 33802. Agende sua consulta!",
  seoKeywords: [
    "dentista porto alegre",
    "dentista medplex santana",
    "clareamento dental porto alegre",
    "facetas resina porto alegre",
    "dentista santana porto alegre",
    "dra luiza stoduto",
  ],

  // === SERVIÇOS ===
  servicos: [
    {
      titulo: "Clareamento Dental",
      descricao: "Dentes mais brancos com técnica segura e resultado natural",
      destaque: true,
    },
    {
      titulo: "Facetas em Resina",
      descricao: "Transforme o formato e cor do seu sorriso com durabilidade",
      destaque: true,
    },
    {
      titulo: "Extração de Sisos",
      descricao: "Procedimento tranquilo com técnica minimamente invasiva",
      destaque: true,
    },
    {
      titulo: "Restaurações",
      descricao: "Recuperação estética e funcional com materiais de qualidade",
    },
    {
      titulo: "Profilaxia",
      descricao: "Limpeza profissional para manter seus dentes saudáveis",
    },
    {
      titulo: "Toxina Botulínica",
      descricao: "Harmonização facial e tratamento do bruxismo",
      destaque: true, // curso já concluído — disponível agora
    },
    {
      titulo: "Consulta e Avaliação",
      descricao: "Diagnóstico completo e plano de tratamento personalizado",
    },
  ],
}
```

---

## 11. COMPONENTES DO SKELETON A UTILIZAR

> Mapeamento com base nos componentes disponíveis no COMPONENTES-DISPONIVEIS.md

| Seção do Site | Componente Skeleton | Configuração |
|--------------|--------------------|-----------
| Header/Nav | `NavigationBar` | Logo + links âncora + CTA button |
| Hero | `HeroSection` | Foto + H1 + subtítulo + 2 CTAs |
| Sobre | `AboutSection` ou `SplitContent` | Foto esq + texto dir |
| Serviços | `ServicesGrid` | Grid 2x3 ou 2x4 de cards |
| Diferenciais | `FeaturesSection` | Lista com ícones + foto lateral |
| Como Funciona | `StepsSection` / `ProcessSection` | 5 steps horizontais |
| Depoimentos | `TestimonialsSection` | 3 cards com estrelas |
| Localização | `LocationSection` | Split info + mapa embeds |
| CTA Final | `CTABanner` | Full-width com cor de fundo |
| Footer | `Footer` | Multi-coluna com links |

### Componentes de UI de Suporte
- `Button` (primário WhatsApp verde + secundário outline)
- `Badge` (para "Em breve", "CRO 33802", "Medplex")
- `Card` (serviços, depoimentos)
- `Icon` (ícones outline para serviços)
- `SectionHeader` (eyebrow + H2 + subtítulo — padrão em todas seções)

---

## 12. REFERÊNCIAS VISUAIS

### Análise das Screenshots (Dra. Nicole Finger — site de referência)

**Screenshot 1 — Seção de Serviços:**
- Grid 4 colunas x 2 linhas (8 serviços)
- Cards brancos com borda suave, ícone circular rosé, título bold, descrição pequena
- Background levemente rosé claro
- Para Luiza: adaptar para paleta azul/branco, reduzir para 6-7 serviços

**Screenshot 2 — Como Funciona:**
- 5 steps horizontais numerados com círculos
- Linha conectando os círculos (passo a passo visual)
- Background branco, step ativo em cor sólida, outros em outline
- Para Luiza: replicar exatamente esta abordagem

**Screenshot 3 — Diferenciais:**
- Lista de 5 diferenciais à esquerda + foto grande à direita
- Ícones simples antes de cada diferencial
- Para Luiza: usar foto dela atendendo paciente ou no consultório

**Screenshot 4 — Depoimentos + Localização:**
- 3 cards de depoimentos com avatar circular colorido (letra inicial)
- Estrelas douradas, texto entre aspas, badge "Avaliação do Google"
- Para Luiza: Criar perfil Google My Business URGENTE para acumular reviews

**Screenshot 5 — Localização:**
- Split: endereço + contato à esquerda, mapa à direita
- Seção CTA de conversão final logo abaixo
- Para Luiza: Idêntico, trocar endereço para Medplex Santana

**Screenshot 6 — Sobre (Dra. Nicole):**
- Foto à direita, texto à esquerda
- Badges de credenciais embaixo do texto
- Para Luiza: estrutura idêntica

**Screenshot 7 — Footer:**
- 4 colunas: logo+tagline | links | serviços | contato
- Redes sociais com ícones
- Para Luiza: replicar estrutura

---

## 13. CHECKLIST DE DESENVOLVIMENTO

### Fase 0 — Pré-desenvolvimento (Responsabilidade da Luiza)
- [ ] Confirmar número WhatsApp para contato/agendamento
- [ ] Confirmar e-mail profissional
- [ ] Fornecer endereço completo do consultório (Medplex Santana)
- [ ] Confirmar horários de atendimento
- [ ] Confirmar handle do Instagram
- [ ] Sessão de fotos no consultório (foto profissional + ambiente)
- [ ] Criar perfil Google My Business / Google Maps

### Fase 1 — Identidade Visual
- [ ] Apresentar 2 opções de paleta (Azul Praia vs. Rosé Premium)
- [ ] Luiza escolher paleta preferida
- [ ] Definir tipografia final
- [ ] Gerar logo/assinatura visual no Canva
- [ ] Gerar manual de identidade visual básico (como UzzAI e Luciano)

### Fase 2 — Configuração do Skeleton
- [ ] Fork/clone do template-skeleton
- [ ] Preencher `site.config.ts` com dados completos
- [ ] Configurar design tokens (cores, tipografia)
- [ ] Adicionar assets (logo, fotos)

### Fase 3 — Desenvolvimento das Seções
- [ ] Header/Navegação com CTA
- [ ] Hero Section
- [ ] Sobre Section
- [ ] Serviços Section (grid de cards)
- [ ] Diferenciais Section
- [ ] Como Funciona Section (5 steps)
- [ ] Depoimentos Section (placeholder ou real)
- [ ] Localização Section + embed Google Maps
- [ ] CTA Banner Final
- [ ] Footer

### Fase 4 — SEO e Performance
- [ ] Configurar meta tags (title, description)
- [ ] Configurar Open Graph (redes sociais)
- [ ] Otimizar imagens (next/image, WebP)
- [ ] Configurar sitemap e robots.txt
- [ ] Testar Core Web Vitals
- [ ] Google Search Console

### Fase 5 — Mobile e Responsividade
- [ ] Testar hero em mobile
- [ ] Grid de serviços: 1 coluna no mobile
- [ ] Steps: vertical no mobile
- [ ] Footer: stack vertical no mobile
- [ ] Verificar CTAs (botão grande e clicável no touch)
- [ ] Testar WhatsApp link direto no mobile

### Fase 6 — Deploy
- [ ] Build de produção
- [ ] Deploy na Vercel (ou hosting escolhido)
- [ ] Configurar domínio (luizastoduto.com.br ou similar)
- [ ] HTTPS ativo
- [ ] Validação final cross-browser

### Fase 7 — Pós-Lançamento (Entregar para a Luiza)
- [ ] Guia básico de uso (como atualizar conteúdo)
- [ ] Instruções para adicionar depoimentos
- [ ] Conectar Google Analytics
- [ ] Conectar Google Search Console
- [ ] Criar/otimizar Google My Business

---

## 14. INSIGHTS ESTRATÉGICOS

### Por que o Site é Crítico para a Luiza Agora
1. **Ela está começando do zero** — O site estabelece credibilidade antes mesmo do primeiro paciente real
2. **Pacientes buscam no Google** — Sem site, ela não aparece para quem procura "dentista Santana Porto Alegre"
3. **O Instagram é volátil** — O site é propriedade dela, o Instagram não
4. **Medplex é um diferencial** — Usar o prestígio do endereço para se posicionar melhor
5. **O paciente chega preparado** — Quem visita o site antes chega sabendo quem é ela, já com contexto

### Oportunidades Identificadas na Reunião
1. **Google My Business urgente** — Criar ANTES do site ir ao ar para já ter reviews quando o site lançar
2. **Botox como carro-chefe futuro** — Quando o curso estiver concluído, criar uma seção dedicada com destaque
3. **Harmonização Facial** — Nicho de alta rentabilidade no Sul do Brasil. Planejar para o futuro
4. **WhatsApp automático (ZapAgent)** — Ela demora para responder mensagens. Implementar o ZapAgent (produto UzzAI) para automatizar o primeiro contato

### Aviso sobre Depoimentos
- Como está começando, não há depoimentos reais
- **Estratégia:** Abrir com seção de formação/credenciais no lugar dos testimonials
- Assim que tiver 3-5 pacientes satisfeitos, pedir reviews no Google
- Migrar para seção de depoimentos com reviews reais

### Escalabilidade do Site
O site foi planejado para crescer junto com a carreira da Luiza:
- **Agora:** Landing page completa, sem preços, foco em captação
- **6 meses:** Adicionar seção de botox quando concluir curso
- **1 ano:** Possivelmente adicionar blog (SEO) ou galeria de antes/depois
- **Futuro:** Se se especializar (harmonização, implantes), criar seção dedicada

### Diferencial do UzzBuilder para esse Nicho
- O nicho de saúde tem **altíssima demanda** e baixíssima oferta de developers especializados
- A maioria dos profissionais de saúde não tem background técnico — veem site como "mágica"
- O processo do UzzBuilder (entrevista → brief → skeleton → site) é altamente replicável
- Template de dentista pode ser adaptado para: fisioterapeutas, nutricionistas, psicólogos, médicos

---

## INFORMAÇÕES PENDENTES (CHECKLIST DE DADOS DA LUÍSA)

> Coletar antes de começar o desenvolvimento

```
✅ WhatsApp/Telefone: +55 51 9531-3066
✅ Título profissional: Cirurgiã-dentista | UFRGS
✅ CRO: CRO/RS 33802
✅ Slogan: "Entre risadas e sorrisos"
✅ Toxina Botulínica: DISPONÍVEL (curso já concluído)
✅ Instagram: @luizastoduto
✅ Endereço: R. Gomes Jardim, 201 — Santana, Porto Alegre
✅ Horários: Segunda a sexta, horário comercial
✅ Paleta: Azul Praia + Madeira Clara + Renda (definido pela própria Luiza)

□ E-mail profissional: ____________________________  ← ÚNICO DADO AINDA PENDENTE
□ Fotos profissionais: [ ] Agendadas [ ] Entregues
  (obs: ela mencionou na reunião que tem fotos a enviar)
```

---

*Documento gerado por UzzAI — UzzBuilder*
*Baseado em: Reunião com Dra. Luiza Stoduto + Guia de Entrevista Dentista + Screenshots de referência*
*Versão: 1.0 — Fevereiro 2025*
