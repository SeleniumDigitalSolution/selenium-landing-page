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
      // TODO: Replace these placeholder metrics with verified business numbers when available.
      stat1Value: "10+",
      stat1Label: "Clients",
      stat2Value: "15+",
      stat2Label: "Completed Projects",
      stat3Value: "3",
      stat3Label: "Years Experience",
      stat4Value: "100%",
      stat4Label: "Client Satisfaction",
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
      heading: "Digital help that fits the way your business already works.",
      paragraph1:
        "Selenium started from conversations with business owners in Pontianak who wanted to serve customers better, but did not know where to begin with digital tools. We listen first, then help turn everyday needs into a website or system that feels familiar and useful.",
      paragraph2:
        "Our work is not finished when a site goes live. We stay close, explain each step in plain language, and help your team use what we build with confidence.",
      quote:
        '"Good digital tools should make a busy day feel a little lighter."',
      cta: "Read Our Story",
      photoCaption: "A small team, ready to listen and build alongside your business.",
      teamImageAlt: "Selenium Digital Consultant team in discussion",
      valueProps: [
        {
          title: "User-First Design",
          desc: "Every product is built with the end user in mind, making it easy to adopt and run.",
        },
        {
          title: "Honest Guidance",
          desc: "We recommend only what your business truly needs. No over-engineering, no unnecessary costs.",
        },
        {
          title: "Local Commitment",
          desc: "We understand Pontianak and local business challenges, offering direct support whenever you need it.",
        },
      ],
    },

    // ── Testimonials Section ──
    testimonials: {
      tag: "Client Success",
      heading: "What Pontianak Business Owners Say",
      subheading: "Real stories from local entrepreneurs and teams who modernized their daily operations with Selenium.",
      items: [
        {
          quote: "The online ordering website built by Selenium is incredibly simple. Our customers love it, and our daily sales have steadily increased because ordering is now friction-free.",
          name: "Ibu Yanti",
          role: "Owner",
          company: "Kedai Kopi Lokal Pontianak",
          image: ""
        },
        {
          quote: "Selenium helped automate our inventory tracking system. Our warehouse team now works much faster, and recording errors have been completely eliminated.",
          name: "Pak Budi",
          role: "Operations Director",
          company: "CV Pontianak Distribusi",
          image: ""
        },
        {
          quote: "Working with the Selenium team is a breeze. They explain technical terms in a relaxed, plain-language way that makes the entire process stress-free.",
          name: "Andi",
          role: "Founder",
          company: "Borneo Food Startup",
          image: ""
        }
      ]
    },

    // ── Partners Section ──
    partners: {
      heading: "Trusted by local businesses & institutions",
      items: [
        { name: "CV Pontianak Distribusi" },
        { name: "Kedai Kopi Lokal Pontianak" },
        { name: "Borneo Food Startup" },
        { name: "PMKM IF UNTAN" }
      ]
    },

    // ── Dedicated About Page ──
    aboutPage: {
      title: "Behind every digital product, there is a story waiting to be realized",
      eyebrow: "Our Story",
      storyHeading: "Who We Are & Why We Build",
      storyParagraph1: "We began with a simple belief: digital tools should help a business run more smoothly, not create more work. Many local business owners in Pontianak want to grow online but are unsure where to start. We are here to make that first step feel clear.",
      storyParagraph2: "We learn how your business works, listen to the problems you meet every day, and build only what can help. You will always know what is being made, why it matters, and how to use it.",
      valuesHeading: "Our Core Principles",
      valuesItems: [
        { title: "Put Users First", desc: "We design simple, intuitive interfaces that anyone can use without special training." },
        { title: "Impact Over Complexity", desc: "A simple solution that works is infinitely better than a complex system that collects dust." },
        { title: "Clear & Honest Communication", desc: "We speak human, not code. We are transparent about what works and what is unnecessary." },
        { title: "Grow with Our Clients", desc: "Your growth is our growth. We build relationships that last beyond the launch date." }
      ],
      visionHeading: "Vision",
      visionText: "To be a trusted digital partner for small and local businesses in Pontianak and across Indonesia.",
      missionHeading: "Mission",
      missionItems: [
        "Make websites and tools that are easy to use and useful every day.",
        "Give honest advice, without adding features or costs you do not need.",
        "Help local businesses learn and grow with digital tools at their own pace."
      ],
      teamHeading: "Meet Our Team",
      teamSubheading: "The humans who transform your business ideas into working digital products.",
      teamMembers: [
        { name: "Muhammad Za'im Shidqi", role: "Co-Founder & Technical Lead", desc: "Architecting clean, scalable systems that solve real-world problems." },
        { name: "Team Member 2", role: "UI/UX Designer", desc: "Designing accessible and beautiful interfaces built for Pontianak businesses." },
        { name: "Team Member 3", role: "Full-Stack Developer", desc: "Translating mockups and designs into robust, high-performance web systems." }
      ]
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
        { label: "About", href: "/about" },
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
      eyebrow: "Solusi Digital untuk UMKM",
      headline1: "Bikin Usaha Anda",
      headline2: "Lebih Rapi dan Mudah",
      headline3: "Dikelola Setiap Hari",
      subheadline:
        "Selenium hadir di Pontianak sebagai konsultan yang menyediakan jasa pembuatan software dan perangkat lunak untuk membantu UMKM bekerja lebih praktis, tertata, dan siap berkembang.",
      ctaPrimary: "Konsultasi Gratis via WhatsApp",
      ctaSecondary: "Lihat Layanan Kami",
      // TODO: Replace these placeholder metrics with verified business numbers when available.
      stat1Value: "10+",
      stat1Label: "Klien",
      stat2Value: "15+",
      stat2Label: "Proyek Selesai",
      stat3Value: "3",
      stat3Label: "Tahun Pengalaman",
      stat4Value: "100%",
      stat4Label: "Kepuasan Klien",
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
      heading: "Bantuan digital yang mengikuti cara bisnis Anda bekerja.",
      paragraph1:
        "Selenium berawal dari banyak obrolan dengan pemilik usaha di Pontianak yang ingin melayani pelanggan lebih baik, tetapi bingung harus mulai dari mana. Kami mendengarkan dulu, lalu membantu mengubah kebutuhan sehari-hari menjadi website atau sistem yang terasa akrab dan bermanfaat.",
      paragraph2:
        "Pekerjaan kami tidak berhenti saat website diluncurkan. Kami mendampingi, menjelaskan setiap langkah dengan bahasa sederhana, dan membantu tim Anda memakai hasilnya dengan percaya diri.",
      quote:
        '"Alat digital yang baik membuat hari kerja yang sibuk terasa lebih ringan."',
      cta: "Pelajari Cerita Kami",
      photoCaption: "Tim kecil yang siap mendengarkan dan membangun bersama bisnis Anda.",
      teamImageAlt: "Tim Selenium Digital Consultant sedang berdiskusi",
      valueProps: [
        {
          title: "Fokus Pada Kebutuhan Pengguna",
          desc: "Setiap produk dibuat dengan memikirkan pengguna akhir, sehingga mudah digunakan dan dipahami.",
        },
        {
          title: "Pendampingan Jujur",
          desc: "Kami merekomendasikan apa yang benar-benar dibutuhkan bisnis Anda. Tanpa biaya atau fitur yang berlebihan.",
        },
        {
          title: "Komitmen Lokal",
          desc: "Kami memahami lanskap bisnis di Pontianak dan Kalimantan Barat, siap mendampingi langsung kapan pun dibutuhkan.",
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
        { label: "Tentang", href: "/about" },
      ],
      legalLinks: [
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat Layanan", href: "#" },
      ],
    },

    // ── Testimoni Klien ──
    testimonials: {
      tag: "Testimoni Klien",
      heading: "Apa Kata Pemilik Bisnis di Pontianak",
      subheading: "Cerita nyata dari para pengusaha dan tim lokal yang merapikan operasional harian mereka bersama Selenium.",
      items: [
        {
          quote: "Website pemesanan online buatan Selenium sangat praktis. Pelanggan kami menyukainya, dan omzet harian kami terus naik karena proses order jadi instan tanpa ribet.",
          name: "Ibu Yanti",
          role: "Owner",
          company: "Kedai Kopi Lokal Pontianak",
          image: ""
        },
        {
          quote: "Selenium membantu kami membuat pencatatan stok otomatis. Kerja tim gudang kami jadi jauh lebih cepat, dan kesalahan input barang sekarang sudah hilang sepenuhnya.",
          name: "Pak Budi",
          role: "Direktur Operasional",
          company: "CV Pontianak Distribusi",
          image: ""
        },
        {
          quote: "Bekerja bersama tim Selenium sangat menyenangkan. Mereka menjelaskan aspek teknis dengan bahasa santai yang mudah dipahami oleh kami yang awam teknologi.",
          name: "Andi",
          role: "Founder",
          company: "Borneo Food Startup",
          image: ""
        }
      ]
    },

    // ── Mitra Kami ──
    partners: {
      heading: "Dipercaya oleh bisnis lokal & instansi",
      items: [
        { name: "CV Pontianak Distribusi" },
        { name: "Kedai Kopi Lokal Pontianak" },
        { name: "Borneo Food Startup" },
        { name: "PMKM IF UNTAN" }
      ]
    },

    // ── Dedicated About Page ──
    aboutPage: {
      title: "Di balik setiap produk digital, ada cerita yang ingin diwujudkan.",
      eyebrow: "Cerita Kami",
      storyHeading: "Siapa Kami & Kenapa Kami Membangun",
      storyParagraph1: "Kami memulai dari keyakinan sederhana: alat digital seharusnya membantu bisnis berjalan lebih lancar, bukan menambah pekerjaan. Banyak pemilik usaha di Pontianak ingin tumbuh secara online, tetapi belum tahu harus mulai dari mana. Kami hadir agar langkah pertama itu terasa jelas.",
      storyParagraph2: "Kami mempelajari cara kerja bisnis Anda, mendengarkan kendala sehari-hari, lalu membuat hal yang memang dapat membantu. Anda selalu tahu apa yang sedang dibuat, alasan di baliknya, dan cara memakainya.",
      valuesHeading: "Prinsip Utama Kami",
      valuesItems: [
        { title: "Mengutamakan Kebutuhan Pengguna", desc: "Kami merancang antarmuka yang sederhana dan intuitif sehingga siapa pun dapat menggunakannya tanpa pelatihan khusus." },
        { title: "Sederhana Tapi Berdampak", desc: "Solusi sederhana yang berfungsi jauh lebih berharga daripada sistem rumit yang akhirnya tidak terpakai." },
        { title: "Komunikasi yang Jelas & Jujur", desc: "Kami berbicara dengan bahasa manusia, bukan kode. Kami terbuka tentang apa yang berfungsi dan apa yang tidak perlu dilakukan." },
        { title: "Bertumbuh Bersama Klien", desc: "Pertumbuhan Anda adalah keberhasilan kami. Kami membangun kemitraan yang bertahan lama setelah produk selesai dirilis." }
      ],
      visionHeading: "Visi Kami",
      visionText: "Menjadi mitra digital yang dipercaya oleh UMKM dan bisnis lokal di Pontianak hingga seluruh Indonesia.",
      missionHeading: "Misi Kami",
      missionItems: [
        "Membuat website dan alat bantu yang mudah dipakai serta berguna setiap hari.",
        "Memberi saran yang jujur, tanpa menambahkan fitur atau biaya yang tidak dibutuhkan.",
        "Membantu bisnis lokal belajar dan bertumbuh dengan alat digital sesuai langkahnya."
      ],
      teamHeading: "Tim Kami",
      teamSubheading: "Orang-orang di balik layar yang mengubah ide bisnis Anda menjadi produk digital siap pakai.",
      teamMembers: [
        { name: "Muhammad Za'im Shidqi", role: "Co-Founder & Technical Lead", desc: "Merancang sistem yang bersih, andal, dan mampu menyelesaikan masalah nyata bisnis Anda." },
        { name: "Anggota Tim 2", role: "Desainer UI/UX", desc: "Merancang tampilan aplikasi yang cantik, ramah pengguna, dan dekat dengan audiens Pontianak." },
        { name: "Anggota Tim 3", role: "Full-Stack Developer", desc: "Mengubah desain menjadi sistem web yang tangguh, aman, dan berkecepatan tinggi." }
      ]
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
