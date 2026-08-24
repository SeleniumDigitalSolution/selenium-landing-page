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

import "./style.css";
import { translations, detectLanguage, t } from "./translations.js";
import { icons } from "./icons.js";
import { getRoute, initRouter } from "./router.js";
import {
  renderServiceDetailPage,
  renderServiceNotFoundPage,
} from "./pages/serviceDetailPage.js";

/* ═════════════════════════════════════════════════════════════
   GLOBAL STATE
   ═════════════════════════════════════════════════════════════ */
let currentLang = detectLanguage();
const WHATSAPP_NUMBER = "6282253210449";
const HOME_META = {
  en: {
    title: "Selenium Digital Consultant — Enterprise IT Consulting",
    description:
      "Selenium Digital Consultant helps businesses in Pontianak build websites, applications, software, automation, and practical IT support.",
  },
  id: {
    title: "Selenium Digital Consultant — Konsultan IT Pontianak",
    description:
      "Selenium Digital Consultant adalah konsultan IT Pontianak untuk jasa website, aplikasi, perangkat lunak, otomasi, dan support bisnis.",
  },
};

/* ═════════════════════════════════════════════════════════════
   HELPER UTILITIES
   ═════════════════════════════════════════════════════════════ */

/** Shorthand translator bound to current language */
const T = (key) => t(currentLang, key);

/** Safe array-path getter for complex nested translation values */
const TA = (key) => t(currentLang, key); // Arrays returned as-is from translations object

/** Renders translation array items for a section */
const getSection = (key) => {
  const keys = key.split(".");
  let result = translations[currentLang];
  for (const k of keys) {
    if (!result) break;
    result = result[k];
  }
  if (result === undefined || result === null) {
    let fallback = translations["id"];
    for (const k of keys) {
      if (!fallback) return null;
      fallback = fallback[k];
    }
    return fallback;
  }
  return result;
};

const buildWhatsAppUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const setDocumentMeta = (title, description) => {
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDescription = document.querySelector(
    'meta[property="og:description"]',
  );
  if (ogDescription) ogDescription.setAttribute("content", description);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", title);

  const twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  );
  if (twitterDescription) {
    twitterDescription.setAttribute("content", description);
  }
};

const getServiceBySlug = (slug) =>
  getSection("services")?.items.find((item) => item.slug === slug);

/* ═════════════════════════════════════════════════════════════
   SECTION: NAVIGATION
   ═════════════════════════════════════════════════════════════ */
function renderNav() {
  const nav = getSection("nav");
  const links = ["services", "about", "portfolio", "contact"];
  const waUrl = buildWhatsAppUrl("Halo, saya ingin konsultasi");
  const route = getRoute();
  const sectionHref = (key) => {
    if (key === "about") return "/about";
    const sectionId = key.replace("techStack", "tech-stack");
    return route.name === "home" ? `#${sectionId}` : `/#${sectionId}`;
  };

  return `
  <nav id="navbar" role="navigation" aria-label="Main navigation"
       class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
       data-scrolled="false">
    <div class="section-container">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Brand / Logo -->
        <a href="/" data-router-link id="nav-brand" class="flex items-center gap-3 group" aria-label="Selenium Digital Consultant">
          <div class="w-8 h-8 relative">
            <!-- Atomic orbit logo mark -->
            <div class="absolute inset-0 rounded-full border border-se-cyan/40 animate-spin" style="animation-duration:8s;"></div>
            <div class="absolute inset-1 rounded-full border border-se-cyan/20 animate-spin" style="animation-duration:5s;animation-direction:reverse;"></div>
            <div class="absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;border-radius:50%;background:var(--primary);box-shadow:0 0 8px rgba(10,100,188,0.5);"></div>
          </div>
          <span class="footer-brand text-lg tracking-tight">
            Se<span>lenium</span>
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex items-center gap-8" role="list">
          ${links
            .map(
              (key) => `
            <li>
              <a href="${sectionHref(key)}"
                 data-router-link
                 class="nav-link"
                 aria-label="Navigate to ${nav[key]}">
                ${nav[key]}
              </a>
            </li>
          `,
            )
            .join("")}
        </ul>

        <!-- Right Controls -->
        <div class="flex items-center gap-4">
          <!-- Language Toggle -->
          <div class="flex items-center gap-1 p-1 rounded-md border border-[var(--border)] bg-[var(--surface-2)]" role="group" aria-label="Language selector">
            <button id="lang-en" class="lang-btn ${currentLang === "en" ? "active" : ""}"
                    data-lang="en" aria-pressed="${currentLang === "en"}" aria-label="Switch to English">
              EN
            </button>
            <button id="lang-id" class="lang-btn ${currentLang === "id" ? "active" : ""}"
                    data-lang="id" aria-pressed="${currentLang === "id"}" aria-label="Switch to Indonesian">
              ID
            </button>
          </div>

          <!-- Dark Mode Toggle -->
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark mode">
            <span id="theme-toggle-icon" style="display:flex;align-items:center;justify-content:center;">
              ${document.documentElement.getAttribute('data-theme') === 'dark'
                ? icons.get('sun', 'w-4 h-4')
                : icons.get('moon', 'w-4 h-4')}
            </span>
          </button>

          <!-- CTA Button (Desktop) -->
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex btn-primary btn-sm" id="nav-cta">
            ${nav.cta}
            ${icons.get("arrowRight", "w-4 h-4")}
          </a>

          <!-- Mobile Menu Toggle -->
          <button id="mobile-menu-btn" class="theme-toggle-btn lg:hidden"
                  aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
            <span id="mobile-menu-icon">${icons.get("menu", "w-5 h-5")}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu" class="lg:hidden hidden glass-panel border-t border-se-border" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div class="section-container py-6 flex flex-col gap-4">
        ${links
          .map(
            (key) => `
          <a href="${sectionHref(key)}"
             data-router-link
             class="mobile-nav-link text-base font-medium py-3 border-b border-[var(--border)]"
             aria-label="Navigate to ${nav[key]}">
            ${nav[key]}
          </a>
        `,
          )
          .join("")}
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary mt-4 justify-center">
          ${nav.cta}
          ${icons.get("arrowRight", "w-4 h-4")}
        </a>
      </div>
    </div>
  </nav>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: HERO
   ═════════════════════════════════════════════════════════════ */
function renderHero() {
  const hero = getSection("hero");

  return `
  <section id="home" class="relative flex flex-col justify-center overflow-hidden"
           aria-labelledby="hero-headline" role="banner">

    <!-- Content -->
    <div class="section-container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
      <div class="max-w-4xl">
        <!-- Main Headline -->
        <h1 id="hero-headline" class="font-display tracking-tight mb-8 reveal reveal-delay-1"
            style="font-size:clamp(3rem,7vw,6.5rem);font-weight:800;line-height:1.15;">
          <span class="block pb-1">${hero.headline1}</span>
          <span class="block pb-1 text-gradient-primary">${hero.headline2}</span>
          <span class="block pb-1">${hero.headline3}</span>
        </h1>

        <!-- Subheadline -->
        <p class="section-subheading mb-12 reveal reveal-delay-2 max-w-2xl">
          ${hero.subheadline}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-20 reveal reveal-delay-3">
          <a href="#contact" class="btn-primary animate-glow-pulse" id="hero-cta-primary" aria-label="${hero.ctaPrimary}">
            ${hero.ctaPrimary}
            ${icons.get("arrowRight", "w-4 h-4")}
          </a>
          <a href="#services" class="btn-ghost" id="hero-cta-secondary" aria-label="${hero.ctaSecondary}">
            ${hero.ctaSecondary}
          </a>
        </div>

        <!-- Stats Bar -->
        <div class="stats-bar reveal reveal-delay-4" role="list" aria-label="Key statistics">
          ${[
            { val: hero.stat1Value, label: hero.stat1Label },
            { val: hero.stat2Value, label: hero.stat2Label },
            { val: hero.stat3Value, label: hero.stat3Label },
            { val: hero.stat4Value, label: hero.stat4Label },
          ]
            .map(
              (stat) => `
            <div class="stats-bar-item" role="listitem">
              <div class="stat-value" data-stat-value="${stat.val}">${stat.val}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `,
            )
            .join("")}
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal reveal-delay-5"
         aria-hidden="true">
      <span class="scroll-indicator">Scroll</span>
      <div class="scroll-indicator-line"></div>
    </div>

  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: SERVICES
   ═════════════════════════════════════════════════════════════ */
function renderServices() {
  const svc = getSection("services");
  const ctaLabel = svc.cta || "Tanya via WhatsApp";
  const detailLabel = svc.detailCta || "Lihat Detail";

  return `
  <section id="services" class="py-section relative overflow-hidden"
           aria-labelledby="services-heading">

    <div class="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
         style="background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:60px 60px;"></div>

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
        ${svc.items
          .map((item, i) => {
            const detailUrl = `/layanan/${item.slug}`;
            const waUrl = buildWhatsAppUrl(
              `Halo, saya tertarik dengan layanan ${item.title}`,
            );

            return `
          <article class="se-card flex flex-col h-full group reveal reveal-delay-${(i % 3) + 1}"
                   role="listitem"
                   aria-labelledby="service-${i}-title">

            <!-- Icon -->
            <div class="service-icon-wrap mb-6 text-se-cyan">
              ${icons.get(item.icon, "w-6 h-6")}
            </div>

            <!-- Title -->
            <h3 id="service-${i}-title" class="font-display font-semibold text-lg mb-3">
              <a href="${detailUrl}" data-router-link class="hover:text-se-cyan transition-colors">
                ${item.title}
              </a>
            </h3>

            <!-- Description -->
            <p class="text-sm leading-relaxed mb-6">${item.description}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
              ${item.tags
                .map(
                  (tag) => `
                <span class="px-2.5 py-1 text-xs font-mono text-se-cyan/80 bg-se-cyan/5 border border-se-cyan/20 rounded-sm"
                      role="listitem">${tag}</span>
              `,
                )
                .join("")}
            </div>

            <div class="mt-auto flex flex-col sm:flex-row gap-3">
              <a href="${detailUrl}"
                 data-router-link
                 class="btn-ghost btn-sm justify-center flex-1 min-w-0"
                 aria-label="${detailLabel}: ${item.title}">
                ${detailLabel}
              </a>

              <a href="${waUrl}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="btn-secondary btn-sm justify-center flex-1 min-w-0 text-center"
                 aria-label="${ctaLabel}: ${item.title}">
                ${ctaLabel}
              </a>
            </div>

          </article>
        `;
          })
          .join("")}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: CALL TO ACTION (CTA) / CONTACT
   ═════════════════════════════════════════════════════════════ */
function renderCTA() {
  const cta =  getSection("contact")
  const waUrl = buildWhatsAppUrl("Halo, saya ingin konsultasi");

  return `
  <section id="contact" class="py-20 relative overflow-hidden">
    <div class="section-container relative z-10">
      <div class="glass-panel rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md blur-[80px] rounded-full z-0 pointer-events-none"
             style="background:radial-gradient(circle,rgba(10,100,188,0.12) 0%,transparent 70%);"></div>

        <div class="relative z-10 flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-[var(--primary-tint)] flex items-center justify-center mb-6 border border-[var(--primary)]/20">
            ${typeof icons !== 'undefined' ? icons.get("messageCircle", "w-8 h-8 text-[var(--primary)]") : ''}
          </div>

          <h2 class="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            ${cta.title}
          </h2>

          <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            ${cta.description}
          </p>

          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center text-base md:text-lg py-3 px-8 shadow-lg transition-transform hover:-translate-y-1">
            ${cta.btnText || cta.cta || 'Consult Now'}
            ${typeof icons !== 'undefined' ? icons.get("arrowRight", "w-5 h-5 ml-2") : ''}
          </a>
        </div>

      </div>
    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: ABOUT
   ═════════════════════════════════════════════════════════════ */
function renderAbout() {
  const about = getSection("about");

  return `
  <section id="about" class="py-section relative overflow-hidden"
           aria-labelledby="about-heading">

    <!-- Decorative glow orbs -->
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(circle,rgba(10,100,188,0.07) 0%,transparent 70%);transform:translate(30%,-30%);"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(circle,rgba(13,148,136,0.05) 0%,transparent 70%);transform:translate(-30%,30%);"></div>

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
          <blockquote class="pull-quote py-2 mb-10 reveal reveal-delay-4"
                      aria-label="Company philosophy quote">
            <p class="font-display font-medium text-lg leading-snug">
              ${about.quote}
            </p>
          </blockquote>

          <!-- Value Props -->
          <div class="space-y-4" role="list" aria-label="Our value propositions">
            ${about.valueProps
              .map(
                (vp, i) => `
              <div class="flex items-start gap-4 reveal reveal-delay-${i + 1}" role="listitem">
                <div class="value-prop-icon flex-shrink-0 w-6 h-6 mt-0.5">${icons.get("checkCircle", "w-5 h-5")}</div>
                <div>
                  <h4 class="value-prop-title mb-1">${vp.title}</h4>
                  <p class="value-prop-desc leading-relaxed">${vp.desc}</p>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
          <a href="/about" data-router-link class="btn-ghost inline-flex mt-10 reveal reveal-delay-4">
            ${about.cta}
            ${icons.get("arrowRight", "w-4 h-4")}
          </a>
        </div>

        <!-- Right: Team photo; a real team photo can replace this placeholder later. -->
        <figure class="team-photo-card reveal reveal-delay-2">
          <div class="team-photo-wrap aspect-[4/3]">
            <img src="/team-placeholder.png" alt="${about.teamImageAlt}" loading="lazy" width="600" height="450">
          </div>
          <figcaption>${about.photoCaption}</figcaption>
        </figure>

      </div>
    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: PROJECTS
   ═════════════════════════════════════════════════════════════ */
function renderProjects() {
  const proj = getSection("portfolio");

  return `
  <section id="portfolio" class="py-section relative overflow-hidden"
           aria-labelledby="projects-heading">

    <!-- Glow background accents -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background:radial-gradient(ellipse 60% 40% at 50% 50%,rgba(10,100,188,0.05) 0%,transparent 70%);"></div>

    <div class="section-container relative z-10">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="section-tag mb-4 justify-center">${proj.tag}</div>
        <h2 id="projects-heading" class="section-heading">${proj.heading}</h2>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6"
           role="list" aria-label="Featured projects">
        ${proj.items
          .map(
            (item, i) => `
          <article class="se-card flex flex-col h-full group reveal reveal-delay-${i + 1}"
                   role="listitem"
                   aria-labelledby="project-${i}">

            <div class="mb-4">
              <h3 id="project-${i}" class="font-display font-semibold text-lg mb-1">${item.title}</h3>
              <p class="text-se-cyan text-sm font-mono">${item.client}</p>
            </div>

            <p class="text-sm leading-relaxed mb-6 flex-grow">${item.description}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-auto" role="list" aria-label="Technologies used">
              ${item.tags
                .map(
                  (tag) => `
                <span class="px-2.5 py-1 text-xs font-mono text-se-cyan/80 bg-se-cyan/5 border border-se-cyan/20 rounded-sm"
                      role="listitem">${tag}</span>
              `,
                )
                .join("")}
            </div>

            <!-- Visit Project Button (only rendered when url is set) -->
            ${
              item.url
                ? `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer"
               class="w-full mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold
                      text-se-cyan border border-se-cyan/40 rounded-sm bg-se-cyan/5
                      hover:bg-se-cyan/15 hover:border-se-cyan transition-all duration-300 self-start"
               aria-label="Visit ${item.title} project">
              ${icons.get("arrowRight", "w-max h-3")}
              ${item.text}
            </a>`
                : ""
            }

          </article>
        `,
          )
          .join("")}
      </div>

    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: CATALOG
   ═════════════════════════════════════════════════════════════ */

function renderCatalog() {
  const cat = getSection("catalog");

  return `
    <section id="catalog" class="py-section relative overflow-hidden"
             aria-labelledby="catalog-heading">
      <div class="section-container relative z-10">

        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <div class="section-tag mb-4 justify-center">${cat.tag}</div>
          <h2 id="catalog-heading" class="section-heading mb-4">${cat.heading}</h2>
          <p class="section-subheading mx-auto text-center">${cat.subheading}</p>
        </div>

        <!-- Catalog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 reveal reveal-delay-1">
          ${cat.items
            .map((item) => {
              const waUrl = buildWhatsAppUrl(
                `Halo, saya tertarik dengan katalog: ${item.title}`,
              );

              return `
            <div class="se-card flex flex-col h-full group hover:border-se-cyan/40 transition-all duration-300">
              <!-- Image Container -->
              <div class="aspect-square w-full overflow-hidden mb-6">
                <img src="${item.image}" alt="${item.title}"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy">
              </div>

              <!-- Content -->
              <div class="flex flex-col flex-1 px-2">
                <h3 class="font-display font-bold text-xl mb-2">${item.title}</h3>
                <p class="text-sm mb-6 flex-1">${item.description}</p>

                <a href="${waUrl}" target="_blank" rel="noopener noreferrer"
                   class="w-full mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold
                          text-se-cyan border border-se-cyan/40 rounded-sm bg-se-cyan/5
                          hover:bg-se-cyan/15 hover:border-se-cyan transition-all duration-300 self-start">
                  ${cat.cta}
                </a>
              </div>
            </div>
          `;
            })
            .join("")}
        </div>

      </div>
    </section>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: FOOTER
   ═════════════════════════════════════════════════════════════ */
function renderFooter() {
  const footer = getSection("footer");
  const nav = getSection("nav");

  return `
  <footer role="contentinfo">
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
            <span class="footer-brand text-lg">
              Se<span>lenium</span>
            </span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs">${footer.tagline}</p>

          <!-- Atomic number badge -->
          <div class="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-se-border text-xs font-mono">
            <span class="text-se-cyan">Se</span>
            <span>·</span>
            <span>Atomic No. 34</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="md:col-span-1" aria-label="Footer navigation">
          <h3 class="form-label mb-5">Navigation</h3>
          <ul class="space-y-3" role="list">
            ${footer.links
              .map(
                (link) => `
              <li role="listitem">
                <a href="${link.href}" data-router-link class="text-sm hover:text-se-cyan transition-colors duration-300">
                  ${link.label}
                </a>
              </li>
            `,
              )
              .join("")}
          </ul>
        </nav>

        <!-- Legal / Contact Column -->
        <div class="md:col-span-1">
          <h3 class="form-label mb-5">Legal</h3>
          <ul class="space-y-3 mb-8" role="list">
            ${footer.legalLinks
              .map(
                (link) => `
              <li role="listitem">
                <a href="${link.href}" class="text-sm hover:text-se-cyan transition-colors duration-300">
                  ${link.label}
                </a>
              </li>
            `,
              )
              .join("")}
          </ul>

          <!-- Language indicator -->
          <div class="text-xs font-mono flex items-center gap-2">
            ${icons.get("globe", "w-3 h-3")}
            <span>${currentLang === "id" ? "Bahasa Indonesia" : "English"}</span>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-se-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p class="text-xs">${footer.copyright}</p>
          <p class="text-xs">
            Built with precision. Engineered for scale.
          </p>
      </div>

    </div>
  </footer>`;
}

/* ═════════════════════════════════════════════════════════════
   SECTION: WHATSAPP FAB
   ═════════════════════════════════════════════════════════════ */
function renderWhatsAppFAB() {
  const waUrl = buildWhatsAppUrl("Halo, saya ingin konsultasi");

  return `
  <a href="${waUrl}" target="_blank" rel="noopener noreferrer"
     class="fixed bottom-6 right-6 z-[99] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center animate-pulse"
     aria-label="Contact us on WhatsApp">
    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>`;
}

/* ═════════════════════════════════════════════════════════════
   FULL PAGE RENDER
   ═════════════════════════════════════════════════════════════ */
/* ═════════════════════════════════════════════════════════════
   SECTION: PARTNERS (Client Logo Strip)
   ═════════════════════════════════════════════════════════════ */
function renderPartners() {
  const partners = getSection("partners");
  return `
  <section id="partners" class="py-12 border-y border-[var(--border)] bg-[var(--surface-2)]/50" aria-label="Our partners and clients">
    <div class="section-container">
      <h3 class="text-center text-xs font-mono uppercase tracking-wider text-se-muted mb-8">${partners.heading}</h3>
      <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10" role="list">
        ${partners.items.map(p => `
          <div class="flex items-center gap-3 px-6 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-se-cyan/40 transition-all duration-300 shadow-sm group" role="listitem">
            ${p.logo ? `
              <img src="${p.logo}" alt="${p.name} logo" class="h-7 w-auto max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" onerror="this.style.display='none';">
            ` : ''}
            <span class="text-sm font-semibold tracking-tight group-hover:text-se-cyan transition-colors">${p.name}</span>
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
  const testimonials = getSection("testimonials");

  return `
  <section id="testimonials" class="py-section relative overflow-hidden" aria-labelledby="testimonials-heading">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <div class="section-tag mb-4 justify-center">${testimonials.tag}</div>
        <h2 id="testimonials-heading" class="section-heading mb-4">${testimonials.heading}</h2>
        <p class="section-subheading mx-auto text-center">${testimonials.subheading}</p>
      </div>

      <!-- Testimonial Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Client testimonials">
        ${testimonials.items.map((item, i) => `
          <article class="testimonial-card group reveal reveal-delay-${(i % 3) + 1}" role="listitem">
            <blockquote class="testimonial-quote">
              <p>"${item.quote}"</p>
            </blockquote>
            <div class="testimonial-client">
              ${item.image
                ? `<img class="testimonial-avatar testimonial-photo" src="${item.image}" alt="Foto ${item.name}" loading="lazy" width="40" height="40">`
                : `<div class="testimonial-avatar" aria-hidden="true">${item.name.split(' ').map(n => n[0]).join('')}</div>`}
              <div class="testimonial-info">
                <h4>${item.name}</h4>
                <p>${item.role}, ${item.company}</p>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ═════════════════════════════════════════════════════════════
   FULL PAGE RENDER (HOMEPAGE)
   ═════════════════════════════════════════════════════════════ */
function renderPage() {
  setDocumentMeta(
    HOME_META[currentLang].title,
    HOME_META[currentLang].description,
  );

  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderNav()}
    <main id="main-content">
      ${renderHero()}
      ${renderPartners()}
      ${renderServices()} 
      ${renderAbout()}
      ${renderProjects()}
      ${renderTestimonials()}
      ${renderCTA()}
    </main>
    ${renderFooter()}
    ${renderWhatsAppFAB()}
  `;

  mountPageBehaviors();
}

function renderDetailRoute(slug) {
  const app = document.getElementById("app");
  const labels = getSection("services");
  const service = getServiceBySlug(slug);

  if (!service) {
    setDocumentMeta(
      `${labels.notFoundTitle} | Selenium Digital Consultant`,
      labels.notFoundDescription,
    );

    app.innerHTML = `
      ${renderNav()}
      <main id="main-content">
        ${renderServiceNotFoundPage({ labels })}
      </main>
      ${renderFooter()}
      ${renderWhatsAppFAB()}
    `;

    mountPageBehaviors();
    return;
  }

  setDocumentMeta(service.metaTitle, service.metaDescription);

  app.innerHTML = `
    ${renderNav()}
    <main id="main-content">
      ${renderServiceDetailPage({
        service,
        labels,
        icons,
        whatsappUrl: buildWhatsAppUrl(
          `Halo, saya tertarik dengan layanan ${service.title}`,
        ),
      })}
    </main>
    ${renderFooter()}
    ${renderWhatsAppFAB()}
  `;

  mountPageBehaviors();
}

function mountPageBehaviors() {
  mountNavBehavior();
  mountScrollReveal();
  mountLangToggle();
  mountMobileMenu();
  mountThemeToggle();
}

/* ═════════════════════════════════════════════════════════════
   DEDICATED ABOUT PAGE RENDER
   ═════════════════════════════════════════════════════════════ */
function renderAboutPage() {
  const app = document.getElementById("app");
  const ap = getSection("aboutPage");
  const about = getSection("about");

  app.innerHTML = `
    ${renderNav()}
    <main id="main-content">
      <!-- Hero -->
      <section class="about-page-hero py-24 relative overflow-hidden" aria-labelledby="about-hero-title">
        <div class="section-container relative z-10 text-center">
          <div class="section-tag mb-4 justify-center" style="color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.5);">${ap.eyebrow}</div>
          <h1 id="about-hero-title" class="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            ${ap.title}
          </h1>
        </div>
      </section>

      <!-- Our Story -->
      <section class="py-20 bg-[var(--surface)]" aria-labelledby="story-heading">
        <div class="section-container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-heading" class="section-heading mb-6">${ap.storyHeading}</h2>
              <p class="leading-relaxed mb-6 text-se-silver">${ap.storyParagraph1}</p>
              <p class="leading-relaxed mb-6 text-se-silver">${ap.storyParagraph2}</p>
              
              <!-- Company Quote -->
              <blockquote class="pull-quote py-2 mb-6">
                <p class="font-display font-medium text-lg leading-snug">
                  ${about.quote}
                </p>
              </blockquote>
            </div>
            
            <div class="team-photo-wrap aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <img src="/team-placeholder.png" alt="Tim Selenium Digital Consultant" loading="eager" width="600" height="450">
            </div>
          </div>
        </div>
      </section>

      <!-- Vision & Mission -->
      <section class="py-20 bg-[var(--surface-2)]" aria-labelledby="vision-heading">
        <div class="section-container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Vision -->
            <div class="se-card">
              <h3 id="vision-heading" class="font-display font-bold text-xl mb-4 text-gradient-primary">${ap.visionHeading}</h3>
              <p class="text-base leading-relaxed">${ap.visionText}</p>
            </div>
            <!-- Mission -->
            <div class="se-card">
              <h3 class="font-display font-bold text-xl mb-4 text-gradient-primary">${ap.missionHeading}</h3>
              <ul class="space-y-4" role="list">
                ${ap.missionItems.map((item, i) => `
                  <li class="flex gap-3 text-sm leading-relaxed" role="listitem">
                    <span class="text-se-cyan font-bold font-mono">${i + 1}.</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="py-20 bg-[var(--surface)]" aria-labelledby="values-heading">
        <div class="section-container">
          <div class="text-center mb-16">
            <h2 id="values-heading" class="section-heading">${ap.valuesHeading}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            ${ap.valuesItems.map((val, i) => `
              <div class="se-card" role="listitem">
                <div class="w-10 h-10 rounded-full bg-[var(--primary-tint)] flex items-center justify-center mb-6 text-se-cyan">
                  ${icons.get("checkCircle", "w-5 h-5")}
                </div>
                <h4 class="font-display font-semibold text-lg mb-3">${val.title}</h4>
                <p class="text-sm leading-relaxed">${val.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="py-20 bg-[var(--surface-2)]" aria-labelledby="team-heading">
        <div class="section-container">
          <div class="text-center mb-16">
            <h2 id="team-heading" class="section-heading mb-4">${ap.teamHeading}</h2>
            <p class="section-subheading mx-auto text-center">${ap.teamSubheading}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            ${ap.teamMembers.map((m, i) => {
              const initials = m.name
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map(n => n[0].toUpperCase())
                .join('');

              return `
              <div class="se-card flex flex-col items-center text-center h-full group hover:border-se-cyan/40 transition-all duration-300" role="listitem">
                <div class="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-se-cyan/30 bg-se-cyan/10 flex items-center justify-center relative shadow-sm">
                  ${m.image ? `
                    <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" loading="lazy">
                    <span class="w-full h-full hidden items-center justify-center text-se-cyan font-bold text-2xl font-mono">${initials}</span>
                  ` : `
                    <span class="w-full h-full flex items-center justify-center text-se-cyan font-bold text-2xl font-mono">${initials}</span>
                  `}
                </div>
                <h3 class="font-display font-bold text-base mb-1">${m.name}</h3>
                <p class="text-se-cyan text-xs font-mono mb-4 font-semibold">${m.role}</p>
                <p class="text-xs leading-relaxed text-se-silver flex-grow">${m.desc}</p>
              </div>
            `}).join('')}
          </div>
        </div>
      </section>

      ${renderCTA()}
    </main>
    ${renderFooter()}
    ${renderWhatsAppFAB()}
  `;

  mountPageBehaviors();
}

function syncScrollPosition() {
  const target = window.location.hash
    ? document.querySelector(window.location.hash)
    : null;

  if (target) {
    target.scrollIntoView({ block: "start" });
    return;
  }

  window.scrollTo({ top: 0 });
}

function renderCurrentRoute() {
  const route = getRoute();

  if (route.name === "home") {
    renderPage();
  } else if (route.name === "about") {
    setDocumentMeta(
      currentLang === "id"
        ? "Tentang Kami — Selenium Digital Consultant Pontianak"
        : "About Us — Selenium Digital Consultant Pontianak",
      currentLang === "id"
        ? "Kenali Selenium Digital Consultant, partner digital yang membantu bisnis dan UMKM membangun website serta produk digital berkualitas di Pontianak dan Kalimantan Barat."
        : "Get to know Selenium Digital Consultant, a digital partner helping businesses and MSMEs build high-quality websites and digital products in Pontianak.",
    );
    renderAboutPage();
  } else if (route.name === "service-detail") {
    renderDetailRoute(route.slug);
  } else {
    renderDetailRoute("");
  }

  syncScrollPosition();
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: NAVBAR (scroll-aware, transparent → solid)
   ═════════════════════════════════════════════════════════════ */
function mountNavBehavior() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const updateNavStyle = () => {
    const scrolled = window.scrollY > 60;
    if (scrolled) {
      navbar.classList.add("glass-panel", "shadow-nav");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("glass-panel", "shadow-nav");
    }
    navbar.dataset.scrolled = scrolled;
  };

  window.addEventListener("scroll", updateNavStyle, { passive: true });
  updateNavStyle(); // Run on mount

  // Active section highlighting via IntersectionObserver
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}



/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: SCROLL REVEAL (Intersection Observer)
   ═════════════════════════════════════════════════════════════ */
function mountScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: LANGUAGE TOGGLE
   ═════════════════════════════════════════════════════════════ */
function mountLangToggle() {
  const langBtns = document.querySelectorAll("[data-lang]");

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return; // No change needed

      // 1. Persist to localStorage
      localStorage.setItem("se_lang", lang);

      // 2. Update global state
      currentLang = lang;

      // 3. Update <html lang> attribute for accessibility
      document.documentElement.lang = lang === "id" ? "id" : "en";

      // 4. Re-render the current route with localized content
      renderCurrentRoute();
    });
  });
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: THEME TOGGLE (Dark / Light Mode)
   ═════════════════════════════════════════════════════════════ */
function initTheme() {
  // FOUC already handled by inline script in index.html.
  // This syncs JS state after the app is mounted.
  const saved = localStorage.getItem('theme');
  const theme = saved || 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

function mountThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const iconEl = document.getElementById('theme-toggle-icon');
  if (!btn) return;

  const updateIcon = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (iconEl) {
      iconEl.innerHTML = isDark
        ? icons.get('sun', 'w-4 h-4')
        : icons.get('moon', 'w-4 h-4');
    }
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // Update theme-color meta
    const meta = document.getElementById('theme-color-meta');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#0B1120' : '#FFFAFF');
    updateIcon();
  });

  updateIcon();
}

/* ═════════════════════════════════════════════════════════════
   BEHAVIOR: MOBILE MENU
   ═════════════════════════════════════════════════════════════ */
function mountMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("mobile-menu-icon");

  if (!menuBtn || !menu) return;

  let isOpen = false;

  const toggle = (force) => {
    isOpen = force !== undefined ? force : !isOpen;
    menu.classList.toggle("hidden", !isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuIcon.innerHTML = isOpen
      ? icons.get("close", "w-5 h-5")
      : icons.get("menu", "w-5 h-5");
  };

  menuBtn.addEventListener("click", () => toggle());

  // Close on mobile nav link click
  menu.querySelectorAll(".mobile-nav-link, .btn-primary").forEach((link) => {
    link.addEventListener("click", () => toggle(false));
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (isOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggle(false);
    }
  });
}

/* ═════════════════════════════════════════════════════════════
   INIT
   ═════════════════════════════════════════════════════════════ */

// Set initial <html> lang attribute
document.documentElement.lang = currentLang === "id" ? "id" : "en";

// Sync theme from localStorage (FOUC already handled in index.html)
initTheme();

initRouter(renderCurrentRoute);
renderCurrentRoute();
