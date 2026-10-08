/**
 * sosialinPage.js — Landing Page Produk "Sosialin"
 * Halaman terintegrasi untuk website utama Selenium Digital Consultant.
 * URL: /products/sosialin
 */

export function renderSosialinPageContent() {
  return `
  <style>
    /* ─── Styling Khusus Halaman Sosialin ─── */
    .sosialin-wrap {
      --s-primary: var(--primary, #0A64BC);
      --s-primary-dark: var(--primary-dark, #084E93);
      --s-primary-tint: var(--primary-tint, #E8F1FB);
      --s-secondary: var(--secondary, #0D9488);
      --s-secondary-dark: var(--secondary-dark, #0B7A70);
      --s-secondary-tint: var(--secondary-tint, #E1F5F2);
      --s-accent: var(--accent, #F2994A);
      --s-accent-dark: var(--accent-dark, #D97C2B);
      --s-accent-tint: var(--accent-tint, #FDEEE0);
      --s-bg: var(--bg, #FFFAFF);
      --s-surface: var(--surface, #FFFFFF);
      --s-surface-2: var(--surface-2, #F6F2F7);
      --s-border: var(--border, #E5E1E8);
      --s-border-strong: var(--border-strong, #D3CDDA);
      --s-text: var(--text-primary, #171A2B);
      --s-text-muted: var(--text-secondary, #5B5E6B);
      --s-text-light: var(--text-muted, #8B8E9A);
      color: var(--s-text);
      font-family: var(--font-body);
    }

    .sosialin-hero {
      padding-top: 5rem;
      padding-bottom: 4.5rem;
      background: radial-gradient(circle at 50% 0%, var(--s-primary-tint) 0%, transparent 60%);
      position: relative;
    }

    @media (min-width: 1024px) {
      .sosialin-hero {
        padding-top: 6.5rem;
        padding-bottom: 6rem;
      }
    }

    .hero-pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.85rem;
      background-color: var(--s-surface);
      border: 1px solid var(--s-border);
      border-radius: 9999px;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--s-primary);
      margin-bottom: 1.25rem;
      box-shadow: 0 2px 8px rgba(10, 100, 188, 0.06);
    }

    .sosialin-dot-pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--s-secondary);
      box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.7);
      animation: sPulse 2s infinite;
    }

    @keyframes sPulse {
      0% { box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.7); }
      70% { box-shadow: 0 0 0 7px rgba(13, 148, 136, 0); }
      100% { box-shadow: 0 0 0 0 rgba(13, 148, 136, 0); }
    }

    /* ─── Hero: Realistic Dashboard Mockup ─── */
    .hero-browser-chrome {
      background: var(--s-surface);
      border: 1px solid var(--s-border);
      border-radius: 12px;
      box-shadow: 0 24px 56px rgba(10,100,188,0.14), 0 2px 8px rgba(0,0,0,0.06);
      overflow: hidden;
    }
    .browser-topbar {
      background: var(--s-surface-2);
      border-bottom: 1px solid var(--s-border);
      padding: 0.5rem 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .browser-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
    .browser-url-bar {
      flex: 1;
      background: var(--s-surface);
      border: 1px solid var(--s-border);
      border-radius: 5px;
      padding: 0.175rem 0.55rem;
      font-family: ui-monospace, monospace;
      font-size: 0.625rem;
      color: var(--s-text-light);
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .app-shell { display: flex; height: 370px; overflow: hidden; }
    .app-sidebar {
      width: 164px;
      flex-shrink: 0;
      background: var(--s-surface-2);
      border-right: 1px solid var(--s-border);
      display: flex;
      flex-direction: column;
      padding: 0.65rem 0;
    }
    .sidebar-section-label {
      font-size: 0.5625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--s-text-light);
      padding: 0 0.8rem;
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
    }
    .sidebar-flow-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.4rem 0.8rem;
      font-size: 0.6875rem;
      font-weight: 500;
      color: var(--s-text-muted);
      cursor: default;
      border-left: 2px solid transparent;
    }
    .sidebar-flow-item.active {
      background: rgba(10,100,188,0.07);
      color: var(--s-primary);
      font-weight: 700;
      border-left-color: var(--s-primary);
    }
    .sidebar-flow-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
    .app-canvas {
      flex: 1;
      background: var(--s-bg);
      background-image: radial-gradient(var(--s-border-strong) 1px, transparent 1px);
      background-size: 18px 18px;
      padding: 0.85rem;
      position: relative;
      overflow: hidden;
    }
    .canvas-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.65rem;
    }
    .canvas-flow-title {
      font-family: var(--font-heading);
      font-size: 0.6875rem;
      font-weight: 700;
      color: var(--s-text);
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .canvas-status-live {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.625rem;
      font-weight: 600;
      background: #DCFCE7;
      color: #15803D;
      padding: 0.12rem 0.5rem;
      border-radius: 9999px;
    }
    [data-theme="dark"] .canvas-status-live { background: rgba(21,128,61,0.2); color: #4ADE80; }
    .canvas-status-dot { width: 5px; height: 5px; border-radius: 50%; background: #16A34A; }
    .canvas-nodes { display: flex; flex-direction: column; gap: 0; max-width: 195px; }
    .cn-node {
      background: var(--s-surface);
      border: 1.5px solid var(--s-border);
      border-radius: 8px;
      padding: 0.48rem 0.65rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .cn-node.selected { border-color: var(--s-primary); box-shadow: 0 0 0 2.5px rgba(10,100,188,0.13); }
    .cn-connector { padding-left: 15px; }
    .cn-connector-line {
      width: 1.5px; height: 18px;
      background: var(--s-border-strong);
      position: relative;
    }
    .cn-connector-line::after {
      content: "";
      position: absolute;
      bottom: -3px; left: -3px;
      width: 7px; height: 7px;
      border-right: 1.5px solid var(--s-border-strong);
      border-bottom: 1.5px solid var(--s-border-strong);
      transform: rotate(45deg);
    }
    .cn-node-label {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.5625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.17rem;
    }
    .cn-node-body { font-size: 0.6875rem; font-weight: 600; color: var(--s-text); line-height: 1.3; }
    .cn-node-sub { font-size: 0.5625rem; color: var(--s-text-light); margin-top: 0.1rem; }

    /* Floating DM preview */
    .dm-preview-panel {
      position: absolute;
      right: 0.7rem;
      bottom: 0.7rem;
      width: 148px;
      background: var(--s-surface);
      border: 1px solid var(--s-border);
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(0,0,0,0.13);
      overflow: hidden;
    }
    .dm-panel-topbar {
      background: var(--s-surface-2);
      border-bottom: 1px solid var(--s-border);
      padding: 0.38rem 0.55rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .dm-avatar {
      width: 18px; height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--s-primary) 0%, var(--s-secondary) 100%);
      flex-shrink: 0;
    }
    .dm-panel-name { font-size: 0.5625rem; font-weight: 700; color: var(--s-text); line-height: 1.1; }
    .dm-panel-online { font-size: 0.5rem; color: #16A34A; }
    .dm-panel-body { padding: 0.5rem; display: flex; flex-direction: column; gap: 0.32rem; }
    .dm-msg-in {
      background: var(--s-surface-2);
      border-radius: 7px 7px 7px 2px;
      padding: 0.28rem 0.42rem;
      font-size: 0.5625rem;
      line-height: 1.4;
      color: var(--s-text);
      max-width: 92%;
    }
    .dm-msg-out {
      background: var(--s-primary);
      border-radius: 7px 7px 2px 7px;
      padding: 0.28rem 0.42rem;
      font-size: 0.5625rem;
      line-height: 1.4;
      color: #fff;
      align-self: flex-end;
      max-width: 80%;
    }
    .dm-btn-row { display: flex; flex-direction: column; gap: 0.2rem; margin-top: 0.1rem; }
    .dm-cta-btn {
      border-radius: 5px;
      padding: 0.2rem 0.38rem;
      font-size: 0.5rem;
      font-weight: 700;
      text-align: center;
    }
    .dm-cta-btn.outline { border: 1px solid var(--s-primary); color: var(--s-primary); }
    .dm-cta-btn.solid { background: var(--s-primary); color: #fff; }
    .dm-saved-chip {
      background: #DCFCE7;
      color: #15803D;
      border-radius: 5px;
      padding: 0.2rem 0.38rem;
      font-size: 0.5rem;
      font-weight: 700;
      text-align: center;
    }
    [data-theme="dark"] .dm-saved-chip { background: rgba(21,128,61,0.2); color: #4ADE80; }

    .faq-btn-trigger {
      width: 100%;
      text-align: left;
      padding: 1.25rem 1.5rem;
      background: none;
      border: none;
      font-family: var(--font-heading);
      font-size: 1.0625rem;
      font-weight: 700;
      color: var(--s-text);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
    }

    .faq-body-content {
      display: none;
      padding: 0 1.5rem 1.25rem 1.5rem;
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--s-text-muted);
    }

    .faq-entry.active .faq-body-content {
      display: block;
    }

    .faq-entry.active .faq-chevron {
      transform: rotate(180deg);
    }

    .disclaimer-strip {
      background: var(--s-surface-2);
      border-top: 1px solid var(--s-border);
      border-bottom: 1px solid var(--s-border);
      padding: 1.5rem 1.25rem;
      text-align: center;
      font-size: 0.8125rem;
      color: var(--s-text-light);
    }
  </style>

  <div class="sosialin-wrap">
    
    <!-- ═══════════════════════════════════════════════════════════════════
         1. HERO SECTION
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="sosialin-hero" aria-label="Hero Section">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div class="lg:col-span-6 flex flex-col items-start">
            <div class="hero-pill-badge">
              <span class="sosialin-dot-pulse" aria-hidden="true"></span>
              <span>Akses Awal Eksklusif — Kuota Terbatas</span>
            </div>

            <!-- Single H1 (8 kata) -->
            <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4" style="line-height:1.15;">
              Ubah Komentar Instagram Jadi Leads dan <span class="text-se-blue">Penjualan Otomatis</span>
            </h1>

            <p class="text-base sm:text-lg mb-8 leading-relaxed" style="color: var(--s-text-muted);">
              Balas ratusan komentar viral dalam hitungan detik, kirim katalog lewat DM tanpa koding, dan kumpulkan nomor WhatsApp pelanggan secara rapi di satu dasbor.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <a href="#waitlist" class="btn-primary btn-lg flex items-center justify-center gap-2" id="hero-primary-cta">
                <span>Gabung Waiting List</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#cara-kerja" class="btn-ghost btn-lg flex items-center justify-center" id="hero-secondary-cta">
                <span>Lihat Cara Kerja</span>
              </a>
            </div>

            <div class="flex items-center gap-2 text-xs sm:text-sm font-medium" style="color: var(--s-text-light);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--s-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Integrasi resmi Meta Graph API • Tanpa setor password</span>
            </div>
          </div>

          <!-- Hero Visual: Sosialin Dashboard Mockup -->
          <div class="lg:col-span-6">
            <div class="hero-browser-chrome" aria-label="Pratinjau antarmuka Sosialin">
              <!-- Browser chrome bar -->
              <div class="browser-topbar">
                <span class="browser-dot" style="background:#FF5F56"></span>
                <span class="browser-dot" style="background:#FFBD2E"></span>
                <span class="browser-dot" style="background:#27C93F"></span>
                <div class="browser-url-bar">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  app.sosialin.id/flows
                </div>
              </div>

              <!-- App shell: sidebar + canvas -->
              <div class="app-shell">

                <!-- Sidebar: daftar flow -->
                <div class="app-sidebar">
                  <div class="sidebar-section-label">Workspace</div>
                  <div class="sidebar-flow-item" style="font-size:0.625rem;opacity:0.8;">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                    Dasbor
                  </div>

                  <div class="sidebar-section-label" style="margin-top:0.75rem;">Flow Aktif</div>

                  <div class="sidebar-flow-item active">
                    <span class="sidebar-flow-dot" style="background:#16A34A"></span>
                    Promo Ramadan
                  </div>
                  <div class="sidebar-flow-item">
                    <span class="sidebar-flow-dot" style="background:#0A64BC"></span>
                    Welcome Baru
                  </div>
                  <div class="sidebar-flow-item">
                    <span class="sidebar-flow-dot" style="background:#F2994A"></span>
                    Katalog Skincare
                  </div>
                  <div class="sidebar-flow-item">
                    <span class="sidebar-flow-dot" style="background:#8B8E9A"></span>
                    Kursus Online
                  </div>

                  <div class="sidebar-section-label" style="margin-top:0.75rem;">Akun Terhubung</div>
                  <div class="sidebar-flow-item" style="font-size:0.5625rem;">@tokobunga.official</div>
                  <div class="sidebar-flow-item" style="font-size:0.5625rem;opacity:0.65;">@kursusdesain.id</div>
                  <div class="sidebar-flow-item" style="font-size:0.5625rem;opacity:0.65;">@beautylab.id</div>
                </div>

                <!-- Canvas: flow yang sedang dibuka -->
                <div class="app-canvas">
                  <div class="canvas-topbar">
                    <div class="canvas-flow-title">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                      Promo Ramadan — @tokobunga.official
                    </div>
                    <div class="canvas-status-live">
                      <span class="canvas-status-dot"></span>
                      Live
                    </div>
                  </div>

                  <!-- Flow nodes -->
                  <div class="canvas-nodes">

                    <!-- Node 1: Trigger -->
                    <div class="cn-node selected">
                      <div class="cn-node-label" style="color:#0A64BC;">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        Trigger Komentar
                      </div>
                      <div class="cn-node-body">Kata kunci: "INFO", "MAU", "HARGA"</div>
                      <div class="cn-node-sub">Reels + Feed · semua post</div>
                    </div>

                    <div class="cn-connector"><div class="cn-connector-line"></div></div>

                    <!-- Node 2: Follow-Gate -->
                    <div class="cn-node">
                      <div class="cn-node-label" style="color:#0D9488;">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                        Kondisi Follow-Gate
                      </div>
                      <div class="cn-node-body">Sudah follow? Lanjut — Belum? Minta follow</div>
                    </div>

                    <div class="cn-connector"><div class="cn-connector-line"></div></div>

                    <!-- Node 3: Kirim DM -->
                    <div class="cn-node">
                      <div class="cn-node-label" style="color:#D97C2B;">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Kirim Pesan DM
                      </div>
                      <div class="cn-node-body">Sambutan + Tombol Katalog + Input No. WA</div>
                    </div>

                    <div class="cn-connector"><div class="cn-connector-line"></div></div>

                    <!-- Node 4: Simpan Lead -->
                    <div class="cn-node">
                      <div class="cn-node-label" style="color:#16A34A;">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Simpan Lead
                      </div>
                      <div class="cn-node-body">Nama + No. WA masuk ke tabel & CSV</div>
                    </div>

                  </div><!-- /canvas-nodes -->

                  <!-- Floating DM preview panel -->
                  <div class="dm-preview-panel" aria-label="Pratinjau DM otomatis">
                    <div class="dm-panel-topbar">
                      <div class="dm-avatar"></div>
                      <div>
                        <div class="dm-panel-name">Sosialin Bot · @tokobunga</div>
                        <div class="dm-panel-online">● Online</div>
                      </div>
                    </div>
                    <div class="dm-panel-body">
                      <div class="dm-msg-in">Hai kak! Makasih udah komen "INFO" ✨ Ini link promo Ramadannya:</div>
                      <div class="dm-btn-row">
                        <div class="dm-cta-btn solid">Lihat Katalog Promo ↗</div>
                        <div class="dm-cta-btn outline">Chat Tim Penjualan</div>
                      </div>
                      <div class="dm-msg-in" style="margin-top:0.1rem;">Mau diskon tambahan? Ketik nomor WA kamu di sini:</div>
                      <div class="dm-msg-out">08123456789</div>
                      <div class="dm-saved-chip">✓ Lead tersimpan ke tabel</div>
                    </div>
                  </div>

                </div><!-- /app-canvas -->
              </div><!-- /app-shell -->
            </div><!-- /hero-browser-chrome -->
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         2. PROBLEM STRIP
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-16 border-y" style="background-color: var(--s-surface); border-color: var(--s-border);">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="se-card p-6 flex flex-col gap-3">
            <div class="w-11 h-11 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg">Komentar Viral Menumpuk Tanpa Jawaban</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Konten Reels meledak dengan ratusan komentar "Mau info dong kak", tapi admin kewalahan membalas satu per satu secara manual hingga pelanggan hilang minat.
            </p>
          </div>

          <div class="se-card p-6 flex flex-col gap-3">
            <div class="w-11 h-11 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg">Leads Tercecer Akibat Balasan Terlalu Lambat</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Calon pembeli butuh respons instan saat melihat postingan. Terlambat 30 menit membalas DM berarti mereka sudah beralih membeli ke kompetitor.
            </p>
          </div>

          <div class="se-card p-6 flex flex-col gap-3">
            <div class="w-11 h-11 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg">Pusing Bolak-Balik Login Akun Klien</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Agensi dan freelancer harus mengingat puluhan password akun Instagram klien, rawan logout mendadak, dan sulit membagi tugas anggota tim dengan aman.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         3. HOW IT WORKS
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20" id="cara-kerja">
      <div class="section-container text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-se-blue mb-3">Cara Kerja Sederhana</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Hanya 3 Langkah untuk Otomasi Penuh</h2>
        <p style="color: var(--s-text-muted);">Mulai dalam waktu kurang dari 5 menit tanpa perlu keahlian koding teknis.</p>
      </div>

      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="se-card p-8">
            <div class="text-4xl font-extrabold text-se-cyan mb-4 font-mono">01</div>
            <h3 class="font-display font-bold text-lg mb-2">Hubungkan Akun Instagram</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Tautkan akun Instagram Profesional Anda dengan satu klik via integrasi resmi Meta API. Tanpa perlu berbagi password akun.
            </p>
          </div>

          <div class="se-card p-8">
            <div class="text-4xl font-extrabold text-se-cyan mb-4 font-mono">02</div>
            <h3 class="font-display font-bold text-lg mb-2">Bangun Flow Pesan Anda</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Tentukan kata kunci pemicu komentar, aktifkan opsi follow-gate, dan susun pesan DM interaktif menggunakan editor visual drag-and-drop.
            </p>
          </div>

          <div class="se-card p-8">
            <div class="text-4xl font-extrabold text-se-cyan mb-4 font-mono">03</div>
            <h3 class="font-display font-bold text-lg mb-2">Tangkap Prospek Otomatis</h3>
            <p class="text-sm leading-relaxed" style="color: var(--s-text-muted);">
              Setiap komentar otomatis dibalas dan diarahkan ke DM. Sistem mengumpulkan nama, email, dan WhatsApp langsung ke tabel prospek Anda.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         4. CORE FEATURES (ALTERNATING ROWS)
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20" id="fitur" style="background-color: var(--s-surface);">
      <div class="section-container text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 dark:bg-teal-950 text-se-cyan mb-3">Fitur Utama Tahap 1</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Dirancang Khusus untuk Mengubah Interaksi Jadi Konversi</h2>
        <p style="color: var(--s-text-muted);">Fokus pada fitur esensial yang langsung memberikan dampak nyata pada alur kerja dan penjualan Anda.</p>
      </div>

      <div class="section-container space-y-20">
        
        <!-- Row 1: Flow Builder -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-xs font-bold text-se-blue uppercase tracking-wider mb-2 inline-block">Hero Feature</span>
            <h3 class="font-display font-bold text-2xl sm:text-3xl mb-4">No-Code DM Flow Builder: Percakapan Interaktif Otomatis</h3>
            <p class="text-base mb-6 leading-relaxed" style="color: var(--s-text-muted);">
              Susun alur pesan DM yang memandu calon pelanggan mulai dari pertanyaan awal hingga meninggalkan kontak pesanan tanpa intervensi manual.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Tombol aksi (CTA buttons) dan link langsung ke katalog atau website</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Follow-Gate: validasi otomatis apakah pengguna sudah follow akun sebelum link dikirim</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Pengumpulan data nama, nomor WhatsApp, dan email langsung di DM</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Percabangan logika kondisional sesuai pilihan tombol pelanggan</span>
              </li>
            </ul>
          </div>
          <div class="se-card p-6 bg-slate-50 dark:bg-slate-900 border">
            <div class="space-y-3 text-sm">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-se-blue">
                <div class="text-xs text-se-silver font-semibold">LANGKAH 1</div>
                <div class="font-bold">Kirim Pesan Sambutan & Cek Follow-Gate</div>
              </div>
              <div class="text-center text-xs text-se-silver">↓ (Pengguna mengklik tombol "Katalog")</div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-se-cyan">
                <div class="text-xs text-se-silver font-semibold">LANGKAH 2</div>
                <div class="font-bold">Kirim Link Produk + Input Nomor WhatsApp</div>
              </div>
              <div class="text-center text-xs text-se-silver">↓ (Nomor terverifikasi)</div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                <div class="text-xs text-se-silver font-semibold">LANGKAH 3</div>
                <div class="font-bold">Simpan Kontak ke Database Leads CSV</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Auto Reply -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div class="lg:order-2">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 inline-block">Balas Cepat & Natural</span>
            <h3 class="font-display font-bold text-2xl sm:text-3xl mb-4">Auto Reply Komentar: Cepat dan Tidak Kaku</h3>
            <p class="text-base mb-6 leading-relaxed" style="color: var(--s-text-muted);">
              Tanggapi komentar publik secara instan berdasarkan kata kunci tertentu dengan variasi template acak agar terkesan manusiawi dan terhindar dari spam.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Filter kata kunci spesifik (misal: "INFO", "HARGA", "BELI", "DISKON")</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Template balasan bergilir acak (randomized variations) agar interaksi tetap natural</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Pemicu otomatis pembukaan sesi DM secara simultan begitu komentar dibalas</span>
              </li>
            </ul>
          </div>
          <div class="lg:order-1 se-card p-6 bg-slate-50 dark:bg-slate-900 border">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border mb-3">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold text-xs">@rina_lifestyle</span>
                <span class="text-[11px] text-se-silver">2 menit lalu</span>
              </div>
              <div class="text-xs">Keren banget! Kak mau info harga paket lengkapnya dong</div>
            </div>
            <div class="ml-6 bg-blue-50 dark:bg-blue-950/40 p-4 rounded-lg border-l-2 border-se-blue">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold text-xs text-se-blue">@brandkamu</span>
                <span class="text-[11px] text-se-silver">Baru saja</span>
              </div>
              <div class="text-xs leading-relaxed">
                Hai kak @rina_lifestyle! Detail harga dan katalog sudah kami kirimkan ke DM kakak ya, silakan dicek inbox-nya ✨
              </div>
              <div class="mt-2 text-[10px] font-semibold text-se-blue bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded inline-block">
                ✓ Template Acak Variasi B • Terkirim 2 detik
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Post Scheduler -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-xs font-bold text-se-blue uppercase tracking-wider mb-2 inline-block">Jadwal Teratur</span>
            <h3 class="font-display font-bold text-2xl sm:text-3xl mb-4">Instagram Post Scheduler: Kalender & First Comment</h3>
            <p class="text-base mb-6 leading-relaxed" style="color: var(--s-text-muted);">
              Jadwalkan konten postingan Anda di waktu terbaik audiens aktif tanpa perlu posting manual saat jam sibuk atau larut malam.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Tampilan kalender visual bulanan dan mingguan yang rapi</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Dukungan penuh untuk format Carousel (multi-slide) dan Reels</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Auto First Comment untuk meletakkan tagar atau CTA trigger secara terpisah</span>
              </li>
            </ul>
          </div>
          <div class="se-card p-6 bg-slate-50 dark:bg-slate-900 border grid grid-cols-3 gap-2">
            <div class="bg-white dark:bg-slate-800 p-3 rounded border text-xs">
              <div class="text-se-silver font-bold text-[11px] mb-2">Senin</div>
              <div class="p-1.5 rounded bg-blue-50 dark:bg-blue-950 border-l-2 border-se-blue">
                <strong class="block text-[11px]">Reels Tips</strong>
                <span class="text-[10px] text-se-silver">19:00 WIB</span>
              </div>
            </div>
            <div class="bg-white dark:bg-slate-800 p-3 rounded border text-xs">
              <div class="text-se-silver font-bold text-[11px] mb-2">Rabu</div>
              <div class="p-1.5 rounded bg-teal-50 dark:bg-teal-950 border-l-2 border-se-cyan">
                <strong class="block text-[11px]">Carousel</strong>
                <span class="text-[10px] text-se-silver">12:30 WIB</span>
              </div>
            </div>
            <div class="bg-white dark:bg-slate-800 p-3 rounded border text-xs">
              <div class="text-se-silver font-bold text-[11px] mb-2">Jumat</div>
              <div class="p-1.5 rounded bg-amber-50 dark:bg-amber-950 border-l-2 border-amber-500">
                <strong class="block text-[11px]">Promo Flash</strong>
                <span class="text-[10px] text-se-silver">20:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 4: Multi-Account -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div class="lg:order-2">
            <span class="text-xs font-bold text-se-cyan uppercase tracking-wider mb-2 inline-block">Agensi & Tim</span>
            <h3 class="font-display font-bold text-2xl sm:text-3xl mb-4">Multi-Akun & Tim: Satu Dasbor untuk Semua Klien</h3>
            <p class="text-base mb-6 leading-relaxed" style="color: var(--s-text-muted);">
              Kelola banyak akun Instagram klien dari satu tempat terpusat tanpa repot logout-login dan amankan akses tim dengan peran berjenjang.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Banyak akun Instagram dalam satu dashboard terintegrasi</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Peran tim lengkap: Owner, Admin, Editor, dan Viewer</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-se-cyan font-bold">✓</span>
                <span>Tabel rekap prospek terstruktur dan ekspor data leads ke CSV</span>
              </li>
            </ul>
          </div>
          <div class="lg:order-1 se-card p-6 bg-slate-50 dark:bg-slate-900 border overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="border-b border-se-border text-se-silver">
                  <th class="pb-2">Akun Klien</th>
                  <th class="pb-2">Anggota Tim</th>
                  <th class="pb-2">Role</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-se-border">
                <tr>
                  <td class="py-2.5 font-bold">@agency_client1</td>
                  <td class="py-2.5">Budi Santoso</td>
                  <td class="py-2.5"><span class="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded">Admin</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 font-bold">@boutique_fashion</td>
                  <td class="py-2.5">Siti Rahma</td>
                  <td class="py-2.5"><span class="bg-teal-100 text-teal-800 text-[10px] font-semibold px-2 py-0.5 rounded">Editor</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 font-bold">@kursus_properti</td>
                  <td class="py-2.5">Andi Pratama</td>
                  <td class="py-2.5"><span class="bg-slate-200 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded">Viewer</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         5. USE CASES
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20">
      <div class="section-container text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-se-blue mb-3">Solusi Sesuai Kebutuhan</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Dibuat untuk Siapa Saja yang Mengandalkan Instagram</h2>
        <p style="color: var(--s-text-muted);">Tingkatkan efisiensi kerja tim dan konversi penjualan dengan alur yang disesuaikan untuk model bisnis Anda.</p>
      </div>

      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="se-card p-6 flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-se-blue flex items-center justify-center font-bold mb-4">
                AG
              </div>
              <h3 class="font-display font-bold text-lg mb-2">Agensi & SMM Freelance</h3>
              <p class="text-sm leading-relaxed mb-4" style="color: var(--s-text-muted);">
                Kelola puluhan akun klien tanpa pusing mengingat password atau risiko akun terkena suspend karena login di banyak perangkat.
              </p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs italic mb-4 border-l-2 border-se-blue">
                "Klien posting campaign promosi besar-besaran. Tim agensi tinggal monitor leads yang masuk tanpa perlu lembur membalas DM manual."
              </div>
            </div>
            <p class="text-xs font-semibold text-se-cyan">Manfaat: Hemat puluhan jam admin per minggu & laporan rapi ke klien.</p>
          </div>

          <div class="se-card p-6 flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-se-cyan flex items-center justify-center font-bold mb-4">
                OS
              </div>
              <h3 class="font-display font-bold text-lg mb-2">Penjual Online & Afiliasi</h3>
              <p class="text-sm leading-relaxed mb-4" style="color: var(--s-text-muted);">
                Konversi antusiasme audiens di konten Reels dan Feed menjadi transaksi nyata di katalog toko online atau chat WhatsApp penjualan.
              </p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs italic mb-4 border-l-2 border-se-cyan">
                "Pengunjung komentar 'HARGA', dalam 3 detik menerima link checkout produk di DM dan meninggalkan kontak WhatsApp untuk follow-up."
              </div>
            </div>
            <p class="text-xs font-semibold text-se-cyan">Manfaat: Tangkap momentum beli saat audiens paling berminat.</p>
          </div>

          <div class="se-card p-6 flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold mb-4">
                CR
              </div>
              <h3 class="font-display font-bold text-lg mb-2">Kreator & Pengajar Online</h3>
              <p class="text-sm leading-relaxed mb-4" style="color: var(--s-text-muted);">
                Bagikan materi gratis, template, e-book, atau akses webinar secara otomatis sekaligus menumbuhkan jumlah pengikut setia.
              </p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs italic mb-4 border-l-2 border-amber-500">
                "Audiens komentar 'BELAJAR', sistem mengecek follow-gate, lalu mengirim link download materi langsung ke DM."
              </div>
            </div>
            <p class="text-xs font-semibold text-se-cyan">Manfaat: Bangun database calon murid organik tanpa landing page rumit.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         6. COMPLIANCE AND TRUST
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-y" style="background-color: var(--s-surface); border-color: var(--s-border);">
      <div class="section-container text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 dark:bg-teal-950 text-se-cyan mb-3">Kepatuhan & Keamanan Data</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Dibangun Sesuai Regulasi Resmi & Standar Privasi</h2>
        <p style="color: var(--s-text-muted);">Keamanan akun dan data pelanggan Anda adalah prioritas utama rancang bangun sistem kami.</p>
      </div>

      <div class="section-container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="se-card p-6">
            <h4 class="font-display font-bold text-base mb-2">API Resmi Meta Graph</h4>
            <p class="text-xs leading-relaxed" style="color: var(--s-text-muted);">
              Menggunakan jalur integrasi resmi Meta yang sah. Kami tidak memakai teknik browser scraper atau bot ilegal yang membahayakan akun.
            </p>
          </div>

          <div class="se-card p-6">
            <h4 class="font-display font-bold text-base mb-2">Tanpa Berbagi Password</h4>
            <p class="text-xs leading-relaxed" style="color: var(--s-text-muted);">
              Otentikasi dilakukan langsung lewat izin resmi Facebook/Meta OAuth. Kami tidak pernah meminta, mengetahui, atau menyimpan password Anda.
            </p>
          </div>

          <div class="se-card p-6">
            <h4 class="font-display font-bold text-base mb-2">Perlindungan Batas Kirim</h4>
            <p class="text-xs leading-relaxed" style="color: var(--s-text-muted);">
              Sistem mematuhi batas pengiriman (rate limits) Meta dengan antrean cerdas untuk mengurangi risiko pembatasan aktivitas pada akun Anda.
            </p>
          </div>

          <div class="se-card p-6">
            <h4 class="font-display font-bold text-base mb-2">Selaras UU PDP Indonesia</h4>
            <p class="text-xs leading-relaxed" style="color: var(--s-text-muted);">
              Pengelolaan data pribadi calon pembeli tunduk pada prinsip UU No. 27/2022 tentang Perlindungan Data Pribadi (UU PDP). Data terenkripsi dan tidak dijual.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         7. ROADMAP STRIP (COMING NEXT)
         ═══════════════════════════════════════════════════════════════════ -->
    <div class="py-6 border-b" style="background: linear-gradient(90deg, var(--s-primary-tint), var(--s-secondary-tint)); border-color: var(--s-border);">
      <div class="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <div class="font-display font-bold text-base">Segera Hadir di Tahap Pengembangan Berikutnya</div>
          <div class="text-xs text-se-silver">Fitur lanjutan yang sedang dipersiapkan setelah rilis awal:</div>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <span class="se-card px-3 py-1 text-xs font-semibold flex items-center gap-2">
            WhatsApp Broadcast & CS Pintar
            <span class="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold uppercase">Mendatang</span>
          </span>
          <span class="se-card px-3 py-1 text-xs font-semibold flex items-center gap-2">
            Asisten AI Pembuat Konten
            <span class="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold uppercase">Mendatang</span>
          </span>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════════
         8. PRICING TEASER
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20" id="pricing">
      <div class="section-container text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-600 mb-3">Estimasi Paket Langganan</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Pilihan Paket Sesuai Skala Akun Anda</h2>
        <p style="color: var(--s-text-muted);">Struktur paket berbasis jumlah akun Instagram yang terhubung. Harga resmi akan diumumkan saat peluncuran.</p>
      </div>

      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="se-card p-8 flex flex-col justify-between">
            <div>
              <h3 class="font-display font-bold text-xl mb-1">Starter</h3>
              <p class="text-xs text-se-silver mb-4">Untuk penjual online mandiri & kreator</p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded font-semibold text-xs text-se-blue mb-6 text-center">
                Harga diumumkan saat peluncuran
              </div>
              <ul class="space-y-3 text-xs mb-8">
                <li class="flex items-center gap-2"><span>✓</span> Hingga 2 Akun Instagram</li>
                <li class="flex items-center gap-2"><span>✓</span> Auto Reply Komentar & Template Acak</li>
                <li class="flex items-center gap-2"><span>✓</span> No-Code DM Flow Builder dasar</li>
                <li class="flex items-center gap-2"><span>✓</span> Ekspor data prospek ke CSV</li>
              </ul>
            </div>
            <a href="#waitlist" class="btn-ghost btn-sm text-center">Daftar Waiting List</a>
          </div>

          <div class="se-card p-8 border-2 border-se-blue flex flex-col justify-between relative shadow-lg">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-se-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Paling Populer
            </span>
            <div>
              <h3 class="font-display font-bold text-xl mb-1">Growth</h3>
              <p class="text-xs text-se-silver mb-4">Untuk agensi berkembang & brand aktif</p>
              <div class="p-3 bg-blue-50 dark:bg-blue-950 rounded font-semibold text-xs text-se-blue mb-6 text-center">
                Harga diumumkan saat peluncuran
              </div>
              <ul class="space-y-3 text-xs mb-8">
                <li class="flex items-center gap-2"><span>✓</span> Hingga 10 Akun Instagram</li>
                <li class="flex items-center gap-2"><span>✓</span> Semua fitur di paket Starter</li>
                <li class="flex items-center gap-2"><span>✓</span> Post Scheduler (Reels & Carousel)</li>
                <li class="flex items-center gap-2"><span>✓</span> Follow-Gate tanpa batas alur</li>
                <li class="flex items-center gap-2"><span>✓</span> Akses tim kolaborasi (Admin & Editor)</li>
              </ul>
            </div>
            <a href="#waitlist" class="btn-primary btn-sm text-center">Daftar Waiting List</a>
          </div>

          <div class="se-card p-8 flex flex-col justify-between">
            <div>
              <h3 class="font-display font-bold text-xl mb-1">Business</h3>
              <p class="text-xs text-se-silver mb-4">Untuk agensi skala besar & multi-brand</p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded font-semibold text-xs text-se-blue mb-6 text-center">
                Harga diumumkan saat peluncuran
              </div>
              <ul class="space-y-3 text-xs mb-8">
                <li class="flex items-center gap-2"><span>✓</span> Lebih dari 10 Akun Instagram</li>
                <li class="flex items-center gap-2"><span>✓</span> Semua fitur di paket Growth</li>
                <li class="flex items-center gap-2"><span>✓</span> Hak akses tim lengkap (Owner, Admin, Editor, Viewer)</li>
                <li class="flex items-center gap-2"><span>✓</span> Prioritas onboarding tim</li>
              </ul>
            </div>
            <a href="#waitlist" class="btn-ghost btn-sm text-center">Daftar Waiting List</a>
          </div>

        </div>

        <!-- Early Access Block -->
        <div class="mt-8 p-6 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl text-center max-w-3xl mx-auto">
          <h4 class="font-display font-bold text-base text-se-blue mb-1">Jadilah Salah Satu Pengguna Pertama</h4>
          <p class="text-xs sm:text-sm" style="color: var(--s-text-muted);">
            Kami membatasi jumlah pengguna pada fase pra-peluncuran untuk memastikan performa sistem dan pendampingan terbaik. Pendaftar waiting list akan mendapatkan penawaran spesial saat peluncuran resmi.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         9. FAQ
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20" id="faq" style="background-color: var(--s-surface);">
      <div class="section-container text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-se-blue mb-3">Tanya Jawab</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Pertanyaan yang Sering Diajukan</h2>
        <p style="color: var(--s-text-muted);">Ketahui seluk-beluk teknis, keamanan, dan cara kerja Sosialin.</p>
      </div>

      <div class="section-container max-w-3xl space-y-3">
        
        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="1">
            <span>Apakah aman untuk akun Instagram saya?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Aman karena Sosialin dibangun di atas integrasi resmi Meta Graph API. Kami tidak pernah meminta kata sandi akun Instagram Anda dan sistem kami secara otomatis mematuhi batasan kuota kirim (rate limits) yang ditetapkan oleh Meta.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="2">
            <span>Apakah saya wajib memiliki akun Instagram Bisnis atau Kreator?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Ya, sesuai dengan ketentuan resmi Meta, fitur otomasi perpesanan dan komentar hanya dapat berjalan pada akun Profesional (Instagram Business atau Instagram Creator) yang sudah terhubung dengan Halaman Facebook (Facebook Page). Akun personal tidak didukung oleh API Meta.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="3">
            <span>Apakah platform ini menggunakan API resmi Meta?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Ya, 100% menggunakan API resmi Meta Graph API melalui autentikasi OAuth standar industri. Kami tidak menggunakan bot browser, web scraper, atau metode tidak resmi yang melanggar ketentuan layanan.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="4">
            <span>Bisakah saya mengelola banyak akun Instagram klien sekaligus?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Tentu. Sosialin dirancang khusus untuk kebutuhan agensi dan social media manager dengan fitur Multi-Account serta manajemen tim bertingkat (Owner, Admin, Editor, Viewer) tanpa perlu login bergantian.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="5">
            <span>Kapan Sosialin akan resmi diluncurkan?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Saat ini kami sedang dalam tahap pengujian tertutup bersama kelompok pengguna awal. Undangan akses awal (Early Access) akan dikirimkan secara bertahap kepada pendaftar waiting list melalui email dan WhatsApp sebelum peluncuran resmi dibuka untuk umum.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="6">
            <span>Bagaimana data prospek (leads) dan kontak pengguna dilindungi?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Data Anda dan data pelanggan Anda dikelola sesuai prinsip Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022). Data disimpan dengan enkripsi standar, tidak pernah diperjualbelikan kepada pihak ketiga, dan sepenuhnya dapat diekspor atau dihapus kapan saja oleh Anda.
          </div>
        </div>

        <div class="se-card faq-entry overflow-hidden">
          <button class="faq-btn-trigger" data-faq-id="7">
            <span>Apakah ada fitur Follow-Gate sebelum calon pembeli menerima link?</span>
            <svg class="faq-chevron transition-transform duration-200 flex-shrink-0 text-se-blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-body-content">
            Ya, pada flow builder tersedia opsi filter Follow-Gate. Anda dapat mengatur agar sistem memeriksa status follow pengguna terlebih dahulu sebelum mengirimkan tautan link atau materi eksklusif.
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         10. FINAL CTA / WAITLIST FORM
         ═══════════════════════════════════════════════════════════════════ -->
    <section class="py-20" id="waitlist">
      <div class="section-container text-center max-w-2xl mx-auto mb-10">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-600 mb-3">Akses Terbatas</span>
        <h2 class="font-display font-bold text-2xl sm:text-3xl mb-3">Daftar Sekarang untuk Dapatkan Akses Awal</h2>
        <p style="color: var(--s-text-muted);">Jadilah yang pertama mencoba Sosialin dan dapatkan penawaran harga khusus saat peluncuran resmi.</p>
      </div>

      <div class="section-container max-w-xl">
        <div class="se-card p-6 sm:p-10 shadow-xl border">
          <form id="sosialin-waitlist-form" novalidate>
            
            <div class="mb-4">
              <label for="s-name" class="block font-bold text-xs uppercase tracking-wider mb-1.5">Nama Lengkap</label>
              <input type="text" id="s-name" class="w-full p-3 rounded-lg border bg-transparent text-sm focus:border-se-blue outline-none" placeholder="Contoh: Budi Santoso" required>
              <span class="text-xs text-red-500 hidden mt-1" id="s-name-error">Masukkan nama lengkap (minimal 2 karakter).</span>
            </div>

            <div class="mb-4">
              <label for="s-email" class="block font-bold text-xs uppercase tracking-wider mb-1.5">Email Aktif</label>
              <input type="email" id="s-email" class="w-full p-3 rounded-lg border bg-transparent text-sm focus:border-se-blue outline-none" placeholder="nama@email.com" required>
              <span class="text-xs text-red-500 hidden mt-1" id="s-email-error">Format email tidak valid.</span>
            </div>

            <div class="mb-4">
              <label for="s-whatsapp" class="block font-bold text-xs uppercase tracking-wider mb-1.5">
                Nomor WhatsApp <span class="font-normal normal-case text-se-silver">(Opsional)</span>
              </label>
              <input type="tel" id="s-whatsapp" class="w-full p-3 rounded-lg border bg-transparent text-sm focus:border-se-blue outline-none" placeholder="0812xxxxxxxx">
              <span class="text-xs text-red-500 hidden mt-1" id="s-whatsapp-error">Nomor WhatsApp tidak valid (contoh: 08123456789).</span>
            </div>

            <div class="mb-4">
              <label for="s-role" class="block font-bold text-xs uppercase tracking-wider mb-1.5">Saya adalah:</label>
              <select id="s-role" class="w-full p-3 rounded-lg border bg-transparent text-sm focus:border-se-blue outline-none" required>
                <option value="" disabled selected>Pilih kategori profil Anda</option>
                <option value="agency">Agensi / Freelance Social Media Manager</option>
                <option value="seller">Pemilik Bisnis / Online Seller / Afiliasi</option>
                <option value="creator">Kreator Konten / Edukator Online</option>
                <option value="other">Lainnya</option>
              </select>
              <span class="text-xs text-red-500 hidden mt-1" id="s-role-error">Silakan pilih kategori profil Anda.</span>
            </div>

            <div class="flex items-start gap-2.5 mb-6 text-xs text-se-silver">
              <input type="checkbox" id="s-consent" class="mt-1 accent-se-blue" required>
              <label for="s-consent" class="cursor-pointer">
                Saya menyetujui pemrosesan data pribadi sesuai dengan <a href="/privacy-policy" class="text-se-blue underline" target="_blank">Kebijakan Privasi</a> untuk keperluan informasi akses awal dan peluncuran produk.
              </label>
            </div>
            <span class="text-xs text-red-500 hidden mt-[-1rem] mb-4 block" id="s-consent-error">Wajib menyetujui Kebijakan Privasi.</span>

            <button type="submit" class="btn-primary btn-lg w-full flex items-center justify-center gap-2" id="s-submit-btn">
              <span>Daftar Waiting List Sekarang</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <div id="s-feedback-area" class="mt-4 p-4 rounded-lg text-sm hidden"></div>
          </form>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         MANDATORY INDEPENDENT DISCLAIMER
         ═══════════════════════════════════════════════════════════════════ -->
    <div class="disclaimer-strip">
      <div class="section-container">
        <p>
          <strong>Pemberitahuan Independen:</strong> Sosialin is an independent product and is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
        </p>
      </div>
    </div>

  </div>
  `;
}

export function mountSosialinBehaviors() {
  function trackEvent(name, params = {}) {
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params });
    }
    window.dispatchEvent(new CustomEvent("product_analytics", { detail: { event: name, params } }));
    console.info("[Sosialin Analytics]", name, params);
  }

  // Hero clicks
  const heroPrimary = document.getElementById("hero-primary-cta");
  if (heroPrimary) {
    heroPrimary.addEventListener("click", () => {
      trackEvent("cta_hero_click", { target: "#waitlist", label: "Gabung Waiting List" });
    });
  }

  // FAQ accordion
  const faqButtons = document.querySelectorAll(".faq-btn-trigger");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const entry = btn.closest(".faq-entry");
      const isActive = entry.classList.contains("active");

      document.querySelectorAll(".faq-entry").forEach((e) => {
        if (e !== entry) e.classList.remove("active");
      });

      if (isActive) {
        entry.classList.remove("active");
      } else {
        entry.classList.add("active");
        trackEvent("faq_expand", { questionId: btn.getAttribute("data-faq-id") });
      }
    });
  });

  // Form submit
  const form = document.getElementById("sosialin-waitlist-form");
  if (!form) return;

  const nameInput = document.getElementById("s-name");
  const emailInput = document.getElementById("s-email");
  const whatsappInput = document.getElementById("s-whatsapp");
  const roleSelect = document.getElementById("s-role");
  const consentCheck = document.getElementById("s-consent");
  const submitBtn = document.getElementById("s-submit-btn");
  const feedback = document.getElementById("s-feedback-area");

  const nameErr = document.getElementById("s-name-error");
  const emailErr = document.getElementById("s-email-error");
  const waErr = document.getElementById("s-whatsapp-error");
  const roleErr = document.getElementById("s-role-error");
  const consentErr = document.getElementById("s-consent-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Reset
    [nameErr, emailErr, waErr, roleErr, consentErr].forEach((el) => el.classList.add("hidden"));
    feedback.className = "mt-4 p-4 rounded-lg text-sm hidden";

    let valid = true;

    if (nameInput.value.trim().length < 2) {
      nameErr.classList.remove("hidden");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailErr.classList.remove("hidden");
      valid = false;
    }

    const waVal = whatsappInput.value.trim();
    if (waVal) {
      const cleanWa = waVal.replace(/[\s\-\(\)]/g, "");
      if (!/^(\+62|62|0)8[1-9][0-9]{6,11}$/.test(cleanWa)) {
        waErr.classList.remove("hidden");
        valid = false;
      }
    }

    if (!roleSelect.value) {
      roleErr.classList.remove("hidden");
      valid = false;
    }

    if (!consentCheck.checked) {
      consentErr.classList.remove("hidden");
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    const oldText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Memproses pendaftaran...";

    try {
      // TODO: connect to [Google Sheets / Mailchimp / our API endpoint]
      await new Promise((r) => setTimeout(r, 800));

      trackEvent("waitlist_submit", {
        role: roleSelect.value,
        hasWhatsapp: Boolean(waVal),
      });

      feedback.className = "mt-4 p-4 rounded-lg text-sm bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 block";
      feedback.innerHTML = `<strong>Terima kasih, ${nameInput.value}! 🎉</strong><br>Pendaftaran akses awal Anda berhasil. Kami akan segera menghubungi email <strong>${emailInput.value}</strong> saat kuota dibuka.`;
      form.reset();
    } catch (err) {
      feedback.className = "mt-4 p-4 rounded-lg text-sm bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 block";
      feedback.innerHTML = "Terjadi kendala koneksi. Silakan periksa jaringan Anda.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = oldText;
    }
  });
}
