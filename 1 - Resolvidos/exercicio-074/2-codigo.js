const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função alta ordem
function processarCallback(lista, callback) {
    return lista.map(callback)
}


// Callback
function elevarAoQuadrado(valor) {
    return valor ** 2
}


// Interação com usuário
function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)
    inputNumero.value = ''
    inputNumero.focus()

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    if (listaNumeros.length > 4) {
        alert('Lista completa.')

        const exibirResultado = processarCallback(listaNumeros, elevarAoQuadrado)

        mensagem.innerHTML = `
        <p>Lista adicionada: ${listaNumeros.join(' > ')}</p>
        <p>Resultados: ${exibirResultado.join(' > ')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


// Reset
function novaLista() {
    listaNumeros.length = ''

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}