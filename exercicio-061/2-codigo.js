const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar à lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length > 4) {
        alert('Lista completa.')

        const visualizacaoDoResultado = []

        for (let i = 0; i < listaNumeros.length; i++) {
            visualizacaoDoResultado.push(`<p>√${listaNumeros[i]} = ${calcularRaizQuadrada(listaNumeros)[i]}</p>`)
        }

        mensagem.innerHTML = `<p>${visualizacaoDoResultado.join('')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function calcularRaizQuadrada(lista) {

    const listaRaizQuadrada = []

    for (i = 0; i <= lista.length; i++) {

        for (let j = 0; j * j <= lista[i]; j++) {
            if (j * j === lista[i]) {
                listaRaizQuadrada.push(j)
            }
        }
    }

    return listaRaizQuadrada
}


function novoNumero() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}