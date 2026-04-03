const inputTexto = document.getElementById('texto')
const btnReceberTexto = document.querySelector('.btnReceberTexto')
const btnNovoTexto = document.querySelector('.btnNovoTexto')
const resultado = document.querySelector('.resultado')


// Função alta ordem
function transformarComCallback(texto, arrayDeCallbacks) {
    const textoTransformado = []

    arrayDeCallbacks.forEach(formatador => {
        textoTransformado.push(formatador(texto))
    })

    return textoTransformado.join('<br>')
}


// Array de callbacks
const formatacaoDeTexto = [
    (texto) => `Itálico: <i>${texto}</i>`,
    (texto) => `Negrito: <strong>${texto}</strong>`,
    (texto) => `Minúsculo: ${texto.toLowerCase()}`,
    (texto) => `Maiúsculo: ${texto.toUpperCase()}`,
]


function receberTexto() {
    if (inputTexto.value.trim() === '') {
        alert('Digite um texto para transformar.')
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    resultado.innerHTML = `<p>${transformarComCallback(texto, formatacaoDeTexto)}</p>`

    inputTexto.disabled = true

    btnReceberTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function novoTexto() {
    inputTexto.disabled = false
    inputTexto.value = ''
    inputTexto.focus()

    btnReceberTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    resultado.innerHTML = ''
}