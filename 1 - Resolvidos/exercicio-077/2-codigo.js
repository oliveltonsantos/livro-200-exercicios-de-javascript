const inputNome = document.getElementById('nome')
const inputAutor = document.getElementById('autor')
const inputPaginas = document.getElementById('paginas')
const areaTexto = document.getElementById('descricao')
const todosCampos = document.querySelectorAll('.todosCampos')
const btnCadastrarLivro = document.querySelector('.btnCadastrarLivro')
const btnNovoLivro = document.querySelector('.btnNovoLivro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function cadastrarLivro() {
    const campoVazio = [...todosCampos].find(campo => campo.value === '')

    if (campoVazio) {
        alert('Preencha todos os campos abaixo.')
        campoVazio.focus()
        return
    }

    const nome = inputNome.value
    const autor = inputAutor.value
    const paginas = Number(inputPaginas.value)
    const descricao = areaTexto.value

    const livro = {
        nome: nome,
        autor: autor,
        paginas: paginas,
        descricao: descricao,

        imprimir() {
            return `
                <p>Nome: ${this.nome}</p>
                <p>Autor: ${this.autor}</p>
                <p>Páginas: ${this.paginas}</p>
                <p>Descrição: ${this.descricao}</p> 
            `
        }
    }

    mensagem.innerHTML = `
        <p>Livro adicionado com sucesso!</p>
        ${livro.imprimir()}
    `

    todosCampos.forEach(campo => campo.disabled = true)

    btnCadastrarLivro.style.display = 'none'
    btnNovoLivro.style.display = 'inline-block'
}


// Reset
function novoLivro() {
    todosCampos.forEach(campo => {
        campo.disabled = false
        campo.value = ''
    })

    inputNome.focus()

    btnCadastrarLivro.style.display = 'inline-block'
    btnNovoLivro.style.display = 'none'

    mensagem.innerHTML = ''
}

