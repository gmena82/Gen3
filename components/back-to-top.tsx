'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const teamSection = document.getElementById('meet-the-team');
      if (!teamSection) {
        setVisible(false);
        return;
      }

      const triggerPoint = teamSection.offsetTop + teamSection.offsetHeight;
      setVisible(window.scrollY + window.innerHeight > triggerPoint);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top-orb ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
    >
      <ArrowUp className="back-to-top-arrow h-5 w-5" strokeWidth={1.7} />
    </button>
  );
}
