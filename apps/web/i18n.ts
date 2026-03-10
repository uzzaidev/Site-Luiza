export const locales = ['pt'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  pt: 'Portuguese',
};

export const defaultLocale: Locale = 'pt';
