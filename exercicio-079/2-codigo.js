const inputMarca = document.getElementById('marca')
const inputModelo = document.getElementById('modelo')
const inputAno = document.getElementById('ano')
const inputVelocidade = document.getElementById('velocidade')
const todosInputs = document.querySelectorAll('input')
const btnCadastrarCarro = document.querySelector('.btnCadastrarCarro')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function cadastrarCarro() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const marca = inputMarca.value
    const modelo = inputModelo.value
    const ano = Number(inputAno.value)
    const velocidade = Number(inputVelocidade.value)

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        velocidade: velocidade,

        aumentarVelocidade() {
            return this.velocidade += 30
        },

        reduzirVelocidade() {
            return this.velocidade -= 10
        },

        exibirVelocidade() {
            return this.velocidade
        }
    }

    mensagem.innerHTML = `
        <p><strong>Dados do carro:</strong></p>
        <p>Marca: ${carro.marca}</p>
        <p>Modelo: ${carro.modelo}</p>
        <p>Ano: ${carro.ano}</p>
        <p>-----------------------------------------------------------</p>
        <p><strong>Teste de velocidade:</strong></p>
        <p>Velocidade inicial: ${carro.velocidade}</p>
        <p>Velocida aumentada (+30KM/H): ${carro.aumentarVelocidade()}</p>
        <p>Velocidade reduzida (-10KM/H): ${carro.reduzirVelocidade()}</p>
        <p>Velocidade final: ${carro.exibirVelocidade()}</p>
    `

    todosInputs.forEach(input => input.disabled = true)

    btnCadastrarCarro.style.display = 'none'
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputMarca.focus()

    btnCadastrarCarro.style.display = 'inline-block'
    btnNovoCadastro.style.display = 'none'

    mensagem.innerHTML = ''
}

