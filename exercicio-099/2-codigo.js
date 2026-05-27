const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnProcessarLista = document.querySelector('.btnProcessarLista')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const lista = []


// Função de alta ordem
function combinarNumeros(lista) {

    const listaDeCombinacoes = []

    for (let i = 0; i < lista.length; i++) {

        for (let j = i + 1; j < lista.length; j++) {
            listaDeCombinacoes.push([lista[i], lista[j]])

        }
    }

    return listaDeCombinacoes
}


// Interação com usuário
function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    lista.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${lista.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function processarLista() {
    if (lista.length < 2) {
        alert('Preencha a lista com números.')
        inputNumero.focus()
        return
    }

    const exibirResultado = combinarNumeros(lista)

    mensagem.innerHTML = `<p>${exibirResultado.join(' > ')}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnProcessarLista.style.display = 'none'
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    lista.length = 0

    inputNumero.disabled = false

    btnAdicionarNumero.style.display = 'inline-block'
    btnProcessarLista.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    inputNumero.focus()
}

