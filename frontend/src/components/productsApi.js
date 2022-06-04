import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function ProductsApi () {
    const [data, setData]= useState([])
    const allProducts= 'http://localhost:3000/productslists/api'

  useEffect( () => { 
      async function fetchData() {
          await fetch(allProducts)
          .then(response => response.json())
          .then (json=> setData(json))
          .catch(error=> console.log(error))
           }
       fetchData()   
    }, [])   

    return (
          <>
                <h3> {data.count}</h3>
          
          </>

    );

 }

export default ProductsApi