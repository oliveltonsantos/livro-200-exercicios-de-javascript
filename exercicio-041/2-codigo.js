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

    let numero = Number(inputNumero.value)

    let restoDaDivisao = 0
    let numeroBinario = []
 
    do {
        restoDaDivisao = numero % 2
        
    if (restoDaDivisao === 0) {
            numeroBinario.push(0)
        } else {
            numeroBinario.push(1)
        }

        numero = restoDaDivisao

    } while (numero !== 0);



    mensagem.innerHTML = `<p>${numeroBinario}</p>`







}