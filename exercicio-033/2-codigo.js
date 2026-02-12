const inputTermo = document.getElementById('termo')
const btnGerarFibonacci = document.querySelector('.btnGerarFibonacci')
const btnNovaFibonacci = document.querySelector('.btnNovaFibonacci')
const mensagem = document.querySelector('.mensagem')


function gerarFibonacci() {
    if (inputTermo.value === '') {
        alert('Digite quantos termos deseja.')
        inputTermo.focus()
        return
    }

    const quantidadeTermos = Number(inputTermo.value)

    if (quantidadeTermos <= 0) {
        alert('A quantidade mínima de termos é 1.')
        inputTermo.value = ''
        inputTermo.focus()
        return
    }

    if (!Number.isInteger(quantidadeTermos)) {
        alert('Digite apenas números inteiros.')
        inputTermo.value = ''
        inputTermo.focus()
        return
    }


    let termo1 = 1
    let termo2 = 1
    let resultado = ''


    if (quantidadeTermos === 1) {
        resultado = `${termo1}`
    } else {
        resultado = `${termo1} > ${termo2}`
    }


    const sequenciaFibonacci = [termo1, termo2]

    for (let i = 3; i <= quantidadeTermos; i++) {
        let novoTermo = termo1 + termo2
        termo1 = termo2
        termo2 = novoTermo
        sequenciaFibonacci.push(novoTermo)
    }

    if (quantidadeTermos === 1 || quantidadeTermos === 2) {
        mensagem.innerHTML = `<p>Sequência de Fibonacci: ${resultado}</p>`
    } else {
        mensagem.innerHTML = `<p>Sequência de Fibonacci: ${sequenciaFibonacci.join(' > ')}</p>`
    }


    btnGerarFibonacci.style.display = 'none'
    btnNovaFibonacci.style.display = 'inline-block'
}


function novaFibonacci() {
    inputTermo.value = ''
    inputTermo.focus()

    btnGerarFibonacci.style.display = 'inline-block'
    btnNovaFibonacci.style.display = 'none'

    mensagem.innerHTML = ''
}

