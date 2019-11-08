const cepInput = document.getElementById("cep")
const titulo = document.getElementById
    ("titulo")
const descricao =
    document.getElementById
        ("descricao")
cosnt btnSubmit =
    document.getElementById
        ("btn-submit")
    
b
})

const informacao = info => {
    document.getElementById("logradouro").value=(info.logradouro)
    document.getElementById("complemento").value=(info.complemento)
    document.getElementById("bairro").value=(info.bairro)
    document.getElementById("localidade").value=(info.localidade)
    document.getElementById("uf").value = (info.uf)
    
    
}
const logradouroInput = document.getElementById("logradouro")
//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs
            informacao(json)
            console.log(json)

        })
    }
    
    preencheInputs = objeto => {
        logradouroInput.value = objeto.logradouro
        complementoInput.value = objeto.bairro
        localidadeInput.value =objeto.localidade

    }