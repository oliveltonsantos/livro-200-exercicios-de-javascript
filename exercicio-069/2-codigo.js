const inputTexto = document.getElementById('texto')
const inputRepeticao = document.getElementById('repeticao')
const todosInputs = document.querySelectorAll('input')
const btnReceberTexto = document.querySelector('.btnReceberTexto')
const btnNovoTexto = document.querySelector('.btnNovoTexto')
const resultado = document.querySelector('.resultado')


// Função alta ordem
function repetirComCallback(texto, repeticao, callback) {

    let textoRepetido = ''

    for (let i = 0; i < repeticao; i++) {
        textoRepetido += callback(texto)
    }

    return textoRepetido
}


// Callback
function textoDecorado(texto) {
    return `<p>💪${texto}🤳</p>`
}


function receberTextoERepeticao() {
    let inputVazio = null

    for (const input of todosInputs) {
        if (input.value.trim() === '') {
            inputVazio = input
            break
        }
    }

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const texto = inputTexto.value
    const repeticao = Number(inputRepeticao.value)

    if (repeticao <= 0) {
        alert('No campo "Número de repetições" digite um valor maior que zero.')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    resultado.innerHTML = repetirComCallback(texto, repeticao, textoDecorado)

    todosInputs.forEach(input => {
        input.disabled = true
    })

    btnReceberTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function novoTexto() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputTexto.focus()

    btnReceberTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    resultado.innerHTML = ''
}