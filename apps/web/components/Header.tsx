'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/site.config';
import { getWhatsAppUrl } from '@/lib/contact';
import { cn } from '@/lib/utils';

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/' || pathname === '/pt';
  }

  const normalized = pathname.startsWith('/pt/') ? pathname.slice(3) : pathname;
  return normalized === href || normalized.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = useMemo(() => getWhatsAppUrl(), []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#dfe7ec] bg-[rgba(247,243,238,0.94)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d9e6ef] bg-white">
            <Image
              src="/images/luiza/logo-ls.jpg"
              alt="Logo Dra. Luiza Stoduto"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-[var(--font-display)] text-xl leading-tight text-[var(--azul-profundo)]">
              Dra. Luiza Stoduto
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--madeira)]">{siteConfig.identity.cro}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.main.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition',
                  active ? 'text-[var(--azul-profundo)]' : 'text-[var(--texto)] hover:text-[var(--azul-profundo)]',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-pulse inline-flex items-center rounded-full bg-[var(--azul-praia)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--azul-profundo)]"
          >
            {siteConfig.navigation.cta.text}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ef] bg-white text-[var(--azul-profundo)] md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dfe7ec] bg-[var(--areia)] md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  isActivePath(pathname, item.href)
                    ? 'bg-[#deebf2] text-[var(--azul-profundo)]'
                    : 'text-[var(--texto)] hover:bg-[#edf4f8]',
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-pulse mt-2 inline-flex items-center justify-center rounded-full bg-[var(--azul-profundo)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              {siteConfig.navigation.cta.text}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
