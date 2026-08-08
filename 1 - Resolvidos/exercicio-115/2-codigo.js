const inputNome = document.getElementById('nome')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaSaudacao = document.querySelector('.btnNovaSaudacao')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const helloWorld = nome => `Hello, ${nome}!`


// Interação com usuário
function processarDados() {
    if (inputNome.value.trim() === '') {
        alert('Digite seu nome primeiro.')
        inputNome.value = ''
        inputNome.focus()
        return
    }

    const nome = inputNome.value

    const retornoDaFuncao = helloWorld(nome)

    mensagem.innerHTML = `<p>${retornoDaFuncao}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaSaudacao.style.display = 'inline-block'
}


// Reset
function novaSaudacao() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaSaudacao.style.display = 'none'

    mensagem.innerHTML = ''

    inputNome.value = ''
    inputNome.focus()
}



