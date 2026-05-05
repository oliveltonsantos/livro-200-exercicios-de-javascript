const inputPalavra = document.getElementById('palavra')
const btnAdicionarPalavras = document.querySelector('.btnAdicionarPalavras')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPalavras = []


// Função de alta ordem
function ordenarPalavras(lista) {

    // Função chamada "Bubble Sort"

    // "i" repete o processo até ordenar
    for (let i = 0; i < lista.length; i++) {

        // "j < length - 1" evita acessar posição inexistente pois usa "j + 1"
        for (let j = 0; j < lista.length - 1; j++) {

            if (lista[j].length < lista[j + 1].length) {
                let temporario = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temporario
            }
        }
    }

    return lista
}


// Interação com usuário
function adicionarPalavras() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para adicionar.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    listaPalavras.push(palavra)

    mensagem.innerHTML = `<p>Palavra adicionada: ${listaPalavras.join(' , ')}</p>`

    inputPalavra.value = ''
    inputPalavra.focus()

    if (listaPalavras.length === 5) {
        alert('Lista completa.')

        mensagem.innerHTML = `
            <p>Palavras em ordem decrescente:</p>
            <p>${ordenarPalavras(listaPalavras).join(' > ')}</p>
        `

        inputPalavra.disabled = true

        btnAdicionarPalavras.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


// Reset
function novaLista() {
    listaPalavras.length = 0

    inputPalavra.disabled = false
    inputPalavra.value = ''
    inputPalavra.focus()

    btnAdicionarPalavras.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}

