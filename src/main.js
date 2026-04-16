/**
 * main.js — Selenium Digital Consultant
 * Entry point: orchestrates language detection, rendering, and interactions.
 *
 * Architecture:
 *   1. Import styling & modules
 *   2. Detect language
 *   3. Render all sections via component functions
 *   4. Mount interactive behaviors (navbar, scroll animations, canvas, forms)
 *
 * All section renderers are pure functions:
 *   renderSection(lang) → HTML string
 */

import './style.css';
import { translations, detectLanguage, t } from './translations.js';
import { icons } from './icons.js';

/* ═════════════════════════════════════════════════════════════
   GLOBAL STATE
   ═════════════════════════════════════════════════════════════ */
let currentLang = detectLanguage();

/* ═════════════════════════════════════════════════════════════
   HELPER UTILITIES
   ═════════════════════════════════════════════════════════════ */

/** Shorthand translator bound to current language */
const T = (key) => t(currentLang, key);

/** Safe array-path getter for complex nested translation values */
const TA = (key) => t(currentLang, key); // Arrays returned as-is from translations object

/** Renders translation array items for a section */
const getSection = (key) => {
  const keys = key.split('.');
  let result = translations[currentLang];
  for (const k of keys) {
    if (!result) return null;
    result = result[k];
  }
  return result;
};

/* ═════════════════════════════════════════════════════════════
   SECTION: NAVIGATION
   ═════════════════════════════════════════════════════════════ */
function renderNav() {
  const nav = getSection('nav');
  const links = ['services', 'about', 'techStack', 'process', 'contact'];

  return `
  <nav id="navbar" role="navigation" aria-label="Main navigation"
       class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
       data-scrolled="false">
    <div class="section-container">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Brand / Logo -->
        <a href="#" id="nav-brand" class="flex items-center gap-3 group" aria-label="Selenium Digital Consultant">
          <div class="w-8 h-8 relative">
            <!-- Atomic orbit logo mark -->
            <div class="absolute inset-0 rounded-full border border-se-cyan/40 animate-spin" style="animation-duration:8s;"></div>
            <div class="absolute inset-1 rounded-full border border-se-cyan/20 animate-spin" style="animation-duration:5s;animation-direction:reverse;"></div>
            <div class="absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;border-radius:50%;background:var(--se-cyan);box-shadow:0 0 8px var(--se-cyan);"></div>
          </div>
          <span class="font-display font-bold text-lg tracking-tight text-se-white group-hover:text-se-cyan transition-colors duration-300">
            Se<span class="text-se-cyan">lenium</span>
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex items-center gap-8" role="list">
          ${links.map(key => `
            <li>
              <a href="#${key.replace('techStack','tech-stack')}"
                 class="nav-link"
                 aria-label="Navigate to ${nav[key]}">
                ${nav[key]}
              </a>
            </li>
          `).join('')}
        </ul>

        <!-- Right Controls -->
        <div class="flex items-center gap-4">
          <!-- Language Toggle -->
          <div class="flex items-center gap-1 p-1 rounded-sm border border-se-border bg-se-surface/50" role="group" aria-label="Language selector">
            <button id="lang-en" class="lang-btn ${currentLang === 'en' ? 'active' : ''}"
                    data-lang="en" aria-pressed="${currentLang === 'en'}" aria-label="Switch to English">
              EN
            </button>
            <button id="lang-id" class="lang-btn ${currentLang === 'id' ? 'active' : ''}"
                    data-lang="id" aria-pressed="${currentLang === 'id'}" aria-label="Switch to Indonesian">
              ID
            </button>
          </div>

          <!-- CTA Button (Desktop) -->
          <a href="#contact" class="hidden md:inline-flex btn-primary text-sm py-2.5 px-5" id="nav-cta">
            ${nav.cta}
            ${icons.get('arrowRight', 'w-4 h-4')}
          </a>

          <!-- Mobile Menu Toggle -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 text-se-silver hover:text-se-white transition-colors"
                  aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
            <span id="mobile-menu-icon">${icons.get('menu', 'w-5 h-5')}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu" class="lg:hidden hidden glass-panel border-t border-se-border" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div class="section-container py-6 flex flex-col gap-4">
        ${links.map(key => `
          <a href="#${key.replace('techStack','tech-stack')}"
             class="mobile-nav-link text-se-silver hover:text-se-cyan text-base font-medium py-2 border-b border-se-border/50 transition-colors duration-300"
             aria-label="Navigate to ${nav[key]}">
            ${nav[key]}
          </a>
        `).join('')}
        <a href="#contact" class="btn-primary mt-4 justify-center">
          ${nav.cta}
          ${icons.get('arrowRight', 'w-4 h-4')}
        </a>
      </div>
    </div>
  </nav>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: HERO
   ═════════════════════════════════════════════════════════════ */
function renderHero() {
  const hero = getSection('hero');

  return `
  <section id="home" class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-se-void"
           aria-labelledby="hero-headline" role="banner">

    <!-- Particle Canvas Background -->
    <canvas id="heroCanvas" aria-hidden="true"></canvas>

    <!-- Gradient mesh overlay -->
    <div class="absolute inset-0 bg-hero-mesh pointer-events-none" aria-hidden="true"></div>

    <!-- Scan line decorative effect -->
    <div class="absolute inset-x-0 pointer-events-none overflow-hidden opacity-30" aria-hidden="true"
         style="height:2px;top:0;background:linear-gradient(90deg,transparent,var(--se-cyan),transparent);animation:scanLine 6s linear infinite;"></div>

    <!-- Content -->
    <div class="section-container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
      <div class="max-w-4xl">

        <!-- Eyebrow Label -->
        <div class="section-tag mb-6 reveal" role="text">
          ${hero.eyebrow}
        </div>

        <!-- Main Headline -->
        <h1 id="hero-headline" class="font-display leading-none tracking-tight mb-8 reveal reveal-delay-1"
            style="font-size:clamp(3rem,7vw,6.5rem);font-weight:800;">
          <span class="block text-se-white">${hero.headline1}</span>
          <span class="block text-gradient-cyan glitch-text" data-text="${hero.headline2}">${hero.headline2}</span>
          <span class="block text-se-white">${hero.headline3}</span>
        </h1>

        <!-- Subheadline -->
        <p class="section-subheading mb-12 reveal reveal-delay-2 max-w-2xl">
          ${hero.subheadline}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-20 reveal reveal-delay-3">
          <a href="#contact" class="btn-primary animate-glow-pulse" id="hero-cta-primary" aria-label="${hero.ctaPrimary}">
            ${hero.ctaPrimary}
            ${icons.get('arrowRight', 'w-4 h-4')}
          </a>
          <a href="#services" class="btn-ghost" id="hero-cta-secondary" aria-label="${hero.ctaSecondary}">
            ${hero.ctaSecondary}
          </a>
        </div>

        <!-- Stats Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-se-border rounded-sm overflow-hidden reveal reveal-delay-4"
             role="list" aria-label="Key statistics">
          ${[
            { val: hero.stat1Value, label: hero.stat1Label },
            { val: hero.stat2Value, label: hero.stat2Label },
            { val: hero.stat3Value, label: hero.stat3Label },
            { val: hero.stat4Value, label: hero.stat4Label },
          ].map((stat, i) => `
            <div class="bg-se-dark/90 px-6 py-5 text-center group hover:bg-se-surface transition-colors duration-300"
                 role="listitem">
              <div class="font-display font-bold text-2xl md:text-3xl text-se-cyan mb-1
                          group-hover:scale-110 transition-transform duration-300 origin-center"
                   data-stat-value="${stat.val}">
                ${stat.val}
              </div>
              <div class="text-xs text-se-muted tracking-wide uppercase font-mono">${stat.label}</div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal reveal-delay-5"
         aria-hidden="true">
      <span class="text-xs text-se-faint font-mono tracking-widest uppercase">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-se-cyan to-transparent animate-pulse"></div>
    </div>

  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: SERVICES
   ═════════════════════════════════════════════════════════════ */
function renderServices() {
  const svc = getSection('services');

  return `
  <section id="services" class="py-section bg-se-dark relative overflow-hidden"
           aria-labelledby="services-heading">

    <!-- Background grid pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true"
         style="background-image:linear-gradient(var(--se-border) 1px,transparent 1px),linear-gradient(90deg,var(--se-border) 1px,transparent 1px);background-size:60px 60px;"></div>

    <div class="section-container relative z-10">

      <!-- Section Header -->
      <div class="mb-16 reveal">
        <div class="section-tag mb-4">${svc.tag}</div>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 id="services-heading" class="section-heading max-w-xl">${svc.heading}</h2>
          <p class="text-se-muted text-sm max-w-sm leading-relaxed hidden md:block">${svc.subheading}</p>
        </div>
        <p class="text-se-muted mt-4 md:hidden leading-relaxed">${svc.subheading}</p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
           role="list" aria-label="Our services">
        ${svc.items.map((item, i) => `
          <article class="se-card group reveal reveal-delay-${(i % 3) + 1}"
                   role="listitem"
                   aria-labelledby="service-${i}-title">

            <!-- Icon -->
            <div class="service-icon-wrap mb-6 text-se-cyan">
              ${icons.get(item.icon, 'w-6 h-6')}
            </div>

            <!-- Title -->
            <h3 id="service-${i}-title" class="font-display font-semibold text-lg text-se-white mb-3
                        group-hover:text-se-cyan transition-colors duration-300">
              ${item.title}
            </h3>

            <!-- Description -->
            <p class="text-se-muted text-sm leading-relaxed mb-6">${item.description}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              ${item.tags.map(tag => `
                <span class="px-2.5 py-1 text-xs font-mono text-se-cyan/80 bg-se-cyan/5 border border-se-cyan/20 rounded-sm"
                      role="listitem">${tag}</span>
              `).join('')}
            </div>

          </article>
        `).join('')}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: ABOUT
   ═════════════════════════════════════════════════════════════ */
function renderAbout() {
  const about = getSection('about');

  return `
  <section id="about" class="py-section bg-se-surface relative overflow-hidden"
           aria-labelledby="about-heading">

    <!-- Decorative glow orbs -->
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(circle,rgba(0,212,255,0.08) 0%,transparent 70%);transform:translate(30%,-30%);"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(circle,rgba(232,33,74,0.06) 0%,transparent 70%);transform:translate(-30%,30%);"></div>

    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left: Copy -->
        <div>
          <div class="section-tag mb-4 reveal">${about.tag}</div>
          <h2 id="about-heading" class="section-heading mb-8 reveal reveal-delay-1">${about.heading}</h2>

          <div class="space-y-6 mb-10">
            <p class="text-se-silver leading-relaxed reveal reveal-delay-2">${about.paragraph1}</p>
            <p class="text-se-silver leading-relaxed reveal reveal-delay-3">${about.paragraph2}</p>
          </div>

          <!-- Pull Quote -->
          <blockquote class="relative pl-6 border-l-2 border-se-cyan py-2 mb-10 reveal reveal-delay-4"
                      aria-label="Company philosophy quote">
            <p class="text-se-white font-display font-medium text-lg italic leading-snug">
              ${about.quote}
            </p>
          </blockquote>

          <!-- Value Props -->
          <div class="space-y-4" role="list" aria-label="Our value propositions">
            ${about.valueProps.map((vp, i) => `
              <div class="flex items-start gap-4 reveal reveal-delay-${i+1}" role="listitem">
                <div class="flex-shrink-0 w-6 h-6 text-se-cyan mt-0.5">${icons.get('checkCircle', 'w-5 h-5')}</div>
                <div>
                  <h4 class="font-display font-semibold text-se-white mb-1">${vp.title}</h4>
                  <p class="text-se-muted text-sm leading-relaxed">${vp.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Atomic Visual -->
        <div class="relative flex items-center justify-center reveal reveal-delay-2" aria-hidden="true">
          <div class="relative w-80 h-80 md:w-96 md:h-96">
            <!-- Atomic orbit rings with animation -->
            <!-- Ring 1 -->
            <div class="absolute inset-0 rounded-full border border-se-cyan/20 animate-spin"
                 style="animation-duration:20s;"></div>
            <!-- Ring 2 (tilted) -->
            <div class="absolute inset-4 rounded-full border border-se-cyan/15 animate-spin"
                 style="animation-duration:15s;animation-direction:reverse;transform:rotateX(75deg);"></div>
            <!-- Ring 3 -->
            <div class="absolute inset-8 rounded-full border border-se-red/20 animate-spin"
                 style="animation-duration:12s;"></div>

            <!-- Orbiting dots -->
            <div class="absolute inset-0">
              <div class="absolute w-2 h-2 rounded-full bg-se-cyan animate-spin"
                   style="top:0;left:50%;transform:translateX(-50%);animation-duration:8s;
                          box-shadow:0 0 10px var(--se-cyan);">
              </div>
            </div>
            <div class="absolute inset-0">
              <div class="absolute w-2 h-2 rounded-full bg-se-red animate-spin"
                   style="top:50%;right:0;transform:translateY(-50%);animation-duration:12s;animation-direction:reverse;
                          box-shadow:0 0 10px var(--se-red);">
              </div>
            </div>

            <!-- Center nucleus -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 rounded-full bg-se-cyan/10 border border-se-cyan/30 flex items-center justify-center animate-glow-pulse">
                  <div class="text-se-cyan">${icons.get('atom', 'w-10 h-10')}</div>
                </div>
                <!-- Atomic number label -->
                <div class="absolute -top-10 left-1/2 -translate-x-1/2 text-center">
                  <div class="font-mono text-xs text-se-muted">34</div>
                  <div class="font-display font-bold text-se-cyan">Se</div>
                </div>
                <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div class="font-mono text-xs text-se-muted text-center">Selenium</div>
                </div>
              </div>
            </div>

            <!-- Background glow -->
            <div class="absolute inset-0 rounded-full"
                 style="background:radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%);"></div>
          </div>
        </div>

      </div>
    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: TECH STACK
   ═════════════════════════════════════════════════════════════ */
function renderTechStack() {
  const ts = getSection('techStack');

  return `
  <section id="tech-stack" class="py-section bg-se-dark relative overflow-hidden"
           aria-labelledby="tech-heading">

    <!-- Top fade from previous section -->
    <div class="absolute top-0 inset-x-0 h-24 bg-fade-up-dark pointer-events-none" aria-hidden="true"></div>

    <div class="section-container relative z-10">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="section-tag mb-4 justify-center">${ts.tag}</div>
        <h2 id="tech-heading" class="section-heading mb-4">${ts.heading}</h2>
        <p class="section-subheading mx-auto text-center">${ts.subheading}</p>
      </div>

      <!-- Tech Categories -->
      <div class="space-y-12" role="list" aria-label="Technology categories">
        ${ts.categories.map((cat, ci) => `
          <div class="reveal reveal-delay-${ci + 1}" role="listitem">
            <!-- Category label -->
            <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-se-muted mb-5 flex items-center gap-3">
              <span class="w-6 h-px bg-se-border inline-block"></span>
              ${cat.name}
              <span class="flex-1 h-px bg-se-border inline-block"></span>
            </h3>

            <!-- Tech badges -->
            <div class="flex flex-wrap gap-3" role="list" aria-label="${cat.name} technologies">
              ${cat.items.map(item => `
                <div class="tech-badge" role="listitem">
                  <div class="w-1.5 h-1.5 rounded-full bg-se-cyan/60"></div>
                  <span class="font-mono text-sm text-se-silver">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: PROCESS
   ═════════════════════════════════════════════════════════════ */
function renderProcess() {
  const proc = getSection('process');

  return `
  <section id="process" class="py-section bg-se-surface relative overflow-hidden"
           aria-labelledby="process-heading">

    <div class="section-container relative z-10">

      <!-- Header -->
      <div class="mb-16 reveal">
        <div class="section-tag mb-4">${proc.tag}</div>
        <h2 id="process-heading" class="section-heading mb-4">${proc.heading}</h2>
        <p class="section-subheading">${proc.subheading}</p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
           role="list" aria-label="Process steps">
        ${proc.steps.map((step, i) => `
          <div class="process-step reveal reveal-delay-${i + 1}" role="listitem">

            <!-- Step Number -->
            <div class="flex-shrink-0">
              <div class="process-step-number" aria-label="Step ${step.number}">${step.number}</div>
            </div>

            <!-- Step Content -->
            <div class="pt-1">
              <h3 class="font-display font-semibold text-lg text-se-white mb-3">${step.title}</h3>
              <p class="text-se-muted text-sm leading-relaxed">${step.desc}</p>

              <!-- Connector line (not last item) -->
              ${i < proc.steps.length - 1 ? `
                <div class="mt-6 h-px bg-gradient-to-r from-se-cyan/20 to-transparent hidden md:block" aria-hidden="true"></div>
              ` : ''}
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: TESTIMONIALS
   ═════════════════════════════════════════════════════════════ */
function renderTestimonials() {
  const test = getSection('testimonials');

  return `
  <section id="testimonials" class="py-section bg-se-dark relative overflow-hidden"
           aria-labelledby="testimonials-heading">

    <!-- Glow background accents -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(ellipse 60% 40% at 50% 50%,rgba(0,212,255,0.04) 0%,transparent 70%);"></div>

    <div class="section-container relative z-10">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="section-tag mb-4 justify-center">${test.tag}</div>
        <h2 id="testimonials-heading" class="section-heading">${test.heading}</h2>
      </div>

      <!-- Testimonial Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6"
           role="list" aria-label="Client testimonials">
        ${test.items.map((item, i) => `
          <article class="testimonial-card reveal reveal-delay-${i + 1}"
                   role="listitem"
                   aria-labelledby="testimonial-${i}">

            <!-- Quote Icon -->
            <div class="text-se-cyan/30 mb-6">${icons.get('quote', 'w-8 h-8')}</div>

            <!-- Stars -->
            <div class="flex gap-1 mb-4" aria-label="5 star rating" role="img">
              ${[...Array(5)].map(() => `<span class="text-se-cyan/70">${icons.get('star', 'w-4 h-4')}</span>`).join('')}
            </div>

            <!-- Quote Text -->
            <blockquote>
              <p class="testimonial-quote" id="testimonial-${i}">"${item.quote}"</p>
            </blockquote>

            <!-- Author -->
            <div class="testimonial-author">
              <!-- Avatar initial -->
              <div class="w-10 h-10 rounded-sm bg-se-cyan/10 border border-se-cyan/20 flex items-center justify-center
                          font-display font-bold text-se-cyan text-sm flex-shrink-0"
                   aria-hidden="true">
                ${item.initial}
              </div>
              <div>
                <cite class="font-display font-semibold text-se-white text-sm not-italic">${item.name}</cite>
                <p class="text-se-muted text-xs">${item.role}</p>
              </div>
            </div>

          </article>
        `).join('')}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: CONTACT
   ═════════════════════════════════════════════════════════════ */
function renderContact() {
  const contact = getSection('contact');

  return `
  <section id="contact" class="py-section bg-se-surface relative overflow-hidden"
           aria-labelledby="contact-heading">

    <!-- Background accent -->
    <div class="absolute top-0 right-0 w-96 h-96 pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(circle,rgba(232,33,74,0.06) 0%,transparent 70%);transform:translate(30%,-20%);"></div>

    <div class="section-container relative z-10">

      <!-- Header -->
      <div class="mb-16 reveal">
        <div class="section-tag mb-4">${contact.tag}</div>
        <h2 id="contact-heading" class="section-heading mb-4">${contact.heading}</h2>
        <p class="section-subheading">${contact.subheading}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        <!-- Contact Form (3 cols) -->
        <div class="lg:col-span-3 reveal reveal-delay-1">
          <form id="contact-form" novalidate
                class="space-y-6"
                aria-label="Contact form">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Name -->
              <div class="form-group">
                <label for="contact-name" class="form-label">${contact.nameLabel}</label>
                <input type="text" id="contact-name" name="name" required
                       class="form-input" placeholder="${contact.namePlaceholder}"
                       autocomplete="name"
                       aria-required="true">
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="contact-email" class="form-label">${contact.emailLabel}</label>
                <input type="email" id="contact-email" name="email" required
                       class="form-input" placeholder="${contact.emailPlaceholder}"
                       autocomplete="email"
                       aria-required="true">
              </div>
            </div>

            <!-- Company -->
            <div class="form-group">
              <label for="contact-company" class="form-label">${contact.companyLabel}</label>
              <input type="text" id="contact-company" name="company"
                     class="form-input" placeholder="${contact.companyPlaceholder}"
                     autocomplete="organization">
            </div>

            <!-- Message -->
            <div class="form-group">
              <label for="contact-message" class="form-label">${contact.messageLabel}</label>
              <textarea id="contact-message" name="message" required
                        class="form-textarea" placeholder="${contact.messagePlaceholder}"
                        aria-required="true" rows="5"></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" id="contact-submit" class="btn-primary w-full justify-center" aria-label="${contact.submitBtn}">
              <span id="contact-submit-text">${contact.submitBtn}</span>
              <span id="contact-submit-icon">${icons.get('send', 'w-4 h-4')}</span>
            </button>

            <!-- Success message (hidden by default) -->
            <div id="contact-success" class="hidden flex items-center gap-3 p-4 rounded-sm bg-se-cyan/10 border border-se-cyan/30 text-se-cyan text-sm"
                 role="alert" aria-live="polite">
              ${icons.get('checkCircle', 'w-5 h-5')}
              <span>${contact.submitSuccess}</span>
            </div>

          </form>
        </div>

        <!-- Contact Info (2 cols) -->
        <aside class="lg:col-span-2 reveal reveal-delay-2" aria-label="Contact information">
          <div class="space-y-6">
            ${contact.info.map(item => `
              <div class="flex items-start gap-4 group">
                <div class="flex-shrink-0 w-10 h-10 rounded-sm bg-se-surface border border-se-border
                            flex items-center justify-center text-se-cyan
                            group-hover:border-se-cyan/40 group-hover:bg-se-cyan/10
                            transition-all duration-300">
                  ${icons.getContactIcon(item.label)}
                </div>
                <div>
                  <p class="form-label mb-1">${item.label}</p>
                  <p class="text-se-silver text-sm">${item.value}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Social Links -->
          <div class="mt-10 pt-8 border-t border-se-border">
            <p class="form-label mb-4">Follow Us</p>
            <div class="flex gap-4" role="list" aria-label="Social media links">
              ${[
                { icon: 'linkedin', label: 'LinkedIn', href: '#' },
                { icon: 'instagram', label: 'Instagram', href: '#' },
                { icon: 'twitter', label: 'X (Twitter)', href: '#' },
              ].map(social => `
                <a href="${social.href}" rel="noopener noreferrer" target="_blank"
                   class="w-10 h-10 rounded-sm border border-se-border bg-se-surface flex items-center justify-center
                          text-se-muted hover:text-se-cyan hover:border-se-cyan/40 hover:bg-se-cyan/10
                          transition-all duration-300"
                   aria-label="Visit our ${social.label}" role="listitem">
                  ${icons.get(social.icon, 'w-4 h-4')}
                </a>
              `).join('')}
            </div>
          </div>

        </aside>

      </div>
    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: FOOTER
   ═════════════════════════════════════════════════════════════ */
function renderFooter() {
  const footer = getSection('footer');
  const nav = getSection('nav');

  return `
  <footer class="bg-se-void border-t border-se-border" role="contentinfo">
    <div class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Brand Column -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 relative">
              <div class="absolute inset-0 rounded-full border border-se-cyan/30"></div>
              <div class="absolute inset-1 rounded-full border border-se-cyan/15"></div>
              <div class="absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;border-radius:50%;background:var(--se-cyan);box-shadow:0 0 8px var(--se-cyan);"></div>
            </div>
            <span class="font-display font-bold text-lg text-se-white">
              Se<span class="text-se-cyan">lenium</span>
            </span>
          </div>
          <p class="text-se-muted text-sm leading-relaxed max-w-xs">${footer.tagline}</p>

          <!-- Atomic number badge -->
          <div class="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-se-border text-xs font-mono text-se-muted">
            <span class="text-se-cyan">Se</span>
            <span>·</span>
            <span>Atomic No. 34</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="md:col-span-1" aria-label="Footer navigation">
          <h3 class="form-label mb-5">Navigation</h3>
          <ul class="space-y-3" role="list">
            ${footer.links.map(link => `
              <li role="listitem">
                <a href="${link.href}" class="text-se-muted text-sm hover:text-se-cyan transition-colors duration-300">
                  ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </nav>

        <!-- Legal / Contact Column -->
        <div class="md:col-span-1">
          <h3 class="form-label mb-5">Legal</h3>
          <ul class="space-y-3 mb-8" role="list">
            ${footer.legalLinks.map(link => `
              <li role="listitem">
                <a href="${link.href}" class="text-se-muted text-sm hover:text-se-cyan transition-colors duration-300">
                  ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>

          <!-- Language indicator -->
          <div class="text-xs font-mono text-se-faint flex items-center gap-2">
            ${icons.get('globe', 'w-3 h-3')}
            <span>${currentLang === 'id' ? 'Bahasa Indonesia' : 'English'}</span>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-se-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p class="text-se-faint text-xs">${footer.copyright}</p>
        <p class="text-se-faint text-xs font-mono">
          Built with precision. Engineered for scale.
        </p>
      </div>

    </div>
  </footer>`;
}

/* ═════════════════════════════════════════════════════════════
   FULL PAGE RENDER
   ═════════════════════════════════════════════════════════════ */
function renderPage() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNav()}
    <main id="main-content">
      ${renderHero()}
      ${renderServices()}
      ${renderAbout()}
      ${renderTechStack()}
      ${renderProcess()}
      ${renderTestimonials()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  // Mount all behaviors AFTER DOM is set
  mountNavBehavior();
  mountHeroCanvas();
  mountScrollReveal();
  mountLangToggle();
  mountContactForm();
  mountMobileMenu();
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: NAVBAR (scroll-aware, transparent → solid)
   ═════════════════════════════════════════════════════════════ */
function mountNavBehavior() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const updateNavStyle = () => {
    const scrolled = window.scrollY > 60;
    if (scrolled) {
      navbar.classList.add('glass-panel', 'shadow-nav');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('glass-panel', 'shadow-nav');
    }
    navbar.dataset.scrolled = scrolled;
  };

  window.addEventListener('scroll', updateNavStyle, { passive: true });
  updateNavStyle(); // Run on mount

  // Active section highlighting via IntersectionObserver
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active',
              link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: HERO CANVAS PARTICLE SYSTEM
   Renders animated bioluminescent particle network
   ═════════════════════════════════════════════════════════════ */
function mountHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Particle configuration
  const config = {
    count:        80,      // Number of particles
    baseRadius:   1.5,     // Base particle radius (px)
    speed:        0.3,     // Max speed
    connectionDist: 140,   // Max distance to draw connection lines
    primaryColor: [0, 212, 255],    // Cyan [R,G,B]
    secondaryColor: [232, 33, 74],  // Red (sparse)
    secondaryRatio: 0.15,           // 15% particles are red
  };

  let particles = [];
  let animFrameId;
  let W, H;

  /** Resize canvas to fill its container */
  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
  };

  /** Create particle pool */
  const createParticles = () => {
    particles = Array.from({ length: config.count }, () => {
      const isSecondary = Math.random() < config.secondaryRatio;
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        r:  config.baseRadius + Math.random() * 1.5,
        alpha: 0.3 + Math.random() * 0.5,
        color: isSecondary ? config.secondaryColor : config.primaryColor,
        pulse: Math.random() * Math.PI * 2, // Phase offset for pulse
      };
    });
  };

  /** Main animation loop */
  const animate = () => {
    ctx.clearRect(0, 0, W, H);

    const now = Date.now() * 0.001;

    // Update and paint particles
    particles.forEach(p => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // Pulsing alpha
      const pulseAlpha = p.alpha + Math.sin(now + p.pulse) * 0.15;

      // Draw particle
      const [r, g, b] = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${pulseAlpha})`;
      ctx.fill();

      // Soft glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      grad.addColorStop(0, `rgba(${r},${g},${b},${pulseAlpha * 0.3})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    // Draw connection lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.connectionDist) {
          const opacity = (1 - dist / config.connectionDist) * 0.15;
          // Use the color of the first particle for the line
          const [r, g, b2] = a.color;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${r},${g},${b2},${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animFrameId = requestAnimationFrame(animate);
  };

  // Initialize
  resize();
  createParticles();
  animate();

  // Handle resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(animFrameId);
      resize();
      createParticles();
      animate();
    }, 200);
  }, { passive: true });
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: SCROLL REVEAL (Intersection Observer)
   ═════════════════════════════════════════════════════════════ */
function mountScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: LANGUAGE TOGGLE
   ═════════════════════════════════════════════════════════════ */
function mountLangToggle() {
  const langBtns = document.querySelectorAll('[data-lang]');

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return; // No change needed

      // 1. Persist to localStorage
      localStorage.setItem('se_lang', lang);

      // 2. Update global state
      currentLang = lang;

      // 3. Update <html lang> attribute for accessibility
      document.documentElement.lang = lang === 'id' ? 'id' : 'en';

      // 4. Update page title
      document.title = lang === 'id'
        ? 'Selenium Digital Consultant — Konsultan IT Enterprise'
        : 'Selenium Digital Consultant — Enterprise IT Consulting';

      // 5. Re-render the full page
      renderPage();
    });
  });
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: MOBILE MENU
   ═════════════════════════════════════════════════════════════ */
function mountMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu    = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (!menuBtn || !menu) return;

  let isOpen = false;

  const toggle = (force) => {
    isOpen = force !== undefined ? force : !isOpen;
    menu.classList.toggle('hidden', !isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuIcon.innerHTML = isOpen ? icons.get('close', 'w-5 h-5') : icons.get('menu', 'w-5 h-5');
  };

  menuBtn.addEventListener('click', () => toggle());

  // Close on mobile nav link click
  menu.querySelectorAll('.mobile-nav-link, .btn-primary').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggle(false);
    }
  });
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: CONTACT FORM (client-side only simulation)
   ═════════════════════════════════════════════════════════════ */
function mountContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn  = document.getElementById('contact-submit');
    const submitText = document.getElementById('contact-submit-text');
    const submitIcon = document.getElementById('contact-submit-icon');
    const successMsg = document.getElementById('contact-success');

    // Loading state
    submitBtn.disabled = true;
    submitText.textContent = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
    submitIcon.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>`;

    // Simulate async API call
    setTimeout(() => {
      submitBtn.disabled = false;
      submitText.textContent = T('contact.submitBtn');
      submitIcon.innerHTML = icons.get('send', 'w-4 h-4');
      successMsg.classList.remove('hidden');
      successMsg.classList.add('flex');
      form.reset();

      // Hide success after 6 seconds
      setTimeout(() => {
        successMsg.classList.add('hidden');
        successMsg.classList.remove('flex');
      }, 6000);
    }, 1800);
  });
}

/* ═════════════════════════════════════════════════════════════
   INIT
   ═════════════════════════════════════════════════════════════ */

// Set initial <html> lang attribute
document.documentElement.lang = currentLang === 'id' ? 'id' : 'en';

// Set dynamic page title
document.title = currentLang === 'id'
  ? 'Selenium Digital Consultant — Konsultan IT Enterprise'
  : 'Selenium Digital Consultant — Enterprise IT Consulting';

// Boot
renderPage();
