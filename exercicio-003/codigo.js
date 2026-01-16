/* Descrição do exercício:

Declare uma variável chamada "númeroMáximo", atribua a ela o valor máximo que um número pode ter em JavaScript e imprima o valor na console.

*/

const inputValor = document.getElementById('valor')
const btnAnalisar = document.querySelector('.btnAnalisar')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const resposta = document.querySelector('.resposta')


function analisarValor() {
    const valorDigitado = Number(inputValor.value)
    const numeroMaximo = Number.MAX_VALUE

    if (valorDigitado === numeroMaximo) {
        resposta.innerHTML = `<p>Resposta correta. O valor máximo é igual a ${numeroMaximo}</p>`
    } else {
        resposta.innerHTML = '<p>Resposta incorreta. Tente novamente.</p>'
    }

    btnAnalisar.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    inputValor.value = ''
    inputValor.focus()

    btnAnalisar.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}




