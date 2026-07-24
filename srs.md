# Software Requirements Specification (SRS)
## selenium.id — Landing Page Refactor
**Versi:** 1.0  
**Tanggal:** 2026-07-24  
**Status:** Draft

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen ini mendefinisikan kebutuhan fungsional dan non-fungsional untuk refactor landing page **selenium.id**, sebuah perusahaan konsultan IT berbasis di Pontianak. Refactor bertujuan menyederhanakan struktur, memperbaiki konten copywriting, menyelaraskan desain dengan brand guideline resmi, dan meningkatkan visibilitas SEO lokal.

### 1.2 Ruang Lingkup
Proyek ini mencakup refactor menyeluruh pada codebase frontend (`selenium-app`) yang saat ini dibangun dengan **Vite + Vanilla JS + TailwindCSS v3**. Tidak ada perubahan stack teknologi.

### 1.3 Definisi & Akronim
| Singkatan | Keterangan |
|-----------|-----------|
| CTA | Call to Action |
| SEO | Search Engine Optimization |
| GEO | Generative Engine Optimization |
| UMKM | Usaha Mikro, Kecil, dan Menengah |
| FAB | Floating Action Button |
| WA | WhatsApp |

---

## 2. Gambaran Umum Sistem

### 2.1 Deskripsi Produk
Landing page marketing statis (single-page atau multi-page) yang merepresentasikan **selenium.id** sebagai mitra konsultan IT terpercaya untuk UMKM dan bisnis di Pontianak dan sekitarnya.

### 2.2 Pengguna Target
- **UMKM** yang ingin digitalisasi bisnis (belum paham teknologi)
- **Pemilik bisnis lokal** di Pontianak, Kalimantan Barat
- **Calon mitra / investor** yang ingin mengenal perusahaan

### 2.3 Asumsi & Ketergantungan
- Domain `selenium.id` sudah dimiliki
- Email profesional menggunakan domain `.id` tersedia
- Nomor WhatsApp aktif: `+62-822-5321-0449`
- Aset brand (logo, foto tim) tersedia sebelum implementasi

---

## 3. Kebutuhan Fungsional

### 3.1 Struktur Halaman

#### FR-01: Struktur Section Utama
**Prioritas:** Must Have  
Landing page harus memiliki section berurut:
1. **Hero** — tagline utama + CTA ke WhatsApp
2. **Layanan** — daftar jasa yang ditawarkan
3. **Tentang Kami** — profil perusahaan + foto tim / wajah perusahaan
4. **Portofolio** — showcase proyek yang pernah dikerjakan
5. **Testimoni Klien** — ulasan/review dari klien nyata
6. **Footer** — kontak, navigasi, sosial media

#### FR-02: Penghapusan Section
**Prioritas:** Must Have  
Section berikut **harus dihapus** dari halaman utama:
- Pricing / Paket harga (dihapus sepenuhnya)
- Tech Stack (dihapus atau dijadikan elemen minor di About)
- Contact Form (digantikan tombol WA langsung)
- Bagian "Process" yang terlalu teknis

#### FR-03: Halaman Layanan Detail
**Prioritas:** Should Have  
- Setiap layanan memiliki halaman/route sendiri (`/layanan/[slug]`)
- Setiap halaman layanan memuat: deskripsi lengkap, manfaat, contoh kasus, CTA WA
- Tujuan: SEO + penjelasan lebih baik kepada calon klien

### 3.2 Navigasi

#### FR-04: Navigasi Utama
**Prioritas:** Must Have  
Menu navigasi: Layanan · Tentang Kami · Portofolio · Hubungi Kami

#### FR-05: CTA Utama ke WhatsApp
**Prioritas:** Must Have  
- Tombol "Konsultasi Gratis" / "Hubungi Kami" langsung membuka WhatsApp
- URL: `https://wa.me/6282253210449?text=...` (dengan pesan default)
- Tombol WA FAB tetap ada di semua halaman

#### FR-06: Penghapusan Contact Form
**Prioritas:** Must Have  
Form kontak dihapus dan digantikan sepenuhnya oleh tombol WhatsApp

### 3.3 Konten & Copywriting

#### FR-07: Bahasa Non-Teknis & Berorientasi Konsultan
**Prioritas:** Must Have  
Seluruh teks harus:
- Menggunakan kata kunci: *konsultan, Pontianak, konsultasi, jasa, software, perangkat lunak, jasa website, aplikasi*
- Menghindari jargon teknis yang tidak dipahami UMKM
- Terasa hangat, approachable, dan tidak terlalu "enterprise"
- Tidak menggunakan pola teks yang terkesan ditulis oleh AI

#### FR-08: Review / Testimoni Klien
**Prioritas:** Must Have  
- Section testimoni dengan minimal 3 ulasan klien nyata
- Menampilkan nama, perusahaan/jabatan, dan foto (jika ada)

#### FR-09: Wajah Perusahaan (Team Section)
**Prioritas:** Should Have  
- Foto dan nama anggota tim (minimal foto 1 orang penanggung jawab)
- Menampilkan identitas visual perusahaan (bukan hanya logo)

#### FR-10: Instansi / Mitra Kerja Sama
**Prioritas:** Should Have  
- Logo atau nama instansi/klien yang pernah bekerja sama
- Berbentuk "logo strip" atau daftar sederhana

#### FR-11: Portofolio / Proyek
**Prioritas:** Must Have  
- Minimal 3 proyek nyata yang pernah dikerjakan
- Setiap proyek: nama, klien, deskripsi singkat, screenshot/gambar, tag teknologi
- Tautan ke halaman detail proyek jika ada

### 3.4 SEO & GEO

#### FR-12: Optimasi SEO Lokal
**Prioritas:** Must Have  
- Title tag, meta description, dan heading mengandung kata kunci lokal (Pontianak, Kalimantan Barat)
- Schema.org JSON-LD: `LocalBusiness` atau `ProfessionalService` dengan alamat lengkap
- URL slug berbahasa Indonesia untuk halaman layanan
- Konten ramah crawler (tidak bergantung 100% pada JS untuk render konten utama)

#### FR-13: Email Profesional
**Prioritas:** Should Have  
- Menampilkan email dengan domain `.id` (bukan Gmail) di seluruh halaman
- Contoh: `halo@selenium.id`

### 3.5 Dark Mode

#### FR-14: Toggle Dark/Light Mode
**Prioritas:** Should Have  
- Tombol toggle tema gelap/terang tersedia di navbar
- Preferensi disimpan di `localStorage`
- Mengikuti CSS custom property dari UI Guideline

### 3.6 Aksesibilitas & Performa

#### FR-15: Aksesibilitas Dasar
**Prioritas:** Must Have  
- Semua gambar memiliki `alt` text
- Tombol dan link memiliki label aria
- Kontras warna memenuhi WCAG AA

#### FR-16: Mobile-First
**Prioritas:** Must Have  
- Layout dirancang untuk mobile (375px) terlebih dahulu
- Breakpoint: 640px (tablet kecil), 768px (tablet), 1024px (desktop)
- Semua interaksi dapat dilakukan dengan sentuhan jari

---

## 4. Kebutuhan Non-Fungsional

| ID | Kebutuhan | Target |
|----|-----------|--------|
| NFR-01 | Lighthouse Performance Score | ≥ 85 |
| NFR-02 | Lighthouse SEO Score | ≥ 90 |
| NFR-03 | First Contentful Paint | < 2 detik |
| NFR-04 | Ukuran bundle JS | < 150 KB (gzip) |
| NFR-05 | Responsif di semua layar | 320px – 1440px+ |
| NFR-06 | Browser support | Chrome, Firefox, Safari (2 versi terakhir) |

---

## 5. Batasan Sistem
- Tidak menggunakan backend/database (statis)
- Tidak ada fitur e-commerce atau pembayaran
- Tidak ada CMS (konten dikelola langsung di kode)
- Stack tidak berubah: Vite + Vanilla JS + TailwindCSS v3
