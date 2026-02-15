const inputNum = document.getElementById('numero')
const btnAnalisarNumero = document.querySelector('.btnAnalisarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


function analisarNumero() {
    if (inputNum.value === '') {
        alert('Digite um número para analisar.')
        inputNum.focus()
        return
    }

    const numero = Number(inputNum.value)

    let resposta = ''

    if (numero % 2 === 0) {
        resposta = 'par'
    } else {
        resposta = 'ímpar'
    }

    mensagem.innerHTML = `<p>${numero} é ${resposta}.</p>`

    btnAnalisarNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function novoNumero() {
    inputNum.value = ''
    inputNum.focus()

    btnAnalisarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}

