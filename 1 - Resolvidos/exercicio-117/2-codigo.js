const inputNome = document.getElementById('nome')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnReiniciarFuncao = document.querySelector('.btnReiniciarFuncao')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const dataAtual = () => new Date().toLocaleDateString('pt-BR')


// Interação com usuário
function processarDados() {
    if (inputNome.value.trim() === '') {
        alert('Digite o seu nome.')
        inputNome.value = ''
        inputNome.focus()
        return
    }

    const nome = inputNome.value

    const resultado = dataAtual()

    mensagem.innerHTML = `<p>${nome}, a data de hoje é ${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnReiniciarFuncao.style.display = 'inline-block'
}


// Reset
function reiniciarFuncao() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnReiniciarFuncao.style.display = 'none'

    inputNome.value = ''
    inputNome.focus()

    mensagem.innerHTML = ''
}

