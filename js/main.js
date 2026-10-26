// Menú adaptable y comportamiento demostrativo del formulario.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      toggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        toggle.textContent = "☰";
      });
    });
  }

  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#nombre").value.trim();
      feedback.textContent = `¡Gracias, ${name}! El formulario funciona como demostración; no se enviaron datos a un servidor.`;
      form.reset();
    });
  }
});
