const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumero = []


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumero.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaNumero.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumero.length > 4) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Maior número = ${verificarMaiorNumero(listaNumero)}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function verificarMaiorNumero(lista) {
    let maiorNumero = lista[0]

    for (i = 0; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i]
        }
    }

    return maiorNumero
}


function novoNumero() {
    listaNumero.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}