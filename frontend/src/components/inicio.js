import React from 'react';
import '../App.js'
import productsApi from './categoriesApi.js'
import UsersApi from './usersApi.js';
import CategoriesApi from './categoriesApi.js'
import ProductsApi from './productsApi.js'
import CatXproduct from './catXproduct'
import Ultimo from './ultimo'


function Inicio () {
    

    return (
          <>
                <div className="container-fluid">
                  {/* Page Heading */}

               
                  
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Estadisticas Filia Jewelry</h1>
                  </div>
                  {/* Content Row */}
                  
                   
                  <div className="row">
                    {/* Amount of Products in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Productos</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800 total-products"><ProductsApi/></div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* $$$ of all products in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Categorias</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800 categories"><CategoriesApi/></div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-hive text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Amount of users in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios registrados
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800 total-users"><UsersApi /></div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-user-check fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    {/* Last Product in DB */}
                    <Ultimo/>
                     {/* Last User in DB */}
                     
                    {/* Categories in DB */}
                    <CatXproduct/>
                  </div>
                </div>
                 
          
          </>

    );

 }

export default Inicio