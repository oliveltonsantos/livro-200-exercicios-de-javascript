const inputPalavra = document.getElementById('palavra')
const elementosTela1 = document.querySelectorAll('.elementosTela1')
const elementosTela2 = document.querySelectorAll('.elementosTela2')
const mensagem = document.querySelector('.mensagem')

// Listas
const listaStrings = []
const listaPalavrasProibidas = []

// Fluxo de controle
let listaPreenchida = 'Strings'
let nomeDaLista = 'Strings'



// Função de alta ordem
function removerPalavrasProibidas(listaStrings, listaPalavrasProibidas) {


    
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
        alert('Adicione palavras na lista antes de preencher a próxima.')
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

    removerPalavrasProibidas(listaStrings, listaPalavrasProibidas)


}

// Reset


