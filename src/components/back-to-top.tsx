"use client";

import { useEffect, useState, type CSSProperties } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [footerClearance, setFooterClearance] = useState(0);

  useEffect(() => {
    const updateVisibility = () => {
      const y = window.scrollY;
      setVisible(previous => y <= 1 ? false : y >= 600 ? true : previous);
      const footer = document.querySelector('footer.site-footer');
      setFooterClearance(footer ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top) : 0);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  if (!visible) return null;

  function scrollToTop() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  return <button type="button" className="back-to-top" aria-label="맨 위로 이동" onClick={scrollToTop} style={{ '--footer-clearance': `${footerClearance}px` } as CSSProperties}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </button>;
}
