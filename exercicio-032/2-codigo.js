const inputJogador = document.getElementById('jogador')
const btnIniciarJogo = document.querySelector('.btnIniciarJogo')
const btnNovoJogo = document.querySelector('.btnNovoJogo')
const mensagem = document.querySelector('.mensagem')


function iniciarJogo() {
    if (inputJogador.value.trim() === '') {
        alert('Escolha uma opção: Pedra | Tesoura | Papel')
        inputJogador.focus()
        return
    }

    const jogador = inputJogador.value
        .toLowerCase()

    if (
        (jogador !== "pedra") &&
        (jogador !== "tesoura") &&
        (jogador !== "papel")
    ) {
        alert('Escolha uma opção: Pedra | Tesoura | Papel')
        inputJogador.value = ''
        inputJogador.focus()
        return
    }


    const opcoesDeJogada = ['pedra', 'papel', 'tesoura']

    let computador = ''
    let resultado = ''


    do {
        computador =
            opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)]
    } while (computador === '');


    if (jogador === computador) {
        resultado = 'Deu empate. 🤝'
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'tesoura' && computador === 'papel') ||
        (jogador === 'papel' && computador === 'pedra')
    ) {
        resultado = 'Você ganhou! 💪😎'
    } else {
        resultado = 'Computador ganhou! 🦾🤖'
    }


    mensagem.innerHTML = `
        <p>Computador jogou: ${computador}</p>
        <p><strong>${resultado}</strong></p>
    `

    btnIniciarJogo.style.display = 'none'
    btnNovoJogo.style.display = 'inline-block'
}


function novoJogo() {
    inputJogador.value = ''
    inputJogador.focus()

    btnIniciarJogo.style.display = 'inline-block'
    btnNovoJogo.style.display = 'none'

    mensagem.innerHTML = ''
}
