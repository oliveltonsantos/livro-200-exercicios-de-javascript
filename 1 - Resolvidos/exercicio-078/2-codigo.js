const inputNome = document.getElementById('nome')
const inputRaca = document.getElementById('raca')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const btnCadastrarPet = document.querySelector('.btnCadastrarPet')
const btnCadastrarNovoPet = document.querySelector('.btnCadastrarNovoPet')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function cadastrarPet() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const raca = inputRaca.value
    const idade = Number(inputIdade.value)

    const cachorro = {
        nome: nome,
        raca: raca,
        idade: idade,

        converterIdade() {
            return this.idade * 7
        }
    }

    mensagem.innerHTML = `
        <p>O seu pet ${cachorro.nome} foi cadastrado com sucesso!</p>
        <p>Raça: ${cachorro.raca}</p> 
        <p>Idade: ${cachorro.idade}</p>
        <p>Você sabia que a idade do seu pet é igual ${cachorro.converterIdade()} anos em idade humana?</p>
    `

    todosInputs.forEach(input => input.disabled = true)

    btnCadastrarPet.style.display = 'none'
    btnCadastrarNovoPet.style.display = 'inline-block'
}


// Reset
function cadastrarNovoPet() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputNome.focus()

    btnCadastrarPet.style.display = 'inline-block'
    btnCadastrarNovoPet.style.display = 'none'

    mensagem.innerHTML = ''
}

