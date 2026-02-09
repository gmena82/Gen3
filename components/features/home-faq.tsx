'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Your first visit begins with a thorough consultation where we listen to your health history, symptoms, and goals. We may recommend lab work to get a complete picture before building a personalized plan tailored to you.',
  },
  {
    question: 'Do I need a referral from my doctor?',
    answer:
      'No referral is needed. You can book directly with us. However, we are happy to collaborate with your primary care provider to ensure a coordinated approach to your wellness.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Many clients notice improvements within the first few weeks, especially with IV therapy and hormone optimization. Longer-term programs like Metabolic Reset or Gut Health typically show significant results within 8–12 weeks.',
  },
  {
    question: 'Is IV therapy safe?',
    answer:
      'Absolutely. All IV treatments are administered by experienced registered nurses in a clinical setting. We use pharmaceutical-grade ingredients and follow strict safety protocols for every session.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'We are a cash-pay practice, which allows us to spend more time with each patient and offer treatments that insurance typically does not cover. We can provide superbills for you to submit to your insurance for potential reimbursement.',
  },
  {
    question: 'Which location should I visit?',
    answer:
      'Both our Blue Springs and Kansas City Northland locations offer the same full range of services. Choose whichever is most convenient for you — or try both! You can book at either location through our online scheduler.',
  },
];

export function HomeFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding" aria-label="Frequently Asked Questions">
      <div ref={sectionRef} className="container-custom max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                onClick={() => toggle(i)}
                className={cn(
                  'w-full text-left flex items-center justify-between gap-4 px-6 py-5 rounded-xl border transition-all duration-300',
                  openIndex === i
                    ? 'border-gen3-gold/30 bg-gen3-gold/5'
                    : 'border-border bg-white hover:border-gen3-gold/20'
                )}
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-gen3-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 shrink-0 text-gen3-gold transition-transform duration-300',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="px-6 pt-2 pb-4 text-sm text-gen3-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
