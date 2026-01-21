const inputIdade = document.getElementById('idade')
const inputIngresso = document.getElementById('ingresso')
const inputBanido = document.getElementById('banido')
const btnPodeEntrar = document.querySelector('.btnPodeEntrar')
const btnNovaVerificacao = document.querySelector('.btnNovaVerificacao')
const resposta = document.querySelector('.resposta')


function podeEntrar() {
    if (inputIdade.value === '') {
        alert('Digite sua idade.')
        inputIdade.focus()
        return
    }

    if (inputIngresso.value === '') {
        alert('Informe se você tem ingresso.')
        inputIngresso.focus()
        return
    }

    if (inputBanido.value === '') {
        alert('Informe se já foi banido alguma vez.')
        inputBanido.focus()
        return
    }


    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('Não existe idade menor ou igual a zero. Informe outro valor.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }


    let temIngresso = Number(inputIngresso.value)

    if (temIngresso !== 1 && temIngresso !== 2) {
        alert('Informe se você tem ingresso (Digite 1 - Sim / 2 - Não).')
        inputIngresso.value = ''
        inputIngresso.focus()
        return
    }

    if (temIngresso === 1) {
        temIngresso = true
    } else {
        temIngresso = false
    }


    let foiBanido = Number(inputBanido.value)

    if (foiBanido !== 1 && foiBanido !== 2) {
        alert('Informe se você já foi banido (Digite 1 - Sim / 2 - Não).')
        inputBanido.value = ''
        inputBanido.focus()
        return
    }

    if (foiBanido === 1) {
        foiBanido = true
    } else {
        foiBanido = false
    }


    if (idade >= 18 && temIngresso === true && foiBanido !== true) {
        resposta.innerHTML = '<p>Você pode entrar.</p>'
    } else {
        resposta.innerHTML = '<p>Você não pode entrar.<p>'
    }


    btnPodeEntrar.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputIdade.value = ''
    inputIngresso.value = ''
    inputBanido.value = ''
    inputIdade.focus()

    btnPodeEntrar.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}