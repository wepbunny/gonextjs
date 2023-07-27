import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <main className="bg-gray-200 py-10">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/3 px-4 mb-4 min-h-75">
            <img src={product.image} alt={product.name} className="rounded-lg max-h-80"/>     
          </div>
          <div className="lg:w-2/3 px-4 mb-4">
            <h2 className="text-lg font-bold my-2">{product.name}</h2>
            <div className="mt-5">
              <span className="text-2xl font-bold text-red-500">Deal Price: Rs.{product.price}</span>
              <div className="mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" role="button">Buy Now</button>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold my-2">Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
