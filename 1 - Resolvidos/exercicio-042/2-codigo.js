const inputNumero = document.getElementById('numero')
const btnConversaoDecimal = document.querySelector('.btnConversaoDecimal')
const btnNovaConversao = document.querySelector('.btnNovaConversao')
const mensagem = document.querySelector('.mensagem')


function conversaoDecimal() {
    if (inputNumero.value.trim() === '') {
        alert('Digite um número binário.')
        inputNumero.focus()
        return
    }

    const numero = inputNumero.value

    if (isNaN(numero)) {
        alert('Digite apenas números.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }


    const arrayBinario = numero.split('')

    let totalAnterior = 0
    let novoTotal = 0

    for (let contador = 0; contador <= arrayBinario.length - 1; contador++) {
        novoTotal = (totalAnterior * 2) + Number(arrayBinario[contador])
        totalAnterior = novoTotal
    }


    mensagem.innerHTML = `<p>${arrayBinario.join('')} = ${novoTotal}</p>`


    btnConversaoDecimal.style.display = 'none'
    btnNovaConversao.style.display = 'inline-block'
}


function novaConversao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnConversaoDecimal.style.display = 'inline-block'
    btnNovaConversao.style.display = 'none'

    mensagem.innerHTML = ''
}


