const inputNumero = document.getElementById('numero')
const elementosInterface = document.querySelectorAll('.elementosInterface')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Funções de alta ordem
function somarNumerosUnicos(listaNumerosUnicos) {

    let soma = 0

    for (let i = 0; i < listaNumerosUnicos.length; i++) {
        soma += listaNumerosUnicos[i]
    }

    return soma
}


function filtrarNumerosUnicos(lista) {

    const listaNumerosUnicos = []

    let encontrou = false

    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length; j++) {
            if (lista[i] === listaNumerosUnicos[j]) {
                encontrou = true
            }
        }

        if (!encontrou) {
            listaNumerosUnicos.push(lista[i])
        }
    }

    return somarNumerosUnicos(listaNumerosUnicos)
}


// Interação com usuário
function adicionarNumeros() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function processarLista() {
    if (listaNumeros.length < 1) {
        alert('Adicione números na lista antes de somar.')
        inputNumero.focus()
        return
    }

    const exibirResultado = filtrarNumerosUnicos(listaNumeros)

    mensagem.innerHTML = `<p>Soma dos valores únicos: ${exibirResultado}</p>`

    elementosInterface.forEach(elemento => elemento.style.display = 'none')
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    listaNumeros.length = 0

    elementosInterface.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaLista.style.display = 'none'

    inputNumero.focus()

    mensagem.innerHTML = ''
}

