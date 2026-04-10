/** Unidade física: endereço, mapa e foto de fachada (quando houver). */
export type SiteVenue = {
  id: 'medplex';
  title: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  mapEmbedUrl: string;
  mapsOpenUrl: string;
  directions: string[];
  facadeImage: { src: string; alt: string };
};

const venues: SiteVenue[] = [
  {
    id: 'medplex',
    title: 'Medplex Santana',
    street: 'Rua Gomes Jardim, 201',
    complement: 'Medplex Santana',
    neighborhood: 'Santana',
    city: 'Porto Alegre',
    state: 'RS',
    zipCode: '90620-130',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Medplex+Santana+Porto+Alegre+RS&output=embed',
    mapsOpenUrl: 'https://www.google.com/maps/search/?api=1&query=Medplex+Santana+Porto+Alegre+RS',
    directions: [
      'Acesso fácil para quem vem da região central e da zona norte.',
      'Há estacionamento no complexo Medplex.',
      'Ponto de referência: esquina da Rua Gomes Jardim com Av. Ipiranga.',
    ],
    facadeImage: {
      src: '/images/luiza/predio-medplex.webp',
      alt: 'Prédio do consultório no Medplex Santana',
    },
  },
];

export const siteConfig = {
  identity: {
    name: 'Dra. Luiza Stoduto',
    legalName: 'Stoduto Odontologia',
    cro: 'CRO/RS 33802',
    tagline: 'Entre risadas e sorrisos',
    description:
      'Odontologia humanizada em Porto Alegre com foco em clareza, cuidado e tratamentos completos para toda a família.',
  },

  urls: {
    production: 'https://stodutoodontologia.com.br',
    staging: '',
    basePath: '/',
  },

  /** Unidades de atendimento (mapa, endereço e foto por local). */
  venues,

  contact: {
    email: {
      primary: 'contato@stodutoodontologia.com.br',
      secondary: '',
    },
    phone: {
      primary: '+55 51 99531-3066',
      whatsapp: '5551995313066',
      whatsappMessage:
        'Olá, Dra. Luiza! Vim pelo site e gostaria de agendar uma avaliação odontológica.',
    },
    address: {
      hasPhysicalAddress: true,
      street: venues[0].street,
      complement: venues[0].complement,
      neighborhood: venues[0].neighborhood,
      city: venues[0].city,
      state: venues[0].state,
      zipCode: venues[0].zipCode,
      country: 'Brasil',
    },
    businessHours: {
      days: 'Segunda a Sexta',
      hours: '17h às 22h',
      timezone: 'America/Sao_Paulo',
    },
  },

  social: {
    instagram: 'https://instagram.com/luizastoduto',
    linkedin: '',
    facebook: '',
    youtube: '',
    tiktok: '',
    twitter: '',
    github: '',
  },

  navigation: {
    main: [
      { label: 'Início', href: '/' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Contato', href: '/contato' },
    ],
    cta: {
      text: 'Agendar Consulta',
      href: '/contato',
    },
    footer: {
      quickLinks: [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Contato', href: '/contato' },
      ],
    },
  },

  hero: {
    eyebrow: 'CRO/RS 33802 · Medplex Santana · Porto Alegre',
    title: 'Entre risadas e sorrisos',
    subtitle:
      'Odontologia humanizada com leveza, carinho e transparência em cada atendimento.',
    ctaPrimary: {
      text: 'Agendar pelo WhatsApp',
      href: '/contato',
    },
    ctaSecondary: {
      text: 'Conhecer Serviços',
      href: '/servicos',
    },
    badges: ['Formada pela UFRGS', 'Clínico Geral', 'Atende todas as idades'],
  },

  about: {
    preview:
      'Sou a Dra. Luiza Stoduto, formada pela UFRGS. Escolhi a odontologia pelo amor genuíno em cuidar de pessoas e oferecer atendimento sem susto, sem pressa e com explicação clara.',
    story: [
      'Sempre soube que queria trabalhar com pessoas. A odontologia entrou na minha vida como um encontro natural entre técnica, cuidado e proximidade.',
      'No consultório, explico cada passo do tratamento para que você entenda o que está acontecendo e se sinta segura em cada decisão.',
      'Meu foco é unir resultado clínico, conforto e acolhimento para que seu sorriso seja tratado com respeito e leveza.',
    ],
    pillars: [
      {
        title: 'Transparência',
        description: 'Cada procedimento é explicado com linguagem clara e simples.',
      },
      {
        title: 'Leveza',
        description: 'Atendimento acolhedor para reduzir medo e insegurança.',
      },
      {
        title: 'Cuidado',
        description: 'Plano individual para cada fase da sua saúde bucal.',
      },
    ],
  },

  process: [
    {
      title: 'Agendamento',
      description: 'Contato rápido pelo WhatsApp.',
    },
    {
      title: 'Avaliação',
      description: 'Diagnóstico completo e escuta ativa.',
    },
    {
      title: 'Plano',
      description: 'Tratamento claro, com etapas bem definidas.',
    },
    {
      title: 'Execução',
      description: 'Procedimentos com conforto e técnica.',
    },
    {
      title: 'Acompanhamento',
      description: 'Suporte contínuo para manutenção do resultado.',
    },
  ],

  credentials: [
    {
      title: 'UFRGS',
      description: 'Cirurgiã-dentista com formação universitária sólida.',
    },
    {
      title: 'CRO/RS 33802',
      description: 'Registro ativo no Conselho Regional de Odontologia.',
    },
    {
      title: 'Toxina Botulínica',
      description: 'Habilitada para harmonização facial e controle de bruxismo.',
    },
    {
      title: 'Consultório Medplex',
      description: 'Atendimento no Medplex Santana (Rua Gomes Jardim, Santana — Porto Alegre).',
    },
  ],

  /** Compatibilidade: primeiro mapa + direções do Medplex. Preferir `venues`. */
  location: {
    shortLabel: 'Consultório no Medplex Santana, Porto Alegre',
    mapEmbedUrl: venues[0].mapEmbedUrl,
    directions: venues[0].directions,
  },

  branding: {
    colors: {
      areia: '#F7F3EE',
      azulPraia: '#5BA8C4',
      azulProfundo: '#2E7DA3',
      azulClaro: '#A8D4E6',
      madeira: '#C4A882',
      verdeAgua: '#7EC8BE',
      texto: '#2D3436',
    },
  },
};

export type SiteConfig = typeof siteConfig;
