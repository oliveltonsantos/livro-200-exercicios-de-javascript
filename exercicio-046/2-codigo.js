const inputNum1 = document.getElementById('numero1')
const inputNum2 = document.getElementById('numero2')
const todosInputs = document.querySelectorAll('input')
const btnReceberNumeros = document.querySelector('.btnReceberNumeros')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const resultado = document.querySelector('.resultado')


function receberNumeros() {
    let inputVazio = null

    for (const input of todosInputs) {
        if (input.value === '') {
            inputVazio = input
            break
        }
    }

    if (inputVazio) {
        alert('Digite um número no campo.')
        inputVazio.focus()
        return
    }

    const numero1 = Number(inputNum1.value)
    const numero2 = Number(inputNum2.value)

    const somaTotal = somarNumeros(numero1, numero2)

    resultado.innerHTML = `<p>${numero1} + ${numero2} = ${somaTotal}</p>`

    btnReceberNumeros.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function somarNumeros(n1, n2) {
    return n1 + n2
}


function novaSoma() {
    todosInputs.forEach(input => {
        input.value = ''
    });

    inputNum1.focus()

    btnReceberNumeros.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resultado.innerHTML = ''
}
