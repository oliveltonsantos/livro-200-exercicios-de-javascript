const inputNumero = document.getElementById('numero')
const btnReceberNumero = document.querySelector('.btnReceberNumero')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const resultado = document.querySelector('.resultado')


function receberNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número antes de calcular.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    resultado.innerHTML = `<p>${numeroAoQuadrado(numero)}</p>`

    btnReceberNumero.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function numeroAoQuadrado(num) {
    return num ** 2
}


function novoCalculo() {
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberNumero.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resultado.innerHTML = ''
}


