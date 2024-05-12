const personagem = document.getElementById('personagem');
const inimigo = document.getElementById('inimigo');
const telaMorte = document.getElementById('tela-morte');

let personagemX = 50;
let personagemY = 50;

let inimigoX = Math.random() * 450;
let inimigoY = Math.random() * 250;

let velocidadePersonagem = 5;
let vidaPersonagem = 100;
let manaPersonagem = 100;

let velocidadeInimigo = 2; // Velocidade de movimento do inimigo
let taxaAtualizacao = 10; // Taxa de atualização do loop do jogo (ms)

let jogoRodando = true;

document.addEventListener('keydown', moverPersonagem);

function moverPersonagem(evento) {
    if (jogoRodando) {
        if (evento.key === 'w' && personagemY > 0) {
            personagemY -= velocidadePersonagem;
        } else if (evento.key === 's' && personagemY < 280) {
            personagemY += velocidadePersonagem;
        } else if (evento.key === 'a' && personagemX > 0) {
            personagemX -= velocidadePersonagem;
        } else if (evento.key === 'd' && personagemX < 480) {
            personagemX += velocidadePersonagem;
        }

        atualizarPosicao();
        verificarColisao();
    }
}

function atualizarPosicao() {
    personagem.style.left = `${personagemX}px`;
    personagem.style.top = `${personagemY}px`;

    inimigo.style.left = `${inimigoX}px`;
    inimigo.style.top = `${inimigoY}px`;
}

function verificarColisao() {
    const rectPersonagem = personagem.getBoundingClientRect();
    const rectInimigo = inimigo.getBoundingClientRect();

    if (
        rectPersonagem.left < rectInimigo.right &&
        rectPersonagem.right > rectInimigo.left &&
        rectPersonagem.top < rectInimigo.bottom &&
        rectPersonagem.bottom > rectInimigo.top
    ) {
        vidaPersonagem -= 20;
        if (vidaPersonagem <= 0) {
            mostrarTelaMorte();
        }
        inimigoX = Math.random() * 450;
        inimigoY = Math.random() * 250;
        atualizarPosicao(); // Atualiza a posição do inimigo após colisão
    }
}

function mostrarTelaMorte() {
    jogoRodando = false;
    telaMorte.style.display = 'block';
}

function renascer() {
    jogoRodando = true;
    telaMorte.style.display = 'none';
}

// Chamada inicial para atualizar a posição do personagem e do inimigo
atualizarPosicao();
