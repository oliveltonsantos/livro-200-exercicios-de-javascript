const inputNome = document.getElementById('nome')
const inputMateria = document.getElementById('materia')
const inputNota = document.getElementById('nota')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaNota = document.querySelector('.btnNovaNota')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if(inputVazio) {
        alert('Preencha todos os campos para cadastrar a nota.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }
    
    const nome = inputNome.value
    const materia = inputMateria.value
    const nota = Number(inputNota.value)

    if (nota < 0 || nota > 10) {
        alert('O valor da nota deve estar entre 0 e 10.')
        inputNota.value = ''
        inputNota.focus()
        return
    }

    const notaDoAluno = [
        {nome: nome},
        {materia: materia},
        {nota: nota}
    ]

    const listaDeChaves = [
        "nome",
        "nota"
    ]

    


    



}

// Reset


