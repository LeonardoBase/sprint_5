import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function UsersApi () {
      const [data, setData]= useState([])
      const allusers= 'http://localhost:3000/users/api'
      const userxid= 'http://localhost:3000/users/api/:id'

    useEffect( () => { 
        async function fetchData() {
            await fetch(allusers)
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

export default UsersApi