const inputAno = document.getElementById('ano')
const btnVerificarAno = document.querySelector('.btnVerificarAno')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const resposta = document.querySelector('.resposta')


function verificarAno() {
    if (inputAno.value === '') {
        alert('Digite um ano para verificar.')
        inputAno.focus()
        return
    }

    const ano = Number(inputAno.value)

    if (ano <= 0) {
        alert('Não existe ano menor ou igual a zero.')
        inputAno.value = ''
        inputAno.focus()
        return
    }

    let mensagem = ''

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        mensagem = 'Ano é bissexto.'
    } else {
        mensagem = 'Não é bissexto.'
    }

    resposta.innerHTML = `<p>${mensagem}<p>`

    btnVerificarAno.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputAno.value = ''
    inputAno.focus()

    btnVerificarAno.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}


