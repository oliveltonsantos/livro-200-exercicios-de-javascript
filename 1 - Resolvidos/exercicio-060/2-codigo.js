const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length > 4) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Números ao quadrado: ${numerosAoQuadrado(listaNumeros).join(' > ')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function numerosAoQuadrado(lista) {

    const listaAoQuadrado = []

    for (i = 0; i < lista.length; i++) {
        listaAoQuadrado.push(lista[i] ** 2)
    }

    return listaAoQuadrado
}


function novoNumero() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}