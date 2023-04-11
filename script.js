


const formularioHTML = document.getElementById("form")
formularioHTML.addEventListener("submit", (event ) =>{
    event.preventDefault()
    console.log(event)
    console.log(formularioHTML.name.value)
    console.log(formularioHTML.correoElectronico.value)
    formularioHTML.reset()
})

fetch("./productos.json")
    .then(response => response.json())
    .then(data => {

        for(const producto of data){
            contenedor.innerHTML += `
            <div>
                <h2>${producto.name}</h2>
                <p>Price: $${producto.price}</p>
            </div>
            `
        }
    })

