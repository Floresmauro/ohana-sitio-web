<script>
  // Modal de WhatsApp
  function abrirModalWhatsApp(event) {
    event.preventDefault();
    const modal = document.getElementById("modalWhatsapp");
    if (modal) {
      modal.style.display = "flex";
    }
  }

  function cerrarModal() {
    const modal = document.getElementById("modalWhatsapp");
    if (modal) {
      modal.style.display = "none";
    }
  }

  function confirmarWhatsApp() {
    window.open("https://wa.me/5491165632766", "_blank");
    cerrarModal();
  }

  window.onclick = function(event) {
    const modal = document.getElementById("modalWhatsapp");
    if (modal && event.target === modal) {
      cerrarModal();
    }
  };

  // Acordeón de catálogo
  document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".acordeon-btn");

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const contenido = boton.nextElementSibling;
        if (contenido) {
          contenido.classList.toggle("activo");
        }
      });
    });
  });
</script>

