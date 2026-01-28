const inputVerificado = document.getElementById('verificado')
const inputLimite = document.querySelector('.limite')
const inputSuperior = document.querySelector('.superior')
const todosInputs = document.querySelectorAll('input')
const btnAnalisarNumeros = document.querySelector('.btnAnalisarNumeros')
const btnNovaAnalise = document.querySelector('.btnNovaAnalise')


function analisarNumeros() {
    const inputVazio = [...todosInputs].find(input => input.value === '') 

    if (inputVazio) {
        alert('Digite todos os valores primeiro.')
        inputVazio.focus()
        return
    }





}