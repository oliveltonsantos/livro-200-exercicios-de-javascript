const inputFrase = document.getElementById('frase')
const btnImprimirFrase = document.querySelector('.btnImprimirFrase')
const btnNovaFrase = document.querySelector('.btnNovaFrase')
const mensagem = document.querySelector('.mensagem')


function imprimirFrase() {
    if (inputFrase.value.trim() === '') {
        alert('Digite uma frase para imprimir.')
        inputFrase.focus()
        return
    }

    const frase = inputFrase.value

    mensagem.innerHTML = `<p>${frase}</p>`

    btnImprimirFrase.style.display = 'none'
    btnNovaFrase.style.display = 'inline-block'
}


function novaFrase() {
    inputFrase.value = ''
    inputFrase.focus()

    btnImprimirFrase.style.display = 'inline-block'
    btnNovaFrase.style.display = 'none'

    mensagem.innerHTML = ''
}




