import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function usersApi () {

    useEffect( () => { 
        
            fetch('http://localhost:3000/users/api')
            .then(response => {response.json})
            .then (data)



      }, [] )   

}

export default usersApi