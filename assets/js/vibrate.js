// Fungsi untuk memicu efek getaran
function vibrateDevice() {
    // Periksa apakah perangkat mendukung API getaran
    if ("vibrate" in navigator) {
      // Memanggil metode vibrate() untuk memicu efek getaran
      navigator.vibrate(100); // Angka di sini adalah durasi getaran dalam milidetik
    }
  }
  
  // Tambahkan event listener untuk semua tombol dengan class btn-success dan btn-fail
  document.addEventListener("DOMContentLoaded", function() {
    var successButtons = document.querySelectorAll(".btn-success");
    var failButtons = document.querySelectorAll(".btn-fail");
  
    // Tambahkan event listener pada tombol-tombol dengan class btn-success
    successButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        vibrateDevice(); // Memanggil fungsi getaran saat tombol ditekan
        // Tambahkan logika lainnya di sini
      });
    });
  
    // Tambahkan event listener pada tombol-tombol dengan class btn-fail
    failButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        vibrateDevice(); // Memanggil fungsi getaran saat tombol ditekan
        // Tambahkan logika lainnya di sini
      });
    });
  });
  