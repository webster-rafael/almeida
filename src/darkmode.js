// ================ DarkMode ====================

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

   
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    const logo = document.getElementById('logotipo');
      
            if (document.documentElement.classList.contains('dark')) {
                logo.src = "images/colorida-fe.svg"; // Caminho da imagem para 
            } else {
                logo.src = "images/colorida-fc.svg"; // Caminho da imagem para o modo claro
            }

    
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            
        }

  
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

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



        
        
