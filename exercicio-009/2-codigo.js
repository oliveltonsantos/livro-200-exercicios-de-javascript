const inputNumero = document.getElementById('numero')
const btnVerificar = document.querySelector('.btnVerificar')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const resposta = document.querySelector('.resposta')


function verificarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    let mensagem = ''

    if (numero < 0) {
        mensagem = 'Número negativo.'
    } else if (numero > 0) {
        mensagem = 'Número positivo'
    } else {
        mensagem = 'Número zero.'
    }

    resposta.innerHTML = `<p>${mensagem}</p>`

    btnVerificar.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnVerificar.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}


