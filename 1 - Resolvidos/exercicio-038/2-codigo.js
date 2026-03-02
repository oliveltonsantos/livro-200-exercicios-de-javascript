const inputQuantidade = document.getElementById('quantidade')
const btnSomarCubos = document.querySelector('.btnSomarCubos')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const mensagem = document.querySelector('.mensagem')


function somarCubos() {
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

    if (!Number.isInteger(quantidade)) {
        alert('Digite apenas números inteiros (números sem ponto ou vírgula).')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }


    let contador = 1
    let somaDosCubos = 0

    do {
        const numeroAoCubo = contador ** 3
        somaDosCubos += numeroAoCubo
        contador++
    } while (contador <= quantidade);


    mensagem.innerHTML = `<p>Soma dos cubos de 1 até ${quantidade} = ${somaDosCubos}</p>`

    btnSomarCubos.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnSomarCubos.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    mensagem.innerHTML = ''
}
