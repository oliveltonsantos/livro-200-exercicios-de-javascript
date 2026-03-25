const inputTexto = document.getElementById('texto')
const inputRepeticao = document.getElementById('repeticao')
const todosInputs = document.querySelectorAll('input')
const btnReceberTexto = document.querySelector('.btnReceberTexto')
const btnNovoTexto = document.querySelector('.btnNovoTexto')
const mensagem = document.querySelector('.mensagem')


function receberTexto() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha o campo vazio.')
        inputVazio.focus()
        return
    }

    const texto = inputTexto.value
    const repeticao = Number(inputRepeticao.value)

    if (repeticao < 1) {
        alert('O número de repetição mínimo aceito é 1.')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    mensagem.innerHTML = gerarTexto(texto, repeticao)

    todosInputs.forEach(input => {
        input.disabled = true
    })

    btnReceberTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function gerarTexto(textoPassado, repeticaoPassada) {

    let resultado = ''

    for (let i = 0; i < repeticaoPassada; i++) {
        resultado += `<p>${textoPassado}</p>`
    }

    return resultado
}


function novoTexto() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputTexto.focus()

    btnReceberTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    mensagem.innerHTML = ''
}


