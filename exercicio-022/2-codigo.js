const inputMes = document.getElementById('mes')
const btnDiasDoMes = document.querySelector('.btnDiasDoMes')
const btnNovoMes = document.querySelector('.btnNovoMes')
const mensagem = document.querySelector('.mensagem')


function diasDoMes() {
    if (inputMes.value === '') {
        alert('Digite um mês entre 1 e 12.')
        inputMes.focus()
        return
    }

    const mes = Number(inputMes.value)

    if (mes < 1 || mes > 12) {
        alert('Digite um mês entre 1 e 12.')
        inputMes.value = ''
        inputMes.focus()
        return
    }

    let resposta = ''

    if ((mes <= 7 && mes % 2 !== 0) || (mes > 7 && mes % 2 === 0)) {
        resposta = '31 dias'
    } else if (mes === 2) {
        resposta = '28 ou 29 dias.'
    } else {
        resposta = '30 dias.'
    }

    mensagem.innerHTML = `<p>${resposta}</p>`

    btnDiasDoMes.style.display = 'none'
    btnNovoMes.style.display = 'inline-block'
}


function novoMes() {
    inputMes.value = ''
    inputMes.focus()

    btnDiasDoMes.style.display = 'inline-block'
    btnNovoMes.style.display = 'none'

    mensagem.innerHTML = ''
}




