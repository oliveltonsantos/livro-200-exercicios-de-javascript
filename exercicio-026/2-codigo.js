const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnContarImpares = document.querySelector('.btnContarImpares')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function contarImpares() {
    let inputVazio = null

    for (const input of todosInputs) {
        if (input.value === '') {
            inputVazio = input
            break
        }
    }

    if (inputVazio) {
        alert('Digite o número inicial e o final.')
        inputVazio.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (inicio >= fim) {
        alert('O valor inicial deve ser menor que o valor final.')
        inputInicio.value = ''
        inputInicio.focus()
        return
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
        alert('Digite apenas números inteiros.')
        return
    }

    let contador = inicio
    let numerosImpares = []

    do {
        if (contador % 2 !== 0) {
            numerosImpares.push(contador)
        }
        contador++
    } while (contador <= fim)

    mensagem.innerHTML = `<p>${numerosImpares.join(' > ')} > FIM!</p>`

    btnContarImpares.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    todosInputs.forEach(input => input.value = '')
    inputInicio.focus()

    btnContarImpares.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}
