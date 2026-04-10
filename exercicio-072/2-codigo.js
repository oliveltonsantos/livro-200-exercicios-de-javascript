const inputValor = document.getElementById('valor')
const inputRepeticao = document.getElementById('repeticao')
const todosInputs = document.querySelectorAll('input')
const btnReceberDados = document.querySelector('.btnReceberDados')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


// Função utilitária
function esperar(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos))
}


// Função alta ordem
async function executarProcessamento(valor, repeticao, callbacks) {

    let resultado = valor

    for (let i = 0; i < repeticao; i++) {

        // aplica as funções
        callbacks.forEach(funcao => {
            // O valor de "resultado" é atualizado a cada repetição com o valor da função de callback
            resultado = funcao(resultado)
        })

        // mostra o resultado da rodada
        mensagem.innerHTML += `<p>Rodada ${i + 1} = ${resultado}</p>`

        // espera 1 segundo antes da próxima rodada
        await esperar(1000)
    }

    return resultado
}


// Callback
const executarCalculos = [
    (n) => n + 1,
    (n) => n * 2
]


// Interação com usuário
async function receberDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Digite um valor no campo abaixo.')
        inputVazio.focus()
        return
    }

    const valorInicial = Number(inputValor.value)
    const repeticao = Number(inputRepeticao.value)

    if (repeticao <= 0) {
        alert('Digite um valor maior que zero.')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    // só mostra o resultado final quando todas as rodadas forem processadas
    const resultadoFinal = await executarProcessamento(valorInicial, repeticao, executarCalculos)

    mensagem.innerHTML += `<p><strong>Resultado final: ${resultadoFinal}</strong></p>`

    todosInputs.forEach(input => input.disabled = true)

    btnReceberDados.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


// Reset
function novoNumero() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputValor.focus()

    btnReceberDados.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}