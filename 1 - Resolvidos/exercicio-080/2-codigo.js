const inputNome = document.getElementById('nome')
const inputPortugues = document.getElementById('portugues')
const inputMatematica = document.getElementById('matematica')
const inputBiologia = document.getElementById('biologia')
const inputFilosofia = document.getElementById('filosofia')
const todosInputs = document.querySelectorAll('input')
const todasMaterias = document.querySelectorAll('.todasMaterias')
const btnProcessarNotas = document.querySelector('.btnProcessarNotas')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function processarNotas() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const limiteDaNota = [...todasMaterias].find(nota => Number(nota.value) < 0 || Number(nota.value) > 10)

    if (limiteDaNota) {
        alert('As notas devem ter valor entre 0 e 10.')
        limiteDaNota.value = ''
        limiteDaNota.focus()
        return
    }


    const nome = inputNome.value

    // Nota convertida em número
    const notas = [...todasMaterias].map(input => Number(input.value))

    const estudante = {
        nome: nome,

        // Cada matéria recebe a nota de acordo com seu índice no array criado pelo map
        portugues: notas[0],
        matematica: notas[1],
        biologia: notas[2],
        filosofia: notas[3],

        calcularMedia() {
            return (this.portugues + this.matematica + this.biologia + this.filosofia) / 4
        }
    }


    mensagem.innerHTML = `<p>A média do(a) estudante ${estudante.nome} foi de ${estudante.calcularMedia().toFixed(1)}</p>`

    todosInputs.forEach(input => input.disabled = true)

    btnProcessarNotas.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


// Reset
function novoCalculo() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputNome.focus()

    btnProcessarNotas.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    mensagem.innerHTML = ''
}


