const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length > 4) {
        alert('Lista completa.')

        mensagem.innerHTML = `<p>Ordem decrescente: ${ordenarNumeros(listaNumeros).join(' > ')}</p>`

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function ordenarNumeros(lista) {

    let novoArray = []

    for (let i = 0; i < lista.length; i++) {
        if (novoArray.length === 0) {
            novoArray.push(lista[i])
        } else {

            let inserido = false

            for (let j = 0; j < novoArray.length; j++) {

                if (lista[i] > novoArray[j]) {

                    // desloca os números
                    for (let k = novoArray.length; k > j; k--) {
                        novoArray[k] = novoArray[k - 1]
                    }

                    // insere o número
                    novoArray[j] = lista[i]

                    inserido = true
                    break
                }
            }

            // se o número for maior é inserido no final do array
            if (!inserido) {
                novoArray.push(lista[i])
            }
        }
    }

    return novoArray
}


function novoNumero() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}