import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ProductList from './ProductList';
import Footer from './Footer';

const Layout = ({ products }) => {
  return (
    <div>
      <Header products={products} />
      <Navbar />
      <ImageSlider />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default Layout;
