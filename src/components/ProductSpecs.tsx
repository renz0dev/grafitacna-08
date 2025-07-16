import React from 'react';

type ProductSpecsProps = {
  specifications: Record<string, string>;
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Especificación</h3>
      <div className="space-y-4">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-600">{key}:</span>
            <span className="ml-2 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}