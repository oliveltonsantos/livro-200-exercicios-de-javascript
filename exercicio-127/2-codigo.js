const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputProfissao = document.getElementById('profissao')
const inputAltura = document.getElementById('altura')
const inputPeso = document.getElementById('peso')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
const mesclarObjetos = (informacoesPessoais, informacoesFisicas) => ({ ...informacoesPessoais, ...informacoesFisicas })


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos abaixo.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const idade = Number(inputIdade.value)
    const profissao = inputProfissao.value
    const altura = Number(inputAltura.value)
    const peso = Number(inputPeso.value)


    // Objetos
    const pessoaInformacoesPessoais = {
        nome: nome,
        idade: idade,
        profissao
    }

    const pessoaInformacoesFisicas = {
        altura: altura,
        peso: peso
    }


    const resultado = mesclarObjetos(pessoaInformacoesPessoais, pessoaInformacoesFisicas)

    // Transformando o objeto em JSON
    const objetoConvertido = JSON.stringify(resultado, null, 2)


    mensagem.innerHTML = `
        <p>Objetos mesclados:</p>
        <pre>${objetoConvertido}</pre>
    `

    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoCadastro.style.display = 'none'

    todosInputs.forEach(input => input.value = '')
    inputNome.focus()

    mensagem.innerHTML = ''
}

