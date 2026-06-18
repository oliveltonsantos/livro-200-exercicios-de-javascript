const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function exibirComoTemplateLiterals(nome, sobrenome, idade) {
    return `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const sobrenome = inputSobrenome.value
    const idade = Number(inputIdade.value)

    const resultado = exibirComoTemplateLiterals(nome, sobrenome, idade)

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

