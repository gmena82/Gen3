'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, services, siteConfig } from '@/lib/site-config';

export function Nav() {
  const pathname = usePathname();
  const scrolled = true;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll detection ── */
  // Scroll detection disabled: keep dark nav styling full-time.

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const isServicePage = pathname.startsWith('/services');
  const navBeforeServices = navLinks.slice(0, 2);
  const navAfterServices = navLinks.slice(2);

  /* Over hero: clear glass. After hero: dark glass with white text. */
  const textBase = scrolled ? 'text-white/90' : 'text-white/80';
  const textActive = scrolled ? 'text-gen3-gold-light' : 'text-gen3-gold-light';
  const textHover = scrolled
    ? 'hover:text-white hover:bg-white/10'
    : 'hover:text-white hover:bg-white/10';
  const brandText = scrolled ? 'text-white' : 'text-white';
  const mobileToggle = scrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white';

  return (
    <>
      {/* ── Fixed Header ── */}
      <header
        className="fixed top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 z-50 mx-auto max-w-7xl"
        style={{ maxWidth: 'calc(100% - 40px)' }}
      >
        <div className={cn('nav-glass px-4 sm:px-6 py-3 sm:py-4', scrolled && 'nav-glass-scrolled')}>
          <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4">
            {/* ── Brand ── */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(212,177,87,0.55)] hover:scale-[1.02]"
              aria-label="Gen 3 IV Home"
            >
              <img
                src="/logo-white-trsp-s.webp"
                alt="Gen 3 IV Hydration + Wellness"
                className="h-9 sm:h-10 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navBeforeServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300',
                    pathname === link.href
                      ? cn(textActive, scrolled ? 'bg-gen3-gold/10' : 'bg-white/10')
                      : cn(textBase, textHover)
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* ── Services Dropdown ── */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300',
                    isServicePage
                      ? cn(textActive, scrolled ? 'bg-gen3-gold/10' : 'bg-white/10')
                      : cn(textBase, textHover)
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      servicesOpen && 'rotate-180'
                    )}
                  />
                </button>

                {/* Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-2xl border border-black/5 bg-white/95 backdrop-blur-xl shadow-2xl p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={cn(
                            'group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-200',
                            pathname === service.href
                              ? 'bg-gen3-gold/10 text-gen3-gold-dark'
                              : 'hover:bg-gen3-cream text-gen3-gray hover:text-gen3-black'
                          )}
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mt-0.5 text-xs font-bold text-gen3-gold/60 group-hover:text-gen3-gold">
                            {service.number}
                          </span>
                          <span className="text-sm font-medium leading-snug">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-black/5">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-gen3-gold hover:text-gen3-gold-dark transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navAfterServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300',
                    pathname === link.href
                      ? cn(textActive, scrolled ? 'bg-gen3-gold/10' : 'bg-white/10')
                      : cn(textBase, textHover)
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-book-bronze hidden lg:inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300"
              >
                Book Appointment
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn('lg:hidden p-2 transition-colors rounded-md', mobileToggle)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navBeforeServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block p-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-gen3-gold bg-gen3-gold/10'
                      : 'text-gen3-black/70 hover:text-gen3-black hover:bg-gen3-cream'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={cn(
                  'flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors w-full text-left',
                  isServicePage
                    ? 'text-gen3-gold bg-gen3-gold/10'
                    : 'text-gen3-black/70 hover:text-gen3-black hover:bg-gen3-cream'
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    mobileServicesOpen && 'rotate-180'
                  )}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={cn(
                        'flex items-center gap-2 p-2.5 rounded-lg text-sm transition-colors',
                        pathname === service.href
                          ? 'text-gen3-gold bg-gen3-gold/10'
                          : 'text-gen3-gray hover:text-gen3-black hover:bg-gen3-cream'
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-xs font-bold text-gen3-gold/50">{service.number}</span>
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="p-2.5 rounded-lg text-sm font-medium text-gen3-gold hover:bg-gen3-cream transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}

              {navAfterServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block p-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-gen3-gold bg-gen3-gold/10'
                      : 'text-gen3-black/70 hover:text-gen3-black hover:bg-gen3-cream'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-black/5">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gen3-gold px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gen3-gold-dark w-full"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
