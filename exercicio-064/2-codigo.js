const inputFrase = document.getElementById('frase')
const btnReceberFrase = document.querySelector('.btnReceberFrase')
const btnNovaFrase = document.querySelector('.btnNovaFrase')
const mensagem = document.querySelector('.mensagem')


function receberFrase() {
    if (inputFrase.value.trim() === '') {
        alert('Digite uma frase.')
        inputFrase.focus()
        return
    }

    const frase = inputFrase.value

    mensagem.innerHTML = `<p>Número de palavras: ${contarPalavras(frase)}</p>`

    inputFrase.disabled = true

    btnReceberFrase.style.display = 'none'
    btnNovaFrase.style.display = 'inline-block'
}


function contarPalavras(frasePassada) {

    const numeroPalavras = frasePassada.split(' ')

    return numeroPalavras.length
}


function novaFrase() {
    inputFrase.disabled = false
    inputFrase.value = ''
    inputFrase.focus()

    btnReceberFrase.style.display = 'inline-block'
    btnNovaFrase.style.display = 'none'

    mensagem.innerHTML = ''
}

