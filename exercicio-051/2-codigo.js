const inputNumero = document.getElementById('numero')
const btnReceberNumero = document.querySelector('.btnReceberNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


function receberNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para calcular.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero <= -1 || !Number.isInteger(numero)) {
        alert('Não é possível calcular fatorial de  número negativo, decimal ou de fração.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    mensagem.innerHTML = `<p>${numero}! = ${fatorialNumero(numero)}</p>`

    btnReceberNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function fatorialNumero(num) {
    let resultado = 1

    for (let i = num; i > 1; i--) {
        resultado *= i
    }

    return resultado
}


function novoNumero() {
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}








