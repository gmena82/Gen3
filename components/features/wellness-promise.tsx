'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Brain, Leaf } from 'lucide-react';

const promises = [
  {
    icon: Zap,
    title: 'Energy',
    description: 'Break free from fatigue and feel revitalized every single day.',
  },
  {
    icon: Brain,
    title: 'Clarity',
    description: 'Sharpen your mind with treatments that fuel cognitive performance.',
  },
  {
    icon: Leaf,
    title: 'Purpose',
    description: 'Live intentionally with health optimized for your unique goals.',
  },
];

export function WellnessPromise() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-accent" aria-label="Our Promise">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gen3-black">
            A life full of
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {promises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center group"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gen3-gold/10 text-gen3-gold transition-all group-hover:bg-gen3-gold group-hover:text-white group-hover:scale-110">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-gen3-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gen3-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
