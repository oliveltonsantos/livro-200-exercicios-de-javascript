const inputQuantidade = document.getElementById('quantidade')
const btnNumerosPerfeitos = document.querySelector('.btnNumerosPerfeitos')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function numerosPerfeitos() {
    if (inputQuantidade.value === '') {
        alert('Digite uma quantidade de números.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('Digite uma quantidade mínima de 1 número.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }


    const listaNumerosPerfeitos = []

    for (let numero = 1; numero <= quantidade; numero++) {
        let somaDivisores = 0

        for (let divisor = 1; divisor < numero; divisor++) {
            const eDivisor = numero % divisor === 0

            if (eDivisor) {
                somaDivisores += divisor
            }
        }

        if (somaDivisores === numero) {
            listaNumerosPerfeitos.push(numero)
        }
    }


    mensagem.innerHTML = `<p>Números perfeitos: ${listaNumerosPerfeitos.join(' > ')}</p>`

    btnNumerosPerfeitos.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnNumerosPerfeitos.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}