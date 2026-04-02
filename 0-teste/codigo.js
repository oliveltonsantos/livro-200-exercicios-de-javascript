const decoradores = [
  (texto) => `💪 ${texto}`,
  (texto) => `${texto} 🤳`,
  (texto) => `<p>${texto}</p>`
]

let resultado = 'Olá'

decoradores.forEach(func => {
  resultado = func(resultado)
})

console.log(resultado)