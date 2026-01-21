const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const btnSomar = document.querySelector('.btnSomar')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const resposta = document.querySelector('.resposta')


function somarNumeros() {
    if (inputNumero1.value === '') {
        alert('Digite o primeiro número.')
        inputNumero1.focus()
        return
    }

    if (inputNumero2.value === '') {
        alert('Digite o segundo número.')
        inputNumero2.focus()
        return
    }

    const numero1 = Number(inputNumero1.value)
    const numero2 = Number(inputNumero2.value)

    const soma = numero1 + numero2

    resposta.innerHTML = `<p>${numero1} + ${numero2} = ${soma}</p>`

    btnSomar.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero1.focus()

    btnSomar.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}