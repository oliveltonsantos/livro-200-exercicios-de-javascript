const inputPalavra = document.getElementById('palavra')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaPalavra = document.querySelector('.btnNovaPalavra')
const mensagem = document.querySelector('.mensagem')


const separarEmLetras = (palavra) => [...palavra]


// Interação com usuário
function processarPalavra() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra abaixo.')
        inputPalavra.value = ''
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    const resultado = separarEmLetras(palavra)

    mensagem.innerHTML = `<p>${palavra} => ${resultado.join(' - ')}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaPalavra.style.display = 'inline-block'
}


// Reset
function novaPalavra() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaPalavra.style.display = 'none'

    mensagem.innerHTML = ''

    inputPalavra.value = ''
    inputPalavra.focus()
}

