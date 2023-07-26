import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <main class="bg-gray-200 py-10">
      <div class="container mx-auto min-h-screen">
        <div class="flex flex-wrap -mx-4">
          <div class="lg:w-1/3 px-4 mb-4 min-h-75">
            <img src={product.image} alt={product.name} class="rounded-lg max-h-80"/>     
          </div>
          <div class="lg:w-2/3 px-4 mb-4">
            <h2 class="text-lg font-bold my-2">{product.name}</h2>
            <div class="mt-5">
              <span class="text-2xl font-bold text-red-500">Deal Price: Rs.{product.price}</span>
              <div class="mt-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" role="button">Buy Now</button>
            </div>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <h2 class="text-xl font-bold my-2">Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
