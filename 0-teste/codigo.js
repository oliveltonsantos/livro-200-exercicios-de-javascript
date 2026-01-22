
/*

const inputNumA = document.getElementById('numeroA')
const inputNumB = document.getElementById('numeroB')
const inputNumC = document.getElementById('numeroC')
const btnComparar = document.querySelector('.btnComparar')
const btnNovaComparacao = document.querySelector('.btnNovaComparacao')
const resposta = document.querySelector('.resposta')


function compararValores() {
    if (inputNumA.value === '' || inputNumB.value === '' || inputNumC.value === '') {
        alert('Digite valores em todos os campos.')
        return
    }

    const numeroA = Number(inputNumA.value)
    const numeroB = Number(inputNumB.value)
    const numeroC = Number(inputNumC.value)

    let mensagem = ''

    if (numeroA === numeroB && numeroB === numeroC) {
        mensagem = 'Todos os números são iguais.'
    }

    if (numeroA > numeroB && numeroA > numeroC) {
        mensagem += `${numeroA} é o maior número.`
    } else if (numeroA < numeroB && numeroA < numeroC) {
        mensagem += `${numeroA} é o menor número`
    } else if (numeroA === numeroB) {
        mensagem += `Número A: ${numeroA} é igual a Número B: ${numeroB}`
    } else if (numeroA === numeroC) {
        mensagem += `Número A: ${numeroA} é igual a Número C: ${numeroC}`
    }

    if (numeroB > numeroA && numeroB > numeroC) {
        mensagem += `${numeroB} é o maior número.`
    } else if (numeroB < numeroA && numeroB < numeroC) {
        mensagem += `${numeroB} é o menor número.`
    } else if (numeroB === numeroC) {
        mensagem += `Número B: ${numeroB} é igual a Número C: ${numeroC}`
    }

    if (numeroC > numeroA && numeroC > numeroB) {
        mensagem += `${numeroC} é o maior número.`
    } else if (numeroC < numeroA && numeroC < numeroB) {
        mensagem += `${numeroC} é o maior número.`
    } else if (numeroC === numeroB) {
        mensagem += `Número C: ${numeroC} é igual Número B: ${numeroB}`
    }

    resposta.innerHTML = mensagem

}

*/

let  num = 10 ; num++; console .log( "Número incrementado: " , num);
