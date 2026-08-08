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
      brand: "Selenium",
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      // projects: "Projects",
      contact: "Contact",
      cta: "Get a Free Consultation",
    },

    contact: {
      title: "Ready to solve your problem?",
      description: "Let's discuss how we can help you achieve your digital goals.",
      btnText:"Chat on Whatsapp"
    },

    // ── Hero Section ──
    hero: {
      eyebrow: "The Essential Digital Element",
      headline1: "We Power the",
      headline2: "Digital Core",
      headline3: "of Your Business.",
      subheadline:
        "Selenium Digital Consultant is your enterprise-grade IT partner — architecting resilient cloud infrastructure, accelerating digital transformation, and securing your most critical systems.",
      ctaPrimary: "Start Your Journey",
      ctaSecondary: "Explore Our Services",
      stat1Value: "Modern",
      stat1Label: "Tech Stack",
      stat2Value: "Agile",
      stat2Label: "Development",
      stat3Value: "Secure",
      stat3Label: "System & Data",
      stat4Value: "Scalable",
      stat4Label: "Architecture",
    },

    // ── Services Section ──
    services: {
      tag: "Our Expertise",
      heading: "Solutions Built for Small Business to Enterprise Scale",
      subheading:
        "From infrastructure to intelligence — we deliver end-to-end technology solutions that drive measurable business outcomes.",
      items: [
        {
          icon: "cloud",
          title: "Cloud Architecture",
          description:
            "Design and deploy secure, scalable multi-cloud and hybrid cloud environments on AWS, GCP, and Azure — optimized for performance and cost efficiency.",
          tags: ["AWS", "GCP", "Azure", "Terraform"],
        },
        // {
        //   icon:        'shield',
        //   title:       'Cybersecurity & Compliance',
        //   description: 'Protect your business with enterprise-grade security frameworks, penetration testing, SIEM integration, and full ISO 27001 / SOC 2 compliance consulting.',
        //   tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        // },
        {
          icon: "code",
          title: "Application Development",
          description:
            "Architect and deliver modern full-stack web applications and microservices with a focus on performance, maintainability, and DevOps-first engineering.",
          tags: [
            "React",
            "express.js",
            "Hapi.js",
            "Node.js",
            "Docker",
            "Laravel",
          ],
        },
        {
          icon: "database",
          title: "Data Engineering & Analytics",
          description:
            "Unify your data landscape — from ETL pipeline design and data warehousing to real-time BI dashboards and predictive analytics infrastructure.",
          tags: ["Power BI", "MySQL", "PostgreSQL"],
        },
        {
          icon: "cpu",
          title: "AI & Machine Learning",
          description:
            "Integrate intelligent automation into your operations — from LLM-powered workflows and NLP models to computer vision and MLOps deployment pipelines.",
          tags: [
            "Python",
            "LangChain",
            "Computer Vision",
            "Machine Learning",
            "PyTorch",
          ],
        },
        {
          icon: "settings",
          title: "IT Infrastructure & DevOps",
          description:
            "Transform your delivery pipeline with CI/CD automation, infrastructure-as-code, container orchestration, and 24/7 proactive system monitoring.",
          tags: ["GitHub Actions", "Ansible", "Prometheus", "Grafana"],
        },
        {
          icon: "network",
          title: "Workspace IT & Network Setup",
          description:
            "Ensure seamless daily operations with reliable Local Area Network (LAN) deployment, CCTV security system installation, and complete workstation setup or reinstallation for your employees.",
          tags: [
            "Office Network (LAN)",
            "CCTV Installation",
            "Workstation Setup",
            "IT Support",
          ],
        },
      ],
    },

    // ── About Section ──
    about: {
      tag: "About Selenium",
      heading: "The Essential Element for Your Digital Ecosystem",
      paragraph1:
        "Just as Selenium (Se, At. No. 34) is a trace element indispensable to biological life — found in trace amounts yet critical to cellular function and vitality — Selenium Digital Consultant is the essential, foundational partner woven into the fabric of your organization's digital health.",
      paragraph2:
        "We don't just consult. We embed ourselves as a strategic extension of your technical team, delivering precision-engineered solutions that sustain, protect, and accelerate your most critical digital systems.",
      quote:
        '"We are the element your digital ecosystem cannot function without."',
      valueProps: [
        {
          title: "Precision Engineering",
          desc: "Every solution is architecturally sound, documented, and built to last — not just to ship.",
        },
        {
          title: "Strategic Partnership",
          desc: "We become an embedded part of your team, aligned to your business goals, not just technical tickets.",
        },
        {
          title: "Proactive Intelligence",
          desc: "We identify risks before they become incidents through continuous monitoring and threat intelligence.",
        },
      ],
    },

    // ── Projects Section ──
    portfolio: {
      tag: "Our Work",
      heading: "Our Portofolio",
      items: [
        {
          title: "Learning Management System",
          client: "AI & LMS",
          description:
            "Develop a system to digitalize the learning process in schools equipped with AI chatbot, scheduling, student management, material management, mentor management, discussion forum, and video conferencing.",
          tags: [
            "AI Chatbot",
            "Video Conference",
            "Forum",
            "Scheduling",
            "Management",
          ],
          url: "https://amslms.web.id/",
          text: "Live Demo",
        },
        {
          title: "Automated Image Validation",
          client: "AI & Machine Learning",
          description:
            "Developed an automated image recognition module to reliably validate specific screenshots uploaded by application users.",
          tags: ["Computer Vision", "Machine Learning"],
          url: "https://www.linkedin.com/posts/muhammad-za-im-shidqi-414326281_presentation-slide-activity-7284398955751264256-2Xey",
          text: "Visit Project",
        },
        {
          title: "Village Profile Website",
          client: "Web Development",
          description:
            "Built an interactive website serving as an information hub to provide easy public access to regional data and local potentials.",
          tags: ["Frontend", "UI/UX Design"],
          url: "https://github.com/PMKM-IF-UNTAN-2025/Web-Profile-Desa-CMS-Template",
          text: "Visit Project",
        },
        {
          title: "CCTV Security Installation",
          client: "Security Infrastructure",
          description:
            "Designed and deployed comprehensive CCTV monitoring networks to ensure the safety and operational security of facility areas.",
          tags: ["CCTV", "Security", "IT Support"],
          url: "",
          text: "",
        },
        {
          title: "SoundMood",
          client: "AI & Android Application ",
          description:
            "Developed an android application for detecting user mood and generated a Spotify playlist.",
          tags: ["Computer Vision", "Deep Learning", "Fun"],
          url: "https://github.com/SoundMood/mobile-development",
          text: "Visit Project",
        },
        {
          title: "QTancy",
          client: "MSMEs",
          description:
            "Developed AI-Based web application for transaction recording and business management automation.",
          tags: ["Computer Vision", "Deep Learning", "Finance", "MSMEs"],
          url: "https://github.com/QTancy/front-end",
          text: "Visit Project",
        },
      ],
    },

    // ── Catalog Section ──
    catalog: {
      tag: "Our Catalog",
      heading: "Digital Solutions Catalog",
      subheading:
        "Explore our curated collection of successful digital transformations and high-performance templates.",
      whatsappBase: "https://wa.me/6282253210449",
      items: [
        {
          id: 1,
          image: "/catalog/catalog-1.jpg",
          title: "Landing Page",
          description:
            "High-performance sales pages specifically designed to maximize conversion rates and loading speeds.",
        },
        {
          id: 2,
          image: "/catalog/catalog-2.jpg",
          title: "System Integration",
          description:
            "Seamlessly connecting various platforms and APIs to ensure automated and fluid business data workflows.",
        },
        {
          id: 3,
          image: "/catalog/catalog-3.jpg",
          title: "Building Custom App",
          description:
            "Tailor-made web or mobile applications built from the ground up to match your unique workflow and business requirements.",
        },
        {
          id: 4,
          image: "/catalog/catalog-4.jpg",
          title: "Business Automation",
          description:
            "Streamlining repetitive tasks to boost operational efficiency and minimize the risk of human error.",
        },
        {
          id: 5,
          image: "/catalog/catalog-5.jpg",
          title: "Digital System Audit",
          description:
            "Comprehensive evaluation of digital infrastructure to identify security vulnerabilities, performance bottlenecks, and optimization paths.",
        },
        {
          id: 6,
          image: "/catalog/catalog-6.jpg",
          title: "WhatsApp Bot",
          description:
            "Intelligent chatbot solutions for 24/7 customer service, automated lead management, and real-time messaging integration.",
        },
        {
          id: 7,
          image: "/catalog/catalog-7.jpg",
          title: "Queue System",
          description:
            "Modern, transparent customer flow management designed to enhance user experience and on-site operational efficiency.",
        },
      ],
      cta: "Inquire via WhatsApp",
    },

    // ── Footer ──
    footer: {
      tagline: "The Essential Element for Your Digital Ecosystem.",
      copyright: "© 2025 Selenium Digital Consultant. All rights reserved.",
      links: [
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  },

  /* ══════════════════════════════════════════════
     BAHASA INDONESIA (id)
     ══════════════════════════════════════════════ */
  id: {
    // ── Navigasi ──
    nav: {
      brand: "Selenium",
      services: "Layanan",
      about: "Tentang Kami",
      portfolio: "Portofolio",
      // projects: "Projects",
      contact: "Kontak",
      cta: "Konsultasi Gratis",
    },

    contact: {
      title: "Siap untuk menyelesaikan masalahmu?",
      description: "Mari diskusikan bersama kami agar bisa mencapai target",
      btnText:"Hubungi lewat Whatsapp"
    },

    // ── Bagian Hero ──
    hero: {
      headline1: "Kami Menggerakkan",
      headline2: "Inti Digital",
      headline3: "Bisnis Anda.",
      subheadline:
        "Selenium Digital Consultant adalah mitra IT UMKM hingga enterprise Anda — merancang infrastruktur cloud yang tangguh, mempercepat transformasi digital, dan mengamankan sistem yang paling kritis.",
      ctaPrimary: "Mulai Perjalanan Anda",
      ctaSecondary: "Jelajahi Layanan Kami",
      stat1Value: "Modern",
      stat1Label: "Stack Teknologi",
      stat2Value: "Agile",
      stat2Label: "Pengembangan",
      stat3Value: "Aman",
      stat3Label: "Sistem & Data",
      stat4Value: "Terukur",
      stat4Label: "Arsitektur IT",
    },

    // ── Bagian Layanan ──
    services: {
      tag: "Keahlian Kami",
      heading: "Solusi yang Dibangun untuk Skala UMKM hingga Enterprise",
      subheading:
        "Dari infrastruktur hingga kecerdasan buatan — kami menghadirkan solusi teknologi end-to-end yang menghasilkan dampak bisnis yang terukur.",
      items: [
        {
          icon: "cloud",
          title: "Arsitektur Cloud",
          description:
            "Merancang dan menerapkan lingkungan multi-cloud dan hybrid cloud yang aman dan skalabel di AWS, GCP, dan Azure — dioptimalkan untuk performa dan efisiensi biaya.",
          tags: ["AWS", "GCP", "Azure", "Terraform"],
        },
        // {
        //   icon:        'shield',
        //   title:       'Keamanan Siber & Kepatuhan',
        //   description: 'Lindungi bisnis Anda dengan kerangka keamanan enterprise, pengujian penetrasi, integrasi SIEM, dan konsultasi kepatuhan ISO 27001 / SOC 2 yang komprehensif.',
        //   tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        // },
        {
          icon: "code",
          title: "Pengembangan Aplikasi",
          description:
            "Merancang dan menghadirkan aplikasi web full-stack dan microservices modern dengan fokus pada performa, kemudahan pemeliharaan, dan rekayasa DevOps-first.",
          tags: [
            "React",
            "express.js",
            "Hapi.js",
            "Node.js",
            "Docker",
            "Laravel",
          ],
        },
        {
          icon: "database",
          title: "Rekayasa & Analitik Data",
          description:
            "Menyatukan lanskap data Anda — dari desain pipeline ETL dan data warehousing hingga dashboard BI real-time dan infrastruktur analitik prediktif.",
          tags: ["Power BI", "MySQL", "PostgreSQL"],
        },
        {
          icon: "cpu",
          title: "AI & Machine Learning",
          description:
            "Integrasikan otomasi cerdas ke dalam operasional Anda — dari alur kerja berbasis LLM dan model NLP hingga computer vision dan pipeline deployment MLOps.",
          tags: [
            "Python",
            "LangChain",
            "Computer Vision",
            "Machine Learning",
            "PyTorch",
          ],
        },
        {
          icon: "settings",
          title: "Infrastruktur IT & DevOps",
          description:
            "Transformasikan pipeline pengiriman Anda dengan otomasi CI/CD, infrastructure-as-code, orkestrasi container, dan pemantauan sistem proaktif 24/7.",
          tags: ["GitHub Actions", "Ansible", "Prometheus", "Grafana"],
        },
        {
          icon: "network",
          title: "Infrastruktur IT & Jaringan Kantor",
          description:
            "Pastikan operasional harian bisnis Anda berjalan tanpa hambatan dengan instalasi jaringan internet lokal (LAN) yang dapat diandalkan, sistem keamanan CCTV, hingga penyiapan awal dan instalasi ulang komputer untuk karyawan.",
          tags: [
            "Jaringan Kantor (LAN)",
            "Instalasi CCTV",
            "Setup Komputer Karyawan",
            "IT Support",
          ],
        },
      ],
    },

    // ── Tentang Kami ──
    about: {
      tag: "Tentang Selenium",
      heading: "Elemen Esensial untuk Ekosistem Digital Anda",
      paragraph1:
        "Seperti halnya Selenium (Se, No. At. 34) adalah elemen jejak yang sangat diperlukan oleh kehidupan biologis — ditemukan dalam jumlah sedikit namun kritis bagi fungsi seluler dan vitalitas — Selenium Digital Consultant adalah mitra esensial dan fundamental yang terjalin ke dalam jalinan kesehatan digital organisasi Anda.",
      paragraph2:
        "Kami tidak hanya berkonsultasi. Kami menanamkan diri sebagai perpanjangan strategis dari tim teknis Anda, menghadirkan solusi yang dirancang dengan presisi untuk mempertahankan, melindungi, dan mempercepat sistem digital Anda yang paling kritis.",
      quote:
        '"Kami adalah elemen yang tidak bisa berfungsi tanpa ekosistem digital Anda."',
      valueProps: [
        {
          title: "Rekayasa Presisi",
          desc: "Setiap solusi dirancang secara arsitektural, terdokumentasi, dan dibangun untuk bertahan lama — bukan hanya untuk selesai.",
        },
        {
          title: "Kemitraan Strategis",
          desc: "Kami menjadi bagian tertanam dari tim Anda, selaras dengan tujuan bisnis Anda, bukan hanya tiket teknis.",
        },
        {
          title: "Intelijen Proaktif",
          desc: "Kami mengidentifikasi risiko sebelum menjadi insiden melalui pemantauan berkelanjutan dan threat intelligence.",
        },
      ],
    },

    // ── Portofolio Proyek ──
    portfolio: {
      tag: "Karya Kami",
      heading: "Portofolio Kami",
      items: [
        {
          title: "Sistem Manajemen Pembelajaran",
          client: "AI & Sistem Manajemen Pembelajaran",
          description:
            "Mengembangkan sistem untuk mendigitalisasi proses pembelajaran di sekolah yang dilengkapi dengan chatbot AI, penjadwalan, manajemen siswa, manajemen materi, manajemen mentor, forum diskusi, dan video conference.",
          tags: [
            "Chatbot AI",
            "Video Conference",
            "Forum",
            "Penjadwalan",
            "Manajemen",
          ],
          url: "https://amslms.web.id/",
          text: "Kunjungi Demo",
        },
        {
          title: "Modul Validasi Gambar Otomatis",
          client: "AI & Machine Learning",
          description:
            "Mengembangkan modul pengenalan otomatis yang handal untuk memvalidasi tangkapan layar spesifik dari pengguna aplikasi.",
          tags: ["Computer Vision", "Machine Learning"],
          url: "https://www.linkedin.com/posts/muhammad-za-im-shidqi-414326281_presentation-slide-activity-7284398955751264256-2Xey",
          text: "Kunjungi Projek",
        },
        {
          title: "Website Profil Desa",
          client: "Web Development",
          description:
            "Membangun website profil sebagai pilar informasi utama yang memudahkan akses publik terhadap potensi dan data daerah.",
          tags: ["Frontend", "UI/UX Design"],
          url: "https://github.com/PMKM-IF-UNTAN-2025/Web-Profile-Desa-CMS-Template",
          text: "Kunjungi Projek",
        },
        {
          title: "Instalasi Sistem CCTV",
          client: "Infrastruktur Keamanan",
          description:
            "Merancang dan memasang sistem CCTV secara menyeluruh guna memastikan keamanan serta kelancaran operasional area fasilitas.",
          tags: ["CCTV", "Security", "IT Support"],
          url: "",
          text: "",
        },
        {
          title: "SoundMood",
          client: "AI & Android Application ",
          description:
            "Mengembangkan aplikasi android untuk mendeteksi mood pengguna kemudian menghasilkan serta mengeskport playlist Spotfy.",
          tags: ["Computer Vision", "Deep Learning", "Fun"],
          url: "https://github.com/SoundMood/mobile-development",
          text: "Kunjungi Projek",
        },
        {
          title: "QTancy",
          client: "UMKM",
          description:
            "Mengembangkan aplikasi web berbasis AI untuk merekam transaksi dddan manajemen bisnis secara otomatis.",
          tags: ["Computer Vision", "Deep Learning", "Finance", "MSMEs"],
          url: "https://github.com/QTancy/front-end",
          text: "Kunjungi Projek",
        },
      ],
    },

    // ── Catalog Section ──
    catalog: {
      tag: "Katalog Kami",
      heading: "Katalog Solusi Digital",
      subheading:
        "Jelajahi koleksi transformasi digital kami yang terkurasi dan template berperforma tinggi untuk bisnis Anda.",
      whatsappBase: "https://wa.me/6282253210449",
      items: [
        {
          id: 1,
          image: "/catalog/catalog-1.jpg",
          title: "Landing Page",
          description:
            "Halaman penjualan berperforma tinggi yang dirancang khusus untuk memaksimalkan konversi dan kecepatan akses.",
        },
        {
          id: 2,
          image: "/catalog/catalog-2.jpg",
          title: "Integrasi Sistem",
          description:
            "Menghubungkan berbagai platform dan API untuk memastikan alur data bisnis Anda berjalan mulus tanpa hambatan manual.",
        },
        {
          id: 3,
          image: "/catalog/catalog-3.jpg",
          title: "Building Custom App",
          description:
            "Pengembangan aplikasi web atau mobile yang dibangun dari nol sesuai dengan alur kerja unik dan kebutuhan spesifik bisnis Anda.",
        },
        {
          id: 4,
          image: "/catalog/catalog-4.jpg",
          title: "Automation Bisnis",
          description:
            "Otomatisasi proses repetitif untuk meningkatkan efisiensi operasional dan meminimalisir risiko kesalahan manusia (human error).",
        },
        {
          id: 5,
          image: "/catalog/catalog-5.jpg",
          title: "Digital System Audit",
          description:
            "Evaluasi mendalam terhadap infrastruktur digital untuk menemukan celah keamanan, bottleneck performa, dan peluang optimasi.",
        },
        {
          id: 6,
          image: "/catalog/catalog-6.jpg",
          title: "Whatsapp Bot",
          description:
            "Solusi chatbot pintar untuk melayani pelanggan 24/7, manajemen prospek otomatis, dan integrasi pesan real-time.",
        },
        {
          id: 7,
          image: "/catalog/catalog-7.jpg",
          title: "Sistem Antrian",
          description:
            "Manajemen alur pelanggan yang modern dan transparan untuk meningkatkan kenyamanan pengguna serta efisiensi layanan di lokasi.",
        },
      ],
      cta: "Tanya via WhatsApp",
    },

    // ── Footer ──
    footer: {
      tagline: "Elemen Esensial untuk Ekosistem Digital Anda.",
      copyright: "© 2025 Selenium Digital Consultant. Hak cipta dilindungi.",
      links: [
        { label: "Layanan", href: "#services" },
        { label: "Tentang", href: "#about" },
      ],
      legalLinks: [
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat Layanan", href: "#" },
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
  const stored = localStorage.getItem("se_lang");
  if (stored && translations[stored]) return stored;

  // const browserLang = navigator.language || navigator.userLanguage || 'id';
  // const resolved = browserLang.toLowerCase().startsWith('en') ? 'en' : 'id';

  // return resolved;

  // 2. Default to 'id' for Indonesian SEO
  return "id";
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
  const keys = key.split(".");
  let result = translations[lang];
  for (const k of keys) {
    if (result === undefined || result === null) return key; // Fallback to key
    result = result[k];
  }
  // Final fallback: try Indonesian if translation is missing
  if (result === undefined || result === null) {
    let fallback = translations["id"];
    for (const k of keys) {
      if (fallback === undefined) return key;
      fallback = fallback[k];
    }
    return fallback ?? key;
  }
  return result;
}
