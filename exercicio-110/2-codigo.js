const inputNome = document.getElementById('nome')
const inputForca = document.getElementById('forca')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoPersonagem = document.querySelector('.btnNovoPersonagem')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function alterarEConverterDados(personagem) {

    const alterarForca = (chave, valor) => {
        if (chave === 'forca') return valor + 10
        return valor
    }

    const personagemJSON = JSON.stringify(personagem, alterarForca)

    return personagemJSON
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados abaixo.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const forca = Number(inputForca.value)

    if (forca <= 0 || forca > 100) {
        alert('Força deve estar entre 1 e 100.')
        inputForca.value = ''
        inputForca.focus()
        return
    }

    const personagem = {
        nome: nome,
        forca: forca
    }

    const exibirResultado = alterarEConverterDados(personagem)

    mensagem.innerHTML = `<p>${exibirResultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoPersonagem.style.display = 'inline-block'
}


// Reset
function novoPersonagem() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoPersonagem.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}




