const inputItem = document.getElementById('item')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaLista = document.querySelector('.btnNovaLista')
const mensagem = document.querySelector('.mensagem')


// Listas
const listaFrutas = []
const listaLegumes = []


// Controle de listas
let listaAtual = 'Frutas'
let nomeDaLista = 'frutas'


// Função de alta ordem
const juntarListas = (...items) => items


// Interação com usuário
function adicionar() {
    if (inputItem.value.trim() === '') {
        alert('Digite um item para adicionar.')
        inputItem.value = ''
        inputItem.focus()
        return
    }

    const item = inputItem.value


    if (listaAtual === 'Frutas') {

        listaFrutas.push(item)

        mensagem.innerHTML = `<p>Lista de ${nomeDaLista}: ${listaFrutas.join(' > ')}</p>`

        if (listaFrutas.length === 3) {
            alert('Lista de frutas completa. Crie a lista de legumes agora!')

            listaAtual = 'Legumes'

            nomeDaLista = 'legumes'

            mensagem.innerHTML = ''
        }
    } else if (listaAtual === 'Legumes') {
        listaLegumes.push(item)

        mensagem.innerHTML = `<p>Lista de ${nomeDaLista}: ${listaLegumes.join(' > ')}</p>`

        if (listaLegumes.length === 3) {
            alert('Lista de legumes completa!')

            let listaCompleta = juntarListas(...listaFrutas, ...listaLegumes)

            mensagem.innerHTML = `<p>Lista completa: ${listaCompleta.join(' > ')}</p>`

            console.log(listaCompleta)

            esconderElementos.forEach(elemento => elemento.style.display = 'none')
            btnNovaLista.style.display = 'inline-block'
        }
    }

    inputItem.value = ''
    inputItem.focus()
}


// Reset
function novaLista() {
    listaFrutas.length = 0
    listaLegumes.length = 0

    listaAtual = "Frutas"
    nomeDaLista = 'frutas'

    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaLista.style.display = 'none'

    mensagem.innerHTML = ''

    inputItem.value = ''
    inputItem.focus()
}

