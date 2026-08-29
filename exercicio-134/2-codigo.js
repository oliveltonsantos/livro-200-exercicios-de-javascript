const inputNome = document.getElementById('nome')
const inputRua = document.getElementById('rua')
const inputNumero = document.getElementById('numero')
const inputCidade = document.getElementById('cidade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


function extrairPropriedade(cliente) {
    const { cidade } = cliente["endereco"]
    return cidade
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos abaixo.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const cliente = {
        nome: inputNome.value,
        endereco: {
            rua: inputRua.value,
            numero: Number(inputNumero.value),
            cidade: inputCidade.value
        }
    }

    const resultado = extrairPropriedade(cliente)

    mensagem.innerHTML = `<p>A cidade do(a) ${cliente.nome} é ${resultado}</p>`

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

