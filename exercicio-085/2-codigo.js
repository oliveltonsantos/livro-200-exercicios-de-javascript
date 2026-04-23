const inputAltura = document.getElementById('altura')
const inputLargura = document.getElementById('largura')
const todosInputs = document.querySelectorAll('input')
const btnDadosDoRetangulo = document.querySelector('.btnDadosDoRetangulo')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function dadosDoRetangulo() {
    const inputVazio = [...todosInputs].find(input => input.value === '')

    if (inputVazio) {
        alert('Preencha todos os campos.')
        inputVazio.focus()
        return
    }

    const altura = Number(inputAltura.value)
    const largura = Number(inputLargura.value)

    const retangulo = {
        altura: altura,
        largura: largura,

        areaDoRetangulo() {
            return this.altura * this.largura
        }
    }

    // Herança das propriedades do retangulo 
    const quadrado = Object.create(retangulo)

    // Substituindo o método para calcular a área 
    quadrado.areaDoRetangulo = function() {
        return this.largura * this.largura
    }

    
    mensagem.innerHTML = `
        <p>Área retangulo = ${retangulo.areaDoRetangulo()}</p>
        <p>Área quadrado = ${quadrado.areaDoRetangulo()}</p>
    `

    todosInputs.forEach(input => input.disabled = true)

    btnDadosDoRetangulo.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


// Reset
function novoCalculo() {
    todosInputs.forEach(input => {
        input.disabled = false
        input.value = ''
    })

    inputAltura.focus()

    btnDadosDoRetangulo.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    mensagem.innerHTML = ''
}



