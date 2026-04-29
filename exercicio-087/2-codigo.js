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


// Função de alta ordem
function filtrarMultiplos5(listaA, listaB) {
    const resultado = [...listaA, ...listaB].filter(num => num % 5 === 0)

    return resultado
}


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
            alert('Lista A completa. Preencha a lista B.')

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

            const exibirResultado = filtrarMultiplos5(listaA, listaB)

            if (exibirResultado.length === 0) {
                mensagem.innerHTML = `<p>Nenhum múltiplo de 5 foi encontrado.</p>`
            } else {
                mensagem.innerHTML = `<p> Múltiplos de 5: ${exibirResultado.join(' , ')}</p>`
            }

            inputNumero.disabled = true

            btnPreencherListas.style.display = 'none'
            btnNovaLista.style.display = 'inline-block'
        }
    }
}


// Reset
function novaLista() {
    listaA.length = 0
    listaB.length = 0

    etapa = 'A'
    nomeDaLista = 'A'

    inputNumero.disabled = false
    inputNumero.focus()

    btnPreencherListas.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}

