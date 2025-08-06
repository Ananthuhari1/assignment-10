import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500 mb-2">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
