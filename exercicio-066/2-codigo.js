const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função alta ordem
function acharNegativosComCallback(lista, callback) {

    const listaNegativos = []

    for (let i = 0; i < lista.length; i++) {

        const valor = callback(lista[i])

        if (valor === true) {
            listaNegativos.push(lista[i])
        }
    }

    return listaNegativos
}


// Callback
function filtrarNegativos(numeroDaLista) {
    if (numeroDaLista < 0) {
        return true
    }

    return false
}


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

        mensagem.innerHTML = `<p>Números negativos: ${acharNegativosComCallback(listaNumeros, filtrarNegativos).join(' > ')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function novoNumero() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}


