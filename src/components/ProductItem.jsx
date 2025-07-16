import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedModalDemo } from '../components/ui/AnimatedModalDemo';

const ProductItem = ({ id, image, name, price, stock, sku }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);   

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col font-[Itim]">
      <div className="relative aspect-square mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-110 transition ease-in-out"
        />
      </div>
      <h3 className="text-sm font-medium mb-2">{name}</h3>
      <p className="text-sm text-green-600 mb-2">
        {stock > 0 ? 'Stock disponible' : 'Sin stock' || "No especificado"}
      </p>
      <div className="flex items-center mb-2">
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">PRECIO</span>
        <span className="font-bold">S/ {price}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">SKU: {sku || "N/A"}</p>
      <Link to={`/product/${id}`}>
        <AnimatedModalDemo/>
      </Link>
    </div>
  );
};

export default ProductItem;
