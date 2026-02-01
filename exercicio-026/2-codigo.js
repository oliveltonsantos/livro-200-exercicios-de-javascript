const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnContarImpares = document.querySelector('.btnContarImpares')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function contarImpares() {
    let inputVazio = null

    // Verifica se os campos foram preenchidos
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

    // Verifica se foi digitado número decimal (ex: 1.5)
    const inputDecimal = [...todosInputs].find(input => {
        const valor = Number(input.value)
        return !Number.isInteger(valor)
    })

    if (inputDecimal) {
        alert('Digite apenas números inteiros.')
        inputDecimal.value = ''
        inputDecimal.focus()
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
