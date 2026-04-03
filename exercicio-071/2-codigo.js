const inputIdade = document.getElementById('idade')
const btnReceberIdade = document.querySelector('.btnReceberIdade')
const btnNovaIdade = document.querySelector('.btnNovaIdade')
const resultado = document.querySelector('.resultado')


// Função alta ordem
function converterIdadeComCallback(idade, milissegundos, callback) {

    setTimeout(() => {
        const idadeConvertida = callback(idade)

        resultado.innerHTML = `<p>Sua idade é ${idadeConvertida} dias aproximadamente.</p>`

        inputIdade.disabled = true

        btnReceberIdade.style.display = 'none'
        btnNovaIdade.style.display = 'inline-block'

    }, milissegundos)
}


// Callback
function converterIdadeDias(idade) {
    return idade * 365
}


function receberIdade() {
    if (inputIdade.value === '') {
        alert('Digite a idade para converter.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('Digite uma idade maior que zero.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    const milissegundos = 3000

    resultado.innerHTML = `<p>Estamos fazendo a conversão...</p>`

    converterIdadeComCallback(idade, milissegundos, converterIdadeDias)
}


function novaIdade() {
    inputIdade.disabled = false
    inputIdade.value = ''
    inputIdade.focus()

    btnReceberIdade.style.display = 'inline-block'
    btnNovaIdade.style.display = 'none'

    resultado.innerHTML = ''
}