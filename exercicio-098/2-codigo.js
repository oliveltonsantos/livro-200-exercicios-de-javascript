const inputPalavra = document.getElementById('palavra')
const elementosTela1 = document.querySelectorAll('.elementosTela1')
const elementosTela2 = document.querySelectorAll('.elementosTela2')
const elementosTela3 = document.querySelectorAll('.elementosTela3')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaStrings = []
const listaPalavrasProibidas = []


// Fluxo de controle
let listaPreenchida = 'Strings'
let nomeDaLista = 'Strings'


// Função de alta ordem
function removerPalavrasProibidas(listaStrings, listaPalavrasProibidas) {

    const listaSemPalavrasProibidas = []

    for (let i = 0; i < listaStrings.length; i++) {

        let palavraProibida = false

        for (let j = 0; j < listaPalavrasProibidas.length; j++) {

            if (listaStrings[i] === listaPalavrasProibidas[j]) {
                palavraProibida = true
                break
            }
        }

        if (palavraProibida === false) {
            listaSemPalavrasProibidas.push(listaStrings[i])
        }
    }

    if (listaSemPalavrasProibidas.length === 0) {
        return 'Todas as palavras da lista principal são proibidas.'
    } else {
        return listaSemPalavrasProibidas
    }
}


// Interação com usuário
function receberDados() {
    if (inputPalavra.value === '') {
        alert('Digite uma palavra para adicionar.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    if (listaPreenchida === 'Strings') {
        adicionarPalavra(listaStrings, palavra)
    } else if (listaPreenchida === 'Proibidas') {
        adicionarPalavra(listaPalavrasProibidas, palavra)
    }
}


function adicionarPalavra(listaAtual, palavra) {
    listaAtual.push(palavra)

    mensagem.innerHTML = `<p><strong>${nomeDaLista}</strong>: ${listaAtual.join(' > ')}</p>`

    inputPalavra.value = ''
    inputPalavra.focus()
}


function proximaLista() {

    if (listaStrings.length < 1) {
        alert('Adicione palavras na lista atual antes de preencher a próxima.')
        inputPalavra.focus()
        return
    }

    listaPreenchida = 'Proibidas'
    nomeDaLista = 'Palavras proibidas'

    elementosTela1.forEach(elemento => elemento.style.display = 'none')
    elementosTela2.forEach(elemento => elemento.style.display = 'inline-block')

    mensagem.innerHTML = ''

    inputPalavra.focus()
}


function processarListas() {

    if (listaPalavrasProibidas.length < 1) {
        alert('Adicione palavras proibidas na lista antes de remover.')
        inputPalavra.focus()
        return
    }

    const exibirResultado = removerPalavrasProibidas(listaStrings, listaPalavrasProibidas)

    mensagem.innerHTML = `<p>Palavras permitidas: ${exibirResultado.join(' > ')}</p>`

    elementosTela2.forEach(elemento => elemento.style.display = 'none')
    elementosTela3.forEach(elemento => elemento.style.display = 'none')

    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    listaStrings.length = 0
    listaPalavrasProibidas.length = 0

    listaPreenchida = 'Strings'
    nomeDaLista = 'Strings'

    elementosTela1.forEach(elemento => elemento.style.display = 'inline-block')
    elementosTela3.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    inputPalavra.focus()
}

