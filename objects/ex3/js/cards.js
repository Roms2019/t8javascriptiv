class Card{
    constructor(receita) {
        this.receita = receita
    }
    render() {
        const Card = `<div class="card" >
            <img class="imagem" src=${this.receita.imagem} />
            <h2>${this.receita.titulo}</h2>
        <p class="ingredientes">${this.receita.ingredientes}</p>
        </div>`
        document.querySelector('.cards').insertAdjacentHTML('beforeend', Card)
        }
}
receita.map((receita) => {
        new Card(receita).render()
    })