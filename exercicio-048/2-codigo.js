const inputNumero = document.getElementById('numero')
const btnReceberNumero = document.querySelector('.btnReceberNumero')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const mensagem = document.querySelector('.mensagem')


function receberNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número no campo abaixo.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    mensagem.innerHTML = `<p>${numero} é ${parOuImpar(numero)}</p>`

    btnReceberNumero.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function parOuImpar(num) {
    if (num % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}


function novaVerificacao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberNumero.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    mensagem.innerHTML = ''
}

