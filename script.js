fetch("./database.json")
.then(Response => Response.json())

.then(data =>{
    for (const producto of productos) {
        contac.innerHTML += `
        <div>
        <h2>${producto.name}</h2>
        <h2>${producto.modelos}</h2>
        <p>${producto.price}</p>
        `
    }
})