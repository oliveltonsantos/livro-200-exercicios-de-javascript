const inputNumA = document.getElementById('numeroA')
const inputNumB = document.getElementById('numeroB')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaMultiplicacao = document.querySelector('.btnNovaMultiplicacao')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const multiplicarValores = (valorA, valorB) => valorA * valorB


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const numA = Number(inputNumA.value)
    const numB = Number(inputNumB.value)

    const resultado = multiplicarValores(numA, numB)

    mensagem.innerHTML = `<p>${numA} X ${numB} = ${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaMultiplicacao.style.display = 'inline-block'
}


// Reset
function novaMultiplicacao() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaMultiplicacao.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNumA.focus()
}


