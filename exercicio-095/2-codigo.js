const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaA = []
const listaB = []


// Trocar de lista
let listaAtual = 'A'
let nomeDaLista = 'A'


// Função de alta ordem
function concatenarListas(listaA, listaB) {

    const listaC = []

    for (let i = 0; i < listaA.length; i++) {
        listaC.push(listaA[i])

        listaC.push(listaB[i])
    }

    return listaC


}




// Interação com usuário
function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (listaAtual === 'A') {
        listaA.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaA.join(' > ')}</p>`

        if (listaA.length === 5) {
            alert('Lista A completa! Preencha a lista B!')

            listaAtual = 'B'
            nomeDaLista = 'B'

            mensagem.innerHTML = '' 
        }
    } else if (listaAtual === 'B') {
        listaB.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaB.join(' > ')}</p>`

        if (listaB.length === 5) {
            alert('Lista B completa!')

            mensagem.innerHTML = `
                <p>Lista A + B </p> 
                <p>=</p>
                <p>Lista C: ${concatenarListas(listaA, listaB).join(' > ')}</p>
            `
        }
    }

    inputNumero.value = ''
    inputNumero.focus()
}

// Reset


