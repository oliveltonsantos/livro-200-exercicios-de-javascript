const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnContagem = document.querySelector('.btnContagem')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function contagem() {
    const inputExiste = [...todosInputs].find(input => input.value === '')

    if (inputExiste) {
        alert('Digite o valor inicial e o final.')
        inputExiste.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (fim > inicio || inicio == fim) {
        alert('O número inicial deve ser maior que o final.')
        inputInicio.value = ''
        inputFim.value = ''
        inputInicio.focus()
        return
    }

    let contador = inicio
    let resposta = ''

    while (contador >= fim) {
        resposta += `${contador} > `
        contador--
    }

    mensagem.innerHTML = `<p>${resposta} FIM!</p>`

    btnContagem.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputInicio.focus()

    btnContagem.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}

