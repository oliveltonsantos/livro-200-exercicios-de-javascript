const inputNum1 = document.getElementById('numero1')
const inputNum2 = document.getElementById('numero2')
const inputNum3 = document.getElementById('numero3')
const todosInputs = document.querySelectorAll('input')
const btnReceberNumeros = document.querySelector('.btnReceberNumeros')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const resultado = document.querySelector('.resultado')


function receberNumeros() {
    const inputVazio = Array.from(todosInputs) // transforma em array
        .find(input => input.value === '')

    if (inputVazio) {
        alert('Digite um número em cada campo.')
        inputVazio.focus()
        return
    }

    const numero1 = Number(inputNum1.value)
    const numero2 = Number(inputNum2.value)
    const numero3 = Number(inputNum3.value)

    if (numero1 === numero2 || numero2 === numero3 || numero3 === numero1) {
        alert('Digite números diferentes em cada campo.')
        return
    }

    resultado.innerHTML = `<p>${maiorNumero(numero1, numero2, numero3)}</p>`

    btnReceberNumeros.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return `Número 1 = ${n1}`
    } else if (n2 > n1 && n2 > n3) {
        return `Número 2 = ${n2}`
    } else if (n3 > n1 && n3 > n2) {
        return `Número 3 = ${n3}`
    }
}


function novaVerificacao() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputNum1.focus()

    btnReceberNumeros.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resultado.innerHTML = ''
}
