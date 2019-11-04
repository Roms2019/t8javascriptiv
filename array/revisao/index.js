const comidas = ['lasanha', 'batata', 'tomate']

console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log (`Na posicao ${posicao} temos a comida: ${comida}`)
})

//concat faz cópia do array e adiciona o elemento que agente passa como

let outrasComidas = comidas.concat("joló")
console.log('comidas', comidas)
console.log('outras comidas', outrasComidas)

// join - cria uma string do array e ele utiliza o argumento como separado

let stringDoArray = comidas.join('!')
console.log(stringDoArray)
console.log('stringDoArray')

console.log(comidas.shift())
console.log(comidas)

//pop -> arranca o último item do array e retorna o que ele deletou
//modifica permanentemente o array
console.log(comidas.pop())
console.log(comidas)

//adiciona comidas.unshift('Macarrão')
//modifica permanentemente
console.log('unshift')
console.log(comidas)

comidas.splice(1,0, 
    
)

let mapArray = comidas.map((comida => `${comida`})
console.log(mapArray)
let teste = comidas.forEach((comida)=> `${ comida } boa`)
console.log(teste)
const numeros = [1,2,3,4,5]
let numerosDobrados = numeros.map((numero)=>numero*2)
console.log(numerosDobrados)

let arrayProcura = comidas.filter((comida)=> comida === 'Batata')
console.log(arrayProcura)

let juntaComida = comidas.reduce(esq, dir) => {
    return `${esq} e ${dir}
})
console.log(juntaComida)

let somaNumero = numeros.reduce

menosQueDez = (algumValor) => algumValor < 10
console.log9numeros.every(numero => menosQueDez)







