const inputPosicao = document.getElementById('posicaoDoNumero')
const btnReceberPosicao = document.querySelector('.btnReceberPosicao')
const btnNovaPosicao = document.querySelector('.btnNovaPosicao')
const resposta = document.querySelector('.resposta')


function receberPosicao() {
    if (inputPosicao.value === '') {
        alert('Digite um número para verificar.')
        inputPosicao.focus()
        return
    }

    const posicaoDoNumero = Number(inputPosicao.value)

    if (posicaoDoNumero < 0 || !Number.isInteger(posicaoDoNumero)) {
        alert('Não é permitido posições iguais a números negativos, frações ou irracionais.')
        inputPosicao.value = ''
        inputPosicao.focus()
        return
    }

    resposta.innerHTML = `<p>Posição ${posicaoDoNumero} = ${numeroDaSequencia(posicaoDoNumero)}<p>`

    btnReceberPosicao.style.display = 'none'
    btnNovaPosicao.style.display = 'inline-block'
}


function numeroDaSequencia(posicao) {
    if (posicao === 0 || posicao === 1) {
        return posicao
    }

    let termo0 = 0
    let termo1 = 1
    let termoAtual = 0

    for (let i = 2; i <= posicao; i++) {
        termoAtual = termo0 + termo1
        termo0 = termo1
        termo1 = termoAtual
    }

    return termoAtual
}


function novaPosicao() {
    inputPosicao.value = ''
    inputPosicao.focus()

    btnReceberPosicao.style.display = 'inline-block'
    btnNovaPosicao.style.display = 'none'

    resposta.innerHTML = ''
}
