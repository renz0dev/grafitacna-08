import React from 'react';

type ProductImageProps = {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto object-contain"
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
}