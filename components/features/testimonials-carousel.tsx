'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState, useCallback } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'M. H.',
    role: 'IV Hydration Client',
    quote:
      'Gen 3 IV Hydration is the best. Best staff, amazing atmosphere, and I felt so cared for every step of the way. I felt heard on what my body needed and they also recommended additional goodies to fuel my body. It is the best ME time to refocus and reset. Cannot wait for my next hydration session.',
    rating: 5,
  },
  {
    name: 'R. C.',
    role: 'NAD+ Therapy Client',
    quote:
      'I had the NAD injection with B-12 and glutathione push and compression therapy. My legs looked less swollen, I could walk three levels of stairs without stopping, and I had more energy. I already feel younger after my first session and I am excited to continue therapy.',
    rating: 5,
  },
  {
    name: 'S. T.',
    role: 'Immune Booster IV Client',
    quote:
      'I came in right before the Kansas City Marathon after a bad cold and decided to try the Immune Booster IV with add-ons including the NAD+ injection. By the next day my cold was gone, I felt amazing, and I was ready to run. I loved it so much I came back for a second NAD+ shot.',
    rating: 5,
  },
  {
    name: 'P. H.',
    role: 'Wellness Testing Client',
    quote:
      'Gen 3 has been life-changing for me. I did the autoimmune panel and finally got real answers about my food sensitivities and genetic makeup. Because of that, I have been able to change what I eat, lose weight, and feel so much better. The staff explained everything clearly and made the process stress-free.',
    rating: 5,
  },
  {
    name: 'T. G.',
    role: 'Family Care Client',
    quote:
      'Gen 3 is a true blessing. My daughter was recovering from surgery and became dehydrated. The nurses and staff got her in the same day and took wonderful care of her. It is a true family atmosphere - you can feel the love and care they put into each person.',
    rating: 5,
  },
  {
    name: 'K. T.',
    role: 'Hormone Consult Client',
    quote:
      'After months of frustration, I scheduled a hormone consultation. Bethany listened, made a recommendation based on my labs, and HRT changed my life in days. I also did a detox infusion and realized I was breathing clearly again. I am grateful for the care and feel like a million bucks.',
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  // We duplicate the list so the loop is seamless
  const items = [...testimonials, ...testimonials];
  const cardCount = testimonials.length;

  const advance = useCallback(() => {
    setOffset((prev) => prev + 1);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) advance();
    }, 5000);
    return () => clearInterval(id);
  }, [advance]);

  // When offset reaches the original set length, silently reset to keep looping
  useEffect(() => {
    if (offset === cardCount) {
      const timeout = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          setOffset(0);
          // Force reflow then restore transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (trackRef.current) {
                trackRef.current.style.transition =
                  'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
              }
            });
          });
        }
      }, 700); // wait for the current transition to finish
      return () => clearTimeout(timeout);
    }
  }, [offset, cardCount]);

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
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black">
            Real Results,{' '}
            <span className="text-gradient italic">Real Stories</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              transform: `translateX(calc(-${offset} * (calc(33.333% + 8px))))`,
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {items.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="service-card h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-4 h-4 fill-gen3-gold text-gen3-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gen3-gray text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-gen3-black text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gen3-gray-light">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-base sm:text-lg text-gen3-gray">
            Read more reviews{' '}
            <a
              href="https://share.google/3g5QdCQyk81wrvrso"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gen3-gold hover:text-gen3-gold-dark transition-colors"
            >
              HERE
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
