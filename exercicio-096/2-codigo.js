const inputNumero = document.getElementById('numero')
const elementosListaA = document.querySelectorAll('.elementosListaA')
const elementosListaB = document.querySelectorAll('.elementosListaB')
const elementosRespostaFinal = document.querySelectorAll('.elementosRespostaFinal')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaA = []
const listaB = []


// Controle de fluxo
let preenchendoLista = 'A'
let nomeDaLista = 'A'


// Função de alta ordem
function verificarSubarray(listaA, listaB) {

    for (let i = 0; i < listaA.length; i++) {
        let tentativaAtual = true

        for (let j = 0; j < listaB.length; j++) {

            if (listaA[i + j] !== listaB[j]) {
                tentativaAtual = false
                break
            }
        }

        if (tentativaAtual) {
            return true
        }
    }

    return false
}


// Interação com usuário
function receberDados() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    let numero = Number(inputNumero.value)

    if (preenchendoLista === 'A') {
        adicionarNumeros(numero, listaA)
    } else if (preenchendoLista === 'B') {
        adicionarNumeros(numero, listaB)
    }
}


function adicionarNumeros(num, listaAtual) {

    listaAtual.push(num)

    mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaAtual.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function proximaLista() {
    preenchendoLista = 'B'
    nomeDaLista = 'B'

    elementosListaA.forEach(elemento => elemento.style.display = 'none')
    elementosListaB.forEach(elemento => elemento.style.display = 'inline-block')

    mensagem.innerHTML = ''

    inputNumero.focus()
}


function processarListas() {

    let exibirResposta = verificarSubarray(listaA, listaB)

    if (exibirResposta === true) {
        exibirResposta = 'O segundo array é um subarray do primeiro'
    } else {
        exibirResposta = 'O segundo array NÃO é um subarray do primeiro'
    }

    mensagem.innerHTML = `<p>${exibirResposta}</p>`

    elementosListaB.forEach(elemento => elemento.style.display = 'none')
    elementosRespostaFinal.forEach(elemento => elemento.style.display = 'none')

    btnNovaAnalise.style.display = 'inline-block'
}


// Reset
function novaAnalise() {
    listaA.length = 0
    listaB.length = 0

    preenchendoLista = 'A'
    nomeDaLista = 'A'

    elementosListaA.forEach(elemento => elemento.style.display = 'inline-block')
    elementosRespostaFinal.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaAnalise.style.display = 'none'

    inputNumero.focus()
    mensagem.innerHTML = ''
}

