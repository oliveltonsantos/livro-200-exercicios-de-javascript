const inputRaio = document.getElementById('raio')
const btnDadosDoCirculo = document.querySelector('.btnDadosDoCirculo')
const btnNovoCalculo = document.querySelector('.btnNovoCalculo')
const mensagem = document.querySelector('.mensagem')


// Interação com usuário
function dadosDoCirculo() {
    if (inputRaio.value === '') {
        alert('Digite um valor para calcular.')
        inputRaio.focus()
        return
    }

    const raio = Number(inputRaio.value)

    const circulo = {
        raio: raio,

        area() {
            return 3.14 * (this.raio ** 2)
        },

        circunferencia() {
            return 2 * 3.14 * this.raio
        }
    }

    mensagem.innerHTML = `
        <p>Resultados:</p>
        <p>Área: ${circulo.area().toFixed(2)} cm</p>
        <p>Circunferência: ${circulo.circunferencia().toFixed(2)} cm</p>
    `

    inputRaio.disabled = true

    btnDadosDoCirculo.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


// Reset
function novoCalculo() {
    inputRaio.disabled = false
    inputRaio.value = ''
    inputRaio.focus()

    btnDadosDoCirculo.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    mensagem.innerHTML = ''
}
