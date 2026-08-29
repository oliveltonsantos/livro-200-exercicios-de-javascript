function filtrarPorChaves(arrayObjetos, chaves) {
    return arrayObjetos.map(obj => {
        let novoObj = {};

        chaves.forEach(chave => {
            if (obj[chave] !== undefined) novoObj[chave] = obj[chave];
        });
        return novoObj;
    });
}

// Testes
const data = [{ nome: "Lucas", idade: 30, cidade: "São Paulo" }, { nome: "Ana", idade: 25 }];
console.log(filtrarPorChaves(data, ["nome", "cidade"])); // [{ nome: "Lucas", cidade: "São Paulo" }, { nome: "Ana" }]