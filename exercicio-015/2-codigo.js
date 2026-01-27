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
        .toLowerCase() // transforma letras maiúsculas em minúsculas
        .normalize('NFD') // separa as letras do acento
        .replaceAll(/[\u0300-\u036f]/g, "") // remove os acentos
        .replaceAll(/[^a-z0-9]/g, "") // remove tudo o que não é letra ou número

    if (palavra.length < 3) {
        alert('Digite uma palavra com mais de duas letras.')
        inputPalavra.focus()
        return
    }

    let mensagem = ''

    let inicio = 0
    let fim = palavra.length - 1 // Pega a letra do último índice

    while (inicio < fim) {
        if (palavra[inicio] !== palavra[fim]) {
            mensagem = 'Não é palíndromo.'
            break
        }
        inicio++
        fim--

        mensagem = 'É palíndromo.'
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






