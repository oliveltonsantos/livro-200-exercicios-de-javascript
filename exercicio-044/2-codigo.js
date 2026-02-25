const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const listaNumeros = document.querySelector('.listaNumeros')
const resultado = document.querySelector('.resultado')

const matrizA = []
matrizA.length = 2

const matrizB = []
matrizB.length = 2

function adicionarNumero() {

    const numero = Number(inputNumero.value)

    let i = 0

    do {
            matrizA[i] = []
            // matrizA[i].length = 2

            for (let j = 0; j < 2; j++) {
                matrizA[i][j] = numero
            }
        i++
    } while (i < matrizA.length);

    console.log(matrizA)

}


