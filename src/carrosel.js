// ===================== Carrosel =========================

$('.autoplay2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          infinite: true
        }
      },
      
    ],
  });
  
  
  $('.slick-slide').addClass('slick').css({'margin-top': '25px', 'margin-bottom': '100px'});

  const carouselItems = document.querySelectorAll('[data-carousel-item]');
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');
const indicators = document.querySelectorAll('[data-carousel-slide-to]');

let currentIndex = 0;

// Função para mostrar um slide específico
function showSlide(index) {
    // Esconde todos os slides
    carouselItems.forEach(item => {
        item.classList.add('hidden');
    });

    // Mostra o slide específico
    carouselItems[index].classList.remove('hidden');

    // Atualiza o índice atual
    currentIndex = index;

    // Atualiza o estado dos indicadores
    updateIndicators();
}

// Função para mostrar o próximo slide
function nextSlide() {
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(nextIndex);
}

// Função para mostrar o slide anterior
function prevSlide() {
    const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(prevIndex);
}

// Função para atualizar o estado dos indicadores
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.setAttribute('aria-current', 'true');
        } else {
            indicator.setAttribute('aria-current', 'false');
        }
    });
}

// Adiciona os eventos aos botões de navegação
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Adiciona os eventos aos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Mostra o primeiro slide ao carregar a página
showSlide(0);

const intervalTime = 3000; // 5 segundos

let intervalId; // Variável para armazenar o ID do intervalo

// Função para iniciar o deslize automático
function startCarousel() {
    intervalId = setInterval(nextSlide, intervalTime);
}

// Função para parar o deslize automático
function stopCarousel() {
    clearInterval(intervalId);
}

// Adiciona evento de pausa quando o mouse estiver sobre o carrossel
document.getElementById('default-carousel').addEventListener('mouseenter', stopCarousel);
// Adiciona evento de retomada quando o mouse sair do carrossel
document.getElementById('default-carousel').addEventListener('mouseleave', startCarousel);

// Inicia o carrossel automaticamente ao carregar a página
startCarousel();

  