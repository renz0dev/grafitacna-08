import React from 'react';

type PriceDisplayProps = {
  currentPrice: number;
  originalPrice?: number;
}

export function PriceDisplay({ currentPrice, originalPrice }: PriceDisplayProps) {
  return (
    <div className="space-y-2">
      {originalPrice && (
        <span className="text-gray-500 line-through block">
          S/{originalPrice.toFixed(2)}
        </span>
      )}
      <span className="text-3xl font-bold text-blue-600">
        S/{currentPrice.toFixed(2)}
      </span>
    </div>
  );
}