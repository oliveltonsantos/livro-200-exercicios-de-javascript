const inputNumero = document.getElementById('numero')
const btnReceberNumero = document.querySelector('.btnReceberNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const resposta = document.querySelector('.resposta')


function receberNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para verificar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero < 0 || !Number.isInteger(numero)) {
        alert('Não existem números primos que são negativos ou decimais. Digite apenas números inteiros (exemplo: 1, 2, 3).')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let resultado = ''

    if (verificarPrimo(numero)) {
        resultado = ' é primo.'
    } else {
        resultado = ' não é primo.'
    }

    resposta.innerHTML = `<p>${numero} ${resultado}</p>`

    btnReceberNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function verificarPrimo(num) {
    if (num <= 1) {
        return false
    }

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            return false
        }
    }

    return true
}


function novoNumero() {
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    resposta.innerHTML = ''
}


