const inputQuantidade = document.getElementById('quantidade')
const btnContagem = document.querySelector('.btnContagem')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function contagem() {
    if (inputQuantidade.value === '') {
        alert('Digite uma quantidade.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('Digite uma quantidade mínima de 1.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    let contador = 1
    let resultado = ''
    let lista = []

    while (contador <= quantidade) {
        if (contador % 3 === 0 && contador % 5 === 0) {
            resultado = 'FizzBuzz'
        } else if (contador % 3 === 0) {
            resultado = 'Fizz'
        } else if (contador % 5 === 0) {
            resultado = 'Buzz'
        } else {
            resultado = `${contador}`
        }

        lista.push(resultado)
        contador++
    }

    mensagem.innerHTML = `<p>${lista.join(' > ')}</p>`

    btnContagem.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnContagem.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}