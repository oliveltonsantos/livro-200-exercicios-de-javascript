const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnFiltrarPrimos = document.querySelector('.btnFiltrarPrimos')
const btnNovoFiltro = document.querySelector('.btnNovoFiltro')
const mensagem = document.querySelector(".mensagem")


function filtrarPrimos() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Digite um número inicial e final.')
        inputVazio.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (inicio >= fim) {
        alert('O número inicial deve ser menor que o final.')
        inputInicio.value = ''
        inputInicio.focus()
        return
    }

    const listaPrimos = []

    for (let numero = inicio; numero <= fim; numero++) {
        let quantidadeDivisores = 0

        /* 
            "divisor = 2" números primos são divisíveis por 1
            "divisor < numero" números primos são divisíveis por ele mesmo
        */
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                quantidadeDivisores++
                break
            }
        }

        // "numero > 1" pois números primos são maiores que 1
        if (quantidadeDivisores === 0 && numero > 1) {
            listaPrimos.push(numero)
        }
    }

    mensagem.innerHTML = `<p>Números primos: ${listaPrimos.join(' > ')}</p>`

    btnFiltrarPrimos.style.display = 'none'
    btnNovoFiltro.style.display = 'inline-block'
}


function novoFiltro() {
    todosInputs.forEach(input => input.value = '')

    inputInicio.focus()

    btnFiltrarPrimos.style.display = 'inline-block'
    btnNovoFiltro.style.display = 'none'

    mensagem.innerHTML = ''
}


