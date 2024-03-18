// ================ DarkMode ====================

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeToggleBtn = document.getElementById('theme-toggle');
var logo = document.getElementById('logotipo');

// Define a função para alternar entre os modos claro e escuro
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
        logo.src = "images/colorida-fe.svg"; // Caminho da imagem para o modo claro
    } else {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
        logo.src = "images/colorida-fc.svg"; // Caminho da imagem para o modo escuro
    }
}

// Adiciona um ouvinte de evento para o botão de alternância
themeToggleBtn.addEventListener('click', function() {
    toggleTheme();
});

// Define o ícone inicial com base no estado atual
if (document.documentElement.classList.contains('dark')) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}


    const themeToggle = document.getElementById('theme-toggle');

        let isDragging = false;
        let startX, startY, offsetX, offsetY;

        themeToggle.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);

        function startDrag(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            offsetX = themeToggle.offsetLeft;
            offsetY = themeToggle.offsetTop;
        }

        function drag(e) {
            if (isDragging) {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                themeToggle.style.left = offsetX + dx + 'px';
                themeToggle.style.top = offsetY + dy + 'px';
            }
        }

        function stopDrag() {
            isDragging = false;
        }

function shopToogle() {

document.getElementById('shop').classList.remove("mobile:fixed")
document.getElementById('shop').classList.remove("mobile:z-10")
}

// ================ Menu Mobile ==================

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });



        
        
