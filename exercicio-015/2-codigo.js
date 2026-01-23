const inputPalavra = document.getElementById('palavra')
const btnVerificarPalavra = document.querySelector('.btnVerificarPalavra')
const btnNovaPalavra = document.querySelector('.btnNovaPalavra')
const resposta = document.querySelector('.resposta')


function verificarPalavra() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para verificar.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value
        .toLowerCase()
        .trim()

    if (palavra.length < 3) {
        alert('Digite uma palavra com mais de duas letras.')
        inputPalavra.focus()
        return
    }

    let mensagem = ''

    if (palavra[0] === palavra[palavra.length - 1] && palavra[1] === palavra[palavra.length - 2]) {
        mensagem = 'É palíndromo.'
    } else {
        mensagem = 'Não é palíndromo.'
    }

    resposta.innerHTML = `<p>${mensagem}</p>`

    btnVerificarPalavra.style.display = 'none'
    btnNovaPalavra.style.display = 'inline-block'
}


function novaPalavra() {
    inputPalavra.value = ''
    inputPalavra.focus()

    btnVerificarPalavra.style.display = 'inline-block'
    btnNovaPalavra.style.display = 'none'

    resposta.innerHTML = ''
}


