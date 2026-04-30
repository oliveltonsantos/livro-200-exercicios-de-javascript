const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função alta ordem
function acharNumerosUnicos(lista) {
    const vistos = []
    const resultado = []

    for (let num of lista) {
        if (!vistos.includes(num)) {
            vistos.push(num)
            resultado.push(num)
        }
    }

    return resultado
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

    mensagem.innerHTML = `<p>Lista: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length === 6) {
        alert('Lista completa!')

        mensagem.innerHTML = `<p>Números únicos: ${acharNumerosUnicos(listaNumeros).join(' > ')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


// Reset
function novaLista() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}
