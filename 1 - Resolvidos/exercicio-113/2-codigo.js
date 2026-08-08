const inputItem = document.getElementById('item')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaDeCompras = []


// Função de alta ordem
function numerarListaDeCompras(lista) {

    const listaNumerada = []

    for (let i = 0; i < lista.length; i++) {
        const itemNumerado = `${i + 1}. ${lista[i]}`

        listaNumerada.push(itemNumerado)
    }

    return listaNumerada
}


// Interação com usuário
function adicionarItens() {
    if (inputItem.value.trim() === '') {
        alert('Digite um item para adicionar.')
        inputItem.focus()
        return
    }

    const item = inputItem.value

    listaDeCompras.push(item)

    mensagem.innerHTML = `<p>Itens adicionados: ${listaDeCompras.join(' > ')}</p>`

    inputItem.value = ''
    inputItem.focus()
}


function processarDados() {
    if (listaDeCompras.length === 0) {
        alert('Adicione itens à lista antes de numerar.')
        inputItem.focus()
        return
    }

    const resultado = numerarListaDeCompras(listaDeCompras)

    mensagem.innerHTML = `<p>${resultado.join('<br>')}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    listaDeCompras.length = 0

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    inputItem.focus()
}

