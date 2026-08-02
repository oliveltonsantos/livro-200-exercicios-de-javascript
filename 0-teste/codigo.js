function filtrarNumeros (...args) {
return args.filter(arg => typeof arg === "number");
}
// Testes
console.log(filtrarNumeros(1, "a", 3, "b", 5)); // [1, 3, 5]