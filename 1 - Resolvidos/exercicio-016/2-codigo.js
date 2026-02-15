const inputNum1 = document.getElementById('numero1')
const inputNum2 = document.getElementById('numero2')
const inputNum3 = document.getElementById('numero3')
const todosInputs = document.querySelectorAll('input')
const btnCompararNumeros = document.querySelector('.btnCompararNumeros')
const btnNovaComparacao = document.querySelector('.btnNovaComparacao')
const resposta = document.querySelector('.resposta')


function compararNumeros() {
    let inputEstaVazio = null // null: significa que “não existe valor”

    for (const input of todosInputs) {
        if (input.value === '') {
            inputEstaVazio = input
            break
        }
    }

    if (inputEstaVazio) {
        alert('Digite 3 números para comparar.')
        inputEstaVazio.focus()
        return
    }

    const num1 = Number(inputNum1.value)
    const num2 = Number(inputNum2.value)
    const num3 = Number(inputNum3.value)

    let mensagem = ''

    if (num1 === num2 && num2 === num3) {
        mensagem = 'Todos os números são iguais.'
    } else if (num1 > num2 && num1 > num3) {
        mensagem = `${num1} é o maior.`
    } else if (num2 > num1 && num2 > num3) {
        mensagem = `${num2} é o maior.`
    } else {
        mensagem = `${num3} é o maior.`
    }

    resposta.innerHTML = `<p>${mensagem}</p>`

    btnCompararNumeros.style.display = 'none'
    btnNovaComparacao.style.display = 'inline-block'
}


function novaComparacao() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputNum1.focus()

    btnCompararNumeros.style.display = 'inline-block'
    btnNovaComparacao.style.display = 'none'

    resposta.innerHTML = ''
}

