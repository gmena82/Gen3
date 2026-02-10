'use client';

import { motion } from 'motion/react';
import { siteConfig } from '@/lib/site-config';

export function HeroVideo() {
  return (
    <section className="hero-video-section" aria-label="Welcome to Gen 3">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gen3-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/Hero-F.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="hero-video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gen3-gold text-sm sm:text-base font-semibold tracking-widest uppercase mb-4"
          >
            Modern Wellness Practice
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            Welcome to{' '}
            <span className="text-gold-shimmer">Gen 3</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 font-light italic"
          >
            Premier IV Hydration, Hormone Optimization, and Medical Wellness in
            Kansas City & Blue Springs.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-gold-neon-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white/90 transition-all duration-300 hover:border-white/40 hover:bg-white/15"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
