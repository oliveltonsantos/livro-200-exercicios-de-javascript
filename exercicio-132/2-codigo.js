const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputAltura = document.getElementById('altura')
const inputCidade = document.getElementById('cidade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


function extrairPropriedades(paciente) {
    const { nome, idade } = paciente

    return `O(A) paciente se chama ${nome} e tem ${idade} anos.`
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos abaixo.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const paciente = {
        nome: inputNome.value,
        idade: Number(inputIdade.value),
        altura: Number(inputAltura.value),
        cidade: inputCidade.value
    }

    const resultado = extrairPropriedades(paciente)

    mensagem.innerHTML = `<p>${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoCadastro.style.display = 'none'

    todosInputs.forEach(input => input.value = '')
    inputNome.focus()

    mensagem.innerHTML = ''
}

