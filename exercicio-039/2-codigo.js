const inputNumero = document.getElementById('numero')
const btnCalcularFatorial = document.querySelector('.btnCalcularFatorial')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const mensagem = document.querySelector('.mensagem')


function calcularFatorial() {
    if (inputNumero.value === '') {
        alert('Digite um número para calcular o fatorial.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero <= 0) {
        alert('Digite um número maior que zero.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    if (!Number.isInteger(numero)) {
        alert('Não é possível calcular fatorial de números decimais, utilize apenas números inteiros (números sem ponto ou vírgula).')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let fatorial = 1

    for (let contador = 1; contador <= numero; contador++) {
        fatorial *= contador
    }

    mensagem.innerHTML = `<p>Fatorial de ${numero}! = ${fatorial}</p>`

    btnCalcularFatorial.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputNumero.value = ''
    inputNumero.focus()

    btnCalcularFatorial.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    mensagem.innerHTML = ''
}


