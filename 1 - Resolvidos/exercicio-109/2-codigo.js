const inputNome = document.getElementById('nome')
const inputPosicao = document.getElementById('posicao')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoJogador = document.querySelector('.btnNovoJogador')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function converterEAdicionarObjeto(listaJogadoresJSON, novoJogador) {
    const listaJogadoresObjeto = JSON.parse(listaJogadoresJSON)

    listaJogadoresObjeto.push(novoJogador)

    return listaJogadoresObjeto
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
    const posicao = inputPosicao.value

    const listaJogadoresJSON = `[
        {"nome": "Ronaldo Gaúcho", "posicao": "Atacante"},
        {"nome": "Kaka", "posicao": "Meio-campo"}
    ]`

    const resultado = converterEAdicionarObjeto(listaJogadoresJSON, { nome: nome, posicao: posicao })

    // Convertendo objeto para JSON
    const exibirResultado = JSON.stringify(resultado, null, 2)

    // O "pre" preserva os espaços e quebras de linha
    mensagem.innerHTML = `<pre>${exibirResultado}</pre>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoJogador.style.display = 'inline-block'
}


// Reset
function novoJogador() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoJogador.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

