'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function TestimonialsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding overflow-hidden"
      aria-label="Testimonials"
    >
      <div ref={sectionRef} className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black">
            Proven Excellence in{' '}
            <span className="text-gradient italic">Patient Care</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1" aria-label="5 star rating">
            <span className="text-gen3-gold text-2xl leading-none">★</span>
            <span className="text-gen3-gold text-2xl leading-none">★</span>
            <span className="text-gen3-gold text-2xl leading-none">★</span>
            <span className="text-gen3-gold text-2xl leading-none">★</span>
            <span className="text-gen3-gold text-2xl leading-none">★</span>
          </div>
        </motion.div>

        {/* Privacy-safe summary */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base sm:text-lg text-gen3-gray leading-relaxed">
            We are proud to maintain a 5-star rating across over 50 verified reviews.
            Our patients consistently commend our clinical expertise, clean environment,
            and compassionate approach to wellness.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gen3-gray leading-relaxed">
            To protect patient privacy, we do not publish individual health stories on
            our website. However, we invite you to read about our patients&apos; public
            experiences on our Google Business Profile.
          </p>

          <div className="mt-8">
            <a
              href="https://share.google/3g5QdCQyk81wrvrso"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-book-bronze inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300"
            >
              Read Our Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
