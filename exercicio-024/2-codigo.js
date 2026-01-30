const inputInicial = document.getElementById('inicio')
const inputFinal = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnContagem = document.querySelector('.btnContagem')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function contagem() {
    let inputVazio = null

    for (let input of todosInputs) {
        if (input.value === '') {
            inputVazio = input
            break
        }
    }

    if (inputVazio) {
        alert('Digite o valor inicial e final.')
        inputVazio.focus()
        return
    }

    const inicio = Number(inputInicial.value)
    const fim = Number(inputFinal.value)

    let resposta = ''

    if (inicio < fim) {
        // Contagem crescente
        for (let contador = inicio; contador <= fim; contador++) {
            resposta += `${contador} > `
        }
    } else {
        // Contagem decrescente
        for (let contador = inicio; contador >= fim; contador--) {
            resposta += `${contador} > `
        }
    }

    mensagem.innerHTML = `<p>${resposta} FIM!</p>`

    btnContagem.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputInicial.focus()

    btnContagem.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}


