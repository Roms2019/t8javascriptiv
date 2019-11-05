/*console.log(crianca4)
crianca4.dataNascimento = 'batata'
console.log(crianca4.dataNascimento)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj5 = Object.assign(dest, o1, o2)
console.log(ob5)

const produto = Object.preventExtensions({
    nome: "Notebook",
    preco: 2,
    tag: 'promocao'
})

produto.desconto = 100
console.log(produto)
produto.nome = "banana"
console.log(produto)
console.log(Object.isExtensible(produto))
console.log(Object.isExtensible(obj5))
delete produto.tagconsole.log(produto)

const pessoa7 = {
    nome: "Claudia",
    idade: 32*/

/*    console.log(pessoa7)
    Object.freeze(pessoa8)
    pessoa8.sobrenome = "Rodrigues"
    console.log(pessoa8)
    delete pessoa8.nomeconsole.log(pessoa8)
pessoa8.nome = "Fernanda"
console.log(pessoa)
}*/


/*function Pessoa(nome, idade, corFavorita) {
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

let mae = new Pessoa("Ana", 35, "vermelho")
let tio = new Pessoa("Cleber", 49, "rosa")

Pessoa.protootype.getName = function () {
    return 'Onome da pessoa é: ${this.nome}'
}
console.logdir(Pessoa)

console.log(mae.apresentacao())
console.log(tio.apresentacao())
mae.apresentacao = function () {
    return 'O nome da mãe é: ${this.nome}'
}
console.log(mae.apresentacao())*/

//nome, sobrenome, materia
//funao construtora

/*function Professor(nome, idade, materia) {
    this.nome = nome
    this.idade = idade
    this.materia = materia
}
//let Professor = Professor(Laís, 35, Javascript)
Professor.prototype.dizMateria = function () {
    return `A materia é ${this.materia}`
}

const js3 = new Professor("Cintia", "Fumi", "Javascript 3")
console.log(js3.dizMateria()
const js4 = new Professor("Lydia, "Rodrigues", "Javascript 4")
console.log(js4(js4.dizMateria())

js4.dizMateria = function () {
    return'A professora é: ${this.nome} e a materia é $ {this.materia}
}*/

const avo = { attr1: 'A' }
const mae = { _proto_: avo, attr2: 'B', attr3: 'E' }
const filha = { _proto_: mae, attr3: 'C' }
console.log(filha.attr1, filha.attr2, filha.attr3)


class Avo
class Mae extends Avo {
    constructor(sobrenome, profissao = "cineastra") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filha extends Mae {
    constructor() {
        super('Silva')
    }
}

const novaFilha = new Filha
novaFilha.profissao = "Atriz"