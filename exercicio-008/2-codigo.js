const valorAtual = document.querySelector('.valorAtual')
const mensagens = document.querySelector('.mensagens')
const btnAumentarValor = document.querySelector('.btnAumentarValor')
const btnResetarValor = document.querySelector('.btnResetarValor')


let contador = 0


function aumentarValor() {
   
    contador++

    valorAtual.innerHTML = `<p>Valor atual = ${contador}<p>`

    mensagens.style.display = 'none'

    if (contador === 5) {
        alert(`Você já clicou ${contador} vezes. 👏🎉`)
    } else if (contador >= 10){
        alert(`⚠️ Você já chegou no limite máximo de ${contador}.`)
        btnAumentarValor.style.display = 'none'
    }
}


function resetarValor() {
    contador = 0

    valorAtual.innerHTML = 'Valor atual = 0'

    mensagens.style.display = 'inline-block'

    mensagens.innerHTML = 'Clique no botão abaixo.'

    btnAumentarValor.style.display = 'inline-block'
}


