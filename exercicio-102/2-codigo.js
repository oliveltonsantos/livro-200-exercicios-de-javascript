const inputPalavra = document.getElementById('palavra')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPalavras = []


// Interação com usuário
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
}


function processarListaPalavras() {
    if (listaPalavras.length === 0) {
        alert('Adicione palavras na lista antes de juntar as palavras.')
        inputPalavra.focus()
        return
    }

    



}




// Reset


