const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function processarDados() {

    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados para continuar.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const idade = Number(inputIdade.value)

    const pessoa = {
        nome: nome,
        idade: idade
    }

    // Converter objeto para string JSON
    const stringJason = JSON.stringify(pessoa)

    mensagem.innerHTML = `<p>${stringJason}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoCadastro.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => {
        input.value = ''
    })

    inputNome.focus()
}

