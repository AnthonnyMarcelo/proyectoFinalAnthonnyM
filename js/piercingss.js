const productos = [
    {
        type:"tattoo",
        nombre: "ESPALDA",
        precio: 200,
        stock: true,
        imagen: "https://i.pinimg.com/564x/32/dc/fe/32dcfe2b693720f50f5cd126c94e2bbf.jpg",
        "id": 1
    },
    {
        type:'tattoo',
        nombre: "ESPALDA",
        precio: 100,
        stock: true,
        imagen: "https://i.pinimg.com/736x/82/74/1e/82741e480500bddccbce7bf769e61309.jpg",
        "id": 2
    },
    {
        type:'tattoo',
        nombre: "PIERNAS",
        precio: 500,
        stock: true,
        imagen: "https://i.pinimg.com/564x/a0/ca/68/a0ca681c3ba8c8847140427e5c373daf.jpg",
        "id": 3
    },
    {
        type:'tattoo',
        nombre: "PECHO",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/564x/a1/da/e5/a1dae50a4830ebd5e50eef077934940c.jpg",
        "id": 4
    },
    {
        type:'tattoo',
        nombre: "ESPALDA",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/236x/e9/4f/07/e94f07c5e38e7dbe7a4baaa337daa78d.jpg",
        "id": 5
    },
    {
        type:'piercing',
        nombre: "SEPTUM",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/564x/8e/2c/f1/8e2cf13b3694a8fbbcaa3ee76f70a446.jpg",
        "id": 6
    },
    {
        type:'piercing',
        nombre: "SEPTUM",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/564x/92/7c/27/927c2735f18dd11428da6a2ccf7d7cd1.jpg",
        "id": 7
    },
    {
        type:'piercing',
        nombre: "SEPTUM",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/564x/33/67/f0/3367f0cfd17fb1c473da3ab5d8a99c63.jpg",
        "id": 8
    },
    {
        type:'EXPANSIONES',
        nombre: "EXPANSIONES",
        precio: 170,
        stock: true,
        imagen: "https://i.pinimg.com/564x/e0/d5/95/e0d595e086f52dbe4ab1e95204769647.jpg",
        "id": 9
    },
];
const container = document.getElementById("container");
const btnCarrito = document.getElementById("btn-carrito");
const divCarrito = document.getElementById("carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
    const videojuegoAAgregar = productos.find(el => el.id === id);
    if (carrito.some(element => element.id === videojuegoAAgregar.id)) {
        alert("YA LO AGREGASTE");
    } else {
        divCarrito.innerHTML = "";
        carrito.push(videojuegoAAgregar);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        carrito.forEach(el => crearCard(el, "carrito"));
    };
};

function quitarDelCarrito(id){
    divCarrito.innerHTML = "";
    let nuevoCarrito = carrito.filter(el => el.id !== id);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    carrito.forEach(el => crearCard(el, "carrito"));
};

productos.forEach(el => {
    const card = document.createElement("div");
    card.className = "card"

    if(!el.stock){
        card.className += "card-sin-stock"
    }

    const titulo = document.createElement("p");

    if(el.stock){
        titulo.innerText = el.nombre;
    } else {
        titulo.innerText = el.nombre + "(SIN STOCK)";
    }
    
    const precio = document.createElement("p");
    precio.innerText = `$${el.precio}`;
    
    const imagen = document.createElement("img");
    imagen.src = el.imagen;
    imagen.alt = "NOIMG";
    imagen.className = "img"
    
    card.appendChild(titulo);
    card.appendChild(precio);
    card.appendChild(imagen);
    
    container.appendChild(card);
    
    

})
