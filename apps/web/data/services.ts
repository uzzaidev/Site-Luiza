export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  steps: string[];
  faqs: Array<{ question: string; answer: string }>;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'clareamento',
    title: 'Clareamento Dental',
    shortDescription: 'Técnica segura para recuperar luminosidade do sorriso.',
    fullDescription:
      'O clareamento dental melhora a cor dos dentes com planejamento individual, preservando a estrutura dental e buscando um resultado natural.',
    indications: [
      'Escurecimento natural dos dentes ao longo dos anos.',
      'Manchas causadas por café, chá, vinho ou cigarro.',
      'Pacientes que desejam melhorar estética sem desgaste dental.',
    ],
    steps: [
      'Avaliação clínica e orientação.',
      'Definição da técnica indicada para seu caso.',
      'Acompanhamento para estabilidade de cor.',
    ],
    faqs: [
      {
        question: 'Clareamento causa sensibilidade?',
        answer:
          'Pode ocorrer sensibilidade temporária, controlada com protocolo adequado e orientações personalizadas.',
      },
      {
        question: 'Quanto tempo dura o resultado?',
        answer:
          'A duração varia conforme os hábitos do paciente. Em geral, com cuidados corretos, o resultado permanece por meses a anos.',
      },
      {
        question: 'Todo mundo pode clarear os dentes?',
        answer:
          'A indicação depende da avaliação clínica. Em alguns casos, outros tratamentos podem ser mais adequados.',
      },
    ],
    featured: true,
  },
  {
    slug: 'facetas-em-resina',
    title: 'Facetas em Resina',
    shortDescription: 'Harmonia estética para forma, cor e proporção dental.',
    fullDescription:
      'As facetas em resina são lâminas estéticas aplicadas sobre os dentes para corrigir detalhes de forma, tamanho e cor de modo conservador.',
    indications: [
      'Dentes com pequenas fraturas ou desalinhamentos leves.',
      'Correções estéticas de formato e volume.',
      'Pacientes que buscam resultado imediato com técnica minimamente invasiva.',
    ],
    steps: [
      'Planejamento estético do sorriso.',
      'Modelagem e aplicação da resina composta.',
      'Acabamento final e orientações de manutenção.',
    ],
    faqs: [
      {
        question: 'As facetas ficam com aspecto artificial?',
        answer:
          'Quando bem planejadas, as facetas ficam naturais e proporcionais ao rosto e ao perfil do paciente.',
      },
      {
        question: 'Faceta em resina dura quanto tempo?',
        answer:
          'Com higiene e acompanhamento, a durabilidade costuma ser alta. Revisões periódicas ajudam a manter brilho e integridade.',
      },
      {
        question: 'Precisa desgastar muito o dente?',
        answer:
          'Na maioria dos casos, o desgaste é mínimo ou inexistente, dependendo do planejamento.',
      },
    ],
    featured: true,
  },
  {
    slug: 'extracao-de-sisos',
    title: 'Extração de Sisos',
    shortDescription: 'Procedimento planejado para aliviar dor e prevenir complicações.',
    fullDescription:
      'A extração de sisos é indicada quando há falta de espaço, dor recorrente ou risco para dentes vizinhos. O foco e realizar com segurança e boa recuperação.',
    indications: [
      'Dor, inflamação ou infecção recorrente.',
      'Dificuldade de higienização por posição do siso.',
      'Comprometimento de dentes vizinhos.',
    ],
    steps: [
      'Avaliação clínica e radiográfica.',
      'Planejamento da cirurgia com orientacoes pré-operatórias.',
      'Acompanhamento pós-operatório até a recuperação.',
    ],
    faqs: [
      {
        question: 'A cirurgia de siso é sempre complicada?',
        answer:
          'Nem sempre. A complexidade depende da posição do dente e é avaliada com antecedência.',
      },
      {
        question: 'Quanto tempo dura a recuperacao?',
        answer:
          'A fase inicial costuma levar alguns dias. O tempo varia de acordo com cada organismo e cuidado no pós-operatório.',
      },
      {
        question: 'Posso extrair todos os sisos de uma vez?',
        answer:
          'Isso é definido na avaliação. Em alguns casos é possível, em outros é melhor realizar por etapas.',
      },
    ],
  },
  {
    slug: 'restauracoes',
    title: 'Restaurações',
    shortDescription: 'Recuperação funcional e estética de dentes comprometidos.',
    fullDescription:
      'As restaurações devolvem forma, função e aparência natural aos dentes com materiais modernos e técnicas conservadoras.',
    indications: [
      'Cáries e perdas de estrutura dental.',
      'Fraturas pequenas e médias.',
      'Substituição de restaurações antigas.',
    ],
    steps: [
      'Diagnóstico da área afetada.',
      'Remoção do tecido comprometido e reconstrução.',
      'Ajustes oclusais e polimento final.',
    ],
    faqs: [
      {
        question: 'Restauração sempre fica aparente?',
        answer:
          'Não. Com materiais estéticos atuais, o resultado tende a ficar discreto e harmônico.',
      },
      {
        question: 'Quanto tempo dura uma restauracao?',
        answer:
          'A durabilidade depende do material, higiene e hábitos. Revisões periódicas são fundamentais.',
      },
      {
        question: 'Restauração dói?',
        answer:
          'O procedimento é realizado com controle de conforto, e a maioria dos pacientes relata boa experiência.',
      },
    ],
  },
  {
    slug: 'toxina-botulinica',
    title: 'Toxina Botulínica',
    shortDescription: 'Aplicação para harmonização facial e controle de bruxismo.',
    fullDescription:
      'A toxina botulínica pode ser utilizada em odontologia para equilibrar força muscular, suavizar linhas de expressão e auxiliar no controle de bruxismo.',
    indications: [
      'Bruxismo e apertamento dental.',
      'Dor muscular relacionada a hiperatividade mastigatória.',
      'Ajustes estéticos de harmonização facial.',
    ],
    steps: [
      'Avaliação anatômica e funcional.',
      'Aplicacao em pontos estratégicos.',
      'Retorno para acompanhamento do resultado.',
    ],
    faqs: [
      {
        question: 'A aplicação de toxina botulínica é segura?',
        answer:
          'Sim, quando realizada por profissional habilitada e com planejamento individual.',
      },
      {
        question: 'Em quanto tempo aparece o resultado?',
        answer:
          'Os efeitos iniciais costumam surgir em poucos dias, com estabilização nas semanas seguintes.',
      },
      {
        question: 'Precisa repetir o tratamento?',
        answer:
          'Sim, a duração é temporária. O intervalo de manutenção é definido conforme resposta clínica.',
      },
    ],
    featured: true,
  },
  {
    slug: 'profilaxia',
    title: 'Profilaxia',
    shortDescription: 'Limpeza profissional para prevenção e manutenção da saúde bucal.',
    fullDescription:
      'A profilaxia remove placa e manchas superficiais, ajudando na prevenção de cáries e doenças gengivais.',
    indications: [
      'Manutenção periódica da saúde bucal.',
      'Acúmulo de placa e pigmentação superficial.',
      'Pacientes em acompanhamento preventivo.',
    ],
    steps: [
      'Avaliação e orientação de higiene.',
      'Limpeza profissional com instrumentação adequada.',
      'Polimento e reforço de cuidados diários.',
    ],
    faqs: [
      {
        question: 'Com que frequência devo fazer profilaxia?',
        answer:
          'A periodicidade varia conforme necessidade clínica, geralmente semestral ou conforme orientação profissional.',
      },
      {
        question: 'Profilaxia substitui a escovação?',
        answer:
          'Nao. Ela complementa a higiene diária e potencializa a prevenção.',
      },
      {
        question: 'A limpeza dental e dolorosa?',
        answer:
          'Em geral é bem tolerada. Sensibilidades pontuais podem acontecer e são controladas durante o atendimento.',
      },
    ],
  },
  {
    slug: 'tratamento-periodontal',
    title: 'Tratamento Periodontal',
    shortDescription: 'Cuidado especializado para gengiva e estruturas de suporte dental.',
    fullDescription:
      'O tratamento periodontal atua no controle da inflamação gengival e na preservação do osso e tecidos que sustentam os dentes.',
    indications: [
      'Sangramento gengival frequente.',
      'Mau hálito persistente de causa periodontal.',
      'Inflamação ou retração gengival.',
    ],
    steps: [
      'Diagnóstico periodontal detalhado.',
      'Terapia para controle de biofilme e inflamação.',
      'Manutenção periódica para estabilidade.',
    ],
    faqs: [
      {
        question: 'Gengiva sangrando é normal?',
        answer:
          'Nao. Sangramento é sinal de alerta e precisa de avaliação para tratar a causa.',
      },
      {
        question: 'Doença periodontal tem cura?',
        answer:
          'Ela pode ser controlada com tratamento e manutenção adequada, evitando progressão.',
      },
      {
        question: 'Posso perder dentes por problema gengival?',
        answer:
          'Sem tratamento, sim. O acompanhamento periodontal reduz esse risco de forma importante.',
      },
    ],
  },
  {
    slug: 'agulhamento-a-seco',
    title: 'Agulhamento a Seco',
    shortDescription: 'Técnica complementar para alívio de tensão muscular orofacial.',
    fullDescription:
      'O agulhamento a seco pode auxiliar no manejo de dor e pontos gatilho musculares, especialmente em pacientes com tensão facial e desconforto funcional.',
    indications: [
      'Dor muscular em região de face e mastigação.',
      'Tensão associada a apertamento dental.',
      'Suporte complementar em casos de disfunção temporomandibular.',
    ],
    steps: [
      'Avaliação funcional da musculatura.',
      'Aplicação técnica em pontos indicados.',
      'Reavaliação e orientações de autocuidado.',
    ],
    faqs: [
      {
        question: 'Agulhamento a seco é o mesmo que acupuntura?',
        answer:
          'Nao. São técnicas diferentes, com indicações e fundamentos distintos.',
      },
      {
        question: 'O procedimento doi?',
        answer:
          'A sensação varia por pessoa, mas costuma ser breve e bem tolerada.',
      },
      {
        question: 'Quantas sessões são necessárias?',
        answer:
          'Depende da avaliação inicial e da resposta de cada paciente ao tratamento.',
      },
    ],
  },
  {
    slug: 'atendimento-de-urgencia',
    title: 'Atendimento de Urgência',
    shortDescription: 'Atendimento para dor aguda e situações que exigem resolução rápida.',
    fullDescription:
      'O atendimento de urgência odontológica busca estabilizar quadros de dor, infecção ou trauma para restaurar conforto e segurança do paciente.',
    indications: [
      'Dor dental intensa e repentina.',
      'Traumas dentários e fraturas.',
      'Inflamações agudas com necessidade de avaliação imediata.',
    ],
    steps: [
      'Contato rápido para triagem inicial.',
      'Atendimento clínico para controle da dor e do quadro agudo.',
      'Definição do plano definitivo de tratamento.',
    ],
    faqs: [
      {
        question: 'Quando devo procurar urgência odontológica?',
        answer:
          'Sempre que houver dor forte, trauma, sangramento persistente ou sinais de infecção.',
      },
      {
        question: 'A urgência resolve tudo em uma consulta?',
        answer:
          'A consulta de urgência estabiliza o quadro. Depois disso, o tratamento completo é planejado.',
      },
      {
        question: 'Posso falar direto pelo WhatsApp em caso de dor?',
        answer:
          'Sim. O contato inicial pelo WhatsApp ajuda na orientação e no encaixe do atendimento.',
      },
    ],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
