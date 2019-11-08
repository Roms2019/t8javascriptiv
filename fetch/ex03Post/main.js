const btnSubmit = document.getElementById("btn-submit")

bnSubmit.addEventListener('click', function(event){
    event.preventDefault()
    let body = JSON.stringfy({
        nome: "",
        email:"",
        bodypostID:""
        
    })
    fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        "content-type": "application/json"
    },
    body 
    }).then(response => response.json()).then(json => console.log(json))
})
        