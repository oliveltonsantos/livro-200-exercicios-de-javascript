const inputNome = document.getElementById('nome')
const inputConsulta = document.getElementById('consulta')
const inputValor = document.getElementById('valor')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoAgendamento = document.querySelector('.btnNovoAgendamento')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function converterEFormatarJSON(pacienteObjeto) {
    const pacienteJson = JSON.stringify(pacienteObjeto, null, 2)

    return pacienteJson
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
    const consulta = inputConsulta.value
    const valor = Number(inputValor.value)

    const paciente = {
        nome: nome,
        consulta: consulta,
        valor: valor
    }

    const resultado = converterEFormatarJSON(paciente)

    mensagem.innerHTML = `<p>${resultado}</p>`

    esconderElementos.forEach(elemento => elemento.style.display = 'none')

    btnNovoAgendamento.style.display = 'inline-block'
}


// Reset
function novoAgendamento() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')

    btnNovoAgendamento.style.display = 'none'

    mensagem.innerHTML = ''

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()
}

