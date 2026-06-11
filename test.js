const fs = require('fs');

console.log("Mulai menjalankan unit test fungsional...");

// Mengecek keberadaan file utama
const filesToCheck = ['Index.html', 'style.css', 'script.js'];
let allPassed = true;

filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ Berkas ${file} ditemukan.`);
    } else {
        console.error(`❌ Berkas ${file} TIDAK ditemukan!`);
        allPassed = false;
    }
});

if (allPassed) {
    console.log("Pengujian berhasil: Semua berkas utama tersedia untuk deployment.");
    process.exit(0); // Lulus CI
} else {
    console.error("Pengujian gagal: Ada berkas yang hilang.");
    process.exit(1); // Gagal CI
}