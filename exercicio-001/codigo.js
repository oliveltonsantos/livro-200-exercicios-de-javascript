/* Descrição do exercício:

Declare duas variáveis chamadas "idade" e "peso", atribua valores a elas e imprima os valores na console.

*/

const inputIdade = document.getElementById('idade')
const inputPeso = document.getElementById('peso')
const mensagem = document.querySelector('.mensagem')
const btnMensagem = document.querySelector('.btnMensagem')
const btnNovoValor = document.querySelector('.btnNovoValor')


function escreverMensagem() {
    const idade = inputIdade.value
    const peso = inputPeso.value

    mensagem.innerHTML = `<p>Sua idade é ${idade} anos e seu peso é ${peso}kg.<p>`

    btnMensagem.style.display = 'none'
    btnNovoValor.style.display = 'inline-block'
}


function novoValor() {
    inputIdade.value = ''
    inputPeso.value = ''
    inputIdade.focus()

    btnMensagem.style.display = 'inline-block'
    btnNovoValor.style.display = 'none'

    mensagem.innerHTML = ''
}


