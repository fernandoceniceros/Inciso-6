// Índice de la imagen actualmente mostrada
let currentIndex = 0;

// Seleccionamos el contenedor de imágenes
const carouselImages = document.querySelector('.carousel-images');
// Obtenemos la lista de imágenes
const images = document.querySelectorAll('.carousel-images img');
// Total de imágenes en el carrusel
const totalImages = images.length;

/**
 * Función que actualiza la posición del carrusel.
 * Se desplaza horizontalmente para mostrar la imagen en el índice actual.
 */
function updateCarousel() {
  // Se utiliza el 100% del ancho del contenedor para cada imagen
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/**
 * Función para avanzar a la siguiente imagen.
 */
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Cambio automático de imagen cada 5 segundos (5000 milisegundos)
setInterval(nextImage, 5000);
