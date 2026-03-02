const inputQuantidade = document.getElementById('quantidade')
const btnSomarQuadrados = document.querySelector('.btnSomarQuadrados')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const mensagem = document.querySelector('.mensagem')


function somarQuadrados() {
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

    if (!Number.isInteger(quantidade)) {
        alert('Digite apenas números inteiros (números sem ponto ou vírgula).')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }


    let contador = 1
    let somaTotalQuadrados = 0

    while (contador <= quantidade) {
        const numeroAoQuadrado = contador * contador
        somaTotalQuadrados += numeroAoQuadrado
        contador++
    }


    mensagem.innerHTML = `<p>Soma dos quadrados de 1 até ${quantidade} = ${somaTotalQuadrados}</p>`

    btnSomarQuadrados.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnSomarQuadrados.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    mensagem.innerHTML = ''
}




