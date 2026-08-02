const inputNum = document.getElementById('numero')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnReiniciar = document.querySelector('.btnReiniciar')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaA = []
const listaB = []


// Trocar de lista
let listaAtual = "A"
let nomeDaLista = "A"


// Função de alta ordem
const juntarListas = (listaA, listaB) => [...listaA, ...listaB]


// Interação com usuário
function adicionar() {
    if (inputNum.value === '') {
        alert('Digite um número para adicionar.')
        inputNum.focus()
        return
    }

    const numero = Number(inputNum.value)

    if (listaAtual === "A") {

        listaA.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaA.join(' > ')}</p>`

        if (listaA.length === 3) {

            alert('Lista A completa! Preencha a lista B agora.')

            listaAtual = "B"
            nomeDaLista = "B"

            mensagem.innerHTML = ''
        }
    } else if (listaAtual === "B") {

        listaB.push(numero)

        mensagem.innerHTML = `<p>Lista ${nomeDaLista}: ${listaB.join(' > ')}</p>`

        if (listaB.length === 3) {

            alert('Lista B completa!')

            const resultado = juntarListas(listaA, listaB)

            mensagem.innerHTML = `<p>Lista A + B = ${resultado.join(' > ')}</p>`

            esconderElementos.forEach(elemento => elemento.style.display = 'none')
            btnReiniciar.style.display = 'inline-block'
        }
    }

    inputNum.value = ''
    inputNum.focus()

}


// Reset
function reiniciar() {
    // Reset das listas
    listaA.length = 0
    listaB.length = 0

    // Reset da troca de listas
    listaAtual = "A"
    nomeDaLista = "A"

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnReiniciar.style.display = 'none'

    mensagem.innerHTML = ''

    inputNum.value = ''
    inputNum.focus()
}

