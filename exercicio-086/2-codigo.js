const inputTitulo = document.getElementById('titulo')
const inputAutor = document.getElementById('autor')
const inputPaginas = document.getElementById('paginas')

const inputImagem = document.getElementById('inputImagem')
const container = document.getElementById('container')


const todosInputs = document.querySelectorAll('input')
const btnAdicionarLivro = document.querySelector('.btnAdicionarLivro')
const btnNovoLivro = document.querySelector('.btnNovoLivro')
const mensagem = document.querySelector('.mensagem')


// Detectar quando a imagem foi escolhida

inputImagem.addEventListener('change', () => {
    const arquivo = inputImagem.files[0]

    // Verificação se existe um arquivo
    if (!arquivo) return

    // Criar a imagem
    const img = document.createElement('img')
    img.width = 200

    // Transformar arquivo em URL
    img.src = URL.createObjectURL(arquivo)

    // Mostrar na tela
    container.appendChild(img)
})




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

    const livro = {
        titulo: titulo,
        autor: autor, 
        paginas: paginas,

        exibirLivro() {
            return `${this.titulo}, escrito por ${this.autor}, com ${this.paginas} páginas`
        }
    }

    mensagem.innerHTML = `<p>${livro.exibirLivro()}</p>`

}





