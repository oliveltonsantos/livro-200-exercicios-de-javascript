const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaMensagem = document.querySelector('.btnNovaMensagem')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const criarMensagemPersonalizada = (pessoa) => `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos para gerar a mensagem.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const idade = Number(inputIdade.value)

    const pessoa = {
        nome: nome,
        idade: idade
    }

    const resultado = criarMensagemPersonalizada(pessoa)

    mensagem.innerHTML = `<p>${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaMensagem.style.display = 'inline-block'
}


// Reset
function novaMensagem() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaMensagem.style.display = 'none'

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()

    mensagem.innerHTML = ''
}

