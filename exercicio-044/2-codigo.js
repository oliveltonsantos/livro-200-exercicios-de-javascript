const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const listaNumeros = document.querySelector('.listaNumeros')
const resultado = document.querySelector('.resultado')

const matrizA = []
const matrizB = []

let linha = 0
let coluna = 0
const tamanho = 2

let fase = 'A'
let matrizAtual = matrizA

function adicionarNumero() {

    const numero = Number(inputNumero.value)

    if (!matrizAtual[linha]) {
        matrizAtual[linha] = []
    }

    matrizAtual[linha][coluna] = numero

    coluna++

    if (coluna === tamanho) {
        coluna = 0
        linha++

    }

    if (linha === tamanho && fase === 'A') {
        resultado.innerHTML = `${matrizAtual}`
    }

}


