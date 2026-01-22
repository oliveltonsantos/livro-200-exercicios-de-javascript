const inputMedia = document.getElementById('media')
const btnAnalisarMedia = document.querySelector('.btnAnalisarMedia')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const resposta = document.querySelector('.resposta')


function analisarMedia() {
    if (inputMedia.value === '') {
        alert('Digite a média final do aluno.')
        inputMedia.focus()
        return
    }

    const media = Number(inputMedia.value)

    if (media < 0) {
        alert('São aceitos apenas valores positivos.')
        inputMedia.value = ''
        inputMedia.focus()
        return
    }

    let mensagem = ''

    if (media < 5) {
        mensagem = 'Reprovado'
    } else if (media < 7) {
        mensagem = 'Recuperação'
    } else {
        mensagem = 'Aprovado'
    }

    resposta.innerHTML = `<p>Aluno: ${mensagem}</p>`

    btnAnalisarMedia.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    inputMedia.value = ''
    inputMedia.focus()

    btnAnalisarMedia.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}







