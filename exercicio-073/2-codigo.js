const inputValor = document.getElementById('valor')
const btnReceberValores = document.querySelector('.btnReceberValores')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const mensagem = document.querySelector('.mensagem')


// Função utilitária
function esperar(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo))
}


// Função alta ordem
async function processarCallbacks(num, tempo, callbacks) {

    let resultado = num

    for (let i = 0; i < callbacks.length; i++) {

        const callback = callbacks[i]

        resultado = callback(resultado)

        await esperar(tempo)
    }

    return resultado
}


// Callbacks
const executarCalculos = [
    (n) => n - 1,
    (n) => n / 2,
    (n) => n + 5
]


// Interação com usuário
async function receberValores() {
    if (inputValor.value === '') {
        alert('Preencha o campo vazio abaixo.')
        inputValor.focus()
        return
    }

    const valor = Number(inputValor.value)
    const tempo = 1000

    mensagem.innerHTML = '<p>Processando etapas...</p>'

    const exibirResultado = await processarCallbacks(valor, tempo, executarCalculos)

    mensagem.innerHTML = `<p>Resultado: ${exibirResultado}</p>`

    inputValor.disabled = true

    btnReceberValores.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


// Reset
function novoCalculo() {
    inputValor.disabled = false
    inputValor.value = ''
    inputValor.focus()

    btnReceberValores.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    mensagem.innerHTML = ''
}




