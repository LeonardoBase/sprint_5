import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'


const allProducts= 'http://localhost:3000/productslists/api/productslists'

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

function Productslists () {
    
    const [products, setProducts] = useState([])
   

  useEffect( () => { 
      async function loadProducts() {
          const response= await getProducts()
          if (response.status===200) {
            setProducts(response.data.products)
          }
        }
        loadProducts()   
    }, [])   

    console.log(products);

    return (
          <>
          <ul>
                {products.map((producto,index)=> { 
                    return <li>Nombre: {`${producto.name} ${producto.price}`}</li>
                    
                })}
          
          </ul>        


          </>

    );

 }

export default Productslists