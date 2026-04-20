const inputHora = document.getElementById('hora')
const inputMinuto = document.getElementById('minuto')
const inputSegundo = document.getElementById('segundo')
const todosInputs = document.querySelectorAll('input')
const btnDadosDoTempo = document.querySelector('.btnDadosDoTempo')
const btnNovaConversao = document.querySelector('.btnNovaConversao')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function dadosDoTempo() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const hora = Number(inputHora.value)
    const minuto = Number(inputMinuto.value)
    const segundo = Number(inputSegundo.value)

    const tempo = {
        hora: hora,
        minuto: minuto,
        segundo: segundo,

        tempoEmSegundos() {
            return (this.hora * 3600) + (this.minuto * 60) + this.segundo
        }
    }

    mensagem.innerHTML = `<p>Hora: ${tempo.hora}:${tempo.minuto}:${tempo.segundo} = ${tempo.tempoEmSegundos()} segundos</p>`

    todosInputs.forEach(input => input.disabled = true)

    btnDadosDoTempo.style.display = 'none'
    btnNovaConversao.style.display = 'inline-block'
}


// Reset
function novaConversao() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputHora.focus()

    btnDadosDoTempo.style.display = 'inline-block'
    btnNovaConversao.style.display = 'none'

    mensagem.innerHTML = ''
}

