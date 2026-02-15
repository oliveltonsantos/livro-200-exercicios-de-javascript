const inputValor = document.getElementById('valor')
const btnAnalisar = document.querySelector('.btnAnalisar')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')
const resposta = document.querySelector('.resposta')


function analisarValor() {
    if (inputValor.value === '') {
        alert('Digite um valor primeiro.')
        inputValor.focus()
        return
    }

    const pi = Number(inputValor.value)

    if (pi === 3.14159) {
        resposta.innerHTML = '<p>Resposta correta!<p>'
    } else {
        resposta.innerHTML = '<p>Resposta errada. Tente de novo.<p>'
    }

    btnAnalisar.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    btnAnalisar.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    inputValor.value = ''
    inputValor.focus()

    resposta.innerHTML = ''
}

