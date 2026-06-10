'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.section'));

    // Mark all as hidden, then observe
    els.forEach(el => el.classList.add('will-reveal'));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('did-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    els.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      els.forEach(el => {
        el.classList.remove('will-reveal', 'did-reveal');
      });
    };
  }, [pathname]);

  return null;
}
