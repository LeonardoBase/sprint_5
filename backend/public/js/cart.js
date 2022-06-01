const carrito = document.getElementById("carrito");
const products = document.getElementById("lista-products");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");



cargarEventListeners()

function cargarEventListeners() {
  products.addEventListener("click", compraProductos);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function compraProductos(e) {
    
    if(e.target.classList.contains('agregarcarrito')){
        const producto= e.target.parentElement.parentElement
        leerDatosProducto(producto)
        
    }
}


function leerDatosProducto(producto) {
    let infoProducto= {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('h2').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
    }
    insertarCarrito(infoProducto)   
   
}
 

function insertarCarrito (producto) {
    let row= document.createElement('tr')
    row.innerHTML= `
      <td>
            <img src="${producto.imagen}" width=100%>
      </td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
       </td>
    `;
    listaProductos.appendChild(row)
    guardarProductoLocalStorage(producto)
    

}

function eliminarProducto(e) {
    

    let producto
    let productoId

    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove()
            producto= e.target.parentElement.parentElement
            productoId= producto.querySelector('a').getAttribute('data-id')
    }
    eliminarProductoLocalStorage(producto)
}

function vaciarCarrito() {
    while(listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild)
    }

    vaciarLocalStorage()
    
    return false
}

function guardarProductoLocalStorage(producto) {
    let productos

    productos=obtenerProductosLocalStorage()
    productos.push(producto)

    localStorage.setItem('productos', JSON.stringify(productos))
}

function obtenerProductosLocalStorage() {
    let productoLS
    if (localStorage.getItem('productos') === null) {
        productoLS=[]
    } else {
        productoLS = JSON.parse(localStorage.getItem('productos'))
    }
    return productoLS
}

function leerLocalStorage() {
    let productoLS
    productoLS=obtenerProductosLocalStorage()
    productoLS.forEach(producto => {
        const row= document.createElement('tr')
        row.innerHTML =`
        <td>
            <img src="${producto.imagen}" width=100>
      </td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}>X</a>
       </td> 
        `
        listaProductos.appendChild(row)
    });
}

function eliminarProductoLocalStorage(producto) {
    let productoLS;
    productoLS= obtenerProductosLocalStorage()

    productoLS.forEach(function(productoLS, index) {

        if(productoLS.id===producto) {
            productoLS.splice(index,1)
        }      
    });
    localStorage.setItem('productos',JSON.stringify(productoLS))
}

function vaciarLocalStorage() {
    localStorage.clear()
}