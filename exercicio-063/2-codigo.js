const inputNumero = document.getElementById('numero')
const btnReceberNumero = document.querySelector('.btnReceberNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


function receberNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número primeiro.')
        inputNumero.focus()
        return
    }

    const numeroLimite = Number(inputNumero.value)

    mensagem.innerHTML = `<p>Números primos: ${gerarPrimos(numeroLimite).join(' > ')}</p>`

    inputNumero.disabled = true

    btnReceberNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function gerarPrimos(limite) {

    const listaDosPrimos = []

    for (let numero = 2; numero <= limite; numero++) {

        let numeroEPrimo = true

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                numeroEPrimo = false
                break
            }
        }

        if (numeroEPrimo) {
            listaDosPrimos.push(numero)
        }
    }

    return listaDosPrimos
}


function novoNumero() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}