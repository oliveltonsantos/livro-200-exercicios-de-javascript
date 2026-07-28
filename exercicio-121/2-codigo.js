const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoNome = document.querySelector('.btnNovoNome')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const juntarNomes = nome => sobrenome => `${nome} ${sobrenome}`


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const sobrenome = inputSobrenome.value

    const nomeDaPessoa = juntarNomes(nome)

    const resultado = nomeDaPessoa(sobrenome)

    mensagem.innerHTML = `<p>Nome completo: ${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoNome.style.display = 'inline-block'
}


// Reset
function novoNome() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoNome.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

