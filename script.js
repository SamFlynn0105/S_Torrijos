document.addEventListener("DOMContentLoaded", function () {
  const text = "Samuel Torrijos Tiburcio";
  let index = 0;
  const speed = 80; // Velocidad de escritura en milisegundos
  const typewriterElement = document.getElementById("typewriter-text");

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      // Aquí se puede añadir una animación de parpadeo del cursor
      typewriterElement.style.animation = "blink-caret .75s step-end infinite";
    }
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeInDiv = document.getElementById("fade-in-div");
  fadeInDiv.classList.add("visible");
});

// scripts.js
// Mostrar el botón cuando el usuario se desplaza 20px hacia abajo desde el inicio de la página
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const toTopBtn = document.getElementById("toTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Desplazarse suavemente hacia el inicio de la página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
