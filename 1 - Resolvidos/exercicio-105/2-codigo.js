const inputModelo = document.getElementById('modelo')
const inputCor = document.getElementById('cor')
const inputTamanho = document.getElementById('tamanho')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function acessarPropriedade(calcadoJSON, propriedade) {
    const calcadoObjeto = JSON.parse(calcadoJSON)
    return calcadoObjeto[propriedade]
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Informe todos os dados.')
        inputVazio.focus()
        return
    }

    const modelo = inputModelo.value
    const cor = inputCor.value
    const tamanho = Number(inputTamanho.value)

    // Estrutura do JSON
    const calcadoJSON = `{
        "modelo": "${modelo}", 
        "cor": "${cor}",
        "tamanho": ${tamanho}
    }`

    // Chama a função para converter para objeto e acessar a propriedade passada
    const propriedade = acessarPropriedade(calcadoJSON, "modelo")

    mensagem.innerHTML = `<p>Propriedade acessada: ${propriedade}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoCadastro.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputModelo.focus()
}

