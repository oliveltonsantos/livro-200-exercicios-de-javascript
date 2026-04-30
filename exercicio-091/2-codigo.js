const inputPalavra = document.getElementById('palavra')
const btnAdicionarPalavras = document.querySelector('.btnAdicionarPalavras')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPalavras = []


// Interação com usuário
function adicionarPalavras() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para adicionar.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    listaPalavras.push(palavra)

    inputPalavra.value = ''
    inputPalavra.focus()

    if (listaPalavras.length === 6) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Palavras em ordem decrescente: ${ordenarPalavras(listaPalavras)}</p>`
    }
}

// Reset


