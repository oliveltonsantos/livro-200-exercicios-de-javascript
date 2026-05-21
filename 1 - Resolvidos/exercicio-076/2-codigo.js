const inputNome = document.getElementById('nome')
const inputPreco = document.getElementById('preco')
const inputEstoque = document.getElementById('estoque')
const todosInputs = document.querySelectorAll('input')
const btnAdicionarLivro = document.querySelector('.btnAdicionarLivro')
const btnNovoLivro = document.querySelector('.btnNovoLivro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function adicionarLivro() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const preco = Number(inputPreco.value)
    const temEmEstoque = inputEstoque.value.toLowerCase() === 's' // retorna "true" ou "false"


    // Objeto vazio
    const livro = {}

    // Adicionando propriedades no objeto
    livro.nome = nome
    livro.preco = preco
    livro.estoque = temEmEstoque

    mensagem.innerHTML = `
        <p><strong>Livro adicionado:</strong></p>
        <p>Nome: ${livro.nome}</p>
        <p>Preço: R$${livro.preco.toFixed(2)}</p>
        <p>Tem em estoque: ${livro.estoque ? 'Sim' : 'Não'}</p>
    `
    todosInputs.forEach(input => input.disabled = true)

    btnAdicionarLivro.style.display = 'none'
    btnNovoLivro.style.display = 'inline-block'
}


// Reset
function novoLivro() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputNome.focus()

    btnAdicionarLivro.style.display = 'inline-block'
    btnNovoLivro.style.display = 'none'

    mensagem.innerHTML = ''
}

