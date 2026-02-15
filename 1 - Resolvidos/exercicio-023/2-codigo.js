const inputCor = document.getElementById('cor')
const btnSignificadoCor = document.querySelector('.btnSignificadoCor')
const btnNovaCor = document.querySelector('.btnNovaCor')
const mensagem = document.querySelector('.mensagem')


function significadoDaCor() {
    if (inputCor.value.trim() === '') {
        alert('Digite uma cor para ver o significado.')
        inputCor.focus()
        return
    }

    const cor = inputCor.value
        .toLowerCase()

    let significado = ''

    if (cor === 'vermelho') {
        significado = '🔴 VERMELHO: Proibição de avançar. É uma ordem de parada obrigatória, essencial para a segurança de todos.'
    } else if (cor === 'amarelo') {
        significado = '🟡 AMARELO: Alerta. Indica que o sinal está prestes a ficar vermelho. O motorista deve reduzir a velocidade e se preparar para parar, não acelerar para "passar rápido".'
    } else if (cor === 'verde') {
        significado = '🟢 VERDE: Permissão para seguir. Significa que o caminho está livre para avançar, mas sempre com atenção e responsabilidade, verificando se o cruzamento está realmente livre.'
    } else {
        significado = 'Essa cor não existe no semáforo de trânsito.'
    }

    btnSignificadoCor.style.display = 'none'
    btnNovaCor.style.display = 'inline-block'

    mensagem.innerHTML = `<p>${significado}</p>`
}


function novaCor() {
    inputCor.value = ''
    inputCor.focus()

    btnSignificadoCor.style.display = 'inline-block'
    btnNovaCor.style.display = 'none'

    mensagem.innerHTML = ''
}
