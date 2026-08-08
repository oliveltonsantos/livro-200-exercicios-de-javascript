const inputNome = document.getElementById('nome')
const inputAutor = document.getElementById('autor')
const inputAno = document.getElementById('ano')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function criarDescricaoDoLivro(livro) {
    return `O livro "${livro.nome}" foi escrito por ${livro.autor} em ${livro.ano}.`
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Informe todos os dados do livro.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const autor = inputAutor.value
    const ano = Number(inputAno.value)

    const livro = {
        nome: nome,
        autor: autor,
        ano: ano
    }

    const resultado = criarDescricaoDoLivro(livro)

    mensagem.innerHTML = `<p>${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoCadastro.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

