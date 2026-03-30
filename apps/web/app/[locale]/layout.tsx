import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { locales } from '@/i18n';
import { siteConfig } from '@/site.config';
import '../globals.css';
import '../luiza.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { ScrollRevealManager } from '@/components/ui/ScrollRevealManager';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.identity.name} | Odontologia em Porto Alegre`,
  description: siteConfig.identity.description,
  metadataBase: new URL(siteConfig.urls.production),
  icons: {
    icon: '/images/luiza/logo-ls.jpg',
    apple: '/images/luiza/logo-ls.jpg',
  },
  openGraph: {
    title: siteConfig.identity.name,
    description: siteConfig.identity.description,
    url: siteConfig.urls.production,
    siteName: siteConfig.identity.name,
    locale: 'pt_BR',
    type: 'website',
    images: ['/images/luiza/luiza_jaleco_atualizado_hero2.jpeg'],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${cormorantGaramond.variable} ${dmSans.variable} font-[var(--font-body)] antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollRevealManager />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
