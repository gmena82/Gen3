'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" aria-label="Get in touch">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-bg-f.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_68%] blur-[1.5px] scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/78 to-black/92" />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Have More Questions?
            <span className="block text-gen3-gold-light italic">We&apos;re here to help!</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Take the first step toward a life full of energy, clarity, and purpose.
            We&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-gold-neon-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Let&apos;s Chat
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-black/25 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-gen3-gold hover:text-gen3-gold-light"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
