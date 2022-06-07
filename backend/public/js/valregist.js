const password2= document.getElementById('password2')
const password= document.getElementById('password')
const formulario= document.getElementById('formulario')
const imageRegister= document.getElementById('imageRegister')


password2.addEventListener('keyup', function(e) {

    const correcto=document.querySelector('.formulario_error1')
   
   
    if (password2.value==password.value) {

        correcto.style.display='none'//none= todo bien
    
    }
    else {
        correcto.style.display='block'
    }
})

formulario.addEventListener('submit',function(e){
    e.preventDefault()
    const correcto2=document.querySelector('.formulario_error2')
    
    if (imageRegister.value.length==0) {
        correcto2.style.display='block'

    } else {
        formulario.submit()
        Swal.fire(
            'Perfecto!!',
            'Cuenta creada!',
            'success'
          )
    }
   

})
