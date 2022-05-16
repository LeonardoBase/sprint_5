window.addEventListener("load", function () {
  let eusuario = /^[a-zA-Z0-9\_\-]{1,16}$/; // Letras, numeros, guion y guion_bajo
  let enombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
  let edescription = /^[A-Za-z0-9 ]+$/
  let epassword = /^.{4,12}$/; // 4 a 12 digitos.
  let ecorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let eprice = /^\d{3,20}$/; // 3 a 20 numeros.
  let estock = /^\d{1,6}$/; // 1 a 6 numeros.

  let formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("name");
    let price = document.getElementById("price");
    let stock = document.getElementById("stock");
    let materials = document.getElementById("materials");
    let description = document.getElementById("detail");
    let imagen = document.getElementById("inputimage");

    let correcto1 = document.querySelector(".formulario_error1");
    let correcto2 = document.querySelector(".formulario_error2");
    let correcto3 = document.querySelector(".formulario_error3");
    let correcto4 = document.querySelector(".formulario_error4");
    let correcto5 = document.querySelector(".formulario_error5");
    let correcto6 = document.querySelector(".formulario_error6");
    let correcto7 = document.querySelector(".formulario_error7");

    let validarFormulario = [];
  
      
    if (enombre.test(nombre.value)) {             
      correcto1.style.display = "none"; //none= todo bien/lo oculta
      
    } else {
      correcto1.style.display = "block"; //block= que muestre el error
      validarFormulario.push(1);
    }                           
    if (eprice.test(price.value)) {
      
      correcto2.style.display = "none";
      
    } else {
      correcto2.style.display = "block";
      validarFormulario.push(1);
    }
    if (estock.test(stock.value)) {
      correcto3.style.display = "none";
    } else {
      correcto3.style.display = "block";
      validarFormulario.push(1);
      
    }
    if (category.value == "") {
      correcto4.style.display = "block";
      validarFormulario.push(1);
    } else {
      correcto4.style.display = "none";
    }
    if (materials.value == "") {
      correcto5.style.display = "block";
      validarFormulario.push(1);
    } else {
      correcto5.style.display = "none";
    }
    if (imagen.value == "") {
      correcto6.style.display = "block";
      validarFormulario.push(1);
    } else {
      correcto6.style.display = "none";
    }
    if (edescription.test(description.value)) {
      correcto7.style.display = "none";
      
    } else {
      correcto7.style.display = "block";
      validarFormulario.push(1);
      console.log([validarFormulario])
     
    }

    if (validarFormulario.length == 0) {
      formulario.submit();
    }
  });

  // --------------------------------------
});
