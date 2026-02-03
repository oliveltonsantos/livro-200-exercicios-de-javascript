const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const todosInputs = document.querySelectorAll('input')
const btnFiltrarPares = document.querySelector('.btnFiltrarPares')
const btnNovoFiltro = document.querySelector('.btnNovoFiltro')
const mensagem = document.querySelector('.mensagem')


function filtrarPares() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Digite um valor inicial e final nos campos.')
        inputVazio.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (inicio >= fim) {
        alert('O número inicial deve ser menor que o número final.')
        inputInicio.value = ''
        inputInicio.focus()
        return
    }

    let contador = inicio

    const listaPares = []

    do {
        if (contador % 2 === 0) {
            listaPares.push(contador)
        }
        contador++
    } while (contador <= fim)

    mensagem.innerHTML = `<p>Números pares: ${listaPares.join(' > ')}</p>`

    btnFiltrarPares.style.display = 'none'
    btnNovoFiltro.style.display = 'inline-block'
}


function novoFiltro() {
    todosInputs.forEach(input => input.value = '')

    inputInicio.focus()

    btnFiltrarPares.style.display = 'inline-block'
    btnNovoFiltro.style.display = 'none'

    mensagem.innerHTML = ''
}

