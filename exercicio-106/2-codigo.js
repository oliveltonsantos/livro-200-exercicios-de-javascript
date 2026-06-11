const inputNome = document.getElementById('nome')
const inputNota = document.getElementById('nota')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaNota = document.querySelector('.btnNovaNota')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function adicionarNovaPropriedade(notasJSON, chave, valor) {
    const notasObjeto = JSON.parse(notasJSON)
    notasObjeto[chave] = valor
    return notasObjeto
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados.')
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const nota = Number(inputNota.value)

    // Estrutura JSON
    const notasJSON = `{
        "nome": "${nome}",
        "nota": ${nota}
    }`

    const objetoAtualizado = adicionarNovaPropriedade(notasJSON, "situacao", "reprovada")

    const exibirObjetoAtualizado = JSON.stringify(objetoAtualizado)

    mensagem.innerHTML = `<p>${exibirObjetoAtualizado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovaNota.style.display = 'inline-block'
}


// Reset
function novaNota() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovaNota.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

