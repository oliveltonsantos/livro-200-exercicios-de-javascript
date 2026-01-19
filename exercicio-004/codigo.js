/* Descrição do exercício:

Declare duas variáveis chamadas "nome" e "sobrenome", atribua o seu nome e sobrenome a elas. Concatene-as em uma terceira variável chamada "nomeCompleto" e imprima.

*/

const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const btnEscreverNome = document.querySelector('.btnEscreverNome')
const btnNovoNome = document.querySelector('.btnNovoNome')
const resposta = document.querySelector('.resposta')


function escreverNome() {
    if (inputNome.value.trim() === '') {
        alert('Insira seu primeiro nome.')
        inputNome.focus()
        return
    }

    if (inputSobrenome.value.trim() === '') {
        alert('Insira seu sobrenome.')
        inputSobrenome.focus()
        return
    }

    const nome = inputNome.value
    const sobrenome = inputSobrenome.value
    const nomeCompleto = nome + ' ' + sobrenome

    resposta.innerHTML = `<p>Nome completo: ${nomeCompleto}</p>`

    btnEscreverNome.style.display = 'none'
    btnNovoNome.style.display = 'inline-block'
}


function novoNome() {
    inputNome.value = ''
    inputSobrenome.value = ''
    inputNome.focus()

    btnEscreverNome.style.display = 'inline-block'
    btnNovoNome.style.display = 'none'

    resposta.innerHTML = ''
}

