const inputPalavra = document.getElementById('palavra')
const inputQuantidade = document.getElementById('quantidade')
const telaOpcao1 = document.querySelectorAll('.telaOpcao1')
const telaOpcao2 = document.querySelectorAll('.telaOpcao2')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPalavras = []


// Função de alta ordem
function filtrarStringsMaiores(lista, quantidade) {

    const listaPalavrasMaiores = []

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].length > quantidade) {
            listaPalavrasMaiores.push(lista[i])
        }
    }

    return listaPalavrasMaiores
}


// Interação com usuário
function processarDados() {
    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('Quantidade mínima aceita é 1. Digite outro valor!')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    const exibirResultado = filtrarStringsMaiores(listaPalavras, quantidade)

    if (exibirResultado.length === 0) {
        mensagem.innerHTML = `<p>Não foi encontrada nenhuma palavra maior que a quantidade digitada.</p>`
    } else {
        mensagem.innerHTML = `<p>${exibirResultado.join(' > ')}</p>`
    }

    telaOpcao2.forEach(elemento => elemento.style.display = 'none')

    btnNovaLista.style.display = 'inline-block'
}


function adicionarPalavra() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para adicionar.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    listaPalavras.push(palavra)

    mensagem.innerHTML = `<p>Palavras adicionadas: ${listaPalavras.join(' > ')}</p>`

    inputPalavra.value = ''
    inputPalavra.focus()

    if (listaPalavras.length === 6) {
        alert('Lista de palavras completa!')

        mensagem.innerHTML = ''

        telaOpcao1.forEach(elemento => elemento.style.display = 'none')
        telaOpcao2.forEach(elemento => elemento.style.display = 'inline-block')

        inputQuantidade.value = ''
        inputQuantidade.focus()
    }
}


// Reset
function novaLista() {
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    listaPalavras.length = 0

    telaOpcao1.forEach(elemento => elemento.style.display = 'inline-block')

    inputPalavra.focus()
}

