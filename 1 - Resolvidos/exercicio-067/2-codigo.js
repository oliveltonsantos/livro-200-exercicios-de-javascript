const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovoNumero = document.querySelector('.btnNovoNumero')
const mensagem = document.querySelector('.mensagem')


let listaDelistas = []
let linhaAtual = []
let nomeDaLista = 'Lista A'


// Função alta ordem
function dobrarNumerosComCallback(lista, callback) {
    const listaDobrados = []

    // primeiro "for" percorre as linhas do array "listaDelistas"
    for (let i = 0; i < lista.length; i++) {

        let novaLinha = []

        // segundo "for" percorre as colunas de cada linha do array 
        for (let j = 0; j < lista[i].length; j++) {
            const valor = callback(lista[i][j])

            novaLinha.push(valor)
        }

        listaDobrados.push(novaLinha)
    }

    return listaDobrados
}


// Callback
function dobrarNumeros(numeroDaLista) {
    return numeroDaLista * 2
}


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    linhaAtual.push(numero)

    mensagem.innerHTML = `<p>${nomeDaLista}: ${linhaAtual.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (linhaAtual.length === 3) {
        listaDelistas.push(linhaAtual)

        linhaAtual = []

        nomeDaLista = 'Lista B'
    }

    if (listaDelistas.length === 2) {

        alert('Lista completa.')

        const resultado = dobrarNumerosComCallback(listaDelistas, dobrarNumeros)

        mensagem.innerHTML = `<p>Números dobrados:</p>
                              <p>Lista A: ${resultado[0].join(' > ')}</p>  
                              <p>Lista B: ${resultado[1].join(' > ')}</p>  
        `

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovoNumero.style.display = 'inline-block'
    }
}


function novoNumero() {
    listaDelistas = []
    nomeDaLista = 'Lista A'

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    mensagem.innerHTML = ''
}