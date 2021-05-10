function criarPessoa (nome, sexo, idade){
    return {
        nome,
        sexo,
        idade
    }

}

const pessoa3 = {
    nome: 'Silva',
    sobrenome: "Maciel",
    idade: 43,
    fala(){
        console.log(`${this.nome} esta falando oi`);
    }

}

const pessoa1 = criarPessoa("Sivanilson", "M", 43);
console.log(pessoa1);
const pessoa2 = criarPessoa("Cristiane", "F", 41);
console.log(pessoa2);
pessoa3.fala()