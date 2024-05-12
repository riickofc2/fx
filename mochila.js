const botaoMochila = document.getElementById('botao-mochila');
const menuMochila = document.createElement('div'); // Crie o elemento da mochila
menuMochila.id = 'menu-mochila'; // Defina o ID para a mochila
menuMochila.style.display = 'none'; // Oculte inicialmente a mochila

// Adicione o conteúdo da mochila (slots de itens) aqui

botaoMochila.addEventListener('click', () => {
    menuMochila.style.display = menuMochila.style.display === 'none' ? 'block' : 'none';
});

// Adicione o menu da mochila ao documento
document.body.appendChild(menuMochila);
