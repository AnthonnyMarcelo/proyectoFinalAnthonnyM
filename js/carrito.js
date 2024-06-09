const btnContainer = document.createElement("div")
btnContainer.className = "btn-container"

const btnMostrarProductos = document.createElement("button")
btnMostrarProductos.innerText = "Mostrar productos"
btnMostrarProductos.className = "btn-carrito"
btnMostrarProductos.onclick = ()=> mostrarProductos(productos);

const btnMostarCarrito = document.createElement("button")
btnMostarCarrito.innerText = "Mostrar carrito"
btnMostarCarrito.className = "btn-carrito"
btnMostarCarrito.onclick = ()=> mostrarCarrito(carrito);

const btnAgregarProductos = document.createElement("button")
btnAgregarProductos.innerText = "Finalizar compra"
btnAgregarProductos.className = "btn-carrito"
btnAgregarProductos.onclick = () => finalizarCompra(true)
    .then((true));

btnContainer.appendChild(btnMostrarProductos)
btnContainer.appendChild(btnMostarCarrito)
btnContainer.appendChild(btnAgregarProductos)

document.body.appendChild(btnContainer)

const container = document.createElement("div");
container.className = "container"
document.body.appendChild(container)

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];

function alertCompra (){
    Swal.fire({
        title: "Felicidades has sumado un producto al carrito.",
        text: "En la seccion mostrar carrito veras los disenos.",
        icon: "success"
      });
}

function alertStock (){
    Swal.fire({
        title: "Solo puede elegir un tatuaje/sesion a la vez",
        text: "No es recomendable hacerse mas de 1",
        icon: "info"
      });
}

function alertEliminarProducto (){
    Swal.fire({
        title: "El producto ha sido eliminado del carritoo",
        text: "Espero encuentre algo de su agrado",
        icon: "success"
      });

}

function alertFin (){
    Swal.fire({
        title: "Su compra ha sido terminada, Muchas gracias!",
        text: "Para reiniciar su carrito solo debe actualizar la, pagina hasta luego!",
        icon: "success"
      });
    
}


function crearCard(nuevoArray){
    nuevoArray.forEach(el=> {
        const card = document.createElement("div")
        card.className = "card"
        
        const nombre = document.createElement("p")
        nombre.className = "nombre"
        nombre.innerText = el.nombre

        const precio = document.createElement("p")
        precio.className = "nombre"
        precio.innerText = "$" + el.precio
        
        const imagen = document.createElement("img")
        imagen.className = "imagen"
        imagen.src = el.imagen
        
        const agregar = document.createElement("button")
        agregar.className = "btn-fijo"
        agregar.innerText = "Agregar al carrito"
        agregar.onclick = () => agregarCarritoNuevo(el.id);

        const quitar = document.createElement("button")
        quitar.className = "btn-fijo"
        quitar.innerText = "Quitar del Carrito"
        if(carrito.includes(el)){
            quitar.onclick = () => quitarDelCarrito(el.id, el.nombre);
        }

        card.appendChild(nombre)
        card.appendChild(precio)
        card.appendChild(imagen)
        card.appendChild(agregar)
        card.appendChild(quitar)
        container.appendChild(card);
    });
}

function mostrarProductos(){
    container.innerHTML = "";
        const nuevoArray = productos.slice(0,9)
        crearCard(nuevoArray);           
}

function mostrarCarrito(){
    container.innerHTML = "";
    const nuevoCarrito = carrito.slice(carrito)
    crearCard(nuevoCarrito);
};

function agregarCarritoNuevo(id){

    const sumarCarrito = productos.find(el => el.id === id);

    if (carrito.some(el=> el.id === id)){
        alertStock ();
    }else{
        carrito.push(sumarCarrito);
        localStorage.setItem("carrito", JSON.stringify("carrito"))
        alertCompra ();
    }
};

function quitarDelCarrito(id,nombre){
    const carritoNuevo = carrito.filter(el=> el.id !== id);
    carrito = carritoNuevo;
    localStorage.setItem("carrito", JSON.stringify(carritoNuevo))
    mostrarCarrito(2);
    alertEliminarProducto () ;
};

const finalizarCompra = () => {
    alertFin ()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(localStorage.clear(), + (container.innerHTML = ""));
        }, 5000);
    })
}

let arraySemas = [];

fetch("./js/data.json")
.then(response => response.json())
.then(data => {
    data.forEach(el => {
        mostrarProductos(el)
         arraySemas.push(el);
    })
})

setTimeout(() => {
    console.log(arraySemas)
}, 1200);
