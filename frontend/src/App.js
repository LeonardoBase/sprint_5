import logo from './logo.svg';
import './App.css';
import productsApi from './components/productsApi.js'
import usersApi from './components/usersApi';


function App() {
 
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Corporate Dashboard - Admin</title>
          {/* Custom fonts for this dashboard */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
          {/* Custom styles for this dashboard */}
          <link href="assets/css/app.css" rel="stylesheet" />
          <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion aywey" id="accordionSidebar">
              {/* Sidebar - Brand */}
              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                  <i className="fas fa-chart-line" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
              </a>
              {/* Divider */}
              <hr className="sidebar-divider my-0" />
              {/* Nav Item - Dashboard */}
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-tachometer-alt" />
                  <span>Dashboard</span></a>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">Actions</div>
              {/* Nav Item - Pages */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="/productslists">
                  <i className="fas fa-fw fa-folder" />
                  <span >Lista de productos</span>
                </a>
              </li>
              {/* Nav Item - Charts */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-chart-area" />
                  <span>Charts</span></a>
              </li>
              {/* Nav Item - Tables */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-table" />
                  <span>Tables</span></a>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  {/* Sidebar Toggle (Topbar) */}
                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                  </button>
                  {/* Topbar Navbar */}
                  <ul>
                    
                    {/* Nav Item - User Information */}
                   
                  </ul>
                </nav>
                {/* End of Topbar */}
                {/* Begin Page Content */}
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
                              <div className="h5 mb-0 font-weight-bold text-gray-800 total-products">XXX</div>
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
                              <div className="h5 mb-0 font-weight-bold text-gray-800 categories">XXX</div>
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
                              <div className="h5 mb-0 font-weight-bold text-gray-800 total-users">XXX</div>
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
                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Ultimo producto creado</h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imagenProducto" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy" />
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                          <a target="_blank" rel="nofollow" href="/">Ver detalles de producto</a>
                        </div>
                      </div>
                    </div>
                     {/* Last User in DB */}
                     <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-warning">Ultimo usuario creado</h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imagenUsuario" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy" />
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                          <a target="_blank" rel="nofollow" href="/">Ver detalles de usuario</a>
                        </div>
                      </div>
                    </div>
                    {/* Categories in DB */}
                    <div className="col-lg-6 mb-4">						
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-success">Total de registros por categoria</h6>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Aro: <span className='category1'>XX</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Cadenita: <span className='category2'>XX</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Dije: <span className='category3'>XX</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Pulsera: <span className='category4'>XX</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Anillo:  <span className='category5'>XX</span>
                                </div>
                              </div>
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © Dashboard 2020</span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
        </div>
      );
    }
  

export default App;
