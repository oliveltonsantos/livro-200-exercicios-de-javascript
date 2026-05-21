const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnProcessarValores = document.querySelector('.btnProcessarValores')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função de alta ordem
function calcularMediana(lista) {

    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length - 1; j++) {

            if (lista[j] > lista[j + 1]) {
                let temporario = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temporario
            }
        }
    }

    const meio = Math.floor(lista.length / 2)

    // se for par
    if (lista.length % 2 === 0) {
        return (lista[meio - 1] + lista[meio]) / 2
    }

    // se for ímpar
    return lista[meio]
}


// Interação com usuário
function processarValores() {
    mensagem.innerHTML = `<p>Mediana: ${calcularMediana(listaNumeros)}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnProcessarValores.style.display = 'none'
    btnNovaLista.style.display = 'inline-block'
}


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


// Reset
function novaLista() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnProcessarValores.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}
