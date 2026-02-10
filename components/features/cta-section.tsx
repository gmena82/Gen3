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
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, var(--color-gen3-gold) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black mb-4">
            Have More Questions?{' '}
            <span className="text-gradient italic">We&apos;re here to help!</span>
          </h2>
          <p className="text-gen3-gray text-lg mb-10 max-w-xl mx-auto">
            Take the first step toward a life full of energy, clarity, and purpose.
            We&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-gold-neon-btn cta-chat-inner-stroke inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Let&apos;s Chat
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gen3-black/10 px-8 py-4 text-base font-semibold text-gen3-black transition-all duration-300 hover:border-gen3-gold hover:text-gen3-gold"
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
