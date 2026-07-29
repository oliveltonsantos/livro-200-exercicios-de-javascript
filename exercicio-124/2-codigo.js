const inputNome = document.getElementById('nome')
const inputMateria = document.getElementById('materia')
const inputNota = document.getElementById('nota')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


/*
    Os parênteses: ({...})

    Eles são importantes porque, sem eles, o JavaScript pensaria que as chaves {} representam o corpo da função, e não um objeto retornado.

    Essa função cria um novo objeto, copiando todas as propriedades de cadastro e acrescentando idade.
*/

const adicionarNovaOpcao = (cadastro) => ({
    ...cadastro,
    idade: 18
})


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos para cadastrar.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const materia = inputMateria.value
    const nota = Number(inputNota.value)

    const cadastroDoAluno = {
        nome: nome,
        materia: materia,
        nota: nota
    }

    const copiaCadastroAluno = adicionarNovaOpcao(cadastroDoAluno)

    // Convertendo objeto para JSON e usando e usando "pre" para preservar os espaços e quebras de linha
    mensagem.innerHTML = `
        <p>Cópia do objeto:</p>
        <pre>${JSON.stringify(copiaCadastroAluno, null, 4)}</pre>
    `

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

