const inputPalavra = document.getElementById('palavra')
const btnInverterTexto = document.querySelector('.btnInverterTexto')
const btnNovaPalavra = document.querySelector('.btnNovaPalavra')
const mensagem = document.querySelector('.mensagem')


function inverterPalavra() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para inverter.')
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    if (palavra.trim().length < 2) {
        alert('Digite uma palavra com no mínimo 2 letras.')
        inputPalavra.value = ''
        inputPalavra.focus()
        return
    }


    let palavraInvertida = ''
    let contador = palavra.length - 1

    while (contador >= 0) {
        palavraInvertida += palavra[contador]
        contador--
    }


    mensagem.innerHTML = `
        <p>Palavra invertida:</p>
        <p>${palavra}</p>
        <p>${palavraInvertida}</p>            
    `


    btnInverterTexto.style.display = 'none'
    btnNovaPalavra.style.display = 'inline-block'
}


function novaPalavra() {
    inputPalavra.value = ''
    inputPalavra.focus()

    btnInverterTexto.style.display = 'inline-block'
    btnNovaPalavra.style.display = 'none'

    mensagem.innerHTML = ''
}
