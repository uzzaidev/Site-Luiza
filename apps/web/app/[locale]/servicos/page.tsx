import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { services } from '@/data/services';
import { siteConfig } from '@/site.config';
import { getWhatsAppUrl } from '@/lib/contact';
import { LaceOrnament } from '@/components/ui/LaceOrnament';
import { ServiceOrbIcon } from '@/lib/service-icons';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Serviços odontológicos',
  description:
    'Conheça todos os serviços da Dra. Luiza Stoduto em Porto Alegre: urgência, periodontal, facetas, clareamento e muito mais.',
};

export default async function ServicosPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const whatsappUrl = getWhatsAppUrl('Olá, Dra. Luiza! Quero saber qual tratamento é ideal para mim.');

  return (
    <>
      <section className="relative overflow-hidden lace-tile bg-[var(--areia)] py-20">
        <LaceOrnament size="lg" className="pointer-events-none absolute -left-20 -top-12 opacity-45" />
        <div className="section-shell relative">
          <p className="section-eyebrow text-center">Todos os serviços</p>
          <h1 className="section-title mt-2 text-center text-5xl sm:text-6xl">Tratamentos com leveza e técnica</h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#41525b]">
            Cuidado completo para toda a família, da prevenção ao tratamento estético e funcional.
          </p>
        </div>
      </section>

      <section className="lazy-section bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Marco E: recorte “faixa” para caso clínico (raios contrastantes leves). */}
          <div className="photo-shell photo-shell--e relative min-h-[420px]">
            <Image
              src="/images/luiza/antes-depois.jpg"
              alt="Antes e depois de tratamento odontológico"
              width={3375}
              height={3375}
              loading="lazy"
              decoding="async"
              className="photo-crop h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div className="space-y-4 rounded-[1.6rem] border border-[#dbe7ee] bg-[var(--areia)] p-7">
            <p className="section-eyebrow">Resultado real</p>
            <h2 className="section-title text-4xl">Antes e depois com responsabilidade clínica</h2>
            <p className="text-sm leading-relaxed text-[#3f505a]">
              Cada caso é único e precisa de avaliação individual. O objetivo é entregar resultado funcional e estético
              sem promessas genéricas.
            </p>
            <p className="rounded-lg bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--madeira)]">
              Imagem autorizada pelo paciente · {siteConfig.identity.cro}
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--azul-praia)]"
            >
              Agendar avaliação
            </Link>
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white pb-20">
        <div className="section-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="service-card-pro rounded-[1.65rem] border border-[#d8e5ec] bg-[var(--areia)] p-6"
            >
              <span className="service-card-orb">
                <ServiceOrbIcon slug={service.slug} />
              </span>
              <h3 className="mt-4 font-[var(--font-display)] text-3xl text-[var(--azul-profundo)]">{service.title}</h3>
              <p className="mt-2 text-sm text-[#3e4f58]">{service.shortDescription}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#44555e]">{service.fullDescription}</p>
              <ul className="mt-4 space-y-2">
                {service.indications.slice(0, 2).map((item) => (
                  <li key={item} className="rounded-lg bg-white px-3 py-2 text-xs text-[#52616a]">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/servicos/${service.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
              >
                Ver página completa
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="lazy-section bg-[var(--azul-profundo)] py-20 text-white">
        <div className="section-shell">
          <p className="section-eyebrow !text-[#d8bf95] text-center">Como funciona</p>
          <h2 className="mt-2 text-center font-[var(--font-display)] text-4xl sm:text-5xl">Da avaliação ao acompanhamento</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {siteConfig.process.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-white/25 bg-white/10 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b8e3f1]">{index + 1}</p>
                <p className="mt-2 text-base font-semibold">{step.title}</p>
                <p className="mt-1 text-xs text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)]"
            >
              Quero uma avaliação
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

