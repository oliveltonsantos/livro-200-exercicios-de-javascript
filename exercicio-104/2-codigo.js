const inputNome = document.getElementById('nome')
const inputPaginas = document.getElementById('paginas')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function converterParaObjetos() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const paginas = Number(inputPaginas.value)

    // Estrutura do JSON
    const stringJSON = `{
        "nome": "${nome}",
        "paginas": ${paginas}
    }`

    // Convertendo para objeto
    const livro = JSON.parse(stringJSON)

    // Convertendo o objeto para string (texto)
    const mostrarObjeto = JSON.stringify(livro)

    mensagem.innerHTML = `<p>${mostrarObjeto}</p>`

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

