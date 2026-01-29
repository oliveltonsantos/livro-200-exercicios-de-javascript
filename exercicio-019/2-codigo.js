const inputVerificado = document.getElementById('verificado')
const inputInferior = document.getElementById('inferior')
const inputSuperior = document.getElementById('superior')
const todosInputs = document.querySelectorAll('input')
const btnAnalisarNumeros = document.querySelector('.btnAnalisarNumeros')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const mensagem = document.querySelector('.mensagem')


function analisarNumeros() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Digite todos os valores primeiro.')
        inputVazio.focus()
        return
    }

    const numVerificado = Number(inputVerificado.value)
    const numInferior = Number(inputInferior.value)
    const numSuperior = Number(inputSuperior.value)

    let resposta = ''

    if (numVerificado >= numInferior && numVerificado <= numSuperior) {
        resposta = 'está dentro do intervalo informado.'
    } else {
        resposta = 'não está dentro do intervalo informado.'
    }

    mensagem.innerHTML = `<p>${numVerificado} ${resposta}</p>`

    btnAnalisarNumeros.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    todosInputs.forEach(input => {
        input.value = ''
    })

    inputVerificado.focus()

    btnAnalisarNumeros.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    mensagem.innerHTML = ''
}

