const inputNumero = document.getElementById('numero')
const btnPreencherListas = document.querySelector('.btnPreencherListas')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')

// Listas
const listaA = []
const listaB = []


// Controle de fluxo 
let etapa = 'A'
let nomeDaLista = 'A'


// Interação com usuário
function preencherListas() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (etapa === 'A') {
        listaA.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaA.join(' , ')}</p>`

        inputNumero.value = ''
        inputNumero.focus()

        if (listaA.length === 5) {
            alert('Lista A completa. Preencha a lista B agora.')

            etapa = 'B'

            nomeDaLista = 'B'

            mensagem.innerHTML = ''
        }
    } else if (etapa === 'B') {
        listaB.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaB.join(' , ')}</p>`

        inputNumero.value = ''
        inputNumero.focus()

        if (listaB.length === 5) {
            alert('Lista B completa.')

            console.log(listaA)
            console.log(listaB)
        }
    }

}

// Reset


