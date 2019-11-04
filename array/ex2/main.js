const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

//const result = list.find( => obj.name)

const validacao = (nome => {
    if(nome.trim() === '') trhow 'O campo está vazio'
}

    const estaNaLista = nomesNoTole.find(presente) => {
    return nome.toLowerCase() === presente.toLowerCase()
})
if (estaNaLista) {
    console.log("To na lista")
    return
}
throw `${nome} não estava no role`
document.getElementById('form-do-role').addEventListener
    ('submit', function (event) {
        event.preventDefault()
        let valorCampo = document.getElementById("nome").value
        if (document.getElementById("nome").classList.contains("is valid")) {
            document.getElementById("nome").classList.remove("is valid") //falta completar
        }
        try {
            validação(valorCampo)
        } catch (erro) {
            document.getElementById()
            console.log(DEU RUIM")
        })


