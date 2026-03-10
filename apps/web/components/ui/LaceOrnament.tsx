import { cn } from '@/lib/utils';

type LaceOrnamentProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const SIZE_MAP = {
  sm: 96,
  md: 280,
  lg: 560,
};

export function LaceOrnament({ size = 'md', className }: LaceOrnamentProps) {
  const pixelSize = SIZE_MAP[size];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      width={pixelSize}
      height={pixelSize}
      className={cn('text-[var(--azul-praia)]', className)}
      fill="none"
    >
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.25" />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.1" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeOpacity="0.24" strokeWidth="1" />

      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 16;
        const xOuter = 100 + Math.cos(angle) * 94;
        const yOuter = 100 + Math.sin(angle) * 94;
        const xInner = 100 + Math.cos(angle) * 62;
        const yInner = 100 + Math.sin(angle) * 62;

        return (
          <path
            key={`line-${i}`}
            d={`M ${xInner} ${yInner} Q 100 100 ${xOuter} ${yOuter}`}
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        );
      })}

      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 24;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        return <circle key={`dot-${i}`} cx={x} cy={y} r="2.8" fill="currentColor" fillOpacity="0.2" />;
      })}

      <circle cx="100" cy="100" r="10" fill="currentColor" fillOpacity="0.22" />
      <circle cx="100" cy="100" r="4" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}
