import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Clock3, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { featuredServices, services } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/contact';
import { ServiceOrbIcon } from '@/lib/service-icons';
import { LaceOrnament } from '@/components/ui/LaceOrnament';
import { SectionWaveDivider } from '@/components/ui/SectionWaveDivider';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <section className="hero-seigaiha relative overflow-hidden pt-14 pb-0">
        <div className="section-shell relative z-10 grid items-center gap-10 pb-14 lg:grid-cols-2 lg:gap-14 lg:pb-16">
          <div className="fade-up space-y-6">
            <p className="section-eyebrow">{siteConfig.hero.eyebrow}</p>
            <h1 className="section-title text-5xl sm:text-6xl lg:text-7xl">{siteConfig.hero.title}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#3f505a]">{siteConfig.hero.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--azul-praia)]"
              >
                {siteConfig.hero.ctaPrimary.text}
              </Link>
              <Link
                href={siteConfig.hero.ctaSecondary.href}
                className="cta-button inline-flex items-center rounded-full border border-[#9bc6d9] bg-white px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)] transition hover:border-[var(--azul-profundo)] hover:bg-[#f2f8fc]"
              >
                {siteConfig.hero.ctaSecondary.text}
              </Link>
            </div>

            <ul className="flex flex-wrap gap-2 pt-2">
              {siteConfig.hero.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-[#c8dde8] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--azul-profundo)]"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="photo-hero-luiza fade-up mx-auto w-full max-w-[520px]">
            {/* Forma tipo “card” atrás (paleta Luiza) + foto grande arredondada por cima. */}
            <span className="photo-hero-luiza-blob" aria-hidden />
            <div className="photo-hero-luiza-frame">
              <Image
                src="/images/luiza/luiza_jaleco_atualizado_hero2.jpeg"
                alt="Dra. Luiza Stoduto no consultório"
                width={1365}
                height={2048}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="hero-float-card float-one right-[-2.3rem] top-[4.2rem]">
              <span className="hero-float-title">5 estrelas</span>
              <span className="hero-float-text">Avaliacao de pacientes</span>
            </div>
            <div className="hero-float-card float-two left-[-2rem] top-[17rem]">
              <span className="hero-float-title">100% seguro</span>
              <span className="hero-float-text">Biosseguranca total</span>
            </div>
            <div className="hero-loc-pill absolute -bottom-4 left-4 rounded-xl border border-[#cce1ec] bg-white px-4 py-2 text-sm font-medium text-[#45606d] shadow-lg">
              Porto Alegre · Medplex Santana
            </div>
          </div>
        </div>
        <SectionWaveDivider accentClass="text-white" className="relative z-10" />
      </section>

      <section className="lazy-section bg-white py-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-[500px]">
            <LaceOrnament size="md" className="pointer-events-none absolute -left-8 -top-8 opacity-50" />
            {/* Marco B: filete em gradiente gel / madeira suave. */}
            <div className="photo-shell photo-shell--b relative">
              <Image
                src="/images/luiza/luiza_profissional_atualizada.jpeg"
                alt="Dra. Luiza em retrato profissional"
                width={3456}
                height={5184}
                loading="lazy"
                decoding="async"
                className="photo-crop h-[540px] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5">
            <p className="section-eyebrow">Conheça a Dra. Luiza</p>
            <h2 className="section-title text-4xl sm:text-5xl">Cuidado que vai além do sorriso</h2>
            <p className="text-base leading-relaxed text-[#3f505a]">{siteConfig.about.preview}</p>
            <ul className="grid gap-2 text-sm text-[#3f505a] sm:grid-cols-2">
              <li className="rounded-xl bg-[var(--areia)] px-4 py-3">CRO/RS 33802</li>
              <li className="rounded-xl bg-[var(--areia)] px-4 py-3">Formada pela UFRGS</li>
              <li className="rounded-xl bg-[var(--areia)] px-4 py-3">Atendimento humanizado</li>
              <li className="rounded-xl bg-[var(--areia)] px-4 py-3">Odontologia para todas as idades</li>
            </ul>
            <Link
              href="/sobre"
              className="cta-button inline-flex items-center rounded-full border border-[#9bc6d9] px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)] transition hover:bg-[#f2f8fc]"
            >
              Conhecer minha história
            </Link>
          </div>
        </div>
      </section>

      <section className="lazy-section relative pattern-seigaiha-subtle pt-20 pb-0">
        <div className="section-shell pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">O que ofereço</p>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl">Tratamentos para toda a família</h2>
            <p className="mt-4 text-[#43545d]">
              Do cuidado preventivo a procedimentos estéticos e funcionais, com plano individual para cada paciente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="service-card-pro rounded-[1.65rem] border border-[#d8e5ec] bg-white p-6 shadow-[0_8px_24px_rgba(46,125,163,0.08)]"
              >
                <span className="service-card-orb">
                  <ServiceOrbIcon slug={service.slug} />
                </span>
                <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--azul-profundo)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#41525b]">{service.shortDescription}</p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
                >
                  Ver detalhes
                </Link>
              </article>
            ))}
          </div>
        </div>
        <SectionWaveDivider accentClass="text-white" />
      </section>

      <section className="lazy-section bg-white py-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="section-eyebrow">Por que me escolher</p>
            <h2 className="section-title text-4xl sm:text-5xl">Uma dentista que explica enquanto cuida</h2>
            <ul className="space-y-3">
              {[
                'Transparência total durante cada procedimento.',
                'Atendimento humanizado, sem pressa e com escuta real.',
                'Atendimento no Medplex Santana, em Porto Alegre.',
                'Atendimento para crianças, adultos e idosos.',
                'Ambiente leve e acolhedor para quem tem medo de dentista.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl rounded-br-md bg-[var(--areia)] px-4 py-3 text-sm text-[#3f505a]"
                >
                  <ShieldCheck className="mt-0.5 shrink-0 text-[var(--azul-profundo)]" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--azul-praia)]"
            >
              Agendar minha consulta
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            {/* Marco C: micro-inclinação (~0,7°) — desativa com prefers-reduced-motion. */}
            <div className="photo-shell photo-shell--c relative">
              <Image
                src="/images/luiza/luiza-atendendo.jpg"
                alt="Dra. Luiza atendendo paciente"
                width={3456}
                height={5184}
                loading="lazy"
                decoding="async"
                className="photo-crop h-[560px] w-full object-cover"
              />
            </div>
            <LaceOrnament size="md" className="pointer-events-none absolute -bottom-10 -right-10 opacity-35" />
          </div>
        </div>
      </section>

      <section className="lazy-section relative overflow-hidden bg-[var(--azul-profundo)] py-20 text-white">
        <LaceOrnament size="lg" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow !text-[#d8bf95]">Como funciona</p>
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl">Da mensagem ao sorriso</h2>
            <p className="mt-4 text-white/90">Processo simples, claro e sem complicação.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {siteConfig.process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/25 bg-white/10 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8e3f1]">Etapa {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/90">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Formação e credenciais</p>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl">Segurança clínica em cada atendimento</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.credentials.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#dce7ee] bg-[var(--areia)] p-5">
                <h3 className="font-[var(--font-display)] text-2xl text-[var(--azul-profundo)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#40515b]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Medplex: seção própria com foto do prédio ao fundo + card + mapa. */}
      <section className="lazy-section relative overflow-hidden py-20">
        <Image
          src="/images/luiza/predio-medplex.webp"
          alt="Prédio do consultório no Medplex Santana"
          fill
          loading="lazy"
          decoding="async"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(23,42,52,0.72)]" />
        <div className="section-shell relative grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm">
            <p className="section-eyebrow !text-[#d8bf95]">Onde me encontrar</p>
            <h2 className="font-[var(--font-display)] text-4xl">
              {siteConfig.venues[0].title}, {siteConfig.venues[0].city}
            </h2>
            <div className="space-y-3 text-sm text-white/90">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.venues[0].street}, {siteConfig.venues[0].complement} - {siteConfig.venues[0].city}/
                  {siteConfig.venues[0].state}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock3 size={16} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.businessHours.days} · {siteConfig.contact.businessHours.hours}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Sparkles size={16} className="mt-0.5 shrink-0" />
                <span>@luizastoduto</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contato"
                className="cta-button inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--azul-profundo)]"
              >
                Como chegar
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Agendar agora
              </Link>
            </div>
          </div>

          <iframe
            src={siteConfig.venues[0].mapEmbedUrl}
            className="map-embed min-h-[360px] border border-white/20 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Medplex Santana"
          />
        </div>
      </section>

      <section className="lazy-section relative overflow-hidden bg-[var(--azul-praia)] py-20 text-white">
        <LaceOrnament size="lg" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="section-shell relative text-center">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl">Pronta para transformar seu sorriso?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/95">O primeiro passo é uma mensagem simples no WhatsApp.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)]"
            >
              Agendar pelo WhatsApp
            </Link>
            <Link
              href="/servicos"
              className="cta-button inline-flex items-center rounded-full border border-white/45 px-6 py-3 text-sm font-semibold text-white"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white py-16">
        <div className="section-shell">
          <p className="text-center text-sm text-[#62747d]">
            * Depoimentos públicos serão adicionados em breve. Enquanto isso, os diferenciais e credenciais da Dra. Luiza
            já estão apresentados de forma completa.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="rounded-full bg-[#edf5fa] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--azul-profundo)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
