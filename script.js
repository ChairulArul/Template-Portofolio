// aos code config js
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
  });
});

// magic mouse config js
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi MagicMouse setelah konten di-load
  new MagicMouse({
    cursorOuter: "circle-basic", // Kursor luar
    hoverEffect: "pointer-overlay", // Efek hover
    hoverItemMove: false, // Apakah elemen ikut bergerak
    defaultCursor: false, // Menonaktifkan kursor default browser
    outerWidth: 30, // Ukuran kursor luar
    outerHeight: 30, // Ukuran kursor luar
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Pesan berhasil dikirim!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Mohon lengkapi semua field!");
    }
  });

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 3000);
});
