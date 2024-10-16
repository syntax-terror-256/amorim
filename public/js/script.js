
document.addEventListener('DOMContentLoaded', function() {
    function createCarousel(carouselId) {
      const carousel = document.querySelector(`#${carouselId}`);
      const images = carousel.querySelectorAll('.carousel-image');
      let currentImageIndex = 0;
      const totalImages = images.length;

      function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentImageIndex].classList.remove('active');
        
        // Incrementa o índice da imagem
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        // Adiciona a classe "active" à nova imagem
        images[currentImageIndex].classList.add('active');
      }

      // Altera a imagem automaticamente a cada 3 segundos
      setInterval(showNextImage, 3000);
    }

    // Cria carrossel para cada instância
    createCarousel('carousel1');
    createCarousel('carousel2');
    createCarousel('carousel3');
  });