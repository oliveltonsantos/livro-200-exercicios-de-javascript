/* Descrição do exercício:

Declare duas variáveis chamadas "idade" e "peso", atribua valores a elas e imprima os valores na console.

*/

const inputIdade = document.getElementById('idade')
const inputPeso = document.getElementById('peso')
const mensagem = document.querySelector('.mensagem')
const btnMensagem = document.querySelector('.btnMensagem')
const btnNovoValor = document.querySelector('.btnNovoValor')


function escreverMensagem() {
    if (inputIdade.value === '') {
        alert('Digite sua idade.')
        inputIdade.focus()
        return
    }

    if (inputPeso.value === '') {
        alert('Digite seu peso.')
        inputPeso.focus()
        return
    }

    const idade = Number(inputIdade.value)
    const peso = Number(inputPeso.value)

    if (idade <= 0 || peso <= 0) {
        alert('Valores menores ou iguais a zero não são válidos.')
        return
    }

    mensagem.innerHTML = `<p>Sua idade é ${idade} ano(s) e seu peso é ${peso}kg.<p>`

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


