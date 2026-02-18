const inputNumero = document.getElementById('numero')
const btnConverterBinario = document.querySelector('.btnConverterBinario')
const btnNovaConversao = document.querySelector('.btnNovaConversao')
const mensagem = document.querySelector('.mensagem')


function converterBinario() {
    if (inputNumero.value === '') {
        alert('Digite um número para converter.')
        inputNumero.focus()
        return
    }

    const numeroOriginal = Number(inputNumero.value)


    let numeroCopia = numeroOriginal
    const numeroBinario = []

    do {
        if (numeroCopia % 2 === 0) {
            numeroBinario.push(0)
        } else {
            numeroBinario.push(1)
        }

        const divisao = numeroCopia / 2

        numeroCopia = Math.floor(divisao)

    } while (numeroCopia > 0);


    let numeroInvertido = ''

    for (
        let contador = numeroBinario.length - 1;
        contador >= 0;
        contador--
    ) {
        numeroInvertido += numeroBinario[contador]
    }


    mensagem.innerHTML = `<p>${numeroOriginal} = ${numeroInvertido} (binário)</p>`


    btnConverterBinario.style.display = 'none'
    btnNovaConversao.style.display = 'inline-block'
}


function novaConversao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnConverterBinario.style.display = 'inline-block'
    btnNovaConversao.style.display = 'none'

    mensagem.innerHTML = ''
}