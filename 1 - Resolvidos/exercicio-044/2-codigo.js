const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const listaNumeros = document.querySelector('.listaNumeros')
const mensagem = document.querySelector('.mensagem')


const matrizA = []
const matrizB = []
const matrizResultado = []

let linha = 0
let coluna = 0

const tamanho = 2

let fase = 'A' // controle de fase (deve ser global pois é estado do programa e não da função)
let nomeDaMatriz = 'A'
let matrizAtual = matrizA


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na matriz.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    // cria uma linha se ela ainda não existir  
    if (!matrizAtual[linha]) {
        matrizAtual[linha] = []
    }

    matrizAtual[linha][coluna] = numero

    coluna++

    if (coluna === tamanho) {
        coluna = 0
        linha++
    }


    inputNumero.value = ''
    inputNumero.focus()

    mensagem.innerHTML =
        `<p>Matriz ${nomeDaMatriz}:</p>` +
        matrizAtual
            .map(l => `[${l.join(' , ')}]`)
            .join('<br>')


    // Troca o preenchimento da matriz A pela B
    if (linha === tamanho && fase === 'A') {
        fase = 'B'
        matrizAtual = matrizB
        nomeDaMatriz = 'B'
        linha = 0
        coluna = 0
    } else if (linha === tamanho && fase === 'B') {

        let l = 0 // "l" é linha e "c" é coluna


        do {
            matrizResultado[l] = [] // cria uma linha na matrizResultado

            for (let c = 0; c < tamanho; c++) {
                matrizResultado[l][c] = matrizA[l][c] + matrizB[l][c]
            }

            l++
        } while (l < tamanho)


        mensagem.innerHTML =
            `<p>Matriz A + Matriz B é igual:</p>` +
            matrizResultado
                .map(l => `[${l.join(' , ')}]`)
                .join('<br>')


        inputNumero.disabled = true
        btnAdicionarNumero.style.display = 'none'
        btnNovaSoma.style.display = 'inline-block'
    }
}


function novaSoma() {
    matrizA.length = 0
    matrizB.length = 0
    matrizResultado.length = 0

    linha = 0
    coluna = 0

    fase = 'A'
    nomeDaMatriz = 'A'
    matrizAtual = matrizA

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    mensagem.innerHTML = ''
}