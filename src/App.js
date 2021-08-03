import React from 'react'
import NavBar from './components/NavBar';
import './style.css';
import Footer from './components/footer'
import Productos from './components/productos'
import Home from './components/home'
import Contacto from './components/contactos'





export default function App() {
  return (
    <div>
      <NavBar />
      <div className="tab-content" id="nav-tabContent">
        <Home />
        <Productos />
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}