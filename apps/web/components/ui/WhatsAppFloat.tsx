import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/contact';

export function WhatsAppFloat() {
  return (
    <Link
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--azul-profundo)] text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[var(--azul-praia)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--azul-profundo)] focus-visible:ring-offset-2"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
