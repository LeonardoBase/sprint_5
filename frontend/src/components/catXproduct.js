import React from 'react';
import '../App.js'
import { useState, useEffect, useRef } from 'react';

function CatXproduct () {
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
     <div className="col-lg-6 mb-4">						
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-success">Total de registros por categoria</h6>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body" id= "aro">
                                  Aro: <span className='category1'>{data.aro}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Cadenita: <span className='category2'>{data.cadenita}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Dije: <span className='category3'>{data.dije}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Pulsera: <span className='category4'>{data.pulsera}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Anillo:  <span className='category5'>{data.anillo}</span>
                                </div>
                              </div>
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
          
          </>

    );

 }

export default CatXproduct