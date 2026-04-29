const inputPreco = document.getElementById('preco')
const btnAdicionarPrecos = document.querySelector('.btnAdicionarPrecos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaPrecos = []


// Função de alta ordem

function calcularPrecoTotal(lista) {

    const produtosComImposto = lista.map(preco => preco + (preco * 10 / 100))

    const soma = produtosComImposto.reduce((precoAcumulado, precoAtual) => {
        return precoAcumulado + precoAtual
    }, 0)

    return soma
}


// Interação com usuário

function adicionarPrecos() {
    if (inputPreco.value === '') {
        alert('Digite um preço para adicionar.')
        inputPreco.focus()
        return
    }

    const preco = Number(inputPreco.value)

    listaPrecos.push(preco)

    mensagem.innerHTML = `<p> Preços adicionados: ${listaPrecos.join(' > ')}</p>`

    inputPreco.value = ''
    inputPreco.focus()

    if (listaPrecos.length === 5) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Preço total: R$${calcularPrecoTotal(listaPrecos).toFixed(2)}</p>`

        inputPreco.disabled = true

        btnAdicionarPrecos.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


// Reset

function novaLista() {
    listaPrecos.length = 0

    inputPreco.disabled = false
    inputPreco.focus()

    btnAdicionarPrecos.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}

