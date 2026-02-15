const inputIdade = document.getElementById('idade')
const btnVerificarIdade = document.querySelector('.btnVerificarIdade')
const btnNovaIdade = document.querySelector('.btnNovaIdade')
const mensagem = document.querySelector('.mensagem')


function verificarIdade() {
    if (inputIdade.value === '') {
        alert('Digite a sua idade.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    if (idade <= 0 || idade > 500) {
        alert('Digite uma idade mínima de 1 ou idade máxima de 500 anos.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    let resposta = ''

    if (idade >= 18) {
        resposta = 'Pode dirigir.'
    } else {
        resposta = 'Não pode dirigir.'
    }

    mensagem.innerHTML = `<p>${resposta}</p>`

    btnVerificarIdade.style.display = 'none'
    btnNovaIdade.style.display = 'inline-block'
}


function novaIdade() {
    inputIdade.value = ''
    inputIdade.focus()

    btnVerificarIdade.style.display = 'inline-block'
    btnNovaIdade.style.display = 'none'

    mensagem.innerHTML = ''
}
