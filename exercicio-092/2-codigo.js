const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const todosInputs = document.querySelectorAll('input')
const btnAdicionarAluno = document.querySelector('.btnAdicionarAluno')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const alunos = []


// Função de alta ordem
function processarArrayDeObjetos(listaAlunos, propriedade) {

    const dadosDaPropriedade = []

    for (let i = 0; i < listaAlunos.length; i++) {
        const aluno = listaAlunos[i]
        dadosDaPropriedade.push(aluno[propriedade])
    }

    return dadosDaPropriedade

}


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
    inputNome.focus()


    if (alunos.length === 5) {
        let opcao = prompt('Escolha: 1 - Ver alunos / 2 - Ver idades')

        let exibirResultado = null

        do {
            alert('Escolha uma opção para continuar.')
            opcao = prompt('Escolha: 1 - Ver alunos / 2 - Ver idades')
        } while (opcao === null)

        if (opcao === '1') {
            exibirResultado = processarArrayDeObjetos(alunos, 'nome')
        } else {
            exibirResultado = processarArrayDeObjetos(alunos, 'idade')
        }

        mensagem.innerHTML = `<p>${exibirResultado.join(' > ')}</p>`

        todosInputs.forEach(input => input.disabled = true)

        btnAdicionarAluno.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


// Reset
function novaLista() {
    alunos.length = 0

    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputNome.focus()

    btnAdicionarAluno.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}

