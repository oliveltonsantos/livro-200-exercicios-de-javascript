const inputMes = document.getElementById('mes')
const btnVerificarEstacao = document.querySelector('.btnVerificarEstacao')
const btnNovoMes = document.querySelector('.btnNovoMes')
const mensagem = document.querySelector('.mensagem')


function verificarEstacao() {
    if (inputMes.value === '') {
        alert('Digite um número entre 1 e 12.')
        inputMes.focus()
        return
    }

    const mes = Number(inputMes.value)

    if (mes < 1 || mes > 12) {
        alert('Digite um número entre 1 e 12.')
        inputMes.value = ''
        inputMes.focus()
        return
    }

    let estacao = ''

    if (mes < 3 || mes === 12) {
        estacao = 'Verão'
    } else if (mes < 6) {
        estacao = 'Outono'
    } else if (mes < 9) {
        estacao = 'Inverno'
    } else {
        estacao = 'Primavera'
    }

    mensagem.innerHTML = `<p>${estacao}</p>`

    btnVerificarEstacao.style.display = 'none'
    btnNovoMes.style.display = 'inline-block'
}


function novoMes() {
    inputMes.value = ''
    inputMes.focus()

    btnVerificarEstacao.style.display = 'inline-block'
    btnNovoMes.style.display = 'none'

    mensagem.innerHTML = ''
}


