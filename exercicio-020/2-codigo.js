const inputNota = document.getElementById('nota')
const btnAnalisarNota = document.querySelector('.btnAnalisarNota')
const btnNovaNota = document.querySelector('.btnNovaNota')
const mensagem = document.querySelector('.mensagem')


function analisarNota() {
    if (inputNota.value === '') {
        alert('Digite uma nota.')
        inputNota.focus()
        return
    }

    const nota = Number(inputNota.value)

    if (nota < 0) {
        alert('A nota não pode ser um valor negativo.')
        inputNota.value = ''
        inputNota.focus()
        return
    }

    let classificacao = ''

    if (nota >= 90) {
        classificacao = 'A'
    } else if (nota >= 80 && nota < 90) {
        classificacao = 'B'
    } else if (nota >= 70 && nota < 80) {
        classificacao = 'C'
    } else if (nota >= 60 && nota < 70) {
        classificacao = 'D'
    } else {
        classificacao = 'F'
    }

    mensagem.innerHTML = `<p>Nota: ${nota} = ${classificacao}</p>`

    btnAnalisarNota.style.display = 'none'
    btnNovaNota.style.display = 'inline-block'
}


function novaNota() {
    inputNota.value = ''
    inputNota.focus()

    btnAnalisarNota.style.display = 'inline-block'
    btnNovaNota.style.display = 'none'

    mensagem.innerHTML = ''
}





