const inputNumero = document.getElementById('numero')
const btnAdivinharNumero = document.querySelector('.btnAdivinharNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


function adivinharNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para ser adivinhado.')
        inputNumero.focus()
        return
    }

    const numeroDoUsuario = Number(inputNumero.value)

    if (numeroDoUsuario < 1 || numeroDoUsuario > 100) {
        alert('Escolha um número entre 1 e 100.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    // Array de números de 1 até 100
    listaNumeros = []

    // Criar a lista de números
    for (let contador = 1; contador <= 100; contador++) {
        listaNumeros.push(contador)
    }

    let indiceInicial = 0
    let indiceFinal = listaNumeros.length - 1 // Último índice do array

    let resultado = 0

    while (indiceInicial <= indiceFinal) {
        let indiceDoMeio = Math.floor((indiceInicial + indiceFinal) / 2)

        if (listaNumeros[indiceDoMeio] === numeroDoUsuario) {
            resultado = listaNumeros[indiceDoMeio]
        }

        if (numeroDoUsuario < listaNumeros[indiceDoMeio]) {
            indiceFinal = indiceDoMeio - 1 // índice se move para a esquerda
        } else {
            indiceInicial = indiceDoMeio + 1 // índice se move para a direita
        }
    }

    mensagem.innerHTML = `<p>Número escolhido: ${resultado}</p>`

    btnAdivinharNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function novoNumero() {
    inputNumero.value = ''
    inputNumero.focus()

    btnAdivinharNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}


