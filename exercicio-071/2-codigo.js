const inputIdade = document.getElementById('idade')
const btnReceberIdade = document.querySelector('.btnReceberIdade')
const btnNovaIdade = document.querySelector('.btnNovaIdade')
const resultado = document.querySelector('.resultado')

function receberIdade() {
    if (inputIdade.value === '') {
        alert('Digite a idade do cão para converter.')
        inputIdade.focus()
    }

    


}


