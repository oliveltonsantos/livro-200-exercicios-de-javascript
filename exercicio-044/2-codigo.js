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

    inputNumero.value = ''
    inputNumero.focus()

    mensagem.innerHTML =
        `<p>Matriz ${nomeDaMatriz}:</p>` + 
        matrizAtual
            .map(linha => `[${linha.join(' , ')}]`)
            .join('<br>')


    if (linha === tamanho && fase === 'A') {
        fase = 'B'
        matrizAtual = matrizB
        nomeDaMatriz = 'B'
        linha = 0
        coluna = 0
    } else if (linha === tamanho && fase === 'B') {
        
        let l = 0

        do {
            matrizResultado[l] = []

            for (let j = 0; j < tamanho; j++) {
                matrizResultado[l][j] = matrizA[l][j] + matrizB[l][j]
            }
            l++
        } while (l < tamanho)

        mensagem.innerHTML = `
            <p>${matrizResultado}</p>
        `
    }

    
}  