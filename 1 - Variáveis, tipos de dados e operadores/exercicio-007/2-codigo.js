const inputNumA = document.getElementById('numeroA')
const inputNumB = document.getElementById('numeroB')
const inputNumC = document.getElementById('numeroC')
const btnComparar = document.querySelector('.btnComparar')
const btnNovaComparacao = document.querySelector('.btnNovaComparacao')
const resposta = document.querySelector('.resposta')


function compararValores() {
    if (inputNumA.value === '' || inputNumB.value === '' || inputNumC.value === '') {
        alert('Digite valores em todos os campos.')
        return
    }


    const numeroA = Number(inputNumA.value)
    const numeroB = Number(inputNumB.value)
    const numeroC = Number(inputNumC.value)


    let mensagem = ''


    if (numeroA > numeroB && numeroA > numeroC) {
        mensagem += `<p>${numeroA} é o maior número.</p>`
    } else if (numeroB > numeroA && numeroB > numeroC) {
        mensagem += `<p>${numeroB} é o maior número.</p>`
    } else if (numeroC > numeroA && numeroC > numeroB) {
        mensagem += `<p>${numeroC} é o maior número.</p>`
    }


    if (numeroA < numeroB && numeroA < numeroC) {
        mensagem += `<p>${numeroA} é o menor número.</p>`
    } else if (numeroB < numeroA && numeroB < numeroC) {
        mensagem += `<p>${numeroB} é o menor número.</p>`
    } else if (numeroC < numeroA && numeroC < numeroB) {
        mensagem += `<p>${numeroC} é o menor número.</p>`
    }


    if (numeroA === numeroB && numeroB === numeroC) {
        mensagem += '<p>Todos os números são iguais.</p>'
    } else if (numeroA === numeroB && numeroA !== numeroC) {
        mensagem += `<p>Número A é igual a número B.</p>`
    } else if (numeroA === numeroC && numeroA !== numeroB) {
        mensagem += '<p>Número A é igual a número C.</p>'
    } else if (numeroB === numeroC && numeroB !== numeroA) {
        mensagem += '<p>Número B é igual ao número C.</p>'
    }


    resposta.innerHTML = mensagem

    btnComparar.style.display = 'none'
    btnNovaComparacao.style.display = 'inline-block'
}


function novaComparacao() {
    inputNumA.value = ''
    inputNumB.value = ''
    inputNumC.value = ''
    inputNumA.focus()

    btnComparar.style.display = 'inline-block'
    btnNovaComparacao.style.display = 'none'

    resposta.innerHTML = ''
}







