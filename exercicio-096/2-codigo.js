const inputNumero = document.getElementById('numero')
const elementosListaA = document.querySelectorAll('.elementosListaA')
const elementosListaB = document.querySelectorAll('.elementosListaB')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaA = []
const listaB = []


// Controle de fluxo
let preenchendoLista = 'A'
let nomeDaLista = 'A'



// Função de alta ordem
function verificarSubarray() {
    
    for (let i = 0; i < listaA.length; i++) {
        



    }
}



// Preencher listas
function adicionarNumeros(num, listaAtual) {

    listaAtual.push(num)

    mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaAtual.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
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


function proximaLista() {
    preenchendoLista = 'B'
    nomeDaLista = 'B'

    elementosListaA.forEach(elemento => elemento.style.display = 'none');
    elementosListaB.forEach(elemento => elemento.style.display = 'inline-block')

    mensagem.innerHTML = ''

    inputNumero.focus()
}


function processarListas() {
    mensagem.innerHTML = `<p>${verificarSubarray(listaA, listaB)}</p>`
}



// Reset


