// Obtendo referências para os elementos HTML que serão usados
const btnMobile = document.getElementById('button-mobile');
const nav = document.getElementById('nav');
const menuIcon = document.getElementById('menu-icon');
const linksMenu = document.querySelectorAll('.nav-a');

// Função para alternar o menu (abrir/fechar) e alterar o ícone correspondente
function toggleMenu() {
  nav.classList.toggle('active');

  // Verifica se o menu está aberto ou fechado pela presença da classe 'active'
  if (nav.classList.contains('active')) {

     // Se o menu está aberto, muda dinamicamente o ícone para representar o menu aberto
    menuIcon.src = 'img/menu-closer.svg';// Altera a imagem do ícone
    menuIcon.alt = 'Menu Aberto';// Atualiza o texto alternativo do ícone
  } else {
    // Se o menu está fechado, muda dinamicamente o ícone para representar o menu fechado
    menuIcon.src = 'img/menu-togle.svg';
    menuIcon.alt = 'Menu Fechado';
  }
}
// Adiciona um ouvinte de evento para detectar cliques no botão e chama a função toggleMenu()
btnMobile.addEventListener('click', toggleMenu);

//funçãi que faz o menu fechar automaticamente quando clica no link
function closeMenuOnClick() {
  nav.classList.remove('active'); // Fecha o menu removendo a classe 'active'
  menuIcon.src = 'img/menu-togle.svg'; // Atualiza o ícone para representar o menu fechado
  menuIcon.alt = 'Menu Fechado';
}

btnMobile.addEventListener('click', toggleMenu); // Adiciona o evento para abrir/fechar o menu ao clicar no botão

// Adiciona um ouvinte de evento para cada link no menu
linksMenu.forEach(link => {
  link.addEventListener('click', closeMenuOnClick);
});