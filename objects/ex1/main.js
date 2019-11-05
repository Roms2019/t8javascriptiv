class Botao {
    constructor(texto, cor, tamanho, icone) {
        this.texto = texto
        this.cor = cor
        this.tamanho = tamanho
        this.icone = icone
    }
    desenhaBotao() {
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
        if (this.icone) {
            //<i></i>
            const tagIcone = document.createElement("i")
            tagIcone.setAttribute("class", `fas ${this.icone}`)
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {
    novoBotao.innerHTML= this.text
}
document.getElementById('buttons-section').appendChild(novoBotao)
}
}

const botaoVerde = new Botao("Envia", "verde", "pequeno", "fa-plus")
botaoVerde.desenhaBotao()

const botaoRoxo = new Botao("Botao Novo", "roxo", "grande", "fa-infinity")
botaoRoxo.desenhaBotao()

const BotaoAzul = new Botao("Botao Novo", "azul", "grande", "fa-infinity")
BotaoAzul.desenhaBotao()

const BotaoRosa = new Botao("Botao Novo", "rosa", "pequeno", "fa-exclamation")
BotaoRosa.desenhaBotao()

const BotaoVerde2 = new Botao("Botao Novo", "verde2", "médio", "fa-cat")
BotaoVerde2.desenhaBotao()

const BotaoAmarelo = new Botao("Botao Novo", "amarelo", "grande", "fa-boombox")
BotaoAmarelo.desenhaBotao()

const BotaoMarrom = new Botao("Botao Novo", "marrom", "grande", "fa-play")
BotaoMarrom.desenhaBotao()

const BotaoVermelho = new Botao("Botao Novo", "vermelho", "pequeno", "fa-atom")
BotaoVermelho.desenhaBotao()