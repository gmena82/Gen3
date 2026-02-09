'use client';

import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Activity,
  Flame,
  HeartPulse,
  Shield,
  Droplets,
  Sparkles,
  TestTube,
  ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/site-config';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Flame,
  HeartPulse,
  Shield,
  Droplets,
  Sparkles,
  TestTube,
};

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <section id="services" className="section-padding" aria-label="Our Services">
      <div ref={ref} className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black mb-4">
            Replenish with{' '}
            <span className="text-gradient">IV Hydration</span> Services
          </h2>
          <p className="text-gen3-gray text-lg max-w-2xl mx-auto">
            Whether it&apos;s balanced hormones, restored energy, or improved metabolic
            function, our care delivers tangible, measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {topServices.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Activity;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={service.href} className="block group service-card h-full">
                  {/* Number badge */}
                  <span className="inline-block text-xs font-bold text-gen3-gold/50 tracking-wider mb-3">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gen3-gold/10 text-gen3-gold transition-colors group-hover:bg-gen3-gold group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gen3-black mb-2 group-hover:text-gen3-gold transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gen3-gray leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gen3-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {bottomServices.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Activity;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={service.href} className="block group service-card service-card-compact h-full">
                  {/* Number badge */}
                  <span className="inline-block text-xs font-bold text-gen3-gold/50 tracking-wider mb-3">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gen3-gold/10 text-gen3-gold transition-colors group-hover:bg-gen3-gold group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gen3-black mb-2 group-hover:text-gen3-gold transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gen3-gray leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gen3-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
