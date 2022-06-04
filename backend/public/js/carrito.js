const carrito = document.getElementById("carrito");
const listaProductos = document.querySelector("#lista-carrito tbody");
const listaProductosView = document.querySelector("#lista-carritoview tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const vacio= document.querySelector(".vacio");
const priceTotal= document.querySelector('#price-total')
const totalHeader= document.querySelector('#total-header')
const contadorCarrito= document.getElementById('contadorCarrito')

const carritoCount = obtenerProductosLocalStorage()

cargarEventListeners()

function cargarEventListeners() {
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
  
}


function eliminarProducto(e) {
    
   
    let producto
    let productoId

    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove()
            producto= e.target.parentElement.parentElement
            productoId= producto.querySelector('a').getAttribute('data-id')
    }
    eliminarProductoLocalStorage(productoId)
}

function vaciarCarrito() {
    while(listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild)
    }

    vaciarLocalStorage()
    
    return false
}
//total
function sumaTotal() {
    const nPrecio = Object.values(carritoCount).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)
    return nPrecio
  }
  



function leerLocalStorage() {
    let productoLS;

    productoLS = obtenerProductosLocalStorage();

    productoLS.forEach(producto => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td class="lleno">
            <img src="${producto.imagen}" width=100>
      </td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}$</td>
      <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
       </td> 
        `;
        

        listaProductos.appendChild(row);
       

    });

    contadorCarrito.innerText= carritoCount.length
    totalHeader.innerText= '$'+sumaTotal()
            

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

function eliminarProductoLocalStorage(productoId) {
    let productoLS;
    productoLS= obtenerProductosLocalStorage()

   
    productoLS=productoLS.filter(producto => producto.id !==productoId )

    localStorage.setItem('productos',JSON.stringify(productoLS))
}


function vaciarLocalStorage() {
    localStorage.clear()
}


let productosLS= obtenerProductosLocalStorage()
    
    // footer.innerHTML  = ''
    if (Object.keys(productosLS).length <0) {
        vacio.style.display = "block"
    }
    
  

    

    