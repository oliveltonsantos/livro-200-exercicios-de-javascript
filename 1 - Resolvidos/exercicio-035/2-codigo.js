const inputQuantidade = document.getElementById('quantidade')
const btnNumerosTriangulares = document.querySelector('.btnNumerosTriangulares')
const btnNovaContagem = document.querySelector('.btnNovaContagem')
const mensagem = document.querySelector('.mensagem')


function numerosTriangulares() {
    if (inputQuantidade.value === '') {
        alert('Digite uma quantidade de números.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('A quantidade mínima de números é 1.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }


    const listaNumerosTriangulares = []

    for (let contador = 1; contador <= quantidade; contador++) {
        const novoNumero = contador * (contador + 1) / 2
        listaNumerosTriangulares.push(novoNumero)
    }


    mensagem.innerHTML = `<p>Números triangulares: ${listaNumerosTriangulares.join(' > ')}</p>`

    btnNumerosTriangulares.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnNumerosTriangulares.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    mensagem.innerHTML = ''
}


