const inputFrase = document.getElementById('frase')
const btnProcessarFrase = document.querySelector('.btnProcessarFrase')
const btnNovaFrase = document.querySelector('.btnNovaFrase')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function analisarPalavras(palavras) {

    let maiorPalavra = ''

    for (let i = 0; i < palavras.length; i++) {

        if (palavras[i].length > maiorPalavra.length) {
            maiorPalavra = palavras[i]
        }
    }

    return maiorPalavra
}


// Interação com usuário
function processarFrase() {
    if (inputFrase.value === '') {
        alert('Digite uma frase antes de analisar.')
        inputFrase.focus()
        return
    }

    const frase = inputFrase.value

    const palavras = frase.split(" ")

    mensagem.innerHTML = `<p>Palavra mais longa: ${analisarPalavras(palavras)}</p>`

    inputFrase.disabled = true

    btnProcessarFrase.style.display = 'none'
    btnNovaFrase.style.display = 'inline-block'
}


// Reset
function novaFrase() {
    inputFrase.disabled = false
    inputFrase.value = ''
    inputFrase.focus()

    btnProcessarFrase.style.display = 'inline-block'
    btnNovaFrase.style.display = 'none'

    mensagem.innerHTML = ''
}

