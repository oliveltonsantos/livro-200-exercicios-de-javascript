const inputNum = document.getElementById('numero')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaSoma = document.querySelector('.btnNovaSoma')
const mensagem = document.querySelector('.mensagem')


// Lista de números
const listaNumeros = []


// Função de alta ordem
const somarValores = lista => lista.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)


// Interação com usuário
function adicionarNaLista() {
    if (inputNum.value === '') {
        alert('Preencha o campo com um número para adicionar na lista.')
        inputNum.focus()
        return
    }

    const numero = Number(inputNum.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaNumeros.join(' > ')}</p>`

    inputNum.value = ''
    inputNum.focus()
}


function processarDados() {
    if (listaNumeros.length < 2) {
        alert('Adicione mais números na lista.')
        inputNum.focus()
        return
    }

    const resultado = somarValores(listaNumeros)

    mensagem.innerHTML = `<p>Soma total: ${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaSoma.style.display = 'inline-block'
}


// Reset
function novaSoma() {
    listaNumeros.length = 0

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaSoma.style.display = 'none'

    mensagem.innerHTML = ''

    inputNum.value = ''
    inputNum.focus()
}

