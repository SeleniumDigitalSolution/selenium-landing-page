# Product Requirements Document (PRD)
## selenium.id — Landing Page Refactor
**Versi:** 1.0  
**Tanggal:** 2026-07-24  
**Owner:** Tim selenium.id  

---

## 1. Latar Belakang & Problem Statement

Landing page selenium.id saat ini memiliki beberapa masalah yang menghambat konversi:

1. **Terlalu panjang & kompleks** — Terlalu banyak section menyebabkan pengguna kehilangan fokus sebelum mencapai CTA
2. **Desain terkesan seperti hasil AI** — Tampilan dan teks tidak mencerminkan identitas perusahaan yang hangat dan terpercaya
3. **Copywriting terlalu teknis** — Bahasa enterprise tidak relevan untuk target utama: UMKM lokal Pontianak
4. **Tidak ada "wajah" perusahaan** — Tidak ada foto tim, tidak ada testimoni klien nyata → rendah kepercayaan
5. **CTA terpecah** — Form kontak dan WhatsApp bersaing, padahal WA jauh lebih efektif untuk pasar lokal
6. **SEO lemah** — Kurang konten berbahasa Indonesia dengan kata kunci lokal yang kuat

---

## 2. Tujuan & Sasaran

### 2.1 Goals Bisnis
- Meningkatkan jumlah lead masuk melalui WhatsApp
- Membangun kepercayaan calon klien UMKM sejak pertama kali melihat halaman
- Meningkatkan visibilitas pencarian lokal (Pontianak + kata kunci jasa IT)

### 2.2 Success Metrics
| Metrik | Baseline (estimasi) | Target |
|--------|--------------------|---------| 
| Klik tombol WA dari landing page | - | +50% dalam 3 bulan |
| Bounce rate | >70% | <55% |
| Waktu rata-rata di halaman | <1 menit | >2 menit |
| Posisi SEO "konsultan IT Pontianak" | Tidak ada | Top 10 Google |
| Lighthouse SEO score | - | ≥ 90 |

---

## 3. User Personas

### Persona A — Pak Andi, Pemilik UMKM
- **Usia:** 35–50 tahun
- **Lokasi:** Pontianak
- **Kebutuhan:** Ingin bikin website toko / sistem kasir, tapi bingung mulai dari mana
- **Pain point:** Tidak paham teknologi, takut ditipu, ingin harga jelas
- **Behavior:** Buka di HP, scroll sebentar, langsung cari nomor WA

### Persona B — Manajer / HRD Perusahaan Menengah
- **Usia:** 28–40 tahun
- **Lokasi:** Pontianak / Kalimantan Barat
- **Kebutuhan:** Cari vendor IT untuk proyek digitalisasi perusahaan
- **Pain point:** Butuh portofolio dan bukti kompetensi sebelum menghubungi
- **Behavior:** Baca halaman Layanan detail, cek portofolio, cek sosial media

### Persona C — Calon Mitra / Investor
- **Usia:** 25–45 tahun
- **Kebutuhan:** Ingin kenali profil perusahaan, tim, dan visi misi
- **Behavior:** Cari halaman "Tentang Kami", cek media sosial

---

## 4. User Stories

### Navigasi & Struktur
- **US-01:** Sebagai pengunjung, saya ingin melihat layanan utama dalam 3 detik pertama agar saya tahu apakah ini relevan untuk kebutuhan saya
- **US-02:** Sebagai pengunjung HP, saya ingin tombol WhatsApp selalu terlihat agar saya bisa langsung menghubungi tanpa scroll

### Konten & Kepercayaan
- **US-03:** Sebagai pemilik UMKM, saya ingin membaca penjelasan layanan dalam bahasa sederhana agar saya mengerti apa yang ditawarkan
- **US-04:** Sebagai calon klien, saya ingin melihat portofolio nyata agar saya yakin perusahaan ini berpengalaman
- **US-05:** Sebagai calon klien, saya ingin membaca review dari klien sebelumnya agar saya lebih percaya
- **US-06:** Sebagai calon klien, saya ingin melihat foto atau identitas tim agar perusahaan terasa nyata dan terpercaya

### CTA & Konversi
- **US-07:** Sebagai pengunjung, saya ingin tombol "Konsultasi Gratis" langsung membuka WhatsApp agar prosesnya cepat dan mudah
- **US-08:** Sebagai pengunjung, saya ingin setiap halaman layanan memiliki CTA WA agar saya bisa langsung tanya tanpa kembali ke halaman utama

### SEO & Temuan
- **US-09:** Sebagai pemilik bisnis di Pontianak, saya ingin menemukan selenium.id di Google saat mencari "konsultan IT Pontianak"
- **US-10:** Sebagai pengguna, saya ingin halaman loading cepat di koneksi mobile agar saya tidak perlu menunggu lama

---

## 5. Scope Fitur

### ✅ In Scope (Refactor Ini)
| Fitur | Prioritas |
|-------|-----------|
| Restrukturisasi section (Hero, Layanan, Tentang, Portofolio, Testimoni, Footer) | P0 |
| Penghapusan Pricing, TechStack, Contact Form, Process section | P0 |
| Rewrite copywriting — bahasa lokal, non-teknis | P0 |
| Tombol WA sebagai CTA utama (navbar + FAB + setiap section) | P0 |
| Penerapan Design System dari UI Guideline (warna, font, komponen) | P0 |
| Section Testimoni Klien | P1 |
| Section Portofolio (update konten) | P1 |
| Section Tentang Kami + Foto Tim | P1 |
| Optimasi SEO lokal (meta tags, schema, slug Indonesia) | P1 |
| Dark Mode toggle | P2 |
| Halaman detail per layanan (routing) | P2 |
| Instansi / Mitra kerja sama | P2 |
| Email profesional domain .id | P2 |

### ❌ Out of Scope (Tidak Dikerjakan)
- Backend / database / CMS
- Chatbot / CS Bot
- Sistem pencarian produk
- Fitur multi-bahasa (saat ini hanya Bahasa Indonesia untuk target lokal)
- E-commerce / pembayaran online
- Portofolio postingan media sosial (feed Instagram embed)

---

## 6. Desain & Brand

Mengacu pada **selenium.id Brand & UI Guideline v1.0** (file: `selenium-ui-guideline.html`):

- **Font:** Plus Jakarta Sans (heading) + Inter (body)
- **Warna primer:** `#0A64BC` (biru kepercayaan)
- **Warna sekunder:** `#0D9488` (teal profesional)
- **CTA/Aksi:** `#F2994A` (oranye hangat — komplementer biru)
- **Background light:** `#FFFAFF` | **Background dark:** `#0B1120`
- **Radius:** sm=8px · md=10px · lg=16px · full=999px
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64px
- **Ikon:** outline, stroke 1.8px, sudut membulat
- **Mobile-first:** base 375px → 640px → 768px → 1024px

---

## 7. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Aset foto tim belum tersedia | Konten tidak bisa tayang | Gunakan placeholder sementara, siapkan foto sprint berikutnya |
| Testimoni klien belum dikumpulkan | Section tidak ada konten | Kumpulkan testimoni via WA sebelum deploy |
| Slug halaman layanan baru tidak ter-index | SEO mundur | Tambahkan redirect 301 dari URL lama |
| Perubahan besar bisa break tampilan | Regresi visual | Review di mobile & desktop sebelum merge |
