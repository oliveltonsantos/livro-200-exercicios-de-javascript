const inputNum = document.getElementById('numero')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função de alta ordem
const somarNumeros = (lista) => lista.reduce((acumulador, numero) => acumulador + numero, 0)


// Interação com usuário
function adicionar() {
    if (inputNum.value === '') {
        alert('Digite um número para adicionar.')
        inputNum.focus()
        return
    }

    const numero = Number(inputNum.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNum.value = ''
    inputNum.focus()
}

function processarDados() {
    if (listaNumeros.length < 2) {
        alert('Adicione mais números na lista.')
        inputNum.focus()
        return
    }

    const resultado = somarNumeros(listaNumeros)

    mensagem.innerHTML = `<p>Soma total: ${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaSoma.style.display = 'inline-block'
}


// Reset


