import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getServiceBySlug, services } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/contact';
import { siteConfig } from '@/site.config';
import { LaceOrnament } from '@/components/ui/LaceOrnament';

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Serviço não encontrado | Dra. Luiza Stoduto',
    };
  }

  return {
    title: `${service.title} em Porto Alegre | Dra. Luiza Stoduto`,
    description: service.fullDescription,
    alternates: {
      canonical: `${siteConfig.urls.production}/servicos/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  unstable_setRequestLocale(locale);

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(`Olá, Dra. Luiza! Gostaria de agendar uma avaliação de ${service.title}.`);

  return (
    <>
      <section className="relative overflow-hidden lace-tile bg-[var(--areia)] py-16">
        <LaceOrnament size="lg" className="pointer-events-none absolute -right-28 -top-20 opacity-45" />
        <div className="section-shell relative">
          <nav className="text-sm text-[#5f727c]">
            <Link href="/" className="hover:text-[var(--azul-profundo)]">
              Inicio
            </Link>{' '}
            /{' '}
            <Link href="/servicos" className="hover:text-[var(--azul-profundo)]">
              Servicos
            </Link>{' '}
            / <span className="text-[var(--azul-profundo)]">{service.title}</span>
          </nav>
          <h1 className="section-title mt-4 text-5xl sm:text-6xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-[#44555f]">{service.fullDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[var(--azul-profundo)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--azul-praia)]"
            >
              Agendar consulta
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center rounded-full border border-[#9ec8db] bg-white px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)]"
            >
              Voltar para serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="service-detail bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#d7e4eb] bg-[var(--areia)] p-7">
            <h2>Para quem é indicado</h2>
            <ul className="mt-4 space-y-3">
              {service.indications.map((item) => (
                <li key={item} className="rounded-xl bg-white px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#d7e4eb] bg-[var(--areia)] p-7">
            <h2>Como funciona o tratamento</h2>
            <ol className="mt-4 space-y-3">
              {service.steps.map((step, index) => (
                <li key={step} className="rounded-xl bg-white px-4 py-3 text-sm">
                  <span className="mr-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--madeira)]">
                    Etapa {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="service-detail bg-white pb-20">
        <div className="section-shell rounded-2xl border border-[#d7e4eb] bg-[var(--areia)] p-7">
          <h2 className="text-center">Perguntas frequentes</h2>
          <div className="mx-auto mt-6 max-w-4xl space-y-3">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-[#d7e4eb] bg-white px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-[var(--azul-profundo)]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--azul-profundo)] py-16 text-white">
        <div className="section-shell text-center">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl">Pronta para iniciar seu tratamento?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Fale comigo no WhatsApp e te explico os próximos passos para esse atendimento.
          </p>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--azul-profundo)]"
          >
            Agendar pelo WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
