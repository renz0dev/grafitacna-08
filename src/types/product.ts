export type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    brand: string;
    category: string;
    description: string;
    specifications: Record<string, string>;
    imageUrl: string;
    sku: string;
  }