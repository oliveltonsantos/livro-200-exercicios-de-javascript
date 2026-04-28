const inputTitulo = document.getElementById('titulo')
const inputAutor = document.getElementById('autor')
const inputPaginas = document.getElementById('paginas')
const inputCapa = document.getElementById('inputCapa')
const containerCapa = document.getElementById('containerCapa')
const todosInputs = document.querySelectorAll('input')
const btnAdicionarLivro = document.querySelector('.btnAdicionarLivro')
const btnNovoLivro = document.querySelector('.btnNovoLivro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário

function adicionarLivro() {
    const inputVazio = [...todosInputs]
        .filter(input => input.type !== 'file')
        .find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const titulo = inputTitulo.value
    const autor = inputAutor.value
    const paginas = Number(inputPaginas.value)


    // Pega a imagem selecionada
    const arquivo = inputCapa.files[0]

    // Valida se a imagem foi enviada
    if (!arquivo) {
        alert('Selecione uma imagem de capa.')
        inputCapa.focus()
        return
    }

    // Cria a imagem
    const img = document.createElement('img')

    // Transforma arquivo em URL
    img.src = URL.createObjectURL(arquivo)

    // Largura da imagem
    img.width = 200

    // Mostra na tela
    containerCapa.appendChild(img)


    // Criação do objeto
    const livro = {
        titulo: titulo,
        autor: autor,
        paginas: paginas,

        exibirLivro() {
            return `${this.titulo}, escrito por ${this.autor}, com ${this.paginas} páginas`
        }
    }


    mensagem.innerHTML = `<p>${livro.exibirLivro()}</p>`

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

    inputTitulo.focus()

    btnAdicionarLivro.style.display = 'inline-block'
    btnNovoLivro.style.display = 'none'

    containerCapa.innerHTML = ''
    mensagem.innerHTML = ''
}





