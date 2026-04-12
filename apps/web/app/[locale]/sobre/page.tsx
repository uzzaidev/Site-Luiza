import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LaceOrnament } from '@/components/ui/LaceOrnament';
import { getWhatsAppUrl } from '@/lib/contact';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Sobre a Dra. Luiza Stoduto',
  description: 'Conheca a historia, abordagem de atendimento e formacao da Dra. Luiza Stoduto em Porto Alegre.',
};

export default async function SobrePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const whatsappUrl = getWhatsAppUrl('Ola, Dra. Luiza! Gostaria de saber mais sobre seu atendimento.');

  return (
    <>
      <section className="relative h-[74vh] min-h-[470px] max-h-[640px] overflow-hidden sm:h-auto sm:min-h-0 sm:max-h-none sm:py-24">
        <Image
          src="/images/luiza/luiza-informal-1.jpg"
          alt="Dra. Luiza Stoduto"
          fill
          className="object-cover object-[50%_34%] md:object-[50%_34%] lg:object-[50%_34%]"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,20,28,0.88)] via-[rgba(15,33,43,0.44)] to-[rgba(22,42,52,0.26)] sm:hidden" />
        <div className="absolute inset-0 hidden bg-[rgba(22,42,52,0.55)] sm:block" />

        <div className="section-shell relative z-10 flex h-full items-end pb-6 text-white sm:block sm:h-auto sm:pb-0">
          <div className="max-w-[21rem] sm:max-w-xl md:-ml-10 lg:-ml-16">
            <p className="section-eyebrow !text-[#dfc6a2]">Sobre a profissional</p>
            <h1 className="mt-2 font-[var(--font-display)] text-5xl leading-[0.98] sm:text-6xl">Olá, eu sou a Dra. Luiza</h1>
            <p className="mt-4 text-base leading-relaxed text-white/95 sm:max-w-xl">
              Cirurgia-dentista, {siteConfig.identity.cro}, formada pela UFRGS. Meu compromisso e unir técnica, escuta
              e cuidado para que cada paciente se sinta seguro desde a primeira consulta.
            </p>
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="section-eyebrow">Minha historia</p>
            <h2 className="section-title text-4xl sm:text-5xl">Cuidar de pessoas sempre foi o centro da minha escolha</h2>
            {siteConfig.about.story.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[#40515b]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <LaceOrnament size="md" className="pointer-events-none absolute -left-10 -top-8 opacity-45" />
            {/* Marco D: raios alternados (um canto mais aberto). */}
            <div className="photo-shell photo-shell--d ornament-frame relative">
              <Image
                src="/images/luiza/luiza_jaleco_atualizado_hero2.jpeg"
                alt="Dra. Luiza com jaleco"
                width={1365}
                height={2048}
                loading="lazy"
                decoding="async"
                className="photo-crop h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lazy-section lace-tile bg-[var(--areia)] py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Minha abordagem</p>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl">Tratamento com transparencia, leveza e cuidado</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteConfig.about.pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#d6e4eb] bg-white p-6">
                <h3 className="font-[var(--font-display)] text-3xl text-[var(--azul-profundo)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#40515b]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white py-20">
        <div className="section-shell">
          <p className="section-eyebrow text-center">Formacao completa</p>
          <h2 className="section-title mt-2 text-center text-4xl sm:text-5xl">Linha profissional</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {[
              'UFRGS - Formacao em Odontologia (Clinico Geral)',
              'Habilitacao em Toxina Botulinica aplicada a Odontologia',
              'Registro profissional ativo: CRO/RS 33802',
              'Atendimento no Medplex Santana, Porto Alegre',
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-[#d8e5ec] bg-[var(--areia)] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--madeira)]">Etapa {index + 1}</p>
                <p className="mt-1 text-sm text-[#394a53]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--azul-praia)]"
            >
              Vamos conversar pelo WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
