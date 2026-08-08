const inputNome = document.getElementById('nome')
const inputRaca = document.getElementById('raca')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function converterEFiltrarPropriedades(objetoPet) {
    const jsonPet = JSON.stringify(objetoPet, ["nome", "raca"])

    return jsonPet
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Informe todos os dados.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const raca = inputRaca.value
    const idade = inputIdade.value

    // Objeto
    const pet = {
        nome: nome,
        raca: raca,
        idade: idade
    }

    const exibirResultado = converterEFiltrarPropriedades(pet)

    mensagem.innerHTML = `<p>Propriedades filtradas: ${exibirResultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoCadastro.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

