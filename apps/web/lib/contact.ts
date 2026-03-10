import { siteConfig } from '@/site.config';

export function getWhatsAppUrl(customMessage?: string) {
  const number = siteConfig.contact.phone.whatsapp;
  const text = customMessage ?? siteConfig.contact.phone.whatsappMessage;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
