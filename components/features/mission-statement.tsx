'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function MissionStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission" className="section-padding bg-accent" aria-label="Our Mission">
      <div ref={ref} className="container-custom max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gen3-black font-light">
            Our team connects the dots between{' '}
            <strong className="font-semibold text-gradient">your story</strong>,{' '}
            <strong className="font-semibold text-gradient">your labs</strong>, and{' '}
            <strong className="font-semibold text-gradient">your lifestyle</strong>{' '}
            to create a plan that finally feels like{' '}
            <em className="font-display italic text-gen3-gold">you.</em>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <p className="text-base sm:text-lg text-gen3-gray leading-relaxed max-w-2xl mx-auto">
            Our clients don&apos;t invest in visits — they invest in{' '}
            <strong className="font-semibold">transformation.</strong> This is what
            modern, gold-standard wellness feels like.
          </p>
        </motion.div>

        {/* Decorative divider */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gen3-gold/30" />
          <div className="h-2 w-2 rounded-full bg-gen3-gold/40" />
          <div className="h-px w-16 bg-gen3-gold/30" />
        </div>
      </div>
    </section>
  );
}
