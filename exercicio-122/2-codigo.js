const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputGenero = document.getElementById('genero')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const mostrarCadastro = (nome, idade, genero = '"Não divulgado"') => `${nome} possui ${idade} anos e seu gênero é ${genero}`


// Interação com usuário
function processarDados() {
    if (inputNome.value.trim() === '') {
        alert('Os campo "NOME" é obrigatório.')
        inputNome.value = ''
        inputNome.focus()
        return
    }

    if (inputIdade.value === '') {
        alert('O campo "IDADE" é obrigatório.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    const nome = inputNome.value
    const idade = Number(inputIdade.value)
    const genero = inputGenero.value || undefined


    /*
        O objetivo do operador OU (||) é dizer:

        "Se o valor da esquerda não servir, use o valor da direita."

        No seu caso:

        Se inputGenero.value tiver um texto, use esse texto.
        
        Se estiver vazio (""), use undefined.

        E por que isso?

        Porque o parâmetro default só funciona com undefined.
    */


    const resultado = mostrarCadastro(nome, idade, genero)

    mensagem.innerHTML = `<p>${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoCadastro.style.display = 'none'

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()

    mensagem.innerHTML = ''
}

