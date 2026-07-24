
# **Detail Refactor Website**
Willy : 
- [ ] Flow terlau panjang dan tidak terlalu on point.
- [ ] Bahasa teralu AI, perlu copywriting yang lebih baik.
- [ ] Tombol lebih baik langsung ke WA.
- [ ] Tidak perlu terlalu banyak page atau halaman.
- [ ] Section -> hero, product yang ditawarkan (layanan), tentang kami, portofolio dan footer.
- [ ] Desain terlalu AI.
- [ ] Pricing hilangkan.
- [ ] Katalog perlu dipindahkan ke layanan.

Zaim : 
- [ ] Terlalu terlihat professional, jadi perlu di simplifikasi agar bisa digunakan untuk UMKM.
- [ ] Memerlukan fundamental desain (warna, bentuk dan font) -> design system/guideline.
- [ ] Belum ada review client.
- [ ] Belum ada instansi yang bekerja sama.
- [ ] Landing page terlalu panjang.
- [ ] Wajah dari perusahaan tidak ada.
- [ ] Simbolis dari visi misi
- [ ] Ditambahkan visualisasi untuk bagian keahlian

Arya : 
- [ ] Setiap page perlu bahasa yang kurang teknis dan tambahkan banyak kata-kata yang berhubungan dengan "konsultan", "Pontianak", "konsultasi", "jasa", "software", "perangkat lunak", "jasa website", "aplikasi".
- [ ] Terlalu panjang untuk sebuah landing page, jadi perlu dipecah menjadi beberapa page biar lebih singkat dan jelas.
- [ ] Pada bagian layanan lebih baik dibuat menjadi satu page yang isinya katalog, kemudian ketika diklik maka akan diarahkan ke page yang lebih detail dengan tujuan SEO dan menjelaskan lebih baik.
- [ ] Menggunakan email professional menggunakan domain .id yang sudah dibeli

Wayan : 
- [ ] Menambahkan search unutuk product
- [ ] Tombol mengganti tema
- [ ] Lebih show product atau project yang dikerjakan
- [ ] Menambahkan GEO + SEO
- [ ] Hilangkan bagian contact langsung arahkan ke whatsapp
- [ ] Buatkan CS Bot buat kita sendiri layanin pertanyaan. (Lebih baik manusia daripada CS Bot)
- [ ] Proses bekerja bisa masukan postingan yang ada di sosial media
- [ ] Techstack dihapus saja atau mungkin dibuat runover
- [ ] Hilangkan pricing

---

## ✅ Consolidated Improvement List
> Summary dari seluruh masukan tim — duplikat sudah digabungkan.

### 🗑️ Hapus / Hilangkan
- [ ] Hapus section **Pricing** dari halaman utama
- [ ] Hapus section **Tech Stack** (atau jadikan elemen kecil di About)
- [ ] Hapus section **Process** yang terlalu panjang dan teknis
- [ ] Hapus **Contact Form** — gantikan sepenuhnya dengan tombol WhatsApp
- [ ] Hilangkan **animasi neon/glow** yang berlebihan dan terkesan "AI-made"

### 🔀 Pindahkan / Gabungkan
- [ ] Pindahkan **Katalog/Pricing** ke dalam section **Layanan**
- [ ] Buat halaman detail per layanan (`/layanan/[slug]`) untuk SEO + penjelasan lebih baik

### 🏗️ Struktur Halaman
- [ ] Sederhanakan menjadi satu halaman dengan section: **Hero → Layanan → Tentang Kami → Portofolio → Testimoni → Footer**
- [ ] Persingkat landing page — tidak perlu terlalu panjang

### 📝 Copywriting & Bahasa
- [ ] Rewrite semua teks dengan bahasa yang **tidak teknis**, tidak terkesan ditulis AI
- [ ] Sertakan kata kunci lokal: *konsultan, Pontianak, konsultasi, jasa, software, perangkat lunak, jasa website, aplikasi*
- [ ] Orientasikan pesan untuk **UMKM** — sederhana, hangat, approachable
- [ ] Tambahkan kata-kata bertema **konsultan** di setiap halaman

### 📞 CTA & Konversi
- [ ] **Semua CTA utama langsung ke WhatsApp** (`wa.me/6282253210449`)
- [ ] WhatsApp FAB tetap tampil di semua halaman
- [ ] Tidak ada form kontak — WA sebagai satu-satunya jalur komunikasi

### 👥 Kepercayaan & Identitas
- [ ] Tambahkan **foto tim / wajah perusahaan**
- [ ] Tambahkan section **Testimoni / Review Klien** (minimal 3)
- [ ] Tambahkan **logo / nama instansi mitra** yang pernah bekerja sama
- [ ] Tambahkan **visualisasi keahlian** (bisa infografik sederhana, bukan animasi berat)
- [ ] Tunjukkan **simbolis visi misi** perusahaan

### 🎨 Desain & Design System
- [ ] Implementasikan **Design System** dari UI Guideline (`selenium-ui-guideline.html`)
- [ ] Font: **Plus Jakarta Sans** (heading) + **Inter** (body)
- [ ] Warna: Primary `#0A64BC` · Secondary `#0D9488` · CTA `#F2994A`
- [ ] Desain **light mode sebagai default** (bukan dark/neon)
- [ ] Tambahkan **toggle dark/light mode**
- [ ] Komponen lebih sederhana dan **UMKM-friendly** (tidak terlalu enterprise)

### 📂 Portofolio & Proyek
- [ ] Update proyek portofolio dengan **data nyata** dan screenshot
- [ ] Lebih banyak **show proyek** yang sudah dikerjakan
- [ ] Pertimbangkan integrasi konten dari **posting media sosial** (opsional, sprint berikutnya)

### 🔍 SEO & GEO
- [ ] Optimasi **SEO lokal** (Pontianak, Kalimantan Barat) di semua meta tags
- [ ] Tambahkan **GEO targeting** (koordinat lokasi di schema.org)
- [ ] URL slug halaman layanan dalam **Bahasa Indonesia**
- [ ] Schema.org `LocalBusiness` + `ProfessionalService` lengkap

### 📧 Kontak & Email
- [ ] Tampilkan **email profesional domain `.id`** (bukan Gmail) di seluruh halaman