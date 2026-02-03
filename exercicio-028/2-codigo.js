const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnSomarNumeros = document.querySelector('.btnSomarNumeros')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const mensagem = document.querySelector('.mensagem')


function somarNumeros() {

    // Verifica se há campos não preenchidos
    let inputVazio = null

    for (input of todosInputs) {
        if (input.value === '') {
            inputVazio = input
            break
        }
    }

    if (inputVazio) {
        alert(`Digite um número em cada campo.`)
        inputVazio.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (inicio >= fim) {
        alert('O número inicial deve ser menor do que o número final.')
        inputInicio.value = ''
        inputInicio.focus()
        return
    }

    let contador = inicio
    let soma = 0

    while (contador <= fim) {
        soma = soma + contador
        contador++
    }

    mensagem.innerHTML = `<p>Soma total: ${soma}<p>`

    btnSomarNumeros.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputInicio.focus()

    btnSomarNumeros.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    mensagem.innerHTML = ''
}

