const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('.btnAdicionarNumero')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


const listaNumeros = []


// Função alta ordem
function maioresQueMediaComCallback(lista, callback) {

    const somaTotal = lista.reduce((acumulador, numeroAtual) => {
        return acumulador + numeroAtual
    }, 0)

    const media = somaTotal / lista.length

    const numerosFiltrados = lista.filter(numero => callback(numero, media))

    // isso é um objeto que irá retornar as variáveis "media" e "numerosFiltrados"
    return {
        media: media,
        numerosFiltrados: numerosFiltrados
    }
}


// Callback
function filtrarMaioresQueMedia(numero, media) {
    return numero > media
}


function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    mensagem.innerHTML = `<p>Número adicionado: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length > 5) {
        alert('Lista completa!')

        const resultado = maioresQueMediaComCallback(listaNumeros, filtrarMaioresQueMedia)

        mensagem.innerHTML = `<p>Média: ${resultado.media.toFixed(2)}</p>
                              <p>Maiores que a média: ${resultado.numerosFiltrados.join(' > ')}</p>
        `

        inputNumero.disabled = true

        btnAdicionarNumero.style.display = 'none'
        btnNovaLista.style.display = 'inline-block'
    }
}


function novaLista() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''
}