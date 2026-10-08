# Ruang Ujian — CBT Sistem Komputer

Aplikasi Computer-Based Test (CBT) sederhana untuk asesmen Informatika Bab 4: **Sistem Komputer**. Proyek ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework atau dependensi eksternal.

## Fitur

- Alur ujian dari pengisian identitas, membaca aturan, hingga mengerjakan soal.
- 20 soal pilihan ganda dengan bobot bertingkat dan total nilai 50 poin.
- Lima soal esai yang dikerjakan di kertas, dengan checkbox konfirmasi per soal.
- Timer 60 menit, navigasi satu soal per halaman, serta peta status: sudah dijawab, belum dijawab, dan ragu-ragu.
- Penilaian otomatis pilihan ganda dengan kunci dan pembahasan setelah pengumpulan.
- Tema terang/gelap dengan preferensi yang disimpan di browser.
- Pengawasan browser best-effort: fullscreen, peringatan pelanggaran, dan lockout setelah tiga strike.
- Halaman ringkasan materi dengan tabel, contoh langkah Mr. Algo, tips esai, dan opsi cetak.

## Cara Menjalankan

Tidak perlu instalasi paket. Buka `index.html` di browser atau jalankan folder ini menggunakan ekstensi **Live Server** di VS Code.

1. Buka `index.html`.
2. Isi nama dan kelas.
3. Baca aturan, lalu pilih **Mulai ujian**.
4. Untuk belajar sebelum ujian, pilih **Baca ringkasan materi** pada halaman login.

## Struktur Proyek

| File | Kegunaan |
| --- | --- |
| `index.html` | Halaman CBT dan alur ujian |
| `styles.css` | Tampilan CBT, responsif, dan tema |
| `app.js` | Bank soal, timer, navigasi, penilaian, dan pengawasan browser |
| `ringkasan.html` | Halaman ringkasan materi Sistem Komputer |
| `ringkasan.css` | Tampilan halaman ringkasan |
| `ringkasan.js` | Tema dan fungsi cetak ringkasan |

## Teknologi

- HTML5
- CSS3 (Grid, Flexbox, media queries, custom properties)
- JavaScript modern tanpa framework
- Web APIs: Fullscreen, Visibility, Web Crypto, dan `localStorage`

## Catatan Penggunaan

> Aplikasi ini merupakan demo CBT sisi-klien. Jawaban, nilai, dan status pelanggaran tidak dikirim ke server. Mekanisme fullscreen dan lockout hanya bersifat pengawasan browser best-effort; data lokal dapat dihapus atau diubah oleh pengguna yang memiliki akses ke browser. Kata sandi buka-kunci di sisi klien bukan autentikasi aman untuk ujian resmi. Untuk penggunaan produksi, gunakan backend dengan akun siswa/guru, penyimpanan hasil terpusat, dan validasi otorisasi di server.

Jawaban esai dinilai oleh guru dari lembar jawaban tertulis. Hasil pilihan ganda ditampilkan langsung pada browser setelah ujian dikumpulkan.

## Lisensi

Belum ditentukan.