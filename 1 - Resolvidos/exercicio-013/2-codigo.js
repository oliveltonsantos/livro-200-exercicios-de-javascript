const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const btnCalcularIMC = document.querySelector('.btnCalcularIMC')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const resposta = document.querySelector('.resposta')


function calcularIMC() {
    if (inputPeso.value === '' || inputAltura.value === '') {
        alert('Digite o peso e a altura para calcular o IMC.')
        return
    }

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (peso <= 0 || altura <= 0) {
        alert('Peso e altura precisam ser maiores que zero.')
        return
    }

    const imc = peso / (altura ** 2)

    let mensagem = ''

    if (imc < 18.5) {
        mensagem = 'Abaixo do peso (menor que 18.5)'
    } else if (imc < 25) {
        mensagem = ' Normal (entre 18.5 e 24.9)'
    } else if (imc < 30) {
        mensagem = 'Sobrepeso (entre 25 e 29.9)'
    } else {
        mensagem = 'Obesidade (igual ou acima de 30)'
    }

    resposta.innerHTML = `<p>IMC = ${imc.toFixed(1)} | Classificação: ${mensagem}</p>`

    btnCalcularIMC.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputPeso.value = ''
    inputAltura.value = ''
    inputPeso.focus()

    btnCalcularIMC.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}




