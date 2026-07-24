# GitHub Issues — selenium.id Landing Page Refactor
**Total Issues:** 28  
**Format:** `[LABEL] [Epic] — Judul Issue`

Setiap issue memiliki: **Deskripsi singkat**, **Acceptance Criteria (AC)**, dan **Estimasi (story points)**

---

## EPIC 1 — Cleanup & Structural Refactor
> Tujuan: Hapus section yang tidak diperlukan, sederhanakan struktur halaman

---

### Issue #1
**[feat] [Cleanup] Hapus section Pricing dari halaman utama**

**Deskripsi:**  
Hapus fungsi `renderPricing()` dan semua referensinya di `main.js` dan `translations.js` (EN + ID). Pastikan tidak ada broken link atau CSS orphan.

**AC:**
- [ ] `renderPricing()` dihapus dari `main.js`
- [ ] Key `pricing` dihapus dari `translations.js`
- [ ] Tidak ada elemen `#promo` di DOM setelah render
- [ ] Tidak ada error console

**Estimasi:** 1 SP

---

### Issue #2
**[feat] [Cleanup] Hapus section Tech Stack dari halaman utama**

**Deskripsi:**  
Hapus fungsi `renderTechStack()` dan entry di nav. Entri nav `techStack` dihapus dari array links.

**AC:**
- [ ] `renderTechStack()` dihapus dari `main.js`
- [ ] Key `techStack` dihapus dari array nav links
- [ ] Key `techStack` dihapus dari `translations.js`
- [ ] Menu navbar tidak lagi menampilkan "Tech Stack"

**Estimasi:** 1 SP

---

### Issue #3
**[feat] [Cleanup] Hapus section Process dari halaman utama**

**Deskripsi:**  
Hapus fungsi `renderProcess()`. Jika diperlukan versi ringkas, buat komponen terpisah yang diintegrasikan ke section Tentang Kami.

**AC:**
- [ ] `renderProcess()` dihapus dari `main.js`
- [ ] Key `process` dihapus dari nav array links
- [ ] Key `process` dihapus dari `translations.js`
- [ ] Tidak ada link `#process` yang tersisa

**Estimasi:** 1 SP

---

### Issue #4
**[feat] [Cleanup] Hapus Contact Form — ganti dengan CTA WhatsApp**

**Deskripsi:**  
Hapus form kontak HTML dan semua logic `mountContactForm()`. Ganti section contact dengan sebuah block sederhana berisi tombol WA.

**AC:**
- [ ] Form HTML `#contact-form` dihapus
- [ ] `mountContactForm()` dihapus
- [ ] Section `#contact` diganti dengan CTA WhatsApp
- [ ] Tombol WA membuka `wa.me/6282253210449` dengan pesan default
- [ ] Key contact form di `translations.js` dihapus

**Estimasi:** 2 SP

---

### Issue #5
**[feat] [Cleanup] Update array nav links — sesuaikan dengan struktur baru**

**Deskripsi:**  
Update array `links` di `renderNav()` agar mencerminkan struktur baru: Layanan · Tentang Kami · Portofolio · Hubungi Kami.

**AC:**
- [ ] Array links berisi: `services`, `about`, `portfolio`, `contact`
- [ ] Semua anchor `href` mengarah ke section yang benar
- [ ] Mobile menu drawer juga ter-update
- [ ] Nav CTA berubah menjadi link WA langsung

**Estimasi:** 1 SP

---

## EPIC 2 — Design System Implementation
> Tujuan: Implementasi CSS custom properties dan komponen sesuai UI Guideline

---

### Issue #6
**[feat] [Design System] Setup CSS custom properties dari UI Guideline**

**Deskripsi:**  
Tambahkan CSS custom properties dari guideline ke `style.css` (atau file terpisah `tokens.css`). Variabel mencakup: warna, font, radius, spacing, shadow, dan breakpoint.

**AC:**
- [ ] Semua variabel `--primary`, `--secondary`, `--accent`, dll. terdefinisi di `:root`
- [ ] Dark mode override tersedia di `[data-theme="dark"]`
- [ ] Font `Plus Jakarta Sans` + `Inter` diload via Google Fonts
- [ ] Tidak ada konflik dengan kelas TailwindCSS yang existing

**Estimasi:** 2 SP

---

### Issue #7
**[feat] [Design System] Update komponen Button sesuai guideline**

**Deskripsi:**  
Standarisasi style tombol: `btn-primary` (oranye aksi), `btn-secondary` (outline biru), `btn-ghost`. Radius 10px, min-height 44px.

**AC:**
- [ ] `btn-primary` menggunakan `--accent` (#F2994A), teks gelap
- [ ] `btn-secondary` menggunakan border `--primary`, teks `--primary`
- [ ] `btn-ghost` transparan, teks `--primary`
- [ ] Semua tombol memiliki `min-height: 44px`
- [ ] Hover state + active scale tersedia

**Estimasi:** 2 SP

---

### Issue #8
**[feat] [Design System] Update komponen Card sesuai guideline**

**Deskripsi:**  
Standarisasi card dengan radius 16px, border `--border`, shadow biru lembut. Hapus glow effect cyan yang berlebihan.

**AC:**
- [ ] Card radius 16px
- [ ] Border menggunakan `--border`
- [ ] Shadow menggunakan `--shadow-sm` dari guideline
- [ ] Tidak ada glow neon yang mencolok (sesuai arah UMKM-friendly)
- [ ] Hover state: subtle shadow-md

**Estimasi:** 2 SP

---

### Issue #9
**[feat] [Design System] Ganti skema warna dark (void/cyan) ke light theme sebagai default**

**Deskripsi:**  
Saat ini website full dark theme. Guideline menetapkan light mode sebagai default (`--bg: #FFFAFF`). Ubah default ke light mode, dark mode jadi opsional via toggle.

**AC:**
- [ ] `body` default menggunakan background `#FFFAFF`
- [ ] Semua teks default menggunakan `--text-primary: #171A2B`
- [ ] Dark mode aktif ketika `data-theme="dark"` di `<html>`
- [ ] Toggle tersimpan di `localStorage`
- [ ] Tidak ada flash putih/hitam saat load (FOUC handled)

**Estimasi:** 3 SP

---

### Issue #10
**[feat] [Design System] Update tipografi — Plus Jakarta Sans untuk heading, Inter untuk body**

**Deskripsi:**  
Ganti font heading dari `Outfit` menjadi `Plus Jakarta Sans`. Body tetap `Inter`. Update Google Fonts link di `index.html`.

**AC:**
- [ ] `index.html` memuat `Plus Jakarta Sans` weights 500/600/700/800
- [ ] `index.html` memuat `Inter` weights 400/500/600/700
- [ ] CSS `--font-heading` dan `--font-body` digunakan di semua komponen
- [ ] Teks heading terlihat jelas di mobile & desktop

**Estimasi:** 1 SP

---

## EPIC 3 — Section Hero Refactor
> Tujuan: Hero lebih sederhana, fokus pada value prop lokal, CTA langsung WA

---

### Issue #11
**[feat] [Hero] Rewrite copywriting Hero Section — bahasa lokal & non-teknis**

**Deskripsi:**  
Update teks hero di `translations.js` (ID) untuk terasa lebih personal, lokal, dan approachable. Hilangkan jargon enterprise. Sertakan kata kunci: Pontianak, konsultan, jasa, software, perangkat lunak.

**AC:**
- [ ] Headline tidak mengandung jargon teknis (tidak ada "enterprise-grade", "resilient cloud")
- [ ] Subheadline menyebut "Pontianak" atau lokasi yang relevan
- [ ] CTA primary: "Konsultasi Gratis via WhatsApp"
- [ ] CTA secondary: "Lihat Layanan Kami"
- [ ] Eyebrow label relevan untuk UMKM

**Estimasi:** 2 SP

---

### Issue #12
**[feat] [Hero] Sederhanakan visual Hero — hapus particle canvas & glow berlebihan**

**Deskripsi:**  
Hapus `mountHeroCanvas()` dan canvas element. Ganti background dengan gradient halus atau pattern sederhana sesuai brand guideline (bukan dark/neon).

**AC:**
- [ ] Canvas element `#heroCanvas` dihapus
- [ ] `mountHeroCanvas()` dihapus dari `main.js`
- [ ] Background hero menggunakan gradient dari `--primary` ke `--primary-tint`
- [ ] Tidak ada animasi berat yang menurunkan performa mobile
- [ ] FCP di mobile ≤ 2 detik (estimasi)

**Estimasi:** 2 SP

---

### Issue #13
**[feat] [Hero] Update Stats Bar Hero dengan data yang relevan**

**Deskripsi:**  
Ganti stats bar dari "Modern/Agile/Secure/Scalable" dengan angka yang bermakna: jumlah klien, proyek selesai, tahun berdiri, dll.

**AC:**
- [ ] Stats menampilkan angka nyata (bukan kata sifat)
- [ ] Contoh: "10+ Klien", "15+ Proyek", "3 Tahun", "100% Kepuasan"
- [ ] Data diupdate di `translations.js`
- [ ] Layout stats bar responsif di mobile

**Estimasi:** 1 SP

---

## EPIC 4 — Section Layanan
> Tujuan: Layanan lebih fokus, bahasa sederhana, terintegrasi dengan halaman detail

---

### Issue #14
**[feat] [Layanan] Rewrite copywriting section Layanan — bahasa UMKM-friendly**

**Deskripsi:**  
Update semua `title` dan `description` setiap layanan di `translations.js`. Hilangkan tech tag yang tidak perlu (AWS, Terraform, dll.) ganti dengan manfaat bisnis.

**AC:**
- [ ] Setiap deskripsi layanan ditulis dari sudut pandang manfaat, bukan teknologi
- [ ] Kata kunci: jasa website, aplikasi, konsultan, perangkat lunak, Pontianak
- [ ] Tech tags dikurangi atau diganti dengan benefit tag (contoh: "Hemat Waktu", "Mudah Digunakan")
- [ ] Bahasa ID dan EN ter-update konsisten

**Estimasi:** 2 SP

---

### Issue #15
**[feat] [Layanan] Tambahkan tombol CTA WA di setiap card layanan**

**Deskripsi:**  
Setiap card layanan memiliki tombol "Tanya via WhatsApp" yang membuka WA dengan pesan template berisi nama layanan.

**AC:**
- [ ] Setiap card memiliki tombol/link WA
- [ ] URL WA menyertakan pesan template: `?text=Halo, saya tertarik dengan layanan [Nama Layanan]`
- [ ] Tombol menggunakan `btn-secondary` style
- [ ] Tombol tidak mengganggu layout card di mobile

**Estimasi:** 1 SP

---

### Issue #16
**[feat] [Layanan] Setup routing halaman detail layanan (per-slug)**

**Deskripsi:**  
Buat struktur routing sederhana menggunakan Vite untuk halaman `/layanan/[slug]`. Setiap layanan memiliki halaman sendiri dengan konten lengkap dan SEO terpisah.

**AC:**
- [ ] Routing bekerja untuk minimal 3 layanan
- [ ] Setiap halaman detail memiliki: title tag unik, meta description unik, H1 unik
- [ ] Halaman detail memuat: deskripsi panjang, manfaat, proses kerja ringkas, CTA WA
- [ ] URL menggunakan slug bahasa Indonesia (contoh: `/layanan/jasa-website`)

**Estimasi:** 4 SP

---

## EPIC 5 — Section Tentang Kami & Testimoni
> Tujuan: Bangun kepercayaan dengan wajah perusahaan dan ulasan klien nyata

---

### Issue #17
**[feat] [About] Rewrite section Tentang Kami — tambahkan foto tim**

**Deskripsi:**  
Update `renderAbout()` dengan konten baru: cerita perusahaan yang relatable, visi/misi dalam bahasa sederhana, dan foto tim (placeholder dulu jika belum ada foto asli).

**AC:**
- [ ] Teks paragraf ditulis ulang — tidak ada "atomic", tidak ada jargon
- [ ] Foto tim terintegrasi (img tag dengan alt text)
- [ ] Visi/misi atau nilai perusahaan ditampilkan
- [ ] Quote perusahaan tetap ada tapi diperbarui

**Estimasi:** 2 SP

---

### Issue #18
**[feat] [About] Hapus animasi orbit atom dari About section**

**Deskripsi:**  
Animasi orbit atomic visual di About terlalu teknis dan tidak sesuai dengan arah brand UMKM-friendly. Ganti dengan ilustrasi atau foto yang relevan.

**AC:**
- [ ] Semua elemen orbit (ring, dot) dihapus
- [ ] Diganti dengan: foto tim, ilustrasi sederhana, atau gambar brand
- [ ] Tidak ada perubahan performa negatif
- [ ] Tampilan tetap seimbang antara teks kiri dan visual kanan

**Estimasi:** 1 SP

---

### Issue #19
**[feat] [Testimoni] Buat section Testimoni Klien baru**

**Deskripsi:**  
Buat fungsi `renderTestimonials()` baru. Section ini menampilkan ulasan dari klien nyata dalam format card sederhana.

**AC:**
- [ ] Section baru `#testimonials` ada di antara Portofolio dan Footer
- [ ] Minimal 3 card testimoni
- [ ] Setiap card: quote, nama klien, jabatan/perusahaan, foto (opsional)
- [ ] Data testimoni dari `translations.js` (mudah diupdate)
- [ ] Layout responsif: 1 kolom mobile, 3 kolom desktop

**Estimasi:** 3 SP

---

### Issue #20
**[feat] [Testimoni] Tambahkan section Logo Mitra / Klien**

**Deskripsi:**  
Buat row logo strip sederhana yang menampilkan nama atau logo instansi yang pernah bekerja sama. Bisa berupa teks atau gambar logo.

**AC:**
- [ ] Section logo strip ada di bawah Hero atau di dalam Tentang Kami
- [ ] Minimal 3 entry mitra/klien
- [ ] Desain simpel: grayscale logo / teks nama
- [ ] Responsif dan tidak memperlambat LCP

**Estimasi:** 2 SP

---

## EPIC 6 — Portofolio & Footer
> Tujuan: Portofolio lebih informatif, footer sesuai info terbaru

---

### Issue #21
**[feat] [Portofolio] Update konten proyek di section Projects**

**Deskripsi:**  
Update data proyek di `translations.js` dengan proyek nyata yang sudah dikerjakan. Setiap proyek memiliki screenshot/gambar jika tersedia.

**AC:**
- [ ] Minimal 3 proyek nyata dengan deskripsi yang jelas
- [ ] Setiap proyek memiliki: judul, klien, deskripsi, tag industri (bukan tech tag)
- [ ] Gambar/screenshot proyek terintegrasi (atau placeholder yang baik)
- [ ] Link ke halaman detail proyek jika ada

**Estimasi:** 2 SP

---

### Issue #22
**[feat] [Footer] Update footer — email profesional & informasi terbaru**

**Deskripsi:**  
Update footer dengan email domain `.id`, hapus elemen "Atomic No. 34" yang terlalu teknis, tambahkan tombol WA.

**AC:**
- [ ] Email ditampilkan dengan domain `.id` (bukan Gmail)
- [ ] Elemen "Atomic No. 34" dihapus
- [ ] Footer nav links sesuai struktur halaman baru
- [ ] Sosial media link (Instagram, TikTok) tetap ada
- [ ] Copyright tahun ter-update

**Estimasi:** 1 SP

---

## EPIC 7 — SEO & Performa
> Tujuan: Halaman mudah ditemukan di Google lokal dan cepat di mobile

---

### Issue #23
**[feat] [SEO] Update meta tags untuk SEO lokal Pontianak**

**Deskripsi:**  
Update `index.html` meta tags: title, description, keywords, Open Graph. Fokus pada kata kunci lokal dan UMKM.

**AC:**
- [ ] `<title>` mengandung "konsultan IT Pontianak" atau variasi
- [ ] Meta description 150-160 karakter, mengandung kata kunci lokal
- [ ] OG tags ter-update (title, description, image)
- [ ] `lang` attribute di `<html>` diset `id`

**Estimasi:** 1 SP

---

### Issue #24
**[feat] [SEO] Update JSON-LD Schema.org dengan data lengkap**

**Deskripsi:**  
Update structured data di `index.html` — ganti schema `ProfessionalService` dengan tambahan `LocalBusiness`. Tambahkan field `openingHours`, `geo`, dan `priceRange`.

**AC:**
- [ ] Schema berisi: `name`, `description`, `url`, `telephone`, `email` (domain .id)
- [ ] `address` berisi: `addressLocality: "Pontianak"`, `addressRegion: "Kalimantan Barat"`
- [ ] Field `geo` dengan koordinat Pontianak (latitude/longitude)
- [ ] Schema valid di Google Rich Results Test

**Estimasi:** 2 SP

---

### Issue #25
**[feat] [SEO] Tambahkan canonical URL dan hreflang**

**Deskripsi:**  
Pastikan setiap halaman memiliki `<link rel="canonical">` yang benar. Tambahkan `hreflang` jika masih support bilingual.

**AC:**
- [ ] `<link rel="canonical" href="https://selenium.id/">` ada di index
- [ ] Canonical setiap halaman layanan mengarah ke URL-nya sendiri
- [ ] Tidak ada duplicate content issue

**Estimasi:** 1 SP

---

### Issue #26
**[feat] [Performa] Optimasi aset gambar — format WebP & lazy loading**

**Deskripsi:**  
Semua gambar (foto tim, portfolio, logo mitra) harus dalam format WebP dengan ukuran teroptimasi. Gunakan `loading="lazy"` untuk gambar di bawah fold.

**AC:**
- [ ] Semua gambar portofolio < 200KB
- [ ] Format WebP digunakan
- [ ] `loading="lazy"` diterapkan pada gambar non-critical
- [ ] `width` dan `height` attribute ada di setiap `<img>` untuk mencegah layout shift

**Estimasi:** 2 SP

---

### Issue #27
**[feat] [Performa] Audit & cleanup CSS — hapus class TailwindCSS tidak terpakai**

**Deskripsi:**  
Setelah refactor, jalankan Tailwind purge dan hapus CSS custom yang orphan. Pastikan bundle size tidak membengkak.

**AC:**
- [ ] Tailwind purge config aktif dan mencakup semua file JS/HTML
- [ ] CSS custom di `style.css` yang tidak dipakai dihapus
- [ ] Build output CSS < 30KB gzip
- [ ] Tidak ada visual regresi setelah cleanup

**Estimasi:** 2 SP

---

### Issue #28
**[feat] [Aksesibilitas] Audit aksesibilitas — aria labels & kontras warna**

**Deskripsi:**  
Pastikan semua elemen interaktif memiliki aria label yang benar. Kontras warna memenuhi WCAG AA di light dan dark mode.

**AC:**
- [ ] Semua `<button>` dan `<a>` yang hanya berisi ikon memiliki `aria-label`
- [ ] Kontras teks body vs background ≥ 4.5:1 (WCAG AA)
- [ ] Kontras heading vs background ≥ 3:1
- [ ] Skip navigation link tersedia dan berfungsi
- [ ] Audit dengan axe DevTools atau Lighthouse Accessibility ≥ 90

**Estimasi:** 2 SP

---

## Ringkasan Issue per Epic

| Epic | Jumlah Issue | Total SP |
|------|-------------|----------|
| EPIC 1 — Cleanup & Structural Refactor | 5 issues | 6 SP |
| EPIC 2 — Design System Implementation | 5 issues | 10 SP |
| EPIC 3 — Hero Refactor | 3 issues | 5 SP |
| EPIC 4 — Section Layanan | 3 issues | 7 SP |
| EPIC 5 — Tentang Kami & Testimoni | 4 issues | 8 SP |
| EPIC 6 — Portofolio & Footer | 2 issues | 3 SP |
| EPIC 7 — SEO & Performa | 6 issues | 10 SP |
| **TOTAL** | **28 issues** | **49 SP** |

---

## Label yang Digunakan
- `feat` — Fitur baru / perubahan fungsional
- `cleanup` — Penghapusan kode lama
- `design-system` — Implementasi design system
- `seo` — Optimasi search engine
- `perf` — Optimasi performa
- `a11y` — Aksesibilitas
- `content` — Update konten / copywriting
- `priority:P0` — Must Have, kerjakan sprint 1
- `priority:P1` — Should Have, kerjakan sprint 2
- `priority:P2` — Nice to Have, kerjakan sprint 3
