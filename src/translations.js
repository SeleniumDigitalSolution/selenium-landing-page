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
      home: "Home",
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
      cta: "Ask via WhatsApp",
      detailCta: "View Details",
      backCta: "Back to Services",
      benefitsHeading: "Business Benefits",
      processHeading: "How We Work",
      notFoundTitle: "Service Not Found",
      notFoundDescription:
        "The service page you are looking for is unavailable or has been moved.",
      items: [
        {
          icon: "cloud",
          slug: "jasa-website",
          title: "Reliable Online Business Systems",
          description:
            "Keep your business website and application fast, secure, and ready to grow, with guidance from a Pontianak consultant who helps you avoid downtime and unnecessary costs.",
          longDescription:
            "For businesses in Pontianak, a website or online system should do more than look good. We help you plan, build, and maintain a reliable digital presence that customers can access easily and your team can manage without technical stress.",
          benefits: [
            "A faster and more trustworthy website for customers",
            "Clearer online information about your products or services",
            "Lower risk of downtime during busy business hours",
            "A system that can grow as your business grows",
          ],
          process: [
            "Business needs discussion",
            "Scope and proposal",
            "Build and content setup",
            "Testing and handover",
          ],
          metaTitle:
            "Jasa Website Pontianak | Reliable Business Website & System",
          metaDescription:
            "Need jasa website in Pontianak? Build a fast, secure business website or online system that is easy to manage and ready to grow.",
          tags: ["Stable System", "Secure Access", "Cost Efficient", "Growth Ready"],
        },
        // {
        //   icon:        'shield',
        //   title:       'Cybersecurity & Compliance',
        //   description: 'Protect your business with enterprise-grade security frameworks, penetration testing, SIEM integration, and full ISO 27001 / SOC 2 compliance consulting.',
        //   tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        // },
        {
          icon: "code",
          slug: "jasa-aplikasi",
          title: "Custom Business Applications",
          description:
            "Build a website, application, or software that matches your daily workflow, makes admin work easier, and gives customers a smoother way to reach your business.",
          longDescription:
            "When spreadsheets and manual notes start slowing the team down, a custom application can make daily operations easier. We design business software around your real workflow, so your team can record, search, approve, and report work in one organized place.",
          benefits: [
            "Daily admin work becomes simpler and faster",
            "Customer and transaction data is easier to find",
            "Features are built around your actual workflow",
            "The application can be improved step by step",
          ],
          process: [
            "Workflow mapping",
            "Feature proposal",
            "Application development",
            "Training and handover",
          ],
          metaTitle: "Jasa Aplikasi Bisnis Pontianak | Custom Software",
          metaDescription:
            "Build a custom business application in Pontianak to simplify admin work, organize data, and support your team's daily workflow.",
          tags: [
            "Easy to Use",
            "Time Saving",
            "Custom Fit",
            "Clear Pricing",
          ],
        },
        {
          icon: "database",
          slug: "dashboard-bisnis",
          title: "Business Reports & Dashboards",
          description:
            "Turn scattered sales, stock, and customer data into clear reports so owners and managers can make faster decisions without guessing.",
          longDescription:
            "Good decisions need clear numbers. We help turn sales, stock, customer, and operational data into dashboards and reports that business owners can read quickly, without digging through scattered files every day.",
          benefits: [
            "Sales and stock trends are easier to monitor",
            "Owners can make decisions with clearer data",
            "Reports are faster to prepare and share",
            "Business performance is easier to review every month",
          ],
          process: [
            "Data source review",
            "Report structure planning",
            "Dashboard setup",
            "Review and team guidance",
          ],
          metaTitle: "Dashboard Bisnis Pontianak | Reports for Better Decisions",
          metaDescription:
            "Create business dashboards in Pontianak to organize sales, stock, and customer data into reports that help owners decide faster.",
          tags: ["Clear Reports", "Faster Decisions", "Organized Data"],
        },
        {
          icon: "cpu",
          slug: "otomasi-bisnis",
          title: "Smart Operations Automation",
          description:
            "Use practical automation to handle repetitive tasks, respond faster to customers, and reduce manual errors in your business application or internal software.",
          longDescription:
            "Repetitive work can quietly consume hours every week. We help identify tasks that can be automated safely, then build practical flows that reduce copy-paste work, speed up responses, and keep your team focused on higher-value activities.",
          benefits: [
            "Less time spent on repetitive manual tasks",
            "Faster response for customers and internal teams",
            "Lower risk of typing and copy-paste errors",
            "Operations stay consistent even when work gets busy",
          ],
          process: [
            "Automation opportunity review",
            "Flow and rule planning",
            "Automation setup",
            "Testing and improvement",
          ],
          metaTitle: "Otomasi Bisnis Pontianak | Save Time with Automation",
          metaDescription:
            "Use business automation in Pontianak to reduce repetitive work, speed up responses, and lower manual errors in daily operations.",
          tags: [
            "Time Saving",
            "Less Manual Work",
            "Fast Response",
            "Easy to Scale",
          ],
        },
        {
          icon: "settings",
          slug: "konsultan-it",
          title: "Digital System Care",
          description:
            "Keep your website, application, and software running smoothly with routine checks, fast support, and a consultant who helps your team solve issues before they disrupt work.",
          longDescription:
            "A digital system needs regular care after launch. As an IT consultant in Pontianak, we help monitor issues, review risks, support your team, and keep your website or software stable so operations do not stop at the worst moment.",
          benefits: [
            "Problems are handled before they become bigger disruptions",
            "Your team gets a clear place to ask for IT help",
            "Website and application performance is reviewed regularly",
            "Business owners can focus more on operations",
          ],
          process: [
            "System health review",
            "Support priority setup",
            "Routine maintenance",
            "Monthly recommendations",
          ],
          metaTitle: "Konsultan IT Pontianak | Website & Software Support",
          metaDescription:
            "Work with an IT consultant in Pontianak to keep your website, application, and software stable with routine checks and fast support.",
          tags: ["Fast Support", "Less Downtime", "Routine Checks", "Peace of Mind"],
        },
        {
          icon: "network",
          slug: "setup-it-kantor",
          title: "Office IT & CCTV Setup",
          description:
            "Set up office internet, employee computers, and CCTV so your team in Pontianak can work safely, stay connected, and get daily operations moving without technical confusion.",
          longDescription:
            "A productive office starts with practical IT that works every day. We help set up office networks, employee computers, and CCTV systems so your team can stay connected, work securely, and avoid confusing setup problems.",
          benefits: [
            "Office devices are ready for daily work",
            "Internet and local network setup is tidier",
            "CCTV helps improve workplace security",
            "Employees get support when setup problems appear",
          ],
          process: [
            "Office needs survey",
            "Device and network plan",
            "Installation and setup",
            "Testing and documentation",
          ],
          metaTitle: "Setup IT Kantor Pontianak | Network, Computer & CCTV",
          metaDescription:
            "Set up office IT in Pontianak, including network, employee computers, and CCTV, so your team can work safely and stay connected.",
          tags: [
            "Smooth Operations",
            "Office Security",
            "Ready to Use",
            "Fast Support",
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
        { name: "DTLawyers" },
        { name: "SMAN 13 Pontianak" }
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
          title: "Website Company Profile",
          client: "Web Development",
          description:
            "Built an interactive website serving as an information hub to provide easy public access to your business",
          tags: ["Frontend", "UI/UX Design"],
          url: "https://dtlawyers.id",
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
          image: "/catalog/catalog-1.webp",
          title: "Landing Page",
          description:
            "High-performance sales pages specifically designed to maximize conversion rates and loading speeds.",
        },
        {
          id: 2,
          image: "/catalog/catalog-2.webp",
          title: "System Integration",
          description:
            "Seamlessly connecting various platforms and APIs to ensure automated and fluid business data workflows.",
        },
        {
          id: 3,
          image: "/catalog/catalog-3.webp",
          title: "Building Custom App",
          description:
            "Tailor-made web or mobile applications built from the ground up to match your unique workflow and business requirements.",
        },
        {
          id: 4,
          image: "/catalog/catalog-4.webp",
          title: "Business Automation",
          description:
            "Streamlining repetitive tasks to boost operational efficiency and minimize the risk of human error.",
        },
        {
          id: 5,
          image: "/catalog/catalog-5.webp",
          title: "Digital System Audit",
          description:
            "Comprehensive evaluation of digital infrastructure to identify security vulnerabilities, performance bottlenecks, and optimization paths.",
        },
        {
          id: 6,
          image: "/catalog/catalog-6.webp",
          title: "WhatsApp Bot",
          description:
            "Intelligent chatbot solutions for 24/7 customer service, automated lead management, and real-time messaging integration.",
        },
        {
          id: 7,
          image: "/catalog/catalog-7.webp",
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
      email: "support@selenium.works",
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

    // ── Client Testimonials ──
    testimonials: {
      tag: "Client Testimonials",
      heading: "What Business Owners in Pontianak Say",
      subheading: "Real stories from local entrepreneurs and teams who streamlined their daily operations with Selenium.",
      items: [
        {
          quote: "The online ordering website built by Selenium is very practical. Our customers love it, and our daily turnover keeps growing because the ordering process is instant and hassle-free.",
          name: "Mrs. Yanti",
          role: "Owner",
          company: "Kedai Kopi Lokal Pontianak",
          image: ""
        },
        {
          quote: "Selenium helped us automate our inventory tracking. Our warehouse team works much faster, and data input errors are now completely eliminated.",
          name: "Mr. Budi",
          role: "Operations Director",
          company: "CV Pontianak Distribusi",
          image: ""
        },
        {
          quote: "Working with the Selenium team was a great experience. They explained technical concepts in simple language that was easy for us to understand.",
          name: "Andi",
          role: "Founder",
          company: "Borneo Food Startup",
          image: ""
        }
      ]
    },

    // ── Our Partners ──
    partners: {
      heading: "Trusted by local businesses & institutions",
      items: [
        {
          name: "DTLawyers",
          logo: "/partners/dtlawyers.svg"
        },
        {
          name: "SMAN 13 Pontianak",
          logo: "/partners/sman13.svg"
        }
      ]
    },

    // ── Dedicated About Page ──
    aboutPage: {
      title: "Behind every digital product, there is a story waiting to be told.",
      eyebrow: "Our Story",
      storyHeading: "Who We Are & Why We Build",
      storyParagraph1: "We started with a simple belief: digital tools should help businesses run smoother, not add extra work. Many business owners in Pontianak want to grow online, but don't know where to start. We are here to make that first step clear and manageable.",
      storyParagraph2: "We learn how your business operates, listen to daily pain points, and build solutions that genuinely help. You'll always know what is being built, why, and how to use it.",
      valuesHeading: "Our Core Principles",
      valuesItems: [
        { title: "User-First Approach", desc: "We design simple, intuitive interfaces that anyone on your team can use without extensive training." },
        { title: "Simple Yet Impactful", desc: "A simple solution that works reliably is far more valuable than an overly complex system that goes unused." },
        { title: "Clear & Honest Communication", desc: "We speak human, not code. We are transparent about what works and what isn't necessary." },
        { title: "Growing Together", desc: "Your growth is our success. We build partnerships that last long after the initial launch." }
      ],
      visionHeading: "Our Vision",
      visionText: "To become the trusted digital partner for MSMEs and local businesses in Pontianak and across Indonesia.",
      missionHeading: "Our Mission",
      missionItems: [
        "Create practical, easy-to-use websites and digital tools for everyday business.",
        "Provide honest consulting without upselling unnecessary features or costs.",
        "Empower local businesses to adopt digital solutions at their own pace."
      ],
      teamHeading: "Our Team",
      teamSubheading: "The dedicated individuals behind the scenes turning your business ideas into reality.",
      teamMembers: [
        {
          name: "Willy Wijaya",
          role: "Co-Founder & Strategic Solutions Architect",
          desc: "Translating complex business needs into clear product strategies and scalable code, ensuring every digital solution delivers real commercial value.",
          image: "/team/willy.png"
        },
        {
          name: "Muhammad Za'im Shidqi",
          role: "Growth Lead & Creative Technologist",
          desc: "Connecting digital innovation with market demand through data-driven growth strategies, brand storytelling, and modern web experiences.",
          image: "/team/zaim.png"
        },
        {
          name: "Arya Dwi Putra",
          role: "Engineering Lead & Project Manager",
          desc: "Orchestrating end-to-end software delivery and sprint execution with precision, balancing clean engineering architecture with timely milestones.",
          image: "/team/arya.png"
        },
        {
          name: "I Wayan Satya Widhya Putra Pratama",
          role: "Chief Technology Explorer & Systems Architect",
          desc: "Pioneering the adoption of modern frameworks, emerging tech stacks, and high-performance infrastructure to build future-proof software.",
          image: "/team/wayan.png"
        }
      ]
    },
  },

  /* ══════════════════════════════════════════════
     BAHASA INDONESIA (id)
     ══════════════════════════════════════════════ */
  id: {
    // ── Navigasi ──
    nav: {
      brand: "Selenium",
      home: "Beranda",
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
      cta: "Tanya via WhatsApp",
      detailCta: "Lihat Detail",
      backCta: "Kembali ke Layanan",
      benefitsHeading: "Manfaat untuk Bisnis",
      processHeading: "Alur Kerja Kami",
      notFoundTitle: "Layanan Tidak Ditemukan",
      notFoundDescription:
        "Halaman layanan yang Anda cari tidak tersedia atau sudah dipindahkan.",
      items: [
        {
          icon: "cloud",
          slug: "jasa-website",
          title: "Sistem Online yang Stabil",
          description:
            "Jasa website dan aplikasi untuk menjaga sistem bisnis Anda tetap cepat, aman, dan siap berkembang bersama konsultan Pontianak yang membantu mencegah downtime dan biaya yang tidak perlu.",
          longDescription:
            "Untuk bisnis di Pontianak, website atau sistem online sebaiknya tidak hanya terlihat bagus. Kami membantu merencanakan, membangun, dan merawat kehadiran digital yang mudah diakses pelanggan dan mudah dikelola tim tanpa beban teknis.",
          benefits: [
            "Website lebih cepat dan lebih dipercaya pelanggan",
            "Informasi produk atau layanan lebih mudah ditemukan",
            "Risiko downtime saat jam sibuk lebih rendah",
            "Sistem siap dikembangkan saat bisnis bertumbuh",
          ],
          process: [
            "Diskusi kebutuhan bisnis",
            "Ruang lingkup dan proposal",
            "Pengerjaan dan pengisian konten",
            "Testing dan serah terima",
          ],
          metaTitle: "Jasa Website Pontianak | Website & Sistem Bisnis Stabil",
          metaDescription:
            "Butuh jasa website di Pontianak? Bangun website atau sistem online bisnis yang cepat, aman, mudah dikelola, dan siap berkembang.",
          tags: ["Sistem Stabil", "Akses Aman", "Hemat Biaya", "Siap Berkembang"],
        },
        // {
        //   icon:        'shield',
        //   title:       'Keamanan Siber & Kepatuhan',
        //   description: 'Lindungi bisnis Anda dengan kerangka keamanan enterprise, pengujian penetrasi, integrasi SIEM, dan konsultasi kepatuhan ISO 27001 / SOC 2 yang komprehensif.',
        //   tags:        ['SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM'],
        // },
        {
          icon: "code",
          slug: "jasa-aplikasi",
          title: "Aplikasi Bisnis Sesuai Kebutuhan",
          description:
            "Bangun website, aplikasi, atau perangkat lunak yang sesuai alur kerja harian, memudahkan administrasi, dan memberi pelanggan cara yang lebih nyaman untuk menjangkau bisnis Anda.",
          longDescription:
            "Saat spreadsheet dan catatan manual mulai memperlambat tim, aplikasi khusus bisa membuat operasional harian jauh lebih rapi. Kami merancang perangkat lunak bisnis sesuai alur kerja nyata agar pencatatan, pencarian, persetujuan, dan laporan berada di satu tempat.",
          benefits: [
            "Administrasi harian menjadi lebih mudah dan cepat",
            "Data pelanggan dan transaksi lebih mudah dicari",
            "Fitur dibangun sesuai alur kerja bisnis Anda",
            "Aplikasi bisa dikembangkan bertahap sesuai kebutuhan",
          ],
          process: [
            "Pemetaan alur kerja",
            "Proposal fitur",
            "Pengembangan aplikasi",
            "Pelatihan dan serah terima",
          ],
          metaTitle: "Jasa Aplikasi Bisnis Pontianak | Software Custom",
          metaDescription:
            "Bangun aplikasi bisnis custom di Pontianak untuk memudahkan administrasi, merapikan data, dan mendukung alur kerja harian tim.",
          tags: [
            "Mudah Digunakan",
            "Hemat Waktu",
            "Sesuai Kebutuhan",
            "Harga Transparan",
          ],
        },
        {
          icon: "database",
          slug: "dashboard-bisnis",
          title: "Laporan Bisnis & Dashboard",
          description:
            "Ubah data penjualan, stok, dan pelanggan yang tersebar menjadi laporan yang jelas agar pemilik usaha dapat mengambil keputusan lebih cepat tanpa menebak-nebak.",
          longDescription:
            "Keputusan yang baik butuh angka yang jelas. Kami membantu mengubah data penjualan, stok, pelanggan, dan operasional menjadi dashboard serta laporan yang mudah dibaca pemilik usaha tanpa harus membuka banyak file setiap hari.",
          benefits: [
            "Tren penjualan dan stok lebih mudah dipantau",
            "Pemilik usaha mengambil keputusan dengan data yang jelas",
            "Laporan lebih cepat disiapkan dan dibagikan",
            "Performa bisnis lebih mudah dievaluasi setiap bulan",
          ],
          process: [
            "Review sumber data",
            "Perencanaan struktur laporan",
            "Pembuatan dashboard",
            "Review dan pendampingan tim",
          ],
          metaTitle: "Dashboard Bisnis Pontianak | Laporan untuk Keputusan",
          metaDescription:
            "Buat dashboard bisnis di Pontianak untuk merapikan data penjualan, stok, dan pelanggan menjadi laporan yang membantu keputusan lebih cepat.",
          tags: ["Laporan Jelas", "Keputusan Cepat", "Data Rapi"],
        },
        {
          icon: "cpu",
          slug: "otomasi-bisnis",
          title: "Otomasi Pintar untuk Operasional",
          description:
            "Gunakan otomasi praktis untuk menangani pekerjaan berulang, merespons pelanggan lebih cepat, dan mengurangi kesalahan manual di aplikasi bisnis atau perangkat lunak internal.",
          longDescription:
            "Pekerjaan berulang bisa menghabiskan banyak waktu tanpa terasa. Kami membantu menemukan proses yang aman untuk diotomasi, lalu membangun alur praktis agar pekerjaan copy-paste berkurang, respons lebih cepat, dan tim fokus pada pekerjaan yang lebih penting.",
          benefits: [
            "Waktu untuk pekerjaan manual berulang berkurang",
            "Respons ke pelanggan dan tim internal lebih cepat",
            "Risiko salah input dan copy-paste lebih rendah",
            "Operasional tetap konsisten saat pekerjaan sedang ramai",
          ],
          process: [
            "Review peluang otomasi",
            "Perencanaan alur dan aturan",
            "Setup otomasi",
            "Testing dan penyempurnaan",
          ],
          metaTitle: "Otomasi Bisnis Pontianak | Hemat Waktu Operasional",
          metaDescription:
            "Gunakan otomasi bisnis di Pontianak untuk mengurangi pekerjaan berulang, mempercepat respons, dan menekan kesalahan manual.",
          tags: [
            "Hemat Waktu",
            "Kerja Manual Berkurang",
            "Respon Cepat",
            "Mudah Dikembangkan",
          ],
        },
        {
          icon: "settings",
          slug: "konsultan-it",
          title: "Perawatan Sistem Digital",
          description:
            "Jaga website, aplikasi, dan perangkat lunak tetap lancar dengan pengecekan rutin, support cepat, dan konsultan yang membantu tim menyelesaikan masalah sebelum mengganggu pekerjaan.",
          longDescription:
            "Sistem digital perlu dirawat setelah diluncurkan. Sebagai konsultan IT di Pontianak, kami membantu memantau masalah, meninjau risiko, mendukung tim, dan menjaga website atau perangkat lunak tetap stabil agar operasional tidak berhenti di momen penting.",
          benefits: [
            "Masalah ditangani sebelum menjadi gangguan besar",
            "Tim punya tempat yang jelas untuk meminta bantuan IT",
            "Performa website dan aplikasi dicek berkala",
            "Pemilik bisnis bisa lebih fokus pada operasional",
          ],
          process: [
            "Review kesehatan sistem",
            "Penentuan prioritas support",
            "Perawatan rutin",
            "Rekomendasi bulanan",
          ],
          metaTitle: "Konsultan IT Pontianak | Support Website & Software",
          metaDescription:
            "Gunakan konsultan IT di Pontianak untuk menjaga website, aplikasi, dan perangkat lunak tetap stabil melalui cek rutin dan support cepat.",
          tags: ["Support Cepat", "Minim Gangguan", "Cek Rutin", "Lebih Tenang"],
        },
        {
          icon: "network",
          slug: "setup-it-kantor",
          title: "Setup IT Kantor & CCTV",
          description:
            "Siapkan internet kantor, komputer karyawan, dan CCTV agar tim di Pontianak bisa bekerja aman, tetap terhubung, dan menjalankan operasional harian tanpa bingung urusan teknis.",
          longDescription:
            "Kantor yang produktif membutuhkan IT praktis yang berjalan setiap hari. Kami membantu setup jaringan kantor, komputer karyawan, dan CCTV agar tim tetap terhubung, bekerja aman, dan tidak bingung menghadapi masalah setup.",
          benefits: [
            "Perangkat kantor siap dipakai untuk kerja harian",
            "Internet dan jaringan lokal lebih tertata",
            "CCTV membantu meningkatkan keamanan tempat kerja",
            "Karyawan mendapat dukungan saat ada kendala setup",
          ],
          process: [
            "Survei kebutuhan kantor",
            "Rencana perangkat dan jaringan",
            "Instalasi dan setup",
            "Testing dan dokumentasi",
          ],
          metaTitle: "Setup IT Kantor Pontianak | Jaringan, Komputer & CCTV",
          metaDescription:
            "Setup IT kantor di Pontianak untuk jaringan, komputer karyawan, dan CCTV agar tim bisa bekerja aman dan tetap terhubung.",
          tags: [
            "Operasional Lancar",
            "Keamanan Kantor",
            "Siap Digunakan",
            "Support Cepat",
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
          title: "Website Profil Bisnis",
          client: "Web Development",
          description:
            "Membangun website profil sebagai pilar informasi utama yang memudahkan akses publik terhadap bisnis anda",
          tags: ["Frontend", "UI/UX Design"],
          url: "https://dtlawyers.id",
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
          image: "/catalog/catalog-1.webp",
          title: "Landing Page",
          description:
            "Halaman penjualan berperforma tinggi yang dirancang khusus untuk memaksimalkan konversi dan kecepatan akses.",
        },
        {
          id: 2,
          image: "/catalog/catalog-2.webp",
          title: "Integrasi Sistem",
          description:
            "Menghubungkan berbagai platform dan API untuk memastikan alur data bisnis Anda berjalan mulus tanpa hambatan manual.",
        },
        {
          id: 3,
          image: "/catalog/catalog-3.webp",
          title: "Building Custom App",
          description:
            "Pengembangan aplikasi web atau mobile yang dibangun dari nol sesuai dengan alur kerja unik dan kebutuhan spesifik bisnis Anda.",
        },
        {
          id: 4,
          image: "/catalog/catalog-4.webp",
          title: "Automation Bisnis",
          description:
            "Otomatisasi proses repetitif untuk meningkatkan efisiensi operasional dan meminimalisir risiko kesalahan manusia (human error).",
        },
        {
          id: 5,
          image: "/catalog/catalog-5.webp",
          title: "Digital System Audit",
          description:
            "Evaluasi mendalam terhadap infrastruktur digital untuk menemukan celah keamanan, bottleneck performa, dan peluang optimasi.",
        },
        {
          id: 6,
          image: "/catalog/catalog-6.webp",
          title: "Whatsapp Bot",
          description:
            "Solusi chatbot pintar untuk melayani pelanggan 24/7, manajemen prospek otomatis, dan integrasi pesan real-time.",
        },
        {
          id: 7,
          image: "/catalog/catalog-7.webp",
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
      email: "support@selenium.works",
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
        {
          name: "DTLawyers",
          logo: "/partners/dtlawyers.svg"
        },
        {
          name: "SMAN 13 Pontianak",
          logo: "/partners/sman13.svg"
        }
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
        {
          name: "Willy Wijaya",
          role: "Co-Founder & Strategic Solutions Architect",
          desc: "Menyelaraskan kebutuhan bisnis dengan strategi produk yang terarah dan arsitektur kode yang skalabel, memastikan setiap solusi membawa dampak nyata.",
          image: "/team/willy.png"
        },
        {
          name: "Muhammad Za'im Shidqi",
          role: "Growth Lead & Creative Technologist",
          desc: "Menghubungkan inovasi digital dengan pasar melalui strategi pertumbuhan berbasis data, komunikasi kreatif, dan pengembangan web modern.",
          image: "/team/zaim.png"
        },
        {
          name: "Arya Dwi Putra",
          role: "Engineering Lead & Project Manager",
          desc: "Memimpin eksekusi proyek dan delivery teknis secara presisi, menjaga keseimbangan antara arsitektur software yang bersih dan target waktu yang disiplin.",
          image: "/team/arya.png"
        },
        {
          name: "I Wayan Satya Widhya Putra Pratama",
          role: "Chief Technology Explorer & Systems Architect",
          desc: "Mengeksplorasi teknologi mutakhir, framework modern, dan infrastruktur berkinerja tinggi untuk membangun sistem perangkat lunak yang tahan masa depan.",
          image: "/team/wayan.png"
        }
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
