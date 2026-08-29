const inputNome = document.getElementById('nome')
const inputMateria = document.getElementById('materia')
const inputNota = document.getElementById('nota')
const todosInputs = document.querySelectorAll('input')
const esconderElementos = document.querySelectorAll('.esconderElementos')
const btnNovaNota = document.querySelector('.btnNovaNota')
const mensagem = document.querySelector('.mensagem')


function filtrarObjetos(notaDoAluno, chavesPermitidas) {

    const novoArrayDeObjetos = []

    for (let i = 0; i < notaDoAluno.length; i++) {

        const objetoAtual = notaDoAluno[i]

        const novoObjeto = {}

        const chavesDoObjeto = Object.keys(objetoAtual)

        for (let j = 0; j < chavesDoObjeto.length; j++) {

            const chaveAtual = chavesDoObjeto[j]

            for (let p = 0; p < chavesPermitidas.length; p++) {

                if (chaveAtual === chavesPermitidas[p]) {
                    novoObjeto[chaveAtual] = objetoAtual[chaveAtual]
                }
            }
        }

        // Transforma o "novoObjeto" em um array
        const objetoParaArray = Object.keys(novoObjeto)

        // Verifica se o array não está vazio
        if (objetoParaArray.length !== 0) {
            novoArrayDeObjetos.push(novoObjeto)
        }
    }

    return novoArrayDeObjetos
}


// Interação com usuário
function processarDados() {
    const inputVazio = [...todosInputs].find(input => input.value.trim() === '')

    if (inputVazio) {
        alert('Preencha todos os campos para cadastrar a nota.')
        inputVazio.value = ''
        inputVazio.focus()
        return
    }

    const nome = inputNome.value
    const materia = inputMateria.value
    const nota = Number(inputNota.value)

    if (nota < 0 || nota > 10) {
        alert('O valor da nota deve estar entre 0 e 10.')
        inputNota.value = ''
        inputNota.focus()
        return
    }


    const notaDoAluno = [
        { nome: nome },
        { materia: materia },
        { nota: nota }
    ]

    const listaDeChaves = [
        "nome",
        "nota"
    ]


    const resultado = filtrarObjetos(notaDoAluno, listaDeChaves)

    const converterEmJSON = JSON.stringify(resultado, null, 2)

    mensagem.innerHTML = `
        <p>Novo array de objetos com as chaves especificadas:</p>
        <pre>${converterEmJSON}</pre>
    `


    esconderElementos.forEach(elemento => elemento.style.display = 'none')
    btnNovaNota.style.display = 'inline-block'
}


// Reset
function novaNota() {
    esconderElementos.forEach(elemento => elemento.style.display = 'inline-block')
    btnNovaNota.style.display = 'none'

    todosInputs.forEach(input => input.value = '')

    inputNome.focus()

    mensagem.innerHTML = ''
}

