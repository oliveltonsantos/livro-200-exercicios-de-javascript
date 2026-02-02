const inputNumero = document.getElementById('numero')
const btnCalcularTabuada = document.querySelector('.btnCalcularTabuada')
const btnNovaTabuada = document.querySelector('.btnNovaTabuada')
const mensagem = document.querySelector('.mensagem')


function calcularTabuada() {
    if (inputNumero.value === '') {
        alert('Digite um número.')
        inputNumero.focus()
        return
    }

    const numeroDigitado = Number(inputNumero.value)

    let resultado = []

    for (let contador = 1; contador <= 10; contador++) {
        const numeroMultiplicado = numeroDigitado * contador
        resultado.push(`${numeroDigitado} x ${contador} = ${numeroMultiplicado}`)
    }

    mensagem.innerHTML = resultado
        .map(linha => `<p>${linha}</p>`)
        .join('')

    btnCalcularTabuada.style.display = 'none'
    btnNovaTabuada.style.display = 'inline-block'
}


function novaTabuada() {
    inputNumero.value = ''
    inputNumero.focus()

    btnCalcularTabuada.style.display = 'inline-block'
    btnNovaTabuada.style.display = 'none'

    mensagem.innerHTML = ''
}



