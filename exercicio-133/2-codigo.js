const inputNumero = document.getElementById('numero')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


// Lista de valores
const lista = []


// Desestruturação de Array com Valores Padrão
function extrairValores(lista) {
    const [valor1 = null, valor2 = null, valor3 = null] = lista

    return [valor1, valor2, valor3]
}


// Interação com usuário
function adicionar() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    lista.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${lista.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function processarDados() {
    if (lista.length === 0) {
        alert('Adicione pelo menos um valor na lista.')
        inputNumero.focus()
        return
    }

    const resultado = extrairValores(lista)

    const resultadoFormatado = resultado.map(valor => {
        if (valor === null) {
            return 'NULL'
        } else {
            return valor
        }
    })

    mensagem.innerHTML = `<p>3 primeiros valores extraídos: ${resultadoFormatado.join(' > ')}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    lista.length = 0

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    inputNumero.focus()
}


