import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';
import { services } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/contact';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[#d8e3ea] bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d9e6ef] bg-white">
              <Image src="/images/luiza/logo-ls.jpg" alt="Logo Dra. Luiza Stoduto" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="font-[var(--font-display)] text-xl text-[var(--azul-profundo)]">Dra. Luiza Stoduto</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--madeira)]">{siteConfig.identity.cro}</p>
            </div>
          </div>
          <p className="text-sm text-[#4a5a63]">{siteConfig.identity.tagline}</p>
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
          >
            @luiza.dentista
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--madeira)]">Navegacao</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.navigation.footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#32424b] transition hover:text-[var(--azul-profundo)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--madeira)]">Servicos</h3>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`} className="text-sm text-[#32424b] transition hover:text-[var(--azul-profundo)]">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--madeira)]">Contato</h3>
          <div className="mt-4 space-y-2 text-sm text-[#32424b]">
            <p>{siteConfig.contact.address.street}</p>
            <p>{siteConfig.contact.address.complement}</p>
            <p>
              {siteConfig.contact.address.city} - {siteConfig.contact.address.state}
            </p>
            <p>{siteConfig.contact.phone.primary}</p>
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-semibold text-[var(--azul-profundo)] hover:text-[var(--azul-praia)]"
            >
              Agendar pelo WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5ecef] bg-[#f8fbfd]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 text-xs text-[#6a7982] sm:px-6 lg:px-8">
          <p>(c) {year} {siteConfig.identity.name}. Todos os direitos reservados.</p>
          <p>{siteConfig.identity.cro}</p>
        </div>
      </div>

      <div className="border-t border-black/20 bg-[#09111a]">
        <div className="mx-auto w-full max-w-7xl px-4 py-2 text-center sm:px-6 lg:px-8">
          <a
            href="https://www.uzzai.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.06em] text-white/95 transition hover:text-[#7EC8BE]"
          >
            Feito com 💚 e muitos sorrisos por Uzz.Ai
          </a>
        </div>
      </div>
    </footer>
  );
}

