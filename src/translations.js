/**
 * translations.js — Centralized i18n Dictionary
 *
 * Structure:
 *   translations[languageCode][sectionKey][textKey] = "string"
 *
 * Supported languages:
 *   - 'en' → English (default)
 *   - 'id' → Bahasa Indonesia
 *
 * Usage in HTML:  data-i18n="sectionKey.textKey"
 * Usage in JS:    t('sectionKey.textKey')
 */

export const translations = {

  /* ══════════════════════════════════════════════
     ENGLISH (en) — Default / Fallback
     ══════════════════════════════════════════════ */
  en: {
    // ── Navigation ──
    nav: {
      brand:     'Selenium',
      services:  'Services',
      about:     'About',
      techStack: 'Tech Stack',
      process:   'Process',
      contact:   'Contact',
      cta:       'Get a Free Consultation',
    },

    // ── Hero Section ──
    hero: {
      eyebrow:    'The Essential Digital Element',
      headline1:  'We Power the',
      headline2:  'Digital Core',
      headline3:  'of Your Business.',
      subheadline: 'Selenium Digital Consultant is your enterprise-grade IT partner — architecting resilient cloud infrastructure, accelerating digital transformation, and securing your most critical systems.',
      ctaPrimary:  'Start Your Journey',
      ctaSecondary:'Explore Our Services',
      stat1Value:  '150+',
      stat1Label:  'Projects Delivered',
      stat2Value:  '98%',
      stat2Label:  'Client Retention',
      stat3Value:  '12+',
      stat3Label:  'Years of Expertise',
      stat4Value:  '24/7',
      stat4Label:  'System Monitoring',
    },

    // ── Services Section ──
    services: {
      tag:      'Our Expertise',
      heading:  'Solutions Built for Enterprise Scale',
      subheading: 'From infrastructure to intelligence — we deliver end-to-end technology solutions that drive measurable business outcomes.',
      items: [
        {
          icon:        'cloud',
          title:       'Cloud Architecture',
          description: 'Design and deploy secure, scalable multi-cloud and hybrid cloud environments on AWS, GCP, and Azure — optimized for performance and cost efficiency.',
          tags:        ['AWS', 'GCP', 'Azure', 'Terraform'],
        },
        {
          icon:        'shield',
          title:       'Cybersecurity & Compliance',
          description: 'Protect your business with enterprise-grade security frameworks, penetration testing, SIEM integration, and full ISO 27001 / SOC 2 compliance consulting.',
          tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        },
        {
          icon:        'code',
          title:       'Application Development',
          description: 'Architect and deliver modern full-stack web applications and microservices with a focus on performance, maintainability, and DevOps-first engineering.',
          tags:        ['React', 'Node.js', 'K8s', 'Docker'],
        },
        {
          icon:        'database',
          title:       'Data Engineering & Analytics',
          description: 'Unify your data landscape — from ETL pipeline design and data warehousing to real-time BI dashboards and predictive analytics infrastructure.',
          tags:        ['dbt', 'Snowflake', 'Spark', 'Airflow'],
        },
        {
          icon:        'cpu',
          title:       'AI & Machine Learning',
          description: 'Integrate intelligent automation into your operations — from LLM-powered workflows and NLP models to computer vision and MLOps deployment pipelines.',
          tags:        ['Python', 'LangChain', 'MLflow', 'PyTorch'],
        },
        {
          icon:        'settings',
          title:       'IT Infrastructure & DevOps',
          description: 'Transform your delivery pipeline with CI/CD automation, infrastructure-as-code, container orchestration, and 24/7 proactive system monitoring.',
          tags:        ['GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'],
        },
      ],
    },

    // ── About Section ──
    about: {
      tag:         'About Selenium',
      heading:     'The Essential Element for Your Digital Ecosystem',
      paragraph1:  'Just as Selenium (Se, At. No. 34) is a trace element indispensable to biological life — found in trace amounts yet critical to cellular function and vitality — Selenium Digital Consultant is the essential, foundational partner woven into the fabric of your organization\'s digital health.',
      paragraph2:  'We don\'t just consult. We embed ourselves as a strategic extension of your technical team, delivering precision-engineered solutions that sustain, protect, and accelerate your most critical digital systems.',
      quote:       '"We are the element your digital ecosystem cannot function without."',
      valueProps: [
        { title: 'Precision Engineering', desc: 'Every solution is architecturally sound, documented, and built to last — not just to ship.' },
        { title: 'Strategic Partnership', desc: 'We become an embedded part of your team, aligned to your business goals, not just technical tickets.' },
        { title: 'Proactive Intelligence', desc: 'We identify risks before they become incidents through continuous monitoring and threat intelligence.' },
      ],
    },

    // ── Tech Stack Section ──
    techStack: {
      tag:        'Technology Expertise',
      heading:    'Built on the Tools Enterprises Trust',
      subheading: 'We work with the industry\'s most robust, battle-tested technologies across every layer of the modern digital stack.',
      categories: [
        {
          name: 'Cloud & Infrastructure',
          items: ['AWS', 'GCP', 'Azure', 'Terraform', 'Pulumi', 'Kubernetes', 'Docker'],
        },
        {
          name: 'Development',
          items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust'],
        },
        {
          name: 'Data & AI',
          items: ['Snowflake', 'dbt', 'Apache Spark', 'Airflow', 'PyTorch', 'LangChain', 'PostgreSQL'],
        },
        {
          name: 'Security & DevOps',
          items: ['GitHub Actions', 'Ansible', 'Prometheus', 'Grafana', 'Vault', 'Wazuh', 'Elasticsearch'],
        },
      ],
    },

    // ── Process Section ──
    process: {
      tag:        'How We Work',
      heading:    'From Discovery to Delivery',
      subheading: 'A proven, structured engagement model designed for enterprise complexity and startup agility.',
      steps: [
        {
          number: '01',
          title:  'Discovery & Assessment',
          desc:   'We conduct a full technical and business audit — mapping your current systems, identifying gaps, and establishing a clear baseline for transformation.',
        },
        {
          number: '02',
          title:  'Strategy & Architecture',
          desc:   'Our senior architects design a tailored technology roadmap and solution architecture aligned to your business objectives and budget constraints.',
        },
        {
          number: '03',
          title:  'Agile Implementation',
          desc:   'We execute in focused sprints with full transparency — delivering measurable milestones while maintaining your operations without disruption.',
        },
        {
          number: '04',
          title:  'Optimization & Support',
          desc:   'Post-delivery, we monitor, optimize, and iterate. Our 24/7 support and continuous improvement cycles ensure sustained performance over time.',
        },
      ],
    },

    // ── Testimonials Section ──
    testimonials: {
      tag:      'Client Voices',
      heading:  'Trusted by Organizations That Can\'t Afford to Fail',
      items: [
        {
          quote:   'Selenium Digital rearchitected our entire AWS infrastructure in 90 days. The result was 40% cost reduction and zero downtime during peak holiday traffic. Exceptional engineering discipline.',
          name:    'Reza Mahendra',
          role:    'CTO, Tokko Retail Group',
          initial: 'R',
        },
        {
          quote:   'Their team embedded with us like true partners. From day one, they understood not just the technical requirements but the business context. They delivered a data platform that unlocked insights we didn\'t know we had.',
          name:    'Sarah Chen',
          role:    'VP Engineering, FinFlow Asia',
          initial: 'S',
        },
        {
          quote:   'After the SOC 2 audit was a nightmare, Selenium came in and completely rethought our security posture. We achieved compliance in 4 months and now have a security program I\'m actually proud of.',
          name:    'David Hartanto',
          role:    'CISO, MedBridge Indonesia',
          initial: 'D',
        },
      ],
    },

    // ── Contact Section ──
    contact: {
      tag:         'Get In Touch',
      heading:     'Start the Conversation',
      subheading:  'Tell us about your challenge. Our team of senior consultants will respond within 24 hours with a preliminary assessment.',
      namePlaceholder:    'Full Name',
      emailPlaceholder:   'Business Email',
      companyPlaceholder: 'Company Name',
      messagePlaceholder: 'Describe your project or challenge...',
      nameLabel:    'Name',
      emailLabel:   'Email',
      companyLabel: 'Company',
      messageLabel: 'Message',
      submitBtn:    'Send Message',
      submitSuccess:'Message sent. We\'ll be in touch within 24 hours.',
      info: [
        { label: 'Email', value: 'hello@seleniumdigital.id' },
        { label: 'Phone', value: '+62 21 5555 8888' },
        { label: 'Headquarters', value: 'Pontianak, Indonesia' },
        { label: 'Hours', value: 'Mon–Fri: 09:00–18:00 WIB' },
      ],
    },

    // ── Footer ──
    footer: {
      tagline:   'The Essential Element for Your Digital Ecosystem.',
      copyright: '© 2025 Selenium Digital Consultant. All rights reserved.',
      links: [
        { label: 'Services',   href: '#services' },
        { label: 'About',      href: '#about' },
        { label: 'Tech Stack', href: '#tech-stack' },
        { label: 'Process',    href: '#process' },
        { label: 'Contact',    href: '#contact' },
      ],
      legalLinks: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  },

  /* ══════════════════════════════════════════════
     BAHASA INDONESIA (id)
     ══════════════════════════════════════════════ */
  id: {
    // ── Navigasi ──
    nav: {
      brand:     'Selenium',
      services:  'Layanan',
      about:     'Tentang Kami',
      techStack: 'Teknologi',
      process:   'Proses',
      contact:   'Kontak',
      cta:       'Konsultasi Gratis',
    },

    // ── Bagian Hero ──
    hero: {
      eyebrow:    'Elemen Digital yang Esensial',
      headline1:  'Kami Menggerakkan',
      headline2:  'Inti Digital',
      headline3:  'Bisnis Anda.',
      subheadline: 'Selenium Digital Consultant adalah mitra IT enterprise Anda — merancang infrastruktur cloud yang tangguh, mempercepat transformasi digital, dan mengamankan sistem yang paling kritis.',
      ctaPrimary:  'Mulai Perjalanan Anda',
      ctaSecondary:'Jelajahi Layanan Kami',
      stat1Value:  '150+',
      stat1Label:  'Proyek Selesai',
      stat2Value:  '98%',
      stat2Label:  'Retensi Klien',
      stat3Value:  '12+',
      stat3Label:  'Tahun Pengalaman',
      stat4Value:  '24/7',
      stat4Label:  'Pemantauan Sistem',
    },

    // ── Bagian Layanan ──
    services: {
      tag:        'Keahlian Kami',
      heading:    'Solusi yang Dibangun untuk Skala Enterprise',
      subheading: 'Dari infrastruktur hingga kecerdasan buatan — kami menghadirkan solusi teknologi end-to-end yang menghasilkan dampak bisnis yang terukur.',
      items: [
        {
          icon:        'cloud',
          title:       'Arsitektur Cloud',
          description: 'Merancang dan menerapkan lingkungan multi-cloud dan hybrid cloud yang aman dan skalabel di AWS, GCP, dan Azure — dioptimalkan untuk performa dan efisiensi biaya.',
          tags:        ['AWS', 'GCP', 'Azure', 'Terraform'],
        },
        {
          icon:        'shield',
          title:       'Keamanan Siber & Kepatuhan',
          description: 'Lindungi bisnis Anda dengan kerangka keamanan enterprise, pengujian penetrasi, integrasi SIEM, dan konsultasi kepatuhan ISO 27001 / SOC 2 yang komprehensif.',
          tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        },
        {
          icon:        'code',
          title:       'Pengembangan Aplikasi',
          description: 'Merancang dan menghadirkan aplikasi web full-stack dan microservices modern dengan fokus pada performa, kemudahan pemeliharaan, dan rekayasa DevOps-first.',
          tags:        ['React', 'Node.js', 'K8s', 'Docker'],
        },
        {
          icon:        'database',
          title:       'Rekayasa & Analitik Data',
          description: 'Menyatukan lanskap data Anda — dari desain pipeline ETL dan data warehousing hingga dashboard BI real-time dan infrastruktur analitik prediktif.',
          tags:        ['dbt', 'Snowflake', 'Spark', 'Airflow'],
        },
        {
          icon:        'cpu',
          title:       'AI & Machine Learning',
          description: 'Integrasikan otomasi cerdas ke dalam operasional Anda — dari alur kerja berbasis LLM dan model NLP hingga computer vision dan pipeline deployment MLOps.',
          tags:        ['Python', 'LangChain', 'MLflow', 'PyTorch'],
        },
        {
          icon:        'settings',
          title:       'Infrastruktur IT & DevOps',
          description: 'Transformasikan pipeline pengiriman Anda dengan otomasi CI/CD, infrastructure-as-code, orkestrasi container, dan pemantauan sistem proaktif 24/7.',
          tags:        ['GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'],
        },
      ],
    },

    // ── Tentang Kami ──
    about: {
      tag:         'Tentang Selenium',
      heading:     'Elemen Esensial untuk Ekosistem Digital Anda',
      paragraph1:  'Seperti halnya Selenium (Se, No. At. 34) adalah elemen jejak yang sangat diperlukan oleh kehidupan biologis — ditemukan dalam jumlah sedikit namun kritis bagi fungsi seluler dan vitalitas — Selenium Digital Consultant adalah mitra esensial dan fundamental yang terjalin ke dalam jalinan kesehatan digital organisasi Anda.',
      paragraph2:  'Kami tidak hanya berkonsultasi. Kami menanamkan diri sebagai perpanjangan strategis dari tim teknis Anda, menghadirkan solusi yang dirancang dengan presisi untuk mempertahankan, melindungi, dan mempercepat sistem digital Anda yang paling kritis.',
      quote:       '"Kami adalah elemen yang tidak bisa berfungsi tanpa ekosistem digital Anda."',
      valueProps: [
        { title: 'Rekayasa Presisi', desc: 'Setiap solusi dirancang secara arsitektural, terdokumentasi, dan dibangun untuk bertahan lama — bukan hanya untuk selesai.' },
        { title: 'Kemitraan Strategis', desc: 'Kami menjadi bagian tertanam dari tim Anda, selaras dengan tujuan bisnis Anda, bukan hanya tiket teknis.' },
        { title: 'Intelijen Proaktif', desc: 'Kami mengidentifikasi risiko sebelum menjadi insiden melalui pemantauan berkelanjutan dan threat intelligence.' },
      ],
    },

    // ── Stack Teknologi ──
    techStack: {
      tag:        'Keahlian Teknologi',
      heading:    'Dibangun di Atas Alat yang Dipercaya Enterprise',
      subheading: 'Kami bekerja dengan teknologi industri yang paling tangguh dan teruji di setiap lapisan tumpukan digital modern.',
      categories: [
        {
          name: 'Cloud & Infrastruktur',
          items: ['AWS', 'GCP', 'Azure', 'Terraform', 'Pulumi', 'Kubernetes', 'Docker'],
        },
        {
          name: 'Pengembangan',
          items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust'],
        },
        {
          name: 'Data & AI',
          items: ['Snowflake', 'dbt', 'Apache Spark', 'Airflow', 'PyTorch', 'LangChain', 'PostgreSQL'],
        },
        {
          name: 'Keamanan & DevOps',
          items: ['GitHub Actions', 'Ansible', 'Prometheus', 'Grafana', 'Vault', 'Wazuh', 'Elasticsearch'],
        },
      ],
    },

    // ── Proses Kerja ──
    process: {
      tag:        'Cara Kami Bekerja',
      heading:    'Dari Penemuan hingga Pengiriman',
      subheading: 'Model keterlibatan yang terstruktur dan terbukti, dirancang untuk kompleksitas enterprise dan kelincahan startup.',
      steps: [
        {
          number: '01',
          title:  'Penemuan & Penilaian',
          desc:   'Kami melakukan audit teknis dan bisnis penuh — memetakan sistem Anda saat ini, mengidentifikasi kesenjangan, dan menetapkan baseline yang jelas untuk transformasi.',
        },
        {
          number: '02',
          title:  'Strategi & Arsitektur',
          desc:   'Arsitek senior kami merancang peta jalan teknologi yang disesuaikan dan arsitektur solusi yang selaras dengan tujuan bisnis dan kendala anggaran Anda.',
        },
        {
          number: '03',
          title:  'Implementasi Agile',
          desc:   'Kami mengeksekusi dalam sprint yang terfokus dengan transparansi penuh — menghasilkan pencapaian yang terukur sambil menjaga operasional Anda tetap berjalan tanpa gangguan.',
        },
        {
          number: '04',
          title:  'Optimisasi & Dukungan',
          desc:   'Setelah pengiriman, kami memantau, mengoptimalkan, dan melakukan iterasi. Dukungan 24/7 dan siklus peningkatan berkelanjutan kami memastikan performa yang berkelanjutan.',
        },
      ],
    },

    // ── Testimoni ──
    testimonials: {
      tag:      'Suara Klien',
      heading:  'Dipercaya oleh Organisasi yang Tidak Bisa Gagal',
      items: [
        {
          quote:   'Selenium Digital merancang ulang seluruh infrastruktur AWS kami dalam 90 hari. Hasilnya adalah pengurangan biaya 40% dan zero downtime selama puncak trafik hari raya. Disiplin rekayasa yang luar biasa.',
          name:    'Reza Mahendra',
          role:    'CTO, Tokko Retail Group',
          initial: 'R',
        },
        {
          quote:   'Tim mereka bergabung dengan kami seperti mitra sejati. Sejak hari pertama, mereka memahami bukan hanya kebutuhan teknis tetapi juga konteks bisnis. Mereka menghadirkan platform data yang membuka wawasan yang tidak kami ketahui sebelumnya.',
          name:    'Sarah Chen',
          role:    'VP Engineering, FinFlow Asia',
          initial: 'S',
        },
        {
          quote:   'Setelah audit SOC 2 yang menjadi mimpi buruk, Selenium hadir dan sepenuhnya memikirkan ulang postur keamanan kami. Kami mencapai kepatuhan dalam 4 bulan dan sekarang memiliki program keamanan yang benar-benar saya banggakan.',
          name:    'David Hartanto',
          role:    'CISO, MedBridge Indonesia',
          initial: 'D',
        },
      ],
    },

    // ── Kontak ──
    contact: {
      tag:         'Hubungi Kami',
      heading:     'Mulai Percakapan',
      subheading:  'Ceritakan tantangan Anda. Tim konsultan senior kami akan merespons dalam 24 jam dengan penilaian awal.',
      namePlaceholder:    'Nama Lengkap',
      emailPlaceholder:   'Email Bisnis',
      companyPlaceholder: 'Nama Perusahaan',
      messagePlaceholder: 'Deskripsikan proyek atau tantangan Anda...',
      nameLabel:    'Nama',
      emailLabel:   'Email',
      companyLabel: 'Perusahaan',
      messageLabel: 'Pesan',
      submitBtn:    'Kirim Pesan',
      submitSuccess:'Pesan terkirim. Kami akan menghubungi Anda dalam 24 jam.',
      info: [
        { label: 'Email', value: 'hello@seleniumdigital.id' },
        { label: 'Telepon', value: '+62 822 5321 0449' },
        { label: 'Kantor Pusat', value: 'Pontianak, Indonesia' },
        { label: 'Jam Kerja', value: 'Sen–Jum: 09:00–18:00 WIB' },
      ],
    },

    // ── Footer ──
    footer: {
      tagline:   'Elemen Esensial untuk Ekosistem Digital Anda.',
      copyright: '© 2025 Selenium Digital Consultant. Hak cipta dilindungi.',
      links: [
        { label: 'Layanan',    href: '#services' },
        { label: 'Tentang',    href: '#about' },
        { label: 'Teknologi',  href: '#tech-stack' },
        { label: 'Proses',     href: '#process' },
        { label: 'Kontak',     href: '#contact' },
      ],
      legalLinks: [
        { label: 'Kebijakan Privasi', href: '#' },
        { label: 'Syarat Layanan', href: '#' },
      ],
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   I18N ENGINE
   ───────────────────────────────────────────────────────────── */

/**
 * Detects the appropriate language to display.
 * Priority: localStorage override → navigator.language → 'en'
 *
 * @returns {'en' | 'id'} The resolved language code.
 */
export function detectLanguage() {
  // 1. Check for manually saved preference
  const stored = localStorage.getItem('se_lang');
  if (stored && translations[stored]) return stored;

  // 2. Auto-detect from browser
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const resolved = browserLang.toLowerCase().startsWith('id') ? 'id' : 'en';

  return resolved;
}

/**
 * Retrieves a localized string by dot-notation key.
 * Example: t('hero.headline1', 'en') → 'We Power the'
 *
 * @param {string} lang  - Language code ('en' or 'id')
 * @param {string} key   - Dot-notation path (e.g. 'nav.services')
 * @returns {string}     - Resolved translation or the key itself as fallback
 */
export function t(lang, key) {
  const keys = key.split('.');
  let result = translations[lang];
  for (const k of keys) {
    if (result === undefined || result === null) return key; // Fallback to key
    result = result[k];
  }
  // Final fallback: try English if translation is missing
  if (result === undefined || result === null) {
    let fallback = translations['en'];
    for (const k of keys) {
      if (fallback === undefined) return key;
      fallback = fallback[k];
    }
    return fallback ?? key;
  }
  return result;
}
