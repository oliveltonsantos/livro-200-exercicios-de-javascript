const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnProcessarValores = document.querySelector('.btnProcessarValores')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função de alta ordem
function calcularMediana(lista) {

    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length - 1; j++) {

            if (lista[j] > lista[j + 1]) {
                let temporario = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temporario
            }
        }
    }

    if (lista.length % 2 !== 0) {
        const posicao = (lista.length + 1) / 2
        return lista[posicao]
    } else {
        const posicao1 = lista.length / 2
        const posicao2 = (lista.length / 2) + 1
        const media = (lista[posicao1] + lista[posicao2]) / 2
        return media
    }

}


function processarValores() {
    mensagem.innerHTML = `<p>Mediana: ${calcularMediana(listaNumeros)}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnProcessarValores.style.display = 'none'
    btnNovaLista.style.display = 'inline-block'
}


// Interação com usuário
function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


// Reset
function novaLista() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnProcessarValores.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}
