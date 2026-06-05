const inputNumero = document.getElementById('numero')
const elementosTela1 = document.querySelectorAll('.elementosTela1')
const elementosTela2 = document.querySelectorAll('.elementosTela2')
const mensagem = document.querySelector('.mensagem')


const lista = []


// Função de alta ordem
function elementoMaisRepetido(lista) {

    let frequenciaAtual = 0
    let maiorFrequencia = 0
    let numeroMaisRepetido = null

    for (let i = 0; i < lista.length; i++) {
        frequenciaAtual = 0 // cada número começa sua própria contagem

        for (let j = 0; j < lista.length; j++) {

            if (lista[i] === lista[j]) {
                frequenciaAtual += 1
            }
        }

        if (frequenciaAtual > maiorFrequencia) {
            maiorFrequencia = frequenciaAtual
            numeroMaisRepetido = lista[i]
        }
    }

    if (maiorFrequencia === 1) {
        return 'Não há nenhum número repetido na lista.'
    } else {
        return numeroMaisRepetido
    }
}


// Interação com usuário
function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    lista.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${lista.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function processarLista() {
    if (lista.length < 1) {
        alert('Adicione pelo menos um número à lista.')
        inputNumero.focus()
        return
    }

    mensagem.innerHTML = `<p>Número mais frequente: <strong>${elementoMaisRepetido(lista)}</strong></p>`

    elementosTela1.forEach(elemento => elemento.style.display = 'none')
    elementosTela2.forEach(elemento => elemento.style.display = 'inline-block')
}


// Reset
function novaVerificacao() {
    lista.length = 0

    elementosTela1.forEach(elemento => elemento.style.display = 'inline-block')
    elementosTela2.forEach(elemento => elemento.style.display = 'none')

    inputNumero.focus()

    mensagem.innerHTML = ''
}

