const carSection = document.getElementById
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano maior",
    descrição: "Sem descrição",
    imagem: "http://via.placeholder.com/250x500",
    link: "https://www.astrolink.com.br"
    }
('cards-section')
fetch('tarot.json').then(response => {
    return response.json()
}).then(json => console.log(json))

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
cardSection.innerHTML = new Card.render()
    cardSection.innerHTML = novaCarta
//cardSection.innerHTML = new Card(carta).render()    
}

fetch('tarot.json').then(response => {
    return response.json()
}).then(json => {
    console.log(json)
    renderizaCarta(json[0])
})

//Fazer função para tirar uma nova carta aleatória
selecionarCartaAleatoria = cartas => {
    cartas[0]
        cartas[1]
        return cartas[?numeroAleatorio]
}

//Transformar nosso fetch num async await

async function carregaCartas() {
    try {
        const response = await fetch('tarot.json')
        console.log(response)
        if (!response.ok) throw `com o status: $
        {response.status}`
        const json = await response.json()
        renderizaCarta(selecionaCartaAleatoria(json)
    } catch (e) {
        renderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisição falhou:
        ${e}`
    }        
    )
}
carregaCartas()
novaCarta = () => {
    carrregarCartas()
    
}

// Quando não carregar, teremos como expor informações fixas.

