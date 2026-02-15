const inputIdade = document.getElementById('idade')
const btnPrecisoVotar = document.querySelector('.btnPrecisoVotar')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const resposta = document.querySelector('.resposta')


function precisoVotar() {
    if (inputIdade.value === '') {
        alert('Digite a sua idade.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('Não existe idade menor ou igual a zero. Digite outro valor.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    let mensagem = ''

    if (idade < 16) {
        mensagem = 'Menores de 16 anos não votam.'
    } else if (idade < 18 || idade > 70) {
        mensagem = 'Facultativo para pessoas com 16 ou 17 anos ou acima de 70.'
    } else {
        mensagem = 'O voto é obrigatório para pessoas entre 18 e 70 anos.'
    }

    resposta.innerHTML = `<p>${mensagem}</p>`

    btnPrecisoVotar.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputIdade.value = ''
    inputIdade.focus()

    btnPrecisoVotar.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}




