import React from 'react';
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.ID} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <p className="text-lg font-bold">${product.price}</p>
            <Link href={`/products/${product.ID}`} passHref>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
