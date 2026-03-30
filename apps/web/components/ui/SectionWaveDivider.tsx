import { cn } from '@/lib/utils';

type SectionWaveDividerProps = {
  /** Usar `text-white`, `text-[var(--areia)]`, etc. — o path usa fill: currentColor. */
  accentClass?: string;
  className?: string;
};

/**
 * Divisor orgânico entre seções (feedback: menos “quadradão”, referência ao ondulado).
 * Puramente decorativo; não afeta leitura nem navegação.
 */
export function SectionWaveDivider({ accentClass = 'text-white', className }: SectionWaveDividerProps) {
  return (
    <div
      className={cn('pointer-events-none w-full select-none leading-[0]', accentClass, className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 48"
        className="block h-10 w-full sm:h-12"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          fill="currentColor"
          d="M0,30 C180,6 360,46 540,24 C720,4 900,42 1200,20 L1200,48 L0,48 Z"
        />
      </svg>
    </div>
  );
}
