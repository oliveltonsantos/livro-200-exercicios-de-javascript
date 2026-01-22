const inputNota1 = document.getElementById('nota1')
const inputNota2 = document.getElementById('nota2')
const btnAnalisarNotas = document.querySelector('.btnAnalisarNotas')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const resposta = document.querySelector('.resposta')


function analisarNotas() {
    if (inputNota1.value === '' || inputNota2.value === '') {
        alert('Digite as duas notas para analisar.')
        return
    }

    const nota1 = Number(inputNota1.value)
    const nota2 = Number(inputNota2.value)

    const media = (nota1 + nota2) / 2

    let mensagem = ''

    if (media >= 7) {
        mensagem = `Média: ${media} > Aluno aprovado! 😎`
    } else {
        mensagem = `Média: ${media} > Aluno reprovado. 😭`
    }

    resposta.innerHTML = `<p>${mensagem}</p>`

    btnAnalisarNotas.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    inputNota1.value = ''
    inputNota2.value = ''
    inputNota1.focus()

    btnAnalisarNotas.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}





