/**
 * schema.ts — Centraliza a geração de JSON-LD (Schema.org) para SEO.
 *
 * Referências:
 *   - https://schema.org/Dentist
 *   - https://developers.google.com/search/docs/appearance/structured-data
 */

import { siteConfig } from '@/site.config';
import type { Service } from '@/data/services';

const base = siteConfig.urls.production.replace(/\/$/, '');
const venue = siteConfig.venues[0];

// ─── Dentist (LocalBusiness) ───────────────────────────────────────────────
// Ativa Knowledge Panel lateral com endereço, telefone e horário.
export function buildDentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.identity.name,
    alternateName: siteConfig.identity.legalName,
    url: base,
    telephone: siteConfig.contact.phone.primary,
    email: siteConfig.contact.email.primary,
    image: `${base}${siteConfig.openGraphImagePath}`,
    logo: `${base}/images/luiza/logo-ls.jpg`,
    description: siteConfig.identity.description,
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, Cartão de crédito, Cartão de débito, Pix',
    medicalSpecialty: 'Dentistry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.street,
      addressLocality: venue.city,
      addressRegion: venue.state,
      postalCode: venue.zipCode,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -30.0277,
      longitude: -51.2087,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '17:00',
        closes: '22:00',
      },
    ],
    hasMap: venue.mapsOpenUrl,
    sameAs: [siteConfig.social.instagram].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone.primary,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
  };
}

// ─── WebSite + SearchAction ────────────────────────────────────────────────
// Ativa o campo de busca inline nos Sitelinks do Google (SiteLinksSearchBox).
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.identity.legalName,
    url: base,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${base}/servicos?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─── Person (Dra. Luiza) ──────────────────────────────────────────────────
// Associa a profissional ao site — base para Knowledge Panel da pessoa.
export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.identity.name,
    jobTitle: 'Cirurgiã-dentista',
    description:
      'Cirurgiã-dentista formada pela UFRGS, CRO/RS 33802. Atende no Medplex Santana, Porto Alegre. Especialidade em odontologia humanizada, clareamento, facetas, toxina botulínica e atendimento geral.',
    url: `${base}/sobre`,
    image: `${base}${siteConfig.openGraphImagePath}`,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidade Federal do Rio Grande do Sul (UFRGS)',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: siteConfig.identity.cro,
    },
    worksFor: {
      '@type': 'Dentist',
      name: siteConfig.identity.legalName,
      url: base,
    },
    sameAs: [siteConfig.social.instagram].filter(Boolean),
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────
// Ativa perguntas expansíveis direto nos resultados do Google.
export function buildFAQSchema(faqs: Service['faqs']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────
// Ativa trilha de navegação no snippet: site › Serviços › Nome do Serviço.
export function buildBreadcrumbSchema(
  items: Array<{ name: string; href: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${base}${item.href}`,
    })),
  };
}

// ─── ItemList (lista de serviços) ─────────────────────────────────────────
// Ativa carrossel/lista de itens na SERP para a página /servicos.
export function buildServiceListSchema(services: Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços odontológicos — Dra. Luiza Stoduto',
    description:
      'Lista completa de serviços odontológicos oferecidos pela Dra. Luiza Stoduto em Porto Alegre.',
    url: `${base}/servicos`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.shortDescription,
      url: `${base}/servicos/${service.slug}`,
    })),
  };
}

// ─── MedicalProcedure (página de serviço individual) ─────────────────────
// Marca cada serviço como procedimento médico/odontológico.
export function buildMedicalProcedureSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.fullDescription,
    url: `${base}/servicos/${service.slug}`,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Boca / Dentes',
    indication: {
      '@type': 'MedicalIndication',
      name: service.indications.join('; '),
    },
    performer: {
      '@type': 'Dentist',
      name: siteConfig.identity.name,
      url: base,
    },
  };
}
