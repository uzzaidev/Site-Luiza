import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/site.config';
import { getWhatsAppUrl } from '@/lib/contact';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Contato | Dra. Luiza Stoduto',
  description:
    'Entre em contato com a Dra. Luiza Stoduto: Medplex Santana, Porto Alegre. Segunda a sexta, 17h às 22h.',
};

export default async function ContatoPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <section className="lace-tile bg-[var(--areia)] py-20">
        <div className="section-shell text-center">
          <p className="section-eyebrow">Contato e localização</p>
          <h1 className="section-title mt-2 text-5xl sm:text-6xl">Vamos agendar sua avaliação?</h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#43545d]">
            Consultório no Medplex Santana, Porto Alegre. Entre em contato para encaixes, urgências e avaliação
            personalizada.
          </p>
        </div>
      </section>

      <section className="lazy-section bg-white py-16">
        {/* Um único local: cartão centralizado (antes eram duas colunas). */}
        <div className="section-shell mx-auto grid max-w-2xl gap-4">
          {siteConfig.venues.map((venue) => (
            <article key={venue.id} className="rounded-2xl border border-[#d8e5ec] bg-[var(--areia)] p-5">
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--azul-profundo)] sm:text-3xl">
                {venue.title}
              </h2>
              <p className="mt-2 text-sm text-[#43545d]">
                {venue.street}
                <br />
                {venue.complement}
                <br />
                {venue.neighborhood
                  ? `${venue.neighborhood} - ${venue.city}/${venue.state}`
                  : `${venue.city}/${venue.state}`}
              </p>
              <Link
                href={venue.mapsOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
              >
                Abrir no Google Maps
              </Link>
            </article>
          ))}
        </div>

        <div className="section-shell mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d8e5ec] bg-[var(--areia)] p-5">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--azul-profundo)]">WhatsApp</h2>
            <p className="mt-2 text-sm text-[#43545d]">{siteConfig.contact.phone.primary}</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
            >
              Abrir conversa
            </Link>
          </article>

          <article className="rounded-2xl border border-[#d8e5ec] bg-[var(--areia)] p-5">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--azul-profundo)]">Instagram</h2>
            <p className="mt-2 text-sm text-[#43545d]">@luizastoduto</p>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
            >
              Ver perfil
            </Link>
          </article>

          <article className="rounded-2xl border border-[#d8e5ec] bg-[var(--areia)] p-5">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--azul-profundo)]">Horário</h2>
            <p className="mt-2 text-sm text-[#43545d]">
              {siteConfig.contact.businessHours.days}
              <br />
              {siteConfig.contact.businessHours.hours}
            </p>
          </article>
        </div>
      </section>

      {siteConfig.venues.map((venue) => (
        <section key={venue.id} className="lazy-section bg-white pb-12">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="photo-shell photo-shell--f relative min-h-[350px]">
              <Image
                src={venue.facadeImage.src}
                alt={venue.facadeImage.alt}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="photo-crop h-full min-h-[350px] w-full object-cover"
              />
            </div>

            <div className="space-y-4 rounded-[1.6rem] border border-[#d9e6ee] bg-[var(--areia)] p-6">
              <h2 className="section-title text-3xl sm:text-4xl">Como chegar — {venue.title}</h2>
              <ul className="space-y-2 text-sm text-[#42535d]">
                {venue.directions.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={venue.mapsOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-flex items-center rounded-full border border-[#9ec8db] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--azul-profundo)]"
                >
                  Abrir no Google Maps
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Agendar agora
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="lazy-section bg-[var(--areia)] pb-20">
        <div className="section-shell space-y-10">
          {siteConfig.venues.map((venue) => (
            <div key={`map-${venue.id}`}>
              <h3 className="section-title text-2xl text-[var(--azul-profundo)]">{venue.title}</h3>
              <iframe
                src={venue.mapEmbedUrl}
                className="map-embed mt-4 min-h-[340px] border border-[#d6e3eb] bg-white"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa ${venue.title}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
