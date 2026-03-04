const inputTexto = document.getElementById('texto')
const btnReceberTexto = document.querySelector('.btnReceberTexto')
const btnNovoTexto = document.querySelector('.btnNovoTexto')
const mensagem = document.querySelector('.mensagem')


function receberTexto() {
    if (inputTexto.value.trim() === '') {
        alert('Digite uma palavra ou frase.')
        inputTexto.focus()
        return
    }

    if (inputTexto.value
        .trim()
        .length < 2) {
        alert('Digite uma palavra ou frase com no mínimo duas letras.')
        inputTexto.value = ''
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    mensagem.innerHTML = `<p>${texto} = ${inverterTexto(texto)}</p>`

    btnReceberTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function inverterTexto(txt) {

    let palavraInvertida = ''

    for (let i = txt.length - 1; i >= 0; i--) {
        palavraInvertida += txt[i]
    }

    return palavraInvertida
}


function novoTexto() {
    inputTexto.value = ''
    inputTexto.focus()

    btnReceberTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    mensagem.innerHTML = ''
}


