import React from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';
import SearchBar from '../../components/ProductCard/SearchBar';
export const ProductPage = () => {
  // const { id } = useParams();

  // Lógica para obtener la información del producto según el ID

  return (
    <div className="product-page-container">
      <Header />
      <div className="product-section">
        <h2 className="product-section-title">Nuestras experiencias más... espaciales</h2>
        <div className="products">
          <SearchBar />

        </div>
      </div>
      <Footer />
    </div>
  );
};


