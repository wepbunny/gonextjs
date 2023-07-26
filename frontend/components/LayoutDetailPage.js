import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ProductDetail from './ProductDetail';
import Footer from './Footer';

const LayoutDetailPage = ({ product }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <ImageSlider />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
};

export default LayoutDetailPage;
