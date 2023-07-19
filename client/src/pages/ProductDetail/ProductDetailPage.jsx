import React from 'react';
import './ProductDetailPage.css';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';


export const ProductDetailPage = () => {
  const { id } = useParams();



  return (
    <div className="product-page-container">
      <Header />
      
      <div className="product-detail-wrap">
        
        <div className="content-img">
        <img className="img-embed" src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        </div>
        
        <div className="content-description">
        <h2 className="product-section-title">Paquete básico</h2>
        <p>Texto descripción paquete básico</p>
        <button>Añadir al carrito</button>
        <button>Contacta con nosotros</button>
        <ul>
          <li>Caracteristica 1</li>
          <li>Caracteristica 2</li>
          <li>Caracteristica 3</li>
          <li>Caracteristica 4</li>
          <li>Caracteristica 5</li>
        </ul>

        <div className="products">

         </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};


