function criarCarro(modelo, marca = "Desconhecido", ano = new Date(). getFullYear()) {
return { marca, modelo, ano };
}
// Testes
console.log(criarCarro("Civic")); // { marca: "Desconhecido", modelo: "Civic", ano: 2023 }
console.log(criarCarro("Civic", "Honda", 2020)); // { marca: "Honda", modelo: "Civic", ano: 2020}