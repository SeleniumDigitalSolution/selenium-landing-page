# selenium.id — UI Guideline Summary
**Versi:** 1.0  
**Filosofi:** *Se-esensial selenium bagi kehidupan* — selenium.id hadir sebagai fondasi teknologi yang tak tergantikan bagi bisnis yang didampingi: dipercaya, kompeten, dan berjangka panjang.

---

## 01 — Sistem Warna

### Warna Utama
| Token | Hex | Penggunaan |
|-------|-----|------------|
| `--primary` | `#0A64BC` | Logo, navigasi, link, elemen brand utama |
| `--primary-dark` | `#084E93` | Hover state primary |
| `--primary-tint` | `#E8F1FB` | Background badge, icon wrap primary |
| `--secondary` | `#0D9488` | Highlight sekunder, ikon layanan, badge "trusted/expert" |
| `--secondary-dark` | `#0B7A70` | Hover state secondary |
| `--secondary-tint` | `#E1F5F2` | Background badge secondary |
| `--accent` | `#F2994A` | **Tombol CTA utama**: "Konsultasi Gratis", "Hubungi Kami" |
| `--accent-dark` | `#D97C2B` | Hover state CTA |
| `--accent-tint` | `#FDEEE0` | Background badge accent |

> **Alasan pilihan warna:**
> - **Biru primer** → kesan dipercaya & profesional (lazim di institusi finansial/konsultan)
> - **Teal sekunder** → analog biru, memperkuat inovatif & pertumbuhan jangka panjang
> - **Oranye aksi** → komplementer biru (±180° pada color wheel) — kontras visual tertinggi, tombol selalu menonjol namun tetap hangat & approachable

### Warna Semantik
| Token | Hex | Penggunaan |
|-------|-----|------------|
| `--success` | `#16A34A` | Status berhasil, proyek selesai |
| `--warning` | `#F5A623` | Perhatian, proses tertunda |
| `--danger` | `#DC2626` | Error, gagal, penghapusan |

### Surfaces & Teks

**Light Mode (default):**
| Token | Hex | Keterangan |
|-------|-----|-----------|
| `--bg` | `#FFFAFF` | Latar utama — lebih lembut dari putih murni |
| `--surface` | `#FFFFFF` | Latar card / panel |
| `--surface-2` | `#F6F2F7` | Latar elemen berlapis di atas background |
| `--border` | `#E5E1E8` | Border standar |
| `--border-strong` | `#D3CDDA` | Border tegas |
| `--text-primary` | `#171A2B` | Teks utama |
| `--text-secondary` | `#5B5E6B` | Teks pendukung |
| `--text-muted` | `#8B8E9A` | Teks ringan / caption |
| `--on-color` | `#FFFFFF` | Teks di atas warna solid |

**Dark Mode (`data-theme="dark"`):**
| Token | Hex | Keterangan |
|-------|-----|-----------|
| `--bg` | `#0B1120` | Navy pekat — lebih premium dari hitam murni |
| `--surface` | `#131B2E` | Latar card dark |
| `--surface-2` | `#0F1526` | Latar elemen berlapis dark |
| `--text-primary` | `#F5F6FA` | Teks utama dark |
| `--text-secondary` | `#A7ABC0` | Teks pendukung dark |

---

## 02 — Tipografi

### Font Families
| Variabel | Font | Bobot |
|----------|------|-------|
| `--font-heading` | **Plus Jakarta Sans** | 500 / 600 / 700 / 800 |
| `--font-body` | **Inter** | 400 / 500 / 600 / 700 |

> **Alasan pilihan font:**
> - **Plus Jakarta Sans** → heading: geometris dengan ujung membulat, modern sekaligus hangat (banyak dipakai brand tech Indonesia)
> - **Inter** → body: font paling teruji untuk keterbacaan di layar kecil, dipakai produk enterprise (Stripe, Linear, GitHub) → kesan kredibel & profesional

### Type Scale
| Level | Font | Berat | Ukuran | Line Height |
|-------|------|-------|--------|-------------|
| H1 | Plus Jakarta Sans | 800 | `clamp(1.75rem, 5vw, 3rem)` | 1.15 |
| H2 | Plus Jakarta Sans | 700 | `clamp(1.375rem, 3.4vw, 2rem)` | 1.2 |
| H3 | Plus Jakarta Sans | 600 | `clamp(1.125rem, 2.4vw, 1.375rem)` | 1.3 |
| Body | Inter | 400 | 16px | 1.6 |
| Caption | Inter | 500 | 14px | — |

---

## 03 — Komponen Tombol

**Prinsip:** Radius 10px (cukup lembut untuk approachable, tidak terlalu bulat agar tetap tegas). Min-height 44px untuk target sentuh mobile.

| Variant | Style | Penggunaan |
|---------|-------|-----------|
| `btn-primary` | Background `--accent`, teks `#3A1E00` | CTA utama: Konsultasi Gratis, Hubungi Kami |
| `btn-secondary` | Border `--primary`, teks `--primary`, transparan | CTA sekunder: Lihat Layanan |
| `btn-ghost` | Transparan, teks `--primary` | Aksi tersier: Pelajari lebih lanjut |
| `btn-sm` | Padding kecil, font 13px, min-h 36px | Tombol dalam card |
| `btn-lg` | Padding besar, font 16px, min-h 52px | Tombol hero |
| `btn[disabled]` | Opacity 40%, cursor not-allowed | State loading/disabled |

**Interaksi:**
- Hover: Perubahan warna background (`transition: 0.15s ease`)
- Active: `transform: scale(0.97)`

---

## 04 — Komponen Card

**Spesifikasi:** Radius 16px, border tipis (`--border`), shadow lembut bertona biru brand.

```
background: --surface
border: 1px solid --border
border-radius: 16px (--r-lg)
padding: 24px (--sp-5)
box-shadow: --shadow-sm
```

**Struktur card standard:**
1. Icon wrap (44×44px, radius 8px, background `--primary-tint`, warna `--primary`)
2. Heading H4 (font-heading, 16px, semibold)
3. Paragraf deskripsi (14px, `--text-secondary`)
4. Link atau tombol aksi

---

## 05 — Ikon

**Gaya:** Outline (filled = tidak digunakan), stroke 1.8px, ujung & sambungan membulat (`stroke-linecap: round`, `stroke-linejoin: round`).

> **Konsisten dengan** radius tombol & card → kesan approachable tanpa mengorbankan modern-profesional.

**Ikon yang tersedia dalam sistem:**
Website · Aplikasi · Infrastruktur · AI & Otomasi · Keamanan · Konsultasi

---

## 06 — Design Tokens

### Border Radius
| Token | Nilai | Penggunaan |
|-------|-------|-----------|
| `--r-sm` | 8px | Input field, icon wrap |
| `--r-md` | 10px | Tombol |
| `--r-lg` | 16px | Card |
| `--r-full` | 999px | Badge / pill |

### Spacing Scale
`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px`  
(`--sp-1` hingga `--sp-8`)

### Shadow
| Token | Nilai |
|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(10,100,188,0.08)` |
| `--shadow-md` | `0 8px 24px rgba(10,100,188,0.10)` |

### Breakpoint (Mobile-First)
| Nama | Nilai |
|------|-------|
| base | 0px+ (mobile ~375px) |
| sm | min-width: 640px (tablet kecil) |
| md | min-width: 768px (tablet) |
| lg | min-width: 1024px (desktop) |

> **Prinsip mobile-first:** Gaya dasar ditulis untuk layar 375px, lalu ditambahkan `min-width` media query untuk layar lebih besar. Ini menjaga performa & keterbacaan di perangkat mayoritas pengguna UMKM (mobile).

---

## 07 — Aksesibilitas

- Kontras teks & latar disesuaikan untuk **WCAG AA** di kedua mode (light & dark)
- Semua elemen interaktif memiliki `aria-label` atau teks yang deskriptif
- Min touch target: **44×44px**
- Navigasi keyboard-friendly (skip link, focus visible)
