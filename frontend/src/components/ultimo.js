import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function Ultimo () {
      const [data, setData]= useState([])  
      const ultimoProduct= "http://localhost:3000/productslists/api"
      const ultimoUser= "http://localhost:3000/users/api"
   
      

    useEffect( () => { 
        async function fetchData() {
            await fetch(ultimoProduct)
            .then(response => response.json())
            .then (json=> setData(json))
            .catch(error=> console.log(error))
             }
         fetchData()   
         {}
      }, [])   
      useEffect( () => {
        //    let usuariosArray = Object.values(data.productos)
    //   let ultimoUsuario = usuariosArray [usuariosArray.length - 1]
    
    let usuariosArray2 = typeof(usuariosArray)
    console.log(data.productos)
      },[])
   


      return (

            <>
            <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Ultimo producto creado</h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imagenProducto" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy" />
                          </div>
                          <p></p>
                          <a target="_blank" rel="nofollow" href="/">Ver detalles de producto</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-warning">Ultimo usuario creado</h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imagenUsuario" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy" />
                          </div>
                          <p>descripcion</p>
                          <a target="_blank" rel="nofollow" href="/">Ver detalles de usuario</a>
                        </div>
                      </div>
                    </div>
            
            </>

      );

   }

export default Ultimo