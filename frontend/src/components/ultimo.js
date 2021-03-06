import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'


const allProducts= 'http://localhost:3000/productslists/api/lastProductsApi'
const allUsers= 'http://localhost:3000/users/api/lastUserApi'

async function getProducts() {

    try {
        const response= await axios({
            url: `${allProducts}`,
            method: 'GET'
        })
        return response
    } catch (e) {

    }
}
async function getUsers() {

  try {
      const response= await axios({
          url: `${allUsers}`,
          method: 'GET'
      })
      return response
  } catch (e) {

  }
}

function LastProducts () {
    
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

  useEffect( () => { 
      async function loadProducts() {
          const response= await getProducts()
          if (response.status===200) {
            setProducts(response.data.products)
          }
        }
        loadProducts()   
    }, [])   
    
    useEffect( () => { 
      async function loadProducts() {
          const response= await getUsers()
          if (response.status===200) {
            setUsers(response.data.users)
          }
        }
        loadProducts()   
    }, [])  
    console.log(users)

      return (

            <>
            <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Ultimo producto creado</h6>
                        </div>
                     <div className='last'>
                        <div> {products.name}</div> 
                        <div> {products.price}</div> 
                     </div>      
                        <div className="card-body">
                          <div className="text-center imgfront2">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imagenProducto" style= {{filter:"invert(1)"}} src={`http://localhost:3000/images/products/${products.image}`} alt="image dummy" />
                          </div>
                         
                        </div>
                          <a target="_blank" rel="nofollow" href={`http://localhost:3000/productslists/details/${products.id}`}>Ver detalles de producto</a>
                        
                      </div>
            </div>

                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-warning">Ultimo usuario creado</h6>
                        </div>
                      <div className='last'>  
                        <div> {users.name}</div> 
                        <div> {users.email}</div> 
                        <div className="card-body">
                      </div>   
                          <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imgfront1" style={{filter:"invert(1)"}} src={`http://localhost:3000/images/users/${users.image}`} alt="image dummy" />
                          </div>
                      
                        </div>
                      </div>
                    </div>
            
            </>

      );

   }

export default LastProducts