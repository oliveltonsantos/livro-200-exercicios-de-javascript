// Tela de opções
const telaOpcoes = document.querySelectorAll('.telaOpcoes')

// Tela de depósito
const telaDeposito = document.querySelectorAll('.telaDeposito')
const inputValorDeposito = document.getElementById('valorDeposito')

// Tela de saque
const telaSaque = document.querySelectorAll('.telaSaque')
const inputValorSaque = document.getElementById('valorSaque')


// Objeto
const contaBancaria = {
    saldo: 0,

    fazerDeposito(valor) {
        return this.saldo += valor
    },

    fazerSaque(valor) {
        return this.saldo -= valor
    }
}


// Funções que conectam com o método do objeto
function fazerDeposito() {
    const valorDeposito = Number(inputValorDeposito.value)
    const saldo = contaBancaria.fazerDeposito(valorDeposito)

    alert(`Depósito de R$${valorDeposito.toFixed(2)} feito! Saldo atual: R$${saldo.toFixed(2)}`)

    telaOpcoes.forEach(elemento => elemento.style.display = 'inline-block')
    telaDeposito.forEach(elemento => elemento.style.display = 'none')
}


function fazerSaque() {
    const valorSaque = Number(inputValorSaque.value)

    if (valorSaque > contaBancaria.saldo) {
        alert(`Saldo atual de R$${contaBancaria.saldo.toFixed(2)} insuficiente. Digite um valor menor.`)
        inputValorSaque.value = ''
        inputValorSaque.focus()
        return
    } else {
        const saldo = contaBancaria.fazerSaque(valorSaque)

        alert(`Saque de R$${valorSaque.toFixed(2)} feito! Saldo atual: R$${saldo.toFixed(2)}`)

        telaOpcoes.forEach(elemento => elemento.style.display = 'inline-block')
        telaSaque.forEach(elemento => elemento.style.display = 'none')
    }
}


// Interação com usuário
function escolherOpcao() {

    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked')

    if (!opcaoSelecionada) {
        alert('Escolha uma opção.')
        return
    }

    const valor = opcaoSelecionada.value

    if (valor === 'deposito') {
        telaOpcoes.forEach(elemento => elemento.style.display = 'none')
        telaDeposito.forEach(elemento => elemento.style.display = 'inline-block')
        inputValorDeposito.value = ''
        inputValorDeposito.focus()
    } else {
        if (contaBancaria.saldo === 0) {
            alert('Você não possui saldo na sua conta, faça um depósito primeiro.')
        } else {
            telaOpcoes.forEach(elemento => elemento.style.display = 'none')
            telaSaque.forEach(elemento => elemento.style.display = 'inline-block')
            inputValorSaque.value = ''
            inputValorSaque.focus()
        }
    }
}


