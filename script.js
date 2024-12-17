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
