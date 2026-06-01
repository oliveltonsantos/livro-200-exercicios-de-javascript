const inputNumero = document.getElementById('numero')
const inputQuantidade = document.getElementById('quantidade')
const telaDeOpcao1 = document.querySelectorAll('.telaDeOpcao1')
const telaDeOpcao2 = document.querySelectorAll('.telaDeOpcao2')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaOriginal = []


// Função de alta ordem
function dividirEmSublistas(lista, quantidade) {

    const listaDeSublistas = []

    let sublistaAtual = []

    for (let i = 0; i < lista.length; i++) {

        sublistaAtual.push(lista[i])

        if (sublistaAtual.length === quantidade) {
            listaDeSublistas.push(sublistaAtual)

            sublistaAtual = []
        }
    }

    /* 
        Verifica se sobrou algum número dentro de "sublistaAtual"

        Exemplo:
        
        Se a lista original tem 7 números e quero 3 números em cada sublista, então sobraria um número na "sublistaAtual".
        
        Entretanto a "sublistaAtual" não satisfaz a condição "sublistaAtual.length === quantidade", logo a "sublistaAtual" não seria adicionada a "listaDeSublistas".

        A condição "sublistaAtual.length > 0" logo abaixo resolve este problema.
    
    */

    if (sublistaAtual.length > 0) {
        listaDeSublistas.push(sublistaAtual)
    }

    return listaDeSublistas
}


// Interação com usuário
function adicionarNumeros() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar na lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaOriginal.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaOriginal.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function proximaOpcao() {
    if (listaOriginal.length === 0) {
        alert('Adicione números na lista antes de ir para a próxima opção.')
        inputNumero.focus()
        return
    }

    telaDeOpcao1.forEach(elemento => elemento.style.display = 'none')
    telaDeOpcao2.forEach(elemento => elemento.style.display = 'inline-block')

    mensagem.innerHTML = ''

    inputQuantidade.value = ''
    inputQuantidade.focus()
}


function processarLista() {
    if (inputQuantidade.value === '') {
        alert('Digite a quantidade máxima de números em cada sublista.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    const exibirResultado = dividirEmSublistas(listaOriginal, quantidade)

    mensagem.innerHTML = exibirResultado
        .map(sublista => `<p>[${sublista.join(' - ')}]</p>`)
        .join('')

    telaDeOpcao2.forEach(elemento => elemento.style.display = 'none')
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    btnNovaLista.style.display = 'none'

    listaOriginal.length = 0

    telaDeOpcao1.forEach(elemento => elemento.style.display = 'inline-block')

    inputNumero.focus()

    mensagem.innerHTML = ''
}

