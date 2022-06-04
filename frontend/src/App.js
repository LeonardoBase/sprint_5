import logo from './logo.svg';
import './App.css';
import Inicio from './components/inicio.js'
import ProductsLists from './components/productslists.js'
import {Link, Routes,Route} from 'react-router-dom'

function App() {
 
      return (
        <>
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
                  <Link className="nav-link collapsed" to="/productslists">
                  <i className="fas fa-fw fa-folder" />
                  <span >Lista de productos</span>
                </Link>
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
                <Routes>
                   <Route exact path='/productslists' element={<ProductsLists></ProductsLists>}></Route>
                   </Routes>

               <Routes> 
                   <Route path='/' element={<Inicio></Inicio>}> </Route>
                </Routes> 
              
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
       
        </>
      )
    }
  

export default App;
