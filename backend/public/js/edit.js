window.addEventListener('load', function(){
    
    
    const expresiones = {
        eusuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        enombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        edescription: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
        epassword: /^.{4,12}$/, // 4 a 12 digitos.
        ecorreo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        eprice: /^\d{3,20}$/, // 3 a 20 numeros.
        estock: /^\d{1,6}$/ // 1 a 6 numeros.
    }
    let nombre = document.getElementById("name");
    let price = document.getElementById("price");
    let stock = document.getElementById("stock");
    let category = document.getElementById("category");
    let materials = document.getElementById("materials");
    let description = document.getElementById("description");
    let imagen = document.getElementById("inputimage");
    
    
    let formulario = document.querySelector('#formedit')
    
    formulario.addEventListener('submit',(e)=>{
           e.preventDefault()
           let correcto1= document.querySelector('.formulario_error1')
           let correcto2= document.querySelector('.formulario_error2')
           let correcto3= document.querySelector('.formulario_error3')
           let correcto4= document.querySelector('.formulario_error4')
           let correcto5= document.querySelector('.formulario_error5')
           let correcto6= document.querySelector('.formulario_error6')
           let correcto7= document.querySelector('.formulario_error7')
     
          let validarFormulario= []
    
         
           if (nombre.value=='') {
               
                 correcto1.style.display='block'//block= que muestre el error
                 validarFormulario.push(1)
                
            }   if (nombre.value.length <4) {  correcto1.style.display='block'; validarFormulario.push(1) }
                
                else {
                correcto1.style.display='none'//none= todo bien
            }
         
            if (price.value =='') {
               
                correcto2.style.display='block'
                validarFormulario.push(1)
           }  else {
            correcto2.style.display='none'
           }
         
            if (category.value =='') {
               
             correcto4.style.display='block'
             validarFormulario.push(1)
             } else {
                correcto4.style.display='none'
            }
             if (materials.value =='') {
               
             correcto5.style.display='block'
             validarFormulario.push(1)
            } else {
                correcto5.style.display='none'
            }
            if (imagen.value =='') {
               
                correcto6.style.display='block'
                validarFormulario.push(1)
               } else {
                   correcto6.style.display='none'
               }
           
            if (description.value =='') {
            
            correcto7.style.display='block'
            validarFormulario.push(1)
            console.log(validarFormulario);
        
            } else {
                console.log(validarFormulario);
                correcto7.style.display='none'
            }
      
           
    
               if (validarFormulario.length==0) {
                   formulario.submit()
                   Swal.fire(
                    'Perfecto!!',
                    'Producto editado con exito!',
                    'success'
                  )
                   
               }
        
      
        })
    
 
    
    })
    