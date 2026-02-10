'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="meet-the-team" className="section-padding bg-gen3-black" aria-label="Our Team">
      <div ref={ref} className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              The <span className="italic text-gen3-gold">Team</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              With over 30 years of collective nursing experience, we understand
              the frustration of feeling unheard, dismissed, and degraded when it
              comes to your health.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Our hope is to help you discover what a fulfilled life looks like
              in regards to your health. We affirm, assist, and provide you with
              a better approach. And we&apos;re here to show you.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gen3-gold/40 px-6 py-3 text-sm font-semibold text-gen3-gold transition-all duration-300 hover:bg-gen3-gold hover:text-white hover:border-gen3-gold"
            >
              More about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gen3-charcoal border border-white/5">
              <img
                src="/Meet-Team.webp"
                alt="Gen 3 wellness team"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gen3-gold/10">
              <p className="text-3xl font-display font-bold text-gen3-gold">30+</p>
              <p className="text-xs font-medium text-gen3-gray">Years Combined Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
