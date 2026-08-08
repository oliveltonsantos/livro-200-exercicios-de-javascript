const inputValorA = document.getElementById('valorA')
const inputValorB = document.getElementById('valorB')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaComparacao = document.querySelector('.btnNovaComparacao')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function compararValores(valorA, valorB) {
    if (valorA > valorB) {
        return "maior"
    } else if (valorA < valorB) {
        return 'menor'
    } else {
        return 'igual'
    }
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os valores.')
        inputVazio.focus()
        return
    }

    const valorA = Number(inputValorA.value)
    const valorB = Number(inputValorB.value)

    const resultado = compararValores(valorA, valorB)

    mensagem.innerHTML = `<p>O valor ${valorA} é ${resultado} ao valor ${valorB}.</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovaComparacao.style.display = 'inline-block'
}


// Reset
function novaComparacao() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaComparacao.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputValorA.focus()
}

