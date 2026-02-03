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









}


