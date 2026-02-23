const inputNumero = document.getElementById('numero')
const btnNumeroEPalindromo = document.querySelector('.btnNumeroEPalindromo')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const mensagem = document.querySelector('.mensagem')


function numeroEPalindromo() {
    if (inputNumero.value.trim() === '') {
        alert('Digite um número.')
        inputNumero.focus()
        return
    }

    const numeroOriginal = inputNumero.value

    if (isNaN(numeroOriginal)) {
        alert('Digite apenas números.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }


    let numeroInvertido = []
    let contador = numeroOriginal.length - 1

    while (contador >= 0) {
        numeroInvertido.push(numeroOriginal[contador])
        contador--
    }


    let resultado = ''

    if (numeroOriginal === numeroInvertido.join('')) {
        resultado = ' é palíndromo'
    } else {
        resultado = ' não é palíndromo'
    }


    mensagem.innerHTML = `<p>${numeroOriginal} ${resultado}.</p>`


    btnNumeroEPalindromo.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnNumeroEPalindromo.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    mensagem.innerHTML = ''
}

