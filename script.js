const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbywAnZoSd9CKIUC_pHUKnzV120ZN2RsE_6jLbMsD6eWjMHwufUctwOvnSMcqgl-gzq4/exec";
const form = document.forms["bhakti-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    position: "center",
    icon: "info",
    title: "tunggu sebentar",
    timer: 2200,
    timerProgressBar: true,
  });
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(() => {
        console.log("Success!", response);
        Swal.fire(
          "Terkirim",
          "Pesan anda telah terkirim, Terimakasih!",
          "success"
        );
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pesan").value = "";
      });
    }, 2000)
    .catch((error) => console.error("Error!", error.message));
});
