const inputValor = document.getElementById('valor')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const lista = []


/* 
    Observação:

    Number.isNaN() não converte nada, ela apenas verifica se o valor já é NaN.

    Se Number.isNaN(valor) retornar false, o ! transforma esse resultado em true, e o filter() mantém esse valor no array.
*/

const filtrarNumeros = (...lista) => {
    return lista
        .map(Number)
        .filter(valor => !Number.isNaN(valor))
}


// Interação com usuário
function adicionar() {
    if (inputValor.value.trim() === '') {
        alert('Digite um valor para adicionar na lista.')
        inputValor.value = ''
        inputValor.focus()
        return
    }

    const valor = inputValor.value

    lista.push(valor)

    mensagem.innerHTML = `<p>Lista: ${lista.join(' > ')}</p>`

    inputValor.value = ''
    inputValor.focus()
}


function processarDados() {
    if (lista.length < 2) {
        alert('Adicione mais valores na lista.')
        inputValor.focus()
        return
    }

    const resultado = filtrarNumeros(...lista)

    mensagem.innerHTML = `<p>Números filtrados são: ${resultado.join(' > ')}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaLista.style.display = 'inline-block'
}


// Reset
function novaLista() {
    lista.length = 0

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaLista.style.display = 'none'

    inputValor.value = ''
    inputValor.focus()

    mensagem.innerHTML = ''
}

