const inputPoderBase = document.getElementById('poderBase')
const inputQuantoAumentar = document.getElementById('quantoAumentar')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoAumento = document.querySelector('.btnNovoAumento')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const criarAumento = poderBase => {
    return aumento => poderBase + aumento
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos abaixo.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const poderBase = Number(inputPoderBase.value)
    const quantoAumentar = Number(inputQuantoAumentar.value)

    const novoAumento = criarAumento(poderBase)

    const resultado = novoAumento(quantoAumentar)

    mensagem.innerHTML = `<p>Poder antes era ${poderBase}XP 🤏😐 e o novo poder é ${resultado}XP 💪😎</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoAumento.style.display = 'inline-block'
}


// Reset
function novoAumento() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoAumento.style.display = 'none'

    todosInputs.forEach(input => input.value = '')

    inputPoderBase.focus()

    mensagem.innerHTML = ''
}

