const inputNumero = document.getElementById('numero')
const btnReceberDados = document.querySelector('.btnReceberDados')
const btnNovoValor = document.querySelector('.btnNovoValor')
const mensagem = document.querySelector('.mensagem')


// Função alta ordem
function processarCallback(numero, callbacks) {
    const resultado = callbacks.map(callback => callback(numero))

    return resultado.reverse()
}


// Callback
const operacoes = [
    (num) => num * 2,
    (num) => num / 3,
    (num) => num - 1
]


// Interação com usuário
function receberDados() {
    if (inputNumero.value === '') {
        alert('Digite um número para calcular.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    const exibirResultado = processarCallback(numero, operacoes)

    const interfaceUsuario = exibirResultado
        .map(valor => valor.toFixed(2))
        .join('<p>')

    mensagem.innerHTML = `<p>${interfaceUsuario}</p>`

    inputNumero.disabled = true

    btnReceberDados.style.display = 'none'
    btnNovoValor.style.display = 'inline-block'
}


// Reset 
function novoValor() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnReceberDados.style.display = 'inline-block'
    btnNovoValor.style.display = 'none'

    mensagem.innerHTML = ''
}

