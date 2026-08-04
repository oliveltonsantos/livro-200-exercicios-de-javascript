const inputMarca = document.getElementById('marca')
const inputModelo = document.getElementById('modelo')
const inputAno = document.getElementById('ano')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovoCadastro = document.querySelector('.btnNovoCadastro')
const mensagem = document.querySelector('.mensagem')


// Função de alta ordem
function criarCarro(marca = "Marca desconhecida", modelo, ano = 'Ano desconhecido') {

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano
    }

    return carro
}


// Interação com usuário
function processarDados() {
    if (inputModelo.value.trim() === '') {
        alert('É obrigatório informar o "MODELO" do carro.')
        inputModelo.value = ''
        inputModelo.focus()
        return
    }


    const marca = inputMarca.value || undefined
    const modelo = inputModelo.value
    const ano = Number(inputAno.value) || undefined


    /*

        O objetivo do operador OU (||) é dizer:

        "Se o valor da esquerda não servir, use o valor da direita."

        No seu caso:

        Se inputGenero.value tiver um texto, use esse texto.
    
        Se estiver vazio (""), use undefined.

        E por que isso?

        Porque o parâmetro default só funciona com undefined.
    
    */


    const objetoCarro = criarCarro(marca, modelo, ano)

    // Convertendo objeto para JSON
    const exibirResultado = JSON.stringify(objetoCarro, null, 2)

    mensagem.innerHTML = `
        <p>Objeto carro:</p>
        <pre>${exibirResultado}</pre>
    `


    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovoCadastro.style.display = 'inline-block'
}


// Reset
function novoCadastro() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovoCadastro.style.display = 'none'

    todosInputs.forEach(input => input.value = '')
    inputMarca.focus()

    mensagem.innerHTML = ''
}

