import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { locales } from '@/i18n';
import { siteConfig } from '@/site.config';
import { buildDentistSchema, buildWebSiteSchema } from '@/lib/schema';
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

const canonicalBase = new URL(siteConfig.urls.production);
const ogImageUrl = new URL(siteConfig.openGraphImagePath, canonicalBase).toString();

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.identity.name} | ${siteConfig.identity.legalName}`,
    template: `%s | ${siteConfig.identity.legalName}`,
  },
  description: siteConfig.identity.description,
  metadataBase: canonicalBase,
  icons: {
    icon: '/images/luiza/logo-ls.jpg',
    apple: '/images/luiza/logo-ls.jpg',
  },
  openGraph: {
    title: `${siteConfig.identity.name} — ${siteConfig.identity.legalName}`,
    description: siteConfig.identity.description,
    url: siteConfig.urls.production,
    siteName: siteConfig.identity.legalName,
    locale: 'pt_BR',
    type: 'website',
    /* URL absoluta + dimensões ajudam WhatsApp/Facebook a exibir a foto do hero em vez do ícone genérico */
    images: [
      {
        url: ogImageUrl,
        width: 1365,
        height: 2048,
        alt: `${siteConfig.identity.name} — odontologia em Porto Alegre`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.identity.name} | ${siteConfig.identity.legalName}`,
    description: siteConfig.identity.description,
    images: [ogImageUrl],
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

  const dentistSchema = buildDentistSchema();
  const webSiteSchema = buildWebSiteSchema();

  return (
    <html lang={locale}>
      {/* Structured Data — global */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
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
