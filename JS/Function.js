
const botonActivarAnimacion = document.getElementById("activarAnimacion");
const pageContent = document.querySelector(".page-content");

botonActivarAnimacion.addEventListener("click", (e) => {
  
    pageContent.classList.add("animated");

});




// Esperamos a que el contenido del DOM esté cargado
// Esperamos a que el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById("tooltip");
  
    // Función para mostrar el tooltip
    function mostrarTooltip() {
      tooltip.classList.add("show"); // Agrega la clase "show" para mostrar el tooltip
  
      // Ocultar el tooltip después de 2 segundos (2000 milisegundos)
      setTimeout(function () {
        tooltip.classList.remove("show"); // Quita la clase "show" para ocultar el tooltip
      }, 2000);
    }
  
    // Mostrar el tooltip automáticamente cada 2 segundos
    setInterval(mostrarTooltip, 4000);
  });