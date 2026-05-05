const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const btnAdicionarAluno = document.querySelector('.btnAdicionarAluno')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')

const alunos = []


// Interação com usuário
function adicionarAluno() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos para adicionar.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const idade = Number(inputIdade.value)

    const pessoa = {
        nome: nome,
        idade: idade
    }

    alunos.push(pessoa) 

    mensagem.innerHTML = `<p>Pessoa adicionada: ${nome} = ${idade} anos</p>`

    inputNome.value = ''
    inputIdade.value = ''
    

    if (alunos.length === 2) {
        
        const opcao = prompt('Digite o número: 1 - Ver nomes | 2 - Ver idades')
        mensagem.innerHTML = `<p>${processarArrayDeObjetos(alunos, opcao)}</p>`
    }

}

// Reset


