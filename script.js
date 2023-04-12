const contenedor = document.getElementById("contenedor")
fetch("./database.json")
.then(Response => Response.json())

.then(data =>{
    for (const producto of data) {
        contenedor.innerHTML += `
    <div class="phone" >
        <img class="imgPhone" src=${producto.imagen}/>
        <h2>$${producto.price}</h2>
        <h3>${producto.cuotas}</h3>
        <p>${producto.procesador}</p>
        <h4>${producto.name} -<br> ${producto.modelo}</h4>
        <button>Comprar</button>
       
    </div>        `
    }
})