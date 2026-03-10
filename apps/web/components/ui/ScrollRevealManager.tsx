'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LAZY_SECTION_SELECTOR = '.lazy-section';

export function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(LAZY_SECTION_SELECTOR));

    if (!sections.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const inViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.9;
    };

    sections.forEach((section) => {
      if (inViewport(section) || prefersReducedMotion) {
        section.classList.add('is-visible');
      } else {
        section.classList.remove('is-visible');
      }
    });

    document.body.classList.add('reveal-enabled');

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    sections.forEach((section) => {
      if (!section.classList.contains('is-visible')) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
