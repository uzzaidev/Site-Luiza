import type { LucideIcon } from 'lucide-react';
import {
  BrushCleaning,
  Crosshair,
  HeartPulse,
  Layers,
  Puzzle,
  Scissors,
  Sparkles,
  Syringe,
  Zap,
} from 'lucide-react';

/**
 * Ícones discretos por serviço (feedback: menos “bolinha com letras”, mais desenho / sem texto).
 * Cada slug em data/services.ts precisa de entrada aqui; fallback evita tela quebrada.
 */
const SERVICE_ORB_ICONS: Record<string, LucideIcon> = {
  clareamento: Sparkles,
  'facetas-em-resina': Layers,
  'extracao-de-sisos': Scissors,
  restauracoes: Puzzle,
  'toxina-botulinica': Syringe,
  profilaxia: BrushCleaning,
  'tratamento-periodontal': HeartPulse,
  'agulhamento-a-seco': Crosshair,
  'atendimento-de-urgencia': Zap,
};

type ServiceOrbIconProps = {
  slug: string;
  /** Tamanho do ícone em px (o orb no CSS ~3.35rem). */
  size?: number;
  className?: string;
};

export function ServiceOrbIcon({ slug, size = 22, className }: ServiceOrbIconProps) {
  const Icon = SERVICE_ORB_ICONS[slug] ?? Sparkles;
  return <Icon className={className} size={size} strokeWidth={1.65} aria-hidden />;
}
