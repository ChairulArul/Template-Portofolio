// aos code config js
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
  });
});

// magic mouse config js
document.addEventListener("DOMContentLoaded", function () {
  new MagicMouse({
    cursorOuter: "circle-basic",
    hoverEffect: "pointer-overlay",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
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

// Dark mode toggle
const toggleDarkModeButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Cek jika pengguna sudah mengatur preferensi sebelumnya
const isDarkMode = localStorage.getItem("dark-mode") === "true";

if (isDarkMode) {
  body.classList.add("dark-mode");
}

// Event listener untuk tombol toggle
toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Simpan preferensi pengguna ke localStorage
  const isDarkModeActive = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkModeActive);
});

// logic hamburger icon

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menu = document.getElementById("menu");

  // Toggle menu saat hamburger icon diklik
  hamburgerIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Sembunyikan menu saat mouse keluar dari area menu
  menu.addEventListener("mouseleave", function () {
    menu.classList.remove("active");
  });
});
// Toggle menu saat hamburger icon diklik
hamburgerIcon.addEventListener("click", function (event) {
  event.stopPropagation(); // Mencegah klik pada ikon memicu event document
  menu.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menu = document.getElementById("menu");

  // Toggle menu saat hamburger icon diklik
  hamburgerIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah klik pada ikon memicu event document
    menu.classList.toggle("active");
  });

  // Sembunyikan menu saat klik di luar area menu
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
});
