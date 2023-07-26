import React from 'react';
import Layout from '../components/Layout';

const Home = ({ products }) => {
  // Log information on the client-side
  return (
    <Layout products={products} />
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('http://backend:8080/api/products');
    const data = await res.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [], // or handle the error as needed
      },
    };
  }
}
 


export default Home;

