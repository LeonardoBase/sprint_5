import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function CategoriesApi () {
      const [data, setData]= useState([])
      const allCategories= 'http://localhost:3000/productslists/categoriesApi'
      

    useEffect( () => { 
        async function fetchData() {
            await fetch(allCategories)
            .then(response => response.json())
            .then (json=> setData(json))
            .catch(error=> console.log(error))
             }
         fetchData()   
      }, [])   

      return (
            <>
                  <h3> {data.total_de_categorias}</h3>
            
            </>

      );

   }

export default CategoriesApi