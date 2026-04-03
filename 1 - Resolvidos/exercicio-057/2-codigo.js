const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length > 5) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Soma dos ímpares: ${somarImpares(listaNumeros)}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function somarImpares(lista) {

    let soma = 0

    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            soma += lista[i]
        }
    }

    return soma
}


function novoNumero() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}


