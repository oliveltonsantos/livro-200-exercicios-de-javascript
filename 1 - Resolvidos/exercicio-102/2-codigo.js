const inputPalavra = document.getElementById('palavra')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPalavras = []


// Função de alta ordem
function juntarPalavras(lista) {

    let palavrasComVirgula = ''

    for (let i = 0; i < lista.length; i++) {
        palavrasComVirgula += lista[i]

        // Adiciona a vírgula antes da última palavra
        if (i < lista.length - 1) {
            palavrasComVirgula += ', '
        }
    }

    return palavrasComVirgula
}


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

    mensagem.innerHTML = `<p>Palavras juntas: ${juntarPalavras(listaPalavras)}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    listaPalavras.length = 0

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaLista.style.display = 'none'

    inputPalavra.focus()

    mensagem.innerHTML = ''
}

